import{_ as l}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.bd6f2e15.js";import{o as t,c as p,x as s,a as n,t as e,D as r,N as o}from"./chunks/framework.bb38f269.js";const c={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=s("strong",null,"sparingly",-1),y=o('<p>The method is enclosed within a conditional that checks the window object&#39;s <code>typeof</code> value, to fail gracefully in SSR/SSG scenarios. And of course if the window and document pass the conditional, as the module name implies, the document&#39;s body element is used to trigger the built-in JavaScript <code>HTMLElement.click()</code> method, and pull the document focus out of the current user&#39;s temporary overlaying view states.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The ideal use case for this method is to bail out of an off-canvas modal after a page state change in a JavaScript-driven application. So it&#39;s ideal for off-canvas nav links that trigger page reflows, but don&#39;t trigger server-side page refreshes due to client-side routing.</p><p>In these cases, even though this is a <strong>dirty hack</strong>... it gets the job done with the least amount of code across all browsers.</p></div><p>Nevertheless, try to only use a method like this if you have to, or are pinched for time, or are in a creative flow when prototyping!</p><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-label="Permalink to &quot;Import&quot;">​</a></h2>',4),u=o(`<div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">forceBodyClick</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vueventus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-label="Permalink to &quot;Arguments&quot;">​</a></h2><p>Returns: <strong><code>void</code></strong></p>`,3),m=o(`<h2 id="use-example" tabindex="-1">Use Example <a class="header-anchor" href="#use-example" aria-label="Permalink to &quot;Use Example&quot;">​</a></h2><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">forceBodyClick()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Close Modal</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// returns (void): Simulates .click() on the document&#39;s body element</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="module-code" tabindex="-1">Module Code <a class="header-anchor" href="#module-code" aria-label="Permalink to &quot;Module Code&quot;">​</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// ./src/helpers/forceBodyClick.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">window</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">undefined</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">click</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dispatchEvent</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Event</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,4),f=JSON.parse('{"title":"forceBodyClick() Helper Method","description":"","frontmatter":{"title":"forceBodyClick() Helper Method"},"headers":[],"relativePath":"modules/helpers/force-body-click.md","lastUpdated":1660178076000}'),D={name:"modules/helpers/force-body-click.md"},_=Object.assign(D,{setup(F){return(a,h)=>(t(),p("div",null,[s("h1",c,[n(e(a.$frontmatter.title)+" ",1),i]),s("p",null,[n("The "+e(a.$frontmatter.title)+" module provides a helper function that is a COMPLETE AND TOTALLY DIRTY HACK to be used ",1),d,n(" as a bail out of temporary overlaying state scenarios like a modal with an underlying overlay.")]),y,s("p",null,"To import the "+e(a.$frontmatter.title)+":",1),u,s("p",null,"The "+e(a.$frontmatter.title)+" does not have any arguments.",1),m,r(l)]))}});export{f as __pageData,_ as default};
