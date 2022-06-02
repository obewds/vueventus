# Components

The VueVentus component system comes with a variety of components that are pre-configured with grouped Tailwind CSS classes controlled through Vue.js props.

<br>



## Config Modules

Config Modules keep reusable and customizable groups of non-color orientated Tailwind CSS classes for use in element, component, and layout levels of an application.

::: tip ABOUT CONFIG MODULES
Config Modules are like the Tailwind CSS `@apply` directive, but are instead managed outside of the CSS scope. Config Modules rely on the Tailwind purge process, which allows JavaScript and JSON atomic classes data to be used throughout the JavaScript stack in a fully DRY way.
:::



* [Buttons Config Module](/configs/buttons)
* [Transitions Config Module](/configs/transitions)
* [VvConfig Module](/configs/vv-config)

<br>



## Palette Config Modules

Palette Config Modules are subset of config modules specifically meant for atomic color class groupings. They are intented to be used with contextual language to humanize visual color state classes for various states of application elements.

::: tip ABOUT PALETTE MODULES
Palette Config Modules are also like the Tailwind CSS `@apply` directive, but specifically for the color CSS characteristics. Like all Config Modules, this means CSS values data isn't stuck inside CSS files or syntax. So the data can exist outside of the scope of CSS, and enjoy the flexibility of JS/JSON color data throughout the stack.
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




## Element Components

Specific or variable HTML element based components.

* [VvEl](/components/elements/vv-el)

<br>
