import{_ as e}from"./chunks/DocsPackageVersion.3a00c4f7.js";import{o as l,c as p,a as s,b as t,t as n,d as o,e as r}from"./app.7082c675.js";const i={id:"frontmatter-title",tabindex:"-1"},c=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=r(`<h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">slugifyString</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vueventus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="use-example" tabindex="-1">Use Example <a class="header-anchor" href="#use-example" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">( </span><span style="color:#82AAFF;">slugifyString</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">This is a test.</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// returns (string): &#39;this-is-a-test&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">( </span><span style="color:#82AAFF;">slugifyString</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> This is a 2nd test!!!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// returns (string): &#39;this-is-a-2nd-test&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">( </span><span style="color:#82AAFF;">slugifyString</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">And (&amp;) THIS is a 3rd?!?!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// returns (string): &#39;and-this-is-a-3rd&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,4),F=JSON.parse('{"title":"slugifyString()","description":"","frontmatter":{"title":"slugifyString()"},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Use Example","slug":"use-example"}],"relativePath":"modules/helpers/slugify-string.md","lastUpdated":1655255134000}'),d={name:"modules/helpers/slugify-string.md"},C=Object.assign(d,{setup(D){return(a,u)=>(l(),p("div",null,[s("h1",i,[t(n(a.$frontmatter.title)+" ",1),c]),s("p",null,"The "+n(a.$frontmatter.title)+' helper module provides a helper function that takes a string argument and modifies/returns it as a URL safe and human-readable "slug" string.',1),y,o(e)]))}});export{F as __pageData,C as default};
