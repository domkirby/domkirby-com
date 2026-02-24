---
title: "There's Always Another Attack Vector"
date: 2022-08-01
categories: 
  - "cybersecurity"
tags: 
  - "cybersecurity"
  - "macros"
  - "ransomware"
  - "ttps"
coverImage: "hacker-screens.jpg"
---

Microsoft recently [made a big jump](https://domk.pro/qk1MoL) in the security of the Office suite by finally blocking macros by default! This is a fantastic step forward as macros have always been an easy surface to attack. Moreover, macros are uncommon in modern business practices.

However, when we plug one hole, threat actors will simply find a new hole, and thus the cycle shall continue. We got good at backups, so double extortion ransomware became the norm, for example. The blocking by default of macros in Office is no different. According to [The Hacker News](https://thehackernews.com/2022/07/hackers-opting-new-attack-methods-after.html):

> In its place, adversaries are increasingly pivoting away from macro-enabled documents to other alternatives, including container files such as ISO and RAR as well as Windows Shortcut (LNK) files in campaigns to distribute malware.

ISO files are something of particular concern, because they can emulate a disk which can trigger Autoplay actions. [Proofpoint's research](https://domk.pro/fwqWZQ) has shown little delay in threat actor transitions from macros to more sophisticated methods to deliver malicious payloads, and it should come as no surprise. As defenders, we need to stay in the mind of the attackers and understand that we must constantly pivot, just like our adversaries do.

## So, What Now?

News like this can often be disheartening, especially if you're newer in this space. However, you shouldn't be discouraged. Macro blocking represents a huge step forward for Microsoft and all of its consumers in terms of preventing many common threats. There are plenty of threat actors who will not find it worth their time to pivot. For the group that do, they are likely pushing more profitable payloads (i.e. ransomware). This is simply part of the cat and mouse game we call blue teaming. Our most formidable adversaries will shift their TTP's, and we must do the same.

## Protecting Your Endpoints

With the knowledge that our adversaries will constantly pivot, now is a good time to make sure we're using a comprehensive endpoint stack to help us prevent and **detect** these types of attacks. Here's some advice (of course, nothing is perfect, but I've found this to be helpful):

- Run a modern endpoint protection platform such as [Defender for Business](https://www.microsoft.com/en-us/security/business/endpoint-security/microsoft-defender-business) or [SentinelOne](https://www.pax8.com/en-us/vendors/sentinelone/)
- Partner with a Managed Detection and Response vendor. I personally love [Huntress Labs](https://domk.pro/huntress) and [Blackpoint Cyber](https://domk.pro/blackpoint)
- Partner with a SOC as a Service provider such as [NovaSOC](https://www.pax8.com/en-us/vendors/novasoc/)

These three items will go a long way in preventing these types of attacks, and hopefully detecting the ones that do slip through. It's important to reiterate that our adversaries are always changing TTP's, so having vendors like these in your corner can go a long way.

 

**Don't be discouraged, keep up the good fight!**
