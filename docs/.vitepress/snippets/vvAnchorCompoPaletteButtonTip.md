::: tip
When using the VvAnchor Component with the `button` mode **enabled**, you'll often need to also set the component instance's `palette` value to a button palette (ie: `:palette="solid"` or `:palette="outline"` etc.), otherwise the component will look for palette colors from an anchor color palette.

Since there is no "default" named button palette but there is a "default" named anchor palette, not changing a VvAnchor Component instance's palette to a button palette when `button` mode is **enabled** will result in no output color classes from either an anchor or button palette.
:::