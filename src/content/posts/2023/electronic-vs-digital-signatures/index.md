---
title: "Electronic vs Digital Signatures"
date: 2023-07-27
categories: 
  - "business"
  - "cybersecurity"
tags: 
  - "cryptography"
  - "digital-signature"
  - "esigning"
  - "signatures"
coverImage: "pexels-pixabay-48148.jpg"
---

Some time ago, I posted about [certificate authentication](https://domkirby.com/blog/when-should-i-use-certificate-authentication/), and [certificates](https://domkirby.com/blog/what-is-a-certificate-anyways/) themselves. In those articles, I mentioned digital signatures and made a really small mention that digital and electronic signatures are two very different things. In this article, let's unpack the difference.

## First Thing's First: They are Both Important

This article isn't meant to position either electronic nor digital signatures as being inherently "bad." In fact, they are very often used in tandem to achieve the data integrity mission. The key here is to understand the difference between the two, as they are often misinterpreted.

## Electronic Signatures

Put simply, an electronic signature is the on-screen equivalent of a wet-ink signature. By itself, it's hardly different from getting out your favorite pen and inking out your John Hancock. These signatures come in many forms, but there are a few popular ones:

- Taking a scan/image of your written signature, and inserting it onto a document
- Using a touch screen or writing capture device to 'draw' your signature on an electronic document
- It can be as simple as literally typing your name in an intended signature area, with intent to execute a document
    - In the legal world (especially court filings), the typing tends to include a /s/ (like /s/ John Doe)

Hopefully you get the point. Legally (I am not a lawyer, so seek advice if needed, this is just my experience), the act of executing or signing a document is simply performing an action with intent to do so. That's why doctors can get away with ridiculous looking signatures.

### The Pitfalls

By itself, an electronic signature can act as evidence of execution of a contract or other document. However, by themselves, electronic signatures can have some shortcomings. Take the example of typing your name. Pretty much anyone can type /s/ Your Name and call it your signature, right? Well, no, not really, but kinda maybe. You would have to argue that the 'signature' in question is indeed fraudulent, and win.

The complexity here is due to the lack of non-repudiation. Non-repudiation is simply the assurance that one cannot deny the validity of something (a document in this case). On an electronically signed document, I could make changes after you sign it that would be tough for you to argue with, because the date of the signature isn't guaranteed, nor are the contents of the document you signed.

## From Stage Right: Digital Signatures

Okay. So, if my electronic signature leaves some major gaps in the validity of the signature and the content I agreed to, what do I do? Well, you digitally sign it! A digital signature is vastly different than an electronic signature. Digital signatures are a cryptographic operation. However, an interesting note to make is that a **digital signature can be an electronic signature, but an electronic signature is not a digital signature**.

### How do they work?

Digital signatures lean on the concepts of asymmetric (public-key) cryptography. Remember Bob and Alice? Bob can use Alice's public key to encrypt something, but only Alice's private key can decrypt it. It's a tale as old as time for transmitting documents (though PKI is far more complex than the classic Bob and Alice story nowdays). Digital signature simply flips the script. If Alice encrypts something with her private key, than it can be decrypted using her public key. This does nothing for confidentiality, because her public key is public. But, if I know (and can trust) that Alice's private key is safe and only belongs to Alice, I can rest assured that - because her public key decrypts the data - she is the one that encrypted it.

In the digital signature world, this is most often accomplished by hashing the contents of your file, email, or whatever; and then encrypting the hash with your private key (thus signing it). To test the signature - and ensure the contents haven't changed - I decrypt the hash with your public key and make sure that the contents of the document equate to the same hash. Using a hash saves a ton of compute power, as I only have to decrypt a small amount of data. It also allows us to read the contents of the file without needing to decrypt it (unless it's otherwise encrypted).

### Certificate Examples

Most often, digital signatures rely on certificates. As I spelled out in my certificates article, certificates rely on the concept of a chain of trust. Let's pick on two examples of signature certificates.

The first one will be a certificate issued to me, after some identity validation:

- Dom's Super Badass Certificate Authority Root (offline root)
    - Dom's SBA Signing Authority (intermediate)
        - **Dom Kirby** (subject/entity)

The second one will be a certificate issued to an electronic signature tool after some corporate validation:

- Some Sorta Root CA (offline root)
    - Some Sorta Subordinate CA (intermediate)
        - **Dom's Super Cool Signature Tool, Inc.** (subject/entity)

In theory, these certificates are the same. They are both issued to a subject. However, they achieve two different things. The first certificate (the one issued to my name after identity assurance) can both digitally and electronically sign a document. This is because I am the subject of the certificate. By digitally signing it, I am also stamping it with my name (thus accomplishing the electronic signature). This is, of course, assuming you trust Dom's Super Badass Certificate Authority to have followed all the rules to validate my identity (protip: don't go trusting that CA).

In the other scenario, the one where the certificate is controlled by an e-signature tool, things are a little different. In most implementations of an electronic signature tool (like DocuSign or PandaDoc), there are two signatories (so to speak):

1. The **electronic signer** is the person executing the document, applying their electronic signature
2. The **digital signer** is the company/tool itself. It is simply 1) signing the contents to prevent change; 2) asserting that their tool was indeed used to apply the electronic signature; 3) embedding their own policies for how they ensure the validity of said electronic signature; 4) asserting the exact date and time the signature happened and maybe 5) attaching some sort of audit trail of actions.

This process is reliant on a more complicated chain of trust:

1. There is trust between the certificate authority and the reader that the certificate authority is issuing certs right
2. There is trust between the certificate authority and the e-signature tool that the tool is doing the right things to validate the signer
3. There is trust between the consumers of the executed document and the e-signature tool that the tool is doing the right thing

### Putting it in Practice

As you can see, there are a lot of moving parts here. But by combining an electronic AND digital signature, we accomplish the holy grail of document integrity: **non-repudiation**. Public key cryptography combined with an electronic signature provides a high level of assurance that:

1. We can trust the digital signer
2. We can trust the identity of the executor of the document because either 1) they are named on the certificate or 2) the e-signature tool that digitally signed is attesting to the validity of that person's electronic signature through some verification measure (often email, we can debate the merits of that some other time)
3. We know that the contents in the document are indeed the contents the signer intended to sign (or are alerted if something is wrong)
4. We know exactly when the document was signed (in fact, the time stamp itself is usually independently signed)

## To Sum it Up

This article, believe it or not, is pretty simplified. There's a lot more to certificates, the chain of trust, and the legality of e-signing. Check out my article on [certificates](https://domkirby.com/blog/what-is-a-certificate-anyways/) for more information on the ins and outs. If you want to learn more about using electronic signatures for contracts, study the E-SIGN act.

It's important to note that digital and electronic signatures aren't perfect. We're still subject to the chain of trust and things like improper key management are still a real risk. However, I would argue that a document that is both electronically and digitally signed (by a trusted entity in an established chain of trust) is probably the strongest evidence of execution available today (especially compared to a regular old paper document).
