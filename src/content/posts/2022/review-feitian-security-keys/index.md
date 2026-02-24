---
title: "Review: FEITIAN Security Keys"
date: 2022-01-24
categories: 
  - "cybersecurity"
  - "product-reviews"
tags: 
  - "feitian"
  - "fido"
  - "security-key"
coverImage: "feitian_profile_ontop_laptop_cmp_filter-slate-scaled.jpg"
---

\[et\_pb\_section fb\_built="1" admin\_label="section" \_builder\_version="3.22" global\_colors\_info="{}"\]\[et\_pb\_row admin\_label="row" \_builder\_version="3.25" background\_size="initial" background\_position="top\_left" background\_repeat="repeat" global\_colors\_info="{}"\]\[et\_pb\_column type="4\_4" \_builder\_version="3.25" custom\_padding="|||" global\_colors\_info="{}" custom\_padding\_\_hover="|||"\]\[et\_pb\_text \_builder\_version="4.14.7" \_module\_preset="default" global\_colors\_info="{}"\]

[FEITIAN](https://domk.pro/Rt4V7O) recently reached out to me on LinkedIn and asked if I’d be willing to take a look at their security keys. As you may know, I’m a major proponent of [FIDO/U2F](https://domkirby.com/blog/why-i-love-fido2u2f/), and I’ve been a [Yubikey](https://domk.pro/DufmZt) user since it was just YOTP. That said, I was curious to check out FEITIAN’s product line. They are a FIDO Alliance member company and provide FIDO2 certified hardware options. After doing some digging, I thought that their products would definitely be worth a look. I looked at their line-card and asked for two models:

- Their K40 Security Key - a USB-C and NFC model,
- And their K45 BioPass USB-A Biometric NFC key

You can check out the FEITIAN line up on their [Amazon Store here](https://domk.pro/aNB8F4).

## First Impressions

Upon receiving these, I opened them up like an eager child who’d ordered candy. I’m a nerd for these kind of things. First off, I found a pretty cool calendar, that was a nice little added piece of merch. Getting to the keys themselves, I found the BioPass to be a very well built, aluminum body key. This was a welcome surprise, it feels very solid in the hand, like it could definitely survive a little bit of wear and tear. The K40 is also well built. While not having a full aluminum body, it did have metal edges and metal where you put a key ring, so it also seems like it’s going to last. I’d venture that the key reason for the difference revolved around the sensitivity of the biometric hardware inside the K45.

\[/et\_pb\_text\]\[et\_pb\_image src="https://domkirby.com/wp-content/uploads/2022/01/BioPass\_Profile\_shot-scaled.jpg" alt="The FEITIAN BioPass K45 Security key inserted into my Microsoft Surface Laptop" title\_text="BioPass\_Profile\_shot" show\_in\_lightbox="on" \_builder\_version="4.14.7" \_module\_preset="default" border\_radii="on|30px|30px|30px|30px" box\_shadow\_style="preset1" global\_colors\_info="{}"\]\[/et\_pb\_image\]\[et\_pb\_text \_builder\_version="4.14.7" \_module\_preset="default" global\_colors\_info="{}"\]

## Testing The K45 BioPass

Okay, the hardware is pretty. But do they work?! Well, being the paranoid type I am, I first plugged them into an expendably imaged machine to check for anything weird. Nothing weird going on, phase 1 passed 🙂. Now, let’s use them as a FIDO key.

Before these keys, I’d never actually used a biometric FIDO key before, so I was eager to test out the K45. I went ahead and made a fresh personal Microsoft Account so that I could test out the K45 first.

It is **important to note** that a biometric security key has a couple of extra setup steps you’ll need to complete before it works biometrically. In the case of Windows, you’ll want to go to your sign in options within Windows settings to enroll one or more fingerprints. From there, your key will use the prints you’ve enrolled rather than the PIN. You can always fall back to the PIN in case you cut your finger or the CIA removes your prints.

Anywho, once I enrolled a print, I headed over to my demo account’s ‘[additional security options](https://account.live.com/proofs/manage/additional)’ section and added the key. Enrollment was easy, just like any other FIDO key. The beauty of FIDO is that it’s an open protocol built right into browsers and operating systems. There’s no middleware to speak of or PKI infrastructure like you’d find in a smart card type deployment.

Once I had it setup, I gave it a couple of tests. First of all, the Microsoft Account Passwordless flow works as expected. I clicked ‘sign on with a security key’ and signed right in with my fingerprint. I also took it to another computer and was able to replicate it without needing to re-enroll prints (the whole point of a portable key). From there, I attempted to sign on with the _wrong_ finger and was not able to (phew). I was greeted by a polite but stern red blinking on the device’s LED. It’s helpful to note that your fingerprint hash is stored _on the key itself_ and not on your computer. This is an added comfort, for me at least, because I keep my keys on me like a house or truck key.

All and all, I’d say the K45 is a good investment if you’re looking to get into the FIDO game. I also think the ability to use biometrics with your security key instead of a PIN adds a new level of convenience to the mix for consumers.

\[/et\_pb\_text\]\[et\_pb\_image src="https://domkirby.com/wp-content/uploads/2022/01/K40\_Profile\_shot-scaled.jpg" alt="The FEITIAN K40 USB-C and NFC Security key inserted into my Microsoft Surface Laptop" title\_text="K40\_Profile\_shot" show\_in\_lightbox="on" \_builder\_version="4.14.7" \_module\_preset="default" border\_radii="on|30px|30px|30px|30px" box\_shadow\_style="preset1" global\_colors\_info="{}"\]\[/et\_pb\_image\]\[et\_pb\_text \_builder\_version="4.14.7" \_module\_preset="default" hover\_enabled="0" global\_colors\_info="{}" sticky\_enabled="0"\]

## Testing the K40

Of course, next on the list is the K40, the little USB-C/NFC model. I followed similar steps as above, using the same Microsoft account. Since this one is not biometric, I can pre-configure this one right within my Microsoft account and the browser takes care of using the Windows APIs to ask you to choose a PIN number. As expected, after setting up the key and adding it to the MSA, I was able to sign right in. The only thing I did notice different about this key compared to my [Yubikey 5C](https://domk.pro/H0QNfL) was the speed. The K40 was a little bit slower during the authentication process, Granted, I’m talking a matter of 1-2 seconds, but it was still a tad slower. Interestingly, the BioPass performed just as fast as the Yubikey 5C, but that’s likely just a difference in microprocessors.

## Things I Can’t Test

I don’t have a full crypto testing suite, nor the hardware to support one. So it’s important to note that I can’t test the randomness or other cryptographic features of these keys. However, one doesn’t become a FIDO alliance member just by asking, so I’d reckon those have been tested.

For the sake of transparency, I think it's important to note that FEITIAN seems to be the OEM vendor for Google's Titan lineup, which is vulnerable to a [hardware side-channel attack](https://domkirby.com/wp-content/uploads/2022/01/NinjaLab-Report-a_side_journey_to_titan.pdf) (the connection to FEITIAN is visible in that report from NinjaLabs). That said, the models I have are entirely different form factors, more of a sealed unit. I can't test whether or not these are vulnerable but it is totally possible. These attacks are essentially impossible to pull off without detection, as it requires deconstruction of the key which is rather obvious. These attacks are prevented simply by maintaining physical possession of your security keys, something you should do anyways. Treat any U2F key like a house key and protect it. Unlike a house key, FIDO keys are revokable cryptographic credentials. Should you lose one of your keys, you need to remove it as an authorized key in any accounts it was linked with.

## In Conclusion

To wrap things up, I can’t say I’m disappointed in either of the keys that FEITIAN sent over. Either of them would be a good choice for starting your FIDO journey, depending on your form factor needs.

_Disclaimer: These keys were provided to me free of charge by FEITITAN, but my review is only my honest thoughts. I cannot guarantee your security or the security of these keys. Your digital security is your responsibility._

\[/et\_pb\_text\]\[/et\_pb\_column\]\[/et\_pb\_row\]\[/et\_pb\_section\]
