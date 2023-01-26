import{_ as p}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.b5c703af.js";import{o,c as e,a as s,b as r,t as n,d as t,e as l}from"./app.9715c361.js";const c={id:"frontmatter-title",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=l('<p>A default palette of border colors with properties/values with the keys of <code>default</code>, <code>error</code>, <code>primary</code>, <code>secondary</code>, and <code>success</code>.</p><h2 id="app-vv-ts-use" tabindex="-1">app.vv.ts Use <a class="header-anchor" href="#app-vv-ts-use" aria-hidden="true">#</a></h2>',2),F=l(`<p>Here&#39;s what that generally looks like in practice in a real world app context:</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// ./src/app.vv.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VvConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vueventus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ConfigVv</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">DefaultPaletteColors</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vueventus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> appVv</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ConfigVv</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> VvConfig</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Override the default VvConfig borders palette colors individually</span></span>
<span class="line"><span style="color:#A6ACCD;">appVv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scrollbars</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">palettes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">default</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">default </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">appVv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scrollbars</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">palettes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">default</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">error </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">appVv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scrollbars</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">palettes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">default</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">primary </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">appVv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scrollbars</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">palettes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">default</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">secondary </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">appVv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scrollbars</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">palettes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">default</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">success </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Add a new custom app anchor color name &amp; value</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// to the default VvConfig borders palette</span></span>
<span class="line"><span style="color:#A6ACCD;">appVv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scrollbars</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">palettes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">default</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">newAppColor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Add a new custom app anchor palette</span></span>
<span class="line"><span style="color:#A6ACCD;">appVv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scrollbars</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">palettes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">newAppPalette </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">error</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">primary</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">secondary</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// Add a new custom app anchor color name &amp; value</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">anotherAppColor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DefaultPaletteColors</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> appVv</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2>`,3),i=l(`<div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ScrollbarDefault</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vueventus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="module-code" tabindex="-1">Module Code <a class="header-anchor" href="#module-code" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// ./src/configs/palettes/ScrollbarDefault.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">DefaultPaletteColors</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../../types/DefaultPaletteColors</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> &lt;</span><span style="color:#FFCB6B;">DefaultPaletteColors</span><span style="color:#A6ACCD;">&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scrollbar scrollbar-thumb-trueGray-100 scrollbar-track-trueGray-200 dark:scrollbar-thumb-trueGray-600 dark:scrollbar-track-trueGray-800</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">error</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scrollbar scrollbar-thumb-rose-100 scrollbar-track-rose-200 dark:scrollbar-thumb-rose-600 dark:scrollbar-track-rose-800</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">primary</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scrollbar scrollbar-thumb-blue-100 scrollbar-track-blue-200 dark:scrollbar-thumb-blue-600 dark:scrollbar-track-blue-800</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">secondary</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scrollbar scrollbar-thumb-violet-100 scrollbar-track-violet-200 dark:scrollbar-thumb-violet-600 dark:scrollbar-track-violet-800</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scrollbar scrollbar-thumb-green-100 scrollbar-track-green-200 dark:scrollbar-thumb-green-600 dark:scrollbar-track-green-800</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,3),m=JSON.parse('{"title":"ScrollbarDefault Palette Config Module","description":"","frontmatter":{"title":"ScrollbarDefault Palette Config Module"},"headers":[{"level":2,"title":"app.vv.ts Use","slug":"app-vv-ts-use","link":"#app-vv-ts-use","children":[]},{"level":2,"title":"Import","slug":"import","link":"#import","children":[]},{"level":2,"title":"Module Code","slug":"module-code","link":"#module-code","children":[]}],"relativePath":"modules/palettes/scrollbar-default.md","lastUpdated":1674693468000}'),C={name:"modules/palettes/scrollbar-default.md"},f=Object.assign(C,{setup(A){return(a,b)=>(o(),e("div",null,[s("h1",c,[r(n(a.$frontmatter.title)+" ",1),D]),y,s("p",null,"You'll usually work with the "+n(a.$frontmatter.title)+" after it's already been merged into VueVentus VvConfig data.",1),F,s("p",null,"However, if you need to import the compiled library version of the "+n(a.$frontmatter.title)+", you can use:",1),i,t(p)]))}});export{m as __pageData,f as default};
