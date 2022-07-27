import{_ as e}from"./chunks/DocsPackageVersion.af91bb19.js";import{o as p,c as o,a as s,b as t,t as n,d as r,e as l}from"./app.1488ccde.js";const c={id:"frontmatter-title",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=l('<p>A pastel themed palette of ground colors with properties/values with the keys of <code>default</code>, <code>error</code>, <code>primary</code>, <code>secondary</code>, and <code>success</code>.</p><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2>',2),y=l(`<div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">GroundPastel</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vueventus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,1),d=l(`<div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> GroundPastel </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vueventus/dist/configs/palettes/GroundPastel.js</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="use" tabindex="-1">Use <a class="header-anchor" href="#use" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> bgDefault </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> GroundPastel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">default</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> bgError </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> GroundPastel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">error</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> bgPrimary </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> GroundPastel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">primary</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> bgSecondary </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> GroundPastel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">secondary</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> bgSuccess </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> GroundPastel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">success</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="module" tabindex="-1">Module <a class="header-anchor" href="#module" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// ./src/configs/palettes/GroundPastel.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">DefaultConfigPalette</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../../types/DefaultConfigPalette</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> &lt;</span><span style="color:#FFCB6B;">DefaultConfigPalette</span><span style="color:#A6ACCD;">&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text-black bg-gray-100 dark:bg-gray-200</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">error</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text-black bg-rose-200 dark:bg-rose-300</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">primary</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text-black bg-blue-200 dark:bg-blue-300</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">secondary</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text-black bg-violet-200 dark:bg-violet-300</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text-black bg-green-300 dark:bg-green-400</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,5),m=JSON.parse('{"title":"GroundPastel Palette Config Module","description":"","frontmatter":{"title":"GroundPastel Palette Config Module"},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Use","slug":"use"},{"level":2,"title":"Module","slug":"module"}],"relativePath":"modules/palettes/ground-pastel.md","lastUpdated":1655667322000}'),F={name:"modules/palettes/ground-pastel.md"},_=Object.assign(F,{setup(C){return(a,A)=>(p(),o("div",null,[s("h1",c,[t(n(a.$frontmatter.title)+" ",1),D]),i,s("p",null,"To import the compiled library version of the "+n(a.$frontmatter.title)+":",1),y,s("p",null,"To import the "+n(a.$frontmatter.title)+" directly:",1),d,r(e)]))}});export{m as __pageData,_ as default};