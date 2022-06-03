<script setup>
    import { VvButton, VvConfig } from '../../src/index'
</script>



# Test Drive: VvButton

Now that everything is wired up, let's test drive the VvButton component.




## Import VvButton

First we'll open up the `./src/components/HelloWorld.vue` component, and import the `VvButton` component:

```html
<script setup>

    import { VvButton } from '@obewds/vueventus'

</script>
```

Next up, we can add our `VvButton` instance in the HelloWorld.vue SFC file `<template>` tag:

```html
<template>
    
    <VvButton>
        VvButton
    </VvButton>

</template>
```

<div class="w-full py-4 text-center">
    <VvButton>
        VvButton
    </VvButton>
</div>

You should now see a button with default Tailwind CSS button classes like the one above!






## Using the Color Prop

Next, let's change the color rapid protyping style:

```html
<template>
    
    <VvButton color="primary">
        VvButton
    </VvButton>

</template>
```

<div class="w-full py-4 text-center">
    <VvButton color="primary">
        VvButton
    </VvButton>
</div>








## Using the Palette Prop

Looking better! Next, let's switch our primary color button to an outline button color palette:

```html
<template>
    
    <VvButton color="primary" palette="outline">
        VvButton
    </VvButton>

</template>
```

<div class="w-full py-4 text-center">
    <VvButton color="primary" palette="outline" class="border-solid">
        VvButton
    </VvButton>
</div>

::: tip
So that's how colors and palettes work. Palettes are overall styling groups or themes, while colors are key/value pairs where the key describes the value and the value is a group of Tailwind CSS classes. Like `color="primary"`, `color="error"` or `color="success"`, etc.
:::







## Adding Classes

Next, let's switch back to a solid color palette by dropping the `palette` attribute (the default palette of the VvButton component is `'solid'`). And let's add some rounded corners to our solid primary button, too:

```html
<template>
    
    <VvButton color="primary" class="rounded-lg">
        VvButton
    </VvButton>

</template>
```

<div class="w-full py-4 text-center">
    <VvButton color="primary" class="rounded-lg">
        VvButton
    </VvButton>
</div>

Your VvButton component instance should now be a solid primary colored button with rounded corners!

