# Installation

This guide will walk through installing and setting up VueVentus along with [Vite.js](https://vitejs.dev/guide/#scaffolding-your-first-vite-project), [Vue.js](https://vuejs.org/) and [Tailwind CSS](https://tailwindcss.com/). The guide will finish with a test drive of the VvButton component, to provide a quick working example of how to iterate with design system components and atomic classes.






## Installing Vite/Vue

For this example guide, we'll use Vite.js to install both Vite and Vue.js. So navigate to the directory where you want to begin your project in the command line console and run the vite create command:

```bash
npm create vite@latest
```

1. Enter a Project Name in the Vite CLI interface
1. Select `vue` for the framework
1. Select `vue` for the variant (VueVentus doesn't support Typescript yet)
1. `cd` into your new directory named your Project Name
1. Install the application dependencies with:

```bash
npm install
```

You can check to see the installation was successful by launching Vite's local dev server with:

```bash
npm run dev
```







## Installing VueVentus

With Vue and Tailwind installed, it's time to install VueVentus. From your project's root directory, you can install the VueVentus package with:

```bash
npm install @obewds/vueventus --save-dev
```








## Installing Tailwind CSS

To install Tailwind CSS, we'll be using the [Vite.js Guide](https://tailwindcss.com/docs/guides/vite) variation for this guide and example.

So from the project's root directory, run the following commands:

```bash
npm install -D tailwindcss postcss autoprefixer
```

```bash
npx tailwindcss init -p
```

Next up, open up the generated `./tailwind.config.js` file now in the project root directory, and add the following code to include Vite/Vue files into Tailwind's parser:

```javascript
// ./tailwind.config.js
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
```

Next, create a new file `./src/css/tailwind.css`, and add the base Tailwind CSS directives to the file:

```css
/* ./src/css/tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Next up, include the tailwind.css file into the app and Vite's build process, by opening up the `./src/main.js` file and importing the css file like so:

```javascript
import './css/tailwind.css'
```

Once everything has been added and saved, you can restart Vite and see Tailwind's effect on Vite's initial HelloWorld.vue and App.vue components with:

```bash
npm run dev
```









