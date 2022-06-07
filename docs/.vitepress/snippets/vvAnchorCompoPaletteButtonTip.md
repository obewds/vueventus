::: tip
When using the VvAnchor Component with the `button` mode enabled (`:button="true"`), you'll often need to also set the component instance's `palette` value (ie: `:palette="solid"` or `:palette="outline"` etc.), otherwise the comonent will look for palette colors from an anchor color palette.

Since there is no "default" named button palette but there is a "default" named anchor palette, not changing a VvAnchor Component instance's palette to a button palette when `button` mode is enabled (`:button="true"`) will result in no output color classes from either an anchor or button palette.
:::