// ./cli/helpers/cliData.mjs

let baseViteTypescriptFiles = {
    appVvTs: {
        name: 'app.vv.ts',
        checked: true,
        path: '/src/',
    },
    appColorsJson: {
        name: 'app.colors.json',
        checked: true,
        path: '/src/',
    },
    tailwindConfigCjs: {
        name: 'tailwind.config.cjs',
        checked: true,
        path: '/',
    },
    tailwindCss: {
        name: 'tailwind.css',
        checked: true,
        path: '/src/css/',
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
            },
            vvFa: {
                name: 'VvFa.vue',
                checked: true,
                path: '/src/components/vv/elements/',
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
            },
            vvFa: {
                name: 'VvFa.vue',
                checked: true,
                path: '/src/components/vv/elements/',
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
            },
            vvScrollUp: {
                name: 'VvScrollUp.vue',
                checked: true,
                path: '/src/components/vv/buttons/',
            },
        },
    },
    headless: {
        checked: true,
        name: 'Headless UI',
        install: 'npm install @headlessui/vue --save-dev',
        packages: ['@headlessui/vue'],
    },
    heroicons: {
        checked: true,
        name: 'Heroicons',
        install: 'npm install @heroicons/vue --save-dev',
        packages: ['@heroicons/vue'],
    },
    prism: {
        checked: true,
        name: 'Prism.js',
        install: 'npm install prismjs vite-plugin-prismjs @types/prismjs --save-dev',
        packages: ['prismjs', 'vite-plugin-prismjs', '@types/prismjs'],
        files: {
            vvPrism: {
                name: 'VvPrism.vue',
                checked: true,
                path: '/src/components/vv/elements/',
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
            },
            helloVueVentusTestJs: {
                name: 'HelloVueVentus.test.js',
                checked: true,
                path: '/tests/components/',
            },
            helloVueVentusVue: {
                name: 'HelloVueVentus.vue',
                checked: true,
                path: '/src/components/',
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
        },
        vueTwViteSsgMdTs: {
            name: 'Vite-SSG, Vue 3, Tailwind CSS, Markdown & Typescript',
            files: { ...baseViteTypescriptFiles },
            deps: { ...baseViteTypescriptDeps },
        },
        // vueTwVite: { name: 'Vue 3, Tailwind CSS & Vite', files: {}, deps: {} },
        // vueTwNuxtViteTs: { name: 'Vue 3, Tailwind CSS, Nuxt 3 & Typescript', files: {}, deps: {} },
    },
}
