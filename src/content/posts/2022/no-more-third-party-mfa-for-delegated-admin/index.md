---
title: "No More Third-Party MFA for Delegated Admin"
date: 2022-02-28
categories: 
  - "cybersecurity"
  - "microsoft"
  - "msp"
  - "news"
tags: 
  - "mfa"
  - "microsoft"
  - "partner-security-requirements"
coverImage: "using-phone-desk.jpg"
---

In a subtle update to the [Microsoft Partner Security Requirements](https://docs.microsoft.com/en-us/partner-center/partner-security-requirements#enable-mfa-for-all-user-accounts-in-your-partner-tenant) article on February 24th, Microsoft precludes the use of third-party MFA for partners wanting to take advantage for Delegated Admin Privileges (DAP) or Granular Delegated Admin Privileges (GDAP). They key quote is:

> Partner **who implemented any third-party MFA** and part of the exception list can still access Partner Center portal and APIs with exceptions **but can't manage customer using DAP/GDAP (no exception allowed)** \[sic\]

Previously, Partners could request an exception when they have properly implemented a third-party multifactor solution such as [Duo Security](https://duo.com/docs/azure-ca) in Azure Active Directory.<!--more-->

## But, why?

I can only speculate but I'd wager that this is for one of two reasons:

- **Microsoft no longer wishes to take Duo's word for it (most likely).** In Duo's CA model, an assertion is passed back to Azure AD stating that MFA was completed. This is a signed assertion and can be validated cryptographically. However, at the end of the day, it's on Microsoft to trust Duo that the claim was made only after some true second factor is completed. This adds risk for Microsoft, because an undetected vulnerability could allow a bypass that could prove catastrophic. After all, we're talking about access to multiple Microsoft customers. By requiring their MFA, they control the entire chain and can ensure that an acceptable MFA method was used.
- **A yet to be disclosed vulnerability (less likely).** It's unlikely but possible a vulnerability in the Duo CA deployment has been found, but not yet disclosed. It's common for companies to release remediation tactics prior to disclosure of the vuln. This is done for the same reason we release patches before disclosure. It's vital to shorten the mass-exploitation window.

Either way, or even if it's for another reason, you need to act.

## Taking Action

If you're using security defaults or Conditional Access to enforce Microsoft multifactor on your CSP tenant, you're good to go. If you're using Duo or another third party, you need to act. Transition to either Security Defaults or Conditional Access to require _Microsoft MFA_ on your CSP tenant. It's worth noting that Microsoft is offering **24-months of free Azure AD Premium P2 to all CSP partners**. This allows CSP partners to implement risk-based and other advanced sign-on protection methodologies.
