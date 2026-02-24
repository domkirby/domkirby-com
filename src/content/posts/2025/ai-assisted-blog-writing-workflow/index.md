---
title: "My AI Assisted Blog Writing Workflow"
date: 2025-12-10
categories: 
  - "ai"
  - "content"
tags: 
  - "ai"
  - "blog"
  - "content"
  - "wordpress"
coverImage: "Gemini_DomBlogging.jpg"
---

I figured we would take a little bit of a side quest for a moment on AI. I’ve written a couple of “you’re not AI ready” posts, and I stand by that. However, that doesn’t mean we shouldn’t be using and experimenting with AI, and using it in ways that make us more efficient. In this post, I’ll talk through the AI-assisted process I used to write… this post.

## NOT AI Generated!

First thing’s first: **my blog posts are NOT “AI Generated” content**. I’ve tried that route, making general “notes” about the topic and my thoughts, and asking AI to write the post. I’m sure if I put time into it, I could make it happen. However, I decided that isn’t the approach I want to take, I don’t want to just put out “AI slop.”

My approach is to use an **AI-assisted** process. That is, I create the original content, but I use AI to help me make it more impactful, more effective at driving my points. I’m an _okay_ writer at best, so using AI to help me refine my writing has proven especially useful.

## The Tools

**AI is not a tool.** AI is a category. In this scenario, I primarily leverage large language models to help me refine my content. At the time of writing, I’ve been really leaning in on three tools in particular:

- **Gemini:** I use Gemini chat and Gemini assistant in Google Docs to help me refine my thoughts as I go. Over time, Gemini has built a lot of knowledge about me and my writing style, and I take full advantage of that.
    - **Nano Banana:** Nano Banana is a model that is available in Gemini for image work. I’ve been using that more and more for graphics generation.
- **ChatGPT:** I have established an “N+1” rule of sorts that says I need to use at least two different AI tools to review my content. If I’m using Gemini to edit as I go, I use ChatGPT to read and judge the rough draft. This is helpful because GPT has no context of the progress, just the content I’ve asked it to review.
- **Claude:** For actual “nerdy” posts, like instructions, I almost always turn to Claude. For me, Claude’s models are the best at critiquing and validating technical writing. Often, Claude is my “go-to” for technical research, and technical questions in general. However, you must validate your responses. Claude will happily, and confidently flat out lie to you.

Of course, it isn’t all AI. I actually have to write the content. I **hate** drafting in WordPress, it’s probably a trauma from my OG WordPress days of losing massive progress before autosave. WordPress drafts are also impossible to work with outside of WordPress.

