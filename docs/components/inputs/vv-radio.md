---
title: VvRadio Component
---

<script setup>
    import { ref } from 'vue'
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VvEl, VvRadio, VvConfig } from '../../../src/index'

    const selections = ref([
        { value: 'dawn', label: 'Dawn Light' },
        { value: 'dusk', label: 'Dusk Light' },
        { value: 'moonlight', label: 'Moonlight' },
        { value: 'sunlight', label: 'Sunlight' },
    ])
    const selected = ref(selections.value[0])

    const tw = {
        wrapper: 'w-full flex flex-col gap-2 pb-4',
        row: 'flex items-center gap-2',
    }
</script>




# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides a set of props and config module based settings to make a validation ready set of radio input elements for applications with an extremely DRY implementation of atomic classes.







## Import

To import the {{ $frontmatter.title }}:

```javascript
import { VvRadio } from '@obewds/vueventus'
```










## Emits: update:modelValue

Emits: **`update:modelValue`**  
Emit Value Type: **`Boolean`**  

The {{ $frontmatter.title }} emits a standard Vue key of `update:modelValue` upon the change event of the component's generated radio input's checked attribute.

::: tip
This means when using the {{ $frontmatter.title }} downstream in an end application, you can safely use Vue's `v-model` binding to two-way bind a reactive value through your downstream component and into (and back from) the {{ $frontmatter.title }} instance.
:::

### Example

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import { ref } from 'vue'
    import { VvRadio, VvEl } from '@obewds/vueventus'

    const selections = ref([
        { value: 'dawn', label: 'Dawn Light' },
        { value: 'dusk', label: 'Dusk Light' },
        { value: 'moonlight', label: 'Moonlight' },
        { value: 'sunlight', label: 'Sunlight' },
    ])

    const selected = ref(selections.value[0])

</script>

<template>

    <div class="flex flex-col space-y-1">

        <div
            v-for="(selection, id) in selections"
            class="flex items-center gap-2"
            :key="id"
        >

            <VvRadio
                :id="'lightType-' + id"
                name="lightType"
                :value="selection.value"
                color="primary"
                @update:modelValue="(event) => event === true ? selected = selection : null"
                :checked="selection === selected"
            />

            <label :for="'lightType-' + id">
                {{ selection.label }}
            </label>

        </div>

        <VvEl text-color="primary" class="font-bold pt-1">
            {{ selected.label }}
        </VvEl>

    </div>

</template>
```

### Result  

<div class="flex flex-col space-y-1">
    <div v-for="(selection, id) in selections" class="flex items-center gap-2" :key="id">
        <VvRadio
            :id="'lightType-' + id"
            name="lightType"
            :value="selection.value"
            color="primary"
            @update:modelValue="(event) => event === true ? selected = selection : null"
            :checked="selection === selected"
        />
        <label :for="'lightType-' + id">{{ selection.label }}</label>
    </div>
    <VvEl text-color="primary" class="text-left font-bold pt-1">
        {{ selected.label }}
    </VvEl>
</div>


Some things to note about the code above:

1. The `name` attribute value is shared across the loop of VvRadio component instances to group them as radio buttons with each other
1. The `id` attribute of a VvRadio component and it's associated `label` element's `for` attribute match each other to allow interactions with the label to apply to the radio input
1. The `value` attribute of a VvRadio component is **required** and is used to provide the semantically correct "hard-coded" value for each radio in the group
1. The `checked` value for the VvRadio component is determined by comparing the selected object against the selection object value - where the result is passed down to VvRadio as a Boolean
1. The event listener for the `update:modelValue` event is used to trigger a function that checks if the triggered event value is `true` and if so, updates the reactive `selected` value to be the new user-selected object. If the emitted `update:modelValue` event is false the function returns `null`, and the `selected` value remains unchanged.
1. The displayed `selected.label` text updates reactively when the `selected` value is changed










## Prop: checked

Type: **`Boolean`**  
Default: **`"{{ VvConfig.defaults.VvRadio.checked }}"`**

The {{ $frontmatter.title }} `checked` prop sets the component instance `checked` attribute. This means when the component is initialized with the `checked` prop being `true`, then the rendered radio will display in the fully checked state.

:::tip
You can also simply use the attribute `checked` on your VvRadio instance to render the resulting radio input element in the checked state.
:::

### Syntax

```html
<div class="flex flex-col space-y-1">
    <div class="flex items-center gap-2">
        <VvRadio
            id="lightType-1"
            name="lightType"
            value="sunlight"
            :checked="true"
        />
        <label for="lightType-1">Sunlight</label>
    </div>
    <div class="flex items-center gap-2">
        <VvRadio
            id="lightType-2"
            name="lightType"
            value="moonlight"
            :checked="false"
        />
        <label for="lightType-2">Moonlight</label>
    </div>
