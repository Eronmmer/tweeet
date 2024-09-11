# Tweeet

## What is this?

A very minimal CLI tool that lets you send out tweets from the comfort of your terminal.

## Why did you build this?

I got tired of always opening twitter on my browser or iPhone to tweet.

## Todo

- [ ] Make it a customizable app so users can sign in & use
- [ ] Bundle as an installable CLI tool & publish to npm & homebrew so users can run commands like: `tweeet post -t "Hello, World"`

## How to use

- clone repo
- create a `.env` file & add your credentials, see `.env.sample`
- instal deps `pnpm install`
- build TS to JS `pnpm build`
- send out a tweet -> `node build/index.js post -t "Hello, World"`

## Any plans for the future?

I could add a bunch of features like viewing the timeline, viewing the latest tweets from a user, sending DMs, etc. Feel free to open a PR if you have any ideas!
