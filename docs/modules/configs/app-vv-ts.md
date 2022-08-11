---
title: app.vv.ts File
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>






# {{ $frontmatter.title }}

The {{ $frontmatter.title }} is essentially a hybrid of the design system level characteristics and patterns within an application and colloquial language hierarchies that are designed to allow code to be human-readable.

:::warning REMEMBER
The {{ $frontmatter.title }} expresses design system level characteristics through atomic classes, and VueVentus does this through Tailwind CSS classes currently!
:::

This means the {{ $frontmatter.title }} itself can serve as a single source of truth for aspects of an application like branding, color patterns/names/values/states, and much more. Additionally and for larger applications, the file can also serve and an import/export file, for cool architectures like conditional color theming and user customizable interface theming!












## app.vv.ts Setup

You'll usually work with the {{ $frontmatter.title }} by building off of the core VueVentus `VvConfig` object and it's `ConfigVv` type interface.

Here's what that looks like in practice in a real world app context:

```javascript
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

export default appVv
```

To explain the code above:

1. First we first import the `VvConfig` object and it's type interface `ConfigVv`
1. Next we define a `let` variable typically called `appVv`
1. Then we assign the `VvConfig` data and `ConfigVv` type
1. Last and most importantly, we export our customized object variable as a `default` export for use downstream

:::warning REMEMBER
When it comes to downstream use, the {{ $frontmatter.title }} becomes a common import (or a Vue `inject()` method value) in your app components and core application files alike.
:::

Overall, the {{ $frontmatter.title }} ends up woven into an app, impacting files like: 

1. The app's `./src/main.ts` File
1. VueVentus Default Installed Components 
1. Your own custom app components
1. Components extended and/or using Vv Components

:::tip
The VueVentus CLI installs `./src/main.ts` files that leverage Vue's `provide()` method to feed VueVentus installed components (`./src/components/vv/...`) your {{ $frontmatter.title }} customizations automatically!
:::









## app.vv.ts Customization

The bulk of your work with the {{ $frontmatter.title }} will be to centralize and customize repeating patterns of atomic CSS classes you find showing up during app iteration and development.

:::tip
In many ways, these patterns are unique to the teams writing the code, so VueVentus attempts to only address core/fundamental aspects of design into a code-readable and programmer-understandable vernacular.

This way both design and development can use the {{ $frontmatter.title }} to truly control their application, and RAPIDLY iterate and disseminate visual design language instantly throughout an application.
:::














## Customizing Configs Data

VueVentus provides a lot of different configs that are organized predominantly on the element level. These configs are meant to summarize and group characteristics of visual design aspects into literal/logical common language.

VueVentus configs give:

1. Programmers terse, readable and typed chains of properties to work with in the app
1. Designers a summary of the visual language characteristics of the app - expressed through those same properties and atomic class names

Let's look at a super simple and common config data point to change to illustrate this.

A simple and common tweak from the VvConfig default settings, involves removing the default visual underline from an application's `VvAnchor` (and VvAnchor dependent) elements.

:::tip
The VueVentus library uses the underline due to it's accessibility advantages, but many designs call for underline-less hyper links.
:::

To change this for all VueVentus elements is a one-liner. Simply zero out the `VvConfig` provided value for your app's [anchors.text](/modules/configs/anchors#anchors-text) classes data like so:

```javascript
// removes TWCSS underline classes from VueVentus anchor component default classes
appVv.anchors.text = ''
```

So our {{ $frontmatter.title }} now looks like code below, and any `VvAnchor` element or elements using your appVv.anchors config data will no longer have the default Tailwind CSS underlined classes:

```javascript{8-9}
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

// removes TWCSS underline classes from VueVentus anchor component default classes
appVv.anchors.text = ''

export default appVv
```














## Customizing Palettes/Colors

A super common to-do in your {{ $frontmatter.title }} is customizing application/component color palettes and their colors.

Here's an example of how to add a new anchor color palette called/keyed `bootstrap` that has color name properties that follow a Bootstrap-like vernacular:

```javascript{1}
appVv.anchors.palettes.bootstrap = {
    primary   : "text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200",
    secondary : "text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200",
    danger    : "text-rose-500 hover:text-rose-600 dark:text-rose-300 dark:hover:text-rose-200",
    success   : "text-green-600 hover:text-green-700 dark:text-green-300 dark:hover:text-green-200",
    warning   : "text-amber-600 hover:text-amber-700 dark:text-amber-300 dark:hover:text-amber-200",
    info      : "text-cyan-600 hover:text-cyan-700 dark:text-cyan-300 dark:hover:text-cyan-200",
}
```

So now our {{ $frontmatter.title }} now looks like this:

```javascript{11-18}
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

// removes TWCSS underline classes from VueVentus anchor component default classes
appVv.anchors.text = ''

appVv.anchors.palettes.bootstrap = {
    primary   : "text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200",
    secondary : "text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200",
    danger    : "text-rose-500 hover:text-rose-600 dark:text-rose-300 dark:hover:text-rose-200",
    success   : "text-green-600 hover:text-green-700 dark:text-green-300 dark:hover:text-green-200",
    warning   : "text-amber-600 hover:text-amber-700 dark:text-amber-300 dark:hover:text-amber-200",
    info      : "text-cyan-600 hover:text-cyan-700 dark:text-cyan-300 dark:hover:text-cyan-200",
}

export default appVv
```

This means downstream in a `VvAnchor` component for example, we can now call for our new classes like this:

```html
<VvAnchor palette="bootstrap" color="info">
    I'm an info link!
</VvAnchor>
```

It's worth noting however, that we may want to override the default `VvConfig` anchors palette called/keyed `default`, considering how similar the [AnchorsDefault](/modules/palettes/anchor-default#module-code) palette color names are compared to our new Bootstrap-like palette.

To do this, we'd take a slightly different approach:

```javascript{1}
appVv.anchors.palettes.default = {
    primary   : "...",
    secondary : "...",
    danger    : "...",
    success   : "...",
    warning   : "...",
    info      : "...",
}
```

This means downstream in a `VvAnchor` component for example, we can now call for our new classes like this:

```html
<!-- The default VvAnchor palette value is palette="default" -->
<VvAnchor color="info">
    I'm an info link!
</VvAnchor>
```














## Component Prop Defaults

The `VvConfig` data also comes with powerful access to core component prop defaults, giving developers and designers a powerful way to ripple updates across an application code base.

For example and building on the Bootstrap-like color palette in the section above, since the default palette object itself was overwritten, any default VueVentus color names would no longer work:

```html
<!-- Values are now: primary, secondary, danger, success, warning & info -->
<VvAnchor color="error">
    Color prop should be "danger"!
</VvAnchor>
```

To remedy this, it would be prudent to go ahead and update the defaults for our app's `VvAnchor` component, so it uses one of our new Bootstrap-like color names by default.

So we could change our code to something like this:

```javascript{12}
// ./src/app.vv.ts

appVv.anchors.palettes.default = {
    primary   : "...",
    secondary : "...",
    danger    : "...",
    success   : "...",
    warning   : "...",
    info      : "...",
}

appVv.defaults["VvAnchor"].color = "info"
```

Now in a downstream `VvAnchor` component instance, our component would return an anchor with `info` classes by simply calling:

```html
<VvAnchor>
    I'm an info link!
</VvAnchor>
```

And of course we can access any of our other palette colors by using the other prop names in our Bootstrap-like palette object:

```html
<VvAnchor color="primary">
    I'm an primary link!
</VvAnchor>
```






<DocsPackageVersion/>
