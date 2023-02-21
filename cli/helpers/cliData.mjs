// ./cli/helpers/cliData.mjs

import cliStackNames from './cliStackNames.mjs'

import aMdFile from '../generators/aMdFile.mjs'
import appColorsJsonFile from '../generators/appColorsJsonFile.mjs'
import appVueFile from '../generators/appVueFile.mjs'
import appVueSsgFile from '../generators/appVueSsgFile.mjs'
import appVueNuxtFile from '../generators/appVueNuxtFile.mjs'
import appVvTsFile from '../generators/appVvTsFile.mjs'
import bMdFile from '../generators/bMdFile.mjs'
import bVueFile from '../generators/bVueFile.mjs'
import catchAll404SsgFile from '../generators/catchAll404SsgFile.mjs'
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
import pagesIndexNuxtFile from '../generators/pagesIndexNuxtFile.mjs'

import piniaRootTsFile from '../generators/piniaRootTsFile.mjs'
import postcssConfigCjsFile from '../generators/postcssConfigCjsFile.mjs'
import prismThemeVarsCssFile from '../generators/prismThemeVarsCssFile.mjs'
import routesTsFile from '../generators/routesTsFile.mjs'
import tailwindConfigCjsFile from '../generators/tailwindConfigCjsFile.mjs'
import tailwindConfigTsNuxtFile from '../generators/tailwindConfigTsNuxtFile.mjs'
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
import vvFaVueSsgFile from '../generators/vvFaVueSsgFile.mjs'
import vvFormGroupVueFile from '../generators/vvFormGroupVueFile.mjs'
import vvInputVueFile from '../generators/vvInputVueFile.mjs'
import vvListVueFile from '../generators/vvListVueFile.mjs'
import vvListboxVueFile from '../generators/vvListboxVueFile.mjs'
import vvListItemVueFile from '../generators/vvListItemVueFile.mjs'
import vvPrismVarsVueFile from '../generators/vvPrismVarsVueFile.mjs'
import vvPrismVueFile from '../generators/vvPrismVueFile.mjs'
import vvQuadFormGroupVueFile from '../generators/vvQuadFormGroupVueFile.mjs'
import vvRadioVueFile from '../generators/vvRadioVueFile.mjs'
import vvRouterLinkVueFile from '../generators/vvRouterLinkVueFile.mjs'
import vvScrollUpVueFile from '../generators/vvScrollUpVueFile.mjs'
import vvSelectVueFile from '../generators/vvSelectVueFile.mjs'
import vvTextareaVueFile from '../generators/vvTextareaVueFile.mjs'

import bTestJsFile from '../generators/bTestJsFile.mjs'
import homeTestJsFile from '../generators/homeTestJsFile.mjs'
import notFound404TestJsFile from '../generators/notFound404TestJsFile.mjs'
import vvAnchorTestJsFile from '../generators/vvAnchorTestJsFile.mjs'
import vvButtonTestJsFile from '../generators/vvButtonTestJsFile.mjs'
import vvCheckboxTestJsFile from '../generators/vvCheckboxTestJsFile.mjs'
import vvColorModeButtonTestJsFile from '../generators/vvColorModeButtonTestJsFile.mjs'
import vvElTestJsFile from '../generators/vvElTestJsFile.mjs'
import vvFaTestJsFile from '../generators/vvFaTestJsFile.mjs'
import vvFaTestJsFilePro from '../generators/vvFaTestJsFilePro.mjs'
import vvFormGroupTestJsFile from '../generators/vvFormGroupTestJsFile.mjs'
import vvInputTestJsFile from '../generators/vvInputTestJsFile.mjs'
import vvListTestJsFile from '../generators/vvListTestJsFile.mjs'
import vvListboxTestJsFile from '../generators/vvListboxTestJsFile.mjs'
import vvListItemTestJsFile from '../generators/vvListItemTestJsFile.mjs'
import vvPrismTestJsFile from '../generators/vvPrismTestJsFile.mjs'
import vvPrismVarsTestJsFile from '../generators/vvPrismVarsTestJsFile.mjs'
import vvQuadFormGroupTestJsFile from '../generators/vvQuadFormGroupTestJsFile.mjs'
import vvRadioTestJsFile from '../generators/vvRadioTestJsFile.mjs'
import vvRouterLinkTestJsFile from '../generators/vvRouterLinkTestJsFile.mjs'
import vvScrollUpTestJsFile from '../generators/vvScrollUpTestJsFile.mjs'
import vvSelectTestJsFile from '../generators/vvSelectTestJsFile.mjs'
import vvTextareaTestJsFile from '../generators/vvTextareaTestJsFile.mjs'

