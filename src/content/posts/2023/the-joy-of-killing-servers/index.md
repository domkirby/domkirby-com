---
title: "The Joy of Killing Servers"
date: 2023-12-12
categories: 
  - "digital-transformation"
  - "modern-workplace"
tags: 
  - "digital-transformation"
  - "modern-workplace"
coverImage: "tihs-servers-on-fire.png"
---

I felt like making a fun post and was just recently reminiscing with someone about the joy of getting rid of servers. in my own technology practice, servers were the biggest headache (and profit suck) for the business. Poorly written line-of-business applications, issues with patching, physical environment challenges, alert tuning. I genuinely loathed every part of it. Now don't get me wrong, I feel like we had a pretty good and stable practice going with servers under management, but it was still a huge pain.

## Something broke? It's the client with the server(s)!

It seems that anytime we had network trouble, it was due to the server. Perhaps the line-of-business application with 3 dependent random executables bugged out. Maybe the route between the CEO's house and the office is creating VPN havoc. Whatever it was, general goofiness generally followed those with metal in the closet. Private and public cloud infrastructure helped a little bit. We were no longer dealing with smart errors or crappy SMB internet, but we still had server operating systems and bad applications.

Even if the server hardware wasn't ours, we still had to harden them and manage the network surrounding them. God forbid we had publicly exposed services, now our attack-surface under management would skyrocket and we had to account for WAF, encryption, emergency patching, and really bad vendors who never issue patches. And then there were backups that needed image validation, data integrity validation, various restoration options, and so on. Nowadays, there's just a better way.

## Enter SaaS and PaaS

Something magical happened when I started getting clients on the Modern Workplace train. At the time, it was a hard proposition. Platforms like Intune were more work to setup, and not many SaaS alternatives existed for line-of-business applications at the time. Nonetheless, we worked customers as much into cloud identity as possible. A lot of them got down to _zero_ server operating systems, relying entirely on SaaS and the Microsoft identity plane. Some of them needed application streaming for the finance app that shall not be named.

### The Benefits

Before I cover some tips, let's review some key benefits:

