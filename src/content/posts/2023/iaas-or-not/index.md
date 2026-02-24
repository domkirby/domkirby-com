---
title: "To IaaS or not to IaaS?"
date: 2023-06-04
categories: 
  - "cybersecurity"
  - "digital-transformation"
tags: 
  - "cloud"
  - "cybersecurity"
  - "iaas"
  - "smb"
coverImage: "iaas_stock.jpg"
---

IaaS (Infrastructure as a Service) might just be the cloud in its purest form. It truly is just "renting someone else's" computer. Because of that, IaaS offers a ton of flexibility, but it comes with a catch. So let's explore the question: **should my cloud transformation include IaaS?** It's important to note that we're going to focus on the lens of the small-to-midsized market here.

## What Does IaaS Solve For (in SMB)?

Before the if, what about the why? IaaS is most often a composition of virtual networks, virtual servers, and technology to connect them. Take a simple Azure example: couple of VMs, a virtual network, perhaps a VPN gateway, and some network security groups. That's pretty much all there is to it. At the end of the day, we're taking our servers and sticking the soft layers on somebody else's network (the operating system and everything on top of it).

### Most Common Use Case: Technical Debt

> Most often, I see IaaS being used to perform a balance transfer on an organization's technical debt.

In my day job, my team performs hundreds of Azure projects on a yearly basis for hundreds of MSPs. One of the most common themes we see is "last mile" cloud-journey: the applications. So many businesses adopted line of business applications that use old-school thick client and server applications (from QuickBooks to random industry specific LoB apps). These apps often don't have modernization paths and thus represent a technical debt. The challenge is, paying off that debt is sometimes more expensive than continuing to service it. If that customer wants into the cloud, they are going to 'cloudify' that application.

Most often, this is serviced through the deployment of Azure Virtual Desktop, Windows 365, or simply RDS servers on Azure. Every so often, these apps service up a web UI and we'll deliver that over the WAN or (more ideally) behind a VPN Gateway. It's worth noting that it isn't always an application on a server issue. Sometimes Azure Files is necessary because the applications in use refuse to play nicely with today's shared file storage tech (like SharePoint or Box).

### The "BYOD" Use Case

Another clever use of cloud-hosted desktops is supporting BYOD. While this **absolutely does not eliminate much risk associated with BYOD**, it is marginally better than [directly accessing work applications and data on personal compute](https://www.techtarget.com/searchsecurity/news/365532032/LastPass-breach-tied-to-hack-of-engineers-home-computer#:~:text=They%20targeted%20one%20of%20the,third%2Dparty%20media%20software%20package.). You can serve up a remote desktop and use techniques like clipboard blocking and network isolation to reduce the impact a little bit (but you are still susceptible to whatever shenanigans exist on that person's computer).

### Other Use Cases

There are plenty of use cases, but I'll call out a few more here:

- **Public Apps:** The very server you are reading this article on is an EC2 machine. However, even my website is fronted by Cloudflare and less than 20% of the content needed to piece my site together is pulled directly from the server more than once or twice for every few hundred loads. To reduce the risk of having the server exposed, every request you send to it is decrypted and scrutinized by the Cloudflare service. Certain things (such as Linux servers) will continue to be VMs until the underlying services they load are modernized into containers or platform capable services.
- **Travel:** We have Wi-Fi on planes, but I certainly would not call it _fast_. I actually have a Windows 365 desktop I access from the plane to have a tolerable experience, and it works amazingly well.

## So should I use IaaS or not?

When looking at your customers' cloud transformation journeys, IaaS may need to be on your roadmap. However, think about the pizza as a service model. In IaaS, the only responsibility we get to offload consists of the _physical_ network, the hardware itself, and where the hardware runs. Everything from the operating system up is your job (patches, applications, hardening, configuration, troubleshooting, etc.).

When I'm looking at a digital transformation journey, I _always_ prioritize SaaS and (as mentioned before) find myself most often using IaaS to transfer that expensive technical debt. It still is debt that needs to be serviced, but I've at least put it in a more manageable cloud environment and can recycle the hardware at the client site.
