---
title: "Business Email Compromise is Still Alive and Well!"
date: 2022-01-22
categories: 
  - "cybersecurity"
tags: 
  - "bec"
  - "email-compromise"
coverImage: "brett-jordan-email-on-phone-unsplash.jpg"
---

Ransomware, zero-days, and other "sexier" attacks have dominated the news lately. But an article I [read on The Record](https://therecord.media/nigerian-police-arrest-members-of-silverterrier-bec-gang/) served as an important reminder that business email compromise (BEC) attacks are still very much alive and well. BEC's are one of the simplest attacks yet are also some of the most effective. They come in two key flavors: without credential compromise, and with credential compromise. Let's talk through them:

## With Credential Compromise

When a BEC is executed with compromised credentials, it usually happens after phishing. The kill chain is easy and straightforward:

1. **Phish** a high value target, such as a CEO or CFO
2. Use the directory to **identify** the follow-on victim
3. **Reconnoiter** for a bit to figure out how the business communicates, what procedures and controls may be in place, and to plan your next move
4. **Craft** your attack message, and send it

The idea is simple; you want to convince someone to _do the wrong thing_. This often comes in the form of wire fraud, getting someone who is authorized to send money in an unauthorized way. Businesses have been cleaned out for millions, with no recourse, because they _willfully_ completed a wire transfer.

## Without Credential Compromise

This form of attack is the more common one, because it's much easier to do at scale. It's straightforward as well though:

1. Create a phony email account with a display name of a high value target
2. Identify the follow-on victim with public data
3. Craft your attack message, and send it

You can see how streamlined the attack is. Many users will not pay attention to the email address, just the display name. If your CEO is John Doe and the message came from "John Doe" having been marked as really urgent, you're more likely to act on it. That's where diligence comes in! The goal of the attack is identical to the goal of the first one, convince someone to do the wrong thing. Overall, these attacks are less successful, but the ability to scale them up makes them valuable.

**The point is** that this is quite a common tactic that can result in severe financial or other types of damage. You need to make your users aware, and multiple steps should be put in place to reduce the chances of a successful attack.

## Stopping BEC's

Of course, I can't guarantee you'll stop a BEC, but these key items have helped me in the past:

1. **Educate.** Teach your users about business email compromise and the tell-tale signs of it. Key things to look out for include spelling and grammatical errors, but there's one key thing we can teach out: **Display Names**. A display name in an email is nothing more than a field in the header. Don't believe me? Analyze a header in an email you've received. I can use just about any email service and make my "name" whatever I want it to be! But if we teach our users to look _beyond_ the name and at the address, the more common tactic becomes clear: ![](images/tommy_ceo-300x41.png)Put simply, it just comes down to paying attention to your surroundings!
2. **Create Controls**. Process and procedure can go a long way. If your customers frequently perform wire transfers or similar activity, coach them through building a comprehensive process they follow every time. This can include calling someone at a known number, only initiating it through certain workflows (perhaps a Power Automate workflow), and other controls. This makes it harder for someone to infiltrate the process.
3. **Use Tools.** This is an area where tools are particularly weak, but they should still be considered a line of defense. Something like Ironscales can go a long way by showing a banner that says "Hey we know this says Tommy CEO but this isn't Tommy CEO's email address." It doesn't necessarily stop the attack, but properly trained users should see something like that and think twice.

 

The take home from this article should be to avoid "shiny thing syndrome." The very thing that makes cybersecurity a fun challenge makes us vulnerable. There's always a new trend we have to deal with. Problem is, the old trend is still there hitting us in the back!
