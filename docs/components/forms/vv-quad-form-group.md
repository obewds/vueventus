---
title: VvQuadFormGroup Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VvQuadFormGroup, VvInput } from '../../../src/index'
    import { VvConfig } from '../../../src/index'
</script>

<!-- TODO: Add semicolons to all sub-sub heads to > ### Syntax: -->
<!-- TODO: Add semicolons to all sub-sub heads to > ### Result: -->
<!-- TODO: Add semicolons to all sub-sub heads to > ### Downstream Typescript Prop Typing: -->



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides a variety of props and config module based settings to make a variety of element configurations for any element itself or as a parent, child, or sibling element with color contextual relations with other contextual elements.






## Import

To import a {{ $frontmatter.title }} installed by the [vueventus CLI](/guides/vueventus-cli) or [vv-update CLI](/guides/vv-update-cli):

```javascript
// ./src/components/SomeComponent.vue
import VvQuadFormGroup from './vv/forms/VvQuadFormGroup.vue'
```

!!!include(snippets/vueVentusCliComponentsTip.md)!!!

Alternatively, you can install the raw library {{ $frontmatter.title }} with:

```javascript
import { VvQuadFormGroup } from '@obewds/vueventus'
```

!!!include(snippets/vueVentusRawComposTip.md)!!!

!!!include(snippets/differenceBetweenRawAndCliTip.md)!!!








## Prop: bottomSlotClasses

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.bottomSlotClasses }}"`**

The {{ $frontmatter.title }} `bottomSlotClasses` prop controls the parent element classes for whatever bottom slot content is passed through.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="bottomSlotClasses-id"
    bottom-slot-classes="text-2xl"
>
    <VvInput id="bottomSlotClasses-id" placeholder="Example VvInput"/>
    <template v-slot:bottom>
        Bottom Slot
    </template>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="bottomSlotClasses-id"
        bottom-slot-classes="text-xl"
    >
        <VvInput id="bottomSlotClasses-id" placeholder="Example VvInput"/>
        <template v-slot:bottom>
            Bottom Slot
        </template>
    </VvQuadFormGroup>
</div>












## Prop: bottomWrapperClasses

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.bottomWrapperClasses }}"`**

The {{ $frontmatter.title }} `bottomWrapperClasses` prop sets the help/error/success text and bottom slot wrapping element classes.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="bottomWrapperClasses-id"
    :display-help="true"
    help-text="Helpful text..."
    bottom-wrapper-classes="flex justify-between gap-3 border-b"
>
    <VvInput id="bottomWrapperClasses-id" placeholder="Example VvInput"/>
    <template v-slot:bottom>
        Bottom Slot
    </template>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="bottomWrapperClasses-id"
        :display-help="true"
        help-text="Helpful text..."
        bottom-wrapper-classes="flex justify-between gap-3 border-b"
    >
        <VvInput id="bottomWrapperClasses-id" placeholder="Example VvInput"/>
        <template v-slot:bottom>
            Bottom Slot
        </template>
    </VvQuadFormGroup>
</div>








## Prop: debug
Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvQuadFormGroup.debug }}`**

The {{ $frontmatter.title }} `debug` prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through `data-vv-quad-form-group-` prefixed HTML attributes.

### Syntax

```html
<VvQuadFormGroup
    label="Debug Example:"
    label-for="debug-id"
    :debug="true"
>

    <template v-slot:top>
        Top
    </template>

    <VvInput id="debug-id" placeholder="Example VvInput"/>

    <template v-slot:bottom>
        Bottom
    </template>

</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Debug Example:"
        label-for="debug-id"
        :debug="true"
    >
        <template v-slot:top>
            Top
        </template>
        <VvInput id="debug-id" placeholder="Example VvInput"/>
        <template v-slot:bottom>
            Bottom
        </template>
    </VvQuadFormGroup>
</div>









