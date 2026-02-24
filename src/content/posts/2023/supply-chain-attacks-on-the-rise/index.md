---
title: "Supply Chain Attacks: On the Rise"
date: 2023-04-07
categories: 
  - "cybersecurity"
tags: 
  - "3cx"
  - "cyberattack"
  - "supply-chain"
coverImage: "pexels-rodolfo-clix-1036936.jpg"
---

The 3CX incident marked another highly successful supply chain-based attack, believed to be attributable to DPRK (North Korea) state sponsored actors. I won't bore you with the nerdy details, because [Huntress](https://www.huntress.com/blog/3cx-voip-software-compromise-supply-chain-threats) and [Blackpoint](https://blackpointcyber.com/resources/blog/deep-dive-3cxdesktopapp-security-vulnerability/) have already done a **fantastic** job at that. I want to talk about supply chain attacks in general and my thoughts on them. Much like ransomware, I think **supply chain attacks are and will continue to be on the rise**.

## Let's Examine Why

Supply chain attacks are a highly effective way to attack a broad group of people. In the past, supply chain attacks have been somewhat of an outlier because they tend to be incredibly difficult to execute. However, poor CI/CD practices and increased incentive for pulling off these attacks will cause a continual rise.

Historically, many large supply chain attacks (including 3CX) can be attributed back to nation-state sponsored actors. That is, intelligence agencies or their cronies doing the dirty work to gather intelligence or cause economic (or even physical) harm. By implanting a payload into an otherwise trusted piece of code, a threat actor can achieve broad deployment of a threat across a multitude of customers. We can go back to the SolarWinds example for this. The threat actors knew SolarWinds's customer base would yield highly desirable intelligence, and exploited weaknesses in the development chain to embed a payload.

In addition to the incentive, it's easier than ever to attack commonly used libraries. The best example of this was a major vulnerability in Log4J (Log4Shell), but we've also seen [direct attacks](https://arstechnica.com/gadgets/2021/03/hackers-backdoor-php-source-code-after-breaching-internal-git-server/) against commonly used libraries to embed bad-actor code. Imagine if the core PHP executables were compromised. The very site you're on right now, and **millions upon millions** of sites run on top of PHP.

## How do we stop it?

Well, that's a hard question, especially for software consumers. If you're a developer, you need to have rock solid CI/CD processes and utilize tooling to really understand what's in your code. Evaluate the libraries you use and make sure they are secure and evaluate your overall codebase for code that doesn't make sense or could be malicious.

If you're a software buyer, [**challenge your vendors**](https://www.youtube.com/watch?v=v8McvzZyMq8&list=PLXPTzZxp2mba14tIorL3XvUx-jcgjoswV&index=26). Understand what their development security looks like, ask the hard questions. You'll need to make a risk/reward decision with every software you encounter. **More importantly,** make sure that you are **promptly installing patches when they become available from your vendors**. Unintended exploits are just part of the game, so you need to ensure you're patching promptly.
