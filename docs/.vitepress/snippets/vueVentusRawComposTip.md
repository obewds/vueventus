
:::tip
Importing raw VueVentus library components will still apply your `./src/app.vv.ts` settings automatically through the Vue `provide()` and `inject()` pattern. All raw VueVentus library components automatically check for a provided `"vv"` keyed object with a [ConfigVv](/typescript/interfaces#configvv) type interface.
:::