## Prop: displayError

Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvQuadFormGroup.displayError }}`**

The {{ $frontmatter.title }} `displayError` prop works in conjunction with the `errorText` prop to display the markup containing error text as well as error classes and colors.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="displayError-id"
    :display-error="true"
    error-text="Example error text"
>
    <VvInput id="displayError-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="displayError-id"
        :display-error="true"
        error-text="Example error text"
    >
        <VvInput id="displayError-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>






## Prop: displayHelp

Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvQuadFormGroup.displayHelp }}`**

The {{ $frontmatter.title }} `displayHelp` prop works in conjunction with the `helpText` prop to display the markup containing error text as well as error classes and colors.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="displayHelp-id"
    :display-help="true"
    help-text="Example help text"
>
    <VvInput id="displayHelp-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="displayHelp-id"
        :display-help="true"
        help-text="Example help text"
    >
        <VvInput id="displayHelp-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>






## Prop: displaySuccess

Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvQuadFormGroup.displaySuccess }}`**

The {{ $frontmatter.title }} `displaySuccess` prop works in conjunction with the `successText` prop to display the markup containing error text as well as error classes and colors.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="displaySuccess-id"
    :display-success="true"
    success-text="Example success text"
>
    <VvInput id="displaySuccess-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="displaySuccess-id"
        :display-success="true"
        success-text="Example success text"
    >
        <VvInput id="displaySuccess-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>






## Prop: errorClasses

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.errorClasses }}"`**

The {{ $frontmatter.title }} `errorClasses` prop sets the classes for the component error text's parent element.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="errorClasses-id"
    :display-error="true"
    error-classes="text-2xl"
    error-text="Example error text"
>
    <VvInput id="errorClasses-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="errorClasses-id"
        :display-error="true"
        error-classes="text-2xl"
        error-text="Example error text"
    >
        <VvInput id="errorClasses-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>






## Prop: errorText

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.errorText }}"`**

The {{ $frontmatter.title }} `errorText` prop sets the text string for the component error text.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="errorText-id"
    :display-error="true"
    error-text="This is the error-text"
>
    <VvInput id="errorText-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="errorText-id"
        :display-error="true"
        error-text="This is the error-text"
    >
        <VvInput id="errorText-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>







## Prop: errorTextColor
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.errorTextColor }}"`**

The {{ $frontmatter.title }} `errorTextColor` prop sets the error text's underlying VvEl component's text palette color.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="errorTextColor-id"
    :display-error="true"
    error-text-color="secondary"
    error-text="This is secondary color error text!"
>
    <VvInput id="errorTextColor-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="errorTextColor-id"
        :display-error="true"
        error-text-color="secondary"
        error-text="This is secondary color error text!"
    >
        <VvInput id="errorTextColor-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!







## Prop: errorTextPalette
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.errorTextPalette }}"`**

The {{ $frontmatter.title }} `errorTextPalette` prop sets the error text's underlying VvEl component's text palette value.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="errorTextPalette-id"
    :display-error="true"
    error-text-palette="default"
    error-text="Example text"
>
    <VvInput id="errorTextPalette-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="errorTextPalette-id"
        :display-error="true"
        error-text-palette="default"
        error-text="Example text"
    >
        <VvInput id="errorTextPalette-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!







## Prop: errorTextSize
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.errorTextSize }}"`**

The {{ $frontmatter.title }} `errorTextSize` prop sets the error text's underlying VvEl component's text size value.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="errorTextSize-id"
    :display-error="true"
    error-text-size="2xl"
    error-text="Example text"
>
    <VvInput id="errorTextSize-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="errorTextSize-id"
        :display-error="true"
        error-text-size="2xl"
        error-text="Example text"
    >
        <VvInput id="errorTextSize-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!









## Prop: helpClasses

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.helpClasses }}"`**

The {{ $frontmatter.title }} `helpClasses` prop sets the classes for the component help text's parent element.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="helpClasses-id"
    :display-help="true"
    help-classes="text-2xl"
    help-text="Example help text"
