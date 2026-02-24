---
title: "Modern Security Baby Steps: Mobile Application Management"
date: 2022-02-08
categories: 
  - "cybersecurity"
  - "modern-workplace"
  - "series-baby-steps"
tags: 
  - "application-management"
  - "azure-ad"
  - "endpoint-manager"
  - "mam"
  - "mdm"
  - "modern-security"
coverImage: "using-mobile-device-unsplash.jpg"
---

I've decided to write a small series of posts focused on **modern security**. That is, security in the modern workplace environment. You see, the way we need to think about security changes when we move into a cloud-first or cloud-native environment. _What_ we need to protect changes, as does the _how_. First thing's first, you [need to enable MFA](https://domkirby.com/blog/mfa-is-a-compulsory-item/). But that's a global rule, not a "modern rule." For my first modern security baby step, I've chosen mobile application management.

## What is Mobile Application Management?

Mobile _Application_ Management (MAM for short) isn't really "new" so much as just "newly popular." To understand it, you should first understand Mobile _Device_ Management (MDM). In the MDM model, we typically use some application or configuration profile to enroll an _entire device_ for management. We manage that device from front to back. We control updates, OS level settings, what's installed, etcetera. It's the ideal solution for corporate devices.

However, with the ubiquity of bring your own device (BYOD) nowadays, things have changed. First off, many people don't have a desire to carry two phones around. Second, BYOD means we're introducing unknown and untrusted devices into our environment... ew. Of course, it would be entirely unfair of us to ask our employees to allow us to manage their entire device. After all, a lot of our personal data is accessible and stored on our mobile devices. Family photos, social media, finances, the list goes on. At the same time, we need to ensure our data is being accessed under the rules we set.

### Enter the MAM Model

With Mobile Application Management, I can allow controlled and secured access to my company's data, _without_ invading the privacy of my employees. I have control over the applications they leverage to access work data, and that's it. I can't see those family photos, banking apps, or any other data! It's the perfect solution.

## Why should I care?

We've been preaching the importance of device management for some time, understanding what devices are connecting to your environment. It's critical. However, there's a collision when it comes to BYOD, where I simply **do not want** the liability of managing a user's entire personal device. Before MAM, this would mean we're in a rock in a hard place. However, with MAM being available, we can ensure that data is accessed in a controlled fashion with virtually no interruption to the user.

> Mobile Application Management is one of the few security wins we can take without really changing much about how users interact with work data.

## What makes it a baby step?

MAM is an amazing baby step for a couple of key reasons:

1. **Your customer's data is likely already in Microsoft 365.** This is where the data is we want to protect, so the first part is complete!
2. **No special device enrollment is needed.** We don't need to enroll a device into Endpoint Manager in order to achieve MAM. We just need a Business Premium licensing.

Long story short, I define a 'baby step' as a quick win with a small investment.

## Get Started

If you or your customer is already on Microsoft 365 Business Premium, E3, or E5, you're already set licensing wise! To get this off the ground, we'll need to do a little work in both **Endpoint Manager** and **Azure Active Directory**. It's important to note that, in this example, we'll only be configuring policies to protect Microsoft 365. You can expand this to supported third party apps and services as well! In the video below, I'll walk you through configuring MAM in your Microsoft 365 environment. It's longer than my typical video, but only because I'm explaining things as I go. You can stand up these policies in your customer's environment in 15 minutes.

\[embed\]https://www.youtube.com/watch?v=OckkZY3hLT0\[/embed\]
