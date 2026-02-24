---
title: "Text Messaging is Bad MFA"
date: 2022-02-11
categories: 
  - "cybersecurity"
tags: 
  - "mfa"
  - "sim-swap"
  - "sms"
  - "two-factor"
coverImage: "pexels-person-texting-at-desk.jpg"
---

Ahh texting. Arguably the start of the digital communications revolution. The good 'ol short message service (SMS). To this day, texting is a key method of communication. However, there's one key thing that texting is not: **secure**.

The [short message service](https://en.wikipedia.org/wiki/SMS) came to life at a time when cybersecurity wasn't really a big topic. As such, there's no real encryption, non-repudiation, etc. Further, the integrity of SMS routing is only as good as the carrier supporting your service. And that fact brings me inspiration for this post. I came across an article on The Record titled _[FBI: $68 million lost to SIM swapping attacks in 2021](https://therecord.media/fbi-68-million-lost-to-sim-swapping-attacks-in-2021/)._ Yet another Catalin masterpiece!

## What the hell is SIM swapping?

SIM swapping, SIM-jacking, the port-out scam, it's built a few names. The premise is a simple one, and it's often not difficult to execute. It normally just requires a little social engineering:

1. Select a target and figure out their cell number
2. Figure out who the carrier is with a [freely available tool](https://www.freecarrierlookup.com/)
3. Call and make up a ridiculous story and grovel until you get them to activate a new SIM
4. If at first you don't succeed, call back and try again

I tend to oversimplify these things, but that is quite frankly how these attacks can go down. If you invent the right story and get the right support person, you can often convince them to skip common security measures. Another tactic is to go into the retail store of the carrier and perform the attack in person. In either method, the success rate is far too high. Once the attack is completed, your number has been moved to a new device or SIM, hence the "swap."

## What's this have to do with MFA?

The issue here comes down to the same issue we have when all of our passwords and MFA configurations can be reset with. We need to make damn sure we secure that point of entry. Only, with SMS, we simply cannot. If text-messaging is the key to our digital life, a simple SIM swap attack is all that's needed to steal it. For me, that equation doesn't add up to good cyber hygiene!

## My Advice: Consider Stronger MFA

Now, don't get me wrong. Unfortunately, there are services out there where SMS is literally the only option for "MFA." It sucks, but it is what it is. In a scenario like that **SMS is better than no sort of MFA**. However, if you have options, consider anything else that's out of band or communicates over encrypted and authenticated channels. Whether it's TOTP (Google Authenticator, Authy, etc.), push based methods like Microsoft Authenticator, or - my absolute favorite - [FIDO security tokens](https://domkirby.com/blog/why-i-love-fido2u2f/)!
