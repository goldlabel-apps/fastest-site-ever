# [Nice Cannabis People](https://ncpapp.eu/) by @listingslab

> [1st things first... Join us](https://ncpapp.eu/join)

Fastest Site Ever  provided;

- You are not a criminal
- You agree to the Data policay laid down by the Maltese government
- You are not here to fuck spiders

#### What it is

Right now you can become a member of the Nice Cannabis People Association but until the legislation comes into force you are really just registering interest. 

#### What it isn't

It isn't somewhere you can rock up and buy weed. Yet.

#### What it could and should be

A community of like minded pot heads, it's a place you can come and buy some really good weed at reasonable priced with no fear of being ripped off

## Malta Cannabis Association

The association assidiously follows all the rules however silly. In fact the association is quite vocal about it. It brings attention to itself by being loud bush-lawyers and holding fools and fuckwits to account.

So far, the information we have is as follows:

- You can start a licensed association if you're not a criminal or connected to them
- You can run a fairly tightly controlled business legally catering to the pothead market. Ice to eskimos that is.

That was the promise. There are problems and difficulties with that. It's going to take time to iron out sensible legislation even if it's based on a model such as the Spanish system of Cannabis clubs

For this reason we can assume that until such time as we can sell it our best use of time is to use the time to get the growing side started. The absolute minimum time to crop is 3 months but you can realistically double that, especially at the beginning. If we ever have the great problem of having too much weed and not be able to sell it yet, we'll just vacuum pack it and stockpile it in the freezer.

Part of the rules are that Associations are Not For Profit. That doesn't mead we can't or won't take a salary. We're working hard to make this a reality. A little help?

So join our association. If you live in Malta, then lucky you you can apply for Malteaser level membership in due course

#### Content

- How to grow your own
- 4 plants each
- Autoflower

#### Technology

> postShape

```javascript
export const postShape = [
  {
    id: "string",
    path: "string",
    slug: "string",
    type: "string",
    title: "string",
    subheader: "string",
    avatar: {
      src: "url",
      alt: "string",
    },
    featured: {
      src: "url",
      alt: "string",
    },
    body: {
      format: "string",
      raw: "string",
    },
  },
];
```

```javascript
/*
`<h3 class="head-center">What it is</h3>
    <p>Right now you can become a member of the Nice Cannabis Association 
    but until the legislation comes into force you are really just registering interest</p>
     
    <p>Join now and you might be able come and legally buy buy weed from us if ... </p>
    <p>
      <ul>
          <li>You are not a criminal</li>
          <li>You agree to the Data policy laid down by the Maltese government</li>
          <li>You are not here to fuck spiders</li>
        </ul>
      </p>
      <h3>What it isn't</h3>
      <p>It isn't somewhere you can rock up and buy weed. Yet</p>
      <h3>What it could and should be</h3>
      <p>A community of like minded pot heads, it's a place you can come and 
      buy some really good weed at reasonable prices without fear of being 
      ripped off</p>`
*/
```

## Features 

Organising React Apps into features is something recent. Changing the Redux pattern to [redux-toolkit](https://redux-toolkit.js.org/) helps. The idea is that all the indiviual parts pertaining to that particular feature are collected together into a single directory which is made as easy as possible to integrate with any React app. 

Perhaps these Features could be implemented as packages, standalone. Or even [SingleSPA](https://single-spa.js.org/)'s. Whatever the implemetation, the idea is to make it as easy as possible to add and remove features to any given React project

#### Features in development

- firebase-ts

## firebase-ts

> Server Side Rendering using modern TypeScript and Firebase Cloud functions

#### What does --legacy-peer-deps do exactly? 

One way of thinking of this flag is that it isn't doing something new; rather it's telling NPM not to do something new, since NPM v7 now installs peerDependencies by default.

In many cases, this is leading to version conflicts, which will break the installation process.

The --legacy-peer-deps flag was introduced with v7 as a way to bypass peerDependency auto-installation; it tells NPM to ignore peer deps and proceed with the installation anyway. This is how things used to be with NPM v4 thru v6.

```bash
npm i --legacy-peer-deps
```

## `feature/features`

Organising React Apps into features is something seen recently by developers using [redux-toolkit](https://redux-toolkit.js.org/). The idea is that all the indiviual parts pertaining to that particular features are collected together into a single directory which is made as easy as possible to integrate with any JS app. Features can be implemented as packages, standalone or even as part of a framework like  [SingleSPA](https://single-spa.js.org/). Whatever the implemetation, the idea is to make it as easy as possible to add and move features between projects

#### Pull Request 

This PR adds the features directory and makes small changes to the following non-features directory files to enable the use of features. This PR does not add the features themselves, it only prepares the codebase for that

Add the following dependency to `/package.json` 

```javascript
  "dependencies": {
    ...
    "@reduxjs/toolkit": "^1.8.3",
    ...
```
Add the dependency with `npm i`. The legacy peer dependencies problem may come up here. There has been a recent change to npm which means for various reasons, we sometimes have to use `--legacy-peer-deps` flag to get things to install

```bash
npm i --registry https://registry.npmjs.org
# or 
npm i --registry https://registry.npmjs.org --legacy-peer-deps
```

#### TypeScript Definitions

`./index.d.ts`

```javascript
export interface SysError {
    severity: string,
    code: number | string
    message: string
}
```

#### Also in Development

- [Shared]
- [Banners]
- [Sites]
- [Forms]

#### More info

- TypeScript & redux-toolkit
- Features introduces a new redux store, wrapped by and not affecting the original store

```javascript
const app = (
    <Provider store={store}>
        <Provider store={featuresStore}>
```