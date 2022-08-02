# creation: 
```text
$ npm init svelte@next

create-svelte version 2.0.0-next.152

Welcome to SvelteKit!

This is beta software; expect bugs and missing features.

Problems? Open an issue on https://github.com/sveltejs/kit/issues if none exists already.

✔ Where should we create your project?
  (leave blank to use current directory) … 
✔ Directory not empty. Continue? … yes
✔ Which Svelte app template? › SvelteKit demo app
✔ Add type checking with TypeScript? › Yes, using JavaScript with JSDoc comments
✔ Add ESLint for code linting? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
✔ Add Playwright for browser testing? … No / Yes

Your project is ready!
✔ Type-checked JavaScript
  https://www.typescriptlang.org/tsconfig#checkJs

Install community-maintained integrations:
  https://github.com/svelte-add/svelte-adders

Next steps:
  1: npm install (or pnpm install, etc)
  2: git init && git add -A && git commit -m "Initial commit" (optional)
  3: npm run dev -- --open

To close the dev server, hit Ctrl-C

Stuck? Visit us at https://svelte.dev/chat
```

```
npm init vitebook
✔ Project Name: · demo
✔ Project Description: · demo
✔ Select a framework: · svelte
✔ Select a theme: · default
✔ Features: · No items were selected

🏗️  /home/sam/workspace/webfont-importer


vitebook@0.100.5

✅ Done. Now run:

  npm install
  npm run vitebook:dev

```


# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.



