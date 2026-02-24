---
title: "Microsoft is Turning On Your Security Defaults - You Should Leave It That Way!"
date: 2023-04-20
categories: 
  - "cybersecurity"
  - "modern-workplace"
tags: 
  - "azure-ad"
  - "security-defaults"
coverImage: "security_lock.jpg"
---

If you're a global administrator in a Microsoft tenant, you might have (or soon will) receive an email that reads something like this:

> _You’re receiving this email because you’re a global administrator for \[tenant name\]._
> 
> To help protect your organization, we’re always working to improve the security of Microsoft cloud services. As part of this, **we’re enabling the security defaults setting in your tenant that includes multifactor authentication**, which can block more than 99.9 percent of identity attacks that attempt to compromise your accounts.

If you aren't familiar with it, Azure AD [security defaults](https://learn.microsoft.com/en-ca/azure/active-directory/fundamentals/concept-fundamentals-security-defaults) are a set of CA policies made available to tenants without Azure AD Premium. They do some key things such as enforcing phishing resistant MFA and blocking legacy authentication and are a powerful tool. **But with a catch**. Security Defaults are an "all or nothing" approach to conditional access, so you lose a lot of the flexibility you would otherwise get from Conditional Access.

## Why are they enabling it?

Truth is, we've got a problem. According to 2021's [Cyber Signals](https://domkirby.com/blog/microsofts-cyber-signals-identity-is-the-new-battleground/), we are WAY behind the curve on secure authentication (with 22% adoption). This is something we need to fix, **now**. Combined with the [White House](https://domkirby.com/blog/white-house-cyber-strategy/) cyber strategy of shifting responsibility, Microsoft simply **must** act. At the end of the day, this is a good thing. It's become simply unacceptable to not use multifactor authentication as a standard practice, and legacy authentication gets in the way of MFA in big ways.

## Here's why you should leave it on or upgrade...

Security Defaults can be a pain, but they do powerful work. But, setting aside the tech for a moment, there's a key thing going on here: **Microsoft is taking steps to protect you, that you have to take intentional action to reverse**. There's a significant thing playing out here in the reasonable person construct. From Microsoft's angle, they are doing a reasonable thing by turning on a baseline level of security in your tenant. Thus, it could be considered unreasonable for you to go in and turn it off.

It's not unlike that little clause in a rental agreement that says you agree to lock the door, leaving in unlocked is then on you. Moreover, Microsoft will have a record of turning on the defaults and of you turning them off. If legally compelled to do so, they'll tell that story. If that happens, you can pretty much kiss cyber insurance goodbye and count on that fact showing up in court.

## Here are your options...

My top recommendation would be to upgrade to Azure AD Premium ahead of time and apply [Conditional Access Templates](https://learn.microsoft.com/en-us/azure/active-directory/conditional-access/concept-conditional-access-policy-common) to enforce MFA and block legacy authentication. This gives you the greatest amount of flexibility to take advantage of key concepts like break glass accounts and exceptions for service accounts. Alternatively, my next recommendation would be to prepare users and turn on Security Defaults ahead of the automatic change so that you can control the timelines.

**EDIT 4/24:** Thanks to Craig Willard for calling out some [**important steps (LinkedIn Post)**](https://www.linkedin.com/posts/craig-willard-mba-phd-abd-b3034819_microsoft-365-security-defaults-activity-7055335411430129664-4KwR/?utm_source=share&utm_medium=member_desktop) if you're moving from old school MFA settings.
