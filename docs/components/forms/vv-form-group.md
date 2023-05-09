---
title: VvFormGroup Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VvFormGroup, VvInput } from '../../../src/index'
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
import VvFormGroup from './vv/forms/VvFormGroup.vue'
```

!!!include(snippets/vueVentusCliComponentsTip.md)!!!

Alternatively, you can install the raw library {{ $frontmatter.title }} with:

```javascript
import { VvFormGroup } from '@obewds/vueventus'
```

!!!include(snippets/vueVentusRawComposTip.md)!!!

!!!include(snippets/differenceBetweenRawAndCliTip.md)!!!








## Prop: debug
Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvFormGroup.debug }}`**

The {{ $frontmatter.title }} `debug` prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through `data-vv-form-group-` prefixed HTML attributes.

### Syntax

```html
<VvFormGroup
    label="Debug Example:"
    label-for="debug-id"
    :debug="true"
>
    <VvInput id="debug-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Debug Example:"
        label-for="debug-id"
        :debug="true"
    >
        <VvInput id="debug-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>






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
        <VvInput id="errorText-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>







## Prop: errorTextColor
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvFormGroup.errorTextColor }}"`**

The {{ $frontmatter.title }} `errorTextColor` prop sets the error text's underlying VvEl component's text palette color.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="errorTextColor-id"
    :display-error="true"
    error-text-color="secondary"
    error-text="This is secondary color error text!"
>
    <VvInput id="errorTextColor-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="errorTextColor-id"
        :display-error="true"
        error-text-color="secondary"
        error-text="This is secondary color error text!"
    >
        <VvInput id="errorTextColor-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!







## Prop: errorTextPalette
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvFormGroup.errorTextPalette }}"`**

The {{ $frontmatter.title }} `errorTextPalette` prop sets the error text's underlying VvEl component's text palette value.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="errorTextPalette-id"
    :display-error="true"
    error-text-palette="default"
    error-text="Example text"
>
    <VvInput id="errorTextPalette-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="errorTextPalette-id"
        :display-error="true"
        error-text-palette="default"
        error-text="Example text"
    >
        <VvInput id="errorTextPalette-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!







## Prop: errorTextSize
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvFormGroup.errorTextSize }}"`**

The {{ $frontmatter.title }} `errorTextSize` prop sets the error text's underlying VvEl component's text size value.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="errorTextSize-id"
    :display-error="true"
    error-text-size="2xl"
    error-text="Example text"
>
    <VvInput id="errorTextSize-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="errorTextSize-id"
        :display-error="true"
        error-text-size="2xl"
        error-text="Example text"
    >
        <VvInput id="errorTextSize-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!









## Prop: helpClasses

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvFormGroup.helpClasses }}"`**

The {{ $frontmatter.title }} `helpClasses` prop sets the classes for the component help text's parent element.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="helpClasses-id"
    :display-help="true"
    help-classes="text-2xl"
    help-text="Example help text"
>
    <VvInput id="helpClasses-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="helpClasses-id"
        :display-help="true"
        help-classes="text-2xl"
        help-text="Example help text"
    >
        <VvInput id="helpClasses-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>










## Prop: helpText

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvFormGroup.helpText }}"`**

The {{ $frontmatter.title }} `helpText` prop sets the text string for the component help text.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="helpText-id"
    :display-help="true"
    help-text="This is the help-text"
>
    <VvInput id="helpText-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="helpText-id"
        :display-help="true"
        help-text="This is the help-text"
    >
        <VvInput id="helpText-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>












## Prop: helpTextColor
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvFormGroup.helpTextColor }}"`**

The {{ $frontmatter.title }} `helpTextColor` prop sets the help text's underlying VvEl component's text palette color.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="helpTextColor-id"
    :display-help="true"
    help-text-color="secondary"
    help-text="This is secondary color help text!"
>
    <VvInput id="helpTextColor-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="helpTextColor-id"
        :display-help="true"
        help-text-color="secondary"
        help-text="This is secondary color help text!"
    >
        <VvInput id="helpTextColor-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!









## Prop: helpTextPalette
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvFormGroup.helpTextPalette }}"`**

The {{ $frontmatter.title }} `helpTextPalette` prop sets the help text's underlying VvEl component's text palette value.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="helpTextPalette-id"
    :display-help="true"
    help-text-palette="default"
    help-text="Example text"
>
    <VvInput id="helpTextPalette-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="helpTextPalette-id"
        :display-help="true"
        help-text-palette="default"
        help-text="Example text"
    >
        <VvInput id="helpTextPalette-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!







## Prop: helpTextSize
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvFormGroup.helpTextSize }}"`**

The {{ $frontmatter.title }} `helpTextSize` prop sets the help text's underlying VvEl component's text size value.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="helpTextSize-id"
    :display-help="true"
    help-text-size="2xl"
    help-text="Example text"
>
    <VvInput id="helpTextSize-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="helpTextSize-id"
        :display-help="true"
        help-text-size="2xl"
        help-text="Example text"
    >
        <VvInput id="helpTextSize-id" placeholder="Example VvInput"/>
    </VvFormGroup>
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
<VvFormGroup
    label="Example Label:"
    label-for="label-id"
>
    <VvInput id="label-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="label-id"
    >
        <VvInput id="label-id" placeholder="Example VvInput"/>
    </VvFormGroup>
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
<VvFormGroup
    label="Example Label:"
    label-for="labelFor-id"
>
    <VvInput id="labelFor-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="labelFor-id"
    >
        <VvInput id="labelFor-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>










## Prop: labelClasses

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvFormGroup.labelClasses }}"`**

The {{ $frontmatter.title }} `labelClasses` prop sets the component's returned label element's class value.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="labelClasses-id"
    label-classes="uppercase"
