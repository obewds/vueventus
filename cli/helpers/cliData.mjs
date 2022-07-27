// ./cli/helpers/cliData.mjs

import appVvTsFile from '../generators/appVvTsFile.mjs'
import appColorsJsonFile from '../generators/appColorsJsonFile.mjs'
import helloVueVentusTestJsFile from '../generators/helloVueVentusTestJsFile.mjs'
import helloVueVentusVueFile from '../generators/helloVueVentusVueFile.mjs'
import postcssConfigCjsFile from '../generators/postcssConfigCjsFile.mjs'
import prismThemeVarsCssFile from '../generators/prismThemeVarsCssFile.mjs'
import tailwindCssFile from '../generators/tailwindCssFile.mjs'
import vitestConfigTsFile from '../generators/vitestConfigTsFile.mjs'
import vvAnchorVueFile from '../generators/vvAnchorVueFile.mjs'
import vvButtonVueFile from '../generators/vvButtonVueFile.mjs'
import vvColorModeButtonVueFile from '../generators/vvColorModeButtonVueFile.mjs'
import vvElVueFile from '../generators/vvElVueFile.mjs'
import vvFaVueFile from '../generators/vvFaVueFile.mjs'
import vvInputVueFile from '../generators/vvInputVueFile.mjs'
import vvListItemVueFile from '../generators/vvListItemVueFile.mjs'
import vvPrismVueFile from '../generators/vvPrismVueFile.mjs'
import vvPrismVarsVueFile from '../generators/vvPrismVarsVueFile.mjs'
import vvScrollUpVueFile from '../generators/vvScrollUpVueFile.mjs'
import vvTextareaVueFile from '../generators/vvTextareaVueFile.mjs'

let baseViteTypescriptFiles = {
    appVvTs: {
        name: 'app.vv.ts',
        checked: true,
        path: '/src/',
        isMethod: true,
        isFile: false,
        src: appVvTsFile(),
    },
    appColorsJson: {
        name: 'app.colors.json',
        checked: true,
        path: '/src/',
        isMethod: true,
        isFile: false,
        src: appColorsJsonFile(),
    },
    postCssConfigCjs: {
        name: 'postcss.config.cjs',
        checked: true,
        path: '/',
        isMethod: true,
        isFile: false,
        src: postcssConfigCjsFile(),
    },
    tailwindConfigCjs: {
        name: 'tailwind.config.cjs',
        checked: true,
        path: '/',
        isMethod: true,
        isFile: false,
        src: 'tailwindConfigCjsFile',
    },
    tailwindCss: {
        name: 'tailwind.css',
        checked: true,
        path: '/src/css/',
        isMethod: true,
        isFile: false,
        src: tailwindCssFile(),
    },
}

let baseVvTsCompos = {
    vvAnchorVue: {
        name: 'VvAnchor.vue',
        checked: true,
        path: '/src/components/vv/anchors/',
        isMethod: true,
        isFile: false,
        src: vvAnchorVueFile(),
    },
    vvButtonVue: {
        name: 'VvButton.vue',
        checked: true,
        path: '/src/components/vv/buttons/',
        isMethod: true,
        isFile: false,
        src: vvButtonVueFile(),
    },
    vvColorModeButtonVue: {
        name: 'VvColorModeButton.vue',
        checked: true,
        path: '/src/components/vv/buttons/',
        isMethod: true,
        isFile: false,
        src: vvColorModeButtonVueFile(),
    },
    vvElVue: {
        name: 'VvEl.vue',
        checked: true,
        path: '/src/components/vv/elements/',
        isMethod: true,
        isFile: false,
        src: vvElVueFile(),
    },
    vvInputVue: {
        name: 'VvInput.vue',
        checked: true,
        path: '/src/components/vv/inputs/',
        isMethod: true,
        isFile: false,
        src: vvInputVueFile(),
    },
    vvListItemVue: {
        name: 'VvListItem.vue',
        checked: true,
        path: '/src/components/vv/lists/',
        isMethod: true,
        isFile: false,
        src: vvListItemVueFile(),
    },
    vvTextareaVue: {
        name: 'VvListItem.vue',
        checked: true,
        path: '/src/components/vv/textareas/',
        isMethod: true,
        isFile: false,
        src: vvTextareaVueFile(),
    },
}