>
    <VvInput id="helpClasses-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="helpClasses-id"
        :display-help="true"
        help-classes="text-2xl"
        help-text="Example help text"
    >
        <VvInput id="helpClasses-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>










## Prop: helpText

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.helpText }}"`**

The {{ $frontmatter.title }} `helpText` prop sets the text string for the component help text.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="helpText-id"
    :display-help="true"
    help-text="This is the help-text"
>
    <VvInput id="helpText-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="helpText-id"
        :display-help="true"
        help-text="This is the help-text"
    >
        <VvInput id="helpText-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>












## Prop: helpTextColor
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.helpTextColor }}"`**

The {{ $frontmatter.title }} `helpTextColor` prop sets the help text's underlying VvEl component's text palette color.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="helpTextColor-id"
    :display-help="true"
    help-text-color="secondary"
    help-text="This is secondary color help text!"
>
    <VvInput id="helpTextColor-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="helpTextColor-id"
        :display-help="true"
        help-text-color="secondary"
        help-text="This is secondary color help text!"
    >
        <VvInput id="helpTextColor-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!







## Prop: helpTextPalette
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.helpTextPalette }}"`**

The {{ $frontmatter.title }} `helpTextPalette` prop sets the help text's underlying VvEl component's text palette value.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="helpTextPalette-id"
    :display-help="true"
    help-text-palette="default"
    help-text="Example text"
>
    <VvInput id="helpTextPalette-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="helpTextPalette-id"
        :display-help="true"
        help-text-palette="default"
        help-text="Example text"
    >
        <VvInput id="helpTextPalette-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!







## Prop: helpTextSize
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.helpTextSize }}"`**

The {{ $frontmatter.title }} `helpTextSize` prop sets the help text's underlying VvEl component's text size value.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="helpTextSize-id"
    :display-help="true"
    help-text-size="2xl"
    help-text="Example text"
>
    <VvInput id="helpTextSize-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="helpTextSize-id"
        :display-help="true"
        help-text-size="2xl"
        help-text="Example text"
    >
        <VvInput id="helpTextSize-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!










## Prop: label

Type: **`String`**  
Required: **`true`**

The {{ $frontmatter.title }} `label` prop sets the label text string for the component.

::: danger Required Prop
The `label` prop is a required prop for each instance of the {{ $frontmatter.title }}.
:::

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="label-id"
>
    <VvInput id="label-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="label-id"
    >
        <VvInput id="label-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>










## Prop: labelFor

Type: **`String`**  
Required: **`true`**

The {{ $frontmatter.title }} `labelFor` prop sets the component's returned label `for` attribute value, so you can match that with a slotted VvInput component for example, to properly associate the label to the input for both semantics and usability advantages.

::: danger Required Prop
The `labelFor` prop is a required prop for each instance of the {{ $frontmatter.title }}.
:::

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="labelFor-id"
>
    <VvInput id="labelFor-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="labelFor-id"
    >
        <VvInput id="labelFor-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>










## Prop: labelClasses

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.labelClasses }}"`**

The {{ $frontmatter.title }} `labelClasses` prop sets the component's returned label element's class value.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="labelClasses-id"
    label-classes="uppercase"
>
    <VvInput id="labelClasses-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="labelClasses-id"
        label-classes="uppercase"
    >
        <VvInput id="labelClasses-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>










## Prop: labelTextColor
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.labelTextColor }}"`**

The {{ $frontmatter.title }} `labelTextColor` prop sets the component's returned label's underlying VvEl component's text palette color value.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="labelTextColor-id"
    label-text-color="primary"
>
    <VvInput id="labelTextColor-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="labelTextColor-id"
        label-text-color="primary"
    >
        <VvInput id="labelTextColor-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!







## Prop: labelTextPalette
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.labelTextPalette }}"`**

The {{ $frontmatter.title }} `labelTextPalette` prop sets the label text's underlying VvEl component's text palette value.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="labelTextPalette-id"
    label-text-palette="default"
