---
title: Prop Validators
---

<script setup>
    import DocsPackageVersion from '../../src/views/compos/DocsPackageVersion.vue'
</script>





# {{ $frontmatter.title }}

The VueVentus component system comes with a variety of component {{ $frontmatter.title }} for use within the Vue.js component validation system.

These modules are used to allow a single source of truth between library components - allowing developers to create customized, extended or within app custom components, and easily/DRYly add inherited props without having duplicated validation arrays.






## ValidAudioSourceTypes

### Use example

```html
<script setup lang="ts">

    import { ValidAudioSourceTypes } from '@obewds/vueventus'

    const props = defineProps({
        audioSource: {
            type: String,
            validator: (prop: ValidAudioSourceTypes) => (ValidAudioSourceTypes).includes(prop),
        }
    })
    
</script>
```


### Module Code

<<< @/../src/validators/ValidAudioSourceTypes.ts







## ValidButtonTypes

### Use example

```html
<script setup lang="ts">

    import { ValidButtonTypes } from '@obewds/vueventus'

    const props = defineProps({
        buttonType: {
            type: String,
            validator: (prop: ValidButtonTypes) => (ValidButtonTypes).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidButtonTypes.ts







## ValidColorModes

### Use example

```html
<script setup lang="ts">

    import { ValidColorModes } from '@obewds/vueventus'

    const props = defineProps({
        colorMode: {
            type: String,
            validator: (prop: ValidColorModes) => (ValidColorModes).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidColorModes.ts







## ValidDirections

### Use example

```html
<script setup lang="ts">

    import { ValidDirections } from '@obewds/vueventus'

    const props = defineProps({
        direction: {
            type: String,
            validator: (prop: ValidDirections) => (ValidDirections).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidDirections.ts







## ValidElementTags

### Use example

```html
<script setup lang="ts">

    import { ValidElementTags } from '@obewds/vueventus'

    const props = defineProps({
        tag: {
            type: String,
            validator: (prop: ValidElementTags) => (ValidElementTags).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidElementTags.ts







## ValidFontAwesomeFamilies

### Use example

```html
<script setup lang="ts">

    import { ValidFontAwesomeFamilies } from '@obewds/vueventus'

    const props = defineProps({
        faFamily: {
            type: String,
            validator: (prop: ValidFontAwesomeFamilies) => (ValidFontAwesomeFamilies).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidFontAwesomeFamilies.ts






<!-- TODO: replace example import with { xxxxx } '@obewds/vueventus' syntax -->
## ValidFontAwesomeSizes

### Use example

```html
<script setup lang="ts">

    import ValidFontAwesomeSizes from '@obewds/vueventus/dist/validators/ValidFontAwesomeSizes.js'

    const props = defineProps({
        faSize: {
            type: String,
            validator: (prop: ValidFontAwesomeSizes) => (ValidFontAwesomeSizes).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidFontAwesomeSizes.ts






<!-- TODO: replace example import with { xxxxx } '@obewds/vueventus' syntax -->
## ValidHeadingLevels

### Use example

```html
<script setup lang="ts">

    import ValidHeadingLevels from '@obewds/vueventus/dist/validators/ValidHeadingLevels.js'

    const props = defineProps({
        headingLevel: {
            type: String,
            validator: (prop: ValidHeadingLevels) => (ValidHeadingLevels).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidHeadingLevels.ts






<!-- TODO: replace example import with { xxxxx } '@obewds/vueventus' syntax -->
## ValidImageSourceTypes

### Use example

```html
<script setup lang="ts">

    import ValidImageSourceTypes from '@obewds/vueventus/dist/validators/ValidImageSourceTypes.js'

    const props = defineProps({
        headingLevel: {
            type: String,
            validator: (prop: ValidImageSourceTypes) => (ValidImageSourceTypes).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidImageSourceTypes.ts






<!-- TODO: replace example import with { xxxxx } '@obewds/vueventus' syntax -->
## ValidInputTypes

### Use example

```html
<script setup lang="ts">

    import ValidInputTypes from '@obewds/vueventus/dist/validators/ValidInputTypes.js'

    const props = defineProps({
        headingLevel: {
            type: String,
            validator: (prop: ValidInputTypes) => (ValidInputTypes).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidInputTypes.ts






<!-- TODO: replace example import with { xxxxx } '@obewds/vueventus' syntax -->
## ValidVideoSourceTypes

### Use example

```html
<script setup lang="ts">

    import ValidVideoSourceTypes from '@obewds/vueventus/dist/validators/ValidVideoSourceTypes.js'

    const props = defineProps({
        headingLevel: {
            type: String,
            validator: (prop: ValidVideoSourceTypes) => (ValidVideoSourceTypes).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidVideoSourceTypes.ts






<DocsPackageVersion/>

