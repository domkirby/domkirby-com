---
title: "AI is Slowing you Down"
date: 2025-12-08
categories: 
  - "ai"
  - "automation"
tags: 
  - "agents"
  - "ai"
  - "automation"
coverImage: "Gemini_AI_Hype_Cover-scaled.png"
---

**Click bait title is click bait, but I have a point here**. AI is our new obsession, and the current demand is for “agents.” Agents are going to change the world they tell us, do work for us. And, for the most part, it’s true. We’re already automating some of the work being done at big and small companies alike.

However, we seem to be forgetting something: **we’ve been offsetting manual work with automation for _years_ in almost every industry**. Whether it’s robotics in automotive manufacturing or business process automation to help us make a process more efficient, _automation is old news_.

## Vanity Outshining Value

Small businesses especially need **real value, not just the shiny, “vanity” of “AI.”** They don’t have cash to burn on science experiments!

> _The problem is the false brand power behind “AI.” The term “AI” is super vague and often just means using a large language model (LLM)._

People asking to "throw it at AI" or "use AI to automate this" are missing the point—they haven't figured out the actual problem or the value they want. This is a HUGE chance for MSPs to stop being just tech people and start being **true business advisors.**

## Diagnose the Actual Problem: Why?

Saying that AI is never the solution would be ridiculous. I’m simply saying that you can’t know whether AI is the solution if you don’t know the **actual problem**. If you’re being asked for something, there’s a reason.

The secret weapon? **Asking “Why?”**

_Why_ is the client looking to automate their invoice approval flow? Is it accuracy? (AI might be a bad idea.) Is it efficiency? (Workflow automation is a solid bet.)

## Apply Value _to The Problem_

When you understand the “why,” you can figure out the “how.” This usually involves **“process mapping”** to see how humans do the job now and find ways to make it better. Less repetitive, less error prone, whatever answers their “why.” **The goal is to apply value to the problem, not just slap “AI” on it.**

## The Common Paths

