---
slug: creating-vue-app-with-tailwind-postcss
title: ↘  Few steps to create Vue app with Tailwind CSS and PostCSS
description: Creating a Vue 3 app with Tailwind CSS and PostCSS is easy with Vite. This guide will help you set up your development environment quickly.
authors: [sysadminkz]
tags: [macos, web, notes, vue]
---

![Few steps to create Vite + Vue + Tailwind + PostCSS](images/creating-vue-app-with-tailwind.webp)

## Intro

Vite + Vue 3 + Tailwind 4 CSS + PostCSS is a powerful combination for modern web development. This guide will help you set up your development environment quickly and efficiently.
{/* truncate */}
## Easy steps to create Vue app with Tailwind CSS and PostCSS

Install Vite + Vue 3:

```shell
npm create vite@latest
```

Next, you can choose a project name and select the Vue engine (TS or JS), example:

```shell
$ npm create vite@latest

✔ Project name: … webui
✔ Select a framework: › Vue
✔ Select a variant: › JavaScript
```

Run app:

```shell
cd webui
npm install
```

## Install Tailwind CSS and PostCSS

Current Tailwind CSS version is 4, so you can install it with the following command:

```shell
npm install tailwindcss @tailwindcss/vite
```

Add the `@tailwindcss/vite` plugin in to `vite.config.js`, my config example:

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  build: {
    outDir: path.resolve(__dirname, '../web/dist'),
    emptyOutDir: true,
  },
})

```

### PostCSS

```shell
npm install tailwindcss @tailwindcss/postcss postcss
```

Add `@tailwindcss/postcss` to your `postcss.config.mjs`:

```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  }
}
```

### Tailwind CSS config

Create a `tailwind.config.js` file in the root of your project (if it doesn't exist):

```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Run the app

Run the app with the following command:

```shell
npm run dev
```

Additional information about Tailwind CSS and PostCSS can be found in the official documentation:

- https://tailwindcss.com/docs/installation/using-vite

Done!
