import{_ as p}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.2985ab4b.js";import{o,c as t,a as s,b as a,t as e,d as r,e as l}from"./app.ba5baeac.js";const c={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),D=s("p",null,[a("A validation focused palette of a variety of color class types for use with listbox components via properties/values with the keys of "),s("code",null,"default"),a(", "),s("code",null,"error"),a(", and "),s("code",null,"success"),a(".")],-1),y=s("h2",{id:"app-vv-ts-use",tabindex:"-1"},[a("app.vv.ts Use "),s("a",{class:"header-anchor",href:"#app-vv-ts-use","aria-hidden":"true"},"#")],-1),F=l(`<p>Here&#39;s what that generally looks like in practice in a real world app context:</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// ./src/app.vv.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VvConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vueventus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ConfigVv</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">DefaultConfigPalette</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vueventus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> appVv</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ConfigVv</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> VvConfig</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Override the default VvConfig listboxes optionPalettes colors individually</span></span>
<span class="line"><span style="color:#A6ACCD;">appVv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">listboxes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">optionPalettes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">underlined</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">default </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">appVv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">listboxes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">optionPalettes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">underlined</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">error </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">appVv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">listboxes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">optionPalettes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">underlined</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">success </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Add a new custom app listboxes optionPalettes color name &amp; value</span></span>
<span class="line"><span style="color:#676E95;">// to the default VvConfig listboxes palette</span></span>
<span class="line"><span style="color:#A6ACCD;">appVv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">listboxes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">optionPalettes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">underlined</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">newAppColor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Add a new custom app anchor palette</span></span>
<span class="line"><span style="color:#A6ACCD;">appVv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">listboxes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">optionPalettes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">myCustomAppPalette </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">error</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// Add a new custom app anchor color name &amp; value</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">anotherAppColor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DefaultConfigPalette</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> appVv</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2>`,3),u=l(`<div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ListboxOptionUnderlined</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vueventus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="module-code" tabindex="-1">Module Code <a class="header-anchor" href="#module-code" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// ./src/configs/palettes/ListboxOptionUnderlined.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">DefaultValidationPalette</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../../types/DefaultValidationPalette</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> &lt;</span><span style="color:#FFCB6B;">DefaultValidationPalette</span><span style="color:#A6ACCD;">&gt; </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ui-active:font-bold ui-active:bg-white dark:ui-active:bg-gray-700 ui-active:text-blue-500 dark:ui-active:text-blue-300 ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">error</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ui-active:font-bold ui-active:bg-white dark:ui-active:bg-gray-700 ui-active:text-rose-500 dark:ui-active:text-rose-300 ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ui-active:font-bold ui-active:bg-white dark:ui-active:bg-gray-700 ui-active:text-green-500 dark:ui-active:text-green-300 ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// &#39;default&#39;: &#39;ui-active:font-bold ui-active:bg-white dark:ui-active:bg-gray-700 ui-active:text-blue-500 dark:ui-active:text-blue-300 border-b-2 ui-active:border-blue-500 dark:ui-active:border-blue-300 ui-not-active:border-white dark:ui-not-active:border-gray-700 ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white&#39;,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// error: &#39;ui-active:font-bold ui-active:bg-white dark:ui-active:bg-gray-700 ui-active:text-rose-500 dark:ui-active:text-rose-300 border-b-2 ui-active:border-rose-500 dark:ui-active:border-rose-300 ui-not-active:border-white dark:ui-not-active:border-gray-700 ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white&#39;,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// success: &#39;ui-active:font-bold ui-active:bg-white dark:ui-active:bg-gray-700 ui-active:text-green-500 dark:ui-active:text-green-300 border-b-2 ui-active:border-green-500 dark:ui-active:border-green-300 ui-not-active:border-white dark:ui-not-active:border-gray-700 ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white&#39;,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,3),m=JSON.parse('{"title":"ListboxOptionUnderlined Palette Config Module","description":"","frontmatter":{"title":"ListboxOptionUnderlined Palette Config Module"},"headers":[{"level":2,"title":"app.vv.ts Use","slug":"app-vv-ts-use","link":"#app-vv-ts-use","children":[]},{"level":2,"title":"Import","slug":"import","link":"#import","children":[]},{"level":2,"title":"Module Code","slug":"module-code","link":"#module-code","children":[]}],"relativePath":"modules/palettes/listbox-option-underlined.md","lastUpdated":1670860275000}'),C={name:"modules/palettes/listbox-option-underlined.md"},g=Object.assign(C,{setup(d){return(n,b)=>(o(),t("div",null,[s("h1",c,[a(e(n.$frontmatter.title)+" ",1),i]),D,y,s("p",null,"You'll usually work with the "+e(n.$frontmatter.title)+" after it's already been merged into VueVentus VvConfig data.",1),F,s("p",null,"However, if you need to import the compiled library version of the "+e(n.$frontmatter.title)+", you can use:",1),u,r(p)]))}});export{m as __pageData,g as default};
