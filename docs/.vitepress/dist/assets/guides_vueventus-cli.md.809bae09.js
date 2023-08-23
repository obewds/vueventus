import{_ as i}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.d5f94bec.js";import{c}from"./chunks/cliData.0eb3dba2.js";import{o as u,c as b,k as s,a as e,t as n,l as a,J as d,S as l}from"./chunks/framework.f6f29c10.js";const C={id:"frontmatter-title",tabindex:"-1"},A=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),m=s("p",null,"This guide will walk through installing and setting up a project with the vueventus CLI.",-1),y=s("h2",{id:"core-stacks",tabindex:"-1"},[e("Core Stacks "),s("a",{class:"header-anchor",href:"#core-stacks","aria-label":'Permalink to "Core Stacks"'},"​")],-1),g=s("p",null,"For now, the CLI can install the following stacks to kickoff app development:",-1),h=s("strong",null,"SPA Stack:",-1),v=s("strong",null,"SSG Stack:",-1),D=s("strong",null,"Nuxt 3 Stack:",-1),f=s("h3",{id:"the-spa-stack",tabindex:"-1"},[e("The SPA Stack "),s("a",{class:"header-anchor",href:"#the-spa-stack","aria-label":'Permalink to "The SPA Stack"'},"​")],-1),k=s("h3",{id:"the-ssg-stack",tabindex:"-1"},[e("The SSG Stack "),s("a",{class:"header-anchor",href:"#the-ssg-stack","aria-label":'Permalink to "The SSG Stack"'},"​")],-1),x=s("p",null,"The SSG stack additionally incorporates Markdown, auto-routing Pages, and auto-loading component (Unplugin) functionality in the development stack, allowing for markdown in Vue components and Vue components in markdown (just like VuePress/VitePress), automatic page routing, and automatic component loading and pre-compiling.",-1),V=s("h3",{id:"the-nuxt-3-stack",tabindex:"-1"},[e("The Nuxt 3 Stack "),s("a",{class:"header-anchor",href:"#the-nuxt-3-stack","aria-label":'Permalink to "The Nuxt 3 Stack"'},"​")],-1),_=l('<h2 id="core-deps" tabindex="-1">Core Deps <a class="header-anchor" href="#core-deps" aria-label="Permalink to &quot;Core Deps&quot;">​</a></h2><p>The core deps for each stack are generally pretty similar, but here&#39;s a table of the major app development specific dependencies to visualize the stacks themselves better:</p><table><thead><tr><th>Primary Deps</th><th style="text-align:center;">SPA Stack</th><th style="text-align:center;">SSG Stack</th><th style="text-align:center;">Nuxt 3 Stack</th></tr></thead><tbody><tr><td><a href="https://vitejs.dev/guide/#scaffolding-your-first-vite-project" target="_blank" rel="noreferrer">Vite.js</a></td><td style="text-align:center;">🟢</td><td style="text-align:center;">🟢</td><td style="text-align:center;">🟢</td></tr><tr><td><a href="https://vuejs.org/" target="_blank" rel="noreferrer">Vue.js</a></td><td style="text-align:center;">🟢</td><td style="text-align:center;">🟢</td><td style="text-align:center;">🟢</td></tr><tr><td><a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a></td><td style="text-align:center;">🟢</td><td style="text-align:center;">🟢</td><td style="text-align:center;">🔵</td></tr><tr><td><a href="https://nuxt.com/modules/tailwindcss" target="_blank" rel="noreferrer">@nuxtjs/tailwindcss</a></td><td style="text-align:center;">🔴</td><td style="text-align:center;">🔴</td><td style="text-align:center;">🟢</td></tr><tr><td><a href="https://headlessui.com/" target="_blank" rel="noreferrer">Headless UI (Vue)</a></td><td style="text-align:center;">🟢</td><td style="text-align:center;">🟢</td><td style="text-align:center;">🔵</td></tr><tr><td><a href="https://nuxt.com/modules/headlessui" target="_blank" rel="noreferrer">nuxt-headlessui</a></td><td style="text-align:center;">🔴</td><td style="text-align:center;">🔴</td><td style="text-align:center;">🟢</td></tr><tr><td><a href="https://www.npmjs.com/package/@headlessui/tailwindcss" target="_blank" rel="noreferrer">@headlessui/tailwindcss</a></td><td style="text-align:center;">🟢</td><td style="text-align:center;">🟢</td><td style="text-align:center;">🟢</td></tr><tr><td><a href="https://heroicons.com/" target="_blank" rel="noreferrer">Heroicons</a></td><td style="text-align:center;">🟡</td><td style="text-align:center;">🟡</td><td style="text-align:center;">🔴</td></tr><tr><td><a href="https://www.npmjs.com/package/@tailwindcss/aspect-ratio" target="_blank" rel="noreferrer">@tailwindcss/aspect-ratio</a></td><td style="text-align:center;">🟢</td><td style="text-align:center;">🟢</td><td style="text-align:center;">🟢</td></tr><tr><td><a href="https://www.npmjs.com/package/@tailwindcss/forms" target="_blank" rel="noreferrer">@tailwindcss/forms</a></td><td style="text-align:center;">🟢</td><td style="text-align:center;">🟢</td><td style="text-align:center;">🟢</td></tr><tr><td><a href="https://www.npmjs.com/package/@tailwindcss/typography" target="_blank" rel="noreferrer">@tailwindcss/typography</a></td><td style="text-align:center;">🟢</td><td style="text-align:center;">🟢</td><td style="text-align:center;">🟢</td></tr><tr><td><a href="https://router.vuejs.org/" target="_blank" rel="noreferrer">vue-router</a></td><td style="text-align:center;">🟢</td><td style="text-align:center;">🟢</td><td style="text-align:center;">🔵</td></tr><tr><td><a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">Typescript</a></td><td style="text-align:center;">🟢</td><td style="text-align:center;">🟢</td><td style="text-align:center;">🟢</td></tr><tr><td><a href="https://vitest.dev/" target="_blank" rel="noreferrer">Vitest</a></td><td style="text-align:center;">🟢</td><td style="text-align:center;">🟢</td><td style="text-align:center;">🔵</td></tr><tr><td><a href="https://vitest.dev/" target="_blank" rel="noreferrer">nuxt-vitest</a></td><td style="text-align:center;">🔴</td><td style="text-align:center;">🔴</td><td style="text-align:center;">Soon</td></tr><tr><td><a href="https://test-utils.vuejs.org/guide/" target="_blank" rel="noreferrer">Vue Test Utils</a></td><td style="text-align:center;">🟢</td><td style="text-align:center;">🟢</td><td style="text-align:center;">???</td></tr><tr><td><a href="https://www.npmjs.com/package/@vitest/coverage-v8" target="_blank" rel="noreferrer">@vitest/coverage-v8</a></td><td style="text-align:center;">🟢</td><td style="text-align:center;">🟢</td><td style="text-align:center;">???</td></tr><tr><td><a href="https://github.com/capricorn86/happy-dom" target="_blank" rel="noreferrer">happy-dom</a></td><td style="text-align:center;">🟢</td><td style="text-align:center;">🟢</td><td style="text-align:center;">🔵</td></tr><tr><td><a href="https://www.npmjs.com/package/@vitejs/plugin-vue" target="_blank" rel="noreferrer">@vitejs/plugin-vue</a></td><td style="text-align:center;">🟢</td><td style="text-align:center;">🟢</td><td style="text-align:center;">🔴</td></tr><tr><td><a href="https://github.com/antfu/vite-ssg" target="_blank" rel="noreferrer">Vite-SSG</a></td><td style="text-align:center;">🔴</td><td style="text-align:center;">🟢</td><td style="text-align:center;">🔴</td></tr><tr><td><a href="https://pinia.vuejs.org/" target="_blank" rel="noreferrer">Pinia</a></td><td style="text-align:center;">🔴</td><td style="text-align:center;">🟢</td><td style="text-align:center;">🔵</td></tr><tr><td><a href="https://github.com/antfu/vite-plugin-md" target="_blank" rel="noreferrer">vite-plugin-vue-markdown</a></td><td style="text-align:center;">🔴</td><td style="text-align:center;">🟢</td><td style="text-align:center;">🔴</td></tr><tr><td><a href="https://github.com/hannoeru/vite-plugin-pages" target="_blank" rel="noreferrer">vite-plugin-pages</a></td><td style="text-align:center;">🔴</td><td style="text-align:center;">🟢</td><td style="text-align:center;">🔴</td></tr><tr><td><a href="https://github.com/antfu/unplugin-vue-components" target="_blank" rel="noreferrer">unplugin-vue-components/vite</a></td><td style="text-align:center;">🔴</td><td style="text-align:center;">🟢</td><td style="text-align:center;">🔴</td></tr><tr><td><a href="https://prismjs.com/" target="_blank" rel="noreferrer">Prism.js</a></td><td style="text-align:center;">🟡</td><td style="text-align:center;">🟡</td><td style="text-align:center;">Soon</td></tr><tr><td><a href="https://github.com/antfu/prism-theme-vars" target="_blank" rel="noreferrer">prism-theme-vars</a></td><td style="text-align:center;">🟡</td><td style="text-align:center;">🟡</td><td style="text-align:center;">Soon</td></tr><tr><td><a href="https://fontawesome.com/" target="_blank" rel="noreferrer">FontAwesome Free</a></td><td style="text-align:center;">🟡</td><td style="text-align:center;">🟡</td><td style="text-align:center;">Soon</td></tr><tr><td><a href="https://fontawesome.com/" target="_blank" rel="noreferrer">FontAwesome Pro</a></td><td style="text-align:center;">🟠</td><td style="text-align:center;">🟠</td><td style="text-align:center;">Soon</td></tr><tr><td><a href="https://greensock.com/gsap/" target="_blank" rel="noreferrer">GSAP</a></td><td style="text-align:center;">🟡</td><td style="text-align:center;">🟡</td><td style="text-align:center;">Soon</td></tr></tbody></table><p>🔵 = Installed via Nuxt 3 or a Nuxt 3 Module<br> 🟢 = Installed by default<br> 🟡 = Optional (opt-out) dependency<br> 🟠 = License number required on install<br> 🔴 = Not available in stack installation</p><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h2><p>To get started, add a directory for your project and navigate to it through your console/terminal.</p><p>Once in your project directory, go ahead and initialize npm and follow the prompts after running:</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="installing-vueventus" tabindex="-1">Installing VueVentus <a class="header-anchor" href="#installing-vueventus" aria-label="Permalink to &quot;Installing VueVentus&quot;">​</a></h2><p>Next up, go ahead and install VueVentus with the command:</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@obewds/vueventus</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="starting-the-cli" tabindex="-1">Starting the CLI <a class="header-anchor" href="#starting-the-cli" aria-label="Permalink to &quot;Starting the CLI&quot;">​</a></h2><p>To start up the VueVentus CLI installation process, run the command:</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vueventus</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>From there you can follow the prompts and ultimately install your stack and deps.</p><div class="warning custom-block"><p class="custom-block-title">WIP</p><p>The VueVentus CLI is still <strong>slightly</strong> experimental right now, but is stable for the SPA and SSG project kickoff installations. It&#39;s especially stable when installing the whole stack with all deps.</p><p>So for now and with testing still ongoing for each opt-out option to be removed freely, it&#39;s better to take the approach to install it all. Then you can prune out what you don&#39;t need after fully designing and building your polished prototype or even your prod-ready app.</p></div><h2 id="starting-your-app" tabindex="-1">Starting Your App <a class="header-anchor" href="#starting-your-app" aria-label="Permalink to &quot;Starting Your App&quot;">​</a></h2><p>To start up your installed app, use the standard Vite <code>dev</code> npm script command:</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="running-vitest" tabindex="-1">Running Vitest <a class="header-anchor" href="#running-vitest" aria-label="Permalink to &quot;Running Vitest&quot;">​</a></h2><p>To run your app&#39;s tests, use the standard Vitest <code>test</code> npm script command:</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Or to run a coverage report, use:</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">coverage</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="spa-stack-installed-file-structure" tabindex="-1">SPA Stack: Installed File Structure <a class="header-anchor" href="#spa-stack-installed-file-structure" aria-label="Permalink to &quot;SPA Stack: Installed File Structure&quot;">​</a></h2>',25),S=l(`<div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .vscode</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ settings.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ public</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ .htaccess</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ vite.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ src</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ assets</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ logo-obe.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ logo-pinia.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ logo-tailwindcss.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ logo-typescript.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ logo-vite.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ logo-vue.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ vue.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ components</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ vv</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ anchors</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvAnchor.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvRouterLink.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ buttons</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvButton.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvColorModeButton.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvScrollUp.vue 🟡</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ elements</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvFa.vue 🟡</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvEl.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvPrism.vue 🟡</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvPrismVars.vue 🟡</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ forms</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvFormGroup.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvQuadFormGroup.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ inputs</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvCheckbox.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvInput.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvRadio.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ lists</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvList.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvListItem.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ selects</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvListbox.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvSelect.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  └─ textareas</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │     └─ VvTextarea.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ HelloVueVentus.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ css</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ prism-theme-vars.css 🟡</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ tailwind.css</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ pages</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ Home.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ NotFound404.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ router</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ routes.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ app.colors.json</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ App.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ app.vv.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ fontAwesome.ts/fontAwesomePro.ts 🟡/🟠</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ gsap.ts 🟡</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ main.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ vite-env.d.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ tests</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ components</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ vv</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ anchors</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvAnchor.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvRouterLink.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ buttons</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvButton.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvColorModeButton.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvScrollUp.test.js 🟡</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ elements</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvEl.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvFa.test.js 🟡</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvPrism.test.js 🟡</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvPrismVars.test.js 🟡</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ forms</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvFormGroup.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvQuadFormGroup.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ inputs</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvCheckbox.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvInput.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvRadio.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ lists</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvList.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvListItem.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ selects</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvListbox.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvSelect.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  └─ textareas</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │     └─ VvListItem.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ HelloVueVentus.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ pages</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├─ Home.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│     └─ NotFound404.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .gitignore</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .npmrc 🟡 (FontAwesome Pro only)</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ package-lock.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ postcss.config.cjs</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ README-VITE.md</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ tailwind.config.cjs</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ tsconfig.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ tsconfig.node.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ vite.config.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ vitest.config.ts</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br></div></div><p>🟡 = Optional (opt-out) dependency<br> 🟠 = License number required on install</p><h2 id="ssg-stack-installed-file-structure" tabindex="-1">SSG Stack: Installed File Structure <a class="header-anchor" href="#ssg-stack-installed-file-structure" aria-label="Permalink to &quot;SSG Stack: Installed File Structure&quot;">​</a></h2>`,3),w=l(`<div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .vscode</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ settings.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ public</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ .htaccess</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ src</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ assets</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ logo-obe.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ logo-pinia.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ logo-tailwindcss.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ logo-typescript.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ logo-vite.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ logo-vue.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ vue.svg</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ components</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ vv</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ anchors</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvAnchor.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvRouterLink.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ buttons</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvButton.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvColorModeButton.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvScrollUp.vue 🟡</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ elements</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvEl.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvFa.vue 🟡</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvPrism.vue 🟡</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvPrismVars.vue 🟡</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ forms</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvFormGroup.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvQuadFormGroup.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ inputs</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvCheckbox.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvInput.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvRadio.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ lists</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvList.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvListItem.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ selects</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvListbox.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvSelect.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  └─ textareas</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │     └─ VvTextarea.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ Counter.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ HelloVueVentus.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ HelloWorld.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ Counter.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ MousePos.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ css</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ prism-theme-vars.css 🟡</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ tailwind.css</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ pages</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ nested</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  └─ deep</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │     └─ b.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ [...all].vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ a.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ b.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ store</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ root.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ router</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ routes.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ app.colors.json</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ App.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ app.vv.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ fontAwesome.ts/fontAwesomePro.ts 🟡/🟠</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ gsap.ts 🟡</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ main.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ vite-env.d.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ tests</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ components</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  ├─ vv</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ anchors</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvAnchor.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvRouterLink.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ buttons</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvButton.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvColorModeButton.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvScrollUp.test.js 🟡</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ elements</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvEl.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvFa.test.js 🟡</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvPrism.test.js 🟡</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvPrismVars.test.js 🟡</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ forms</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvFormGroup.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvQuadFormGroup.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ inputs</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvCheckbox.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvInput.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvRadio.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ lists</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvList.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvListItem.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  ├─ selects</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  ├─ VvListbox.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  │  └─ VvSelect.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │  └─ textareas</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  │     └─ VvListItem.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ HelloVueVentus.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ pages</span></span>
<span class="line"><span style="color:#A6ACCD;">│     └─ b.test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .gitignore</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .npmrc 🟡 (FontAwesome Pro only)</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ components.d.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ package-lock.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ postcss.config.cjs</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ README-VITE.md</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ tailwind.config.cjs</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ tsconfig.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ tsconfig.node.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ vite.config.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ vitest.config.ts</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br></div></div><p>🟡 = Optional (opt-out) dependency<br> 🟠 = License number required on install</p><h2 id="nuxt-3-stack-installed-file-structure" tabindex="-1">Nuxt 3 Stack: Installed File Structure <a class="header-anchor" href="#nuxt-3-stack-installed-file-structure" aria-label="Permalink to &quot;Nuxt 3 Stack: Installed File Structure&quot;">​</a></h2>`,3),j=l(`<div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .nuxt (generated after running npm run dev or npm run build)</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ ... nuxt stuff</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .vscode</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ settings.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ components</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ Vv</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├─ Anchor.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├─ Button.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├─ Checkbox.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├─ ColorModeButton.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├─ El.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├─ FormGroup.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├─ Input.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├─ Listbox.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├─ ListItem.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├─ NuxtRouterLink.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├─ QuadFormGroup.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├─ Radio.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│     ├─ Select.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">│     └─ Textarea.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ pages</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ index.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ public</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─ js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  │  └─ on-page-load-color-modes.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─ favicon.ico</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .gitignore</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .npmrc</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ app.colors.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ app.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ app.vv.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ nuxt.config.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ package-lock.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ README-NUXT.md</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ tailwind.config.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ tsconfig.json</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>🟡 = Optional (opt-out) dependency<br> 🟠 = License number required on install</p><h2 id="moving-forward" tabindex="-1">Moving Forward <a class="header-anchor" href="#moving-forward" aria-label="Permalink to &quot;Moving Forward&quot;">​</a></h2><p>Moving forward, the addition of the other stacks is dependent upon figuring out the best way to manage all the little specifics and especially snippets for optional dependencies in the files that exist in all of the stacks.</p><p>The goal is to have the CLI eventually help Vue devs to install the following stacks, for development goodness and truly scalable styling management:</p><ol><li>The SPA Stack (implemented)</li><li>The SSG Stack (implemented)</li><li>The Nuxt 3 Stack (WIP)</li><li>The Firebase Stack</li><li>The VILT Stack</li></ol><br><div class="tip custom-block"><p class="custom-block-title">SKIP TO TEST DRIVE</p><p>If you&#39;d like to skip ahead to the <a href="/vueventus/guides/test-drive-vv-button.html">VvButton Test Drive</a>, you&#39;ll skip the next install guide(s)!</p></div>`,8),G=JSON.parse('{"title":"vueventus CLI","description":"","frontmatter":{"title":"vueventus CLI"},"headers":[],"relativePath":"guides/vueventus-cli.md","filePath":"guides/vueventus-cli.md","lastUpdated":1688595973000}'),T={name:"guides/vueventus-cli.md"},N=Object.assign(T,{setup(P){const t=c.stacks.vueTwViteTs.name,p=c.stacks.vueTwViteSsgMdTs.name,r=c.stacks.vueTwNuxt3.name;return(o,I)=>(u(),b("div",null,[s("h1",C,[e(n(o.$frontmatter.title)+" ",1),A]),m,y,g,s("ol",null,[s("li",null,[h,e(" "+n(a(t)),1)]),s("li",null,[v,e(" "+n(a(p)),1)]),s("li",null,[D,e(" "+n(a(r)),1)])]),f,s("p",null,"The "+n(a(t))+" is a classic Vue 3 via a Vite install option setup for Single Page App development. It's Typescript based and installs with pre-configured Vitest suite deps, the Tailwind CSS plugins, GSAP, Prism.js, and more to tie them all together.",1),k,s("p",null,"The "+n(a(p))+" is a SSR-friendly Static Site Generator setup for Vue 3 that's powered by Vite-SSG and Vite.js. It's also Typescript based and installs with pre-configured Pinia for stores. The stack also brings in the Vitest suite deps, the Tailwind CSS plugins, GSAP, Prism.js, and more to tie them all together.",1),x,V,s("p",null,"The "+n(a(r))+" stack is a powerful combo with Nuxt 3, Vue 3, Tailwind CSS, and VueVentus all acting together for a really fast and flexible way to develop a web app or even an interaction-heavy website. Nuxt 3 is Typescript based by default.",1),_,s("p",null,n(a(t))+" Stack:",1),S,s("p",null,n(a(p))+" Stack:",1),w,s("p",null,n(a(r))+" Stack:",1),j,d(i)]))}});export{G as __pageData,N as default};