</div>
```

### Result

<div class="flex flex-col space-y-1 pt-4">
    <div class="flex items-center gap-2">
        <VvRadio
            id="sunlight"
            name="lights"
            value="sunlight"
            :checked="true"
        />
        <label for="sunlight">Sunlight</label>
    </div>
    <div class="flex items-center gap-2">
        <VvRadio
            id="moonlight"
            name="lights"
            value="moonlight"
            :checked="false"
        />
        <label for="moonlight">Moonlight</label>
    </div>
</div>








## Prop: color

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvRadio.color }}"`**

The {{ $frontmatter.title }} `color` prop sets the component instance color based both on the `color` prop and the `palette` prop value.

### Syntax

```html
<script setup lang="ts">

    import { VvRadio } from '@obewds/vueventus'

    const tw = {
        wrapper: 'w-full flex flex-col gap-2 pb-4',
        row: 'flex items-center gap-2',
    }

</script>

<!-- VvRadio color="default" example -->
<div :class="tw.wrapper">
    <div :class="tw.row">
        <VvRadio color="default" id="food-1" name="food" value="pizza" checked/>
        <label for="food-1">Pizza</label>
    </div>
    <div :class="tw.row">
        <VvRadio color="default" id="food-2" name="food" value="hamburger"/>
        <label for="food-2">Hamburger</label>
    </div>
</div>

<!-- VvRadio color="error" example -->
<div :class="tw.wrapper">
    <div :class="tw.row">
        <VvRadio color="error" id="drinks-1" name="drinks" value="water" checked/>
        <label for="drinks-1">Water</label>
    </div>
    <div :class="tw.row">
        <VvRadio color="error" id="drinks-2" name="drinks" value="juice"/>
        <label for="drinks-2">Juice</label>
    </div>
</div>

<!-- VvRadio color="primary" example -->
<div :class="tw.wrapper">
    <div :class="tw.row">
        <VvRadio color="primary" id="amPm-1" name="amPm" value="am" checked/>
        <label for="amPm-1">AM</label>
    </div>
    <div :class="tw.row">
        <VvRadio color="primary" id="amPm-2" name="amPm" value="pm"/>
        <label for="amPm-2">PM</label>
    </div>
</div>

<!-- VvRadio color="secondary" example -->
<div :class="tw.wrapper">
    <div :class="tw.row">
        <VvRadio color="secondary" id="dessert-1" name="dessert" value="iceCream" checked/>
        <label for="dessert-1">Ice Cream</label>
    </div>
    <div :class="tw.row">
        <VvRadio color="secondary" id="dessert-2" name="dessert" value="fruit"/>
        <label for="dessert-2">Fruit</label>
    </div>
</div>

<!-- VvRadio color="success" example -->
<div :class="tw.wrapper">
    <div :class="tw.row">
        <VvRadio color="success" id="apps-1" name="apps" value="salad" checked/>
        <label for="apps-1">Salad</label>
    </div>
    <div :class="tw.row">
        <VvRadio color="success" id="apps-2" name="apps" value="rolls"/>
        <label for="apps-2">Rolls</label>
    </div>
</div>
```

### Result

<div :class="[tw.wrapper, 'pt-4']">
    <div :class="tw.row">
        <VvRadio color="default" id="food-1" name="food" value="pizza" checked/>
        <label for="food-1">Pizza</label>
    </div>
    <div :class="tw.row">
        <VvRadio color="default" id="food-2" name="food" value="hamburger"/>
        <label for="food-2">Hamburger</label>
    </div>
</div>

<div :class="tw.wrapper">
    <div :class="tw.row">
        <VvRadio color="error" id="drinks-1" name="drinks" value="water" checked/>
        <label for="drinks-1">Water</label>
    </div>
    <div :class="tw.row">
        <VvRadio color="error" id="drinks-2" name="drinks" value="juice"/>
        <label for="drinks-2">Juice</label>
    </div>
</div>

<div :class="tw.wrapper">
    <div :class="tw.row">
        <VvRadio color="primary" id="amPm-1" name="amPm" value="am" checked/>
        <label for="amPm-1">AM</label>
    </div>
    <div :class="tw.row">
        <VvRadio color="primary" id="amPm-2" name="amPm" value="pm"/>
        <label for="amPm-2">PM</label>
    </div>
</div>