\[caption id="attachment\_1998" align="aligncenter" width="300"\][![A split-screen infographic illustration comparing "Workflow Automation" and "AI Agents." The left side, labeled "Workflow Automation," features a cool blue, linear vertical flowchart with icons for a document, a gear, and a checklist, representing a static, mechanical process. The right side, labeled "AI Agents," features a vibrant orange and purple design with a central glowing node connected via a network to icons for data, research, tools, and communication, illustrating a dynamic and flexible feedback loop.](images/v2_Gemini-AgentVsAutomation-compressed-300x167.png)](https://domkirby.com/wp-content/uploads/2025/12/v2_Gemini-AgentVsAutomation-compressed-scaled.png) Feel free to use this graphic with your clients, Gemini made it.\[/caption\]

If we do accept vanity terms for a moment, your process mapping is likely going to send you one of two ways: **workflow automation**, or **an “agent.”** However, in these common SMB scenarios, they are rather similar.

- **A workflow automation** takes a set of inputs and executes a set of tasks based on “if/then/and/or” flows. They are static: _If Bob submits a document to the invoice form, send it to Alice for approval and then place it in the list of invoices to be paid._
- **An agent targeted at a specific workflow** takes a set of inputs, **thinks about them in some way**, **makes a decision**, and then executes a set of tasks based on “if/then/and/or” flows. They are more flexible, but also more error prone. Each step in this process is a potential point of failure or integration challenge: _If Bob submits a document to to the invoice form:_
    - _Make sure it’s actually an invoice_
    - _Ascertain the invoice amount_
    - _Access the chart of accounts and vendor list, identify the account code and vendor_
    - _Access the AP system, flag a risk if ACH info has been “changed”_
    - _Send Alice a summary of this information with a recommendation to approve (or not)_
    - _Place it in the invoice payment queue_

Both options automate a portion of the AP flow. Your "why" is the key to **deciding which one fits**. While the agent is clearly "more powerful," **it comes with a steep penalty**: it will cost _at least_ twice as much to build, _at least_ twice as much to operate, and introduces significant risk to be managed. If your client's only goal is simply to ensure Alice reviews every invoice, the agent is massive overkill. Always present the full range of options, but never rush into the most complex one. Oh, by the way, stock Power Automate is capable of much more than that example workflow automation!

## Then There’s Tech Debt

The truth of the matter is, if Bob and Alice’s company use QuickBooks, you can pretty much toss that “agent” out the window. The agent is going to fall apart as soon as it loses access to modern protocols like APIs and MCP.

Could it be done? Sure. But you aren’t going to automatically import the chart of accounts and vendor list. Alice is going to have to keep that up to date elsewhere. You’re creating additional work, you have to make sure the client's expectations are well set, and they know they’re trading one problem for another. When you’re answering the “how,” you also have to evaluate what’s possible given the client’s IT environment.

At the end of the day, if your client is sitting on legacy software and data architecture, you’re **severely limited in terms of what you can accomplish for them**. Now, this of course creates opportunities for modernization projects. Making the client aware of the tech debt in between them and value greatly increases the likelihood of closing those opportunities.

### But… What about RPA and “Vision” Type Agents?

There is a version of “agents” (though it isn’t new) that will literally click on buttons in QuickBooks for you, and enter data. These are really cool. However, to be honest, they tend to be problematic.

You’re introducing an entirely new kind of risk with these tools. They aren’t interacting with data, they’re interacting with the “screen.” This means that one software update or hallucination can cause a _lot_ of missed errors you won’t catch until it’s too late. Do explore this tech, but proceed with caution. You should show extreme bias towards true modernization (SaaS with APIs/MCP capabilities to work with agents).

## Let’s Look at Your MSP

Let’s put a different angle on this, and look at a workflow automation and agent you can use for your own practice.

### Workflow Automation: The Ticket Form

A lot of MSPs have the support form. It’s a simple form on your website or (more ideally) behind some kind of login. It collects the basics:

- Who are you?
- What’s the problem?
- How urgent is this?

Applying our “if/then/and/or” concept, once the user submits the form the automation will likely:

- Make sure that user is a client (probably by email look up)
- If so, create a ticket with the provided description and urgency
- If not, either discard the entry or create a lead for your sales team to tackle

Simple. You get the ticket, the user gets a warm and fuzzy confirmation that you’re on the way! This is a very basic automation, but it is powerful. It allows you to structure the input in such a way that you get a complete ticket.

### Agent: The Dispatcher’s Aide

Let’s add an agent to the mix. Agents love a couple of things: **tools and unstructured data**. Let’s use the same ticket form, but this time we can add a lot more power to the automation:

- Find the customer (let’s say this is Alice’s ticket) and if they exist, proceed (if not, make a lead)
- Create the ticket in Alice’s and assign it to itself (the agent will own the ticket while it does its triage, Alice gets her ticket number so she’s heard).
- An LLM can analyze the _unstructured data_ describing a user's problem, such as the statement, "I cannot print to the coffee room printer," and use this information to make inferences.
- Use a _tool_ to dive into your documentation system, and find the printer that is in the coffee room. _\[Side tangent: You need good notes. We both know your user isn’t going to say printer AB7731, they are going to say coffee room printer.\]_
- Use another _tool_ (Auvik perhaps) to see that the toner level is low.
- Summarize the work it did in a worknote, log 15 minutes, prioritize and categorize the ticket, and assign it to be dispatched by your human dispatcher.
- _Optional (**be careful**): Email the user to let them know that your team is looking at the issue, but also ask them to check the toner levels on the copier. Provide the user an option to very quickly self-solve._

All of this could happen in a minute or less. But, take a moment to think through what’s necessary. Is there a secure way for an agent to access your documentation? Can your agent access Auvik to check toner levels? Is your documentation complete enough that an agent could find the “coffee room printer?”

The value is obvious. Imagine being Alice and, 3 minutes after you submit the issue, you get an email back saying that the toner might be low. If the toner is indeed low, that’s an easy fix and I can get work done. **You’ve boosted your productivity, and the client’s.** However, you may have your own tech debt to pay off in order to achieve this.

_This is, of course, oversimplified. A lot has to be right for the agent example to work_. My point is, if your “why” was “I want a structured ticket entry and that’s it,” the requisite work to get the agent going isn’t worth it. You, as the business owner, have to decide that the requisite work to get the agent going is worth it, your “why” has to call for it.

## Where You Should Start: Knowledge Agents

One of the quickest ways I’ve personally found to create value with agents is the knowledge agent. These are your traditional chat bots, grounded in some form of knowledge. It’s the tip of the iceberg, but they create immense value.

These are the little “Agent” buttons you see in SharePoint and in other places. For example, we’re toying with an agent on my team that uses the Microsoft Learn MCP server as well as our own runbooks to answer quick questions for engineers. It will very quickly use Learn to help you solve that annoying Windows Activation issue in Azure, or clarify a question about Conditional Access.

Taking this same thought process, and tying it to your client’s stored data is a quick and valuable win. Allowing them to ask questions about their own processes or stored knowledge very quickly demonstrates the power of agents.

**_However, a warning:_** _Knowledge agents share the same tech-debt problem! If the data source is a hot mess, your agent will constantly hallucinate because it can’t sort out which data sources it needs. The data needs to be clean and organized._

## So yes, AI _is_ Slowing You Down

AI is slowing you down! Not because it isn’t an amazing force multiplier, but because it isn’t always the _right_ force multiplier. If you haven’t taken time to understand the why, you are going to burn a lot of time trying to solve what you haven’t been asked to solve.

As a business advisor, your job is to create value. When presented with an opportunity to do so, you owe it to the client, and to yourself, to understand the _entire_ ask.

If you want to put AI into the mix, present the most logical answer first (which may be basic automation), and then offer ways to make it better. Tell them that an agent _could_ solve this, but it’s only necessary if you want to achieve this _extra stuff._ Also ensure the client knows the work they sign up for in order to make the agent functional.

I’ll sign off with one key warning: I’ve seen MSPs spend a _lot_ of time (often for free) chasing a unicorn when their competitor can solve the issue with 10-year old technology in a matter of days. This leaves you vulnerable. AI is here to do amazing things, but it has also re-ignited conversations that I personally started having in 2016 with clients.
