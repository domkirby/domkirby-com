---
title: "Are Passkeys the Answer to Passwordless Adoption?"
date: 2024-05-05
categories: 
  - "cybersecurity"
tags: 
  - "authentication"
  - "fido"
  - "passkeys"
coverImage: "Copilot-Security-Key.png"
---

In our digital age, the concept of living in a passwordless world is eagerly anticipated. It's common knowledge that passwords are a hassle – users struggle to create and remember strong passwords, and the tools meant to help, like password managers, haven't gained enough traction in the consumer realm. This has left many of us yearning for a more convenient and secure way to access our digital accounts.

## The Move Towards MFA

When we realized passwords aren't cutting it, we introduced multifactor authentication. Seems like a great solve, right? Well it is. Two types of authentication are better than one, **but there's a challenge**. Many forms of MFA are inconvenient, and almost all of them are phishable using todays attack methodologies. What's worse, some of them are borderline ineffective. Take SMS authentication, one panicky phone call to your carrier is all I need to start getting your SMS messages.

In today's threat landscape, MFA is a **bare minimum price of admission** but, I don't think it is the ultimate answer. You'll still have users making bad passwords and being phished by AITM style attacks. At the risk of being repetitive, **MFA is a bare minimum standard, not an enhancement. If you're logging in with only a username and password, you're _wrong_.**

## Passwordless Beginnings