<div :class="tw.wrapper">
    <div :class="tw.row">
        <VvRadio color="secondary" id="dessert-1" name="dessert" value="iceCream" checked/>
        <label for="dessert-1">Ice Cream</label>
    </div>
    <div :class="tw.row">
        <VvRadio color="secondary" id="dessert-2" name="dessert" value="fruit"/>
        <label for="dessert-2">Fruit</label>
    </div>
</div>

<div :class="tw.wrapper">
    <div :class="tw.row">
        <VvRadio color="success" id="apps-1" name="apps" value="salad" checked/>
        <label for="apps-1">Salad</label>
    </div>
    <div :class="tw.row">
        <VvRadio color="success" id="apps-2" name="apps" value="rolls"/>
        <label for="apps-2">Rolls</label>
    </div>
</div>











## Prop: darkRadioHex

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvRadio.darkRadioHex }}"`**

The {{ $frontmatter.title }} `darkRadioHex` prop sets the component checked state's radio icon color in the dark color mode state.

### Syntax

```html
<VvRadio
    dark-radio-hex="#00ffff"
    light-radio-hex="#00ffff"
    name="planets"
    value="earth"
    checked
/>
<VvRadio
    dark-radio-hex="#00ffff"
    light-radio-hex="#00ffff"
    name="planets"
    value="mars"
/>
```

### Result

<div class="w-full flex gap-3 pt-4">
    <VvRadio
        dark-radio-hex="#00ffff"
        light-radio-hex="#00ffff"
        name="planets"
        value="earth"
        checked
    />
    <VvRadio
        dark-radio-hex="#00ffff"
        light-radio-hex="#00ffff"
        name="planets"
        value="mars"
    />
</div>










## Prop: lightRadioHex

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvRadio.lightRadioHex }}"`**

The {{ $frontmatter.title }} `lightRadioHex` prop sets the component checked state's radio icon color in the light color mode state.

### Syntax

```html
<VvRadio
    dark-radio-hex="#00ffff"
    light-radio-hex="#00ffff"
    name="weather"
    value="rain"
    checked
/>
<VvRadio
    dark-radio-hex="#00ffff"
    light-radio-hex="#00ffff"
    name="weather"
    value="snow"
/>
```

### Result

<div class="w-full flex gap-3 pt-4">
    <VvRadio
        dark-radio-hex="#00ffff"
        light-radio-hex="#00ffff"
        name="weather"
        value="rain"
        checked
    />
    <VvRadio
        dark-radio-hex="#00ffff"
        light-radio-hex="#00ffff"
        name="weather"
        value="snow"
    />
</div>













## Prop: palette

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvRadio.palette }}"`**

The {{ $frontmatter.title }} `palette` prop sets the component instance palette based both on the `color` prop and the `palette` prop value.

### Syntax

```html
<div class="flex gap-3">
    <VvRadio palette="default" name="colors" value="gray" checked/>
    <VvRadio palette="default" name="colors" value="red" color="error"/>
    <VvRadio palette="default" name="colors" value="violet" color="primary"/>
    <VvRadio palette="default" name="colors" value="emerald" color="secondary"/>
    <VvRadio palette="default" name="colors" value="green" color="success"/>
</div>
```

### Result

<div class="w-full flex gap-3 pt-4">
    <VvRadio palette="default" name="colors" value="gray" checked/>
    <VvRadio palette="default" name="colors" value="red" color="error"/>
    <VvRadio palette="default" name="colors" value="violet" color="primary"/>
    <VvRadio palette="default" name="colors" value="emerald" color="secondary"/>
    <VvRadio palette="default" name="colors" value="green" color="success"/>
</div>













## Prop: size

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvRadio.size }}"`**

The {{ $frontmatter.title }} `size` prop sets the component instance size-based classes which in the context of radio inputs typically involves fixed width and height atomic classes.

### Syntax

```html
<div class="flex items-center gap-3">
    <VvRadio size="xs" name="sizes" value="xs"/>
    <VvRadio size="sm" name="sizes" value="sm"/>
    <VvRadio size="md" name="sizes" value="md" checked/>
    <VvRadio size="lg" name="sizes" value="lg"/>
    <VvRadio size="xl" name="sizes" value="xl"/>
    <VvRadio size="2xl" name="sizes" value="2xl"/>
</div>
```

### Result

<div class="w-full flex items-center gap-3 pt-4">
    <VvRadio size="xs" name="sizes" value="xs"/>
    <VvRadio size="sm" name="sizes" value="sm"/>
    <VvRadio size="md" name="sizes" value="md" checked/>
    <VvRadio size="lg" name="sizes" value="lg"/>
    <VvRadio size="xl" name="sizes" value="xl"/>
    <VvRadio size="2xl" name="sizes" value="2xl"/>
