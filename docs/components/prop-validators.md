---
title: Prop Validators
---

<script setup>
    //
</script>


# {{ $frontmatter.title }}

The VueVentus component system comes with a variety of component {{ $frontmatter.title }} for use within the Vue.js component validation system.

These modules are used to allow a single source of truth between library components - allowing developers to create customized, extended or within app custom components, and easily/DRYly add inhereted props without having duplicated validation arrays.

::: tip DESIGNER FRIENDLY
An added bonus of the {{ $frontmatter.title }} approach: web app and accessibility designers can also access and read these app constraints since these modules are abstracted into focused files that are more approachable for non-devs compared to application code!
:::






## ValidAudioSourceTypes

### Use example

```html
<script setup>

    import ValidAudioSourceTypes from '@obewds/vueventus/src/validators/ValidAudioSourceTypes.js'

    const props = defineProps({
        audioSource: {
            type: String,
            validator: (prop) => (ValidAudioSourceTypes).includes(prop),
        }
    })
    
</script>
```


### Module Code

<<< @/../src/validators/ValidAudioSourceTypes.js






## ValidButtonTypes

### Use example

```html
<script setup>

    import ValidButtonTypes from '@obewds/vueventus/src/validators/ValidButtonTypes.js'

    const props = defineProps({
        buttonType: {
            type: String,
            validator: (prop) => (ValidButtonTypes).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidButtonTypes.js






## ValidColorModes

### Use example

```html
<script setup>

    import ValidColorModes from '@obewds/vueventus/src/validators/ValidColorModes.js'

    const props = defineProps({
        colorMode: {
            type: String,
            validator: (prop) => (ValidColorModes).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidColorModes.js






## ValidDirections

### Use example

```html
<script setup>

    import ValidDirections from '@obewds/vueventus/src/validators/ValidDirections.js'

    const props = defineProps({
        direction: {
            type: String,
            validator: (prop) => (ValidDirections).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidDirections.js






## ValidElementTags

### Use example

```html
<script setup>

    import ValidElementTags from '@obewds/vueventus/src/validators/ValidElementTags.js'

    const props = defineProps({
        tag: {
            type: String,
            validator: (prop) => (ValidElementTags).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidElementTags.js






## ValidFontAwesomeFamilies

### Use example

```html
<script setup>

    import ValidFontAwesomeFamilies from '@obewds/vueventus/src/validators/ValidFontAwesomeFamilies.js'

    const props = defineProps({
        faFamily: {
            type: String,
            validator: (prop) => (ValidFontAwesomeFamilies).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidFontAwesomeFamilies.js






## ValidFontAwesomeSizes

### Use example

```html
<script setup>

    import ValidFontAwesomeSizes from '@obewds/vueventus/src/validators/ValidFontAwesomeSizes.js'

    const props = defineProps({
        faSize: {
            type: String,
            validator: (prop) => (ValidFontAwesomeSizes).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidFontAwesomeSizes.js






## ValidHeadingLevels

### Use example

```html
<script setup>

    import ValidHeadingLevels from '@obewds/vueventus/src/validators/ValidHeadingLevels.js'

    const props = defineProps({
        headingLevel: {
            type: String,
            validator: (prop) => (ValidHeadingLevels).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidHeadingLevels.js






## ValidImageSourceTypes

### Use example

```html
<script setup>

    import ValidImageSourceTypes from '@obewds/vueventus/src/validators/ValidImageSourceTypes.js'

    const props = defineProps({
        headingLevel: {
            type: String,
            validator: (prop) => (ValidImageSourceTypes).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidImageSourceTypes.js






## ValidInputTypes

### Use example

```html
<script setup>

    import ValidInputTypes from '@obewds/vueventus/src/validators/ValidInputTypes.js'

    const props = defineProps({
        headingLevel: {
            type: String,
            validator: (prop) => (ValidInputTypes).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidInputTypes.js






## ValidVideoSourceTypes

### Use example

```html
<script setup>

    import ValidVideoSourceTypes from '@obewds/vueventus/src/validators/ValidVideoSourceTypes.js'

    const props = defineProps({
        headingLevel: {
            type: String,
            validator: (prop) => (ValidVideoSourceTypes).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidVideoSourceTypes.js

