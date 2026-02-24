---
title: "About That Tech Debt"
date: 2025-12-09
categories: 
  - "ai"
  - "automation"
  - "digital-transformation"
tags: 
  - "agents"
  - "ai"
  - "automation"
  - "tech-debt"
coverImage: "Gemini_Consultant_Table-scaled.png"
---

In my [last post](https://domkirby.com/blog/ai-vs-workflow-automation-for-msps/), I talked about the “agent hype” we’re all dealing with. The pressure to leverage AI when AI might not be the right solution for the presented problem. I also talked about tech debt, which is probably the **single greatest thing** that is going to stop you from succeeding at this. Well, that and terrible data management practices leaking all the company secrets.

## What is Tech Debt

In a nutshell, tech debt is what you accumulate over time due to sticking with legacy systems and ways of working. It’s the reality that if your data is a "hot mess" or your software lacks modern connectivity, you're going to spend twice as much time building workarounds that merely **shift, not solve, the underlying issues**. It usually leads to innovation roadblocks, security issues (can’t patch it if nobody makes patches), and an inability to make things better and more efficient.

The internal cost is one thing, but tech debt can also significantly impact your ability to attract and retain new talent. Think of new workforce entrants who grew up not even knowing what a shared drive is. They worked on platforms like Google Docs, cloud-based file storage, and soon, AI tools. Handing them your terrible Foxinet VPN client creates immediate, unwelcome friction for a workforce that grew up in a comparatively frictionless, cloud-native world.

Over time, tech debt accumulates interest in the form of vulnerabilities, aging hardware, unrealized productivity gains, and eventual irrelevance in the space.

## “Lift and Shifting” is a Balance Transfer

[![A split-screen isometric illustration comparing two cloud migration strategies. On the left, titled "Lift and Shift," a cluttered, dusty server rack overflowing with folders labeled "Legacy" and "Obsolete" moves into a cloud icon where the data remains equally disorganized and "Untouched." On the right, titled "Modernization," the same chaotic server rack passes through a glowing filter, transforming the mess into organized, futuristic digital cubes. The modernized section includes labels for "SaaS & APIs," "Centralized Identity," "Clean Data," and "Optimized."](images/Gemini_Modernization-300x167.png)](https://domkirby.com/wp-content/uploads/2025/12/Gemini_Modernization-scaled.png)

In the rush to get people to cloud, especially in the COVID lockdown era, the “lift and shift” was our go to method (I too am guilty of this). Take what’s there, shoehorn it into a cloud solution, and _poof_, you’re cloudy now!

However, this does very little to pay off the tech debt itself. You’ve simply moved that balance to another account, **often accruing higher interest in the form of increased cloud costs**. Think about these questions:

- **Is running the same old legacy .NET client/server app on a server in Azure _really much different_ than running it in the closet?**
- **Is that SharePoint library that’s a direct clone of the old S: drive really an improvement of the way we dealt with files?**

In the first scenario, we got rid of the server. We aren’t rolling trucks for SMART alerts anymore, but we still have operating systems and networks to manage. And, from experience, dumping file shares into SharePoint often **makes things worse**, leading to path length limits, permission nightmares, and unusable search functionality.

Look, lift and shift served us well in its time—it was a hero when we urgently needed to get people to the cloud because they couldn't drive to work anymore. **But at some point, we have to circle back and pay that debt.** We need to think about transformative moments, such as a cloud migration, differently.

## Paying Down the Debt: _Modernization_

The key to paying down the debt is less about _migration_ and more about **modernization, and modernization can be challenging.** When we think about modernization, we have to have strategic conversations with our clients. **We need to open minds not just to new technology, but to new ways of working.**

Let’s take a classic example: moving File Shares to SharePoint. SharePoint is fundamentally and comprehensively built differently than our old SMB shares. It stores files, but it’s much more than that. It’s meant to be a place where we collaborate on our content, and it provides so many more tools than Document Libraries. It also has some important, and often missed limitations (naming, file path length, etc.).

When we adopt a new technology, we owe it to ourselves to explore ways to get the most from our investments. The people involved require attention equal to, or perhaps greater than, the technology itself. Adding the people factor takes you from “the tech person” to “the business advisor.” **Working with people, understanding how they work, and influencing change and growth is good for everyone, and can be profitable for you.**

Instead of saying: “This is the new fileserver,” introduce SharePoint (or your tool of choice) as a **new way to get things done**. Work with data owners and leaders to **help them understand what new functionality they’re gaining**, and how to take advantage of it.

## The Importance of Clean Data

As we move through this journey and work through taking advantage of capabilities, we also need to think about **clean data.** We’ve all seen that shared drive that is 80% museum, 20% where work gets done. **The S: drive is the literal illustration of the 80/20 rule!** Moreover, they probably have NTFS permissions buried deep in layers and random folders scattered about for 'temporary projects.'

This is where the lift and shift model _really created pain_. We move all of it, the 80% junk and 20% gold, to the cloud. When we moved it to a system where permissions are difficult, broad scopes are encouraged, and the way we access things is different, **we created a nearly unusable monster**.

We have to tame that monster, and again **work with people** to rethink how we organize our data (and what data we hang on to). From a security perspective, getting **retention and deletion policies** in place gives us both a security and cleanliness win, but it goes beyond that.

We need to get into **how things are organized**. If you’re thinking about introducing AI (even basics like M365 Copilot), its capabilities are going to be **essentially useless, and likely dangerous**, fed by a closet we didn’t bother to rearrange.

This is where we help people leverage **new ways of working** and apply data organization to it. In the SharePoint example, there’s a lot of power in splitting out Sites or Teams for functional areas of the business - even for small businesses. Think Finance, Operations, Leadership, etc. Encourage leadership to take this moment to structure things how their business is structured (or how they want their business to be structured). From there, you can break into document libraries as needed for “subsystems.”

From a **security standpoint**, rethinking organization also makes access control far more efficient. We’re able to set permissions at the site or team level, perhaps even with dynamic groups. For SharePoint in particular, we should avoid ever going deeper than Document Library level permissions.

Long story short, move the data the client _needs_, and organize it in a way that drives efficiency, not confusion. **Done properly, this upfront data organization will alleviate a lot of “adoption pain” that comes with new tools.**

## Applications Are Next

Files are all well and good. Getting them neatly into SharePoint, access controlled properly, and pruned goes a long way for both humans and the AI tools that will create value for them. But, we rarely end the story with files. Alas, we find ourselves needing to deal with **applications**.

In the modern world, the days of hot new applications coming out with sweet .NET clients that need an ODBC connection to some SQL server are long gone. No, they’re web based. We work in the browser (or on some memory gobbling Electron app, but we’ll save that rant for another day). When we’re on the go, we have mobile apps that let us get work done. It’s a brave new world. Even for Office, I find myself using desktop apps less and less as time goes on and web capabilities grow.

**But here’s the problem**, your plumbing client has been running on the same plumbing management software for twenty years. They can’t leave now! I know Jim has to come back to the shop at 5:30PM to enter his work tickets so we can get paid, but that’s just how it is! **Except it’s not**. We can modernize apps, we just haven’t had the right conversation.

As nerds, it’s easy (again) to forget that **people** are the core. **Technology needs to empower people.** If that ever flips, then make sure you pick the Red Pill.

When it comes time to talk apps, **we need to be having high-level business conversations first**. Let’s put you in these shoes, think about your PSA tool. Switching PSA tools feels like a nightmare (and it often is). You’ll never (or shouldn’t) do it if there isn’t some sort of outsized benefit that can be measured in dollars.

When it comes time to talk applications, you’re talking to that business leader about **changing the way they run the business. This is the furthest thing from a technical conversation, it’s a business conversation.** You can’t walk into your QBR and say “alright Bob, let’s attack that janky LOB app you’re paying $1,800/month to run in Azure.” You need to have been presented with a pain point to solve.

When a mid-sized company’s CTO or CIO is presented with a problem, they go looking for a solution. A technical one, sure, but a technical one that shoots **directly at the business problem**. You again need to ask: **“Why?”** Maybe your client is looking to earn more revenue without adding substantial headcount. Maybe their customers are frustrated with field technicians writing down credit card numbers, or having to deal with printed documents. Maybe they’re tired of the Azure bill, and a SaaS solution can bring cost-savings _and_ improved productivity.

Whatever the pain is, you need to become the CIO, **the business advisor**, and find a technical solution that helps solve the problem for the people. It is when you’re in this position that you can get deeper, ask harder and more intricate questions. Help the client **explore the art of the possible** and settle on **the best outcome for the business**.

> _You (the MSP) need to get out of the product pushing business, and into the business transformation business._

In that _art of the possible_ exploration, you’re likely to find the “now” and the “future” solutions. You’re given more latitude to think about things like **workflow automation, AI assistants, or agentic AI**. You can think about the **data and integration layers** while keeping a keen eye on the **user experience and flows of the business**. Not only does this set you apart from your competition, **it is in no way work that you should be doing for free**. You should also think _outside the box_. While a commercial off the shelf solution might be the play, so too might be a Power App designed specifically around the client’s operating manifesto. Gaining _that skill_ puts you in an entirely different arena, but that’s a topic for another day.

## Tying it Together as a Strategy

These things sound great, but if you break them apart, it’s utter chaos. Modernization, as I mentioned, **is less about technology than it is about empowering people**. This is because, today at least, _people_ make up the business. If we don’t take the _proper_ approach to modernization or, for that matter, AI transformation, it’s guaranteed to fail. The innovations will be rejected, people will leave, the business will fail. Or, more likely, the client will just fire you as soon as this starts happening, because you haven’t built trust.

To pull off a successful modernization plan, you need to get it sewn into the **strategy of the client’s business**. I already mentioned that pain of some sort needs to drive the need. Once the need exists, the leadership needs to choose to prioritize it and address it. **This is when you put on your CIO/business advisor hat**.

**However**, before you’re going to be made aware of the pain, you have to **establish yourself as that trusted business advisor**. This means that your QBR can’t be centered around how many tickets you closed and what the hottest new EDR product is. That’s unhelpful, and centered on commodities. Instead, take the time to understand their client’s business. Not just _what they do because that’s their industry_ but **what they really do and how they do it**.

- Who are the players?
- Who carries the influence?
- What are the growth plans? Audacious goals?
- How and when do they plan their budget?
- How do they plan (do they use EOS or some other methodology)?
- What’s stopping them from achieving?

Questions like these are valuable, relationship building questions. Questions like these **open doors to opportunity**. If you understand, and can get in front of, their planning cycles, you can influence the technology roadmap, the budget, and demonstrate how your expertise can clear hurdles for them. **This is when you explore art of the possible, and drive their business - and your business - in the direction you want to go to drive results:**

- Present _real modernization opportunities:_ replacing apps with modern, SaaS-based alternatives that enable API and/or MCP driven access to clean, reliable data.
- Present workflows you’ve identified from common tickets that are ripe for automation or improvement, or agentic workflows, riff on potential positive financial outcomes.
    - Also, don’t be too shy to point out very human opportunities such as improved process documentation. Not everything can be automated, it doesn’t mean you can’t share a respectful opinion.
- Present opportunities and **ask the leader to decide what would be meaningfully impactful**
- Sell additional consultative/strategic time to _really_ dive into these concepts. Process mapping, vendor comparisons, proposals for efficiency gains, quality of life improvements. This is **highly valuable work that is dependent on expertise** and is thus expensive.

Making yourself the person that the client calls when they have a problem is worth more than **any** help desk metric or number of blocked spam/phishing emails. You’re one of the few “vendors” in their circle of influence with _aligned incentives_. A shared interest in each other’s success. You will drive theirs, they will drive yours.

 

Let’s bring this full circle back to the "AI Agent" hype we started with.

Everyone wants the "magic" of AI. They want the agent that automatically dispatches trucks, predicts inventory shortages, and answers complex billing questions.

But as we’ve discussed, those agents run on **context** and **connectivity**.

- They need **APIs** to talk to applications (which Jim’s legacy plumbing software doesn’t have).
- They need **clean data** to make decisions (which your messy S: drive museum can’t provide).

**If you try to build the future on top of the past, you aren’t building innovation; you’re building a hallucination machine.**

Tech debt isn't just an annoyance for your technicians anymore. It is a hard ceiling on your client’s growth.

If you want to be the advisor who brings them the life-changing power of AI, you have to be the advisor who builds trust and leads them out of the museum first.

Stop doing balance transfers. Start paying down the debt.