</div>

::: details size prop radios with sized labels examples
**Syntax**

```html
<div class="flex flex-col w-full space-y-2">

    <div class="flex flex-col pb-4">
        <div class="flex items-center gap-1.5">
            <VvRadio
                id="vvRadio-xs-1"
                name="vvRadio-xs"
                value="xs-1"
                color="default"
                size="xs"
                :checked="true"
            />
            <label htmlFor="vvRadio-xs-1" class="text-2xs">XS Size 1</label>
        </div>
        <div class="flex items-center gap-1.5">
            <VvRadio
                id="vvRadio-xs-2"
                name="vvRadio-xs"
                value="xs-2"
                color="default"
                size="xs"
                :checked="false"
            />
            <label htmlFor="vvRadio-xs-2" class="text-2xs">XS Size 2</label>
        </div>
    </div>

    <div class="flex flex-col space-y-0.5 pb-4">
        <div class="flex items-center gap-1.5">
            <VvRadio
                id="vvRadio-sm-1"
                name="vvRadio-sm"
                value="sm-1"
                color="default"
                size="sm"
                :checked="true"
            />
            <label htmlFor="vvRadio-sm-1" class="text-xs">SM Size 1</label>
        </div>
        <div class="flex items-center gap-1.5">
            <VvRadio
                id="vvRadio-sm-2"
                name="vvRadio-sm"
                value="sm-2"
                color="default"
                size="sm"
                :checked="false"
            />
            <label htmlFor="vvRadio-sm-2" class="text-xs">SM Size 2</label>
        </div>
    </div>

    <div class="flex flex-col space-y-2 pb-4">
        <div class="flex items-center gap-2">
            <VvRadio
                id="vvRadio-md-1"
                name="vvRadio-md"
                value="md-1"
                color="default"
                size="md"
                :checked="true"
            />
            <label htmlFor="vvRadio-md-1" class="text-md">MD Size 1</label>
        </div>
        <div class="flex items-center gap-2">
            <VvRadio
                id="vvRadio-md-2"
                name="vvRadio-md"
                value="md-2"
                color="default"
                size="md"
                :checked="false"
            />
            <label htmlFor="vvRadio-md-2" class="text-md">MD Size 2</label>
        </div>
    </div>

    <div class="flex flex-col space-y-2 pb-4">
        <div class="flex items-center gap-2.5">
            <VvRadio
                id="vvRadio-lg-1"
                name="vvRadio-lg"
                value="lg-1"
                color="default"
                size="lg"
                :checked="true"
            />
            <label htmlFor="vvRadio-lg-1" class="text-lg">LG Size 1</label>
        </div>
        <div class="flex items-center gap-2.5">
            <VvRadio
                id="vvRadio-lg-2"
                name="vvRadio-lg"
                value="lg-2"
                color="default"
                size="lg"
                :checked="false"
            />
            <label htmlFor="vvRadio-lg-2" class="text-lg">LG Size 2</label>
        </div>
    </div>

    <div class="flex flex-col space-y-2.5 pb-4">
        <div class="flex items-center gap-3">
            <VvRadio
                id="vvRadio-xl-1"
                name="vvRadio-xl"
                value="xl-1"
                color="default"
                size="xl"
                :checked="true"
            />
            <label htmlFor="vvRadio-xl-1" class="text-xl">XL Size 1</label>
        </div>
        <div class="flex items-center gap-3">
            <VvRadio
                id="vvRadio-xl-2"
                name="vvRadio-xl"
                value="xl-2"
                color="default"
                size="xl"
                :checked="false"
            />
            <label htmlFor="vvRadio-xl-2" class="text-xl">XL Size 2</label>
        </div>
    </div>

    <div class="flex flex-col space-y-2.5 pb-4">
        <div class="flex items-center gap-3">
            <VvRadio
                id="vvRadio-2xl-1"
                name="vvRadio-2xl"
                value="2xl-1"
                color="default"
                size="2xl"
                :checked="true"
            />
            <label htmlFor="vvRadio-2xl-1" class="text-2xl">2XL Size 1</label>
        </div>
        <div class="flex items-center gap-3">
            <VvRadio
                id="vvRadio-2xl-2"
                name="vvRadio-2xl"
                value="2xl-2"
                color="default"
                size="2xl"
                :checked="false"
            />
            <label htmlFor="vvRadio-2xl-2" class="text-2xl">2XL Size 2</label>
        </div>
    </div>

</div>
```

**Result**

