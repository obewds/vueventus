---
title: VvListbox Component
---

<script setup>

    import { ref } from 'vue'
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VvListbox, VvConfig } from '../../../src/index'

    const someValue = ref('')
    const someValueTwo = ref('')

    const listboxData = [
        {
            "id": 0,
            "display": "Select an option",
            "value": "",
            "disabled": false
        },{
            "id": 1,
            "display": "Morning",
            "value": "am",
            "disabled": false
        },{
            "id": 2,
            "display": "Noon",
            "value": "noon",
            "disabled": true
        },{
            "id": 3,
            "display": "Evening",
            "value": "pm",
            "disabled": false
        },
    ]

</script>

<!-- TODO: Add semicolons to all sub-sub heads to > ### Syntax: -->
<!-- TODO: Add semicolons to all sub-sub heads to > ### Result: -->
<!-- TODO: Add semicolons to all sub-sub heads to > ### ### Typing for Downstream Component Instances: -->

<!-- TODO: complete docs content -->





# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides a set of props and config module based settings to make a validation ready set of select elements for applications with an extremely DRY implementation of atomic classes.







## Import

To import a {{ $frontmatter.title }} installed by the [vueventus CLI](/guides/vueventus-cli) or [vv-update CLI](/guides/vv-update-cli):

```javascript
// ./src/components/SomeComponent.vue
import VvListbox from './vv/selects/VvListbox.vue'
```

!!!include(snippets/vueVentusCliComponentsTip.md)!!!

Alternatively, you can install the raw library {{ $frontmatter.title }} with:

```javascript
import { VvListbox } from '@obewds/vueventus'
```

!!!include(snippets/vueVentusRawComposTip.md)!!!

!!!include(snippets/differenceBetweenRawAndCliTip.md)!!!










## Emits: update:modelValue

Emits: **`update:modelValue`**  
Emit Value Type: **`Object`**  

The {{ $frontmatter.title }} emits a standard Vue key of `update:modelValue` upon input event changes of the component's currently selected data.

::: tip
This means when using the {{ $frontmatter.title }} downstream in an end application, you can safely use Vue's `v-model` binding to two-way bind a reactive value through your downstream component and into (and back from) the {{ $frontmatter.title }} instance.
:::

### Example

```html
<!-- ./src/components/AppListbox.vue -->

<script setup lang="ts">

    import { ref } from 'vue'
    import { VvListbox } from '@obewds/vueventus'

    const someValue = ref('')

</script>

<template>

    <VvListbox v-model="someValue" label="Example Listbox:"/>

</template>
```








## Prop: data

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvListbox.data }}"`**

The {{ $frontmatter.title }} `data` prop sets the component instance data that ultimately is displayed to the user for selection from a list of objects with a specific syntax and typing minimum requirements.

### Syntax

```html
<script setup lang="ts">

    import { ref } from 'vue'
    import { VvListbox } from '@obewds/vueventus'

    const someValue = ref('')

</script>

<template>

    <VvListbox v-model="someValue" label="Example Listbox:"/>

    <div>User Selection:</div>

    <div>{{ someValue }}</div>

</template>
```

### Result

<div class="w-full pt-4">
    <VvListbox v-model="someValue" label="Example Listbox:"/>
    <div>User Selection:</div>
    <div>{{ someValue }}</div>
</div>

### With Data Syntax

```html
<script setup lang="ts">

    import { ref } from 'vue'
    import { VvListbox } from '@obewds/vueventus'
    import type { VvListboxData } from '@obewds/vueventus'

    const someValueTwo = ref('')

    const listboxData: VvListboxData[] = [
        {
            "id": 0,
            "display": "Select an option",
            "value": "",
            "disabled": false
        },{
            "id": 1,
            "display": "Morning",
            "value": "am",
            "disabled": false
        },{
            "id": 2,
            "display": "Noon",
            "value": "noon",
            "disabled": true
        },{
            "id": 3,
            "display": "Evening",
            "value": "pm",
            "disabled": false
        },
    ]

</script>

<template>

    <VvListbox v-model="someValueTwo" :data="listboxData" label="Listbox Data Example:"/>

    <div>User Selection:</div>

    <div>{{ someValue }}</div>

</template>
```

### With Data Result

<div class="w-full pt-4">
    <VvListbox v-model="someValueTwo" :data="listboxData" label="Listbox Data Example:"/>
    <div>User Selection:</div>
    <div>{{ someValueTwo }}</div>
</div>








## Prop: debug
Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvListbox.debug }}`**

The {{ $frontmatter.title }} `debug` prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through `data-vv-listbox-` prefixed HTML attributes.

### Syntax

```html
<VvListbox :debug="true"/>
```

### Result

<div class="w-full pt-4">
    <VvListbox :debug="true"/>
</div>










## Prop: displayClasses
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvListbox.displayClasses }}"`**

<!-- TODO: add docs content for displayClasses prop -->
More documentation coming Soon!










## Prop: displayDisabledClasses
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvListbox.displayDisabledClasses }}"`**

<!-- TODO: add docs content for displayDisabledClasses prop -->
More documentation coming Soon!










## Prop: iconDisabledClasses
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvListbox.iconDisabledClasses }}"`**

<!-- TODO: add docs content for iconDisabledClasses prop -->
More documentation coming Soon!










## Prop: iconSelectedClasses
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvListbox.iconSelectedClasses }}"`**

<!-- TODO: add docs content for iconSelectedClasses prop -->
More documentation coming Soon!










## Prop: iconsSizeClasses
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvListbox.iconsSizeClasses }}"`**

<!-- TODO: add docs content for iconsSizeClasses prop -->
More documentation coming Soon!










