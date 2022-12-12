import{f as s,o as t,c as n,a as e,t as i,u as o}from"../app.d9d1309e.js";const r="@obewds/vueventus",c="A component library and styling management system for modern Vue.js, Tailwind CSS, and Typescript apps",a="0.53.9",p="@oberocks",d="https://obewds.github.io/vueventus/",u="MIT",l={dev:"vite",build:"vue-tsc --noEmit && vite build","ts:build":"npx rimraf dist && npm run build && vue-tsc --emitDeclarationOnly",preview:"vite preview",test:"vitest --dom",coverage:"vitest run --dom --coverage","docs:dev":"vitepress dev docs --open","docs:build":"vitepress build docs","docs:serve":"vitepress serve docs",changelog:"auto-changelog --package --unreleased --backfill-limit 20",tag:`PACKAGE_VERSION=$(cat package.json | grep \\"version\\" | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[[:space:]]') && git tag v$PACKAGE_VERSION && git push --tags`,cleanup:"node scripts/cleanup.mjs","cli:mjs":"node scripts/generateCliMjsVersions.mjs",originals:"node scripts/copyToDist.mjs","pkg:org":"npm config set scope obewds",generate:"npx rimraf dist && npx rimraf docs/.vitepress/dist && npm run build && vue-tsc --emitDeclarationOnly && tsc && npm run cli:mjs && npm run docs:build && npm run originals","bump:patch":"npm version patch && npm run generate && npm run changelog","bump:minor":"npm version minor && npm run generate && npm run changelog","bump:major":"npm version major && npm run generate && npm run changelog"},m={"@headlessui/tailwindcss":"^0.1.2","@headlessui/vue":"^1.7.4","@tailwindcss/aspect-ratio":"^0.4.2","@tailwindcss/forms":"^0.5.3","@tailwindcss/line-clamp":"^0.4.2","@tailwindcss/typography":"^0.5.8","@thebespokepixel/es-tinycolor":"^3.1.0",deepmerge:"^4.2.2","fs-extra":"^10.1.0","gradient-string":"^2.0.2",inquirer:"^9.1.4",rimraf:"^3.0.2","tailwind-scrollbar":"^2.0.1",tailwindcss:"^3.2.4",vue:"^3.2.45"},v={"@types/fs-extra":"^9.0.13","@vitejs/plugin-vue":"^3.2.0","@vitest/coverage-c8":"^0.25.3","@vue/test-utils":"^2.2.4","auto-changelog":"^2.4.0",autoprefixer:"^10.4.13",chalk:"^5.1.2","happy-dom":"^7.7.0","markdown-it-include":"^2.0.0",postcss:"^8.4.19",typescript:"^4.9.3",vite:"^3.2.4",vitepress:"^1.0.0-alpha.29",vitest:"^0.25.3","vue-router":"^4.1.6","vue-tsc":"^1.0.9"},g=!1,h="./dist/vueventus.cjs",b="./dist/vueventus.mjs",f=["cli","dist","src/components","src/configs","src/data","src/helpers","src/types","src/validators"],w={vueventus:"./cli/index.mjs","vv-update":"./cli/updater.mjs"},y="./dist/index.d.ts",j={".":{import:"./dist/vueventus.mjs",require:"./dist/vueventus.cjs"},"./package.json":"./package.json","./dist/*":"./dist/*","./src/*":"./src/*"},k={type:"git",url:"git+https://github.com/obewds/vueventus.git"},_={url:"https://github.com/obewds/vueventus/issues"},x=["vue","vueventus","vite","tailwindcss","obewds","typescript","rollup","vitepress","postcss","nodejs"],E={name:r,description:c,version:a,author:p,homepage:d,license:u,scripts:l,dependencies:m,devDependencies:v,sideEffects:g,main:h,module:b,files:f,bin:w,types:y,exports:j,repository:k,bugs:_,keywords:x},C={class:"block w-full text-center pt-12"},V=e("div",{class:"opacity-50 text-xs"},"Current Version:",-1),D={href:"https://github.com/obewds/vueventus/blob/main/CHANGELOG.md",class:"text-sm",target:"_blank",rel:"noopener noreferrer",title:"View Changelog"},N=s({__name:"DocsPackageVersion",setup(A){return(O,S)=>(t(),n("aside",C,[V,e("a",D," v"+i(o(E).version),1)]))}});export{N as _};