//
// Base files for each stack
//

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
    catchAll404: {
        name: '[...all].vue',
        checked: true,
        path: '/src/pages/',
        src: catchAll404SsgFile(),
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

let baseNuxtFiles = {
    appVvTs: {
        name: 'app.vv.ts',
        checked: true,
        path: '/', // nuxt needs this file in root
        src: appVvTsFile(true), // pass true argument for nuxt version of file
    },
    appColorsJson: {
        name: 'app.colors.json',
        checked: true,
        path: '/', // nuxt needs this file in root
        src: appColorsJsonFile(),
    },
    appVue: {
        name: 'app.vue',
        checked: true,
        path: '/',
        src: appVueNuxtFile(),
    },
    pagesIndex: {
        name: 'index.vue',
        checked: true,
        path: '/pages/',
        src: pagesIndexNuxtFile(),
    },
    tailwindConfigTs: {
        name: 'tailwind.config.ts',
        checked: true,
        path: '/',
        src: tailwindConfigTsNuxtFile(),
    },
}


//
// Component files for each stack
//

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
    vvFormGroupVue: {
        name: 'VvFormGroup.vue',
        checked: true,
        path: '/src/components/vv/forms/',
        src: vvFormGroupVueFile(),
    },
    vvInputVue: {
        name: 'VvInput.vue',
        checked: true,
        path: '/src/components/vv/inputs/',
        src: vvInputVueFile(),
    },
    vvListVue: {
        name: 'VvList.vue',
        checked: true,
        path: '/src/components/vv/lists/',
        src: vvListVueFile(),
    },
    vvListboxVue: {
        name: 'VvListbox.vue',
        checked: true,
        path: '/src/components/vv/selects/',
        src: vvListboxVueFile(),
    },
    vvListItemVue: {
        name: 'VvListItem.vue',
        checked: true,
        path: '/src/components/vv/lists/',
        src: vvListItemVueFile(),
    },
    vvQuadFormGroupVue: {
        name: 'VvQuadFormGroup.vue',
        checked: true,
        path: '/src/components/vv/forms/',
        src: vvQuadFormGroupVueFile(),
    },
    vvRadioVue: {
        name: 'VvRadio.vue',
        checked: true,
        path: '/src/components/vv/inputs/',
        src: vvRadioVueFile(),
    },
    vvRouterLinkVue: {
        name: 'VvRouterLink.vue',
        checked: true,
        path: '/src/components/vv/anchors/',
        src: vvRouterLinkVueFile(),
    },
    vvSelectVue: {
        name: 'VvSelect.vue',
        checked: true,
        path: '/src/components/vv/selects/',
        src: vvSelectVueFile(),
    },
    vvTextareaVue: {
        name: 'VvTextarea.vue',
        checked: true,
        path: '/src/components/vv/textareas/',
        src: vvTextareaVueFile(),
    },
}

let baseVvTsNuxtCompos = {
    vvAnchorVue: {
        name: 'Anchor.vue',
        checked: true,
        path: '/components/Vv/',
        src: vvAnchorVueFile(true),
    },
    vvButtonVue: {
        name: 'Button.vue',
        checked: true,
        path: '/components/Vv/',
        src: vvButtonVueFile(true),
    },
    vvCheckboxVue: {
        name: 'Checkbox.vue',
        checked: true,
        path: '/components/Vv/',
        src: vvCheckboxVueFile(true),
    },
    vvColorModeButtonVue: {
        name: 'ColorModeButton.vue',
        checked: true,
        path: '/components/Vv/',
        src: vvColorModeButtonVueFile(true),
    },
    vvElVue: {
        name: 'El.vue',
        checked: true,
        path: '/components/Vv/',
        src: vvElVueFile(true),
    },
    vvFormGroupVue: {
        name: 'FormGroup.vue',
        checked: true,
        path: '/components/Vv/',
        src: vvFormGroupVueFile(true),
    },
    vvInputVue: {
        name: 'Input.vue',
        checked: true,
        path: '/components/Vv/',
        src: vvInputVueFile(true),
    },
    vvListVue: {
        name: 'List.vue',
        checked: true,
        path: '/components/Vv/',
        src: vvListVueFile(true),
    },
    vvListboxVue: {
        name: 'Listbox.vue',
        checked: true,
        path: '/components/Vv/',
        src: vvListboxVueFile(true),
    },
    vvListItemVue: {
        name: 'ListItem.vue',
        checked: true,
        path: '/components/Vv/',
        src: vvListItemVueFile(true),
    },
    vvQuadFormGroupVue: {
        name: 'QuadFormGroup.vue',
        checked: true,
        path: '/components/Vv/',
        src: vvQuadFormGroupVueFile(true),
    },
    vvRadioVue: {
        name: 'Radio.vue',
        checked: true,
        path: '/components/Vv/',
        src: vvRadioVueFile(true),
    },
    vvSelectVue: {
        name: 'Select.vue',
        checked: true,
        path: '/components/Vv/',
        src: vvSelectVueFile(true),
    },
    vvTextareaVue: {
        name: 'Textarea.vue',
        checked: true,
        path: '/components/Vv/',
        src: vvTextareaVueFile(true),
    },
}
// vvRouterLinkVue: baseVvTsCompos.vvRouterLinkVue,
// vvSelectVue: baseVvTsCompos.vvSelectVue,
// vvTextareaVue: baseVvTsCompos.vvTextareaVue,



