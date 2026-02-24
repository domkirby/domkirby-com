---
title: "Yes – You Should Consider BitLocker PINs"
date: 2025-10-02
categories: 
  - "cybersecurity"
tags: 
  - "bitlocker"
  - "encryption"
  - "windows"
coverImage: "ai-person-using-locked-laptop.png"
---

In case you don’t know, BitLocker is the disk encryption feature within Windows (including Windows Client and Server). Its job, in a nutshell, is to manage key material to encrypt _volumes,_ including your boot volume. In 2025, there simply is not a reason or excuse to not encrypt at least your workstations. This adds a significant layer of protection (encryption) to the data stored on your devices at almost no performance cost on modern workstations. However, **encryption without user authentication is like a safe that open automatically for anyone that picks it up.**

All that said, BitLocker has a couple of ways in which it manages access to encrypted volumes. In this article, we’ll talk about Trusted Platform Module (TPM) and pre-boot PINs. In many deployments, “TPM Only” protection is used. This means that the key used to encrypt your data (the volume master key or VMK) is “sealed” inside the physical TPM chip on the device. In TPM only mode, it is unlocked after the integrity of the hardware is confirmed. This is done by verifying things such as:

- Secure Boot/Boot Manager: The integrity of your bootloader and secure boot policy.
- Firmware State: UEFI firmware code and settings are measured (version, secure boot settings, etc.).
- OS Loader: The Windows loader is integrity checked.
- Other stuff: Depending on the device, other things may be checked such as system components or option ROMs.

All of this is measured using what we call Platform Configuration Registers (PCRs). These PCRs serve as measurements that are signed and memorized by the TPM. The VMK will not be unlocked if any of these PCRs are in an unexpected state.

This means that **TPM-only mode checks that the _machine_ looks right but never checks that the _person_ is right.**

For stationary devices, such as desktops, this may be okay. The device is likely kept in a secure space accessible to authorized personnel. However, the story changes on portable devices like laptops.

## Portable Devices Have Their Own Threat Model

Technically, all devices are subject to certain types of attacks, but a portable device increases the likelihood of them.

### Loss or Theft

People lose things. Bad people steal things. That’s life, we all know this. Disk encryption is the difference between incident and breach in many respects. Encrypted data is useless to me unless I can decrypt it.

### Evil Maid Attacks

These aren’t very common but are still a thing. An Evil Maid attack occurs when someone with temporary access such as a hotel housekeeper (get it), sketchy airport security, or someone in a shared office attempts to implant malware or extract encryption material from a device. In more extreme cases, vulnerabilities crop up from time to time that allow bootloader manipulation without changing PCR values, rendering the TPM protection insufficient.

### Cold Boot and DMA Attacks

Without a PIN, in some scenarios, encryption keys may be recoverable from RAM via direct memory access such as vulnerable Thunderbolt of PCIe interfaces. A PIN forces full power-off encryption until a user authenticates, which means no key material is unlocked/unsealed.

### Insider or Supply-Chain Threats

This may sound “James Bond,” but it may not be. Your supply chain may include a repair depot. The person replacing the keyboard in your laptop may not be trustworthy and could carry out the attacks while the device is in their possession.

### Legal or Border Inspection Risk

If you have travelers heading to some less than desirable jurisdictions, they may seize laptops and inspect volatile data. While “shutdown on travel” is still essential, a pre-boot PIN makes it dramatically harder to get at any data at all (save for court orders and such, _way_ outside my realm).

### Vulnerabilities

With TPM only, we head straight to Winlogon (the Windows login experience). While rare, there is occasionally a vulnerability that allows us to mess around in Winlogon to get access to data or even bypass authentication.

**Note:** This is less prevalent in modern versions of Windows, but not nonexistent.

## What a Pre-Boot PIN Adds

Before we dive into benefits, I should note that the configuration we’re talking about is called “TPM and PIN.” This means that the TPM still does all the wonderful and important things it does to verify a boot environment. In addition to that, a user must present a valid PIN before a key is unsealed.

Here’s what you gain when you add this simple extra step.

### _User_ Authentication

While the TPM makes sure the boot environment looks right, adding the PIN helps ensure the user who is booting is supposed to be... booting. Without a PIN, the device lets anyone in who can muster the strength to hit the power button. The PIN adds an actual lock.