It's important to note that Passwordless authentication isn't a new concept by any means. The first smartcard prototype came around [in the 70s](https://en.wikipedia.org/wiki/Smart_card). The DoD has been using smart cards (in the form of the Common Access Card) since 2002, largely replacing passwords on many mainstream systems.

However, these methods were and still are incredibly complex and require a lot of backend infrastructure to be done right (namely [Public Key Infrastructure](https://domkirby.com/blog/when-should-i-use-certificate-authentication/)). They are well suited for large enterprise like Microsoft or the DoD, but tough to implement for small business. From a consumer perspective, forget about it. If we were going to be passwordless, we needed a better way! Here's the progress we've made so far:

### SMS Login

I really hate this method. It's like using SMS as a second factor, except it's the only factor. I don't recommend it! In my opinion, SMS doesn't prove you have possession of the _thing you have_. It proves that you can receive a text at a given phone number, and this is highly vulnerable to attack.

### Magic Links

Ugh. Here we go again. Look, I like the intent behind magic links. Much convenience etcetera. But, again, it only proves that _I have access to a given email account_. If I steal your email credentials, you've got a big problem.

_By the way: Your email is the gateway to your digital life. Password resets almost always happen on email._ **_Lock it down_**_._

### Push Based Authentication

Okay. Now we're getting somewhere! Pushed based authentication was the first innovation where I said **yes, this is progress!** Combining possession of a connected device with the ability to unlock it (using a PIN or biometric) is a great way to establish two factors without a password. However, like anything else, it has its challenges:

- **Notification Fatigue**. This attack relies on one simple thing: humans are predictable. If you poke us enough times, we'll get annoyed and we'll want to make it stop. Push fatigue plays on this by bombarding the user with notifications until they tap "It's Me" to make it stop. Or, the threat actor calls and pretends to be the hero that can make it stop.
    - **How we addressed it:** To address this challenge, we introduced "number matching." Although sometimes it isn't always a number, number matching makes you _prove_ you're the one trying to login by making you tap or type something you see on the login screen. This pumps the brakes on notification fatigue attacks.
- **Phishability:** This authentication method is subject to AITM attacks. There are some cool things in place to prevent it, but they aren't widely adopted. Long story short, I can stand up a reverse proxy, watch your whole login, and steal your cookie.

Push based authentication represents a great step forward, but we aren't done yet!

### Today's Progress on Passwordless

There's no doubt we've come a long way in our Passwordless journey. However, we just weren't quite there yet. Everything we'd come up with was phishable, difficult to use, costly to implement, or a combination of those. We needed something new, and boy did we get it.

## The Ultimate Solution: FIDO2, WebAuthn, and Passkeys

Thankfully, people far smarter than me agreed that we have an issue. We all know passwords suck, but we also all know that they represent a universally understood credential to be used to authentication. We also know that the best standards for MFA were **open standards** such as TOTP or HOTP.

When [The FIDO Alliance](https://fidoalliance.org/) came around, they understood that developing an **open standard** was the way forward. Through several iterations, we landed on FIDO2 and WebAuthn as the foundation for modern authentication methodology. FIDO2 relies on public key cryptography, much like a smart card would, but doesn't rely on all the backend PKI infrastructure to support it. The WebAuthn iteration adds an _open standard_ for a _universally recognizable credential_ that combines identification and authentication into _one convenient step_.

### It Started with Security Keys

As FIDO2 came about, the initial focus was on **security keys**. The concept is simple. It's a physical key that communicates over USB, NFC, or Bluetooth to complete a cryptographic operation. To verify ownership, you enter a PIN or present a biometric. To verify physical presence, you physically interact with a key (such as by touching to gold disk on your Yubikey).

Security keys are great, I use my [Yubikey 5C NFC](https://www.yubico.com/product/yubikey-5-series/yubikey-5c-nfc/) on a daily basis to authenticate to my core services (including my corporate account). However, security keys carry one problem that are holding them back from mass adoption: **convenience**. Because it's a device you need to have on you, your users are going to lose it. There's also some cases of device compatibility challenges (although compatibility has dramatically improved with time).

Security keys are _my_ go to method. But I am a nerd, and I'm very careful about making sure I have my security keys on me at all times. For the broad consumer base, they are a difficult answer. I **strongly recommend** security keys for key use cases like privileged accounts and in scenarios where users can't or don't want to use their personal device for work.

_Side note: The Yubikey 5C NFC is an expensive key. I have this model because I use some of its other functionality. If you're looking for a good key just for FIDO 2, [this $29 slimmed down version](https://www.yubico.com/product/security-key-series/security-key-c-nfc-by-yubico-black/) will serve you well._

### And Then... We Got Passkeys

Passkeys are the most exciting innovation in the FIDO2 story! Passkeys take the greatness of FIDO2 and put it on your mobile device or in your password manager. Instead of having to remember your security key, you just need your phone. Who doesn't have their phone within an arms reach right now? Seriously, tag me on [LinkedIn](https://linkedin.com/in/dominickirby) or [X](https://x.com/dom_kirby) if you don't have it with you right now!

Passkeys take things that people are used to doing like logging into their phone and scanning a QR code, and turn it into Identification and Authentication! They are by far the most adoptable credential available today, while maintaining all of the benefits of FIDO2 based authentication.

### Speaking of the Benefits

Let's do a quick recap on WebAuthn/FIDO2 authentication to cover the benefits:

- **Easy to use.** FIDO2 (especially with passkeys) is the easiest authentication method to use.
- **Phishing Resistant**. Passkeys and security keys (and Windows Hello) perform _mutual authentication_. This means the authentication can't finish unless the **key trusts the server** and vice versa. This makes the currently known AITM attacks ineffective, because the authentication never finishes. No authentication, no stolen cookie.
- **No Secret Crosses the Network**. Newsflash, your users _ignore certificate warnings_. Every time. This means that a classic AITM attack is still an option (simply sniffing the traffic). When you employ FIDO, _a secret never crosses the network_. The private key is just that, private. It never leaves the authenticator device. Instead, the server knows the public key and can use it to verify the signature of the private key. Until quantum comes around for real, you aren't getting that private key (and we're likely to have quantum resistant asynchronous cryptography by then).

## Summary: Passkeys Are The Answer to Passwordless Adoption

Given the progress made on Passkeys, I'm quite confident in taking the stance that Passkeys are indeed the answer we've been looking for to help us usher in our passwordless future. Expanding support for Passkeys from [Google](https://blog.google/technology/safety-security/passkeys-default-google-accounts/), [Microsoft](https://support.microsoft.com/en-us/account-billing/signing-in-with-a-passkey-09a49a86-ca47-406c-8acc-ed0e3c852c6d), and plenty of others are expanding Passkeys into a _universally recognized_ credential.

In notable recent news, [Microsoft released a public preview](https://techcommunity.microsoft.com/t5/microsoft-entra-blog/public-preview-expanding-passkey-support-in-microsoft-entra-id/ba-p/4062702) for device-bound passkeys bundled into Microsoft Authenticator, replacing Push authentication with phishing resistant Passkeys. In even more exciting news, NIST has released a [supplemental publication](https://www.nist.gov/blogs/cybersecurity-insights/giving-nist-digital-identity-guidelines-boost-supplement-incorporating) stating that Syncable Authenticators (the type of passkeys you can store in [1Password](https://1password.com/product/passkeys) or your Google Account) should be considered to meet the requirements of Identity Assurance Level (IAL) 2, and device-bound passkeys meet IAL3.

If you're looking to go down the Passwordless route for yourself, or get your clients to go that direction, you should take a hard look at Passkeys as your ticket to success!