//
// Dependency files and components for each stack
//

let faFreeDep = {
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
        vvFaTestJs: {
            name: 'VvFa.test.js',
            checked: true,
            path: '/tests/components/vv/elements/',
            src: vvFaTestJsFile(),
        },
    },
}

let faFreeDepSsg = faFreeDep
faFreeDepSsg.files.vvFa = {
    name: 'VvFa.vue',
    checked: true,
    path: '/src/components/vv/elements/',
    src: vvFaVueSsgFile(),
}

let faProDep = {
    checked: false,
    name: 'FontAwesome Pro (License Required)',
    install: 'npm install @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome@latest-3 @fortawesome/free-brands-svg-icons @fortawesome/pro-duotone-svg-icons @fortawesome/pro-light-svg-icons @fortawesome/pro-regular-svg-icons @fortawesome/pro-solid-svg-icons @fortawesome/pro-thin-svg-icons @fortawesome/sharp-solid-svg-icons --save-dev',
    packages: ['@fortawesome/fontawesome-svg-core', '@fortawesome/vue-fontawesome@latest-3', '@fortawesome/free-brands-svg-icons', '@fortawesome/pro-solid-svg-icons', '@fortawesome/pro-regular-svg-icons', '@fortawesome/pro-duotone-svg-icons', '@fortawesome/pro-light-svg-icons', '@fortawesome/pro-thin-svg-icons', '@fortawesome/sharp-solid-svg-icons'],
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
        vvFaTestJs: {
            name: 'VvFa.test.js',
            checked: true,
            path: '/tests/components/vv/elements/',
            src: vvFaTestJsFilePro(),
        },
    },
}

let faProDepSsg = faProDep
faProDepSsg.files.vvFa = {
    name: 'VvFa.vue',
    checked: true,
    path: '/src/components/vv/elements/',
    src: vvFaVueSsgFile(),
}

