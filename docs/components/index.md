# Components

The VueVentus component system comes with a variety of components that are pre-configured with grouped Tailwind CSS classes controlled through Vue.js props.





## Config Modules

Config Modules keep reusable and customizable groups of non-color orientated Tailwind CSS classes for use in element, component, and layout levels of an application.

::: tip ABOUT CONFIG MODULES
Config Modules are like the Tailwind CSS `@apply` directive, but are instead managed outside of the CSS scope. Config Modules rely on the Tailwind purge process, which allows JavaScript and JSON atomic classes data to be used throughout the JavaScript stack in a fully DRY way.
:::



* [Buttons Config Module](/modules/buttons)
* [Transitions Config Module](/modules/transitions)
* [VvConfig Module](/modules/vv-config)





## Palette Config Modules

Palette Config Modules are subset of config modules specifically meant for atomic color class groupings. They are intented to be used with contextual language to humanize visual color state classes for various states of application elements.

::: tip ABOUT PALETTE MODULES
Palette Config Modules are also like the Tailwind CSS `@apply` directive, but specifically for the color CSS characteristics. Like all Config Modules, this means CSS values data isn't stuck inside CSS files or syntax. So the data can exist outside of the scope of CSS, and enjoy the flexibility of JS/JSON color data throughout the stack.
:::

* [AnchorDefault](/modules/palettes/anchordefault)
* [BorderDefault](/modules/palettes/borderdefault)
* [ButtonOutline](/modules/palettes/buttonoutline)
* [ButtonSolid](/modules/palettes/buttonsolid)
* [GroundConsole](/modules/palettes/groundconsole)
* [GroundDefault](/modules/palettes/grounddefault)
* [GroundMonochromatic](/modules/palettes/groundmonochromatic)
* [GroundPastel](/modules/palettes/groundpastel)
* [TextDefault](/modules/palettes/textdefault)






## Button Components

HTML `<button>` element based components.

* [VvButton](/components/buttons/vv-button)
* [VvColorModeButton](/components/buttons/vv-color-mode-button)







## Element Components

Specific or variable HTML element based components.

* [VvEl](/components/elements/vv-el)

