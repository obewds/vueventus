import{_ as e}from"./chunks/DocsPackageVersion.3d86cdf4.js";import{o as p,c as o,a as s,b as l,t as n,d as t,e as r}from"./app.629ef6da.js";const c={id:"frontmatter-title",tabindex:"-1"},y=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),F=s("h2",{id:"import",tabindex:"-1"},[l("Import "),s("a",{class:"header-anchor",href:"#import","aria-hidden":"true"},"#")],-1),i=r(`<div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">camelCaseToTitleCase</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vueventus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="argument" tabindex="-1">Argument <a class="header-anchor" href="#argument" aria-hidden="true">#</a></h2><p>Returns: <strong><code>String</code></strong></p><table><thead><tr><th>Args</th><th style="text-align:center;">Type</th><th style="text-align:center;">Status</th><th>Description</th></tr></thead><tbody><tr><td>string</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;">Required</td><td>A camel case string to be converted to title case</td></tr></tbody></table><h2 id="use-examples" tabindex="-1">Use Examples <a class="header-anchor" href="#use-examples" aria-hidden="true">#</a></h2><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">( </span><span style="color:#82AAFF;">camelCaseToTitleCase</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">testCamelCase</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// returns (string): &#39;Test Camel Case&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">( </span><span style="color:#82AAFF;">camelCaseToTitleCase</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">testCamelCase22</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// returns (string): &#39;Test Camel Case22&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">( </span><span style="color:#82AAFF;">camelCaseToTitleCase</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">PascalCaseString</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// returns (string): &#39;Pascal Case String&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">( </span><span style="color:#82AAFF;">camelCaseToTitleCase</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">spaced camelCase</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// returns (string): &#39;Spaced Camel Case&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="module-code" tabindex="-1">Module Code <a class="header-anchor" href="#module-code" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// ./src/helpers/camelCaseToTitleCase.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;"> string</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">temp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">string</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#F07178;">(</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/([</span><span style="color:#C3E88D;">A-Z</span><span style="color:#89DDFF;">])/</span><span style="color:#F78C6C;">g</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> $1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">\\s</span><span style="color:#89DDFF;">+/</span><span style="color:#F78C6C;">g</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tempArray</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">temp</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">casedArray</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tempArray</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">str</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">charAt</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toUpperCase</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">substring</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toLowerCase</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">casedArray</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">trim</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,8),u=JSON.parse('{"title":"camelCaseToTitleCase() Helper Method","description":"","frontmatter":{"title":"camelCaseToTitleCase() Helper Method"},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Argument","slug":"argument"},{"level":2,"title":"Use Examples","slug":"use-examples"},{"level":2,"title":"Module Code","slug":"module-code"}],"relativePath":"modules/helpers/camel-case-to-title-case.md","lastUpdated":1659882222000}'),D={name:"modules/helpers/camel-case-to-title-case.md"},b=Object.assign(D,{setup(C){return(a,A)=>(p(),o("div",null,[s("h1",c,[l(n(a.$frontmatter.title)+" ",1),y]),s("p",null,"The "+n(a.$frontmatter.title)+" module provides a helper function that converts a passed string formatted in camelCase and returns that string formatted in Title Case.",1),F,s("p",null,"To import the "+n(a.$frontmatter.title)+":",1),i,t(e)]))}});export{u as __pageData,b as default};
