---
title: VueVentusSpinningMark Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VueVentusSpinningMark } from '../../../src/index'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides an `<svg>` component of the VueVentus logo text's freely scalable geometry as a group. You can therefore influence the SVGs shapes by using Tailwind classes in the `.fill-[colorKey]-[keyValue]` format such as `.fill-gray-900` and `dark:fill-gray-100`, etc.





## Import

To import the compiled library version of the {{ $frontmatter.title }}:

```javascript
import { VueVentusSpinningMark } from '@obewds/vueventus'
```

To import the {{ $frontmatter.title }} SFC directly:

```javascript
import VueVentusSpinningMark from '@obewds/vueventus/dist/components/logos/VueVentusSpinningMark.vue'
```






## Prop: animationClass

Type: **`String`**  
Default: **`"animate-spin-reverse-4s"`**

The {{ $frontmatter.title }} `animationClass` prop sets a component instance's output `<svg>` animation class if the component prop for `enableAnimation` is also `true` for the component instance.

### Syntax

```html
<VueVentusSpinningMark
    animation-class="animate-spin-reverse"
    class="w-16"
    :enable-animation="true"
/>
```

### Result

<div class="w-full pt-4">
    <VueVentusSpinningMark
        animation-class="animate-spin-reverse"
        class="w-16"
        :enable-animation="true"
    />
</div>






## Prop: enableAnimation

Type: **`Boolean`**  
Default: **`true`**

The {{ $frontmatter.title }} `enableAnimation` prop determines if the component instance's `animationClass` prop classes are applied to the output `<svg>` element.

### Syntax

```html
<VueVentusSpinningMark
    animation-class="animate-spin-reverse"
    class="w-16"
    :enable-animation="false"
/>
```

### Result

<div class="w-full pt-4">
    <VueVentusSpinningMark
        animation-class="animate-spin-reverse"
        class="w-16"
        :enable-animation="false"
    />
</div>






## Prop: fillOne

Type: **`String`**  
Default: **`"#41b883"`**

The {{ $frontmatter.title }} `fillOne` prop sets the color code for two of the four mark shapes.

### Syntax

```html
<VueVentusSpinningMark
    fill-one="#666"
    fill-two="#999"
    class="w-16"
/>
```

### Result

<div class="w-full pt-4">
    <VueVentusSpinningMark
        fill-one="#666"
        fill-two="#999"
        class="w-16"
    />
</div>






## Prop: fillTwo

Type: **`String`**  
Default: **`"#2298bd"`**

The {{ $frontmatter.title }} `fillTwo` prop sets the color code for the other two of the four mark shapes that the `fillOne` prop doesn't cover.

### Syntax

```html
<VueVentusSpinningMark
    fill-one="#666"
    fill-two="#999"
    class="w-16"
/>
```

### Result

<div class="w-full pt-4">
    <VueVentusSpinningMark
        fill-one="#666"
        fill-two="#999"
        class="w-16"
    />
</div>










## Slot: None

::: danger NO SLOT AVAILABLE
The {{ $frontmatter.title }} does not have Vue slot option, because the component outputs a static `<svg>` element that can be controlled via Tailwind CSS classes - especially `.fill-[colorKey]-[keyValue]` classes like `.fill-green-600` and `dark:fill-green-400` in the example above.
:::






<DocsPackageVersion/>
