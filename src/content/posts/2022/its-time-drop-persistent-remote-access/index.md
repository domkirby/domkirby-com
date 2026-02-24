---
title: "It's Time: Drop Persistent Remote Access"
date: 2022-02-23
categories: 
  - "cybersecurity"
tags: 
  - "kill-chain"
  - "remote-access"
  - "threat-actors"
  - "threat-surface"
coverImage: "blog-feat-c2aas.png"
---

Threat actors are using _**your infrastructure**_ for command and control as a service! When it first became a thing, remote controlling a computer was a thing of magic. So much "how are you doing this?!" Threat actors have caught onto this. Creating one convenient place to access every endpoint managed (by corporate IT or the channel).

## IT Has Changed

If you look at many corporate IT environments today, persistent remote access isn't a thing. The growth of on-demand tools like LogMeIn Rescue or Connectwise Control have made it much easier to do things on demand. Some teams even use... Teams. Simply call the user, do a screen share, and share control. In many environments, the need to be able to jump onto an endpoint quickly and discreetly is virtually non-existent. IT departments everywhere are slashing costs and killing the threat surface by simply getting rid of the capability.

Worse yet, persistent tools have added "features" like remote script execution and storage of screenshots. An actor can perform data exfiltration without even needing to actually touch the endpoint. Imagine an accounting firm right now, working on tax returns. Those screenshots are just a rolling inventory of people's financial and personal information. I don't even really need to finish a kill chain. Just gain persistence on the remote-control tool, sit there, and download those screenshots.

## The Kill Chain is Real

This has already happened, more than once. Whether it was an improperly secured ScreenConnect credential or a supply chain attack, central management platforms have been used repeatedly to orchestrate attacks at scale. They turn, quite literally, into C2aaS. Huntress even released (redacted) recordings of threat actors literally remoting in, turning off AV, and running a payload. In other scenarios, they just used mass script tools to attack an entire group of clients at once.

## Changing Your Operations

This is not a hard change. In most cases, you do not need persistent and discrete access to customer endpoints. If they're having an issue, you can simply send them to your site to enter a code and use ad-hoc methodology. That way, _when_ your remote access tool experiences an incident or [vulnerability](https://www.huntress.com/blog/validating-the-bishop-fox-findings-in-connectwise-control), there's little to no attack surface. This is even more the case when your machines are [cloud managed](https://domkirby.com/blog/category/modern-workplace/). Much less goes wrong, and there are less dependencies to worry about.

From a business perspective, it's of course going to add a little bit of overhead to your support procedure, but not much. You can also turn it into a competitive advantage by informing your customer (or prospect) that you can support them without having the ability to just "drop in" on their business.

In summary, it's time to drop persistence. Stop giving away command and control as a service, and make threat actors work just a little harder!
