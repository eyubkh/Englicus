# Welcome to Englicus

## What's Englicus?

Englicus is a website for learn engilsh throw mini-game and improv the language in a funny way.

## Why the project?

I'm learning english and also learning how to code. It isn't a easy path... then I realise that How can I make my engilsh learing more easy through my basics code skills? and also how to improve my code skills and put on practis what I'm learning.

## Technology idea

-   Local storage of the user data
-   API request the .json of the irregular verbs [Github: Braulio Diaz](https://github.com/brauliodiez/irregular-verbs-english-json)

## Technologies

-   React
-   Eslint
-   StoryBook
-   Style Dictionary
-   Jest
-   Styled Component
-   Next
-   Turborepo
-   Node
-   Figma

# Turborepo starter with npm

This is an official starter turborepo.

# Points

-   creating a eslint shared custom config for use it anywhere.

## What's inside?

This turborepo uses [npm](https://www.npmjs.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

-   `docs`: a [Next.js](https://nextjs.org) app
-   `web`: another [Next.js](https://nextjs.org) app
-   `ui`: a stub React component library shared by both `web` and `docs` applications
-   `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
-   `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

-   [TypeScript](https://www.typescriptlang.org/) for static type checking
-   [ESLint](https://eslint.org/) for code linting
-   [Prettier](https://prettier.io) for code formatting

## Setup

This repository is used in the `npx create-turbo@latest` command, and selected when choosing which package manager you wish to use with your monorepo (npm).

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
npm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```