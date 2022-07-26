import{f as s,o as t,c as n,a as e,t as i,u as o}from"../app.1488ccde.js";const r="@obewds/vueventus",c="A component library and styling management system for modern Vue.js, Tailwind CSS, and Typescript apps",p="0.33.0",a="@oberocks",u="https://obewds.github.io/vueventus/",d="MIT",l={dev:"vite",build:"vue-tsc --noEmit && vite build","ts:build":"npx rimraf dist && npm run build && vue-tsc --emitDeclarationOnly",preview:"vite preview",test:"vitest --dom",coverage:"vitest run --dom --coverage","docs:dev":"vitepress dev docs --open","docs:build":"vitepress build docs","docs:serve":"vitepress serve docs",changelog:"auto-changelog --package --unreleased --backfill-limit 20",tag:`PACKAGE_VERSION=$(cat package.json | grep \\"version\\" | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g' | tr -d '[[:space:]]') && git tag v$PACKAGE_VERSION && git push --tags`,bump:"npm run tag && npm run changelog",cleanup:"node scripts/cleanup.mjs",originals:"node scripts/copyToDist.mjs",generate:"npx rimraf dist && npx rimraf docs/.vitepress/dist && npm run build && vue-tsc --emitDeclarationOnly && tsc && npm run docs:build && npm run originals","pkg:org":"npm config set scope obewds","pkg:login":"npm adduser","pkg:publish":"npm publish --access public","publish:package":"npm run generate && npm run pkg:org && npm run pkg:login && npm run pkg:publish && npm run bump"},v={"@tailwindcss/aspect-ratio":"^0.4.0","@tailwindcss/forms":"^0.5.2","@tailwindcss/line-clamp":"^0.4.0","@tailwindcss/typography":"^0.5.4",deepmerge:"^4.2.2","fs-extra":"^10.1.0","gradient-string":"^2.0.1",inquirer:"^9.0.2",nanospinner:"^1.1.0",rimraf:"^3.0.2",tailwindcss:"^3.1.6",vue:"^3.2.37"},m={"@types/fs-extra":"^9.0.13","@vitejs/plugin-vue":"^3.0.1","@vue/test-utils":"^2.0.2","auto-changelog":"^2.4.0",autoprefixer:"^10.4.7",c8:"^7.12.0",chalk:"^5.0.1","happy-dom":"^6.0.4","markdown-it-include":"^2.0.0",postcss:"^8.4.14",typescript:"^4.7.4",vite:"^3.0.3",vitepress:"^1.0.0-alpha.4",vitest:"^0.19.1","vue-router":"^4.1.2","vue-tsc":"^0.39.0"},g=!1,b="./dist/vueventus.cjs",h="./dist/vueventus.mjs",f="./dist/vueventus.iife.js",k=["cli","dist","src/components","src/configs","src/data","src/helpers","src/types","src/validators"],w={vueventus:"./cli/index.mjs","vv-install":"./cli/installer.mjs"},y="./dist/index.d.ts",_={".":{import:"./dist/vueventus.mjs",require:"./dist/vueventus.cjs"},"./package.json":"./package.json","./dist/*":"./dist/*","./src/*":"./src/*"},x={type:"git",url:"git+https://github.com/obewds/vueventus.git"},j={url:"https://github.com/obewds/vueventus/issues"},E=["vue","vueventus","vite","tailwindcss","obewds","typescript","rollup","vitepress","postcss","nodejs"];var C={name:r,description:c,version:p,author:a,homepage:u,license:d,scripts:l,dependencies:v,devDependencies:m,sideEffects:g,main:b,module:h,browser:f,files:k,bin:w,types:y,exports:_,repository:x,bugs:j,keywords:E};const D={class:"block w-full text-center pt-12"},V=e("div",{class:"opacity-50 text-xs"},"Current Version:",-1),A={href:"https://github.com/obewds/vueventus/blob/main/CHANGELOG.md",class:"text-sm",target:"_blank",rel:"noopener noreferrer",title:"View Changelog"},T=s({__name:"DocsPackageVersion",setup(O){return(S,G)=>(t(),n("aside",D,[V,e("a",A," v"+i(o(C).version),1)]))}});export{T as _};