>
    <VvInput id="labelTextPalette-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="labelTextPalette-id"
        label-text-palette="default"
    >
        <VvInput id="labelTextPalette-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!







## Prop: labelTextSize
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.labelTextSize }}"`**

The {{ $frontmatter.title }} `labelTextSize` prop sets the label text's underlying VvEl component's size value.

### Syntax

```html
<VvQuadFormGroup
    label="Example 2XL Label:"
    label-for="labelTextSize-id"
    label-text-palette="default"
    label-text-size="2xl"
>
    <VvInput id="labelTextSize-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example 2XL Label:"
        label-for="labelTextSize-id"
        label-text-palette="default"
        label-text-size="2xl"
    >
        <VvInput id="labelTextSize-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!














## Prop: slotParentClasses

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.slotParentClasses }}"`**

The {{ $frontmatter.title }} `slotParentClasses` prop sets the component's returned label's underlying VvEl component's text palette color value.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="slotParentClasses-id"
    slot-parent-classes="flex items-center gap-1"
>
    <VvInput id="slotParentClasses-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="slotParentClasses-id"
        slot-parent-classes="flex items-center gap-1"
    >
        <VvInput id="slotParentClasses-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>











## Prop: successClasses

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.successClasses }}"`**

The {{ $frontmatter.title }} `successClasses` prop sets the classes for the component success text's parent element.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="successClasses-id"
    :display-success="true"
    success-classes="text-2xl"
    success-text="Example success text"
>
    <VvInput id="successClasses-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="successClasses-id"
        :display-success="true"
        success-classes="text-2xl"
        success-text="Example success text"
    >
        <VvInput id="successClasses-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>










## Prop: successText

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.successText }}"`**

The {{ $frontmatter.title }} `successText` prop sets the text string for the component success text.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="successText-id"
    :display-success="true"
    success-text="This is the success-text"
>
    <VvInput id="successText-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="successText-id"
        :display-success="true"
        success-text="This is the success-text"
    >
        <VvInput id="successText-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>












## Prop: successTextColor
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.successTextColor }}"`**

The {{ $frontmatter.title }} `successTextColor` prop sets the success text's underlying VvEl component's text palette color.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="successTextColor-id"
    :display-success="true"
    success-text-color="secondary"
    success-text="This is secondary color success text!"
>
    <VvInput id="successTextColor-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="successTextColor-id"
        :display-success="true"
        success-text-color="secondary"
        success-text="This is secondary color success text!"
    >
        <VvInput id="successTextColor-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!







## Prop: successTextPalette
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.successTextPalette }}"`**

The {{ $frontmatter.title }} `successTextPalette` prop sets the success text's underlying VvEl component's text palette value.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="successTextPalette-id"
    :display-success="true"
    success-text-palette="default"
    success-text="Example text"
>
    <VvInput id="successTextPalette-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="successTextPalette-id"
        :display-success="true"
        success-text-palette="default"
        success-text="Example text"
    >
        <VvInput id="successTextPalette-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!







## Prop: successTextSize
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.successTextSize }}"`**

The {{ $frontmatter.title }} `successTextSize` prop sets the success text's underlying VvEl component's text size value.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="successTextSize-id"
    :display-success="true"
    success-text-size="2xl"
    success-text="Example text"
>
    <VvInput id="successTextSize-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="successTextSize-id"
        :display-success="true"
        success-text-size="2xl"
        success-text="Example text"
    >
        <VvInput id="successTextSize-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!












## Prop: textParentClasses

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.textParentClasses }}"`**

The {{ $frontmatter.title }} `textParentClasses` prop sets the classes for the parent element that groups the component's help/success/error text below the default slot and as a sibling for element that wraps any bottom slot content passed in.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="textParentClasses-id"
    :display-help="true"
    help-text="Helpful text..."
    text-parent-classes="w-full border-b"
