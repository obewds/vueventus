import{f as s,o as t,c as o,a as e,t as n,u as i}from"../app.7082c675.js";const r="@obewds/vueventus",a="An aesthetics focused design system component library for Vue.js, Tailwind CSS, and Typescript projects",c="0.14.0",d="@oberocks",l="https://obewds.github.io/vueventus/",u={dev:"vite",build:"vue-tsc --noEmit && vite build","ts:build":"npx rimraf dist && npm run build && vue-tsc --emitDeclarationOnly",preview:"vite preview",test:"vitest --dom",coverage:"vitest run --dom --coverage","docs:dev":"vitepress dev docs --open","docs:build":"vitepress build docs","docs:serve":"vitepress serve docs",changelog:"auto-changelog --package --unreleased --backfill-limit 20",tag:`PACKAGE_VERSION=$(cat package.json | grep \\"version\\" | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[[:space:]]') && git tag v$PACKAGE_VERSION && git push --tags`,bump:"npm run tag && npm run changelog",generate:"npx rimraf dist && npx rimraf docs/.vitepress/dist && npm run build && vue-tsc --emitDeclarationOnly && npm run docs:build","pkg:org":"npm config set scope obewds","pkg:login":"npm adduser","pkg:publish":"npm publish --access public","publish:package":"npm run generate && npm run pkg:org && npm run pkg:login && npm run pkg:publish && npm run bump"},p={"@tailwindcss/aspect-ratio":"^0.4.0","@tailwindcss/forms":"^0.5.2","@tailwindcss/line-clamp":"^0.4.0","@tailwindcss/typography":"^0.5.2",deepmerge:"^4.2.2",tailwindcss:"^3.1.2",vue:"^3.2.37"},m={"@vitejs/plugin-vue":"^2.3.3","@vue/test-utils":"^2.0.0","auto-changelog":"^2.4.0",autoprefixer:"^10.4.7",c8:"^7.11.3","happy-dom":"^5.2.0","markdown-it-include":"^2.0.0",postcss:"^8.4.14",rimraf:"^3.0.2",typescript:"^4.7.4",vite:"^2.9.12",vitepress:"^1.0.0-alpha.2",vitest:"^0.15.1","vue-router":"^4.0.16","vue-tsc":"^0.37.9"},g=!1,v="./dist/vueventus.umd.js",h="./dist/vueventus.es.js",f="./dist/vueventus.iife.js",j=["dist","src/components","src/configs","src/data","src/helpers","src/validators"],V="./dist/index.d.ts",y={".":{import:"./dist/vueventus.es.js",require:"./dist/vueventus.umd.js"},"./VvAnchor":"./src/components/anchors/VvAnchor.vue","./VvButton":"./src/components/buttons/VvButton.vue","./VvColorModeButton":"./src/components/buttons/VvColorModeButton.vue","./VvEl":"./src/components/elements/VvEl.vue","./VueVentusLogoText":"./src/components/logos/VueVentusLogoText.vue","./VueVentusSpinningMark":"./src/components/logos/VueVentusSpinningMark.vue","./Anchors":"./src/configs/Anchors.js","./Buttons":"./src/configs/Buttons.js","./Inputs":"./src/configs/Inputs.js","./Text":"./src/configs/Text.js","./Transitions":"./src/configs/Transitions.js","./VvConfig":"./src/configs/VvConfig.js","./AnchorDefault":"./src/configs/palettes/AnchorDefault.js","./BorderDefault":"./src/configs/palettes/BorderDefault.js","./ButtonOutline":"./src/configs/palettes/ButtonOutline.js","./ButtonSolid":"./src/configs/palettes/ButtonSolid.js","./GroundConsole":"./src/configs/palettes/GroundConsole.js","./GroundDefault":"./src/configs/palettes/GroundDefault.js","./GroundMonochromatic":"./src/configs/palettes/GroundMonochromatic.js","./GroundPastel":"./src/configs/palettes/GroundPastel.js","./InputValidation":"./src/configs/palettes/InputValidation.js","./TextDefault":"./src/configs/palettes/TextDefault.js","./appColorData":"./src/data/app.color.data.json","./extendAnimation":"./src/data/extend.animation.json","./extendKeyframes":"./src/data/extend.keyframes.json","./extendMaxWidth":"./src/data/extend.maxWidth.json","./extendRotate":"./src/data/extend.rotate.json","./extendScale":"./src/data/extend.scale.json","./extendTransitionDuration":"./src/data/extend.transitionDuration.json","./extendWidth":"./src/data/extend.width.json","./themeFontSize":"./src/data/theme.fontSize.json","./themeListStyleType":"./src/data/theme.listStyleType.json","./themeOpacity":"./src/data/theme.opacity.json","./themeScreens":"./src/data/theme.screens.json","./camelCaseToTitleCase":"./src/helpers/camelCaseToTitleCase.js","./digitsOnly":"./src/helpers/digitsOnly.js","./formatBytes":"./src/helpers/formatBytes.js","./formatMediaTime":"./src/helpers/formatMediaTime.js","./formatNumber":"./src/helpers/formatNumber.js","./mergeWithVvConfig":"./src/helpers/mergeWithVvConfig.js","./randomString":"./src/helpers/randomString.js","./slugifyString":"./src/helpers/slugifyString.js","./stringToCamelCase":"./src/helpers/stringToCamelCase.js","./stringToFilename":"./src/helpers/stringToFilename.js","./uniqueArray":"./src/helpers/uniqueArray.js","./ValidAudioSourceTypes":"./src/validators/ValidAudioSourceTypes.js","./ValidButtonTypes":"./src/validators/ValidButtonTypes.js","./ValidColorModes":"./src/validators/ValidColorModes.js","./ValidDirections":"./src/validators/ValidDirections.js","./ValidElementTags":"./src/validators/ValidElementTags.js","./ValidFontAwesomeFamilies":"./src/validators/ValidFontAwesomeFamilies.js","./ValidFontAwesomeSizes":"./src/validators/ValidFontAwesomeSizes.js","./ValidHeadingLevels":"./src/validators/ValidHeadingLevels.js","./ValidImageSourceTypes":"./src/validators/ValidImageSourceTypes.js","./ValidInputTypes":"./src/validators/ValidInputTypes.js","./ValidVideoSourceTypes":"./src/validators/ValidVideoSourceTypes.js"},b={type:"git",url:"git+https://github.com/obewds/vueventus.git"},x={url:"https://github.com/obewds/vueventus/issues"},T=["vue","vueventus","vite","tailwindcss","obewds","rollup","vitepress","postcss","nodejs"];var w={name:r,description:a,version:c,author:d,homepage:l,scripts:u,dependencies:p,devDependencies:m,sideEffects:g,main:v,module:h,browser:f,files:j,types:V,exports:y,repository:b,bugs:x,keywords:T};const S={class:"block w-full text-center pt-12"},C=e("div",{class:"opacity-50 text-xs"},"Current Version:",-1),k={href:"https://github.com/obewds/vueventus/blob/main/CHANGELOG.md",class:"text-sm",target:"_blank",rel:"noopener noreferrer",title:"View Changelog"},E=s({__name:"DocsPackageVersion",setup(A){return(B,D)=>(t(),o("aside",S,[C,e("a",k," v"+n(i(w).version),1)]))}});export{E as _};