- **Modern tech stacks are easier to secure**. For this one, please see the [_Pizza as a Service model_](https://domkirby.com/pizza_aas/). The concept is rather simple: The closer I can get to SaaS, the less I have to deal with. Software conversations became more about vetting security practices and overall reliability, and less about scoping out hardware, networking, access requirements, etc. We had to secure the identity for software access, and that was about it.
- **Modern tech stacks just work better**. When properly implemented, an Entra ID joined/Intune managed environment just worked. On average, we saw a **60% reduction in incident tickets**. We also had a dramatic reduction in user and privilege management overhead (even before dynamic groups were included in M365 Business). And the cherry on top was no longer being reliant on crappy ISPs to enable anywhere work. _Sidenote/rant: Help desk shouldn't be a major value point of an MSP. If the user is calling the help desk, they are already having a bad day. Instead, we spent more time tackling business challenges with customers._
- **Companies can see massive gains**. When done right, digital transformation can have massive business outcomes. I'll review 'how' below, but here's what:
    - Smoother and more collaboration
    - Increased productivity (due to less IT trouble)
    - Increased ESAT (employee satisfaction)
    - Streamlined processes
    - In some cases, this added up to **topline growth** due to streamlined processes

## Here's Where to Start

To start modernizing clients, you first need to break out your client list and look at them. Which ones have file shares with a bunch of Word docs and no on-premises applications? Do those same customers have up-to-date(ish) hardware? Start there. Now, my blog doesn't have room to cover everything in detail, but here were the top-level steps I leveraged in digital transformation:

- **Redo the assessments**. Pretend like the customer is new and re-assess the tech stack. This will help you find the nasty shadow IT bugs they've hidden in the closet.
- **Make the baseline healthy**. If possible, get everything that exists today in a healthy state. We're going to put a lot more work on the on-premises infrastructure while we migrate. DON'T ignore that SMART error now!
- **Lift the identity**. Get the user identity into Entra ID first. Either by creating/using pure cloud accounts or deploying Hybrid Identity with Entra Connect.
- **Identify workloads:** Email is probably the easiest thing to get going, followed by file shares, then applications. Each workload is likely to become a project itself as part of the master plan.
    - **Email.** Honestly, _just do it_. Move them into Exchange Online and check this off the list.
    - **File shares.** Believe it or not, most small business file shares will do _just fine_ in SharePoint. Things need to be organized a little bit differently in SharePoint, and some user training will be required, but for most businesses (especially office workers), the transition will be just fine. If you need help with the SharePoint piece, there are [plenty of professionals](https://domk.pro/pcUcM8) that can help.
    - **Applications**. This part is less fun, but here is the order in which I approached it:
        - Move to SaaS: First thing's first. If there is a SaaS equivalent that meets the needs (of the customer, administrator, and cybersecurity people), move to it.
        - Eliminate: If it isn't a business-critical app, and SaaS doesn't make sense, get rid of it. I probably don't have to tell you that legacy environments can be filled with shiny toy apps used once a year.
        - "Cloudify:" I'm not sure if "cloudify" is a word, but I'm rolling with it. This just means take the on-premises application and make it work in the cloud. This is where Windows 365 or Azure Virtual Desktop really shines.

Now, to be clear, I'm oversimplifying. But if you assess all that and make decisions with the client, you should now have a project plan. As you execute, the following items should be incorporated into **each project**:

- **User preparation:** Work with the client to prepare the team for upcoming changes, before those changes come.
- **Train the users:** Invest in the time to provide quality training on new products to those users. For third-party products, work their content into it. For the Microsoft stack, train on Exchange, SharePoint, Teams, etc. Train them on OneDrive sync and the differences between SharePoint and the old 'Q' drive. Help them _get the most out of their new tools_

## Post-Deployment

Once you've modernized the client, you'll need to maximize their investment. Your value proposition with the client will change. From firefighting to relying on strategy work and creating business outcomes. Here are a couple of places to start:

- **Cybersecurity:** Use frameworks to start a plan of action and milestones (POAM) to get the customer cyber-mature.
- **Process automation:** Leverage Power Automate and other tools to find small things to streamline. Saving someone 15 minutes per workday can add up to 65+ hours per year!

## Bridge Measures

Sometimes, we can't fully modernize the customer for one reason or another. Maybe they want to finish depreciation on their hardware. Maybe that business-critical app just can't be modernized yet. Whatever it is, here are some "middle grounds" you can add to your practice:

- **Hybrid Identity:** Entra Connect bridges the gap between cloud and on-premises identity. If you're going to modernize a small client quickly, you can probably skip this headache like a bad YouTube ad. However, if you need that bridge, there's nothing wrong with Hybrid Identity to sync credentials between legacy and modern workloads.
- **Hybrid Infrastructure:** You can run on-premises and cloud infrastructure together in harmony. This will allow you to leverage on-premises where needed while moving ome workloads to more modern solutions. This is usually paired with hybrid identity.
- **Cloud Desktops:** I can probably (and will probably) write a whole post on this. But, in a nutshell, if you've got those pesky fat apps stuck around, cloud desktops (either Windows 365 or Azure Virtual Desktop) are a great way to buy time. You can transfer that technical debt until it can be paid off.

## Conclusion

I got a little more detailed than I thought I would be writing this up. But, to sum it up, here are some of the outcomes of modernization (and killing servers) I've experienced in my career:

1. Better client outcomes: These clients ran more efficiently, worked better together, and had fewer incident tickets (upwards of 60% fewer).
2. Better security: Offloading responsibility (after establishing business trust) reduced the security burden on my MSP, allowing us to focus our efforts where we could make the most impact.
3. Less headaches: No longer rolling trucks for server issues or opening up emergency patch windows made my life easier!

 

Hopefully this helps! If you'd like me to dive into any of these steps further, let me know on LinkedIn! I'll write some follow-ups as the inspiration strikes.
