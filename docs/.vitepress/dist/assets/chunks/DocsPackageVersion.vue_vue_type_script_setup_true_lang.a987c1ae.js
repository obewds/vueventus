import{d as s,o as t,c as n,k as e,t as i,l as o}from"./framework.d06e35cd.js";const r="@obewds/vueventus",c="A component library and styling management system for modern Vue.js, Tailwind CSS, and Typescript apps",a="0.61.1",p="@oberocks",d="https://obewds.github.io/vueventus/",u="MIT",l={dev:"vite",build:"vue-tsc --noEmit && vite build","ts:build":"npx rimraf dist && npm run build && vue-tsc --emitDeclarationOnly",preview:"vite preview",test:"vitest --dom",coverage:"vitest run --dom --coverage","docs:dev":"vitepress dev docs --open","docs:build":"vitepress build docs","docs:serve":"vitepress serve docs",changelog:"auto-changelog --package --unreleased --backfill-limit 20",tag:`PACKAGE_VERSION=$(cat package.json | grep \\"version\\" | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[[:space:]]') && git tag v$PACKAGE_VERSION && git push --tags`,cleanup:"node scripts/cleanup.mjs","cli:mjs":"node scripts/generateCliMjsVersions.mjs",originals:"node scripts/copyToDist.mjs","pkg:org":"npm config set scope obewds",generate:"npx rimraf dist && npx rimraf docs/.vitepress/dist && npm run build && vue-tsc --emitDeclarationOnly && tsc && npm run cli:mjs && npm run docs:build && npm run originals","bump:patch":"npm version patch && npm run generate && npm run changelog","bump:minor":"npm version minor && npm run generate && npm run changelog","bump:major":"npm version major && npm run generate && npm run changelog"},v={"@headlessui/tailwindcss":"^0.1.3","@headlessui/vue":"^1.7.14","@tailwindcss/aspect-ratio":"^0.4.2","@tailwindcss/forms":"^0.5.3","@tailwindcss/line-clamp":"^0.4.4","@tailwindcss/typography":"^0.5.9","@thebespokepixel/es-tinycolor":"^3.1.0",deepmerge:"^4.3.1","fs-extra":"^11.1.1","gradient-string":"^2.0.2",inquirer:"^9.2.7",rimraf:"^5.0.1","tailwind-scrollbar":"^3.0.4",tailwindcss:"^3.3.2",vue:"^3.3.4"},m={"@types/fs-extra":"^11.0.1","@vitejs/plugin-vue":"^4.2.3","@vitest/coverage-v8":"^0.32.4","@vue/test-utils":"^2.4.0","auto-changelog":"^2.4.0",autoprefixer:"^10.4.14",chalk:"^5.3.0","happy-dom":"^9.20.3","markdown-it-include":"^2.0.0",postcss:"^8.4.24",typescript:"^5.1.6",vite:"^4.3.9",vitepress:"^1.0.0-beta.5",vitest:"^0.32.4","vue-router":"^4.2.3","vue-tsc":"^1.8.4"},g={"magic-string":{"sourcemap-codec":{"@jridgewell/sourcemap-codec":"1.4.15"}}},b=!1,h="./dist/vueventus.cjs",f="./dist/vueventus.mjs",w=["cli","dist","src/components","src/configs","src/data","src/helpers","src/types","src/validators"],y={vueventus:"./cli/index.mjs","vv-update":"./cli/updater.mjs","vv-update-locals":"./cli/updateLocals.mjs"},j="./dist/index.d.ts",k={".":{import:"./dist/vueventus.mjs",require:"./dist/vueventus.cjs"},"./package.json":"./package.json","./dist/*":"./dist/*","./src/*":"./src/*"},_={type:"git",url:"git+https://github.com/obewds/vueventus.git"},x={url:"https://github.com/obewds/vueventus/issues"},E=["vue","vueventus","vite","tailwindcss","obewds","typescript","rollup","vitepress","postcss","nodejs"],C={name:r,description:c,version:a,author:p,homepage:d,license:u,scripts:l,dependencies:v,devDependencies:m,overrides:g,sideEffects:b,main:h,module:f,files:w,bin:y,types:j,exports:k,repository:_,bugs:x,keywords:E},V={class:"block w-full text-center pt-12"},D=e("div",{class:"opacity-50 text-xs"},"Current Version:",-1),A={href:"https://github.com/obewds/vueventus/blob/main/CHANGELOG.md",class:"text-sm",target:"_blank",rel:"noopener noreferrer",title:"View Changelog"},T=s({__name:"DocsPackageVersion",setup(O){return(S,G)=>(t(),n("aside",V,[D,e("a",A," v"+i(o(C).version),1)]))}});export{T as _};
