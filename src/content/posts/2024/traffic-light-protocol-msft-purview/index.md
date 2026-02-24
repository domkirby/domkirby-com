---
title: "Traffic Light Protocol with Purview Information Protection"
date: 2024-03-04
categories: 
  - "cybersecurity"
  - "guides"
tags: 
  - "data-labeling"
  - "purview"
  - "tlp"
  - "traffic-light-protocol"
coverImage: "tlp_pip_wordpress.png"
---

I recently made a [post on LinkedIn](https://www.linkedin.com/posts/dominickirby_in-my-personal-tenant-im-not-doing-a-lot-activity-7170121148632907776-luta?utm_source=share&utm_medium=member_desktop) about how I've applied the Traffic Light Protocol within my own Microsoft 365 tenant using Purview Information Protection. I opted for this route because, in my personal tenant, I'm not often collaborating with other members of the tenant. However, I frequently interact with external parties and those interactions often involve sensitive information. The [Traffic Light Protocol](https://www.cisa.gov/news-events/news/traffic-light-protocol-tlp-definitions-and-usage#:~:text=The%20Traffic%20Light%20Protocol%20\(TLP,by%20the%20recipient\(s\).) provides a very simple mechanism through which two or more parties can dictate how information should be used. It's rather simple, and based on colors:

- **TLP:CLEAR** - The information is/can be public.
- **TLP:GREEN** - The information is not public but may be shared amongst members of the same 'community.'
- **TLP:AMBER -** The information is nonpublic and should only be shared within the recipient's organization and to the recipient's client organizations.
- **TLP:AMBER+STRICT** - The information is nonpublic and is only to be shared within the recipient's own organization.
- **TLP:RED** - The information is sensitive and only the original parties to the conversation or message may use the information (it may not be shared at all)

This simple system leads to a really simple way to mark and protect information when sharing it amongst parties.

## Implementing it Yourself

A couple of you requested that I write up a guide on how to implement PIP to align with the Traffic Light Protocol. Ask and you shall receive! I've whipped up a rather lengthy guide on the topic that you are free to use for your own purposes. In this guide, I have made the assumption that you already understand the [basics of Purview Information Protection](https://learn.microsoft.com/en-us/purview/information-protection). If you do not, please read up on it before attempting this implementation, as you'll find some of the product's basics are (intentionally) excluded from the guide. **Hope you enjoy!**

[**Download the Implementation Guide**](https://domk.pro/info-protection-tlp-dl)

\[box type="warning"\] This implementation guide is based on my own use case and experiences. Everyone is responsible for their own cybersecurity and data protection choices. As such, your use of this guide is at your own risk. \[/box\]
