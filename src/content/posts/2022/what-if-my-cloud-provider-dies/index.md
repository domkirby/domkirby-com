---
title: "What if my cloud provider dies?"
date: 2022-12-04
categories: 
  - "business"
  - "cloud"
  - "cybersecurity"
tags: 
  - "incident"
  - "news"
  - "outage"
  - "rackspace"
coverImage: "Major-cloud-incident.png"
---

This weekend has been marred by an ongoing outage at major cloud provider Rackspace that is impacting their **entire** Hosted Exchange offering. After a **full day** of being down with lackluster (to say the least) communications, Rackspace [came out and admitted](https://twitter.com/Rackspace/status/1598941743063322625?s=20) that they've experienced a security incident. Based on the amount of downtime and the fact they've decided to give away Microsoft licenses, it appears to be quite catastrophic.If we want to put a little icing in it, [Kevin Beaumont](https://doublepulsar.com/rackspace-cloud-office-suffers-security-breach-958e6c755d7f) [discovered via Shodan](https://cyberplace.social/@GossiTheDog/109446533829121659) an apparent lack of patching for [#ProxyNotShell](https://channelinfosec.com/tags/proxynotshell) 🙉. But enough picking on them, what the hell do you do when your cloud/hosting provider simply... dies? I'm not talking about an hour of downtime, all things are pointing to this service being completely _deleted_.

## Backups!

Just because you're in the cloud doesn't mean you don't need backup. I will openly recommend that every business leverage Microsoft 365 for their collaboration and security, but I'm **still** going to tell you to use a [third-party backup](https://www.pax8.com/en-us/vendors/dropsuite/)! Your data needs to be in more than one place, at all times. This is a non-negotiable. If you have a solid backup, you at least have options should something like this occur.

## Check your Incident Response Plan

We talk about all kinds of things in our IR plans. Ransomware, phishing, even fires. One thing we often miss is this exact scenario. What if a critical, long-term outage with our host impacts our ability to function? Now is an _excellent_ time to revisit and add this in. You'll want to add the following components:

- What critical things exist in this cloud provider (email in the case of Rackspace)?
- How are we backing it up? How do we restore it?
- How much downtime can the company survive?
- How much downtime do we tolerate before we enact our disaster recovery process?
- What is our backup provider going to be?
- How are we going to get critical data into that backup provider?
- How are we going to get our users up and running?

Those key points should get your started, answer each of those questions and then **test your process**. Another **key consideration is communication**. If we primarily communicate over a service provided by this cloud provider, how do we, the admins and security responders, communicate when that isn't an option. Signal can provide a great alternative for encrypted comms, and Slack for regular comms. Write this down and practice it! Make sure these methods are **truly out of band** (not reliant on said cloud provider in order to access).

## This is Rare, but must be Considered

I want to be clear, an incident on this scale on a mature cloud provider like Microsoft or Google is incredibly rare. You're DR planning for a major scenario, but you still need to plan for it. Just in case.

## Time to modernize!

If you're on legacy tech like traditional Hosted Exchange, it's time to consider a move. The Exchange Servers in M365 are not like the Exchange Servers ran by Rackspace and other Hosted Exchange providers. They are built for the fabric. Consider this a signal to move to a modern, cloud-native solution like Microsoft 365 or Google Workspace.

As this unfolds, I plan to follow it further and will share thoughts on the Rackspace incident in particular. The first thing to do is take action!

**If you're a small business owner that's impacting and looking for somewhere to turn, I can help. I know plenty of companies I can refer you to for help, reach out to me on [LinkedIn](https://domk.pro/li).**
