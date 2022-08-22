// ./cli/helpers/cliData.mjs

import cliStackNames from './cliStackNames.mjs'

import aMdFile from '../generators/aMdFile.mjs'
import appColorsJsonFile from '../generators/appColorsJsonFile.mjs'
import appVueFile from '../generators/appVueFile.mjs'
import appVueSsgFile from '../generators/appVueSsgFile.mjs'
import appVvTsFile from '../generators/appVvTsFile.mjs'
import bMdFile from '../generators/bMdFile.mjs'
import bVueFile from '../generators/bVueFile.mjs'
import counterVueFile from '../generators/counterVueFile.mjs'
import fontAwesomeProTsFile from '../generators/fontAwesomeProTsFile.mjs'
import fontAwesomeTsFile from '../generators/fontAwesomeTsFile.mjs'
import gsapTsFile from '../generators/gsapTsFile.mjs'
import helloVueVentusTestJsFile from '../generators/helloVueVentusTestJsFile.mjs'
import helloVueVentusVueFile from '../generators/helloVueVentusVueFile.mjs'
import helloWorldVueSsgFile from '../generators/helloWorldVueSsgFile.mjs'
import homeVueFile from '../generators/homeVueFile.mjs'
import indexHtmlFile from '../generators/indexHtmlFile.mjs'
import indexMdFile from '../generators/indexMdFile.mjs'
// TODO: Figure out how to handle main.ts files with the vv-updater utility
import mainTsFile from '../generators/mainTsFile.mjs'
import mainTsFileSsg from '../generators/mainTsFileSsg.mjs'
import mousePosVueFile from '../generators/mousePosVueFile.mjs'
import notFound404VueFile from '../generators/notFound404VueFile.mjs'
import piniaRootTsFile from '../generators/piniaRootTsFile.mjs'
import postcssConfigCjsFile from '../generators/postcssConfigCjsFile.mjs'
import prismThemeVarsCssFile from '../generators/prismThemeVarsCssFile.mjs'
import routesTsFile from '../generators/routesTsFile.mjs'
import tailwindConfigCjsFile from '../generators/tailwindConfigCjsFile.mjs'
import tailwindCssFile from '../generators/tailwindCssFile.mjs'
import tsconfigJsonFile from '../generators/tsconfigJsonFile.mjs'
import tsconfigJsonSsgFile from '../generators/tsconfigJsonSsgFile.mjs'
// TODO: Figure out how to handle vite.config.ts files with the vv-updater utility
import viteConfigPrismTsFile from '../generators/viteConfigPrismTsFile.mjs'
import viteConfigTsFile from '../generators/viteConfigTsFile.mjs'
import viteConfigPrismTsSsgFile from '../generators/viteConfigPrismTsSsgFile.mjs'
import viteConfigTsSsgFile from '../generators/viteConfigTsSsgFile.mjs'
import vitestConfigTsFile from '../generators/vitestConfigTsFile.mjs'
import vvAnchorVueFile from '../generators/vvAnchorVueFile.mjs'
import vvButtonVueFile from '../generators/vvButtonVueFile.mjs'
import vvCheckboxVueFile from '../generators/vvCheckboxVueFile.mjs'
import vvColorModeButtonVueFile from '../generators/vvColorModeButtonVueFile.mjs'
import vvElVueFile from '../generators/vvElVueFile.mjs'
import vvFaVueFile from '../generators/vvFaVueFile.mjs'
import vvInputVueFile from '../generators/vvInputVueFile.mjs'
import vvListItemVueFile from '../generators/vvListItemVueFile.mjs'
import vvPrismVarsVueFile from '../generators/vvPrismVarsVueFile.mjs'
import vvPrismVueFile from '../generators/vvPrismVueFile.mjs'
import vvRadioVueFile from '../generators/vvRadioVueFile.mjs'
import vvRouterLinkVueFile from '../generators/vvRouterLinkVueFile.mjs'
import vvScrollUpVueFile from '../generators/vvScrollUpVueFile.mjs'
import vvTextareaVueFile from '../generators/vvTextareaVueFile.mjs'


let baseViteTypescriptFiles = {
    appVvTs: {
        name: 'app.vv.ts',
        checked: true,
        path: '/src/',
        src: appVvTsFile(),
    },
    appColorsJson: {
        name: 'app.colors.json',
        checked: true,
        path: '/src/',
        src: appColorsJsonFile(),
    },
    indexHtml: {
        name: 'index.html',
        checked: true,
        path: '/',
        src: indexHtmlFile(),
    },
    postCssConfigCjs: {
        name: 'postcss.config.cjs',
        checked: true,
        path: '/',
        src: postcssConfigCjsFile(),
    },
    tailwindCss: {
        name: 'tailwind.css',
        checked: true,
        path: '/src/css/',
        src: tailwindCssFile(),
    },
}

let baseVueTsOnlyFiles = {
    appVue: {
        name: 'App.vue',
        checked: true,
        path: '/src/',
        src: appVueFile(),
    },
    homeVue: {
        name: 'Home.vue',
        checked: true,
        path: '/src/pages/',
        src: homeVueFile(),
    },
    notFound404Vue: {
        name: 'NotFound404.vue',
        checked: true,
        path: '/src/pages/',
        src: notFound404VueFile(),
    },
    routesTs: {
        name: 'routes.ts',
        checked: true,
        path: '/src/router/',
        src: routesTsFile(false),
    },
    tailwindConfigCjs: {
        name: 'tailwind.config.cjs',
        checked: true,
        path: '/',
        src: tailwindConfigCjsFile(false),
    },
    tsconfigJson: {
        name: 'tsconfig.json',
        checked: true,
        path: '/',
        src: tsconfigJsonFile(false),
    },
    vvRouterLinkVue: {
        name: 'VvRouterLink.vue',
        checked: true,
        path: '/src/components/vv/anchors/',
        src: vvRouterLinkVueFile(),
    },
}

