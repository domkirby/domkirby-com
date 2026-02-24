---
title: "Passkeys in Authenticator are Generally Available!"
date: 2024-11-19
categories: 
  - "cybersecurity"
tags: 
  - "entra"
  - "fido2"
  - "ignite-2024"
  - "passkey"
coverImage: "passkeys-ms-auth-live.jpg"
---

Awhile back, Microsoft released a preview of **soft Passkeys in Microsoft Authenticator**. At its core, this feature delivers a [cross-device authentication](https://passkeys.dev/docs/reference/terms/#cross-device-authentication-cda:~:text=Management%20Spec%20Reference-,Cross%2DDevice%20Authentication,-\(CDA\)%23) FIDO credential, encapsulated securely within the Microsoft Authenticator app, bound to the device on which it's created. Now, this feature is finally moving to general availability!

## Why do Passkeys matter?

One of the biggest hurdles to implementing [FIDO](https://fidoalliance.org/) authentication is the physical security key. For privileged accounts or high-stakes environments, I recommend hardware security keys all day long. However, the fact of the matter is that people are going to lose physical security keys. Therefore you need a backup, so your users need **two** security keys. This doubles the cost of your implementation. As such, security keys are often limited to said high stakes or privileged situations for many (except us nerds who use them _everywhere we can_).

That's where [**Passkeys**](https://domkirby.com/blog/passkeys-passwordless-adoption/) come in. Passkeys take the same concept of authentication via asymmetric cryptography and put it on your smartphone as a soft token. That means that through a combination of BLE and some other magic ([Cross-Device Authentication](https://fidoalliance.org/passkeys/)), and put it on a device that people almost **never** lose. Passkeys, in my opinion, close the strong-authentication gap that existed when we only had physical security keys in play.

## Get Started

Rolling Passkeys in Authenticator out is relatively simple. Check out [this Microsoft Learn article](https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-enable-authenticator-passkey) to get going. However, there are a couple of things to keep in mind if you have physical security keys out there today:

- You **must** enforce attestation in your security key policy. This should be a non-issue for most, as basically all certified FIDO keys can do this (i.e. they have an AAGUID)
- You **must** know the AAGUIDs of your security keys. During the enablement process, you'll be whitelisting AAGUIDs (including the MS Authenticator AAGUIDs). As such, you need to also add the AAGUIDs of the hardware security keys that are in play within your environment. If you're using Yubikeys, you can find a nice list of those [here](https://support.yubico.com/hc/en-us/articles/360016648959-YubiKey-Hardware-FIDO2-AAGUIDs). If not, check your manufacturer's website.
- End users must be running Android 14 or newer or iOS 17 or newer, as those operating systems introduce support for multiple Passkey providers. This is also the magic that drives support for 1Password passkeys on mobile.
