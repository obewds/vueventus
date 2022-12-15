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
    import type { PropType } from 'vue'

    const props = defineProps({
        audioSource: {
            type: String as PropType<ValidAudioSourceTypes>,
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
    import type { PropType } from 'vue'

    const props = defineProps({
        buttonType: {
            type: String as PropType<ValidButtonTypes>,
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
    import type { PropType } from 'vue'

    const props = defineProps({
        colorMode: {
            type: String as PropType<ValidColorModes>,
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
    import type { PropType } from 'vue'

    const props = defineProps({
        direction: {
            type: String as PropType<ValidDirections>,
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
    import type { PropType } from 'vue'

    const props = defineProps({
        tag: {
            type: String as PropType<ValidElementTags>,
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
    import type { PropType } from 'vue'

    const props = defineProps({
        faFamily: {
            type: String as PropType<ValidFontAwesomeFamilies>,
            validator: (prop: ValidFontAwesomeFamilies) => (ValidFontAwesomeFamilies).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidFontAwesomeFamilies.ts







## ValidFontAwesomeSizes

### Use example

```html
<script setup lang="ts">

    import { ValidFontAwesomeSizes } from '@obewds/vueventus'
    import type { PropType } from 'vue'

    const props = defineProps({
        faSize: {
            type: String as PropType<ValidFontAwesomeSizes>,
            validator: (prop: ValidFontAwesomeSizes) => (ValidFontAwesomeSizes).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidFontAwesomeSizes.ts







## ValidHeadingLevels

### Use example

```html
<script setup lang="ts">

    import { ValidHeadingLevels } from '@obewds/vueventus'
    import type { PropType } from 'vue'

    const props = defineProps({
        headingLevel: {
            type: String as PropType<ValidHeadingLevels>,
            validator: (prop: ValidHeadingLevels) => (ValidHeadingLevels).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidHeadingLevels.ts







## ValidImageSourceTypes

### Use example

```html
<script setup lang="ts">

    import { ValidImageSourceTypes } from '@obewds/vueventus'
    import type { PropType } from 'vue'

    const props = defineProps({
        headingLevel: {
            type: String as PropType<ValidImageSourceTypes>,
            validator: (prop: ValidImageSourceTypes) => (ValidImageSourceTypes).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidImageSourceTypes.ts







## ValidInputTypes

### Use example

```html
<script setup lang="ts">

    import { ValidInputTypes } from '@obewds/vueventus'
    import type { PropType } from 'vue'

    const props = defineProps({
        headingLevel: {
            type: String as PropType<ValidInputTypes>,
            validator: (prop: ValidInputTypes) => (ValidInputTypes).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidInputTypes.ts







## ValidListTypes

### Use example

```html
<script setup lang="ts">

    import { ValidListTypes } from '@obewds/vueventus'
    import type { PropType } from 'vue'

    const props = defineProps({
        tag: {
            type: String as PropType<ValidListTypes>,
            validator: (prop: ValidListTypes) => (ValidListTypes).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidInputTypes.ts







## ValidVideoSourceTypes

### Use example

```html
<script setup lang="ts">

    import { ValidVideoSourceTypes } from '@obewds/vueventus'
    import type { PropType } from 'vue'

    const props = defineProps({
        headingLevel: {
            type: String as PropType<ValidVideoSourceTypes>,
            validator: (prop: ValidVideoSourceTypes) => (ValidVideoSourceTypes).includes(prop),
        }
    })

</script>
```

### Module Code

<<< @/../src/validators/ValidVideoSourceTypes.ts






<DocsPackageVersion/>

