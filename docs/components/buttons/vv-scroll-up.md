---
title: VvScrollUp Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VvConfig } from '../../../src/index'
</script>

<!-- TODO: Add semicolons to all sub-sub heads to > ### Syntax: -->
<!-- TODO: Add semicolons to all sub-sub heads to > ### Result: -->
<!-- TODO: Add semicolons to all sub-sub heads to > ### Downstream Typescript Prop Typing: -->





# {{ $frontmatter.title }}

The {{ $frontmatter.title }} is a GSAP powered component that automatically handles the classic scroll to the top of a page functionality, and also by default hides itself when the page is scrolled fully to the top.






## Import

To import a {{ $frontmatter.title }} installed by the [vueventus CLI](/guides/vueventus-cli) or [vv-update CLI](/guides/vv-update-cli):

```javascript
// ./src/components/SomeComponent.vue
import VvScrollUp from './vv/buttons/VvScrollUp.vue'
```

!!!include(snippets/vueVentusCliComponentsTip.md)!!!






## Prop: buttonClasses

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvScrollUp.buttonClasses }}"`**

The {{ $frontmatter.title }} `buttonClasses` prop sets the underlying VvButton's Tailwind CSS classes.

### Syntax

```html
<VvScrollUp button-classes="rounded-full"/>
```






## Prop: color
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvScrollUp.color }}"`**

The {{ $frontmatter.title }} `color` prop sets the underlying VvButton's palette color value (in conjunction with the `palette` prop value).

### Syntax

```html
<VvScrollUp color="primary"/>
```

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!








## Prop: debug
Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvScrollUp.debug }}`**

The {{ $frontmatter.title }} `debug` prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through `data-vv-scroll-up-` prefixed HTML attributes.

### Syntax

```html
<VvScrollUp :debug="true"/>
```






## Prop: fab

Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvScrollUp.fab }}`**

The {{ $frontmatter.title }} `fab` prop sets the underlying VvButton's boolean `fab` value, which switches the base classes for the button to the `fabSizes` set of classes.

### Syntax

```html
<VvScrollUp :fab="true"/>
```






## Prop: 

Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvScrollUp.isVisible }}`**

The {{ $frontmatter.title }} `isVisible` prop sets the visibility state of the component, which by default is `false` to allow the VvScrollUp component to animate into view once a user has scrolled a page. If the value of the `isVisible` prop is `true`, then the component won't animate in/out and will stay visible.

### Syntax

```html
<VvScrollUp :is-visible="false"/>
```






## Prop: offsetMinimum

Type: **`Number`**  
Default: **`{{ VvConfig.defaults.VvScrollUp.offsetMinimum }}`**

The {{ $frontmatter.title }} `offsetMinimum` prop sets threshold (in pixels) that determines when the VvScrollUp component will animate into view once a user has scrolled a page past the `offsetMinimum` value.

### Syntax

```html
<VvScrollUp :offset-minimum="100"/>
```






## Prop: palette
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvScrollUp.palette }}"`**

The {{ $frontmatter.title }} `palette` prop sets the underlying VvButton's color value (in conjunction with the `color` prop value).

### Syntax

```html
<VvScrollUp palette="solid"/>
```

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!






## Prop: size
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvScrollUp.size }}"`**

The {{ $frontmatter.title }} `size` prop sets the underlying VvButton's size value.

### Syntax

```html
<VvScrollUp size="xs"/>
```

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!






## Prop: title

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvScrollUp.title }}"`**

The {{ $frontmatter.title }} `title` prop sets the underlying VvButton's title attribute value, which is shown to users that hover over the button without moving the cursor for a second or so, and is also accessible by screen readers.

### Syntax

```html
<VvScrollUp title="Scroll to Top"/>
```










## Slot: #default

The {{ $frontmatter.title }} has a standard `#default` Vue slot to insert child elements/nodes into the component.

### Syntax

```html
<VvScrollUp>
    <VvFa icon="house"/>
</VvScrollUp>
```










<DocsPackageVersion/>
