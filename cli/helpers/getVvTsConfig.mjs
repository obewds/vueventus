// ./cli/helpers/getVvTsConfig.mjs

export default function (isSSR = false) {

  let types = ["node", "vite/client"]

  if (isSSR === true) {
    types.push("vite-plugin-pages/client")
  }

  return {
    "compilerOptions": {
      "allowJs": true,
      "types": types,
      "paths": {
        "@/": ["/src"]
      }
    }
  }

}
