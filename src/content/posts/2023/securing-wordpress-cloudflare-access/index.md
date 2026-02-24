---
title: "Securing WordPress with Cloudflare Access"
date: 2023-07-18
categories: 
  - "cybersecurity"
tags: 
  - "cloudflare"
  - "security"
  - "wordpress"
  - "ztna"
coverImage: "fi_seuringwp_cloudflare_v2.png"
---

Quite some time ago, I [posted](https://domkirby.com/blog/how-i-secure-wordpress/) about my use of Cloudflare's edge services to protect my WordPress installations. I still use and recommend Cloudflare as a frontend to all of your public facing (or even not public facing, future post coming) web assets. Even on the free plan, the out of the box WAF provides a good security layer and the edge CDN and optimization services speed things up.

Over time, I've evolved the way I protect my site with Cloudflare, so I thought I would share. This will not be a detailed technical writeup, but I'll post links to the relevant Cloudflare docs.

\[box type="warning"\]**Note:** Only you can select the best ways to protect your assets. Even with a WAF/edge, the basics such as patching still apply!\[/box\]

## The Basics: Cloudflare Access

First things first, what is [Cloudflare Access](https://www.cloudflare.com/products/zero-trust/access/)? Cloudflare sums it up pretty well, Access is a Zero Trust Network Access (ZTNA) product. Essentially, because you're accessing my site via Cloudflare instead of directly interacting with my server, they are in a unique position to do some fun stuff. In this case, Access provides rules based access control that let me allow anyone to access _domkirby.com_ but require authentication to access _domkirby.com/wp-admin_. That's pretty much all there is to it.

When you access my site, you're going first to Cloudflare and hitting some important rules engines. This is what the architecture looks like:

 

\[caption id="attachment\_1472" align="aligncenter" width="2296"\]![Network Architecture with Cloudflare WAF](images/cf_network_arch.png) Image: Cloudflare\[/caption\]

## Let's Set it Up

Okay, neat architecture, right? But how hard is it to setup? It isn't hard at all. First off, you'll need to sign up for Cloudflare Zero Trust (free for 50 users). Once you have an account, follow their guidance for first setup.

### Setup Identify

Once you have a Cloudflare Zero Trust account, you need to setup an identify provider. To do so, simply follow their guides for [Azure AD](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/azuread/), [Okta](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/okta/), [Generic SAML](https://developers.cloudflare.com/cloudflare-one/identity/idp-integration/generic-saml/), or whatever your identity provider is. If you don't have an IdP, Cloudflare does allow for an email-based logon, just make sure your email account is secure! Once you have this setup, you're ready to add your first application.

### Add an Access App

Now that we have identity all setup, we need to tell Cloudflare about our _self-hosted_ application. This is pretty straightforward, but you'll need to play with the right way to setup your access policy. I personally use an AAD group, but you could even keep it as simple as matching your username.

1. Follow [**these steps**](https://developers.cloudflare.com/cloudflare-one/applications/configure-apps/self-hosted-apps/) to build an application out
2. When setting your URL, you want to protect the path of **/wp-admin**! If you leave the path blank, Cloudflare will require authentication to access _anything_ on your website. ![](images/umKtP11278_cp.b690c0f9-bc77-488d-b104-112129f4a487.png)

_If you are protecting an entire domain, than you DO want to leave the path blank._

Once you have your app and policy configured, test it out by going to your wp-admin path. Cloudflare should force you to logon before letting you go there.

### A Step Further: Integrating Authentication

This part is optional, but it is nice. At this point, we've used Cloudflare access to restrict network access to yoursite/wp-admin. Great! However, our logon flow is a bit... clunky. We have to login to Cloudflare and then login again to get into WordPress.

Thankfully, Access has built-in functionality to pass on Authentication information securely. When you sign on, a [JSON Web Token (JWT)](https://en.wikipedia.org/wiki/JSON_Web_Token) is issued and stored in your browser. This JWT is signed by a key that Cloudflare manages and rotates for you, so we can verify it and use it to log on to WordPress. Essentially, Cloudflare issues something that looks like the below, and we can use that to make sure you are you:

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJub3lvdSIsIm5hbWUiOiJJIGJldCB5b3UgdGhvdWdodCB0aGlzIHdhcyBhIHJlYWwgdG9rZW4gbHVseiIsImlhdCI6MTUxNjIzOTAyMn0.C51roh37CJskGoBmBciwO03EMHv6f2xA0\_EPAnyEaWg

I've chosen to accomplish this using a plugin: [Auto Login with Cloudflare](https://wordpress.org/plugins/auto-login-with-cloudflare/). This plugin looks for the presence of the Cloudflare token, verifies it using the public key side of the keypair, and then (if things check out) uses the claims to automatically authenticate you to WordPress. With this method, I'm automatically logged into WordPress **after** claims are cryptographically verified.

\[box type="info"\] **Note:** Cloudflare also passes a CF-Authenticated-User header that can be used for header-based authentication. **HOWEVER**, this value is **not signed** and can easily be forged if your site is possible to access around Cloudflare (which is entirely possible with most shared hosting). The token method is highly preferred in this deployment scenario. \[/box\]

 

That's it! If you need some help with this, reach out on LinkedIn. If you lock yourself out of WordPress, deleting the app inside Cloudflare will make the problem go away, and you can just start over.
