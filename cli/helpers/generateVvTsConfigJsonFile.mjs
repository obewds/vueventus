// ./cli/helpers/generateVvTsConfigJsonFile.mjs

// TODO: integrate this module into cli build
// TODO: delete original stubs/vite-ssg and stubs/vue-ts vv.tsconfig.json files

export default function (isSSR = false) {

let line = ''

if (isSSR === true) {
    line = `, "vite-plugin-pages/client"`
}

const output = `{
"compilerOptions": {
  "allowJs": true,
    "types": ["node", "vite/client"${line}],
    "paths": {
      "@/": ["/src"]
    }
  }
}

`

return output

}
    