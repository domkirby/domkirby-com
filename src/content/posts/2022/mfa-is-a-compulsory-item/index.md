---
title: "MFA is a Compulsory Item"
date: 2022-02-06
categories: 
  - "cybersecurity"
tags: 
  - "defensibility"
  - "mfa"
  - "security"
coverImage: "K40_Profile_shot-scaled.jpg"
---

I might generate a bit of a stir, but this must be said!

> You **cannot be defensible** if you are not meaningfully implementing multi-factor authentication.

If I'm being honest, having this conversation is getting so old. We've been having it for years yet, somehow, there's still resistance to the idea. I'm not speaking about technical roadblocks here, I'm talking about sheer will to solve the problem. But nonetheless, we are absolutely in a spot where, in due time, MFA will become central to a cybersecurity litigation case.

> Defensibility is all about the _reasonable person rule_.

That is, would a reasonable person take the steps you've chosen to take to defend the infrastructure you're trusted with? As a cyber practitioner, your job is to take reasonably comprehensive steps to maintain the CIA triad. Reasonable, in many eyes, means commeasurable with what others in the industry are doing. In a nutshell, this means [following a framework](https://domkirby.com/blog/no-framework-can-mean-no-defensibility/). Every single reputable framework calls for MFA, but there's more.

## Establishing MFA as a Baseline Is Easy

Mutli-factor authentication is one of the most ubiquitous defensive measures in cybersecurity. Right up there with "don't use hunter1 as your password." Everybody knows that MFA is a thing, because it's so widely publicized.

Further, incident after incident boils down to lack of strong authentication. Companies like Microsoft are making this clear in published research and intelligence briefs (see my review on [Cyber Signals](https://domkirby.com/blog/microsofts-cyber-signals-identity-is-the-new-battleground/)). Even further, numerous media outlets have reported on MFA at the consumer level. It's extremely well established.

**Why does this matter?** It comes down to what happens when you sit in front of a jury of your peers. They aren't going to know anything at all about firewalls, SIEM, and EDR. They are _highly likely_ to be aware of multi-factor authentication. Even if they aren't using it as a consumer, they likely know what it is. As time goes on, consumers using MFA will also become more ubiquitous.

Put yourself in a juror's hat. Imagine being told by a plaintiff that two-factor was not in use at the time of the incident. What's your first thought? Mine is:

> I get nagged by Google, Microsoft, Facebook, and everyone else about two-factor but this business didn't use it to safeguard data?

It's not a good look. Suddenly, as a cyber practitioner, you're extremely culpable to the liability that comes with the incident. As a regular business owner, a custodian of other people's data, you're also culpable. You were trusted to safeguard that data yet failed to take one of the most basic measures available.

## Taking Action as an MSP

First thing's first, you need to implement MFA internally. It's not a choice, it's a mandate. Just do it. If you can't do it on a product, the product isn't worth it. Implement MFA. Everywhere.

When it comes to discussing this with customers, your tone needs to change. MFA isn't something you should be discussing as a "way to enhance security." It's something to be discussed as a barrier to entry for having a technology footprint. Explain to them the major risk of _not_ doing it using the [available data](https://domkirby.com/blog/microsofts-cyber-signals-identity-is-the-new-battleground/). From there, demonstrate that it isn't this major impact to operations that people think it is. Properly done, MFA doesn't really interrupt operations by much.

## Implementing MFA Smoothly

The [Modern Workplace](https://domkirby.com/blog/2022-prediction-digital-transformation-will-drive-talent-acquisition/) environment makes implementing unobtrusive MFA much easier than it used to be. Azure Active Directory combined with Windows Hello makes two-factoring a natural process. I find myself accepting a push on my corporate identity about once a week, for my mobile devices. I barely notice it, and it's a 12-second interruption. For 12-seconds a week, you put yourself neatly in the security bell-curve that can prevent up to 98% of common attacks. Not bad.

## Implementing MFA Meaningfully

At the beginning of the article, I underlined the word "meaningfully." I did that on purpose. In many environments, whipping up a conditional access policy for MFA won't get the job done. This is especially true in hybrid-cloud environments.

I've seen countless occurrences of Microsoft 365 being very well protected, but the VPN to the server has no protection. It means that, as a threat-actor, I still have a juicy target that's easy to penetrate. I'm going straight back to basics and performing a spear phish or password spray. From there, I have you. Considering the environment all-up is key. The first step of a meaningful implementation means adding MFA to anything that can be accessed outside of a wall.

That's everything in the cloud, any sort of remote access/VPN, Windows 365, and the like. Anything that I, the threat actor, can easily attack from the comfort of my couch. That also means turning off or hardening and remote management for items such as firewalls.

To sum it up, you need to take a hard look at every component in the environment. From there, identify the areas that have exposure to remote credential attacks. **That's** where you need to start.

 

The cybersecurity landscape is changing rapidly. As a practitioner, it's your responsibility to keep up, plain and simple. MFA is such a low-hanging fruit, an easy win, that it's inexcusable not to implement it everywhere you can, right now.