let vitestBase = {
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
        vvAnchorTestJs: {
            name: 'VvAnchor.test.js',
            checked: true,
            path: '/tests/components/vv/anchors/',
            src: vvAnchorTestJsFile(),
        },
        vvButtonTestJs: {
            name: 'VvButton.test.js',
            checked: true,
            path: '/tests/components/vv/buttons/',
            src: vvButtonTestJsFile(),
        },
        vvCheckboxTestJs: {
            name: 'VvCheckbox.test.js',
            checked: true,
            path: '/tests/components/vv/inputs/',
            src: vvCheckboxTestJsFile(),
        },
        vvColorModeButtonTestJs: {
            name: 'VvColorModeButton.test.js',
            checked: true,
            path: '/tests/components/vv/buttons/',
            src: vvColorModeButtonTestJsFile(),
        },
        vvElTestJs: {
            name: 'VvEl.test.js',
            checked: true,
            path: '/tests/components/vv/elements/',
            src: vvElTestJsFile(),
        },
        vvFormGroupTestJs: {
            name: 'VvFormGroup.test.js',
            checked: true,
            path: '/tests/components/vv/forms/',
            src: vvFormGroupTestJsFile(),
        },
        vvInputTestJs: {
            name: 'VvInput.test.js',
            checked: true,
            path: '/tests/components/vv/inputs/',
            src: vvInputTestJsFile(),
        },
        vvListTestJs: {
            name: 'VvList.test.js',
            checked: true,
            path: '/tests/components/vv/lists/',
            src: vvListTestJsFile(),
        },
        vvListboxTestJs: {
            name: 'VvListbox.test.js',
            checked: true,
            path: '/tests/components/vv/selects/',
            src: vvListboxTestJsFile(),
        },
        vvListItemTestJs: {
            name: 'VvListItem.test.js',
            checked: true,
            path: '/tests/components/vv/lists/',
            src: vvListItemTestJsFile(),
        },
        vvQuadFormGroupTestJs: {
            name: 'VvQuadFormGroup.test.js',
            checked: true,
            path: '/tests/components/vv/forms/',
            src: vvQuadFormGroupTestJsFile(),
        },
        vvRadioTestJs: {
            name: 'VvRadio.test.js',
            checked: true,
            path: '/tests/components/vv/inputs/',
            src: vvRadioTestJsFile(),
        },
        vvRouterLinkTestJs: {
            name: 'VvRouterLink.test.js',
            checked: true,
            path: '/tests/components/vv/anchors/',
            src: vvRouterLinkTestJsFile(),
        },
        vvScrollUpTestJs: {
            name: 'VvScrollUp.test.js',
            checked: true,
            path: '/tests/components/vv/buttons/',
            src: vvScrollUpTestJsFile(),
        },
        vvSelectTestJs: {
            name: 'VvSelect.test.js',
            checked: true,
            path: '/tests/components/vv/selects/',
            src: vvSelectTestJsFile(),
        },
        vvTextareaTestJs: {
            name: 'VvTextarea.test.js',
            checked: true,
            path: '/tests/components/vv/textareas/',
            src: vvTextareaTestJsFile(),
        },
    },
}

let vitestDep = vitestBase

vitestDep.files.homeTestJs = {
    name: 'Home.test.js',
    checked: true,
    path: '/tests/pages/',
    src: homeTestJsFile(),
}

vitestDep.files.notFound404TestJs = {
    name: 'NotFound404.test.js',
    checked: true,
    path: '/tests/pages/',
    src: notFound404TestJsFile(),
}

let vitestDepSsg = vitestBase

vitestDepSsg.files.bTestJs = {
    name: 'b.test.js',
    checked: true,
    path: '/tests/pages/',
    src: bTestJsFile(),
}

let baseViteTypescriptDeps = {
    fontawesome: {},
    faPro: {},
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
        install: 'npm install @headlessui/vue @headlessui/tailwindcss --save-dev',
        packages: ['@headlessui/vue', '@headlessui/tailwindcss'],
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
            vvPrismVars: {
                name: 'VvPrismVars.vue',
                checked: true,
                path: '/src/components/vv/elements/',
                src: vvPrismVarsVueFile(),
            },
            vvPrismTestJs: {
                name: 'VvPrism.test.js',
                checked: true,
                path: '/tests/components/vv/elements/',
                src: vvPrismTestJsFile(),
            },
            vvPrismVarsTestJs: {
                name: 'VvPrismVars.test.js',
                checked: true,
                path: '/tests/components/vv/elements/',
                src: vvPrismVarsTestJsFile(),
            },
        },
    },
    vitest: {}
}

let vueTwDeps = baseViteTypescriptDeps
    vueTwDeps.fontawesome = faFreeDep
    vueTwDeps.faPro = faProDep
    vueTwDeps.vitest = vitestDep


let ssgDeps = baseViteTypescriptDeps
    ssgDeps.fontawesome = faFreeDepSsg
    ssgDeps.faPro = faProDepSsg
    ssgDeps.vitest = vitestDepSsg

export default {
    stacks: {
        vueTwViteTs: {
            name: cliStackNames.vueTwViteTs,
            files: { ...baseViteTypescriptFiles, ...baseVueTsOnlyFiles },
            deps: { ...vueTwDeps },
            compos: { ...baseVvTsCompos },
        },
        vueTwViteSsgMdTs: {
            name: cliStackNames.vueTwViteSsgMdTs,
            files: { ...baseViteTypescriptFiles, ...baseVvSsgOnlyTsFiles },
            deps: { ...ssgDeps },
            compos: { ...baseVvTsCompos },
        },
        vueTwNuxt3: {
            name: cliStackNames.vueTwNuxt3,
            files: { ...baseNuxtFiles },
            deps: {},
            compos: { ...baseVvTsNuxtCompos },
        },
    },
}
