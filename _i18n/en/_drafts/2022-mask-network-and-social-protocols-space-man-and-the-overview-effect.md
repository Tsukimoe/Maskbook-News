---
layout: post
lang: en
template: English
date: 2023-01-13
tags: []
ja: []
ko: []
zh-Hans: []
zh-Hant: []
es: []
de: []
title: 2022 Mask Network and social protocols - Space Man and the Overview Effect
description: ''
type: ''
image: ''

---
![](https://cdn-images-1.medium.com/max/1600/0*WqC8bS5cQ6BsictR)

When astronauts travel in space and view the earth from outer space, their cognition changes as their perspective changes: when observing a city they are familiar with from an angle that most people cannot experience, the idea that the world is infinite, yet human disputes and borders are narrow comes to mind. This is known as the Overview effect.

This happens in experiencing any paradigm shift as well. In the world of Web3, when we are building it, it also reshapes our cognition. The past year has not been the best one for most people. We went through too many twists and turns in 2022, the have learned a lesson of how centralization can be evil, and collapse overnight. As the market calms down, we can focus on how to make our products better.

We never forget what we promised, “a portal from Web2 to Web3.” We hope to bring Web3 to more people. It’s a revolution that protects users’ data sovereignty.

***

In 2022, the Mask Network browser extension reached 40k+ total downloads on Chrome Web Store, Next.ID completed Alpha testing with 5 launch partners and over a thousand interested developers in the community, and Firefly iOS mobile application started beta testing. Everything is going on as expected.

We invited Jun, the Project Manager of Mask Network; Wei, the Community Manager from Next.ID; and Afra, Growth Marketing at Firefly to join the end-of-year community call with our CTO Yisi Liu. We discussed what we’ve been building in 2022, and what’s going to happen as 2023 unfolds.

***

### Mask Network: Attract more new users from Web2

After building in 2022, the team now has a clearer vision. **Mask Network has been trying to attract more Web2 users into the world of Web3**, therefore, we are continuing to bring interesting Web3 functions onto the product, to improve the user experience. We have been doing so by changing the User Interface and making the extension more stable. One of the most important points is that in 2023, Mask Network would like to further lower the threshold for users to enter the Web3 world. We are trying to do so by moving the Persona creation part skippable, so users can create persona afterwards, and use some features without persona.

In 2022, the Chrome Store platform has 15 regular releases and 23 emergency releases. Emergency releases are mostly due to: 1) problems with the online function; 2) Coordinating with marketing events; 3) the Twitter DOM/API change (because the extension works by injecting codes into the webpage).

#### **_Ecosystem_**

In the past year, Mask Network has initiated a few programs including but not limited to the ETHShanghai Hackathon, scholarships, Gitcoin Grants Round 15 social ecosystem round, and onwards.