>
    <VvInput id="textParentClasses-id" placeholder="Example VvInput"/>
    <template #bottom>
        <span class="whitespace-nowrap">Bot Slot</span>
    </template>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="textParentClasses-id"
        :display-help="true"
        help-text="Helpful text..."
        text-parent-classes="w-full border-b"
    >
        <VvInput id="textParentClasses-id" placeholder="Example VvInput"/>
        <template #bottom>
            <span class="whitespace-nowrap">Bot Slot</span>
        </template>
    </VvQuadFormGroup>
</div>












## Prop: topSlotClasses

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.topSlotClasses }}"`**

The {{ $frontmatter.title }} `topSlotClasses` prop controls the parent element classes for whatever top slot content is passed through.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="topSlotClasses-id"
    top-slot-classes="text-2xl"
>
    <template v-slot:top>
        Top Slot
    </template>
    <VvInput id="topSlotClasses-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="bottomSlotClasses-id"
        top-slot-classes="text-2xl"
    >
        <template v-slot:top>
            Top Slot
        </template>
        <VvInput id="bottomSlotClasses-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>









## Prop: topWrapperClasses

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.topWrapperClasses }}"`**

The {{ $frontmatter.title }} `topWrapperClasses` prop sets the label and top slot wrapping element classes.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="topWrapperClasses-id"
    top-wrapper-classes="flex justify-between gap-3 border-t"
>
    <template v-slot:top>
        Top Slot
    </template>
    <VvInput id="topWrapperClasses-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="topWrapperClasses-id"
        top-wrapper-classes="flex justify-between gap-3 border-t"
    >
        <template v-slot:top>
            Top Slot
        </template>
        <VvInput id="topWrapperClasses-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>









## Prop: wrapperClasses

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvQuadFormGroup.wrapperClasses }}"`**

The {{ $frontmatter.title }} `wrapperClasses` prop sets the classes for the component's outermost wrapping/parent element.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="wrapperClasses-id"
    wrapper-classes="w-1/2 grid grid-cols-1 gap-3"
>
    <VvInput id="wrapperClasses-id" placeholder="Example VvInput"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="wrapperClasses-id"
        wrapper-classes="w-1/2 grid grid-cols-1 gap-3"
    >
        <VvInput id="wrapperClasses-id" placeholder="Example VvInput"/>
    </VvQuadFormGroup>
</div>















## Slot: #bottom

The {{ $frontmatter.title }} has a `#bottom` Vue slot to insert child elements/nodes into the component below the default slot and sharing a parent/wrapper element with the component's help/error/success text markup element(s).

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="example-bottom-slot-id"
    :display-help="true"
    help-text="Helpful text..."
>
    <VvInput id="example-bottom-slot-id"/>
    <template v-slot:bottom>
        Bottom Slot
    </template>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="example-bottom-slot-id"
        :display-help="true"
        help-text="Helpful text..."
    >
        <VvInput id="example-bottom-slot-id"/>
        <template v-slot:bottom>
            Bottom Slot
        </template>
    </VvQuadFormGroup>
</div>

















## Slot: #default

The {{ $frontmatter.title }} has a standard `#default` Vue slot to insert child elements/nodes into the component.

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="example-slot-id"
>
    <VvInput id="example-slot-id" placeholder="Via #default slot"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="example-slot-id"
    >
        <VvInput id="example-slot-id" placeholder="Via #default slot"/>
    </VvQuadFormGroup>
</div>














## Slot: #top

The {{ $frontmatter.title }} has a `#top` Vue slot to insert child elements/nodes into the component above the default slot and sharing a parent/wrapper element with the component's label markup element(s).

### Syntax

```html
<VvQuadFormGroup
    label="Example Label:"
    label-for="example-top-slot-id"
>
    <template v-slot:top>
        Top Slot
    </template>
    <VvInput id="example-top-slot-id"/>
</VvQuadFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvQuadFormGroup
        label="Example Label:"
        label-for="example-top-slot-id"
    >
        <template v-slot:top>
            Top Slot
        </template>
        <VvInput id="example-top-slot-id"/>
    </VvQuadFormGroup>
</div>






<DocsPackageVersion/>
