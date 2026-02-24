---
title: "I Moved to 1Password"
date: 2023-03-01
categories: 
  - "cybersecurity"
tags: 
  - "1password"
  - "password-manager"
coverImage: "1password-8.png"
---

\[box\] Everyone is responsible for their own security. Me liking a product is not an endorsement of how secure it will be for you. Security is never 100%\[/box\]

Some time ago, I shared on LinkedIn that I had decided to tinker with [1Password](https://1password.com/), so I thought I would drop an update about it. As many will know, I'd been using [Bitwarden](https://bitwarden.com/) for quite some time. I originally came to Bitwarden because I was attracted to its simplicity and open-source model. And, to be honest, I still think Bitwarden is a fantastic product and it isn't a bad choice if you're in the password manager market. However, **I've decided to fully move to 1Password**. Let's talk about why.

## Security

Bitwarden is a secure product, I don't doubt that for a second. However, for me, I wanted something more.

### Encryption and Key Derivation

Like many password manager products, 1Password extrudes your master password using [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2) with a lot of rounds (nerdy bit: 650,000 rounds of PBKDF2-HMAC-SHA256). Encryption is done via AES256 in GCM mode, which is an authenticated block cypher. The _authenticated_ part is important as it protects against tampering of the ciphertext.

However, what really put things over the top (encryption wise) for me was 1Password's [**secret key**](https://support.1password.com/secret-key-security/). The Secret Key is a randomly generated (by way of [CSPRNG](https://en.wikipedia.org/wiki/Cryptographically_secure_pseudorandom_number_generator)) 128-bit key that is _blended with your master password_ to form a cryptographic key. You need this key, **and** your master password to access your data. The key is securely cached by the 1Password clients and is backed up using their emergency kit methodology (I've also stored mine in certain creative ways).

The secret key is fantastic because it's **random**. It solves for one of the biggest pitfalls of a password manager, very few people make **random** passwords (not to brag, but my master password is indeed randomly generated and memorized). This randomness is important because patterned passwords are easier to crack. By sprinkling in 128 random bits, cracking the encryption becomes a seriously tremendous task.

### Authentication

1Password has also taken a really neat approach to authentication. In most traditional authentication scenarios, a secret crosses the network (although FIDO2 and Passkeys are a huge solve for this). Password managers, historically, have solved for this like so:

- Client takes in master password
- Client runs PBKDF2 and hashing functions _locally_
- Client sends expanded material to server
- Server hashes it again and compares it to a stored hash

1Password has gone a completely different route, and I'm a fan of it! Instead of having secrets cross the network, 1Password uses [secure remote password](https://support.1password.com/secure-remote-password/) (SRP). Without getting too [nerdy](https://en.wikipedia.org/wiki/Secure_Remote_Password_protocol), SRP is a protocol based on public key cryptography. The oversimplified explanation is a simple cryptographic handshake. Client and server both do big math and arrive at the same expected value, and authentication is done. At the end of the day, hashed or not, the secrets never cross the network, just nonces. In addition, this achieves **mutual authentication of the client and server.** With SRP in place, it's **far more difficult** to impersonate the server.

### Watchtower

The 1Password Watchtower is another great feature, though most password managers have this. It brings password reuse, lack of MFA, and weak passwords to your attention (and helps you correct them). It also has a fun score, which adds a little bit of gamification to living a more secure life.

### A Critique

Nothing's perfect. One thing I noticed was difficulty setting up MFA. In 2023, I **really** want password managers to be in your face about setting up strong MFA. It took me some 5 clicks to get to the MFA setup area and enable it.

Now, one could argue that the added secret key being only on the device is a flavor of MFA. However, I would disagree with that person, I really want MFA. Nonetheless, I was able to setup my Yubikey for FIDO MFA.

## User Experience

1Password has done a great job from a user experience standpoint. My family account is shared with my wife and my oldest kid (and eventually all of them). Therefore, it needs to be intuitive and easy to use. I've found the desktop client, browser extensions, and Android app to be really reliable and easy to interact with. In fact, this is where they start to have Bitwarden really beat in my opinion. I found the Android App in particular to be very reliable and far more integrated.

The desktop app is smooth and well thought out. It puts the things you need in your face, but has the things you're probably going to want. Also, although I haven't used it, I've heard incredible things about the multi-account experience with the 1Password apps.

Here are a few more things I like:

- Easily customizable fields and section in stored items
- Intuitive payment method management
- Integrated use of stored SSH keys with SSH clients
- Tags that carry across vaults for an additional way to filter your data
- Intuitive sharing both with other 1Password users and via links

One final piece to touch on (that I've used at least) is the concept of separate Vaults. Each Vault has a collection of items and has their own sharing settings. So for example, our "Mom and Dad" vault has credentials my wife and I share. I can also have a separate vault that my wife, my oldest kiddo, and myself share without him suddenly getting access to our parental accounts.

## Conclusion

So far, I've been very happy with 1Password. Choosing a password manager is an important choice, and you should choose the product that fits your needs. That said, I think 1Password is definitely worth a look.

_Featured Image sourced from 1Password.com. This content is not sponsored by any products or companies._
