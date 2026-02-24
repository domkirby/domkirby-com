---
title: "How I Protect My Kids Online"
date: 2023-02-25
categories: 
  - "cybersecurity"
  - "safety"
tags: 
  - "cybersecurity"
  - "kids"
  - "online"
  - "safety"
coverImage: "stock-kids-computer.png"
---

This is a particularly hot topic, and one I'm asked about relatively often. I figured I would cover it here... how do I go about protecting my kids when they're using the internet?

\[box\] **Note:** Everyone is entitled to their own parenting style. My styles might not match your styles, and that's totally fine. If some of this helps you, great! If not, also great! Parent your kids how you feel best.\[/box\]

## Making Digital Citizens

In my opinion, one of the very important things I need to impress on my kids is **digital citizenship**. School has introduced the concept of cyber-bullying and whatnot, but I really mean digital citizenry overall. In addition, there's an very high probability that our kids will need to use the computer and other devices when they enter the professional world, it's just how it works.

The last service person I had at my house (pest control, last summer as rough for spiders) charged me on the spot and handled everything electronically. Point being, **everyone** needs to be tech-literate in this day and age. So, for my wife and I, we choose to expose our kids to the internet and couple that with education and a certain amount of control. My basic goals for them are:

- Only hack ethically (you knew I was gonna say that)
- Don't be an asshole on the internet
- Understand the dangers of online communication
- Understand that majority of the internet is lying to you
- Understand that there is certain... content on the internet that isn't meant for them
- Be _good_ at using the internet for research, writing, reading, etc.
- Remember that your dad works in cybersecurity and knows all the things you do on your device even if you think he doesn't (okay this one might be more of a "me" thing)

There's more, but that's a good enough summary for this post.

## Step One: Education

Before we let our kids on the internet, we need to remember why we hate the internet. It's full of garbage, mistruths, bad people, and illicit whatnots. On the flip side, it's also full of great content, good people, and facts. So our first step is to **teach them**.

For example, my oldest is **fully aware** that there are people on the internet trying to steal children. I'm not going to put my kids' age on my blog, but he's old enough to know these things (in my opinion). He also knows about the reality of adult content and what it is/isn't, and we've been working on sorting out satire, straight lies, and facts. My younger kiddos have a 'glimpse' of this information. That is, we talk a lot about the importance of not sharing any information about ourselves, we just don't feel they're ready for the whole reason behind that... yet.

From there, as they _need_ to start communicating electronically, we apply the same rules we do to socializing in real life. This one is simple, "don't be an asshole." Expand that sentence into a verbal explanation of acceptable behavior and set the expectations the same in the digital world as the physical. Now, don't get fired up. The same "don't share your information" rule applies. However, my oldest kiddo is already expected to email his teachers to ask about assignments, hold academic discourse in a digital forum, and has access to class-based chats for discussing schoolwork. That is all digital communication, and I love that modern education has adopted that. They will be better off in the professional world for it.

## Step Two: Rules

I bet you were expecting me to dump a list of super spy parental controls and NSA security tools on here. Well, my kids are 50% derived from me. It won't be long before they get past **all of it**. So, our rules are set like any other rules, through conversation.

All of my kids have clear expectations around how they're expected to behave when they are online, and those rules are tailored to their age. For example, my younger kiddos simply **are not to use any sort of online communication platform**. However, my older kiddo 1) _needs_ to use them for school purposes and 2) needs to start understanding how to communicate digitally so we have been working on those things. Right now, **none** of my kids are allowed on social media, but we'll cross that bridge someday.

## Baselines of Access

This is one of those "what works for me may not work for you" moments. _Generally speaking_, my kids have a fair amount of freedom within their set limitations. I'll focus on my oldest because he's getting to be "that age." He has his own cell phone, because my wife and I want to be able to get in touch with him, and we share locations with each other. Segway: Yes, I always have my kid's location. No, I don't think it's helicopter parenting. The world is a shitty place sometimes, so we choose to have that tool at our disposal. Also, we all share our location so he can see mine as well.