let baseVvSsgOnlyTsFiles = {
    appVue: {
        name: 'App.vue',
        checked: true,
        path: '/src/',
        src: appVueSsgFile(),
    },
    aMd: {
        name: 'a.md',
        checked: true,
        path: '/src/pages/',
        src: aMdFile(),
    },
    bMd: {
        name: 'b.md',
        checked: true,
        path: '/src/pages/',
        src: bMdFile(),
    },
    bVue: {
        name: 'b.vue',
        checked: true,
        path: '/src/pages/nested/deep/',
        src: bVueFile(),
    },
    counterVue: {
        name: 'Counter.vue',
        checked: true,
        path: '/src/components/',
        src: counterVueFile(),
    },
    helloWorldVueSsg: {
        name: 'HelloWorld.vue',
        checked: true,
        path: '/src/components/',
        src: helloWorldVueSsgFile(),
    },
    indexMd: {
        name: 'index.md',
        checked: true,
        path: '/src/pages/',
        src: indexMdFile(),
    },
    mousePosVue: {
        name: 'MousePos.vue',
        checked: true,
        path: '/src/components/',
        src: mousePosVueFile(),
    },
    piniaRootTs: {
        name: 'root.ts',
        checked: true,
        path: '/src/store/',
        src: piniaRootTsFile(),
    },
    tailwindConfigCjs: {
        name: 'tailwind.config.cjs',
        checked: true,
        path: '/',
        src: tailwindConfigCjsFile(true),
    },
    tsconfigJson: {
        name: 'tsconfig.json',
        checked: true,
        path: '/',
        src: tsconfigJsonSsgFile(false),
    },
}

let baseVvTsCompos = {
    vvAnchorVue: {
        name: 'VvAnchor.vue',
        checked: true,
        path: '/src/components/vv/anchors/',
        src: vvAnchorVueFile(),
    },
    vvButtonVue: {
        name: 'VvButton.vue',
        checked: true,
        path: '/src/components/vv/buttons/',
        src: vvButtonVueFile(),
    },
    vvCheckboxVue: {
        name: 'VvCheckbox.vue',
        checked: true,
        path: '/src/components/vv/inputs/',
        src: vvCheckboxVueFile(),
    },
    vvColorModeButtonVue: {
        name: 'VvColorModeButton.vue',
        checked: true,
        path: '/src/components/vv/buttons/',
        src: vvColorModeButtonVueFile(),
    },
    vvElVue: {
        name: 'VvEl.vue',
        checked: true,
        path: '/src/components/vv/elements/',
        src: vvElVueFile(),
    },
    vvInputVue: {
        name: 'VvInput.vue',
        checked: true,
        path: '/src/components/vv/inputs/',
        src: vvInputVueFile(),
    },
    vvListItemVue: {
        name: 'VvListItem.vue',
        checked: true,
        path: '/src/components/vv/lists/',
        src: vvListItemVueFile(),
    },
    vvRadioVue: {
        name: 'VvRadio.vue',
        checked: true,
        path: '/src/components/vv/inputs/',
        src: vvRadioVueFile(),
    },
    vvTextareaVue: {
        name: 'VvTextarea.vue',
        checked: true,
        path: '/src/components/vv/textareas/',
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
                src: fontAwesomeTsFile(),
            },
            vvFa: {
                name: 'VvFa.vue',
                checked: true,
                path: '/src/components/vv/elements/',
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
                src: fontAwesomeProTsFile(),
            },
            vvFa: {
                name: 'VvFa.vue',
                checked: true,
                path: '/src/components/vv/elements/',
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
                src: gsapTsFile(),
            },
            vvScrollUp: {
                name: 'VvScrollUp.vue',
                checked: true,
                path: '/src/components/vv/buttons/',
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
                src: vvPrismVueFile(),
            },
            prismThemeVarsCss: {
                name: 'prism-theme-vars.css',
                checked: true,
                path: '/src/css/',
                src: prismThemeVarsCssFile(),
            },
            VvPrismVars: {
                name: 'VvPrismVars.vue',
                checked: true,
                path: '/src/components/vv/elements/',
                src: vvPrismVarsVueFile(),
            },
        },
    },
    vitest: {
        checked: true,
        name: 'Vitest',
        install: 'npm install vitest @vue/test-utils happy-dom @vitest/coverage-c8 --save-dev',
        packages: ['vitest', '@vue/test-utils', 'happy-dom', '@vitest/coverage-c8'],
        files: {
            vitestConfigTs: {
                name: 'vitest.config.ts',
                checked: true,
                path: '/',
                src: vitestConfigTsFile(),
            },
            helloVueVentusTestJs: {
                name: 'HelloVueVentus.test.js',
                checked: true,
                path: '/tests/components/',
                src: helloVueVentusTestJsFile(),
            },
            helloVueVentusVue: {
                name: 'HelloVueVentus.vue',
                checked: true,
                path: '/src/components/',
                src: helloVueVentusVueFile(),
            },
        },
    }
}

export default {
    stacks: {
        vueTwViteTs: {
            name: cliStackNames.vueTwViteTs,
            files: { ...baseViteTypescriptFiles, ...baseVueTsOnlyFiles },
            deps: { ...baseViteTypescriptDeps },
            compos: { ...baseVvTsCompos },
        },
        vueTwViteSsgMdTs: {
            name: cliStackNames.vueTwViteSsgMdTs,
            files: { ...baseViteTypescriptFiles, ...baseVvSsgOnlyTsFiles },
            deps: { ...baseViteTypescriptDeps },
            compos: { ...baseVvTsCompos },
        },
    },
}