let baseViteTypescriptDeps = {
    fontawesome: {
        checked: true,
        name: 'FontAwesome Free',
        install: 'npm install @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome@latest-3 @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons --save-dev',
        packages: ['@fortawesome/fontawesome-svg-core', '@fortawesome/vue-fontawesome@latest-3', '@fortawesome/free-brands-svg-icons', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-regular-svg-icons'],
        files: {
            fontAwesomeTs: {
                name: 'fontAwesome.ts',
                checked: true,
                path: '/src/',
                isMethod: false,
                isFile: true,
                src: 'fontAwesome.ts',
            },
            vvFa: {
                name: 'VvFa.vue',
                checked: true,
                path: '/src/components/vv/elements/',
                isMethod: true,
                isFile: false,
                src: vvFaVueFile(),
            },
        },
    },
    faPro: {
        checked: false,
        name: 'FontAwesome Pro (License Required)',
        install: 'npm install @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome@latest-3 @fortawesome/free-brands-svg-icons @fortawesome/pro-duotone-svg-icons @fortawesome/pro-light-svg-icons @fortawesome/pro-regular-svg-icons @fortawesome/pro-solid-svg-icons @fortawesome/pro-thin-svg-icons --save-dev',
        packages: ['@fortawesome/fontawesome-svg-core', '@fortawesome/vue-fontawesome@latest-3', '@fortawesome/free-brands-svg-icons', '@fortawesome/pro-solid-svg-icons', '@fortawesome/pro-regular-svg-icons', '@fortawesome/pro-duotone-svg-icons', '@fortawesome/pro-light-svg-icons', '@fortawesome/pro-thin-svg-icons'],
        files: {
            fontAwesomeProTs: {
                name: 'fontAwesomePro.ts',
                checked: true,
                path: '/src/',
                isMethod: false,
                isFile: true,
                src: 'fontAwesomePro.ts',
            },
            vvFa: {
                name: 'VvFa.vue',
                checked: true,
                path: '/src/components/vv/elements/',
                isMethod: true,
                isFile: false,
                src: vvFaVueFile(),
            },
        },
    },
    gsap: {
        checked: true,
        name: 'GSAP',
        install: 'npm install gsap --save-dev',
        packages: ['gsap'],
        files: {
            gsapTs: {
                name: 'gsap.ts',
                checked: true,
                path: '/src/',
                isMethod: false,
                isFile: true,
                src: 'gsap.ts',
            },
            vvScrollUp: {
                name: 'VvScrollUp.vue',
                checked: true,
                path: '/src/components/vv/buttons/',
                isMethod: true,
                isFile: false,
                src: vvScrollUpVueFile(),
            },
        },
    },
    headless: {
        checked: true,
        name: 'Headless UI',
        install: 'npm install @headlessui/vue --save-dev',
        packages: ['@headlessui/vue'],
        files: {},
    },
    heroicons: {
        checked: true,
        name: 'Heroicons',
        install: 'npm install @heroicons/vue --save-dev',
        packages: ['@heroicons/vue'],
        files: {},
    },
    prism: {
        checked: true,
        name: 'Prism.js',
        install: 'npm install prismjs vite-plugin-prismjs @types/prismjs prism-theme-vars --save-dev',
        packages: ['prismjs', 'vite-plugin-prismjs', '@types/prismjs', 'prism-theme-vars'],
        files: {
            vvPrism: {
                name: 'VvPrism.vue',
                checked: true,
                path: '/src/components/vv/elements/',
                isMethod: true,
                isFile: false,
                src: vvPrismVueFile(),
            },
            prismThemeVarsCss: {
                name: 'prism-theme-vars.css',
                checked: true,
                path: '/src/css/',
                isMethod: true,
                isFile: false,
                src: prismThemeVarsCssFile(),
            },
            VvPrismVars: {
                name: 'VvPrismVars.vue',
                checked: true,
                path: '/src/components/vv/elements/',
                isMethod: true,
                isFile: false,
                src: vvPrismVarsVueFile(),
            },
        },
    },
    vitest: {
        checked: true,
        name: 'Vitest',
        install: 'npm install vitest @vue/test-utils happy-dom c8 --save-dev',
        packages: ['vitest', '@vue/test-utils', 'happy-dom', 'c8'],
        files: {
            vitestConfigTs: {
                name: 'vitest.config.ts',
                checked: true,
                path: '/',
                isMethod: true,
                isFile: false,
                src: vitestConfigTsFile(),
            },
            helloVueVentusTestJs: {
                name: 'HelloVueVentus.test.js',
                checked: true,
                path: '/tests/components/',
                isMethod: true,
                isFile: false,
                src: helloVueVentusTestJsFile(),
            },
            helloVueVentusVue: {
                name: 'HelloVueVentus.vue',
                checked: true,
                path: '/src/components/',
                isMethod: true,
                isFile: false,
                src: helloVueVentusVueFile(),
            },
        },
    },
}

export default {
    stacks: {
        vueTwViteTs: {
            name: 'Vue 3, Tailwind CSS, Vite & Typescript',
            files: { ...baseViteTypescriptFiles },
            deps: { ...baseViteTypescriptDeps },
            compos: { ...baseVvTsCompos },
        },
        vueTwViteSsgMdTs: {
            name: 'Vite-SSG, Vue 3, Tailwind CSS, Markdown & Typescript',
            files: { ...baseViteTypescriptFiles },
            deps: { ...baseViteTypescriptDeps },
            compos: { ...baseVvTsCompos },
        },
        // vueTwVite: { name: 'Vue 3, Tailwind CSS & Vite', files: {}, deps: {} },
        // vueTwNuxtViteTs: { name: 'Vue 3, Tailwind CSS, Nuxt 3 & Typescript', files: {}, deps: {} },
    },
}
