import{_ as o}from"./chunks/DocsPackageVersion.4bf47847.js";import{o as e,c as p,a as s,b as n,t as l,d as t,e as r}from"./app.8deca1e1.js";const c={id:"frontmatter-title",tabindex:"-1"},y=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=s("a",{href:"/vueventus/typescript/interfaces.html#groundtextcolors"},"<GroundTextColors>",-1),D=n(" type interface object, which has JavaScript CSS Style formatted "),F=s("code",null,"backgroundColor",-1),d=n(" and "),u=s("code",null,"color",-1),C=n(" properties."),A=s("p",null,[n("The "),s("code",null,"backgroundColor"),n(" property is assigned a random background color value, and the "),s("code",null,"color"),n(" property has an accessible contrast color for text on top of that background color.")],-1),b=n("The "),m=s("code",null,"color",-1),h=s("a",{href:"https://thebespokepixel.github.io/es-tinycolor/",target:"_blank",rel:"noopener noreferrer"},"tinycolor",-1),g=n(" (converted to esm by the excellent "),f=s("a",{href:"https://github.com/thebespokepixel/es-tinycolor",target:"_blank",rel:"noopener noreferrer"},"@thebespokepixel",-1),_=s("p",null,'The two optional properties allow you to specify the text color for both the "dark" and "light" text colors the helper outputs respectively.',-1),x=s("h2",{id:"import",tabindex:"-1"},[n("Import "),s("a",{class:"header-anchor",href:"#import","aria-hidden":"true"},"#")],-1),v=r(`<div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">randomGroundAndTextColors</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vueventus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-hidden="true">#</a></h2><p>Returns: <strong><code>&lt;GroundTextColors&gt; Object</code></strong> (<a href="/vueventus/typescript/interfaces.html#groundtextcolors">GroundTextColors Interface</a>)</p><table><thead><tr><th>Args</th><th style="text-align:center;">Type</th><th style="text-align:center;">Status</th><th>Description</th></tr></thead><tbody><tr><td>darkTextColor</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;">Optional</td><td>The color code value for randomly generated <strong>dark</strong> backgroundColor colors, where the default value is <code>#fff</code></td></tr><tr><td>lightTextColor</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;">Optional</td><td>The color code value for randomly generated <strong>light</strong> backgroundColor colors, where the default value is <code>#000</code></td></tr></tbody></table><h2 id="use-examples" tabindex="-1">Use Examples <a class="header-anchor" href="#use-examples" aria-hidden="true">#</a></h2><p>Pure JavaScript:</p><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">( </span><span style="color:#82AAFF;">randomGroundAndTextColors</span><span style="color:#A6ACCD;">() )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// returns (&lt;GroundTextColors&gt;):</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// { backgroundColor: &quot;#0135f7&quot;, color: &quot;#fff&quot; } or</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// { backgroundColor: &quot;#76a1cb&quot;, color: &quot;#000&quot; } etc...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">( </span><span style="color:#82AAFF;">randomGroundAndTextColors</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#f8f8f8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#111</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) )</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// returns (&lt;GroundTextColors&gt;):</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// { backgroundColor: &quot;#256228&quot;, color: &quot;#f8f8f8&quot; } or</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// { backgroundColor: &quot;#7597d7&quot;, color: &quot;#111&quot; } etc...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>In a Vue SFC:</p><div class="language-html line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- ./src/components/someComponent.vue --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">randomGroundAndTextColors</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vueventus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">p-5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">randomGroundAndTextColors()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        Random Style One</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">p-5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">randomGroundAndTextColors(&#39;#f8f8f8&#39;, &#39;#111&#39;)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        Random Style Two</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="module-code" tabindex="-1">Module Code <a class="header-anchor" href="#module-code" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// ./src/helpers/randomGroundAndTextColors.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tinycolor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@thebespokepixel/es-tinycolor</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> randomHex </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./randomHex</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">GroundTextColors</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../types/GroundTextColors</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">darkTextColor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#fff</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> lightTextColor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#000</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GroundTextColors</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">colors</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  backgroundColor</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> color</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ground</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">tinycolor</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">randomHex</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">groundIsDark</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ground</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isDark</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">colors</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">backgroundColor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">String</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">ground</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toHex</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">colors</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">color</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">groundIsDark</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">darkTextColor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">lightTextColor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">colors</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,11),G=JSON.parse('{"title":"randomGroundAndTextColors() Helper Method","description":"","frontmatter":{"title":"randomGroundAndTextColors() Helper Method"},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Arguments","slug":"arguments"},{"level":2,"title":"Use Examples","slug":"use-examples"},{"level":2,"title":"Module Code","slug":"module-code"}],"relativePath":"modules/helpers/random-ground-and-text-colors.md","lastUpdated":1660254494000}'),T={name:"modules/helpers/random-ground-and-text-colors.md"},w=Object.assign(T,{setup(E){return(a,k)=>(e(),p("div",null,[s("h1",c,[n(l(a.$frontmatter.title)+" ",1),y]),s("p",null,[n("The "+l(a.$frontmatter.title)+" module accepts two optional string arguments, and returns a ",1),i,D,F,d,u,C]),A,s("p",null,[b,m,n(" property value returned by the "+l(a.$frontmatter.title)+" uses the awesome ",1),h,g,f,n(') dependency under the hood to check if the random generated backgroundColor color is "dark" or "light". So the '+l(a.$frontmatter.title)+" will determine that for you depending on the random backgroundColor color that is generated.",1)]),_,x,s("p",null,"To import the "+l(a.$frontmatter.title)+":",1),v,t(o)]))}});export{G as __pageData,w as default};
