import{_ as d}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.3e8eb2e2.js";import{V as c}from"./chunks/VvConfig.3c57a8a8.js";import{V as a}from"./chunks/VvEl.6f91bb87.js";import{o as i,c as u,z as s,a as e,t as n,b as o,G as l,B as t,O as p}from"./chunks/framework.d4e334f8.js";import"./chunks/Anchors.8bdcb837.js";import"./chunks/Text.d88c79dd.js";import"./chunks/Transitions.1d316f13.js";import"./chunks/Buttons.03bca295.js";import"./chunks/Checkboxes.344e9626.js";import"./chunks/ColorModes.4904e81c.js";import"./chunks/Inputs.1b95f59c.js";import"./chunks/Listboxes.e439c03d.js";import"./chunks/Lists.c1360393.js";import"./chunks/Radios.4e71a451.js";import"./chunks/Selects.f19d72d8.js";import"./chunks/Textareas.9fe3679a.js";const h={id:"frontmatter-title",tabindex:"-1"},_=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),m=s("h2",{id:"import",tabindex:"-1"},[e("Import "),s("a",{class:"header-anchor",href:"#import","aria-label":'Permalink to "Import"'},"​")],-1),y=s("a",{href:"/vueventus/guides/vueventus-cli.html"},"vueventus CLI",-1),g=s("a",{href:"/vueventus/guides/vv-update-cli.html"},"vv-update CLI",-1),D=p(`<div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// ./src/components/SomeComponent.vue</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> VvEl </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./vv/elements/VvEl.vue</span><span style="color:#89DDFF;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>CLI installed components pass along VueVentus core functionalities via component props, so you can fully customize each prop default and applied classes resulting from default and component instance values, by overriding VvConfig defaults in your app <code>./src/app.vv.ts</code> file.</p><p>From there, you can extend, combine, and leverage the VueVentus styling management patterns as needed for your project-specific components, interfaces and content!</p></div>`,2),b=p('<div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VvEl</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vueventus</span><span style="color:#89DDFF;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Importing raw VueVentus library components will still apply your <code>./src/app.vv.ts</code> settings automatically through the Vue <code>provide()</code> and <code>inject()</code> pattern. All raw VueVentus library components automatically check for a provided <code>&quot;vv&quot;</code> keyed object with a <a href="/vueventus/typescript/interfaces.html#configvv">ConfigVv</a> type interface.</p></div><div class="warning custom-block"><p class="custom-block-title">CLI or Raw?</p><p>The main difference between raw library components and CLI installed components, is that you have no control over component defaults with raw library components. This is less flexible than using CLI installed components, because control of component defaults can greatly reduce the number of props a dev has to type for component instances, which reduces app code.</p><p>Meanwhile, the control CLI installed components provide through customizable defaults, opens up to a global level (styling management system) control for default component state characteristic values (particularly powerful with color and proportional size characteristics).</p></div><h2 id="prop-borderpalette" tabindex="-1">Prop: borderPalette <a class="header-anchor" href="#prop-borderpalette" aria-label="Permalink to &quot;Prop: borderPalette&quot;">​</a></h2>',4),f=s("strong",null,[s("code",null,"String")],-1),F=s("br",null,null,-1),v=s("code",null,"borderPalette",-1),x=s("code",null,"borderColor",-1),C=s("code",null,"borderPalette",-1),T=p(`<h3 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvEl</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">border-palette</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">border p-2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    VvEl</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvEl</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-label="Permalink to &quot;Result&quot;">​</a></h3>`,3),E={class:"w-full pt-4"},V=s("h3",{id:"typing-for-downstream-component-instances",tabindex:"-1"},[e("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances","aria-label":'Permalink to "Typing for Downstream Component Instances"'},"​")],-1),P=s("p",null,"Coming Soon!",-1),A=s("h2",{id:"prop-bordercolor",tabindex:"-1"},[e("Prop: borderColor "),s("a",{class:"header-anchor",href:"#prop-bordercolor","aria-label":'Permalink to "Prop: borderColor"'},"​")],-1),w=s("strong",null,[s("code",null,"String")],-1),S=s("br",null,null,-1),q=s("code",null,"borderColor",-1),k=s("code",null,"borderPalette",-1),I=s("code",null,"borderColor",-1),z=p(`<h3 id="syntax-1" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-1" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvEl</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">border-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">border p-2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    VvEl</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvEl</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result-1" tabindex="-1">Result <a class="header-anchor" href="#result-1" aria-label="Permalink to &quot;Result&quot;">​</a></h3>`,3),R={class:"w-full pt-4"},N={class:"details custom-block"},$=s("summary",null,"borderColor prop defaults examples",-1),L={class:"flex flex-col space-y-2 w-full pt-4"},j=s("h3",{id:"typing-for-downstream-component-instances-1",tabindex:"-1"},[e("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances-1","aria-label":'Permalink to "Typing for Downstream Component Instances"'},"​")],-1),B=s("p",null,"Coming Soon!",-1),M=s("h2",{id:"prop-debug",tabindex:"-1"},[e("Prop: debug "),s("a",{class:"header-anchor",href:"#prop-debug","aria-label":'Permalink to "Prop: debug"'},"​")],-1),O=s("strong",null,[s("code",null,"Boolean")],-1),H=s("br",null,null,-1),G=s("code",null,"debug",-1),J=s("code",null,"data-vv-el-",-1),U=p(`<h3 id="syntax-2" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-2" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvEl</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:debug</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    VvEl debug</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvEl</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result-2" tabindex="-1">Result <a class="header-anchor" href="#result-2" aria-label="Permalink to &quot;Result&quot;">​</a></h3>`,3),W={class:"w-full pt-4"},K=s("h2",{id:"prop-groundpalette",tabindex:"-1"},[e("Prop: groundPalette "),s("a",{class:"header-anchor",href:"#prop-groundpalette","aria-label":'Permalink to "Prop: groundPalette"'},"​")],-1),Q=s("strong",null,[s("code",null,"String")],-1),X=s("br",null,null,-1),Y=s("code",null,"groundPalette",-1),Z=s("code",null,"groundColor",-1),ss=s("code",null,"groundPalette",-1),es=p(`<h3 id="syntax-3" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-3" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvEl</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ground-palette</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ground-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">p-2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    VvEl</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvEl</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result-3" tabindex="-1">Result <a class="header-anchor" href="#result-3" aria-label="Permalink to &quot;Result&quot;">​</a></h3>`,3),os={class:"w-full pt-4"},ls={class:"details custom-block"},as=s("summary",null,'groundPalette "default" palette examples',-1),ts={class:"flex flex-col space-y-2 w-full pt-4"},ns={class:"details custom-block"},rs=s("summary",null,'groundPalette "console" palette examples',-1),ps={class:"flex flex-col space-y-2 w-full pt-4"},cs={class:"details custom-block"},ds=s("summary",null,'groundPalette "monochromatic" palette examples',-1),is={class:"flex flex-col space-y-2 w-full pt-4"},us={class:"details custom-block"},hs=s("summary",null,'groundPalette "pastel" palette examples',-1),_s={class:"flex flex-col space-y-2 w-full pt-4"},ms=s("h3",{id:"typing-for-downstream-component-instances-2",tabindex:"-1"},[e("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances-2","aria-label":'Permalink to "Typing for Downstream Component Instances"'},"​")],-1),ys=s("p",null,"Coming Soon!",-1),gs=s("h2",{id:"prop-groundcolor",tabindex:"-1"},[e("Prop: groundColor "),s("a",{class:"header-anchor",href:"#prop-groundcolor","aria-label":'Permalink to "Prop: groundColor"'},"​")],-1),Ds=s("strong",null,[s("code",null,"String")],-1),bs=s("br",null,null,-1),fs=s("code",null,"groundColor",-1),Fs=s("code",null,"groundPalette",-1),vs=s("code",null,"groundColor",-1),xs=p(`<h3 id="syntax-4" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-4" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvEl</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ground-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">secondary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">p-2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    VvEl</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvEl</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result-4" tabindex="-1">Result <a class="header-anchor" href="#result-4" aria-label="Permalink to &quot;Result&quot;">​</a></h3>`,3),Cs={class:"w-full pt-4"},Ts={class:"details custom-block"},Es=s("summary",null,"groundColor prop defaults examples",-1),Vs={class:"flex flex-col space-y-2 w-full pt-4"},Ps=s("h3",{id:"typing-for-downstream-component-instances-3",tabindex:"-1"},[e("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances-3","aria-label":'Permalink to "Typing for Downstream Component Instances"'},"​")],-1),As=s("p",null,"Coming Soon!",-1),ws=s("h2",{id:"prop-size",tabindex:"-1"},[e("Prop: size "),s("a",{class:"header-anchor",href:"#prop-size","aria-label":'Permalink to "Prop: size"'},"​")],-1),Ss=s("strong",null,[s("code",null,"String")],-1),qs=s("br",null,null,-1),ks=s("code",null,"size",-1),Is=p(`<h3 id="syntax-5" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-5" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvEl</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Large VvEl Text</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvEl</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result-5" tabindex="-1">Result <a class="header-anchor" href="#result-5" aria-label="Permalink to &quot;Result&quot;">​</a></h3>`,3),zs={class:"w-full pt-4"},Rs={class:"details custom-block"},Ns=s("summary",null,"size prop VvEl size examples",-1),$s={class:"pt-4"},Ls=s("h3",{id:"typing-for-downstream-component-instances-4",tabindex:"-1"},[e("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances-4","aria-label":'Permalink to "Typing for Downstream Component Instances"'},"​")],-1),js=s("p",null,"Coming Soon!",-1),Bs=s("h2",{id:"prop-tag",tabindex:"-1"},[e("Prop: tag "),s("a",{class:"header-anchor",href:"#prop-tag","aria-label":'Permalink to "Prop: tag"'},"​")],-1),Ms=s("strong",null,[s("code",null,"String")],-1),Os=s("br",null,null,-1),Hs=s("a",{href:"/vueventus/components/prop-validators.html#validelementtags"},"ValidElementTags Module",-1),Gs=s("br",null,null,-1),Js=s("code",null,"tag",-1),Us=s("code",null,"tag",-1),Ws=s("a",{href:"/vueventus/components/prop-validators.html#validelementtags"},"ValidElementTags Module",-1),Ks=p(`<h3 id="syntax-6" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-6" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvEl</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tag</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">span</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">border-b-2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    VvEl</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvEl</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result-6" tabindex="-1">Result <a class="header-anchor" href="#result-6" aria-label="Permalink to &quot;Result&quot;">​</a></h3>`,3),Qs={class:"w-full pt-4"},Xs=s("h3",{id:"typing-for-downstream-component-instances-5",tabindex:"-1"},[e("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances-5","aria-label":'Permalink to "Typing for Downstream Component Instances"'},"​")],-1),Ys=s("p",null,"Coming Soon!",-1),Zs=s("h2",{id:"prop-textpalette",tabindex:"-1"},[e("Prop: textPalette "),s("a",{class:"header-anchor",href:"#prop-textpalette","aria-label":'Permalink to "Prop: textPalette"'},"​")],-1),se=s("strong",null,[s("code",null,"String")],-1),ee=s("br",null,null,-1),oe=s("code",null,"textPalette",-1),le=s("code",null,"textColor",-1),ae=s("code",null,"textPalette",-1),te=p(`<h3 id="syntax-7" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-7" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvEl</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text-palette</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    VvEl</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvEl</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result-7" tabindex="-1">Result <a class="header-anchor" href="#result-7" aria-label="Permalink to &quot;Result&quot;">​</a></h3>`,3),ne={class:"w-full pt-4"},re=s("h3",{id:"typing-for-downstream-component-instances-6",tabindex:"-1"},[e("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances-6","aria-label":'Permalink to "Typing for Downstream Component Instances"'},"​")],-1),pe=s("p",null,"Coming Soon!",-1),ce=s("h2",{id:"prop-textcolor",tabindex:"-1"},[e("Prop: textColor "),s("a",{class:"header-anchor",href:"#prop-textcolor","aria-label":'Permalink to "Prop: textColor"'},"​")],-1),de=s("strong",null,[s("code",null,"String")],-1),ie=s("br",null,null,-1),ue=s("code",null,"textColor",-1),he=s("code",null,"textPalette",-1),_e=s("code",null,"textColor",-1),me=p(`<h3 id="syntax-8" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-8" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvEl</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">secondary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    VvEl</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvEl</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result-8" tabindex="-1">Result <a class="header-anchor" href="#result-8" aria-label="Permalink to &quot;Result&quot;">​</a></h3>`,3),ye={class:"w-full pt-4"},ge={class:"details custom-block"},De=s("summary",null,"textColor prop defaults examples",-1),be={class:"flex flex-col space-y-2 w-full pt-4"},fe=s("h3",{id:"typing-for-downstream-component-instances-7",tabindex:"-1"},[e("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances-7","aria-label":'Permalink to "Typing for Downstream Component Instances"'},"​")],-1),Fe=s("p",null,"Coming Soon!",-1),ve=s("h2",{id:"slot-default",tabindex:"-1"},[e("Slot: #default "),s("a",{class:"header-anchor",href:"#slot-default","aria-label":'Permalink to "Slot: #default"'},"​")],-1),xe=s("code",null,"#default",-1),Ce=p(`<h3 id="syntax-9" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-9" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvEl</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Slot </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text-red-500 dark:text-red-300</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Content</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvEl</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result-9" tabindex="-1">Result <a class="header-anchor" href="#result-9" aria-label="Permalink to &quot;Result&quot;">​</a></h3>`,3),Te={class:"w-full pt-4"},Ee=s("span",{class:"text-red-500 dark:text-red-300"},"Content",-1),Je=JSON.parse('{"title":"VvEl Component","description":"","frontmatter":{"title":"VvEl Component"},"headers":[],"relativePath":"components/elements/vv-el.md","lastUpdated":1681774422000}'),Ve={name:"components/elements/vv-el.md"},Ue=Object.assign(Ve,{setup(Pe){return(r,Ae)=>(i(),u("div",null,[s("h1",h,[e(n(r.$frontmatter.title)+" ",1),_]),s("p",null,"The "+n(r.$frontmatter.title)+" provides a variety of props and config module based settings to make a variety of element configurations for any element itself or as a parent, child, or sibling element with color contextual relations with other contextual elements.",1),m,s("p",null,[e("To import a "+n(r.$frontmatter.title)+" installed by the ",1),y,e(" or "),g,e(":")]),D,s("p",null,"Alternatively, you can install the raw library "+n(r.$frontmatter.title)+" with:",1),b,s("p",null,[e("Type: "),f,F,e(" Default: "),s("strong",null,[s("code",null,'"'+n(o(c).defaults.VvEl.borderPalette)+'"',1)])]),s("p",null,[e("The "+n(r.$frontmatter.title)+" ",1),v,e(" prop sets the component instance border color based both on the "),x,e(" prop and the "),C,e(" prop value together.")]),T,s("div",E,[l(o(a),{"border-palette":"default",class:"border p-2"},{default:t(()=>[e(" VvEl ")]),_:1})]),V,P,A,s("p",null,[e("Type: "),w,S,e(" Default: "),s("strong",null,[s("code",null,'"'+n(o(c).defaults.VvEl.borderColor)+'"',1)])]),s("p",null,[e("The "+n(r.$frontmatter.title)+" ",1),q,e(" prop sets the component instance border color based both on the "),k,e(" prop and the "),I,e(" prop value together.")]),z,s("div",R,[l(o(a),{"border-color":"error",class:"border p-2"},{default:t(()=>[e(" VvEl ")]),_:1})]),s("details",N,[$,s("div",L,[l(o(a),{"border-color":"default",class:"border p-2"},{default:t(()=>[e(' border-color="default" ')]),_:1}),l(o(a),{"border-color":"error",class:"border p-2"},{default:t(()=>[e(' border-color="error" ')]),_:1}),l(o(a),{"border-color":"primary",class:"border p-2"},{default:t(()=>[e(' border-color="primary" ')]),_:1}),l(o(a),{"border-color":"secondary",class:"border p-2"},{default:t(()=>[e(' border-color="secondary" ')]),_:1}),l(o(a),{"border-color":"success",class:"border p-2"},{default:t(()=>[e(' border-color="success" ')]),_:1})])]),j,B,M,s("p",null,[e("Type: "),O,H,e(" Default: "),s("strong",null,[s("code",null,n(o(c).defaults.VvEl.debug),1)])]),s("p",null,[e("The "+n(r.$frontmatter.title)+" ",1),G,e(" prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through "),J,e(" prefixed HTML attributes.")]),U,s("div",W,[l(o(a),{debug:!0},{default:t(()=>[e(" VvEl debug ")]),_:1})]),K,s("p",null,[e("Type: "),Q,X,e(" Default: "),s("strong",null,[s("code",null,'"'+n(o(c).defaults.VvEl.groundPalette)+'"',1)])]),s("p",null,[e("The "+n(r.$frontmatter.title)+" ",1),Y,e(" prop sets the component instance border color based both on the "),Z,e(" prop and the "),ss,e(" prop value together.")]),es,s("div",os,[l(o(a),{"ground-palette":"default","ground-color":"primary",class:"p-2"},{default:t(()=>[e(" VvEl ")]),_:1})]),s("details",ls,[as,s("div",ts,[l(o(a),{"ground-palette":"default","ground-color":"default",class:"p-2"},{default:t(()=>[e(' ground-palette="default" ground-color="default" ')]),_:1}),l(o(a),{"ground-palette":"default","ground-color":"error",class:"p-2"},{default:t(()=>[e(' ground-palette="default" ground-color="error" ')]),_:1}),l(o(a),{"ground-palette":"default","ground-color":"primary",class:"p-2"},{default:t(()=>[e(' ground-palette="default" ground-color="primary" ')]),_:1}),l(o(a),{"ground-palette":"default","ground-color":"secondary",class:"p-2"},{default:t(()=>[e(' ground-palette="default" ground-color="secondary" ')]),_:1}),l(o(a),{"ground-palette":"default","ground-color":"success",class:"p-2"},{default:t(()=>[e(' ground-palette="default" ground-color="success" ')]),_:1})])]),s("details",ns,[rs,s("div",ps,[l(o(a),{"ground-palette":"console","ground-color":"default",class:"p-2"},{default:t(()=>[e(' ground-palette="console" ground-color="default" ')]),_:1}),l(o(a),{"ground-palette":"console","ground-color":"error",class:"p-2"},{default:t(()=>[e(' ground-palette="console" ground-color="error" ')]),_:1}),l(o(a),{"ground-palette":"console","ground-color":"primary",class:"p-2"},{default:t(()=>[e(' ground-palette="console" ground-color="primary" ')]),_:1}),l(o(a),{"ground-palette":"console","ground-color":"secondary",class:"p-2"},{default:t(()=>[e(' ground-palette="console" ground-color="secondary" ')]),_:1}),l(o(a),{"ground-palette":"console","ground-color":"success",class:"p-2"},{default:t(()=>[e(' ground-palette="console" ground-color="success" ')]),_:1})])]),s("details",cs,[ds,s("div",is,[l(o(a),{"ground-palette":"monochromatic","ground-color":"default",class:"p-2"},{default:t(()=>[e(' ground-palette="monochromatic" ground-color="default" ')]),_:1}),l(o(a),{"ground-palette":"monochromatic","ground-color":"error",class:"p-2"},{default:t(()=>[e(' ground-palette="monochromatic" ground-color="error" ')]),_:1}),l(o(a),{"ground-palette":"monochromatic","ground-color":"primary",class:"p-2"},{default:t(()=>[e(' ground-palette="monochromatic" ground-color="primary" ')]),_:1}),l(o(a),{"ground-palette":"monochromatic","ground-color":"secondary",class:"p-2"},{default:t(()=>[e(' ground-palette="monochromatic" ground-color="secondary" ')]),_:1}),l(o(a),{"ground-palette":"monochromatic","ground-color":"success",class:"p-2"},{default:t(()=>[e(' ground-palette="monochromatic" ground-color="success" ')]),_:1})])]),s("details",us,[hs,s("div",_s,[l(o(a),{"ground-palette":"pastel","ground-color":"default",class:"p-2"},{default:t(()=>[e(' ground-palette="pastel" ground-color="default" ')]),_:1}),l(o(a),{"ground-palette":"pastel","ground-color":"error",class:"p-2"},{default:t(()=>[e(' ground-palette="pastel" ground-color="error" ')]),_:1}),l(o(a),{"ground-palette":"pastel","ground-color":"primary",class:"p-2"},{default:t(()=>[e(' ground-palette="pastel" ground-color="primary" ')]),_:1}),l(o(a),{"ground-palette":"pastel","ground-color":"secondary",class:"p-2"},{default:t(()=>[e(' ground-palette="pastel" ground-color="secondary" ')]),_:1}),l(o(a),{"ground-palette":"pastel","ground-color":"success",class:"p-2"},{default:t(()=>[e(' ground-palette="pastel" ground-color="success" ')]),_:1})])]),ms,ys,gs,s("p",null,[e("Type: "),Ds,bs,e(" Default: "),s("strong",null,[s("code",null,'"'+n(o(c).defaults.VvEl.groundColor)+'"',1)])]),s("p",null,[e("The "+n(r.$frontmatter.title)+" ",1),fs,e(" prop sets the component instance border color based both on the "),Fs,e(" prop and the "),vs,e(" prop value together.")]),xs,s("div",Cs,[l(o(a),{"ground-color":"secondary",class:"p-2"},{default:t(()=>[e(" VvEl ")]),_:1})]),s("details",Ts,[Es,s("div",Vs,[l(o(a),{"ground-color":"default",class:"p-2"},{default:t(()=>[e(' ground-color="default" ')]),_:1}),l(o(a),{"ground-color":"error",class:"p-2"},{default:t(()=>[e(' ground-color="error" ')]),_:1}),l(o(a),{"ground-color":"primary",class:"p-2"},{default:t(()=>[e(' ground-color="primary" ')]),_:1}),l(o(a),{"ground-color":"secondary",class:"p-2"},{default:t(()=>[e(' ground-color="secondary" ')]),_:1}),l(o(a),{"ground-color":"success",class:"p-2"},{default:t(()=>[e(' ground-color="success" ')]),_:1})])]),Ps,As,ws,s("p",null,[e("Type: "),Ss,qs,e(" Default: "),s("strong",null,[s("code",null,'"'+n(o(c).defaults.VvEl.size)+'"',1)])]),s("p",null,[e("The "+n(r.$frontmatter.title)+" ",1),ks,e(" prop sets the component instance size-based classes which in the context of elements typically involves font size atomic classes.")]),Is,s("div",zs,[l(o(a),{size:"lg"},{default:t(()=>[e(' VvEl "lg" Text ')]),_:1})]),s("details",Rs,[Ns,s("div",$s,[l(o(a),{size:"5xs"},{default:t(()=>[e(' VvEl "5xs" Text ')]),_:1}),l(o(a),{size:"4xs"},{default:t(()=>[e(' VvEl "4xs" Text ')]),_:1}),l(o(a),{size:"3xs"},{default:t(()=>[e(' VvEl "3xs" Text ')]),_:1}),l(o(a),{size:"2xs"},{default:t(()=>[e(' VvEl "2xs" Text ')]),_:1}),l(o(a),{size:"xs"},{default:t(()=>[e(' VvEl "xs" Text ')]),_:1}),l(o(a),{size:"sm"},{default:t(()=>[e(' VvEl "sm" Text ')]),_:1}),l(o(a),{size:"md"},{default:t(()=>[e(' VvEl "md" Text ')]),_:1}),l(o(a),{size:"lg"},{default:t(()=>[e(' VvEl "lg" Text ')]),_:1}),l(o(a),{size:"xl"},{default:t(()=>[e(' VvEl "xl" Text ')]),_:1}),l(o(a),{size:"2xl"},{default:t(()=>[e(' VvEl "2xl" Text ')]),_:1}),l(o(a),{size:"3xl"},{default:t(()=>[e(' VvEl "3xl" Text ')]),_:1}),l(o(a),{size:"4xl"},{default:t(()=>[e(' VvEl "4xl" Text ')]),_:1}),l(o(a),{size:"5xl"},{default:t(()=>[e(' VvEl "5xl" Text ')]),_:1}),l(o(a),{size:"6xl"},{default:t(()=>[e(' VvEl "6xl" Text ')]),_:1}),l(o(a),{size:"7xl"},{default:t(()=>[e(' VvEl "7xl" Text ')]),_:1}),l(o(a),{size:"8xl"},{default:t(()=>[e(' VvEl "8xl" Text ')]),_:1}),l(o(a),{size:"9xl"},{default:t(()=>[e(' VvEl "9xl" Text ')]),_:1}),l(o(a),{size:"10xl"},{default:t(()=>[e(' VvEl "10xl" Text ')]),_:1}),l(o(a),{size:"11xl"},{default:t(()=>[e(' VvEl "11xl" Text ')]),_:1}),l(o(a),{size:"12xl"},{default:t(()=>[e(' VvEl "12xl" Text ')]),_:1})])]),Ls,js,Bs,s("p",null,[e("Type: "),Ms,Os,e(" Valid Values: "),Hs,Gs,e(" Default: "),s("strong",null,[s("code",null,'"'+n(o(c).defaults.VvEl.tag)+'"',1)])]),s("p",null,[e("The "+n(r.$frontmatter.title)+" ",1),Js,e(" prop sets the HTML "),Us,e(" attribute to a value that should be present in the "),Ws,e(" to be a valid value for this component.")]),Ks,s("div",Qs,[l(o(a),{tag:"span",class:"border-b-2"},{default:t(()=>[e(" VvEl ")]),_:1})]),Xs,Ys,Zs,s("p",null,[e("Type: "),se,ee,e(" Default: "),s("strong",null,[s("code",null,'"'+n(o(c).defaults.VvEl.textPalette)+'"',1)])]),s("p",null,[e("The "+n(r.$frontmatter.title)+" ",1),oe,e(" prop sets the component instance border color based both on the "),le,e(" prop and the "),ae,e(" prop value together.")]),te,s("div",ne,[l(o(a),{"text-palette":"default","text-color":"primary"},{default:t(()=>[e(" VvEl ")]),_:1})]),re,pe,ce,s("p",null,[e("Type: "),de,ie,e(" Default: "),s("strong",null,[s("code",null,'"'+n(o(c).defaults.VvEl.textColor)+'"',1)])]),s("p",null,[e("The "+n(r.$frontmatter.title)+" ",1),ue,e(" prop sets the component instance border color based both on the "),he,e(" prop and the "),_e,e(" prop value together.")]),me,s("div",ye,[l(o(a),{"text-color":"secondary"},{default:t(()=>[e(" VvEl ")]),_:1})]),s("details",ge,[De,s("div",be,[l(o(a),{"text-color":"default"},{default:t(()=>[e(' text-color="default" ')]),_:1}),l(o(a),{"text-color":"error"},{default:t(()=>[e(' text-color="error" ')]),_:1}),l(o(a),{"text-color":"primary"},{default:t(()=>[e(' text-color="primary" ')]),_:1}),l(o(a),{"text-color":"secondary"},{default:t(()=>[e(' text-color="secondary" ')]),_:1}),l(o(a),{"text-color":"success"},{default:t(()=>[e(' text-color="success" ')]),_:1})])]),fe,Fe,ve,s("p",null,[e("The "+n(r.$frontmatter.title)+" has a standard ",1),xe,e(" Vue slot to insert child elements/nodes into the component.")]),Ce,s("div",Te,[l(o(a),null,{default:t(()=>[e(" Slot "),Ee]),_:1})]),l(d)]))}});export{Je as __pageData,Ue as default};
