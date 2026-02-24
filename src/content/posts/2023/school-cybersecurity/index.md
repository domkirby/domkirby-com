---
title: "School Cybersecurity - What can we do?"
date: 2023-11-20
categories: 
  - "cybersecurity"
tags: 
  - "cybersecurity"
  - "k12"
  - "schools"
coverImage: "Fido2-Kids.jpg"
---

In my [last article](https://domkirby.com/blog/another-school-district-targeted/), I covered the concerning trend of cyber-attacks aimed at K12 school districts. I've been keeping that up to date as best I can, so check there for the updates I've shared. To the point of this article, we saw Clark County and now Jeffco Schools get hit. In addition, SingularityMD is [claiming that they have other victims](https://www.databreaches.net/times-up-singularitymd-sets-up-to-sell-data-from-jeffco-public-schools/). So that leaves the question, **what can be done**? I think a lot can be done, but it might be tough.

## The Challenge

I've never been in the seat, so I'm speculating a bit here. However, common sense would tell me that securing a school district network has got to be one of the toughest roles to be had in cybersecurity. Why? Because they have the widest array of end-users, possibly huge wide-area-networks, huge amounts of data, and a lot of systems that work with that data. Large districts often write their own apps to create better ways to interact with the data.

Let's take identity management as an example. In an enterprise environment, the ideal picture is we add that person to Entra ID or AD, and SSO/SCIM take care of the rest. Maybe we pull that from an HRIS to make things easier, and hopefully we have RBAC. We likely have all adults on our network, and we can train them to be cyber aware. We can even hand out hardware keys if we can pull the budget.

Let's look at a school district. Imagine you have 14,000 staff members. They're adults, so maybe the approach above works (but good luck getting MFA hardware with your budget). Now throw **80,000** students in there. Students from Kindergarten through 12th grade. Ages four or five to 17 or 18. Throw in a dataset on your 80,000 current students and probably hundreds of thousands of alumni. All of these students need an account in this digital world. You need to get them securely synced into AD, Google Education, testing tools, and who knows how many other platforms. **And**, you need to get passwords made for those students and get them into the tech. **And,** how well can a five-year-old MFA? What device are they even going to use? **Then**, add their guardians. Let's call it, for easy math, **160,000** guardian accounts with access to parent platforms (like the SIS parent portal).

## What can we Do?

Okay, that's a huge environment. How do we protect it? Honestly, we need to break this down by "sector" of account.

### Staff and Faculty

In my opinion, this group is the easiest to work through. Now, I've heard that school faculty can be a tough audience, so there's a hearts and minds conversation here. The mission statement is simple, however: **we need to protect your data and data about our students**. Plain and simple, that's the goal here.

- **Implement MFA:** This is a **must do**. MFA is a security baseline nowadays, and you **have** to use it. There are numerous ways to do this. My preferred way would be FIDO2-based credentials ([WebAuthn](https://webauthn.guide/) for the nerds). Windows Hello can do a lot of the lifting here, but hardware keys would likely become necessary. Knowing that the budget for 20,000 Yubikeys may be hard to come by, other methods could be explored. Even SMS-based would be better than nothing, but [TOTP](https://en.wikipedia.org/wiki/Time-based_one-time_password) would be a good option too to get you _somewhere_. Certificates on organizational devices are also an option.
    - As a bit of a nerdy bit: Try to get everything SSO'd (and not just LDAP bound). You can then implement a strong MFA tool in a central place. ADFS, Entra ID, Okta, Duo, etc. all have great options for this.
- **Implement Location Policies:** Since districts tend to have managed networks, you could draw lines here. Discern what can be done outside versus inside the network. Geo-location can also help eliminate script kiddies!
- **Consider Device Management:** What if only managed devices could access administrative applications? Entra ID and Intune can help limit the blast radius of a compromised credential.
- **Implement RBAC:** Does everyone at "High School A" need access to student data from "Middle School G?" Probably not, see if you can draw some lines here. Do the same thing at departmental levels for file shares and other platforms.
- **Cover the basics:** How strong are your password policies? Make sure they're good and consider banned password list solutions. Also, as a reminder, NIST SP 800-63 recommends _against_ requiring frequent change. Instead, make a strong overall policy and enforce it.
- **Security Awareness Training**. Perform ongoing security awareness training and track it. Also consider periodic phishing tests. Make them friendly and encouraging, they should guide people in the right direction. Reward the ones that do great, teach the ones that need help.

More of a general infrastructural thing, most school districts are stuck with a lot of legacy infrastructure. That said, much of it may not need to be exposed to the internet. Can the VPN scale to support putting more apps and users behind it? This would add a layer of authentication and encryption, without overhauling apps. Even better, can you bring in a [Secure Access Service Edge](https://en.wikipedia.org/wiki/Secure_access_service_edge) (SASE) solution? This would create a hyperscale network, with ties back to your private network, while also protecting general internet traffic that happens outside of your trusted networks.

### Students

I sympathize with this one. I know some of these users are learning to tie their shoes. On the other hand, these are your greatest threat actors. Always trying to get past the almighty filter and generally test their limits. We now need AI to detect those AI written papers. But let's just talk about how we keep their accounts from getting fully compromised.

- **For younger kids... device restrictions:** If you have a 1:1 program, could you just prevent them from logging into things with other devices? It might not be everyone's favorite policy (I personally hate those damn Chromebooks), but it would be rather effective. Not the school's Chromebook? Sorry, you can't go there!
- **STOP the password pattern madness:** YYYYMMDD is a terribly password. You would never let your grandma use that password! Is there a better way to do this? What if each student had their own password, with strength requirements based on age? Could you make that happen? Maybe rely on teachers to distribute temporary password each year? Is it easy? No, but cyber isn't always easy! Even if a teacher chose a password for his or her class to use, I think that's better than patterned passwords.
- **Location Policies:** Same as above, though the story is different nowadays. What do kids need to do off network?
- **MFA for older kids:** I think MFA of some form is a fair expectation for middle schoolers and up. Can the cost of security keys be worked down and integrated into your annual technology fees? Can some other hardware attestation happen (such as a school-issued device or QR code-based card)?
- **Anonymized usernames:** This is already happening thanks to PII concerns, but I think it's a good thing. Usernames based on student ID numbers, or some other anonymous factor could be very valuable.
- **Security Awareness Training:** A lot of schools teach digital citizenship. Add in security awareness training, and get kids equipped to protect themselves in the digital world. The benefits can expand inward towards your own identity plane.

_Anecdotal: The adorable (or creepy, your call) little dog in the featured image is AI's attempt at creating a "FIDO Key for Kids." It's larger, so it's harder to lose. It's also got a friendly cybersecurity face!_

### Guardian/Family Accounts

This is another tough one. Most tech-bro SaaS startups would be bragging about having this many user accounts. You also have a very wide range of demographics and technical capabilities in this group, and they all must be addressed. Again, start with hearts and minds: **we need to protect your family's data, so we're adding some protective measures**.

- **MFA**: Again, MFA should be a baseline. Can these guardian accounts get TOTP support? SMS-based support? Even better, [passkeys](https://fidoalliance.org/passkeys/)? At least offering the option, and encouraging it, is a start. You may need to decouple identity and use B2C SSO where possible. Can a platform like Auth0 or [Entra ID for Customers](https://learn.microsoft.com/en-us/entra/external-id/customers/overview-customers-ciam) (formerly Azure AD B2C) step in here? Or can you even deploy something like Keycloak? You could even look to offer "Sign-On with Google" or similar solutions. _In this scenario, even email-based MFA can be a good start. It's better than nothing!_
- **De-couple this group from the rest:** Student and faculty accounts probably need tight integration. However, can you offload guardians to another service? If so, I'd consider doing that (through the aforementioned cloud solutions). This would enable you to separate the identity planes and thus the risks that come with them.
- **Security Awareness Training:** Yes, SAT is for _everyone_. Can someone on the tech team put out a "cybersecurity digest?" What's going on in the world and what should parents/guardians do about it? You're in a unique position to educate the masses!

## More General Thoughts

Aside from identity, which is likely the hardest part of these networks, consider other basics:

- Are you comfortable with your device management methodology?
- How's your network? Can you differentiate student, staff, and public traffic?
- How's your logging? Is there a SOC in place ready to alert when things are off?
- Do you have the power to immediately isolate?
- Can you take action if something is wrong and pull things down in an emergent fashion?
- Is your patching solid?
- Do you have solid administrative controls, such as organizational unit limits for site-based tech staff?
- Look at your custom code, has it been developed securely? Who's keeping track of upstream code vulnerability?
- Are regular access reviews in place?
- The list goes on...

I recommend that _everyone_ use a security framework, and school districts are no different (though they may need to apply them differently). I strongly recommend the [CIS Controls](https://www.cisecurity.org/controls), but there are plenty of options out there.

 

**It is imperative** that we fix this problem! Victimizing students is a terrible and morally inept money-making strategy. Nonetheless, we're faced with it, and we need to fight back.