With that in mind, I’ve turned to **Google Docs** to draft my post. It might feel like an unlikely choice for me, but my Google Drive has very little data in it. In fact, it’s mostly these posts. Therefore, I feel a lot less worried about giving Gemini and ChatGPT API access to my Google Drive. I’ve also found that Docs has the best mobile app for quick edits or jotting down thoughts, and pseudo-markdown editing is a huge win for speed (typing # for a header or \* for bullets without touching the mouse).

## The Process

I’ll spare you the agony of running through the mental gymnastics that are “Dom coming up with a blog post.” For the sake of not accidentally writing a book, I’ll share my high level process:

### Step 1. Have an Idea

I mean, this is a logical first step right? Sometimes my blog content is intentional, I’ll think out 2-5 articles I want to write about a topic (the Agent v Automation and Tech Debt posts go together for example). Other times, it’s just a single thought that materialized into something I want to write about. In any scenario, I tend to roll the idea into my Evernote so it can ‘sizzle.’ This makes sure the idea is real. I also want to start experimenting with just word vomiting into my Plaud and see what happens.

### Step 2. Write

I’m not a marketer, and I hate traditional marketing anyways. My blog is my place to write about the shit I want to talk about. If it isn’t vibing with you, I invite you to use the address bar of your browser to go literally anywhere else on the vast interwebs for content you agree with.

With that in mind, step 2 for me is often to **just fucking write**. It’s almost conversational, as if I’m writing a long form talk.

### Step 3. AI Editing

This is where AI tools come in. If I’m expanding on a somewhat deep thought (like tech debt), I’ll start doing this about halfway through to make sure I’m forming a cohesive set of thoughts for you to read. If you’ve talked to me for longer than 5 minutes, you know I might be on topic 15 by minute 7. With that in mind, AI helps me keep things on the rails. If you want to try this:

- Drop your content into a Google Doc
- Start a Gemini chat, share the **whole document with it** (yes, it can open and read your Google Doc if you let it)
- Give it a relevant prompt like _“I’m writing this blog post to share my ‘AI-assisted’ writing process. I want to make sure the article will make sense to readers and that I’m on track. Can you review my work so far and let me know about areas for improvement?”_
- Review the notes, pick the improvements I want, and apply them.

As you move through this process, tweak your prompt to reflect progress, and don’t be afraid to point out specific parts you’re questioning. If you have a Google AI plan, the Gemini Assistant right in docs can help with small sections as well. **Protip:** Tell it who the audience is. If you’re writing for MSP owners, tell it to assume that identity and review it as such.

Throughout this process, I might ask AI to help me rewrite certain sections, and I’ll ask it to mimic the writing style of the rest of the draft. This helps me make sentences shorter.

### Step 4. The Sanity Check

After I stumble through step 2, I’ll have what I think is the final draft. This is where things get really impactful for me. Now, I’ll take the entire blog post to both Gemini and GPT. I’ll give it a prompt like:

> I’m writing the attached blog post about tech debt for my MSP owner audience. I want you to review the blog post as an MSP owner and let me know what your key takeaways are. Also let me know what challenges you might raise to my points, and summarize your findings.

The model is more than capable of pretending it's your intended audience, reading the content, and letting you know what it would take away. This allows you to validate that you’re saying what you want to say. Think of it as a “pseudo-peer review.”

The other half of the gold are the challenges to your thinking. Predicting what a skeptic would have to say about your thought process gives you an opportunity to preempt if you want to. If you read my [syncable passkeys](https://domkirby.com/blog/entra-synced-passkeys-passkey-profiles/) post, you’ll probably be able to point out where Gemini helped me out.

This step will likely lead to some changes that may take me back to step 2 to refine things (usually in the form of using fewer words) and then to one more sanity check.

### Step 5. The Manual Read

**This is important**. If you’re like me, and you get into a “groove,” you start moving pretty quickly. Now, admittedly, I can get lazy from time to time. However, I always try to do a “manual full read” of the post before I publish. This helps me catch that random wrong they’re, weirdly placed word, or em-dash that snuck past me. To me, **this step** is what keeps the content from just being AI generated.

### Step 6. Publishing

Now comes publishing. This will be different for everyone depending on where they publish. My site is WordPress, so I need to get the content to WordPress. As of this moment, my process is not great (I need to have Claude whip up a WordPress plugin to speed it up).

Copying out of Google Docs straight to WordPress will give you a bad time. So, I export a docx and copy paste that into WP. I tweak what needs to be tweaked (extra line breaks, check the headers, make pull quotes where I notated to, etcetera).

I also use AI here. I’m not a marketer, but I am trying to do more SEO on my blog. Once I know my draft is final, I’ll go back to the same Gemini Chat (this part is important, context matters) and ask it to make me an SEO slug, social description, meta description, and SEO title. These things just help boost search rankings, and make people more likely to click the LinkedIn share. It’s a small step, but it has been impactful.

### Step 7. Distribution

I don’t have as much time as I would like to have to work on my content, so using AI has become essential to my distribution strategy. This is where “AI generated” **does come into play**. You may have noticed I share in several places, and I also write shortened “summative’ versions of my blog post for LinkedIn for readers that want quick hits on the app.

For these steps, I lean _heavily_ on AI. In the same Gemini chat, I’ll ask Gemini to mimic the writing style of the post to come up with “punchy” social media posts and write that abridged article. I then apply some (usually minor) tweaks, and I then schedule it out.

### Step 7(a). Scheduling it Out

This part is minor, but is a valuable nugget. There are “right times” to post on social media. I don’t know what they are, but the tool I use, [Fedica](https://fedica.com/), does. I often publish my blog posts in real time, or schedule them for early the next morning. Fedica takes it from there, publishing my sharing posts at the right time based on the tool’s own thought processes.

## Sidenote: Graphics

Graphics are important, and generation has come a long way. I flip flop between all the tools for graphics generation. My last few have been done with Gemini/Nano Banana, even the infographics in my tech debt and agent posts were done in Gemini.

If I want “custom” or “more targeted” graphics, Canva is the GOAT for me. I use Canva to make all kinds of things from sticker designs to infographics to other shenanigans. If you haven’t tried Canva, and you’re not an Adobe nerd, you should try Canva (not sponsored, though I’d say yes 🙂).

 

AI shouldn’t replace the content creator but, for me, it has helped me write more content better and faster. And I think **that’s** the type of win I would like to see with AI. It’s empowering me, not the other way around.
