---
title: "Basic Auth is Going Way - What about printers?"
date: 2022-11-27
categories: 
  - "business"
  - "cybersecurity"
tags: 
  - "basic-auth"
  - "imap"
  - "printers"
  - "smtp"
coverImage: "printer-unspash-stock-mahrous.jpg"
---

Man, I hate printers. But nonetheless, we've got to deal with them. With [Basic Authentication _finally_ going away](https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/deprecation-of-basic-authentication-exchange-online) (I hope), you may be running into problems with that famous scan to email functionality. For a lot of multi-function devices out there, we're lucky if we get SMTP over TLS, which is really really bad. Nonetheless, these old beasts are hard to replace and Microsoft **is going to cease to work with them**. And with good cause, a lot of email compromises come from legacy protocols with basic authentication. With that in mind, here's a couple of solutions that could help.

## Best Option (IMO): Third Party Services

There are a myriad of services out there that exist specifically to deliver email. They offer API based delivery as well as traditional SMTP based delivery. A few good examples are [AWS SES](https://aws.amazon.com/ses/) (Simple Email Service, I use this one), [SendGrid](https://sendgrid.com/), [Mailgun](https://www.mailgun.com/), and [Postmark](https://postmarkapp.com/). All of those services provide relatively secure SMTP in combination with the all important DKIM option. There's a few key benefits to going third-party:

- **Separate Space.** Having a copier with who knows how old firmware storing a password to your Microsoft tenant is a risky choice. Not letting those devices into your tenant at all limits the blast radius should the device be somehow compromised. You can take this a step further and use a subdomain (like copier.company.com) so you can just black hole the DKIM and SPF should something go wrong.
    - **Separate Space (continued).** In addition to all these benefits, this model eliminates the "trusted" piece of the puzzle. The mail hits your tenant from the outside and _should not_ be whitelisted from advanced features like attachment scanning. This makes it harder for malicious payloads to find their way in from a compromised account.
- **More Secure Protocol Support.** Most of these services (especially AWS SES) allow you to have very specific IAM rules around what a particular set of credentials can do. For example, in AWS IAM, you can build a policy that allows a user to only relay mail through a certain alias and via a certain type of connection. This makes success harder when a potentially malicious connection comes in.

## Okay Option: MX Delivery

You also have the option to have your copier relay mail to your Office 365 MX record. The mail is then treated like any other external email and handled accordingly by Exchange Online. To accomplish this, you'll need some certain transport rules in Exchange as well as an addition to your SPF of "ip4:<external network IP>." A downside is that you're now exposing your network's IP via SPF. In addition, you're assigning trust to _anything_ behind that IP. An enterprising threat actor could take advantage of this.

It's also important to note that, in this model, mail could potentially end up being delivered over an in the clear connection.

## Mail Relay Server

Finally, you could most certainly host your own mail-relay if you wanted to. An IIS SMTP relay or Postfix can be configured to securely relay mail through a service account (or publicly). This has some interesting benefits like the ability to ensure a TLS connection between your server and Office 365, and even using authenticated only connections. It does still have the same downside of assigning trust (unless you relay your mail through public MX delivery rather than a service account). In addition, you're now managing a mail server...

One key area this approach may help in is encryption. As I mentioned before, as late as 2020 I've seen copiers that just don't do SMTP over TLS (it's tragic). With that in mind, you could have your copier deliver mail in the clear to your mail relay (over the LAN or a VPN) and then have the server deliver to Exchange Online in a TLS connection to encrypt the data over the WAN. In general though, a mail server definitely isn't my preferred approach.

 

I hope this article gives you some ideas on how best to handle the departure of legacy protocols. It's definitely long overdue! For maximum flexibility, a mail sending service is definitely my **top** recommendation.
