import{_ as e}from"./chunks/DocsPackageVersion.e9a35c93.js";import{o as l,c as p,a as s,b as o,t as a,d as t,e as r}from"./app.8f471eee.js";const c={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=r(`<h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">stringToFilename</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vueventus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="use-example" tabindex="-1">Use Example <a class="header-anchor" href="#use-example" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">( </span><span style="color:#82AAFF;">stringToFilename</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Test String</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// returns (string): &#39;TestString&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">( </span><span style="color:#82AAFF;">stringToFilename</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Test-String _here</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// returns (string): &#39;Test-String_here&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">( </span><span style="color:#82AAFF;">stringToFilename</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Test-String! _@here</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// returns (string): &#39;Test-String_here&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">( </span><span style="color:#82AAFF;">stringToFilename</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Test.String._@here.jpg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// returns (string): &#39;Test.String._here.jpg&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">( </span><span style="color:#82AAFF;">stringToFilename</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Test. 12345._@here.jpg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// returns (string): &#39;Test.12345._here.jpg&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,4),d='{"title":"stringToFilename()","description":"","frontmatter":{"title":"stringToFilename()"},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Use Example","slug":"use-example"}],"relativePath":"modules/helpers/string-to-filename.md","lastUpdated":1655175094000}',D={name:"modules/helpers/string-to-filename.md"},u=Object.assign(D,{setup(F){return(n,A)=>(l(),p("div",null,[s("h1",c,[o(a(n.$frontmatter.title)+" ",1),i]),s("p",null,"The "+a(n.$frontmatter.title)+" helper module provides a helper function that takes in a string argument and returns a filename safe variation of the argument string.",1),y,t(e)]))}});export{d as __pageData,u as default};
