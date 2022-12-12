import{_ as c}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.2985ab4b.js";import{V as r}from"./chunks/VvConfig.c0b3657c.js";import{V as o}from"./chunks/VvInput.ec377514.js";import{o as i,c as u,a as s,b as n,t as e,u as l,d as a,e as p}from"./app.ba5baeac.js";import"./chunks/Anchors.f049ebc4.js";import"./chunks/Text.0efcfbbe.js";import"./chunks/Transitions.cc57681e.js";import"./chunks/Buttons.16d998aa.js";import"./chunks/Checkboxes.4124066b.js";import"./chunks/ColorModes.cf2ce130.js";import"./chunks/Inputs.f0037d89.js";import"./chunks/Radios.b252d274.js";import"./chunks/Selects.144dd1c3.js";import"./chunks/Textareas.4518d61e.js";const d={id:"frontmatter-title",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=s("h2",{id:"import",tabindex:"-1"},[n("Import "),s("a",{class:"header-anchor",href:"#import","aria-hidden":"true"},"#")],-1),F=s("a",{href:"/vueventus/guides/vueventus-cli.html"},"vueventus CLI",-1),h=s("a",{href:"/vueventus/guides/vv-update-cli.html"},"vv-update CLI",-1),m=p(`<div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// ./src/components/SomeComponent.vue</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> VvInput </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./vv/inputs/VvInput.vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>CLI installed components pass along VueVentus core functionalities via component props, so you can fully customize each prop default and applied classes resulting from default and component instance values, by overriding VvConfig defaults in your app <code>./src/app.vv.ts</code> file.</p><p>From there, you can extend, combine, and leverage the VueVentus styling management patterns as needed for your project-specific components, interfaces and content!</p></div>`,2),_=p(`<div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VvInput</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vueventus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Importing raw VueVentus library components will still apply your <code>./src/app.vv.ts</code> settings automatically through the Vue <code>provide()</code> and <code>inject()</code> pattern. All raw VueVentus library components automatically check for a provided <code>&quot;vv&quot;</code> keyed object with a <a href="/vueventus/typescript/interfaces.html#configvv">ConfigVv</a> type interface.</p></div><div class="warning custom-block"><p class="custom-block-title">CLI or Raw?</p><p>The main difference between raw library components and CLI installed components, is that you have no control over component defaults with raw library components. This is less flexible than using CLI installed components, because control of component defaults can greatly reduce the number of props a dev has to type for component instances, which reduces app code.</p><p>Meanwhile, the control CLI installed components provide through customizable defaults, opens up to a global level (styling management system) control for default component state characteristic values (particularly powerful with color and proportional size characteristics).</p></div><h2 id="emits-update-modelvalue" tabindex="-1">Emits: update:modelValue <a class="header-anchor" href="#emits-update-modelvalue" aria-hidden="true">#</a></h2><p>Emits: <strong><code>update:modelValue</code></strong><br> Emit Value Type: <strong><code>String</code></strong></p>`,5),b=s("code",null,"update:modelValue",-1),v={class:"tip custom-block"},C=s("p",{class:"custom-block-title"},"TIP",-1),f=s("code",null,"v-model",-1),g=p(`<h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">&lt;!-- ./src/components/AppInput.vue --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VvInput</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vueventus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> someValue </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvInput</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">someValue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="prop-color" tabindex="-1">Prop: color <a class="header-anchor" href="#prop-color" aria-hidden="true">#</a></h2>`,3),A=s("strong",null,[s("code",null,"String")],-1),E=s("br",null,null,-1),T=s("code",null,"color",-1),V=s("code",null,"color",-1),x=s("code",null,"palette",-1),I=p(`<h3 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvInput</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mb-2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvInput</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mb-2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvInput</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mb-2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-hidden="true">#</a></h3>`,3),q={class:"w-full pt-4"},S=s("h2",{id:"prop-palette",tabindex:"-1"},[n("Prop: palette "),s("a",{class:"header-anchor",href:"#prop-palette","aria-hidden":"true"},"#")],-1),k=s("strong",null,[s("code",null,"String")],-1),w=s("br",null,null,-1),z=s("code",null,"palette",-1),P=s("code",null,"color",-1),R=s("code",null,"palette",-1),N=p(`<h3 id="syntax-1" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-1" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvInput</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">palette</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">underlined</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mb-2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvInput</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">palette</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">underlined</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mb-2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvInput</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">palette</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">underlined</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mb-2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result-1" tabindex="-1">Result <a class="header-anchor" href="#result-1" aria-hidden="true">#</a></h3>`,3),$={class:"w-full pt-4"},L=s("h2",{id:"prop-size",tabindex:"-1"},[n("Prop: size "),s("a",{class:"header-anchor",href:"#prop-size","aria-hidden":"true"},"#")],-1),j=s("strong",null,[s("code",null,"String")],-1),M=s("br",null,null,-1),B=s("code",null,"size",-1),O=p(`<h3 id="syntax-2" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-2" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvInput</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Size: lg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="result-2" tabindex="-1">Result <a class="header-anchor" href="#result-2" aria-hidden="true">#</a></h3>`,3),H={class:"w-full pt-4"},J={class:"details custom-block"},U=s("summary",null,"size prop input size examples",-1),Y={class:"flex flex-wrap items-center gap-2 pt-4"},G=s("h2",{id:"prop-type",tabindex:"-1"},[n("Prop: type "),s("a",{class:"header-anchor",href:"#prop-type","aria-hidden":"true"},"#")],-1),K=s("strong",null,[s("code",null,"String")],-1),Q=s("br",null,null,-1),W=s("a",{href:"/vueventus/components/prop-validators.html#validinputtypes"},"ValidInputTypes Module",-1),X=s("br",null,null,-1),Z=s("code",null,"type",-1),ss=s("code",null,"type",-1),ns=s("a",{href:"/vueventus/components/prop-validators.html#validinputtypes"},"ValidInputTypes Module",-1),ls=p(`<h3 id="syntax-3" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-3" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvInput</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">email</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Type: email</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="result-3" tabindex="-1">Result <a class="header-anchor" href="#result-3" aria-hidden="true">#</a></h3>`,3),es={class:"w-full pt-4"},as=s("h2",{id:"slot-none",tabindex:"-1"},[n("Slot: None "),s("a",{class:"header-anchor",href:"#slot-none","aria-hidden":"true"},"#")],-1),os={class:"danger custom-block"},ts=s("p",{class:"custom-block-title"},"NO SLOT AVAILABLE",-1),ps=s("code",null,"<input>",-1),Es=JSON.parse('{"title":"VvInput Component","description":"","frontmatter":{"title":"VvInput Component"},"headers":[{"level":2,"title":"Import","slug":"import","link":"#import","children":[]},{"level":2,"title":"Emits: update:modelValue","slug":"emits-update-modelvalue","link":"#emits-update-modelvalue","children":[{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"Prop: color","slug":"prop-color","link":"#prop-color","children":[{"level":3,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":3,"title":"Result","slug":"result","link":"#result","children":[]}]},{"level":2,"title":"Prop: palette","slug":"prop-palette","link":"#prop-palette","children":[{"level":3,"title":"Syntax","slug":"syntax-1","link":"#syntax-1","children":[]},{"level":3,"title":"Result","slug":"result-1","link":"#result-1","children":[]}]},{"level":2,"title":"Prop: size","slug":"prop-size","link":"#prop-size","children":[{"level":3,"title":"Syntax","slug":"syntax-2","link":"#syntax-2","children":[]},{"level":3,"title":"Result","slug":"result-2","link":"#result-2","children":[]}]},{"level":2,"title":"Prop: type","slug":"prop-type","link":"#prop-type","children":[{"level":3,"title":"Syntax","slug":"syntax-3","link":"#syntax-3","children":[]},{"level":3,"title":"Result","slug":"result-3","link":"#result-3","children":[]}]},{"level":2,"title":"Slot: None","slug":"slot-none","link":"#slot-none","children":[]}],"relativePath":"components/inputs/vv-input.md","lastUpdated":1661201928000}'),rs={name:"components/inputs/vv-input.md"},Ts=Object.assign(rs,{setup(cs){return(t,is)=>(i(),u("div",null,[s("h1",d,[n(e(t.$frontmatter.title)+" ",1),D]),s("p",null,"The "+e(t.$frontmatter.title)+" provides a set of props and config module based settings to make a validation ready set of input elements for applications with an extremely DRY implementation of atomic classes.",1),y,s("p",null,[n("To import a "+e(t.$frontmatter.title)+" installed by the ",1),F,n(" or "),h,n(":")]),m,s("p",null,"Alternatively, you can install the raw library "+e(t.$frontmatter.title)+" with:",1),_,s("p",null,[n("The "+e(t.$frontmatter.title)+" emits a standard Vue key of ",1),b,n(" upon input event changes of the component's generated input value attribute.")]),s("div",v,[C,s("p",null,[n("This means when using the "+e(t.$frontmatter.title)+" downstream in an end application, you can safely use Vue's ",1),f,n(" binding to two-way bind a reactive value through your downstream component and into (and back from) the "+e(t.$frontmatter.title)+" instance.",1)])]),g,s("p",null,[n("Type: "),A,E,n(" Default: "),s("strong",null,[s("code",null,'"'+e(l(r).defaults.VvInput.color)+'"',1)])]),s("p",null,[n("The "+e(t.$frontmatter.title)+" ",1),T,n(" prop sets the component instance color based both on the "),V,n(" prop and the "),x,n(" prop value.")]),I,s("div",q,[a(l(o),{color:"default",class:"mb-2"}),a(l(o),{color:"error",class:"mb-2"}),a(l(o),{color:"success",class:"mb-2"})]),S,s("p",null,[n("Type: "),k,w,n(" Default: "),s("strong",null,[s("code",null,'"'+e(l(r).defaults.VvInput.palette)+'"',1)])]),s("p",null,[n("The "+e(t.$frontmatter.title)+" ",1),z,n(" prop sets the component instance palette based both on the "),P,n(" prop and the "),R,n(" prop value.")]),N,s("div",$,[a(l(o),{palette:"underlined",color:"default",class:"mb-2",placeholder:"default",style:{"border-bottom-style":"solid"}}),a(l(o),{palette:"underlined",color:"error",class:"mb-2",placeholder:"error",style:{"border-bottom-style":"solid"}}),a(l(o),{palette:"underlined",color:"success",class:"mb-2",placeholder:"success",style:{"border-bottom-style":"solid"}})]),L,s("p",null,[n("Type: "),j,M,n(" Default: "),s("strong",null,[s("code",null,'"'+e(l(r).defaults.VvInput.size)+'"',1)])]),s("p",null,[n("The "+e(t.$frontmatter.title)+" ",1),B,n(" prop sets the component instance size-based classes which in the context of inputs typically involves padding and font size atomic classes.")]),O,s("div",H,[a(l(o),{size:"lg",placeholder:"Size: lg"})]),s("details",J,[U,s("div",Y,[a(l(o),{size:"xs",placeholder:"Size: xs"}),a(l(o),{size:"sm",placeholder:"Size: sm"}),a(l(o),{size:"md",placeholder:"Size: md"}),a(l(o),{size:"lg",placeholder:"Size: lg"}),a(l(o),{size:"xl",placeholder:"Size: xl"}),a(l(o),{size:"2xl",placeholder:"Size: 2xl"})])]),G,s("p",null,[n("Type: "),K,Q,n(" Valid Values: "),W,X,n(" Default: "),s("strong",null,[s("code",null,'"'+e(l(r).defaults.VvInput.type)+'"',1)])]),s("p",null,[n("The "+e(t.$frontmatter.title)+" ",1),Z,n(" prop sets the input HTML "),ss,n(" attribute to a value that should be present in the "),ns,n(" to be a valid value for this component.")]),ls,s("div",es,[a(l(o),{type:"email",placeholder:"Type: email"})]),as,s("div",os,[ts,s("p",null,[n("The "+e(t.$frontmatter.title)+" does not have Vue slot option, because an ",1),ps,n(" element is a HTML Empty Element, which cannot have children or child nodes.")])]),a(c)]))}});export{Es as __pageData,Ts as default};
