// ./cli/generators/postcssConfigCjsFile.mjs

export default function () {

const output = `// ./postcss.config.cjs

module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
}

`

return output
    
}