Okay, back to the point. Within the rules we've established, he has free reign over his devices when he's in a communal area of the house or wherever we happen to be. He can be on his phone or his Surface Go as he pleases (within limits, but he's honestly good at self-governing his screentime at this point). At his age, he's playing Roblox and watching YouTube, or playing a game on his phone. From a communication standpoint, he's texting family and friends, etc. In general, his limits are:

- All portable devices stay downstairs at night (protip: just don't give them chargers in their room)
- For my oldest, the phone and the Surface stay in a communal area unless he asks and gets permission
- All of my kids are allowed on YouTube, but not in private (they have smart TVs in their room, but YouTube is blocked for those devices. It's a real struggle, they only have Disney and Netflix 😂)

Assuming the rules are being followed, the actual technical controls are relatively light and more about security than anything else. If they test us, I start to tighten the wrench - and it can get really tight.

## Technical Controls

Okay, now for the content you really want from me. Yes, I obviously have technical controls. First off, the lay of the land: All phones in my house are Android devices (matter of preference) and all tablets are Android based. The one kiddo who has his own computer has a Windows machine (aforementioned Surface Go, absolutely love that device for kiddos). Now, you might think I use the most enterprisey tools in the land, but I don't. I'm not the only parent, and I need it to be easy for my wife, myself, and other trusted adults to control devices (like family when he's over at their house). With that in mind, **here are the tools we use:**

- Tools for **anyone** (any parent could pick these up)
    - [Google FamilyLink (free)](https://families.google/familylink/)
    - [Microsoft Family Safety](https://www.microsoft.com/en-us/microsoft-365/family-safety) (we have an M365 Family subscription, so we have all the features)
    - Note: If you have Apple devices, [they too have great parental tools](https://support.apple.com/en-us/HT201304)
- Intermediate tool: TP-LINK Deco Parental Controls (this is only really used for IP-based restrictions like YouTube on specific TVs)
- "Businesslike" tool: Cloudflare Zero Trust DNS with custom policies (free for 50 users, but you need to know what you're doing)
    - It's worth noting that Cloudflare also has [1.1.1.1 for families](https://blog.cloudflare.com/introducing-1-1-1-1-for-families/) which is "easy mode" DNS filtering.

Now I know you were expecting me to have M365 E5 and fully Intune managed devices, but I don't want to manage all that at home. My personal PC is enrolled in that stuff for testing, but that's it.

### Control 1: Time

The first thing we want to control is time. I don't want my kids watching Netflix at 3AM, so their TVs stop having internet access at set times each night (purely a matter of [go to sleep](https://www.youtube.com/watch?v=SDCqgHLX8Ys)). In addition, my eldest's phone cuts off at bedtime, as does his Surface Pro. A cool feature of Family Link is that my oldest can still call us if he needs to when his phone is locked down, but that's it. My other kids are still young enough that just physically putting the device somewhere gets the job done (in addition to the TV connectivity).

### Control 2: Supervision

Supervision comes in two forms: digital activity data and literal supervision. For the most part, we're keeping an eye on the kids and listening for things we'd rather not hear from their device. Through Family Safety and Family Link, we also see:

- Sites they visit
- Apps they (attempt to) download
- Xbox games they play
- Apps they spend time on
- Total time spent on devices daily and weekly

We keep tabs on what they're doing, and educate where we need to.

### Control 3: Actual Restrictions

Okay, here's the fun part. We keep things pretty light in the restrictions department unless rules are broken. There's the obvious content restrictions and time limits, as well as application limits. For example, app stores are filtered by rating. In addition, especially on phones, permission is needed for each app install. We do this because 1) my oldest doesn't quite understand storage limitations yet and 2) I take opportunities to talk about digital privacy, security, and application permissions with him. This also prevents the use of unmanageable browsers, social media (we're not there yet) and other shenanigans.

**When the rules are broken.** This is a piece of flexibility that is important to me! My wife and I really want my oldest to have his phone, for the aforementioned comms and location purposes. However, everyone makes mistakes, and it has consequences. Through Family Link, I can easily turn his phone into not much more than an old dumb phone pretty quick. I can even disable Chrome and Google should we choose to (leaving him with calling, texting, and contacts). We take steps commensurate to the mistake. For example, fumbling through Google safe search long enough to find something it missed? Great, now you have to ask for each new domain! MUAHAHAHA. Over time, he rebuilds trust and gets more privilege back.

### Control 4: Cybersecurity

Yeah, I harden all devices. Duh. Here's a glimpse into how I secure everyone's devices:

- Everyone has a passcode (but we know it and can reset it). I want my kids to know the importance of hardening their devices, and I don't want their friends messing with their devices. In addition, there's no "so and so got on my phone." If you tell your friends your password, that's on you!
- PC: Defender (managed)
- Network: Cloudflare DNS. Cloudflare DNS does content bits at the network level, but I also use it's malware blocking features. PC's have the Cloudflare client and SASE enabled for HTTPS inspection of downloads and such.
    - Also worth noting, the Android devices are configured to use DNS over TLS to our Cloudflare endpoint for secure DNS on the go
- **Thou shalt install their patches**. If I catch my kid skipping their patches, I'll do them the favor of interrupting them and rebooting. Patching > Roblox
- Everything is encrypted

 

## To Sum it Up

Like I said in the beginning, this is just what my wife and I have chosen as our style. What works for us may not for you. My aim isn't to give you parental advice so much as parental ideas that you may find useful. Also, this should serve as a reminder that, regardless of style, we need to be aware of how our kids are interacting with the digital world and shape them into good digital citizens.

**EDIT (2/27):** Thanks [Chris Johnson](https://www.linkedin.com/in/chrisjohnson1337msp/) for providing this great resource for parents as well: [CommonSense.org](https://www.commonsense.org/)

_Kids in the photo are from a stock image through a reputable source (Canva)_
