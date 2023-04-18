// ./cli/generators/tailwindCssFile.mjs

export default function ( useNuxtPaths = false ) {

let commentPath = useNuxtPaths ? './src/css/tailwind.css' : './assets/css/tailwind.css'

const output = `/* ${commentPath} */

@tailwind base;
@tailwind components;
@tailwind utilities;

`

return output
    
}