<div class="flex flex-col w-full space-y-2">
    <div class="flex flex-col pb-4">
        <div class="flex items-center gap-1.5">
            <VvRadio
                id="vvRadio-xs-1"
                name="vvRadio-xs"
                value="xs-1"
                color="default"
                size="xs"
                :checked="true"
            />
            <label htmlFor="vvRadio-xs-1" class="text-2xs">XS Size 1</label>
        </div>
        <div class="flex items-center gap-1.5">
            <VvRadio
                id="vvRadio-xs-2"
                name="vvRadio-xs"
                value="xs-2"
                color="default"
                size="xs"
                :checked="false"
            />
            <label htmlFor="vvRadio-xs-2" class="text-2xs">XS Size 2</label>
        </div>
    </div>
    <div class="flex flex-col space-y-0.5 pb-4">
        <div class="flex items-center gap-1.5">
            <VvRadio
                id="vvRadio-sm-1"
                name="vvRadio-sm"
                value="sm-1"
                color="default"
                size="sm"
                :checked="true"
            />
            <label htmlFor="vvRadio-sm-1" class="text-xs">SM Size 1</label>
        </div>
        <div class="flex items-center gap-1.5">
            <VvRadio
                id="vvRadio-sm-2"
                name="vvRadio-sm"
                value="sm-2"
                color="default"
                size="sm"
                :checked="false"
            />
            <label htmlFor="vvRadio-sm-2" class="text-xs">SM Size 2</label>
        </div>
    </div>
    <div class="flex flex-col space-y-2 pb-4">
        <div class="flex items-center gap-2">
            <VvRadio
                id="vvRadio-md-1"
                name="vvRadio-md"
                value="md-1"
                color="default"
                size="md"
                :checked="true"
            />
            <label htmlFor="vvRadio-md-1" class="text-md">MD Size 1</label>
        </div>
        <div class="flex items-center gap-2">
            <VvRadio
                id="vvRadio-md-2"
                name="vvRadio-md"
                value="md-2"
                color="default"
                size="md"
                :checked="false"
            />
            <label htmlFor="vvRadio-md-2" class="text-md">MD Size 2</label>
        </div>
    </div>
    <div class="flex flex-col space-y-2 pb-4">
        <div class="flex items-center gap-2.5">
            <VvRadio
                id="vvRadio-lg-1"
                name="vvRadio-lg"
                value="lg-1"
                color="default"
                size="lg"
                :checked="true"
            />
            <label htmlFor="vvRadio-lg-1" class="text-lg">LG Size 1</label>
        </div>
        <div class="flex items-center gap-2.5">
            <VvRadio
                id="vvRadio-lg-2"
                name="vvRadio-lg"
                value="lg-2"
                color="default"
                size="lg"
                :checked="false"
            />
            <label htmlFor="vvRadio-lg-2" class="text-lg">LG Size 2</label>
        </div>
    </div>
    <div class="flex flex-col space-y-2.5 pb-4">
        <div class="flex items-center gap-3">
            <VvRadio
                id="vvRadio-xl-1"
                name="vvRadio-xl"
                value="xl-1"
                color="default"
                size="xl"
                :checked="true"
            />
            <label htmlFor="vvRadio-xl-1" class="text-xl">XL Size 1</label>
        </div>
        <div class="flex items-center gap-3">
            <VvRadio
                id="vvRadio-xl-2"
                name="vvRadio-xl"
                value="xl-2"
                color="default"
                size="xl"
                :checked="false"
            />
            <label htmlFor="vvRadio-xl-2" class="text-xl">XL Size 2</label>
        </div>
    </div>
    <div class="flex flex-col space-y-2.5 pb-4">
        <div class="flex items-center gap-3">
            <VvRadio
                id="vvRadio-2xl-1"
                name="vvRadio-2xl"
                value="2xl-1"
                color="default"
                size="2xl"
                :checked="true"
            />
            <label htmlFor="vvRadio-2xl-1" class="text-2xl">2XL Size 1</label>
        </div>
        <div class="flex items-center gap-3">
            <VvRadio
                id="vvRadio-2xl-2"
                name="vvRadio-2xl"
                value="2xl-2"
                color="default"
                size="2xl"
                :checked="false"
            />
            <label htmlFor="vvRadio-2xl-2" class="text-2xl">2XL Size 2</label>
        </div>
    </div>
</div>

:::













## Slot: None

::: danger NO SLOT AVAILABLE
The {{ $frontmatter.title }} does not have Vue slot option, because an `<input>` element is a HTML Empty Element, which cannot have children or child nodes.
:::









<DocsPackageVersion/>