## Prop: label
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvListbox.label }}"`**

<!-- TODO: add docs content for label prop -->
More documentation coming Soon!










## Prop: labelClasses
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvListbox.labelClasses }}"`**

<!-- TODO: add docs content for labelClasses prop -->
More documentation coming Soon!










## Prop: listboxButtonClasses
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvListbox.listboxButtonClasses }}"`**

<!-- TODO: add docs content for listboxButtonClasses prop -->
More documentation coming Soon!










## Prop: listboxButtonColor
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvListbox.listboxButtonColor }}"`**

<!-- TODO: add docs content for listboxButtonColor prop -->
More documentation coming Soon!










## Prop: listboxButtonPalette
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvListbox.listboxButtonPalette }}"`**

<!-- TODO: add docs content for listboxButtonPalette prop -->
More documentation coming Soon!










## Prop: listboxOptionClasses
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvListbox.listboxOptionClasses }}"`**

<!-- TODO: add docs content for listboxOptionClasses prop -->
More documentation coming Soon!










## Prop: listboxOptionColor
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvListbox.listboxOptionColor }}"`**

<!-- TODO: add docs content for listboxOptionColor prop -->
More documentation coming Soon!










## Prop: listboxOptionPalette
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvListbox.listboxOptionPalette }}"`**

<!-- TODO: add docs content for listboxOptionPalette prop -->
More documentation coming Soon!










## Prop: listboxOptionsClasses
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvListbox.listboxOptionsClasses }}"`**

<!-- TODO: add docs content for listboxOptionsClasses prop -->
More documentation coming Soon!










## Prop: listboxOptionsWithLabelSpacing
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvListbox.listboxOptionsWithLabelSpacing }}"`**

<!-- TODO: add docs content for listboxOptionsWithLabelSpacing prop -->
More documentation coming Soon!










## Prop: listboxOptionsWithoutLabelSpacing
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvListbox.listboxOptionsWithoutLabelSpacing }}"`**

<!-- TODO: add docs content for listboxOptionsWithoutLabelSpacing prop -->
More documentation coming Soon!










## Prop: optionIconParentClasses
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvListbox.optionIconParentClasses }}"`**

<!-- TODO: add docs content for optionIconParentClasses prop -->
More documentation coming Soon!










## Prop: selectedDisplayClasses
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvListbox.selectedDisplayClasses }}"`**

<!-- TODO: add docs content for selectedDisplayClasses prop -->
More documentation coming Soon!










## Prop: selectedIndex
Type: **`Number`**  
Default: **`{{ VvConfig.defaults.VvListbox.selectedIndex }}`**

<!-- TODO: add docs content for selectedIndex prop -->
More documentation coming Soon!










## Prop: size
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvListbox.size }}"`**

<!-- TODO: add docs content for size prop -->
More documentation coming Soon!







## Slot: #default
<!-- TODO: add default slot documentation for component -->
More documentation coming Soon!




<!--

displayClasses: {
    type: String,
    default: VvConfig.defaults.VvListbox.displayClasses,
},
displayDisabledClasses: {
    type: String,
    default: VvConfig.defaults.VvListbox.displayDisabledClasses,
},
iconDisabledClasses: {
    type: String,
    default: VvConfig.defaults.VvListbox.iconDisabledClasses,
},
iconSelectedClasses: {
    type: String,
    default: VvConfig.defaults.VvListbox.iconSelectedClasses,
},
iconsSizeClasses: {
    type: String,
    default: VvConfig.defaults.VvListbox.iconsSizeClasses,
},
label: {
    type: String,
    default: VvConfig.defaults.VvListbox.label,
},
labelClasses: {
    type: String,
    default: VvConfig.defaults.VvListbox.labelClasses,
},
listboxButtonClasses: {
    type: String,
    default: VvConfig.defaults.VvListbox.listboxButtonClasses,
},
listboxButtonColor: {
    type: String as PropType<keyof DefaultValidationPaletteColors>,
    default: VvConfig.defaults.VvListbox.listboxButtonColor,
},
listboxButtonPalette: {
    type: String as PropType<keyof DefaultValidationPalettes>,
    default: VvConfig.defaults.VvListbox.listboxButtonPalette,
},
listboxOptionClasses: {
    type: String,
    default: VvConfig.defaults.VvListbox.listboxOptionClasses,
},
listboxOptionColor: {
    type: String as PropType<keyof DefaultValidationPaletteColors>,
    default: VvConfig.defaults.VvListbox.listboxOptionColor,
},
listboxOptionPalette: {
    type: String as PropType<keyof DefaultValidationPalettes>,
    default: VvConfig.defaults.VvListbox.listboxOptionPalette,
},
listboxOptionsClasses: {
    type: String,
    default: VvConfig.defaults.VvListbox.listboxOptionsClasses,
},
listboxOptionsWithLabelSpacing: {
    type: String,
    default: VvConfig.defaults.VvListbox.listboxOptionsWithLabelSpacing,
},
listboxOptionsWithoutLabelSpacing: {
    type: String,
    default: VvConfig.defaults.VvListbox.listboxOptionsWithoutLabelSpacing,
},
optionIconParentClasses: {
    type: String,
    default: VvConfig.defaults.VvListbox.optionIconParentClasses,
},
selectedDisplayClasses: {
    type: String,
    default: VvConfig.defaults.VvListbox.selectedDisplayClasses,
},
selectedIndex: {
    type: Number,
    default: VvConfig.defaults.VvListbox.selectedIndex,
},
size: {
    type: String as PropType<keyof SizesSelects>,
    default: VvConfig.defaults.VvListbox.size,
},

-->


<DocsPackageVersion/>