Slowly but surely, Mask Network have outgrown its original products, including the Mask browser extension and [Next.ID](https://t.co/Zzb0oqvNHm), and are forming a vaster ecosystem.

![](https://cdn-images-1.medium.com/max/1600/0*6bEWz1ssh22XitXb)[Mask Grant and Ecosystem Programs](https://masknetwork.medium.com/announcing-the-mask-grant-and-ecosystem-programs-e9bb781c986b)

#### **_Community Developers_**

Another key component that constitutes the Mask Network ecosystem is the bounties and the community developers. However, we have noticed that many features built by community developers are not as popular as we thought it would be. Therefore, we refined certain requirements for the bounty specifications starting from the second half of 2022. It is sure that we will continue to release the bounties, as long as users really need those functions.

In fact, the team has put a lot of energy into improving the readability, maintainability, and scalability of the code. The team made a major code transformation in 2022 so that the code friction during community contributors’ development process will be reduced. We really appreciate the support and the contribution made by community members.

#### **_New Features in 2022_**

One thing worth noting is that when we implement new functions, we often prioritize Twitter over other social media platforms (e.g. Instagram and Facebook). It takes a lot of time to solve cross-platform compatibility, so there’s a trade-off in between. A similar issue occurs across browsers as well, we will gradually improve these cross-platform user experiences, so please be patient.

In 2022, we are working hard on security enhancements. Mask has integrated with Go+ Token Security Detection API, so users can have a safer environment when making transactions. We also docked with CryptoScamDB, an open-source dataset that tracks malicious URLs and associated addresses.

Another key feature introduced in 2022 is to enhance Web3 Profile Card. We want to enrich the information people see while using our product. The profile card summarizes the user’s Web3 information in one place. We adopted a solution from our partner RSS3, the feed of which has an advantage in the information breadth, accuracy, and timelines.

Mask Network is also the first application that leverages[ Next.ID](http://next.id) as a bridge to a complete digital identity. With the proof service provided by Next.ID, users can easily complete two-way binding between their digital identity with other accounts at different platforms. In Mask Network, in many places where the user needs to confirm the wallet address, those wallets that have been verified will be labeled by[ ](http://next.id/)Next.ID. Next.ID also helped us to improve the user experience in certain features. For example, when a user with multiple active wallet addresses needs to set an NFT avatar, wallet addresses verified by Next.ID can be used as the source of selection, and after the selection is completed, the persona can be used to sign silently, which saves the redundant operation for user to relink wallet and sign.

There are more new features under development, please continue to pay attention to our updates.

***

### Next.ID: Give identity back to people

Next.ID is an open-source protocol established and initiated by Mask Network. Next.ID aims to prioritize user privacy and connect users’ Web2 and Web3 identities in one place. What Next.ID is doing is similar to logging into Web2 apps using Google’s Gmail or Facebook. But Next.ID does it in a decentralized way. Users have control of all permissions and authorizations. Looking forward, Next.ID wants to build an ultimate solution leveraging VPS (Virtual Private Server). It means users have their decentralized identities hosted in their own servers, use applications that are privacy-by-design, and manage the private server with their private keys.

From the product side, Next.ID has launched five main modules: Proof Service, KV Service, Relations Service, Auth Service, and Core Service. Since Next.ID is an open-source community, we welcome everyone to join in. The mission of Next.ID is simple: connect your digital identities in one place.

We know that in many Web2 sites, you can choose which commercials you want to see, but in fact, it is all controlled by the platform — they pick the service for you, and your data is not owned by you. So in Web3, we want to bring this digital sovereignty back to the users. Users can decide which part of their data to be published online and build their own profile. These are all designed and controlled by yourself.

There are many other projects who share our idea and vision, but we have our unique advantage. The VPS mentioned earlier is the most critical part. We want to architect the product in the form of a decentralized network, users have their own clause servers. It is important that users have 100% control over their own server, that’s what’s different between us and Web2.

When a user lost their account or private key, that would be the scariest thing one could imagine. All your property, token, gone. But in the future, identity solutions may be integrated with account abstraction and social recovery, so even if you lost one private key, you would still be able to use a new private key to replace the older one, taking back control of your account.

VPS may sound more developer-oriented, but more users will be familiar with EOA, or private keys to control a wallet. The user education will be tough. We will be trying to lower the barrier, so users don’t need to know how to code to be able to use it. Our go-to market strategy would be to focus on the things people want. Digital sovereignty is one of the most important ideas, but not many people have realized that.

Our community is also an open space. We have bi-weekly community calls taking place in both English and Chinese. We also posted a few Gitcoin grants, hoping to have more people join our community. Please feel free to join our [Telegram group](https://t.me/NextDotIDofficial) or [Discord channel](https://discord.com/invite/PhRCmFCskY).

![](https://cdn-images-1.medium.com/max/1600/0*vGMKvMk6cmrxjQTK)

***

### Firefly: A New Era about Web3 Social, DID — the portal to Web3 is at your fingertip

Firefly is the latest product from Mask Network, it is a cross-DID social application on your mobile phone. Instead of having one-dimensional social media experience where you only scroll Twitter, or only see Instagram or Facebook timelines, you have an enriched, Web2 & Web3 hybrided experience. Firefly is trying to break the binary thinking between Web2 and Web3. Many may think Web3 is a linear progression of Web2, inherently incompatible with each other. But that is not true, with Firefly, you can take the middle ground.

Firefly combines the element of Web2 and Web3, and uses DIDs to create this seamless, secure, and diverse social experience. It allows users to access and interact with social content from Web2 & Web3 platforms, like a portal to the Lens Universe, and a portal to the Farcaster Universe. Essentially, Firefly is initially built on Twitter API, so the user experience will be similar to using Twitter, but you will be able to see a lot of bonus information on top of your Twitter content. You will see Vitalik’s post on Lens, Balaji’s on Farcaster… that’s pretty much what this little social app we are trying to build. Firefly is expanding the size of current Beta Testing very soon.-

Firefly brings together the best of both traditional Web2 platforms and decentralized Web3 technologies, creating a “diverse social stream” where you can view Web2 and Web3 social content side by side. This means that you can see your daily complaints and Web2 content alongside Web3 content like NFT purchases, all in one place. And with the ability to connect multiple social accounts, you can enjoy a multifaceted and well-rounded social media experience that reflects your diverse interests and passions in an aggregated timeline.

![](https://cdn-images-1.medium.com/max/1600/0*lKQwWwLtEl_Eyqze)

Here is a sneak peek of Firefly’s features:

* **DID profile display**: you can choose which side of your profile to show to others.
* **Web3 Calendar (currently in development):** The calendar will have comprehensive Web3-related events and contents, that tell you more than a mint date. It will give you more ideas about when the next major events will take place in Web3, and it will cater to a specific group of people who are interested in other topics.
* **Web3 trending**: it allows you to discover other people with shared interests, as well as the smartest folks in DeFi, in NFT, and in Web3 generally. This is based on a powerful recommendation system that allows you to discover, befriend, and invest with top minds in the industry.

#### **Keep Your Privacy Safe**

Some may have private concerns over Firefly, how does it know a wallet address is associated with this particular Twitter account? Firefly integrated with Next.ID, we are a third-party client for Next.ID, so when people bind their Twitter account with their wallet address, Next.ID will automatically display their relation.

There are many other products that try to track and manage multiple wallet addresses, but Firefly takes a different approach. Instead of focusing solely on financial transactions, Firefly primarily focused on social content. We care about things like your tweets or post, your daily thoughts, and the voices you want to amplify. **Our goal is to create a sophisticated Web2 social app that aligns with your experience on platforms like Twitter, while still offering the benefits of Web3 technology.**

Unlike other Web3 apps which can be cumbersome and require frequent sign-ins, Firefly is designed to make your social experience as seamless and convenient as possible. We want you to be able to focus on sharing and connecting with others, without the distractions and inconveniences of traditional Web3 apps. So if you’re looking for a social app that combines the best of Web2 and Web3.

#### **Our Mission**

At Firefly, we are aware that many people have migrated from Twitter to Mastodon recently. While Mastodon support is not currently available on our platform, it could be one of our future goals.

Right now, the entire team is focused on improving the basic performance of our app and addressing issues related to the fragmentation between web2 and web3 content. We want to ensure that the content presented to users is coherent and easy to navigate.

We are also working on developing sophisticated decentralized identifier (DID) profiles and are eager to receive feedback from our users on this feature. We are grateful for the support of Mask Network in building our decentralized social platform, and we hope to continue improving and evolving in the future.

***

### Prospects in 2023

In the coming years, we will focus on bringing more new users on board, and helping them enter the Web3 world with friends from Next.ID and Firefly, we hope to contribute in the building of DID and Web3 social, and make decentralized social an integral part of more people’s everyday lives.

Most importantly, we want to express appreciation to all the builders, community, and investors that are with us. It is a hard way, but we believe it is going to get brighter.

***

#### **Mask Network**

[Website](http://mask.io) | [Twitter](https://twitter.com/realMaskNetwork) | [Discord](https://discord.gg/masknetwork)

#### **Next.ID**

[Website](https://next.id/) | [Twitter](https://twitter.com/NextDotID) | [Discord](https://discord.com/invite/PhRCmFCskY)

#### **Firefly**

[Twitter](https://twitter.com/thefireflyapp) | [Discord](https://discord.gg/gvHygvUdpA)