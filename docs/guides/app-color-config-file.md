---
title: App Color Config Files
---



# {{ $frontmatter.title }}

For prototyping, VueVentus comes with a default color palette that tweaks Tailwind CSS's default color palette slightly for dark/light mode accessiblity reasons. But this file is only meant for prototyping, as a production application would want to control many if not all of the visual characteristics VueVentus provides generically.




## TWCSS Colors Tool

::: info HEX COLOR CODE BLUES
Sadly, it's no small task to pick a full palette of colors that work well together, and then tint (add white tones) and shade (add dark tones) each one several times to get a full palette.
:::

Luckily, there's a tool from [@oberocks](https://github.com/oberocks) specifically for this tedious task.

Here's the steps to complete:

1. Visit and use the free [TWCSS Colors Tool](https://tailwind.mattmct.com/)
1. Create, test out, and copy your JSON color palette data with the tool

::: tip
The TWCSS Colors Tool allows you to copy the raw JSON data or download a file
:::




## Adding Color Config to Tailwind

Once you have your JSON color palette data, create a file with a descriptive name in your project's root directory and paste your data in it (or copy the file into your root if you downloaded a file)


Assuming our JSON color palettes file is called `vueventus.tailwind.colors.json`, we should now have a `./vueventus.tailwind.colors.json` file in the root directory.

::: tip AFTER THE GETTING STARTED GUIDE
Now we can use our `./vueventus.tailwind.colors.json` file in our project's `./tailwind.config.js` file, instead of pulling our colors from the VueVentus package like we did in the Getting Started guide.
:::

Let's open up our `./tailwind.config.js` file and change the following line:

```javascript
const appPalette = require('./vueventus.tailwind.colors.json')
```

And of course this means we'll also need to change the variable reference for the one we just replaced deeper in the `./tailwind.config.js` file like so: 

```javascript
module.exports = {
    // ...
    theme: {
        extend: { /* ... */ },
        // ...
        colors: appPalette,
    },
    // ...
}
```




## Accessing Color Data

Additionally, we can also access this data within our application and with our components directly... which really comes in handy for multi-color situations like JavaScript driven charts and SVGs!

Here's what that looks like for the default naming conventions the [TWCSS Colors Tool](https://tailwind.mattmct.com/) provides:

```javascript
import vvTvColors from './vueventus.tailwind.colors.json'

const red = vvTvColors.red['400']
const coolGray = vvTvColors.coolGray['600']
```
