---
title: VvPrismVars Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>

<!-- TODO: This docs page needs to be updated so all default values pull from VvConfig data -->



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} is an implementation of [@antfu's](https://github.com/antfu) awesome [prism-theme-vars](https://github.com/antfu/prism-theme-vars) package, but setup to allow you to use Tailwind CSS classes to control your app's code highlighting colors.

::: danger OVERRIDES PRISM.JS CSS
The {{ $frontmatter.title }} pushes a CSS variables packed into a style tag preceding your highlighted code. This CSS cascades over any Prism.js CSS theme you may be using.
:::






## Import

To import a {{ $frontmatter.title }} installed by the [vueventus CLI](/guides/vueventus-cli) or [vv-update CLI](/guides/vv-update-cli):

```javascript
// ./src/components/SomeComponent.vue
import VvPrismVars from './vv/elements/VvPrismVars.vue'
```

!!!include(snippets/vueVentusCliComponentsTip.md)!!!






## Prop: commentStyle
<!-- TODO: change this type to new PropType keyof syntax -->
<!-- TODO: this should use the new ValidCommentStyles validator -->
Type: **`String`**  
Valid Values: **`"normal"`**, **`"italic"`**, **`"oblique"`**  
Default: **`"normal"`**

The {{ $frontmatter.title }} `commentStyle` prop sets the font style of comments in highlighted code.

### Syntax

```html
<VvPrismVars comment-style="normal"/>
```

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!






## Prop: fontSize

Type: **`String`**  
Default: **`"1rem"`**

The {{ $frontmatter.title }} `fontSize` prop sets the font size of highlighted code.

### Syntax

```html
<VvPrismVars font-size="1rem"/>
```






## Prop: lineHeight

Type: **`String`**  
Default: **`"1.3rem"`**

The {{ $frontmatter.title }} `lineHeight` prop sets the line height of highlighted code.

### Syntax

```html
<VvPrismVars line-height="1.3rem"/>
```






## Prop: lineHighlightOpacity

Type: **`String`**  
Default: **`"0.25"`**

The {{ $frontmatter.title }} `lineHighlightOpacity` prop sets the opacity of highlighted lines of code within your highlighted code.

### Syntax

```html
<VvPrismVars line-highlight-opacity="0.25"/>
```






## Prop: textShadow
<!-- TODO: change this type to new PropType keyof syntax -->
<!-- TODO: this should use the new ValidCommentStyles validator -->
Type: **`String`**  
Default: **`"unset"`**

The {{ $frontmatter.title }} `textShadow` prop sets the text shadowing used for highlighted code. VueVentus sets this to `"unset"` by default, because text shadows can make the code a little harder to read in the contexts of dark/light mode highlighted code.

### Syntax

```html
<VvPrismVars text-shadow="unset"/>
```

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!








## Prop: urlDecoration
<!-- TODO: change this type to new PropType keyof syntax -->
<!-- TODO: this should use the new ValidUrlDecorations validator -->
Type: **`String`**  
Valid Values: **`"underline"`**, **`"overline"`**, **`"none"`**  
Default: **`"underline"`**

The {{ $frontmatter.title }} `urlDecoration` prop sets the text decoration for any URL's that may appear in your highlighted code or code comments.

### Syntax

```html
<VvPrismVars url-decoration="underline"/>
```

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!










## Slot: None

::: danger NO SLOT AVAILABLE
The {{ $frontmatter.title }} does not have a Vue slot option.
:::










<DocsPackageVersion/>
