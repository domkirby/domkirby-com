---
title: "Let's Stop Device Code Phishing!"
date: 2025-02-17
categories: 
  - "cybersecurity"
  - "modern-workplace"
tags: 
  - "device-code-phishing"
  - "identity"
  - "phishing"
coverImage: "hacker-at-desk.png"
---

Device code phishing is a real threat that often goes unmitigated. Microsoft's [recent warning](https://www.microsoft.com/en-us/security/blog/02/13/storm-2372-conducts-device-code-phishing-campaign/) that threat actor Storm-2372 is actively executing a device-code phishing campaign drives that home. If you want to learn more about device-code phishing, check out the episode of "The Game" below or perform some research. In this article, I'll talk through how you can block device code flows with Conditional Access.

\[embed\]https://www.youtube.com/watch?v=EozC9TOkB7w\[/embed\]

## A Little Context

In this article, we'll be disabling device code flow entirely, **but**, there are some legitimate uses for device code flow. This is most prominent when logging in from a device that is incapable of natural flow (such as a desk phone or legacy PowerShell module). With that in mind, you may find yourself needing to use device codes from time to time. In those scenarios, I would recommend creating an exception group.

## Let's Stop Device Code Phishing!

In order to implement this policy, you'll need **Entra ID P1 or P2,** or a bundle that includes it.

1. Head to the [Entra Admin Center](https://entra.microsoft.com) and authenticate with your favorite admin account
2. Head to **Identity -> Protection -> Conditional Access** ![](images/image.png)
3. Click "Create new policy" ![](images/image-1.png)
4. Give it a name, I like "Deny device code auth" ![](images/image-2.png)
5. I recommend assigning this policy to **All users** and, if you have an exclusion group, excluding the group ![](images/image-3.png)
6. For resources, select "All resources" ![](images/image-4.png)
7. Head over to **Conditions -> Authentication Flows** ![](images/image-5.png)
8. Toggle the control to "Yes" under Configure, and select "Device code flow" ![](images/image-6.png)
9. Head to "Grant" and then select "Block access" ![](images/image-7.png) ![](images/image-8.png)
10. If you need to log for a bit to check for dependency, set the policy to **Report-only**, otherwise, set it to **on** to immediately hinder this threat. ![](images/image-9.png)
11. Click **Create**

That's it, Entra will no longer allow your users to authenticate with a device-code flow. If you need to temporarily allow this flow for some reason, you can temporarily flip the policy off or add the user(s) to the exclusion group. Just don't forget to **undo** the exception!

**IMPORTANT Note:** This will only stop device-code flow when signing on to Entra with a **Microsoft** device code flow. If you are using Entra as an IdP, and authenticating with device flow elsewhere (such as AWS), this **will not** stop the authentication.
