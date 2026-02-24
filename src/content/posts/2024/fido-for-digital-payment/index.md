---
title: "Can Payments take a Page from the FIDO book?"
date: 2024-08-24
categories: 
  - "cybersecurity"
coverImage: "Public-Key-Payments-Process.png"
---

Payment card fraud is as old as payment cards themselves. First, we used embossed cards and phone calls in the clear to process payments. Then, we had to trust service staff to take our cards away from us to process them. The majority of them were just doing their jobs, but a few bad apples created a problem. And of course, magstripes are a huge problem. They'll spit out your account information anywhere, including into a cleverly placed skimmer or reader. The adoption of EMV chip cards helped the skimmer problem precisely zero, because of the asinine pressure to maintain backward compatibility with inferior technology. And then there's **online payments**, where we _still_ find ourselves storing our financial secrets all nimbly bimbly from server to server. There has to be a better way.

Our [recent episode of The Game](https://www.youtube.com/watch?v=TzaeO4GHNcU) triggered an epiphany for me. **We might have the answer in front of us.**

## We Need to STOP Passing Secrets

A key problem with authentication is very much a shared problem with payment processing. Legacy methods rely on the passing of secrets from the subscriber to the service. Whether that's a password or account number, that secret is **reusable** and thus inherently represents a **vulnerability** in the authentication chain.

Modern authentication methods like FIDO keys, Passkeys, and certificates eliminate the need for a secret to cross the network. Instead, they leverage public-key cryptography to pass a cryptographically signed nonce (number used once) back to the relying party. The relying party uses the subscriber's **public key** to validate that signature. At no point in time does the **private key** leave the subscriber's hardware, let alone cross the network. This means that, even if I AITM attack the authentication payload, I get nothing of use. By the time I try to use that information, it's already been burned.

## Conveniently, Cryptography Operations are Easier than Ever

In the elder days of cryptography, things were different. RSA is a fantastic mechanism and will be for some time. However, it's computationally expensive and space intensive compared to alternatives. A minimum viable RSA public key for most purposes is 2,048 bits long (2 kibibits). That's an insanely small amount of storage, until you have 100 million subscribers, each with multiple keys, and need to distribute that data in real time at global scale. Additionally, each cryptographic operation requires parsing over then entire 2,048 bit key.

Nowadays, we can leverage Elliptic Curve Cryptography (ECC). With ECC, we can use a much smaller 256-bit key and yield equivalent security to a 3,072 bit RSA key. This makes the keys both cheaper to store and cheaper to compute against. It also makes it more tenable to issue multiple keys to one subscriber, which is a **key detail of my epiphany**.

## Enter Public Key _Authorization_

The FIDO alliance has paved the way for broad adoption of public-key _authentication_. Could the same concept be applied to public key _authorization_? In this case, authorization of payments? Here's my thought in a nutshell:

### Identification

- Each customer at a financial institution would have an immutable ID. A UUID/GUID is a good choice here. There are about 2122 possible GUID's, we aren't going to run out! This immutable ID would be tied to the accountholder for the transaction, but public knowledge of it would be useless (only the bank would know who it belongs to).
    
- Each account with which the customer can authorize payments would also have a GUID, or perhaps an index, to allow for the identification of a specific account. Again, this GUID isn't a secret as it is really only useful to the financial institution to look up an account.
    
- Financial institutions themselves, or perhaps card networks, would have a GUID or collection of GUIDs. The customer GUID, account GUID and financial institution GUID would, in combination, route the payment request to the correct place. These GUIDs would likely be public knowledge. In this fictitious example, everyone might know that "33b12aaa-38f3-4edd-aee1-79026bec654f" is a GUID belonging to Wells Fargo. It doesn't matter though, because the GUID isn't a secret. It's just an identifier.
    
- Merchants would also need an ID, also a GUID. This is so the bank knows who needs to get said money assuming the transaction is approved.
    

Using an immutable ID provides a somewhat reasonable level of confidentiality. In this model, an adversary could intercept a payment authorization but would only know that customer 3ba41817-209a-4fc2-8ec2-bc6d19c3a7d9 wants to use account 312c0a1b-492c-4ab7-b276-51f8aeb94930 at bank 33b12aaa-38f3-4edd-aee1-79026bec654f (which he may very well know is Wells Fargo) to pay merchant 7d30c66b-376d-40da-9c2c-d89dd3ceb709 $112.32 in USD. In practice, there would probably be a transaction nonce used to prevent replay attacks. They would also have some form of a signed hash, but it would take them far more time than it's worth to get a key out of that.

Unless the adversary also somehow stole the GUID list from the bank, which would be a larger issue, they haven't gleaned very much useful information.

### Authentication

In this utopic payment model, we've generated some information to identify a human, their financial account, where their financial account lives, and who they are paying and how much. Out of this, an attacker can hopefully only figure out the payment amount and the bank from which the payment will be sourced. Not very helpful.

However, if there isn't some sort of _authentication_ in play, he could just change the merchant GUID to his own and replay the token. **This is where the magic of public key cryptography could come in**:

- Each subscriber at a financial institution would have one or more keypairs (perhaps 256-bit ECC keys). Each keypair would be related to one payment device, such as a card or mobile device. The bank would store the public keys and identify them by a key fingerprint. The private key would **never leave the payment device**.
    
    - When done properly, these keys would cryptographically certainly belong to the subscriber.
        
- Each merchant would also need one or more keypairs, allowing them to authenticate themselves as the one requesting the payment. They would likely publish their public keys in some discoverable format, allowing financial institutions and others to query them for validation (and also enabling frequent key rotation).
    
- Financial institutions may also have a collection of keys used to authenticate their own responses to provide assurance that a transaction was indeed approved.
    

### The Process

Okay, so let's see how this would work using Alice, who is a customer at Bob's Bank:

- When Alice gets a new payment card, or perhaps enrolls her mobile device for mobile pay, she would generate a key pair, and give the public half to Bob's Bank. Assuming Alice had authenticated herself in some trustworthy fashion, Bob's Bank would store this key and its fingerprint in Alice's record. It would be a known key for Alice for a set period of time.
    
- Alice's private key would be stored on her payment device or card, protected by either a PIN or biometric.
    
- When Alice wants to complete a transaction at a retailer, she will present her device in some form or fashion (chip contact, NFC, BLE, etc.) and receive some type of _signed_ payment request object from the retailer.
    
- In the case of a mobile device, it could present the payment request for verification. For example, the device could:
    
    - Verify the signature on the payment request by looking up the public key
        
    - Show Alice the details of the transaction she is going to authorize (amount, verified retailer, etc.)
        
    - Alice would complete her authentication, which would allow her private key to _sign_ the payment request after adding important details such as her subscriber GUID, account GUID, and financial institution GUID for Bob's Bank
        
- In the case of a plastic card, you'd miss a lot of these verification benefits. However, it could still refuse to sign the payment request until a valid PIN is presented.
    
- The merchant/terminal would receive this _signed_ payment authorization, ensure everything is still okay (e.g. the amount isn't tampered), and then encapsulate it in a payment request that is signed by the merchant and sent to Bob's Bank.
    
- Bob's Bank would receive this request and do the following:
    
    - Lookup the merchant's _public_ key and validate the signature on the payment request
        
    - Unpack Alice's signed payment request, validate the signature, make sure her account has funds, and then authorize the payment (and hopefully deduct money to send to the merchant)
        
    - Send back a _signed_ payment confirmation to the merchant
        
- The merchant would then verify the signed payment confirmation, and the transaction would conclude.
    

In an ideal implementation of this model, **a secret never crossed the network**. In fact, no party knows another party's secret. They only have each other's public keys to validate each other's messages. What's more, this would work incredibly well in offline scenarios. A merchant could store a number of payment requests, and send them to the bank in a signed batch when connectivity is available again. If those payment requests are stolen, they are utterly useless. Modifying them voids the signature, replaying them is stopped by a nonce.

And, even more on secrets, you no longer need to print account numbers on cards. You would want the person's name and branding of the financial institution. However, without the PIN, that card would be truly useful as it would refuse to use its private key to sign anything.

## Where does FIDO come in?

The FIDO alliance has arguably built the foundation for this whole thing. For example, the Passkey model could serve as a foundation for authorizing transactions from mobile devices using a private key. Instead of signing an authentication challenge, it's signing a payment request after the user authenticates. This could even be expanded to plastic cards, where the key is stored and protected on the card's integrated circuit. The mobile Passkey model has everything you need to validate user proximity, securely pass information, and ensure that a user authenticates before a signature operation can happen.

Long-story short, the FIDO model has built the beginnings of what would need to be present for "public key payments" to succeed.

## Expanding This

I've only covered terminal payments in the above example. However, again thanks to the FIDO model, this can easily be expanded online. A payment request can happen on a browser with a mobile Passkey. Recurring/subscription payments can be authorized with a signed "RecurringPaymentAuthorization" object that needs to be refreshed from time to time.

ATM authentication could happen with a signed "ATMAccessRequest" object, passing in the required details to access an account. I mean, you could even authenticate users to the bank's website with any authorized payment device using plain old FIDO2.

In every one of those scenarios, **secrets stay secret**.

Obviously, this is all an invented utopia I made up in my head. Nonetheless, I think it would be really cool if we could evolve beyond card numbers and account numbers opening the door to our entire financial life. What are your thoughts? Could digital payments ever move to a public key model?