>
    <VvInput id="labelClasses-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="labelClasses-id"
        label-classes="uppercase"
    >
        <VvInput id="labelClasses-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>










## Prop: labelTextColor
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvFormGroup.labelTextColor }}"`**

The {{ $frontmatter.title }} `labelTextColor` prop sets the component's returned label's underlying VvEl component's text palette color value.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="labelTextColor-id"
    label-text-color="primary"
>
    <VvInput id="labelTextColor-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="labelTextColor-id"
        label-text-color="primary"
    >
        <VvInput id="labelTextColor-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!







## Prop: labelTextPalette
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvFormGroup.labelTextPalette }}"`**

The {{ $frontmatter.title }} `labelTextPalette` prop sets the label text's underlying VvEl component's text palette value.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="labelTextPalette-id"
    label-text-palette="default"
>
    <VvInput id="labelTextPalette-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="labelTextPalette-id"
        label-text-palette="default"
    >
        <VvInput id="labelTextPalette-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!







## Prop: labelTextSize
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvFormGroup.labelTextSize }}"`**

The {{ $frontmatter.title }} `labelTextSize` prop sets the label text's underlying VvEl component's size value.

### Syntax

```html
<VvFormGroup
    label="Example 2XL Label:"
    label-for="labelTextSize-id"
    label-text-palette="default"
    label-text-size="2xl"
>
    <VvInput id="labelTextSize-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example 2XL Label:"
        label-for="labelTextSize-id"
        label-text-palette="default"
        label-text-size="2xl"
    >
        <VvInput id="labelTextSize-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!










## Prop: slotParentClasses

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvFormGroup.slotParentClasses }}"`**

The {{ $frontmatter.title }} `slotParentClasses` prop sets the component's returned label's underlying VvEl component's text palette color value.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="slotParentClasses-id"
    slot-parent-classes="flex items-center gap-1"
>
    <VvInput id="slotParentClasses-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="slotParentClasses-id"
        slot-parent-classes="flex items-center gap-1"
    >
        <VvInput id="slotParentClasses-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>











## Prop: successClasses

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvFormGroup.successClasses }}"`**

The {{ $frontmatter.title }} `successClasses` prop sets the classes for the component success text's parent element.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="successClasses-id"
    :display-success="true"
    success-classes="text-2xl"
    success-text="Example success text"
>
    <VvInput id="successClasses-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="successClasses-id"
        :display-success="true"
        success-classes="text-2xl"
        success-text="Example success text"
    >
        <VvInput id="successClasses-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>










## Prop: successText

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvFormGroup.successText }}"`**

The {{ $frontmatter.title }} `successText` prop sets the text string for the component success text.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="successText-id"
    :display-success="true"
    success-text="This is the success-text"
>
    <VvInput id="successText-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="successText-id"
        :display-success="true"
        success-text="This is the success-text"
    >
        <VvInput id="successText-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>












## Prop: successTextColor
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvFormGroup.successTextColor }}"`**

The {{ $frontmatter.title }} `successTextColor` prop sets the success text's underlying VvEl component's text palette color.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="successTextColor-id"
    :display-success="true"
    success-text-color="secondary"
    success-text="This is secondary color success text!"
>
    <VvInput id="successTextColor-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="successTextColor-id"
        :display-success="true"
        success-text-color="secondary"
        success-text="This is secondary color success text!"
    >
        <VvInput id="successTextColor-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!









## Prop: successTextPalette
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvFormGroup.successTextPalette }}"`**

The {{ $frontmatter.title }} `successTextPalette` prop sets the success text's underlying VvEl component's text palette value.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="successTextPalette-id"
    :display-success="true"
    success-text-palette="default"
    success-text="Example text"
>
    <VvInput id="successTextPalette-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="successTextPalette-id"
        :display-success="true"
        success-text-palette="default"
        success-text="Example text"
    >
        <VvInput id="successTextPalette-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!







## Prop: successTextSize
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvFormGroup.successTextSize }}"`**

The {{ $frontmatter.title }} `successTextSize` prop sets the success text's underlying VvEl component's text size value.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="successTextSize-id"
    :display-success="true"
    success-text-size="2xl"
    success-text="Example text"
>
    <VvInput id="successTextSize-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="successTextSize-id"
        :display-success="true"
        success-text-size="2xl"
        success-text="Example text"
    >
        <VvInput id="successTextSize-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!










## Prop: wrapperClasses

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvFormGroup.wrapperClasses }}"`**

The {{ $frontmatter.title }} `wrapperClasses` prop sets the classes for the component's outermost wrapping/parent element.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="wrapperClasses-id"
    wrapper-classes="w-1/2 grid grid-cols-1 gap-3"
>
    <VvInput id="wrapperClasses-id" placeholder="Example VvInput"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="wrapperClasses-id"
        wrapper-classes="w-1/2 grid grid-cols-1 gap-3"
    >
        <VvInput id="wrapperClasses-id" placeholder="Example VvInput"/>
    </VvFormGroup>
</div>

















## Slot: #default

The {{ $frontmatter.title }} has a standard `#default` Vue slot to insert child elements/nodes into the component.

### Syntax

```html
<VvFormGroup
    label="Example Label:"
    label-for="example-slot-id"
>
    <VvInput id="example-slot-id" placeholder="Via #default slot"/>
</VvFormGroup>
```

### Result

<div class="w-full pt-4">
    <VvFormGroup
        label="Example Label:"
        label-for="example-slot-id"
    >
        <VvInput id="example-slot-id" placeholder="Via #default slot"/>
    </VvFormGroup>
</div>







<DocsPackageVersion/>
