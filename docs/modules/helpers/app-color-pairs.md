---
title: appColorPairs() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module provides a helper function that converts an imported VueVentus [app.colors.json](/modules/data/app-colors-json) data file object (the 1st argument) into an object that represents each color value in the file as a two color pair. 

The pair of color values are derived by processing each original app.color.json value. The original color value becomes a `backgroundColor` property and is paired with another property named `color`, which is determined by the darkness/lightness of the `backgroundColor` value, and is set as the most contrasting light/dark overlaid text color with good accessibility-friendly contrast automatically.

The {{ $frontmatter.title }} has two optional arguments. The first optional argument (the 2nd argument) lets you set the `color` value of any `backgroundColor` values that measures as **dark** colors. The second optional argument (the 3rd argument) lets you set the `color` value for any `backgroundColor` values that measure as **light** colors.

:::tip
A powerful and stylish convention when using this function is to use alpha channel color codes (like RGBa) with a slight opacity (an `0.75` RGBa alpha value is nice without risking too much wash out for visually-challenged users).
:::






## Import

To import the {{ $frontmatter.title }}:

```javascript
import { appColorPairs } from '@obewds/vueventus'
```





## Argument

Returns: **`<AppColorPairs> Object`** ([AppColorPairs Interface](/typescript/interfaces#appcolorpairs))  

| Args            | Type     | Status   | Description |
|-----------------|:--------:|:--------:|-------------|
| appColorsJson   | `AppColors` ([AppColors Interface](/typescript/interfaces#appcolors)) | Required | An imported data object from an `app.colors.json` file. |
| darkGroundText  | `String`    | Optional | The output property `color` value for `app.colors.json` colors that measure as a **dark** color |
| lightGroundText | `String`    | Optional | The output property `color` value for `app.colors.json` colors that measure as a **light** color |










## Use Examples

```javascript
import { appColorPairs } from '@obewds/vueventus'
import appColorsData from '../app.colors.json' // usually in ./src/app.colors.json


const appColors = appColorPairs(appColorsData)

console.log(appColors.black)
// returns (type GroundTextColors): { backgroundColor: "#1a1a1a", color: "#fff" }

console.log(appColors.white)
// returns (type GroundTextColors): { backgroundColor: "#1a1a1a", color: "#000" }

console.log(appColors.red["50"])
// returns (type GroundTextColors): { backgroundColor: "#f4e7e5", color: "#fff" }

console.log(appColors.red["900"])
// returns (type GroundTextColors): { backgroundColor: "#472c27", color: "#000" }


const appColorsTwo = appColorPairs(appColorsData, '#111', '#f8f8f8')

console.log(appColorsTwo.black)
// returns (type GroundTextColors): { backgroundColor: "#1a1a1a", color: "#f8f8f8" }

console.log(appColorsTwo.white)
// returns (type GroundTextColors): { backgroundColor: "#f8f8f8", color: "#111" }

console.log(appColorsTwo.red["50"])
// returns (type GroundTextColors): { backgroundColor: "#f4e7e5", color: "#f8f8f8" }

console.log(appColorsTwo.red["900"])
// returns (type GroundTextColors): { backgroundColor: "#472c27", color: "#111" }


const appColorsOpacity = appColorPairs(appColorsData, 'rgba(255, 255, 255, .75)', 'rgba(0, 0, 0, .75)')

console.log(appColors.black)
// returns (type GroundTextColors): { backgroundColor: "#1a1a1a", color: "rgba(255, 255, 255, .75)" }

console.log(appColors.white)
// returns (type GroundTextColors): { backgroundColor: "#f8f8f8", color: "rgba(0, 0, 0, .75)" }

console.log(appColorsTwo.red["50"])
// returns (type GroundTextColors): { backgroundColor: "#f4e7e5", color: "rgba(255, 255, 255, .75)" }

console.log(appColorsTwo.red["900"])
// returns (type GroundTextColors): { backgroundColor: "#472c27", color: "rgba(0, 0, 0, .75)" }
```









## Module Code


<<< @/../src/helpers/appColorPairs.ts





<DocsPackageVersion/>
