---
title: "Dear SaaS Companies: You're Holding Us Up!"
date: 2023-03-02
categories: 
  - "cybersecurity"
  - "future-of-work"
  - "modern-workplace"
tags: 
  - "identity-management"
  - "oidc"
  - "saas"
  - "saml"
  - "sso"
coverImage: "handcuffs.jpg"
---

CIS 6.7, CSF PR.AC-1, and just about every other security framework call for centralized account management. SSO is the best way to deliver centralized account management in the modern SaaSified world. However, even in 2023, many SaaS companies nonsensically insist that single sign on is an "enterprise feature."

## Let's Catch Up with... 2018 perhaps?

There was a time when single sign on tech was complicated and largely inaccessible to small businesses. However, that time has come and gone my friends. Azure Active Directory, Okta, OneLogin, and others have made [SAML](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) and [OpenID](https://openid.net/connect/) based single sign-on easily accessible to the modern small business, at affordable prices. What's more, they are all based on **extremely well established and open standards for passing identities around**. Because these are open standards, a whole lot of SDKs and documentation exist that make implementing these protocols easy.

Point being, it's not a massive technical challenge to implement SSO nowadays. Sure, it will take a few sprints, but that doesn't mean it's hard. In fact, many customer identity management platforms bring this functionality with them (Auth0, Amazon Cognito, etc.).

## So why isn't it implemented?

If you ask me, there just isn't a good reason. However, if we look at things wholistically, implementing SSO isn't seen as a driver of additional revenue. Cranking out version 2023.whatever on the other hand is seen as revenue generating activity. Thus, security enhancements are allowed to fall to the backburner... again. And as a result...

## SaaS Companies Weigh Us Down

If your product is on or eligible for [SSO.tax](https://sso.tax/), you're an offender here. Single Sign On isn't a feature enhancement, it's a modern security baseline. It's a baseline we really need if we really want to move cybersecurity into a more mature state, based on frameworks and defensible practices. It's a baseline we need if we want to be able to make our customer's lives easier, manage customer identities at scale, and take advantage of modern identity platforms that bring massive security gains.

And, let's be honest, SSO is good for you too! Customers that implement SSO represent less secrets for you, and they aren't going to come to you demanding specific identity features, because **you aren't hosting the identity**. And while SCIM provisioning would be even better, I'm not even demanding that (because I know that would be more overhead than just accepting an ID token or SAML assertion). Just give us SAML or OIDC, because at least that way I can lock users out in a click and deal with the account object/license later. If we at least control the sign-on, we can centrally audit activity and control our own authentication policies.

 

**So**... do better, implement SSO already.

\[box\] This isn't all SaaS vendors, some support this on all plans, and that's all I'm asking. In fact, Freshworks has freemium offerings and they even support SAML on their free plan. There's no excuse. \[/box\]
