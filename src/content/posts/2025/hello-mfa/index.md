---
title: "Windows Hello IS MFA"
date: 2025-09-23
categories: 
  - "cybersecurity"
tags: 
  - "fido"
  - "mfa"
  - "webauthn"
  - "windows-hello"
coverImage: "feat-image-secure-worker.png"
---

There’s a long-standing debate sort of storming the security community that seems to refuse to die: **is Windows Hello, Apple Touch ID, or Android’s credentialing option enough to constitute multi-factor authentication**. Every time I think the debate is dead, it seems to come screaming back. A recent post from [Joseph McMahon](https://www.linkedin.com/posts/itsjoemac_nist-special-publication-800-63b-activity-7374911205754294272-Dbqr) inspired me to weigh in. **TL; DR:** **YES**, any of these constitute multi-factor authentication. But let’s dive into WHY it constitutes MFA.

## Key Evidence: Digital Identity Guidelines

NIST Special Publication [800-63 Version 4](https://pages.nist.gov/800-63-4/) (Digital Identity Guidelines) is an authoritative document used by the Federal Government in the US and, by extension, various different compliance frameworks and general cyber hygiene concepts relation to authentication and digital identity. In the UK, there is a similar set of standards called UK Digital Identity and Attributes Trust Framework (DIATF) & Good Practice Guide 45 (GPG45). Other jurisdictions have these too (eIDAS in the EU, etc.). For the sake of this article, we’ll stick with the NIST variant.

## 800-63B (Authentication & Authenticator Management)

This part of the NIST SP speaks specifically to _how we authenticate users_ and _types of authenticators_ we use to do so. Conveniently, it breaks down three “Authentication Assurance Levels” (AALs for short):

- **AAL1 (basic confidence):** Basic single factor authentication (usually username and password). Wholly unacceptable in today’s world, but it still exists.
    - _From the doc: AAL1 requires either single-factor or multi-factor authentication using a wide range of available authentication technologies. Verifiers **SHOULD** make multi-factor authentication options available at AAL1 and encourage their use._
- **AAL2 (high confidence):** AAL2 steps into multi-factor authentication **either through a single multi-factor authenticator or multiple single-factor authenticators**. Verifiers (the one verifying a user) **SHALL** offer at least one phishing-resistant authentication factor.
    - _From the doc: At AAL2, authentication SHALL use either a multi-factor authenticator or a combination of two separate authentication factors. A multi-factor authenticator requires two factors to execute a single authentication event, such as a cryptographically secure device with an integrated biometric sensor that is required to activate the device..._
- **AAL3 (very high confidence):** Level three requires hardware-based cryptographic authenticators with non-exportable keys.
    - _Authentication at AAL3 is based on the proof of possession of a key through the use of a cryptographic protocol along with either an activation factor or a password. AAL3 authentication requires the use of a cryptographic authenticator with a non-exportable private key that provides phishing resistance. Approved cryptographic techniques are required._

You can use [_this link_](https://pages.nist.gov/800-63-4/sp800-63b.html#AAL_SEC4) to scroll to the part of the doc that dives into this wonderful world of AALs.

## Authenticators

That was a lot of talk about _Authenticators_. What are those things? Put simply, they are the very precise definition of _things_ you can use to verify a user. Read [section 3](https://pages.nist.gov/800-63-4/sp800-63b.html#AAL_SEC5), it’s a real page turner! Let’s pick a couple of examples for those of us that don’t want to read NIST SPs word-for-word:

- Passwords ([1.1](https://pages.nist.gov/800-63-4/sp800-63b.html#password)). Self-explanatory, the original and now relatively useless authenticator in today’s phishable world. However, check out section [3.1.1.2](https://pages.nist.gov/800-63-4/sp800-63b.html#passwordver). It tells us a lot of things, like providers **SHALL** require passwords that are at least 15 characters and set a maximum length of at least 64. It says we **SHOULD** accept _all printing ASCII characters_ and **SHOULD** accept Unicode (🔒) characters. It also tells us things we **SHALL NOT** do:
    - _Verifiers and CSPs **SHALL NOT require subscribers to change passwords periodically**. However, verifiers SHALL force a change if there is evidence that the authenticator has been compromised._
    - _Verifiers and CSPs **SHALL NOT** permit the subscriber to store a hint…_
    - _Verifiers and CSPs **SHALL NOT** prompt subscribers to use knowledge-based authentication (KBA) (e.g., “What was the name of your first pet?”) or security questions when choosing passwords._
- You should also check out [1.3](https://pages.nist.gov/800-63-4/sp800-63b.html#out-of-band) where out-of-band devices including push and pull notifications happen and exactly how they should happen.
- **However,** we’re most interested in [1.6](https://pages.nist.gov/800-63-4/sp800-63b.html#sfc) and [3.1.7](https://pages.nist.gov/800-63-4/sp800-63b.html#mfc).
    - 1.6: Single Factor Cryptographic Authentication: Single-factor cryptographic authentication proves identity by demonstrating control of a cryptographic key that produces a signed message. AAL3 requires public-key cryptography and hardware-protected key storage to prevent compromise.
    - 1.7: Multi-factor cryptographic authentication combines possession of a cryptographic key ("something you have") with an activation factor like a PIN or biometric ("something you know/are") to produce a signed message. AAL3 requires public-key cryptography and hardware-protected key storage to prevent compromise even if the verifier is breached.
- Finally, check out 3.2.5 to learn about phishing resistance: It requires cryptographic authentication that **binds responses to specific sessions or verifiers** - manual entry authenticators like **OTP codes are not phishing-resistant** because they can be relayed to attackers. Similarly, **push notifications are not phishing resistant** because the authenticator is **not bound to a session**.

## Let’s Check Out Windows Hello, FaceID, and Android’s Biometrics

### Windows Hello

Windows Hello is based on cryptographic keys (either PKI or independent keypairs like passkeys) that are _managed on the TPM chip_ and _require an activation factor such as face, fingerprint, or PIN_. Both of these things must exist for the authenticator to work. It is also **session and verifier bound** because it will only allow authentication to the original relying party endpoint (typically by domain like WebAuthn).

**_NOTE:_** _Hello for Business is required for enterprise-grade phishing resistance, consumer Hello with just a local account may not meet the same threshold._

### FaceID

On your Mac or iPhone, FaceID (when using passkeys) uses a cryptographic keypair that is _stored on the Secure Enclave_ _and requires an activation factor_ (your face). They are also **session and verifier bound**.

### Android Biometrics

On most modern Android devices, this offers storage of a _cryptographic keypair_ on either a _hardware security module or trusted execution environment (such as Knox on Samsung devices)_. They require an _activation factor (said biometric) and **are session and verifier bound**_**.**

**_NOTE:_** _The Android ecosystem is vast, so some lower-end devices are not going to actually meet cryptographic standards. Any modern, flagship model will, however. FIPS validation is more complicated, check your devices manufacturer._

**All** of these authenticators meet _at least_ the requirements of AAL2 on their own as a multi-factor cryptographic authenticators as defined in [3.1.7.1](https://pages.nist.gov/800-63-4/sp800-63b.html#mfca). Whether they meet AAL3 is debatable, but that’s not the core idea.

## AAL2 Is Your Sweet Spot

For the broad majority of organizations, AAL2, _with a phishing resistant factor,_ is the ideal middle-ground for secure authentication. Authenticating a user _to their operating system and services_ with _possession_ of a piece of hardware (like a TPM or Secure Enclave) and the _activation factor_ (Face, PIN, etc.) constitutes an authentication at Assurance Level 2. Theft of a device (barring serious vulnerabilities) _does not_ grant an attacker access. Knowledge of a PIN does not do anything for an attacker, because the PIN is an _activation factor_ bound to the cryptographic authenticator.

## AAL3 With Confidence

Assurance Level 3, for me at least, is ideal for _administrative_ or _highly sensitive_ workloads. For example, in my own Entra implementations, access to administrative portals requires a **physical FIDO key** through [authentication strengths](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-strengths), Windows Hello is not enough. This gives added piece of mind and requires true intent to perform administrative work.

I have a high degree of confidence in giving AAL3 (in a nonfederal context at least) to something like a YubiKey because a hardware authenticator:

- **Is Multi-Factor:** Possession of device + PIN or biometric
- **Is Phishing Resistant:** WebAuthn handles this natively by binding the credential to the RP domain.
- **Uses public key cryptography**: RSA2048+ or EC P-256+
- **Uses non-exportable private keys** (keys generated and stored in secure element)
- **Requires Intent:** I have to touch the key for it to perform the cryptographic action.
- **Can be verified via AAGUID verification** (confirm authenticator model through attestation)

So, if you need AAL3 into a particular system, a physical FIDO key will save you a lot of PKI headaches!

_Note: In federal systems, you’ll need a FIPS-validated key. Yubico and others offer these, and relying parties can enforce this through the aforementioned attestation. The Army is_ [_actually using FIDO keys_](https://www.yubico.com/resource/modern-authentication-for-the-army/) _for some unclass/NIPR systems._

## Pseudo-AAL3: Microsoft Authenticator

Microsoft Authenticator now supports device-bound passkeys, non-syncable authenticators that turn your phone into the security key. The key stays in the secure enclave, requires biometric unlock and user intent, and is still session-bound. While there’s debate over whether this truly reaches AAL3 due to FIPS validation, it’s a very strong authenticator and an excellent way to give users a portable, phishing-resistant MFA option.

## Where PKI Comes in To Play

The federal government uses PKI because it’s deeply woven into its infrastructure and allows for cross-agency trust via mechanisms like the Federal Bridge CA. PKI also has one big advantage: it can **bind Identity Assurance Level (IAL) to Authentication Assurance Level (AAL)**. When the DoD issues a Common Access Card (CAC), you know the person has been identity-proofed to IAL3, that level of assurance is critical for defense and federal systems.

For most organizations, though, PKI is heavy. You can achieve nearly the same security posture using phishing-resistant authenticators like **Windows Hello for Business** or **FIDO2 keys**, without managing certificate lifecycles, CRLs, or trust stores. PKI is still worth it in highly regulated environments or when you need cross-organizational trust at scale, but for everyday enterprise workloads, a FIDO key (or Hello) is usually the simpler, faster way to get to AAL2 or AAL3 assurance.

## “Device Multifactor” is Wholly Unnecessary

With the exception of “dealing with that crusty auditor,” you simply don’t need “device multifactor.” To Joseph’s point, it’s largely a marketing play. When you boot your machine, you are authenticating **to the system on the hardware (the OS)**. You are doing so with a _multi-factor cryptographic authenticator_ (the TPM or Enclave + the PIN, Face, etc.). Unless your threat model seriously consists of a high likelihood of a sophisticated threat actor both stealing your device and having the capacity to perform advanced tampering, let it be.

_Side note: If you really want or need device multifactor, consider enforcing the use of Security Keys on Windows Devices. Yes, you can do that on Entra Joined/Intune Managed devices! This gets past the sheer annoyance of needed to wait for a push or enter an OTP._

## Quick Review

| **Authenticator** | **Factors Combined** | **AAL Level** | **Phishing-Resistant?** |
| --- | --- | --- | --- |
| Password + OTP or Push Notifications | Knowledge + Possession | AAL2 | ❌ |
| Windows Hello / FaceID / Android Biometrics | Possession + PIN/Biometric | AAL2 | ✅ |
| Microsoft Authenticator (device-bound passkey) | Possession + Biometric | AAL2–AAL3 | ✅ |
| FIDO2 Security Key | Possession + PIN/Biometric | AAL3 | ✅ |

## Summary (and Takeaways for MSPs)

At the end of the day, Windows Hello, Apple FaceID/TouchID, and modern Android biometrics **are** multi-factor authenticators. They combine a hardware-bound cryptographic key (“something you have”) with an activation factor like a PIN or biometric (“something you know/are”), and they are bound to the session and relying party, making them phishing-resistant.

### **Key Takeaways**

- **Yes, Hello = MFA** – Windows Hello for Business (and its Apple/Android equivalents) meet NIST’s definition of multi-factor cryptographic authentication (AAL2),
- **AAL2 Is the Practical Target** – For most businesses, phishing-resistant AAL2 is the right balance of security and usability,
- **Reserve AAL3 for High-Risk Workloads** – Use FIDO2 security keys for admin access, privileged accounts, and highly sensitive systems,
- **Skip the “Device MFA” Gimmick** – Logging into a TPM/Enclave-protected device with PIN or biometric is already MFA, there is no need to layer on unnecessary secondary factors unless your threat model demands it,
- **PKI Is Niche Outside Gov** – Unless you are in a federally regulated environment or need cross-org trust, skip the PKI complexity and use Hello or FIDO keys instead,

### **What MSPs Should Do**

- **Enable Windows Hello for Business (or platform equivalent)** across managed tenants,
- **Block password-only authentication** wherever possible, driving users toward phishing-resistant options,
- **Deploy step-up FIDO key requirements** for admin portals, privileged accounts, or sensitive line-of-business apps,
- **Educate users** that PIN + biometric is not “just a PIN,” it is strong MFA backed by cryptographic protection,

**Document it for auditors** so you can clearly demonstrate that Hello meets MFA requirements under NIST 800-63B,