### Brute Force Protection

Modern Windows Hello has reduced this threat model a lot. Too many Hello PIN failures will lock the TPM, requiring use of a BitLocker recovery key to boot. However, a PIN adds pre-boot brute force protection. BitLocker’s bootloader automatically throttles PIN entry and will fall back to recovery key. This **dramatically** slows down attackers or other nefarious humans.

### Extra Protection from Silent Attacks EDR Can’t See

Guess what, your EDR is a Windows application! The environment we’re protecting here is a pre-boot environment. We’re dealing with firmware an UEFI that your EDR can’t see. Adding a PIN prevents this environment from being unlocked without proof of identity.

## A PIN is a Big Security Gain with a Small Convenience Tradeoff

In modern computing, the pre-boot PIN really is protecting from edgier cases. Border crossing problems, Evil Maid attacks, and the like aren’t super common in the modern world. However, using a PIN is a simple and minimally invasive way to make your devices _that much more secure_. Why not roll them out for portable devices?

### Back PINs up with Policies and User Behavior

In addition to PINs, you should consider some other policies. Did you know that when your PC “sleeps,” the system state and encryption keys are still in RAM? This leaves it open to DMA and memory extraction attacks. PIN or no PIN, your policy should stipulate that users shut their PC all the way down (or hibernate it) at the end of the day, when moving about, and especially when crossing a border or security checkpoint. If you roll out pre-boot PINs but only sleep the laptop, you’re leaving a back door open.

### Helpdesk Burden

This may be your number one concern. Helpdesk calls for lost PINs are annoying. If a user loses their PIN, they must fall back to the BitLocker recovery key. If your devices are Entra Joined and Intune managed, they have access to their own keys (after authenticating) through the Company Portal site or app on their phone. I recommend training users on how to recover their own key (you can even customize the recovery message with a short link to instructions).

### PIN Fatigue

Another issue I’ve heard about is “PIN fatigue.” After I enter my pre-boot PIN, I still have to enter my Hello PIN (or use the fingerprint/face scan). However, it’s important to remember that most users will meet their pre-boot PIN once per day. Still a small tradeoff.

## Recap: BitLocker Protection Modes (and user Behavior)

| **Feature / Threat** | **TPM Only** | **TPM + PIN** | **TPM + PIN + Hibernate/Shutdown** |
| --- | --- | --- | --- |
| **Boot Integrity Check** | ✅ Verified (firmware, bootloader, OS loader via PCRs) | ✅ Verified | ✅ Verified |
| **User Authentication at Boot** | ❌ None (anyone can power on) | ✅ Requires PIN | ✅ Requires PIN |
| **Protection Against Lost/Stolen Laptop** | ⚠️ Moderate — attacker can power on device | ✅ Strong — attacker needs PIN | ✅ Strong — attacker needs PIN |
| **Evil Maid / Supply Chain Attacks** | ⚠️ Limited — TPM can be tricked in edge cases | ✅ Harder — PIN needed to unseal | ✅ Harder — PIN needed, plus locked keys after shutdown |
| **Cold Boot / DMA Attacks** | ❌ Keys may remain in RAM after sleep | ⚠️ Reduced risk, but still exposed if left in sleep | ✅ Keys cleared from RAM, drive re-locked |
| **Border / Legal Inspections** | ❌ If device is powered on, data accessible | ⚠️ Safer, but still depends on state (sleep vs shutdown) | ✅ Safest — device fully locked, requires PIN |
| **Helpdesk / Usability** | ✅ Easiest (no PIN) | ⚠️ Minimal extra step (PIN once per boot) | ⚠️ Minimal extra step + users must shutdown/hibernate |
| **Overall Risk Posture** | **Lowest Security** | **Strong Security** | **Strongest Security** |

 

## Conclusion

I love small security measures that give big gains, and a BitLocker pre-boot PIN is exactly that. You’re making it much harder for threat actors to threat act for a small convenience tradeoff that is easy to train on, and self-serviceable when something goes wrong. If you manage a fleet of laptops, pre0boot PINs are one of the fasters, lowest-cost ways to harden your security posture.
