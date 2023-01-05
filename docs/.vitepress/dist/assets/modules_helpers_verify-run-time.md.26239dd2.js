import{_ as a}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.803760a8.js";import{o as l,c as p,a as s,b as o,t as e,d as t,e as r}from"./app.7595295d.js";const c={id:"frontmatter-title",tabindex:"-1"},F=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=r(`<p>Documentation coming soon!</p><h2 id="module-code" tabindex="-1">Module Code <a class="header-anchor" href="#module-code" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// ./src/validation/verifyRunTime.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> verifyType </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./verifyType</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">decimals</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">|</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">|</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> ( </span><span style="color:#82AAFF;">verifyType</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) ) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> ( </span><span style="color:#A6ACCD;">decimals</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">decimals</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">decimals</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#F07178;"> ) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> ( </span><span style="color:#A6ACCD;">decimals</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;"> ) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">([</span><span style="color:#C3E88D;">0-2</span><span style="color:#89DDFF;">]?[</span><span style="color:#C3E88D;">0-3</span><span style="color:#89DDFF;">][</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">])?([</span><span style="color:#C3E88D;">0-5</span><span style="color:#89DDFF;">]?[</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">][</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">])?([</span><span style="color:#C3E88D;">0-5</span><span style="color:#89DDFF;">]?[</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">])([</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">][</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">]{1})</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> ( </span><span style="color:#A6ACCD;">decimals</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> ) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">([</span><span style="color:#C3E88D;">0-2</span><span style="color:#89DDFF;">]?[</span><span style="color:#C3E88D;">0-3</span><span style="color:#89DDFF;">][</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">])?([</span><span style="color:#C3E88D;">0-5</span><span style="color:#89DDFF;">]?[</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">][</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">])?([</span><span style="color:#C3E88D;">0-5</span><span style="color:#89DDFF;">]?[</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">])([</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">][</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">]{2})</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> ( </span><span style="color:#A6ACCD;">decimals</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#F07178;"> ) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#89DDFF;">([</span><span style="color:#C3E88D;">0-2</span><span style="color:#89DDFF;">]?[</span><span style="color:#C3E88D;">0-3</span><span style="color:#89DDFF;">][</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">])?([</span><span style="color:#C3E88D;">0-5</span><span style="color:#89DDFF;">]?[</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">][</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">])?([</span><span style="color:#C3E88D;">0-5</span><span style="color:#89DDFF;">]?[</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">])([</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">][</span><span style="color:#C3E88D;">0-9</span><span style="color:#89DDFF;">]{3})</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,3),d=JSON.parse('{"title":"verifyRunTime() Helper Method","description":"","frontmatter":{"title":"verifyRunTime() Helper Method"},"headers":[{"level":2,"title":"Module Code","slug":"module-code","link":"#module-code","children":[]}],"relativePath":"modules/helpers/verify-run-time.md","lastUpdated":1672924880000}'),D={name:"modules/helpers/verify-run-time.md"},u=Object.assign(D,{setup(i){return(n,C)=>(l(),p("div",null,[s("h1",c,[o(e(n.$frontmatter.title)+" ",1),F]),y,t(a)]))}});export{d as __pageData,u as default};
