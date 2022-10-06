---
title: VvFormGroup Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VvFormGroup, VvInput } from '../../../src/index'
    import { VvConfig } from '../../../src/index'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides a variety of props and config module based settings to make a variety of element configurations for any element itself or as a parent, child, or sibling element with color contextual relations with other contextual elements.






## Import

To import a {{ $frontmatter.title }} installed by the [vueventus CLI](/guides/vueventus-cli) or [vv-update CLI](/guides/vv-update-cli):

```javascript
// ./src/components/SomeComponent.vue
import VvFormGroup from './vv/forms/VvFormGroup.vue'
```

!!!include(snippets/vueVentusCliComponentsTip.md)!!!

Alternatively, you can install the raw library {{ $frontmatter.title }} with:

```javascript
import { VvFormGroup } from '@obewds/vueventus'
```

!!!include(snippets/vueVentusRawComposTip.md)!!!

!!!include(snippets/differenceBetweenRawAndCliTip.md)!!!






## Prop: displayError

Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvFormGroup.displayError }}`**

The {{ $frontmatter.title }} `displayError` prop works in conjunction with the `errorText` prop to display the markup containing error text as well as error classes and colors.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="displayError-id"
    :display-error="true"
    error-text="Example error text"
>
    <VvInput id="displayError-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="displayError-id"
        :display-error="true"
        error-text="Example error text"
    >
        <VvInput id="displayError-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>






## Prop: displayHelp

Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvFormGroup.displayHelp }}`**

The {{ $frontmatter.title }} `displayHelp` prop works in conjunction with the `helpText` prop to display the markup containing error text as well as error classes and colors.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="displayHelp-id"
    :display-help="true"
    help-text="Example help text"
>
    <VvInput id="displayHelp-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="displayHelp-id"
        :display-help="true"
        help-text="Example help text"
    >
        <VvInput id="displayHelp-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>






## Prop: displaySuccess

Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvFormGroup.displaySuccess }}`**

The {{ $frontmatter.title }} `displaySuccess` prop works in conjunction with the `successText` prop to display the markup containing error text as well as error classes and colors.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="displaySuccess-id"
    :display-success="true"
    success-text="Example success text"
>
    <VvInput id="displaySuccess-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="displaySuccess-id"
        :display-success="true"
        success-text="Example success text"
    >
        <VvInput id="displaySuccess-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>






## Prop: errorClasses

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvFormGroup.errorClasses }}"`**

The {{ $frontmatter.title }} `errorClasses` prop sets the classes for the component error text's parent element.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="errorClasses-id"
    :display-error="true"
    error-classes="text-2xl"
    error-text="Example error text"
>
    <VvInput id="errorClasses-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="errorClasses-id"
        :display-error="true"
        error-classes="text-2xl"
        error-text="Example error text"
    >
        <VvInput id="errorClasses-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>






## Prop: errorText

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvFormGroup.errorText }}"`**

The {{ $frontmatter.title }} `errorText` prop sets the text string for the component error text.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="errorText-id"
    :display-error="true"
    error-text="This is the error-text"
>
    <VvInput id="errorText-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="errorText-id"
        :display-error="true"
        error-text="This is the error-text"
    >
        <VvInput id="errorClasses-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>










<!-- TODO: add docs for prop errorTextColor -->
<!-- TODO: add docs for prop helpClasses -->
<!-- TODO: add docs for prop helpText -->
<!-- TODO: add docs for prop helpTextColor -->
<!-- TODO: add docs for prop label -->
<!-- TODO: add docs for prop labelFor -->
<!-- TODO: add docs for prop labelClasses -->
<!-- TODO: add docs for prop labelTextColor -->
<!-- TODO: add docs for prop slotParentClasses -->
<!-- TODO: add docs for prop successClasses -->
<!-- TODO: add docs for prop successText -->
<!-- TODO: add docs for prop successTextColor -->
<!-- TODO: add docs for prop wrapperClasses -->











## Slot: #default

The {{ $frontmatter.title }} has a standard `#default` Vue slot to insert child elements/nodes into the component.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="example-id"
>
    <VvInput id="example-id"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup>
        Slot <span class="text-red-500 dark:text-red-300">Content</span>
    </VvFormGroup>
</div>







<DocsPackageVersion/>


