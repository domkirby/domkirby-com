---
title: "Liberating DomKirby.com From WordPress"
date: 2026-03-07
categories:
  - "content"
tags:
  - "content"
  - "wordpress"
coverImage: "Gemini_Generated_Legacy_To_Modern_Web.png"
---

> I’ve been using WordPress since before it had a sidebar. I can’t exactly piece together when I started, but I think it was in 2008 or so. Three different default editors, four design revolutions. Who knows how many pwned sites and security patches. Moving this website (domkirby.com) to Astro wasn’t just a shift in tech stack, it was a bit of an intervention.

If you aren’t a first time visitor, you’ll notice that things look quite different around here. There’s a lot less flair, and that’s intentional. I was hunting for simplicity, speed, a reading experience that puts all the attention on… the reading. It’s also representative of a fundamental shift of DomKirby.com’s architecture. **It no longer runs on WordPress**. 

I’m still a big fan of WordPress for when it’s needed. If you *need* a full CMS, page builder, content management, etc., WordPress is a great choice. But for a lot of environments, it’s too much. The early days of uploading plugins with FTP only to get the “white screen of death” wear on you (pre error logging). I remember finding various freeware themes and building nifty blogs, but then the blog slows down as you add stuff. The rendered HTML is a mess too.

Mind you at the time, I was standing up blogs and forums with AdSense and affiliate links to drive revenue, which was far more viable at the time. Much different internet, more enjoyable if you ask me.

Then I rolled into theme clubs. [Elegant Themes](https://domk.pro/aff-elegantthemes) (affiliate link) came on the scene and I got a membership to tinker with their themes. I built cooler looking things at that point, a couple of business websites. Then ET dropped Divi. A layout and page builder, the first one I really got into. Divi is best described as a page builder centered on designers. That introduced problems for my nerd brain but I worked through it. I’ve built *dozens* of Divi websites and hold a lifetime membership. If I need a CMS-based site, it’ll probably still be a Divi site.

## The Problems

### Performance

The real problems arose later down the line as I started hosting sites that got traffic. Page builder content gets heavy. PHP has to work hard to render, you introduce aggressive caching that has to be managed. CDNs became essential (Cloudflare) for serving up a lot of static artifacts at once. Make the server work less wherever possible so the user gets the page fast. 

### Security

Then there’s security. WordPress is **famous** for its security problems. I’ve had so many sites pwned over the years. I’ve gotten much better at it, I have a system. As DomKirby.com started getting real traffic (it does about 10k a month, thank you\!), I really dialed it in. Full platform caching at the Cloudflare edge, WAF, Cloudflare Access protects sensitive routes at the edge. The failed login count to the site was zero, because the edge ate it all. But still, security is always a thought. We manage WordPress sites with the web version of RMMs to keep them somewhat safe, and we backup obsessively. 

### Ecosystem

My attention was captured by the Automattic and WP Engine drama. It is an ongoing legal battle that really put Automattic and Matt Mullenweg under a new microscope for me. The hostile takeover of Advanced Custom Fields was a real eye opener for me as a security person. A supply chain takeover right in front of our eyes.

Automattic is technically separate from the WordPress Foundation, but the lines blur quickly. From a supply-chain perspective, it was uncomfortable to watch play out. These are red flags, and motivated me to start thinking differently for all of my web work. DomKirby.com represents the start of that work.

## The Opportunity and Shift

Here’s the thing, it can be kind of hard to get out of WordPress\! Other CMS platforms have importers, sure. But I don’t want a commercial platform. I wanted something simple and sleek, less prone to security issues. I decided I wanted a static site builder hosted in Git. But the thought of extracting years of posts from WordPress felt… gross.

This is where **AI** came in. When I had a few minutes, I gave it a shot. I found a WordPress export to [markdown converter](https://github.com/lonekorean/wordpress-export-to-markdown) thanks to a friend in a Signal group. In a few minutes, I had a directory of markdown files and images ready to rock. Great\! What to do with it?

I researched static site builders for Markdown/MDX and ultimately landed on [Astro](https://astro.build/). Moving to Astro is really a move toward digital sovereignty. By using Islands Architecture, the site renders as pure, fast HTML and only loads JavaScript if and where it’s actually needed. This kills the "shortcode soup" and database bloat I lived with during the Divi years, replacing it with something simpler: portable content. My posts are now portable Markdown files instead of being locked in a SQL database. 

The biggest win, though, is security. By deleting the login screen entirely, there’s no `/wp-admin` to brute-force and no database to inject. The attack surface just isn't there anymore.

## The New Workflow

| Feature | The Freeware Era (2007) | The Divi/ET Era (2014) | The Astro Era (2026) |
| :---- | :---- | :---- | :---- |
| **Foundation** | Raw PHP & HTML Tables | Shortcodes & MySQL | **Markdown & Components** |
| **Deployment** | Manual FTP (FileZilla) | One-Click WP Updates | **Git Push → Auto Build** |
| **Security** | "Hope I don't get pwned" | Wordfence, Cloudflare & Constant Patches | **Zero Attack Surface (No DB)** |
| **Speed** | Slow (Shared Hosting) | Heavy (Needs Caching) | **Instant (Edge Delivery)** |
| **Editor** | TinyMCE (White Screen) | Visual Drag-and-Drop | **Google Docs \+ AI \+ MDX** |

This site is now maintained in [GitHub](https://github.com/domkirby/domkirby-com). Yes, the repo is public. There aren’t any secrets. There’s no admin portal. There’s no login screen. GitHub holds code, Cloudflare deploys the site right to the edge by building when I commit to main. It even test builds before I commit so I can make sure it’s going to work.

I’m writing this post in a Google Doc so I can still use my [AI assistance process](https://domkirby.com/blog/ai-assisted-blog-writing-workflow/), but I can export right to markdown, format it, and commit it to the repo. PR → commit to main → done.

The web doesn’t need to be complicated to be powerful.  
Sometimes the best upgrade isn’t a new tool, it’s removing the old ones.

The harder problem isn’t publishing a website. It’s helping people consistently publish their thinking.

I like it here, and the site is silly fast and there isn’t much here to hack. This whole experience has got me thinking about content obsessed brands in a new way.