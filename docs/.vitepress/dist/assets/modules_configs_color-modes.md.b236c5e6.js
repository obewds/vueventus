import{_ as t}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.27a4453a.js";import{C as e}from"./chunks/ColorModes.cf2ce130.js";import{o as r,c,a as s,b as a,t as n,u as o,d as i,e as l}from"./app.c9eb278d.js";const D={id:"frontmatter-title",tabindex:"-1"},d=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=s("h2",{id:"app-vv-ts-use",tabindex:"-1"},[a("app.vv.ts Use "),s("a",{class:"header-anchor",href:"#app-vv-ts-use","aria-hidden":"true"},"#")],-1),F=l(`<p>Here&#39;s what that generally looks like in practice in a real world app context:</p><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">// ./src/app.vv.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VvConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vueventus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ConfigVv</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vueventus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> appVv</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ConfigVv</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> VvConfig</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">appVv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">colorModes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">someProperty </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">some-value</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> appVv</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2>`,3),C=l(`<div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ColorModes</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vueventus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="colormodes-dark-ground" tabindex="-1">ColorModes.dark.ground <a class="header-anchor" href="#colormodes-dark-ground" aria-hidden="true">#</a></h2>`,2),u=a("Type: "),h=s("strong",null,[s("code",null,"String")],-1),A=s("br",null,null,-1),m=a(" Default: "),b=l(`<p>The <code>ColorModes.dark.ground</code> parameter is meant to isolate the CSS ground (background) color class for an application&#39;s dark mode color state.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">// ./src/app.vv.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">appVv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">colorModes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dark</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ground </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="colormodes-dark-hex" tabindex="-1">ColorModes.dark.hex <a class="header-anchor" href="#colormodes-dark-hex" aria-hidden="true">#</a></h2>`,4),_=a("Type: "),g=s("strong",null,[s("code",null,"String")],-1),v=s("br",null,null,-1),x=a(" Default: "),f=l(`<p>The <code>ColorModes.dark.hex</code> parameter is meant to isolate the CSS ground (background) hex color code value for an application&#39;s dark mode mode state.</p><h3 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-hidden="true">#</a></h3><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">// ./src/app.vv.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">appVv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">colorModes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dark</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">hex </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="colormodes-dark-text" tabindex="-1">ColorModes.dark.text <a class="header-anchor" href="#colormodes-dark-text" aria-hidden="true">#</a></h2>`,4),T=a("Type: "),E=s("strong",null,[s("code",null,"String")],-1),S=s("br",null,null,-1),M=a(" Default: "),k=l(`<p>The <code>ColorModes.dark.text</code> parameter is meant to isolate the CSS text color class for an application&#39;s dark mode color state.</p><h3 id="example-2" tabindex="-1">Example <a class="header-anchor" href="#example-2" aria-hidden="true">#</a></h3><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">// ./src/app.vv.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">appVv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">colorModes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dark</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">text </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="colormodes-dark-title" tabindex="-1">ColorModes.dark.title <a class="header-anchor" href="#colormodes-dark-title" aria-hidden="true">#</a></h2>`,4),V=a("Type: "),w=s("strong",null,[s("code",null,"String")],-1),j=s("br",null,null,-1),I=a(" Default: "),P=l(`<p>The <code>ColorModes.dark.title</code> parameter is meant to describe the color mode state to an end user for accessibility reasons (which can often be as simple as a <code>title</code> HTML attribute)</p><h3 id="example-3" tabindex="-1">Example <a class="header-anchor" href="#example-3" aria-hidden="true">#</a></h3><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">// ./src/app.vv.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">appVv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">colorModes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dark</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">title </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="colormodes-light-ground" tabindex="-1">ColorModes.light.ground <a class="header-anchor" href="#colormodes-light-ground" aria-hidden="true">#</a></h2>`,4),N=a("Type: "),R=s("strong",null,[s("code",null,"String")],-1),B=s("br",null,null,-1),$=a(" Default: "),q=l(`<p>The <code>ColorModes.light.ground</code> parameter is meant to isolate the CSS ground (background) color class for an application&#39;s light mode color state.</p><h3 id="example-4" tabindex="-1">Example <a class="header-anchor" href="#example-4" aria-hidden="true">#</a></h3><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">// ./src/app.vv.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">appVv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">colorModes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">light</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ground </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="colormodes-light-hex" tabindex="-1">ColorModes.light.hex <a class="header-anchor" href="#colormodes-light-hex" aria-hidden="true">#</a></h2>`,4),H=a("Type: "),L=s("strong",null,[s("code",null,"String")],-1),U=s("br",null,null,-1),O=a(" Default: "),J=l(`<p>The <code>ColorModes.light.hex</code> parameter is meant to isolate the CSS ground (background) hex color code value for an application&#39;s light mode mode state.</p><h3 id="example-5" tabindex="-1">Example <a class="header-anchor" href="#example-5" aria-hidden="true">#</a></h3><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">// ./src/app.vv.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">appVv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">colorModes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">light</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">hex </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="colormodes-light-text" tabindex="-1">ColorModes.light.text <a class="header-anchor" href="#colormodes-light-text" aria-hidden="true">#</a></h2>`,4),Y=a("Type: "),z=s("strong",null,[s("code",null,"String")],-1),G=s("br",null,null,-1),K=a(" Default: "),Q=l(`<p>The <code>ColorModes.light.text</code> parameter is meant to isolate the CSS text color class for an application&#39;s light mode color state.</p><h3 id="example-6" tabindex="-1">Example <a class="header-anchor" href="#example-6" aria-hidden="true">#</a></h3><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">// ./src/app.vv.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">appVv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">colorModes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">light</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">text </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="colormodes-light-title" tabindex="-1">ColorModes.light.title <a class="header-anchor" href="#colormodes-light-title" aria-hidden="true">#</a></h2>`,4),W=a("Type: "),X=s("strong",null,[s("code",null,"String")],-1),Z=s("br",null,null,-1),ss=a(" Default: "),as=l(`<p>The <code>ColorModes.light.title</code> parameter is meant to describe the color mode state to an end user for accessibility reasons (which can often be as simple as a <code>title</code> HTML attribute)</p><h3 id="example-7" tabindex="-1">Example <a class="header-anchor" href="#example-7" aria-hidden="true">#</a></h3><div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">// ./src/app.vv.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">appVv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">colorModes</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">light</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">title </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="colormodes-base" tabindex="-1">ColorModes.base() <a class="header-anchor" href="#colormodes-base" aria-hidden="true">#</a></h2>`,4),ns=a("Returns: "),ls=s("strong",null,[s("code",null,"String")],-1),es=s("br",null,null,-1),os=a(" Default: "),ps=a("The "),ts=s("code",null,"ColorModes.base()",-1),rs=a(" method returns a joined "),cs=s("code",null,"String",-1),is=l(`<h3 id="example-8" tabindex="-1">Example <a class="header-anchor" href="#example-8" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#676E95;">&lt;!-- ./src/components/SomeComponent.vue --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> appVv </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../app.vv</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> someVar </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> appVv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">colorModes</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">base</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">someVar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        This div now has all of the base color mode classes!</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="module-code" tabindex="-1">Module Code <a class="header-anchor" href="#module-code" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">// ./src/configs/ColorModes.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ConfigColorMode</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../types/ConfigColorMode</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> &lt;</span><span style="color:#FFCB6B;">ConfigColorMode</span><span style="color:#A6ACCD;">&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">dark</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">ground</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dark:bg-gray-900</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">hex</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#242426</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dark:text-gray-100</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Enable Dark Mode</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">light</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">ground</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bg-gray-100</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">hex</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#e1e1e3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text-gray-900</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Enable Light Mode</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">base</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">light</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ground</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">light</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">dark</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ground</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">dark</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        ]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">\\s</span><span style="color:#89DDFF;">+/</span><span style="color:#F78C6C;">g</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">trim</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,4),hs=JSON.parse('{"title":"ColorModes Config Module","description":"","frontmatter":{"title":"ColorModes Config Module"},"headers":[{"level":2,"title":"app.vv.ts Use","slug":"app-vv-ts-use"},{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"ColorModes.dark.ground","slug":"colormodes-dark-ground"},{"level":3,"title":"Example","slug":"example"},{"level":2,"title":"ColorModes.dark.hex","slug":"colormodes-dark-hex"},{"level":3,"title":"Example","slug":"example-1"},{"level":2,"title":"ColorModes.dark.text","slug":"colormodes-dark-text"},{"level":3,"title":"Example","slug":"example-2"},{"level":2,"title":"ColorModes.dark.title","slug":"colormodes-dark-title"},{"level":3,"title":"Example","slug":"example-3"},{"level":2,"title":"ColorModes.light.ground","slug":"colormodes-light-ground"},{"level":3,"title":"Example","slug":"example-4"},{"level":2,"title":"ColorModes.light.hex","slug":"colormodes-light-hex"},{"level":3,"title":"Example","slug":"example-5"},{"level":2,"title":"ColorModes.light.text","slug":"colormodes-light-text"},{"level":3,"title":"Example","slug":"example-6"},{"level":2,"title":"ColorModes.light.title","slug":"colormodes-light-title"},{"level":3,"title":"Example","slug":"example-7"},{"level":2,"title":"ColorModes.base()","slug":"colormodes-base"},{"level":3,"title":"Example","slug":"example-8"},{"level":2,"title":"Module Code","slug":"module-code"}],"relativePath":"modules/configs/color-modes.md","lastUpdated":1660177665000}'),Ds={name:"modules/configs/color-modes.md"},As=Object.assign(Ds,{setup(ds){return(p,ys)=>(r(),c("div",null,[s("h1",D,[a(n(p.$frontmatter.title)+" ",1),d]),s("p",null,"The "+n(p.$frontmatter.title)+" holds your application's default/prototypal Tailwind CSS classes and color codes for the foundation of the dark and light mode options throughout VueVentus and for use in end applications.",1),y,s("p",null,"You'll usually work with the "+n(p.$frontmatter.title)+" after it's already been merged into VueVentus VvConfig data.",1),F,s("p",null,"However, if you need to import the compiled library version of the "+n(p.$frontmatter.title)+", you can use:",1),C,s("p",null,[u,h,A,m,s("strong",null,[s("code",null,'"'+n(o(e).dark.ground)+'"',1)])]),b,s("p",null,[_,g,v,x,s("strong",null,[s("code",null,'"'+n(o(e).dark.hex)+'"',1)])]),f,s("p",null,[T,E,S,M,s("strong",null,[s("code",null,'"'+n(o(e).dark.text)+'"',1)])]),k,s("p",null,[V,w,j,I,s("strong",null,[s("code",null,'"'+n(o(e).dark.title)+'"',1)])]),P,s("p",null,[N,R,B,$,s("strong",null,[s("code",null,'"'+n(o(e).light.ground)+'"',1)])]),q,s("p",null,[H,L,U,O,s("strong",null,[s("code",null,'"'+n(o(e).light.hex)+'"',1)])]),J,s("p",null,[Y,z,G,K,s("strong",null,[s("code",null,'"'+n(o(e).light.text)+'"',1)])]),Q,s("p",null,[W,X,Z,ss,s("strong",null,[s("code",null,'"'+n(o(e).light.title)+'"',1)])]),as,s("p",null,[ns,ls,es,os,s("strong",null,[s("code",null,'"'+n(o(e).base())+'"',1)])]),s("p",null,[ps,ts,rs,cs,a(" of the atomic classes within the various base properties of the "+n(p.$frontmatter.title)+" object.",1)]),is,i(t)]))}});export{hs as __pageData,As as default};