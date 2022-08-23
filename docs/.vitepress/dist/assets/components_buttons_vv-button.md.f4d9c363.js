import{_ as i}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.184107d6.js";import"./chunks/Anchors.f049ebc4.js";import"./chunks/Buttons.16d998aa.js";import"./chunks/Checkboxes.4124066b.js";import"./chunks/Inputs.f0037d89.js";import"./chunks/Radios.b252d274.js";import"./chunks/Textareas.4518d61e.js";import{V as r,a as n}from"./chunks/VvTextarea.vue_vue_type_script_lang.00e4973a.js";import"./chunks/index.318f63d8.js";import"./chunks/VueVentusSpinningMark.vue_vue_type_script_lang.c3e54ac1.js";import{o as d,c as u,a as s,b as e,t as a,u as t,d as l,w as o,e as c}from"./app.a36de030.js";import"./chunks/Text.0efcfbbe.js";import"./chunks/Transitions.cc57681e.js";import"./chunks/ColorModes.cf2ce130.js";const _={id:"frontmatter-title",tabindex:"-1"},h=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=s("h2",{id:"import",tabindex:"-1"},[e("Import "),s("a",{class:"header-anchor",href:"#import","aria-hidden":"true"},"#")],-1),b=s("a",{href:"/vueventus/guides/vueventus-cli.html"},"vueventus CLI",-1),m=e(" or "),D=s("a",{href:"/vueventus/guides/vv-update-cli.html"},"vv-update CLI",-1),v=e(":"),f=c(`<div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">// ./src/components/SomeComponent.vue</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> VvButton </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./vv/buttons/VvButton.vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>CLI installed components pass along VueVentus core functionalities via component props, so you can fully customize each prop default and applied classes resulting from default and component instance values, by overriding VvConfig defaults in your app <code>./src/app.vv.ts</code> file.</p><p>From there, you can extend, combine, and leverage the VueVentus styling management patterns as needed for your project-specific components, interfaces and content!</p></div>`,2),F=c(`<div class="language-javascript line-numbers-mode"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VvButton</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vueventus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Importing raw VueVentus library components will still apply your <code>./src/app.vv.ts</code> settings automatically through the Vue <code>provide()</code> and <code>inject()</code> pattern. All raw VueVentus library components automatically check for a provided <code>&quot;vv&quot;</code> keyed object with a <a href="/vueventus/typescript/interfaces.html#configvv">ConfigVv</a> type interface.</p></div><div class="warning custom-block"><p class="custom-block-title">CLI or Raw?</p><p>The main difference between raw library components and CLI installed components, is you have no control over component defaults with raw library components. This is less flexible than CLI installed components, because control of component defaults can reduce the number of props a dev has to type with component instances, and reduce code.</p><p>Meanwhile, the control CLI installed components provide with customizable defaults, provides a global level of styling control via component default values (particularly powerful with color and size characteristics).</p></div><h2 id="prop-block" tabindex="-1">Prop: block <a class="header-anchor" href="#prop-block" aria-hidden="true">#</a></h2>`,4),g=e("Type: "),x=s("strong",null,[s("code",null,"Boolean")],-1),C=s("br",null,null,-1),T=e(" Default: "),V=s("code",null,"block",-1),A=e(" prop sets the component instance to use block-level base classes making the returned "),z=s("code",null,"<button>",-1),S=e(" element a full width and block-level element."),w=c(`<h3 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:block</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    VvButton</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-hidden="true">#</a></h3>`,3),B={class:"w-full pt-4"},k=e(" VvButton "),P=s("h2",{id:"prop-color",tabindex:"-1"},[e("Prop: color "),s("a",{class:"header-anchor",href:"#prop-color","aria-hidden":"true"},"#")],-1),E=e("Type: "),I=s("strong",null,[s("code",null,"String")],-1),R=s("br",null,null,-1),q=e(" Default: "),N=s("code",null,"color",-1),$=e(" prop sets the component instance color based both on the "),j=s("code",null,"color",-1),L=e(" prop and the "),M=s("code",null,"palette",-1),O=e(" prop value together."),H=c(`<h3 id="syntax-1" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-1" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    VvButton</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result-1" tabindex="-1">Result <a class="header-anchor" href="#result-1" aria-hidden="true">#</a></h3>`,3),J={class:"w-full pt-4"},U=e(" VvButton "),Y={class:"details custom-block"},G=s("summary",null,"color prop default color examples",-1),K={class:"pt-4"},Q=e(' color="default" '),W=s("br",null,null,-1),X=e(' color="error" '),Z=s("br",null,null,-1),ss=e(' color="primary" '),es=s("br",null,null,-1),ts=e(' color="secondary" '),ls=s("br",null,null,-1),ns=e(' color="success" '),os=s("h2",{id:"prop-fab",tabindex:"-1"},[e("Prop: fab "),s("a",{class:"header-anchor",href:"#prop-fab","aria-hidden":"true"},"#")],-1),as=e("Type: "),ps=s("strong",null,[s("code",null,"Boolean")],-1),cs=s("br",null,null,-1),rs=e(" Default: "),is=s("code",null,"fab",-1),ds=e(" prop sets the component instance to use base classes with equal width and height classes making the returned "),us=s("code",null,"<button>",-1),_s=e(" element a square button element that can also be styled as a circle using a Tailwind CSS "),hs=s("code",null,".rounded-full",-1),ys=e(" class."),bs=c(`<h3 id="syntax-2" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-2" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:fab</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    +</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:fab</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rounded-full</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    +</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="result-2" tabindex="-1">Result <a class="header-anchor" href="#result-2" aria-hidden="true">#</a></h3>`,3),ms={class:"w-full pt-4"},Ds=e(" + "),vs=e(" + "),fs=s("h2",{id:"prop-palette",tabindex:"-1"},[e("Prop: palette "),s("a",{class:"header-anchor",href:"#prop-palette","aria-hidden":"true"},"#")],-1),Fs=e("Type: "),gs=s("strong",null,[s("code",null,"String")],-1),xs=s("br",null,null,-1),Cs=e(" Default: "),Ts=s("code",null,"palette",-1),Vs=e(" prop sets the component instance color based both on the "),As=s("code",null,"palette",-1),zs=e(" prop and the "),Ss=s("code",null,"color",-1),ws=e(" prop values together."),Bs=c(`<h3 id="syntax-3" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-3" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">palette</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">outline</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    VvButton</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result-3" tabindex="-1">Result <a class="header-anchor" href="#result-3" aria-hidden="true">#</a></h3>`,3),ks={class:"w-full pt-4"},Ps=e(" VvButton "),Es={class:"details custom-block"},Is=s("summary",null,"color prop default palette color examples",-1),Rs={class:"pt-4"},qs=e(' color="default" '),Ns=s("br",null,null,-1),$s=e(' color="error" '),js=s("br",null,null,-1),Ls=e(' color="primary" '),Ms=s("br",null,null,-1),Os=e(' color="secondary" '),Hs=s("br",null,null,-1),Js=e(' color="success" '),Us={class:"details custom-block"},Ys=s("summary",null,"color prop outline palette color examples",-1),Gs={class:"pt-4"},Ks=e(' color="default" '),Qs=s("br",null,null,-1),Ws=e(' color="error" '),Xs=s("br",null,null,-1),Zs=e(' color="primary" '),se=s("br",null,null,-1),ee=e(' color="secondary" '),te=s("br",null,null,-1),le=e(' color="success" '),ne=s("h2",{id:"prop-size",tabindex:"-1"},[e("Prop: size "),s("a",{class:"header-anchor",href:"#prop-size","aria-hidden":"true"},"#")],-1),oe=e("Type: "),ae=s("strong",null,[s("code",null,"String")],-1),pe=s("br",null,null,-1),ce=e(" Default: "),re=s("code",null,"size",-1),ie=e(" prop sets the component instance size-based classes which in the context of buttons typically involves padding and font size atomic classes."),de=c(`<h3 id="syntax-4" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-4" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    VvButton</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result-4" tabindex="-1">Result <a class="header-anchor" href="#result-4" aria-hidden="true">#</a></h3>`,3),ue={class:"w-full pt-4"},_e=e(" VvButton "),he={class:"details custom-block"},ye=s("summary",null,"size prop button size examples",-1),be={class:"flex flex-wrap items-center gap-2 pt-4"},me=e(' size="4xs" '),De=e(' size="3xs" '),ve=e(' size="2xs" '),fe=e(' size="xs" '),Fe=e(' size="sm" '),ge=e(' size="md" '),xe=e(' size="lg" '),Ce=e(' size="xl" '),Te=e(' size="2xl" '),Ve=e(' size="3xl" '),Ae=e(' size="4xl" '),ze={class:"details custom-block"},Se=s("summary",null,"size prop block button size examples",-1),we={class:"flex flex-wrap items-center gap-2 pt-4"},Be=e(' size="4xs" '),ke=e(' size="3xs" '),Pe=e(' size="2xs" '),Ee=e(' size="xs" '),Ie=e(' size="sm" '),Re=e(' size="md" '),qe=e(' size="lg" '),Ne=e(' size="xl" '),$e=e(' size="2xl" '),je=e(' size="3xl" '),Le=e(' size="4xl" '),Me=s("h2",{id:"prop-type",tabindex:"-1"},[e("Prop: type "),s("a",{class:"header-anchor",href:"#prop-type","aria-hidden":"true"},"#")],-1),Oe=e("Type: "),He=s("strong",null,[s("code",null,"String")],-1),Je=s("br",null,null,-1),Ue=e(" Valid Values: "),Ye=s("a",{href:"/vueventus/components/prop-validators.html#validbuttontypes"},"ValidButtonTypes Module",-1),Ge=s("br",null,null,-1),Ke=e(" Default: "),Qe=s("code",null,"type",-1),We=e(" prop sets the button HTML "),Xe=s("code",null,"type",-1),Ze=e(" attribute to a value that should be present in the "),st=s("a",{href:"/vueventus/components/prop-validators.html#validbuttontypes"},"ValidButtonTypes Module",-1),et=e(" to be a valid value for this component."),tt=c(`<h3 id="syntax-5" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-5" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">submit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Submit</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result-5" tabindex="-1">Result <a class="header-anchor" href="#result-5" aria-hidden="true">#</a></h3>`,3),lt={class:"w-full pt-4"},nt=e(" Submit "),ot=s("h2",{id:"slot-default",tabindex:"-1"},[e("Slot: #default "),s("a",{class:"header-anchor",href:"#slot-default","aria-hidden":"true"},"#")],-1),at=s("code",null,"#default",-1),pt=e(" Vue slot to insert child elements/nodes into the component."),ct=c(`<h3 id="syntax-6" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-6" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Slot</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text-yellow-300 pl-2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Content</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvButton</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result-6" tabindex="-1">Result <a class="header-anchor" href="#result-6" aria-hidden="true">#</a></h3>`,3),rt={class:"w-full pt-4"},it=e(" Slot"),dt=s("span",{class:"text-yellow-300 pl-2"},"Content",-1),St=JSON.parse('{"title":"VvButton Component","description":"","frontmatter":{"title":"VvButton Component"},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Prop: block","slug":"prop-block"},{"level":3,"title":"Syntax","slug":"syntax"},{"level":3,"title":"Result","slug":"result"},{"level":2,"title":"Prop: color","slug":"prop-color"},{"level":3,"title":"Syntax","slug":"syntax-1"},{"level":3,"title":"Result","slug":"result-1"},{"level":2,"title":"Prop: fab","slug":"prop-fab"},{"level":3,"title":"Syntax","slug":"syntax-2"},{"level":3,"title":"Result","slug":"result-2"},{"level":2,"title":"Prop: palette","slug":"prop-palette"},{"level":3,"title":"Syntax","slug":"syntax-3"},{"level":3,"title":"Result","slug":"result-3"},{"level":2,"title":"Prop: size","slug":"prop-size"},{"level":3,"title":"Syntax","slug":"syntax-4"},{"level":3,"title":"Result","slug":"result-4"},{"level":2,"title":"Prop: type","slug":"prop-type"},{"level":3,"title":"Syntax","slug":"syntax-5"},{"level":3,"title":"Result","slug":"result-5"},{"level":2,"title":"Slot: #default","slug":"slot-default"},{"level":3,"title":"Syntax","slug":"syntax-6"},{"level":3,"title":"Result","slug":"result-6"}],"relativePath":"components/buttons/vv-button.md","lastUpdated":1661201892000}'),ut={name:"components/buttons/vv-button.md"},wt=Object.assign(ut,{setup(_t){return(p,ht)=>(d(),u("div",null,[s("h1",_,[e(a(p.$frontmatter.title)+" ",1),h]),s("p",null,"The "+a(p.$frontmatter.title)+" provides a variety of props and config module based settings to make a huge variety of buttons for applications with extremely DRY implementation of atomic classes.",1),y,s("p",null,[e("To import a "+a(p.$frontmatter.title)+" installed by the ",1),b,m,D,v]),f,s("p",null,"Alternatively, you can install the raw library "+a(p.$frontmatter.title)+" with:",1),F,s("p",null,[g,x,C,T,s("strong",null,[s("code",null,a(t(r).defaults.VvButton.block),1)])]),s("p",null,[e("The "+a(p.$frontmatter.title)+" ",1),V,A,z,S]),w,s("div",B,[l(t(n),{block:!0},{default:o(()=>[k]),_:1})]),P,s("p",null,[E,I,R,q,s("strong",null,[s("code",null,'"'+a(t(r).defaults.VvButton.color)+'"',1)])]),s("p",null,[e("The "+a(p.$frontmatter.title)+" ",1),N,$,j,L,M,O]),H,s("div",J,[l(t(n),{color:"error"},{default:o(()=>[U]),_:1})]),s("details",Y,[G,s("div",K,[l(t(n),{color:"default",class:"p-2 mb-2"},{default:o(()=>[Q]),_:1}),W,l(t(n),{color:"error",class:"p-2 mb-2"},{default:o(()=>[X]),_:1}),Z,l(t(n),{color:"primary",class:"p-2 mb-2"},{default:o(()=>[ss]),_:1}),es,l(t(n),{color:"secondary",class:"p-2 mb-2"},{default:o(()=>[ts]),_:1}),ls,l(t(n),{color:"success",class:"p-2 mb-2"},{default:o(()=>[ns]),_:1})])]),os,s("p",null,[as,ps,cs,rs,s("strong",null,[s("code",null,a(t(r).defaults.VvButton.fab),1)])]),s("p",null,[e("The "+a(p.$frontmatter.title)+" ",1),is,ds,us,_s,hs,ys]),bs,s("div",ms,[l(t(n),{fab:!0},{default:o(()=>[Ds]),_:1}),l(t(n),{fab:!0,class:"rounded-full"},{default:o(()=>[vs]),_:1})]),fs,s("p",null,[Fs,gs,xs,Cs,s("strong",null,[s("code",null,'"'+a(t(r).defaults.VvButton.palette)+'"',1)])]),s("p",null,[e("The "+a(p.$frontmatter.title)+" ",1),Ts,Vs,As,zs,Ss,ws]),Bs,s("div",ks,[l(t(n),{palette:"outline",class:"border-solid"},{default:o(()=>[Ps]),_:1})]),s("details",Es,[Is,s("div",Rs,[l(t(n),{color:"default",class:"p-2 mb-2"},{default:o(()=>[qs]),_:1}),Ns,l(t(n),{color:"error",class:"p-2 mb-2"},{default:o(()=>[$s]),_:1}),js,l(t(n),{color:"primary",class:"p-2 mb-2"},{default:o(()=>[Ls]),_:1}),Ms,l(t(n),{color:"secondary",class:"p-2 mb-2"},{default:o(()=>[Os]),_:1}),Hs,l(t(n),{color:"success",class:"p-2 mb-2"},{default:o(()=>[Js]),_:1})])]),s("details",Us,[Ys,s("div",Gs,[l(t(n),{palette:"outline",color:"default",class:"border-solid p-2 mb-2"},{default:o(()=>[Ks]),_:1}),Qs,l(t(n),{palette:"outline",color:"error",class:"border-solid p-2 mb-2"},{default:o(()=>[Ws]),_:1}),Xs,l(t(n),{palette:"outline",color:"primary",class:"border-solid p-2 mb-2"},{default:o(()=>[Zs]),_:1}),se,l(t(n),{palette:"outline",color:"secondary",class:"border-solid p-2 mb-2"},{default:o(()=>[ee]),_:1}),te,l(t(n),{palette:"outline",color:"success",class:"border-solid p-2 mb-2"},{default:o(()=>[le]),_:1})])]),ne,s("p",null,[oe,ae,pe,ce,s("strong",null,[s("code",null,'"'+a(t(r).defaults.VvButton.size)+'"',1)])]),s("p",null,[e("The "+a(p.$frontmatter.title)+" ",1),re,ie]),de,s("div",ue,[l(t(n),{size:"xl"},{default:o(()=>[_e]),_:1})]),s("details",he,[ye,s("div",be,[l(t(n),{size:"4xs"},{default:o(()=>[me]),_:1}),l(t(n),{size:"3xs"},{default:o(()=>[De]),_:1}),l(t(n),{size:"2xs"},{default:o(()=>[ve]),_:1}),l(t(n),{size:"xs"},{default:o(()=>[fe]),_:1}),l(t(n),{size:"sm"},{default:o(()=>[Fe]),_:1}),l(t(n),{size:"md"},{default:o(()=>[ge]),_:1}),l(t(n),{size:"lg"},{default:o(()=>[xe]),_:1}),l(t(n),{size:"xl"},{default:o(()=>[Ce]),_:1}),l(t(n),{size:"2xl"},{default:o(()=>[Te]),_:1}),l(t(n),{size:"3xl"},{default:o(()=>[Ve]),_:1}),l(t(n),{size:"4xl"},{default:o(()=>[Ae]),_:1})])]),s("details",ze,[Se,s("div",we,[l(t(n),{block:!0,size:"4xs"},{default:o(()=>[Be]),_:1}),l(t(n),{block:!0,size:"3xs"},{default:o(()=>[ke]),_:1}),l(t(n),{block:!0,size:"2xs"},{default:o(()=>[Pe]),_:1}),l(t(n),{block:!0,size:"xs"},{default:o(()=>[Ee]),_:1}),l(t(n),{block:!0,size:"sm"},{default:o(()=>[Ie]),_:1}),l(t(n),{block:!0,size:"md"},{default:o(()=>[Re]),_:1}),l(t(n),{block:!0,size:"lg"},{default:o(()=>[qe]),_:1}),l(t(n),{block:!0,size:"xl"},{default:o(()=>[Ne]),_:1}),l(t(n),{block:!0,size:"2xl"},{default:o(()=>[$e]),_:1}),l(t(n),{block:!0,size:"3xl"},{default:o(()=>[je]),_:1}),l(t(n),{block:!0,size:"4xl"},{default:o(()=>[Le]),_:1})])]),Me,s("p",null,[Oe,He,Je,Ue,Ye,Ge,Ke,s("strong",null,[s("code",null,'"'+a(t(r).defaults.VvButton.type)+'"',1)])]),s("p",null,[e("The "+a(p.$frontmatter.title)+" ",1),Qe,We,Xe,Ze,st,et]),tt,s("div",lt,[l(t(n),{type:"submit"},{default:o(()=>[nt]),_:1})]),ot,s("p",null,[e("The "+a(p.$frontmatter.title)+" has a standard ",1),at,pt]),ct,s("div",rt,[l(t(n),null,{default:o(()=>[it,dt]),_:1})]),l(i)]))}});export{St as __pageData,wt as default};