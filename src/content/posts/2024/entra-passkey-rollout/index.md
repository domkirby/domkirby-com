---
title: "Ready. Set. (Entra) Passkey!"
date: 2024-11-25
categories: 
  - "cybersecurity"
  - "guides"
tags: 
  - "entra"
  - "passkeys"
  - "phishing"
coverImage: "dalle_passkey_laptop.webp"
---

Now that Passkeys are [generally available](https://domkirby.com/blog/passkeys-in-authenticator-are-generally-available/), we can start thinking of strategies to implement phishing resistant authentication in our environments! Microsoft has provided a lot of guidance on [rolling out Passkeys](https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-deploy-phishing-resistant-passwordless-authentication) in general. In this article, I'll talk through some thoughts on rolling out Passkey based authentication to small businesses.

## But First, Why?

According to the Microsoft [Digital Defense Report](https://www.microsoft.com/en-us/security/security-insider/intelligence-reports/microsoft-digital-defense-report-2024), Microsoft Security blocks around **7,000 password attacks per second**. That's 604.8 _million_ attacks per day. Those wild numbers speak to the **hard requirement to implement MFA in every organization**. However, as MFA adoption (slowly) trickles up, threat actors are threat actin'. The new kid on the block is the Adversary in The Middle (AiTM) attack, resulting in token theft. From the report:

> Although token theft results in far fewer identity compromises than password attacks, our detections indicate incidents have grown to an estimated 39,000 per day.

It is certainly of note that 39,000 attacks per day pales in comparison to nearly 605 million. However, this represents a 146% rise in AiTM phishing attacks (attacks in which a user is tricked to completing MFA on the attacker's behalf). The conclusion I've drawn is that **the trend is clear:** this new attack type will continue to grow as MFA numbers come up.

To that end, we need something more than traditional MFA. This is where **phishing-resistant authentication** comes into play, and Passkeys are at the center of that.

## Convenience AND Security in One Package

This deserves its own section. Passkeys are one of the few technologies of our time that combine _increased security_ **and** _increased convenience_. Passkey tech has been covered ad nauseum, so I'll sum it up. When you authenticate with a Passkey, no secret crosses the network. Additionally, the trust is mutual between the relying party and authenticator, making it _extremely difficult_ to perform an AiTM attack.

At the same time, Passkey authentication makes life easy when implemented properly. Instead of waiting on a push, text, or digging up a code, a user just presents their device biometric or PIN code. As Passkey adoption grows, logging in with them will become more and more familiar. With Passkeys, you can get rid of the forgot password problem altogether, and users _rarely_ forget how to login to their own phone! As such, rolling out this type of authentication will score points in both columns.

## Step 1. Understand Types of Passkeys

At the top level, there are **two** types of Passkeys:

- **Portable** Passkeys can be used across devices. You can use portable credentials to sign in to another device, or to register credentials on other devices.
    - Portable Passkeys are often the most important type of credential to register for most users, as they can be used across devices, and provide phishing-resistant authentication in many scenarios.
    - Common examples of portable Passkeys include security keys, Android/iOS Builtin Passkeys, and Microsoft Authenticator.
- **Local** Passkeys can use local credentials to authenticate on a device without needing to rely on external hardware, such as using Windows Hello for Business biometric recognition to sign into an app in Microsoft Edge browser on the same PC. Local passkeys carry two key benefits:
    - They provide a great user experience. With a local credential, users don't need to pull phones out of their pocket, scan QR codes, or perform other tasks that slow down authentication and add friction. Locally available phishing-resistant credentials help users sign in more easily on the devices they regularly use.
    - They provide redundancy. If users lose their portable device, forget it at home, or have other issues, then the local credential provides them with a backup method to continue to work on their computing device.

In this scenario, we'll talk about registering _both_ portable and local passkeys. However, you can often get by with just a local credential such as Windows Hello for Business, and using a TAP to bootstrap that credential.

### Subset: Synced vs Device-Bound

Within _portable_ Passkeys, there exists "synced' and "device-bound" Passkeys. The name implies the meaning. Synced Passkeys are Passkeys that are backed up somehow (usually to the cloud) and usable across multiple devices. These are the Passkeys you save in your [1Password](https://1password.com/product/passkeys) or iCloud Keychain. Device-bound Passkeys are bound to the hardware with which they are generated. The **cannot** be backed up, and thus are more secure because the private key never moves. Your YubiKey is a portable, device-bound Passkey. **Microsoft Authenticator Passkeys** are _device-bound,_ not synced.

## Step 2. Decide Your Bootstrapping Needs

"Bootstrapping" is simply the process of getting a user authenticated once so that they can provision their Passkey. Chances are, they will not have a pre-provisioned, phishing-resistant device on hand. The way you do this will depend on your operational capabilities and level of sensitivity. For most customers, you can likely provide a Temporary Access Pass that will allow one-time authentication, and the user can configure a _portable_ Passkey from there. However, if something more secure or assured is needed, be sure to check out some of the [**different suggestions from Microsoft** based on persona](https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-plan-persona-phishing-resistant-passwordless-authentication). For example, you could pre-provision a security key with the [FIDO2 Provisioning API](https://techcommunity.microsoft.com/blog/identity/public-preview-microsoft-entra-id-fido2-provisioning-apis/4062699). For high identity assurance, you can even use [Entra Verified ID](https://learn.microsoft.com/en-us/entra/verified-id/remote-onboarding-new-employees-id-verification) with an identity verification vendor.

However you choose to go about this, your user should authenticate themselves once with the temporary method and then enable a **portable** Passkey. The portable passkey can then be used on other devices as a bootstrap to create **local** Passkeys. It is okay, encouraged in fact, for users to have _multiple_ Passkeys. For example, Windows Hello for Business is indeed a Passkey, as is their Authenticator Passkey and perhaps their Security Key.

**Important Caveat:** Right now, only security keys can be used to authenticate to Windows with a Passkey. As such, logging on fresh to a Windows device will be tricky without a security key. As a workaround, consider enabling [_Web sign-in_](https://learn.microsoft.com/en-us/windows/security/identity-protection/web-sign-in/?tabs=intune) which allows the user to authenticate from the browser context (where any Passkey or TAP should do). From there, the user can enroll Windows Hello.

## Step 3. Configure the Entra Tenant

Microsoft has [good documentation](https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-enable-authenticator-passkey) on how to set this up. _Please_ take note of the important caveats I listed in [this article](https://domkirby.com/blog/passkeys-in-authenticator-are-generally-available/) if you already have security keys setup. Of note, you **must** add your existing security key AAGUIDs if you have security keys live in your environment today.

## Step 4. Test Users and Communications

As with most things, I strongly recommend identifying a set of test users who will get first crack at using Passkeys. Teach them how to use Passkeys, and gather their feedback to use in your broader training program. This is also the time to plan **communications**. Just like when we rolled out MFA (we did that a long ago, right?), we need to carefully communicate with our user base. Microsoft is working on some email templates that I'll be sure to share when they come out. In a nutshell, your training should have a sequence something like:

1. Introduce the concept of Passkeys, and let users know they are coming. Educate on the overall concept of Passkeys (perhaps throw in some tips on how Passkeys can be used on their personal accounts), and then Passkeys as it related to their work accounts.
2. Once a date and a roll-out process has been selected, prepare detailed and easy to follow instructions. Ideally, you want as many users to enroll **before** any sort of enforcement deadline to spread out the helpdesk calls over time.
3. Clearly communicate the date that users will _need_ to have their Passkey(s) ready by.
4. Provide white-glove support for the users that need it.

## Step 5. Enforcement

If you're going to go all-in on Passkeys, and enforce their use, you'll want to use a Conditional Access Policy. This CA policy will function similarly to your MFA Conditional Access Policy but will use the "phishing resistant" [authentication strength](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-strengths) instead of "Require MFA" controls. Depending on your environment, you may enforce Passkeys for everyone, or for a subset of sensitive user or applications.

## Step 6. Rejoice!

Well, more than likely, field helpdesk calls from users who repeatedly ignored your calls. Then, rejoice in the wonders of phishing-resistant authentication!

## Miscellaneous Tips

Realistically, you're going to hit a few snags. Here are a couple that came to mind as I was writing this:

- **Can't setup a Passkey:** Double check the AAGUIDs in your Authentication Method configuration. Also, ensure that your users are running iOS 17+ or Android 14+.
- **User doesn't want to use a personal phone:** [Security Keys](https://www.yubico.com/product/security-key-series/security-key-nfc-by-yubico-black/) were made for this moment. It would be best to budget for a few to cover for this instance.

 

_**Best of luck on your new passwordless endeavors!**_
