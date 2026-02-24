---
title: "2025 in Cybersecurity (and a Look Back at 2024)"
date: 2024-12-21
categories: 
  - "cybersecurity"
tags: 
  - "2025-predictions"
coverImage: "Cybersecurity_Crystal_Ball_1920x1080.png"
---

It's hard to believe that we're closing in on the end of 2024. For me at least, it has been one of those years where being busy keeps the time moving! It's also been an active year in cybersecurity so, in the spirit of turning the page, let's have a look back at 2024 and a peek forward at my predictions for 2025. Be sure to also check out our last episode of [The Game](https://www.youtube.com/watch?v=Agy3oxgeWr8) for the year, where we covered some of this in video! It's important to note that these opinions are my own personal thoughts on where we're at and where we're going.

## What Went Down in '24?

### More Code Problems

We have a systemic issue in cybersecurity, and it has a lot to do with the code we produce. Now, this doesn't necessarily mean we demonize all of the people or companies that write code. It **does mean** that we need to take a hard look at building _secure by design_ products. We must implement better dependency control, allocate an appropriate number of sprints to secure development, etc. In a couple of notable examples:

- **[Slash and Grab](https://www.huntress.com/blog/slashandgrab-the-connectwise-screenconnect-vulnerability-explained?utm_source=domkirby.com)** was a major CVE that impacted Screenconnect instances, allowing threat actors to gain administrative access by adding a "/" to a URL. Like we noted in the episode of The Game, had threat actors known what they got, this incident would have been massively catastrophic. For their part, Connectwise made the unprecedented move of allowing even lapsed licenses to perform an upgrade to patch the bug.
- **Crowdstrike Kernel Panic:** In what turned out to be a latent bug, a file pushed to a parser update caused a kernel level panic in Windows, wreaking havoc. There were lessons here in building resilient infrastructure, as well as perhaps allocating sprints to bug hunting or testing for these particular cases.

According to [CVE.ICU](https://cve.icu/CVE2024.html), 39,192 CVEs have been disclosed in 2024 as of December 20th. That's an average of about 110 CVEs per day. Compare that to 2023, with 28,818 CVEs total (about 79 per day). That's a _sharp_ increase in the number of disclosed vulnerabilities, and both years held an average CVSS score of between six and seven.

On the flip side of this equation, patching is still a sore subject. We're still finding vulnerable systems running old code that **should have been patched ages ago**. This alarmingly shows that, even if developers are releasing fixes quickly, we aren't necessarily applying them promptly. And that is a **massive failure**.

### More 'Human' Impactful Events

In late 2023, I [wrote about](https://domkirby.com/blog/housing-market-cyber-attacks/) the Fidelity National Financial event. This event not only exposed data but stopped real-estate transactions from closing and slowed down mortgage payments, which can cause a massive economic problem. This year, we saw more major events that had some **real-world impact**:

- **Change Healthcare (February)**: A subsidiary of UnitedHealth Group, Change suffered a ransomware attack by ALPHV/BlackCat in February. It exposed sensitive data about [100 million people](https://www.theverge.com/2024/10/25/24279288/unitedhealth-change-breach-100-million-leak?utm_source=domkirby.com), disrupted claims processing, and prevented some healthcare services (such as prescription filling) from being rendered. This incident impacted real people who needed prescription refills or other critical services.
- **Ascension (May):** The hospital operator ascension was hit in May by ransomware. This attacked disrupted "[clinical operations](https://www.reuters.com/technology/cybersecurity/ascension-warns-suspected-cyberattack-clinical-operations-disrupted-2024-05-08/)" and prevented medical professionals from accessing essential data. Just now (Dec 20th), [Reuters reported](https://www.reuters.com/technology/cybersecurity/us-hospital-operator-ascension-says-56-million-affected-medical-data-breach-may-2024-12-20/?utm_source=domkirby.com) that this incident impacted nearly 5.6 million people through the compromise of lab tests, insurance information, and medical records (among other data).
- **Confidant Health (August):** Confidant left a database unsecured, exposing about 5.3TB of sensitive data including medical records and **audio/video recordings of therapy sessions**. The article doesn't note the number of people impacted, but you can imagine just how sensitive that data is to someone who is a subject of it.

Healthcare wasn't alone in being victimized, either. This year we learned of the **[Salt Typhoon telecommunications incidents](https://en.wikipedia.org/wiki/2024_United_States_telecommunications_hack)**. This led to the FBI and CISA jointly advising everyone to switch to [end-to-end encrypted messaging whenever possible](https://www.cisa.gov/resources-tools/resources/mobile-communications-best-practice-guidance). It's also worth noting that your SMS multifactor-auth is traveling through a likely compromised medium.

Critical infrastructure took some licks too, with American Water [experiencing an incident](https://www.cisa.gov/resources-tools/resources/mobile-communications-best-practice-guidance) that impacted billing and other systems. This particular incident didn't impact water delivery or safety, but it's close enough for concern! American Water is the largest regulated water utility in the US, serving 14 states and 18 military installations.

Long story short: incidents that impact real world operations, like drinking water or healthcare, are not going anywhere!

### The Basics are Getting Better, but Not Great

Over two years ago, I shared notes on [Microsoft's Cyber Signals](https://domkirby.com/blog/microsofts-cyber-signals-identity-is-the-new-battleground/) report. That report indicated that only 22% of Azure AD (now Entra ID) accounts were using strong authentication at the time. In this year's [Digital Defense Report](https://domk.pro/ddr24), Microsoft reported that number at 41%. That's some great growth but still shows a huge gap in covering the bare bones of cybersecurity hygiene. At the same time, password attacks aren't going anywhere. They're reporting **7,000** password attacks per second.

With this iterative growth in MFA, threat-actors are also evolving their tactics. Microsoft reported a 146% increase in Adversary in The Middle (AiTM) attacks. They also report seeing an estimated 39,000 token theft incidents per day. This is the constant "cat and mouse game" that is blue teaming. Every time we take a step forward; the threat actors want to take two steps forward.

### Some Good News: We're Hitting Back!

I can't leave 2024 in all doom and gloom! This year, we made some landmark arrests. Our friend, Robert Cioffi, even made a victim impact statement. Some other notables include:

- The LockBit Ransomware Group network and 2 actors were taken down in a global police operation ([Operation Cronos](https://apnews.com/article/lockbit-ransomware-website-police-disrupt-0297653ddfc245fcdf7d9308c6c1e6fe?utm_source=domkirby.com))
- In another large, coordinated effort in Europe ([Operation Endgame](https://apnews.com/article/europe-ransomware-networks-taken-down-ae4753ecb57d24f4f127270ed41ad934?utm_source=domkirby.com)), four arrest were made in addition to the seizure of over 100 servers and 2,000 domain names

It's always exciting to see the good guys winning. Finding threat actors, building a legal case, building the arrest operations, and all the other things that go into these victories take immense time and effort (and money). It's awesome to see some of this hard work coming to fruition.

## Looking Forward: 2025

Alright, enough looking back. We know we're got work to do, right?! Here's what I'm thinking for 2025.

### The Identity Evolution Will (Must) Continue

SMBs are continuing to modernize. We're seeing more and more SaaS adoption, getting to the right of the [Pizza as a Service](https://domkirby.com/wp-content/uploads/2023/12/Pizza_aaS.jpg) model. This is a great thing, because it means less surface area needs to be defended by the SMB (or MSP). However, it does change the barrier, and threat actors have caught on.

With Microsoft seeing 7,000 password attacks per second and phishing being at an all time high, it's clear that the **identity** is what needs the most protecting. Identity compromises not only lead to accessing one victim, but they are also often used to gain access to the next victim(s). On my own, I see at least 5 phishing emails a day from 2-3 compromised email accounts. This trashes the domain's reputation and could leave liabilities behind.

**So**, in 2025, we _have_ to push towards identity centrism. We need to build more advanced controls to get ahead, like [Passkeys](https://domkirby.com/blog/entra-passkey-rollout/) or other phishing resistant authentication methods. We need to understand what's happening with our identities. We need to understand _who_ and **_what_** are using them. This means we also need to think about ABAC (attribute-based access control) so that we can ensure the _devices_ our users are using are secure and accounted for. This also means we need to continue to press on developers and vendors to eliminate the [SSO tax](https://sso.tax/).

### Tech Debt Will Still Haunt

Tech debt is, and will continue to be, a massive problem. Out of date operating systems, legacy software, software whose developer no longer exists. You name it, it's in the tech debt stack. Additionally, a lot of SMBs transfer the balance of this debt to the cloud. This means we still have the same estate to manage but are not stuck dealing with the hardware. From a security perspective, in this case, our gains are unfortunately minimal. We still have operating systems to patch, poorly developed code to worry about, etc.

We need to become more prescriptive. Work with our clients on the _risk-based_ and _business outcome driven_ conversations that are necessary to modernize and eliminate tech debt. This will drive further modernization and adoption of SaaS.

### The Basics Still Matter... the Most

This is a big one friends. We're still only at 41% adoption of MFA, and threat actors are already moving on to advanced attacks against it. We're still behind on patching, still not properly managing our tools. Microsoft cites in the Defense Report that MFA alone can stop upwards of 99%+ of account compromise attacks (granted, this number is shifting, hence the need to look at phishing resistant authentication). Estimates vary widely, but some say upwards of 60% of incidents involve a known, unpatched vulnerability. We **have** to master and insist on the basics of cybersecurity hygiene if we hope to survive.

The truth of the matter is, we are oftentimes **not even locking the front door** while simultaneously investing in reinforcing the least likely points of intrusion.

### AI is a Powerful Tool... and an Insider Threat

AI represents a powerful opportunity for **every business**. The providers and clients who do not embrace it, utilize it to better their business, will likely suffer for it. However, AI is also a major insider threat if not implemented properly. We need to continue our push to drive data governance (after the basics) and other common-sense controls around AI. We also need to be careful about "adding AI for the sake of adding AI." We need to work with clients to help them make informed decisions about AI adoption. Decisions that drive their business forward while balancing and mitigating the risk.

AI is also a powerful tool for threat actors. This should come as no surprise. After all, an RMM tool is just a RAT (remote access tool) with a better intent. In any case, AI is a force multiplier for threat actors just the same as it is for information workers. In fact, just the other day, I received a PowerShell-based ransomware sample that was a little messy and had some weakness in its encryption. AI kindly [cleaned it up for me](https://gist.github.com/domkirby/49b176c561a5e4d014393c18602276fe) and applied strong encryption best practices.

### Market Forces Will Push

We're seeing more push on code producing entities to do better. Secure by design & default initiatives are really starting to gain traction, and there are more consumers voting for security with their wallet. At the same time, there is increased regulatory pressure such as a [promise to renew HIPAA audits](https://www.mcknights.com/news/more-hipaa-audits-on-the-way-hhs-official-warns) from HHS. The Civil Cyber Fraud initiative is well underway, [clawing back payments](https://natlawreview.com/article/civil-cyber-fraud-initiative-nets-125-million-false-claims-act-settlement) under the False Claims Act. Cyber insurance will also continue to be a driver of better hygiene through refusing to cover clients who haven't... **done the basics**.

Of course, CMMC must come into the conversation here, how's that for a market force? I think it will go beyond that, however. I think more **B2B** transactions will require higher levels of assurance. And I think, hope actually, that we begin taking a hard look at regulation in other arenas that handle sensitive data. Healthcare, for example, where the penalties are laughable. I'd also like to see incentivization, not just punitive controls. Imagine being able to get a tax credit or, like Matt ideated, a point off of your SBA loan for having assessed basic cyber hygiene!

### Attrition Will Be Essential to Growth

We're still at a place where anyone can decide to be an IT provider overnight. Now, I want this industry to be large and diverse. However, there will be a reckoning. It's happening slowly but surely, the market is maturing (whether by force, or newfound awareness). Businesses want the benefits modern technology brings. The aforementioned market forces will push both greater innovation **and** a greater requirement to "secure the house." Many service providers are rising to meet this challenge, and many are not. This will cause natural attrition in the number of providers, but I don't think this will stunt growth in the overall industry (in terms of TAM value). Long story short, the market will continue to slowly change what is expected of the provider space.

### We WILL See Growth

All of these things said, I _know_ there will be growth because there _has_ to be growth. Even if it's small and iterative, we _have_ to grow up and do better. We **have** to cover the basics, and we **need** to continue to apply pressure to bring the innovation and improvements we need. We need to work together to raise the tide. We need to stop accepting excuses. We need to stop forgiving failures of basic cyber hygiene. And, we _have_ to drive innovation that both moves our clients' business forward _and_ protects them.

## Conclusion

This article has a lot of doom and gloom in it. However, believe it or not, I leave 2024 with optimism. We're going to improve, innovate, and grow. It might be a little painful to get there and, candidly, not anyone is going to finish the climb. But we _will_ make the climb. So, don't read this article as grim, read it as candid.
