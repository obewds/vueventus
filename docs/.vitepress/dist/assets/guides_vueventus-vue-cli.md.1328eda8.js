import{_ as s,o as n,c as a,e}from"./app.42a58ba9.js";const F='{"title":"Install with Vue CLI","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installing Vue","slug":"installing-vue"},{"level":2,"title":"Installing Tailwind CSS","slug":"installing-tailwind-css"},{"level":2,"title":"Installing VueVentus","slug":"installing-vueventus"},{"level":2,"title":"Vite Config Setup","slug":"vite-config-setup"}],"relativePath":"guides/vueventus-vue-cli.md","lastUpdated":1654344761000}',l={name:"guides/vueventus-vue-cli.md"},p=e(`<h1 id="install-with-vue-cli" tabindex="-1">Install with Vue CLI <a class="header-anchor" href="#install-with-vue-cli" aria-hidden="true">#</a></h1><p>This guide will walk through installing and setting up VueVentus along with <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a>, <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>, <a href="https://vitest.dev/" target="_blank" rel="noopener noreferrer">Vitest</a>, <a href="https://test-utils.vuejs.org/guide/" target="_blank" rel="noopener noreferrer">Vue Test Utils</a>, <a href="https://github.com/bcoe/c8" target="_blank" rel="noopener noreferrer">c8</a> and <a href="https://github.com/capricorn86/happy-dom" target="_blank" rel="noopener noreferrer">happy-dom</a>.</p><p>Reference Link: <a href="https://vuejs.org/guide/quick-start.html#with-build-tools" target="_blank" rel="noopener noreferrer">Vue.js Quick Start Guide</a></p><h2 id="installing-vue" tabindex="-1">Installing Vue <a class="header-anchor" href="#installing-vue" aria-hidden="true">#</a></h2><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm init vue@latest</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ol><li>Select <code>y</code> to install with <code>create-vue@latest</code></li><li>Enter a Project Name in the Vue CLI create-vue interface</li><li>Select <code>no</code>/<code>yes</code> for everything you don&#39;t want/need <ul><li>VueVentus doesn&#39;t support Typescript yet</li><li><code>Vitest</code>, <code>ESLint</code> and <code>Prettier</code> are usually a good idea</li></ul></li><li><code>cd</code> into your newly created app directory</li><li>Install the application dependencies with:</li></ol><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>You can check to see the installation was successful by launching Vite&#39;s local dev server with:</p><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm run dev</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="installing-tailwind-css" tabindex="-1">Installing Tailwind CSS <a class="header-anchor" href="#installing-tailwind-css" aria-hidden="true">#</a></h2><p>To install Tailwind CSS, we&#39;ll be using the <a href="https://tailwindcss.com/docs/guides/vite" target="_blank" rel="noopener noreferrer">Vite.js Guide</a> variation for this guide and example.</p><p>So from the project&#39;s root directory, run the following commands:</p><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install -D tailwindcss postcss autoprefixer</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npx tailwindcss init -p</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Next up, open up the generated <code>./tailwind.config.js</code> file now in the project root directory, and add the following code to include Vite/Vue files into Tailwind&#39;s parser:</p><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// ./tailwind.config.js</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./index.html</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./src/**/*.{vue,js,ts,jsx,tsx}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">extend</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Next, create a new file <code>./src/css/tailwind.css</code>, and add the base Tailwind CSS directives to the file:</p><div class="language-css line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">/* ./src/css/tailwind.css */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@tailwind</span><span style="color:#A6ACCD;"> base</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@tailwind</span><span style="color:#A6ACCD;"> components</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@tailwind</span><span style="color:#A6ACCD;"> utilities</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Next up, include the tailwind.css file into the app and Vite&#39;s build process, by opening up the <code>./src/main.js</code> file and importing the css file like so:</p><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./css/tailwind.css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Once everything has been added and saved, you can restart Vite and see Tailwind&#39;s effect on Vite&#39;s initial HelloWorld.vue and App.vue components with:</p><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm run dev</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="installing-vueventus" tabindex="-1">Installing VueVentus <a class="header-anchor" href="#installing-vueventus" aria-hidden="true">#</a></h2><p>With Vue and Tailwind installed, it&#39;s time to install VueVentus. From your project&#39;s root directory, you can install the VueVentus package with:</p><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install @obewds/vueventus --save-dev</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="vite-config-setup" tabindex="-1">Vite Config Setup <a class="header-anchor" href="#vite-config-setup" aria-hidden="true">#</a></h2><p>There&#39;s also a couple of tiny tweaks to make in our project&#39;s <code>./vite.config.js</code> file:</p><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// ./vite.config.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// import the resolve method</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">resolve</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// add a resolve parameter/alias</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">resolve</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">alias</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">src</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// optionally open page on server start</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">server</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">open</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// for Vitest!</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">globals</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">build</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{...},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><br><div class="tip custom-block"><p class="custom-block-title">SKIP TO CONFIGURATION</p><p>If you&#39;d like to skip ahead to the <a href="/vueventus/guides/configuration.html">configuration guide</a>, you&#39;ll skip the next install guide(s)!</p></div>`,30),o=[p];function t(r,c,i,d,u,y){return n(),a("div",null,o)}var b=s(l,[["render",t]]);export{F as __pageData,b as default};
