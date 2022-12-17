import{_ as i}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.220f1388.js";import{V as c}from"./chunks/VvConfig.9e2b1387.js";import{V as n}from"./chunks/VvButton.1f53c1ec.js";import{o as u,c as d,a as s,b as e,t as o,u as l,d as t,w as a,e as p}from"./app.d7a18879.js";import"./chunks/Anchors.bafcf40e.js";import"./chunks/Text.d88c79dd.js";import"./chunks/Transitions.262fdc37.js";import"./chunks/Buttons.b4b40e12.js";import"./chunks/Checkboxes.81ecc6c3.js";import"./chunks/ColorModes.4904e81c.js";import"./chunks/Inputs.a721047f.js";import"./chunks/Lists.c1360393.js";import"./chunks/Radios.230b40d2.js";import"./chunks/Selects.7f4e72d6.js";import"./chunks/Textareas.4dc66c13.js";const h={id:"frontmatter-title",tabindex:"-1"},_=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=s("h2",{id:"import",tabindex:"-1"},[e("Import "),s("a",{class:"header-anchor",href:"#import","aria-hidden":"true"},"#")],-1),b=s("a",{href:"/vueventus/guides/vueventus-cli.html"},"vueventus CLI",-1),m=s("a",{href:"/vueventus/guides/vv-update-cli.html"},"vv-update CLI",-1),D=p(`<div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// ./src/components/SomeComponent.vue</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> VvButton </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./vv/buttons/VvButton.vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>CLI installed components pass along VueVentus core functionalities via component props, so you can fully customize each prop default and applied classes resulting from default and component instance values, by overriding VvConfig defaults in your app <code>./src/app.vv.ts</code> file.</p><p>From there, you can extend, combine, and leverage the VueVentus styling management patterns as needed for your project-specific components, interfaces and content!</p></div>`,2),f=p(`<div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VvButton</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vueventus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Importing raw VueVentus library components will still apply your <code>./src/app.vv.ts</code> settings automatically through the Vue <code>provide()</code> and <code>inject()</code> pattern. All raw VueVentus library components automatically check for a provided <code>&quot;vv&quot;</code> keyed object with a <a href="/vueventus/typescript/interfaces.html#configvv">ConfigVv</a> type interface.</p></div><div class="warning custom-block"><p class="custom-block-title">CLI or Raw?</p><p>The main difference between raw library components and CLI installed components, is that you have no control over component defaults with raw library components. This is less flexible than using CLI installed components, because control of component defaults can greatly reduce the number of props a dev has to type for component instances, which reduces app code.</p><p>Meanwhile, the control CLI installed components provide through customizable defaults, opens up to a global level (styling management system) control for default component state characteristic values (particularly powerful with color and proportional size characteristics).</p></div><h2 id="prop-block" tabindex="-1">Prop: block <a class="header-anchor" href="#prop-block" aria-hidden="true">#</a></h2>`,4),v=s("strong",null,[s("code",null,"Boolean")],-1),F=s("br",null,null,-1),g=s("code",null,"block",-1),x=s("code",null,"<button>",-1),C=p(`<h3 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:block</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    VvButton</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-hidden="true">#</a></h3>`,3),T={class:"w-full pt-4"},V=s("h2",{id:"prop-color",tabindex:"-1"},[e("Prop: color "),s("a",{class:"header-anchor",href:"#prop-color","aria-hidden":"true"},"#")],-1),k=s("strong",null,[s("code",null,"String")],-1),A=s("br",null,null,-1),z=s("code",null,"color",-1),S=s("code",null,"color",-1),w=s("code",null,"palette",-1),B=p(`<h3 id="syntax-1" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-1" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    VvButton</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result-1" tabindex="-1">Result <a class="header-anchor" href="#result-1" aria-hidden="true">#</a></h3>`,3),P={class:"w-full pt-4"},E={class:"details custom-block"},I=s("summary",null,"color prop default color examples",-1),R={class:"pt-4"},q=s("br",null,null,-1),N=s("br",null,null,-1),$=s("br",null,null,-1),j=s("br",null,null,-1),L=s("h2",{id:"prop-fab",tabindex:"-1"},[e("Prop: fab "),s("a",{class:"header-anchor",href:"#prop-fab","aria-hidden":"true"},"#")],-1),M=s("strong",null,[s("code",null,"Boolean")],-1),O=s("br",null,null,-1),H=s("code",null,"fab",-1),J=s("code",null,"<button>",-1),U=s("code",null,".rounded-full",-1),Y=p(`<h3 id="syntax-2" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-2" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:fab</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    +</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:fab</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rounded-full</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    +</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="result-2" tabindex="-1">Result <a class="header-anchor" href="#result-2" aria-hidden="true">#</a></h3>`,3),G={class:"w-full pt-4"},K=s("h2",{id:"prop-palette",tabindex:"-1"},[e("Prop: palette "),s("a",{class:"header-anchor",href:"#prop-palette","aria-hidden":"true"},"#")],-1),Q=s("strong",null,[s("code",null,"String")],-1),W=s("br",null,null,-1),X=s("code",null,"palette",-1),Z=s("code",null,"palette",-1),ss=s("code",null,"color",-1),es=p(`<h3 id="syntax-3" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-3" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">palette</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">outline</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    VvButton</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result-3" tabindex="-1">Result <a class="header-anchor" href="#result-3" aria-hidden="true">#</a></h3>`,3),ls={class:"w-full pt-4"},ts={class:"details custom-block"},ns=s("summary",null,"color prop default palette color examples",-1),as={class:"pt-4"},os=s("br",null,null,-1),rs=s("br",null,null,-1),ps=s("br",null,null,-1),cs=s("br",null,null,-1),is={class:"details custom-block"},us=s("summary",null,"color prop outline palette color examples",-1),ds={class:"pt-4"},hs=s("br",null,null,-1),_s=s("br",null,null,-1),ys=s("br",null,null,-1),bs=s("br",null,null,-1),ms=s("h2",{id:"prop-size",tabindex:"-1"},[e("Prop: size "),s("a",{class:"header-anchor",href:"#prop-size","aria-hidden":"true"},"#")],-1),Ds=s("strong",null,[s("code",null,"String")],-1),fs=s("br",null,null,-1),vs=s("code",null,"size",-1),Fs=p(`<h3 id="syntax-4" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-4" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    VvButton</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result-4" tabindex="-1">Result <a class="header-anchor" href="#result-4" aria-hidden="true">#</a></h3>`,3),gs={class:"w-full pt-4"},xs={class:"details custom-block"},Cs=s("summary",null,"size prop button size examples",-1),Ts={class:"flex flex-wrap items-center gap-2 pt-4"},Vs={class:"details custom-block"},ks=s("summary",null,"size prop block button size examples",-1),As={class:"flex flex-wrap items-center gap-2 pt-4"},zs=s("h2",{id:"prop-type",tabindex:"-1"},[e("Prop: type "),s("a",{class:"header-anchor",href:"#prop-type","aria-hidden":"true"},"#")],-1),Ss=s("strong",null,[s("code",null,"String")],-1),ws=s("br",null,null,-1),Bs=s("a",{href:"/vueventus/components/prop-validators.html#validbuttontypes"},"ValidButtonTypes Module",-1),Ps=s("br",null,null,-1),Es=s("code",null,"type",-1),Is=s("code",null,"type",-1),Rs=s("a",{href:"/vueventus/components/prop-validators.html#validbuttontypes"},"ValidButtonTypes Module",-1),qs=p(`<h3 id="syntax-5" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-5" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">submit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Submit</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result-5" tabindex="-1">Result <a class="header-anchor" href="#result-5" aria-hidden="true">#</a></h3>`,3),Ns={class:"w-full pt-4"},$s=s("h2",{id:"slot-default",tabindex:"-1"},[e("Slot: #default "),s("a",{class:"header-anchor",href:"#slot-default","aria-hidden":"true"},"#")],-1),js=s("code",null,"#default",-1),Ls=p(`<h3 id="syntax-6" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-6" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Slot</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text-yellow-300 pl-2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Content</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result-6" tabindex="-1">Result <a class="header-anchor" href="#result-6" aria-hidden="true">#</a></h3>`,3),Ms={class:"w-full pt-4"},Os=s("span",{class:"text-yellow-300 pl-2"},"Content",-1),pe=JSON.parse('{"title":"VvButton Component","description":"","frontmatter":{"title":"VvButton Component"},"headers":[{"level":2,"title":"Import","slug":"import","link":"#import","children":[]},{"level":2,"title":"Prop: block","slug":"prop-block","link":"#prop-block","children":[{"level":3,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":3,"title":"Result","slug":"result","link":"#result","children":[]}]},{"level":2,"title":"Prop: color","slug":"prop-color","link":"#prop-color","children":[{"level":3,"title":"Syntax","slug":"syntax-1","link":"#syntax-1","children":[]},{"level":3,"title":"Result","slug":"result-1","link":"#result-1","children":[]}]},{"level":2,"title":"Prop: fab","slug":"prop-fab","link":"#prop-fab","children":[{"level":3,"title":"Syntax","slug":"syntax-2","link":"#syntax-2","children":[]},{"level":3,"title":"Result","slug":"result-2","link":"#result-2","children":[]}]},{"level":2,"title":"Prop: palette","slug":"prop-palette","link":"#prop-palette","children":[{"level":3,"title":"Syntax","slug":"syntax-3","link":"#syntax-3","children":[]},{"level":3,"title":"Result","slug":"result-3","link":"#result-3","children":[]}]},{"level":2,"title":"Prop: size","slug":"prop-size","link":"#prop-size","children":[{"level":3,"title":"Syntax","slug":"syntax-4","link":"#syntax-4","children":[]},{"level":3,"title":"Result","slug":"result-4","link":"#result-4","children":[]}]},{"level":2,"title":"Prop: type","slug":"prop-type","link":"#prop-type","children":[{"level":3,"title":"Syntax","slug":"syntax-5","link":"#syntax-5","children":[]},{"level":3,"title":"Result","slug":"result-5","link":"#result-5","children":[]}]},{"level":2,"title":"Slot: #default","slug":"slot-default","link":"#slot-default","children":[{"level":3,"title":"Syntax","slug":"syntax-6","link":"#syntax-6","children":[]},{"level":3,"title":"Result","slug":"result-6","link":"#result-6","children":[]}]}],"relativePath":"components/buttons/vv-button.md","lastUpdated":1661201892000}'),Hs={name:"components/buttons/vv-button.md"},ce=Object.assign(Hs,{setup(Js){return(r,Us)=>(u(),d("div",null,[s("h1",h,[e(o(r.$frontmatter.title)+" ",1),_]),s("p",null,"The "+o(r.$frontmatter.title)+" provides a variety of props and config module based settings to make a huge variety of buttons for applications with extremely DRY implementation of atomic classes.",1),y,s("p",null,[e("To import a "+o(r.$frontmatter.title)+" installed by the ",1),b,e(" or "),m,e(":")]),D,s("p",null,"Alternatively, you can install the raw library "+o(r.$frontmatter.title)+" with:",1),f,s("p",null,[e("Type: "),v,F,e(" Default: "),s("strong",null,[s("code",null,o(l(c).defaults.VvButton.block),1)])]),s("p",null,[e("The "+o(r.$frontmatter.title)+" ",1),g,e(" prop sets the component instance to use block-level base classes making the returned "),x,e(" element a full width and block-level element.")]),C,s("div",T,[t(l(n),{block:!0},{default:a(()=>[e(" VvButton ")]),_:1})]),V,s("p",null,[e("Type: "),k,A,e(" Default: "),s("strong",null,[s("code",null,'"'+o(l(c).defaults.VvButton.color)+'"',1)])]),s("p",null,[e("The "+o(r.$frontmatter.title)+" ",1),z,e(" prop sets the component instance color based both on the "),S,e(" prop and the "),w,e(" prop value together.")]),B,s("div",P,[t(l(n),{color:"error"},{default:a(()=>[e(" VvButton ")]),_:1})]),s("details",E,[I,s("div",R,[t(l(n),{color:"default",class:"p-2 mb-2"},{default:a(()=>[e(' color="default" ')]),_:1}),q,t(l(n),{color:"error",class:"p-2 mb-2"},{default:a(()=>[e(' color="error" ')]),_:1}),N,t(l(n),{color:"primary",class:"p-2 mb-2"},{default:a(()=>[e(' color="primary" ')]),_:1}),$,t(l(n),{color:"secondary",class:"p-2 mb-2"},{default:a(()=>[e(' color="secondary" ')]),_:1}),j,t(l(n),{color:"success",class:"p-2 mb-2"},{default:a(()=>[e(' color="success" ')]),_:1})])]),L,s("p",null,[e("Type: "),M,O,e(" Default: "),s("strong",null,[s("code",null,o(l(c).defaults.VvButton.fab),1)])]),s("p",null,[e("The "+o(r.$frontmatter.title)+" ",1),H,e(" prop sets the component instance to use base classes with equal width and height classes making the returned "),J,e(" element a square button element that can also be styled as a circle using a Tailwind CSS "),U,e(" class.")]),Y,s("div",G,[t(l(n),{fab:!0},{default:a(()=>[e(" + ")]),_:1}),t(l(n),{fab:!0,class:"rounded-full"},{default:a(()=>[e(" + ")]),_:1})]),K,s("p",null,[e("Type: "),Q,W,e(" Default: "),s("strong",null,[s("code",null,'"'+o(l(c).defaults.VvButton.palette)+'"',1)])]),s("p",null,[e("The "+o(r.$frontmatter.title)+" ",1),X,e(" prop sets the component instance color based both on the "),Z,e(" prop and the "),ss,e(" prop values together.")]),es,s("div",ls,[t(l(n),{palette:"outline",class:"border-solid"},{default:a(()=>[e(" VvButton ")]),_:1})]),s("details",ts,[ns,s("div",as,[t(l(n),{color:"default",class:"p-2 mb-2"},{default:a(()=>[e(' color="default" ')]),_:1}),os,t(l(n),{color:"error",class:"p-2 mb-2"},{default:a(()=>[e(' color="error" ')]),_:1}),rs,t(l(n),{color:"primary",class:"p-2 mb-2"},{default:a(()=>[e(' color="primary" ')]),_:1}),ps,t(l(n),{color:"secondary",class:"p-2 mb-2"},{default:a(()=>[e(' color="secondary" ')]),_:1}),cs,t(l(n),{color:"success",class:"p-2 mb-2"},{default:a(()=>[e(' color="success" ')]),_:1})])]),s("details",is,[us,s("div",ds,[t(l(n),{palette:"outline",color:"default",class:"border-solid p-2 mb-2"},{default:a(()=>[e(' color="default" ')]),_:1}),hs,t(l(n),{palette:"outline",color:"error",class:"border-solid p-2 mb-2"},{default:a(()=>[e(' color="error" ')]),_:1}),_s,t(l(n),{palette:"outline",color:"primary",class:"border-solid p-2 mb-2"},{default:a(()=>[e(' color="primary" ')]),_:1}),ys,t(l(n),{palette:"outline",color:"secondary",class:"border-solid p-2 mb-2"},{default:a(()=>[e(' color="secondary" ')]),_:1}),bs,t(l(n),{palette:"outline",color:"success",class:"border-solid p-2 mb-2"},{default:a(()=>[e(' color="success" ')]),_:1})])]),ms,s("p",null,[e("Type: "),Ds,fs,e(" Default: "),s("strong",null,[s("code",null,'"'+o(l(c).defaults.VvButton.size)+'"',1)])]),s("p",null,[e("The "+o(r.$frontmatter.title)+" ",1),vs,e(" prop sets the component instance size-based classes which in the context of buttons typically involves padding and font size atomic classes.")]),Fs,s("div",gs,[t(l(n),{size:"xl"},{default:a(()=>[e(" VvButton ")]),_:1})]),s("details",xs,[Cs,s("div",Ts,[t(l(n),{size:"4xs"},{default:a(()=>[e(' size="4xs" ')]),_:1}),t(l(n),{size:"3xs"},{default:a(()=>[e(' size="3xs" ')]),_:1}),t(l(n),{size:"2xs"},{default:a(()=>[e(' size="2xs" ')]),_:1}),t(l(n),{size:"xs"},{default:a(()=>[e(' size="xs" ')]),_:1}),t(l(n),{size:"sm"},{default:a(()=>[e(' size="sm" ')]),_:1}),t(l(n),{size:"md"},{default:a(()=>[e(' size="md" ')]),_:1}),t(l(n),{size:"lg"},{default:a(()=>[e(' size="lg" ')]),_:1}),t(l(n),{size:"xl"},{default:a(()=>[e(' size="xl" ')]),_:1}),t(l(n),{size:"2xl"},{default:a(()=>[e(' size="2xl" ')]),_:1}),t(l(n),{size:"3xl"},{default:a(()=>[e(' size="3xl" ')]),_:1}),t(l(n),{size:"4xl"},{default:a(()=>[e(' size="4xl" ')]),_:1})])]),s("details",Vs,[ks,s("div",As,[t(l(n),{block:!0,size:"4xs"},{default:a(()=>[e(' size="4xs" ')]),_:1}),t(l(n),{block:!0,size:"3xs"},{default:a(()=>[e(' size="3xs" ')]),_:1}),t(l(n),{block:!0,size:"2xs"},{default:a(()=>[e(' size="2xs" ')]),_:1}),t(l(n),{block:!0,size:"xs"},{default:a(()=>[e(' size="xs" ')]),_:1}),t(l(n),{block:!0,size:"sm"},{default:a(()=>[e(' size="sm" ')]),_:1}),t(l(n),{block:!0,size:"md"},{default:a(()=>[e(' size="md" ')]),_:1}),t(l(n),{block:!0,size:"lg"},{default:a(()=>[e(' size="lg" ')]),_:1}),t(l(n),{block:!0,size:"xl"},{default:a(()=>[e(' size="xl" ')]),_:1}),t(l(n),{block:!0,size:"2xl"},{default:a(()=>[e(' size="2xl" ')]),_:1}),t(l(n),{block:!0,size:"3xl"},{default:a(()=>[e(' size="3xl" ')]),_:1}),t(l(n),{block:!0,size:"4xl"},{default:a(()=>[e(' size="4xl" ')]),_:1})])]),zs,s("p",null,[e("Type: "),Ss,ws,e(" Valid Values: "),Bs,Ps,e(" Default: "),s("strong",null,[s("code",null,'"'+o(l(c).defaults.VvButton.type)+'"',1)])]),s("p",null,[e("The "+o(r.$frontmatter.title)+" ",1),Es,e(" prop sets the button HTML "),Is,e(" attribute to a value that should be present in the "),Rs,e(" to be a valid value for this component.")]),qs,s("div",Ns,[t(l(n),{type:"submit"},{default:a(()=>[e(" Submit ")]),_:1})]),$s,s("p",null,[e("The "+o(r.$frontmatter.title)+" has a standard ",1),js,e(" Vue slot to insert child elements/nodes into the component.")]),Ls,s("div",Ms,[t(l(n),null,{default:a(()=>[e(" Slot"),Os]),_:1})]),t(i)]))}});export{pe as __pageData,ce as default};