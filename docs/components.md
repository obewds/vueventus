# Components

The VueVentus component system comes with a variety of components that are pre-configured with grouped Tailwind CSS classes controlled through Vue.js props.

<br>



## Config Modules

Config Modules keep reusable and customizable groups of non-color orientated Tailwind CSS classes for use in element, component, and layout levels of an application.

::: tip ABOUT CONFIG MODULES
In a sense, Config Modules are like the Tailwind CSS `@apply` directive, but are instead managed outside of CSS entirely, and rely on the Tailwind purge process, allowing JavaScript and JSON atomic classes data to be used throughout the JavaScript stack in a fully DRY way.
:::



* [Buttons Config Module](/configs/buttons)
* [Transitions Config Module](/configs/transitions)

<br>



## Palette Config Modules

Palette Config Modules are subset of config modules specifically meant for atomic color class groupings. They are then intented to be used with contextual language meant to humanize visual color state classes for various aspects in an application.

::: tip ABOUT PALETTE MODULES
In a sense, Palette Config Modules are like the Tailwind CSS `@apply` directive specifically for the color characteristics CSS provides HTML elements, but outside of CSS to enjoy the JS/JSON perks of Config Modules in a JavaScript stack.
:::

* [AnchorDefault](/configs/palettes/anchordefault)
* [BorderDefault](/configs/palettes/borderdefault)
* [ButtonOutline](/configs/palettes/buttonoutline)
* [ButtonSolid](/configs/palettes/buttonsolid)
* [GroundConsole](/configs/palettes/groundconsole)
* [GroundDefault](/configs/palettes/grounddefault)
* [GroundMonochromatic](/configs/palettes/groundmonochromatic)
* [GroundPastel](/configs/palettes/groundpastel)
* [TextDefault](/configs/palettes/textdefault)

<br>




## Button Components

HTML `<button>` element based components.

* [VvButton](/components/buttons/vv-button)
* [VvColorModeButton](/components/buttons/vv-color-mode-button)

<br>
