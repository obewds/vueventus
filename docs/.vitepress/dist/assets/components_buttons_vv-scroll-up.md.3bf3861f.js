import{_ as p}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.714dc4ec.js";import{V as a}from"./chunks/VvConfig.f99e8744.js";import{o as r,c as i,a as s,b as n,t as e,u as o,d as c,e as t}from"./app.7595295d.js";import"./chunks/Anchors.bafcf40e.js";import"./chunks/Text.d88c79dd.js";import"./chunks/Transitions.262fdc37.js";import"./chunks/Buttons.b4b40e12.js";import"./chunks/Checkboxes.81ecc6c3.js";import"./chunks/ColorModes.4904e81c.js";import"./chunks/Inputs.a721047f.js";import"./chunks/Listboxes.3c490966.js";import"./chunks/Lists.c1360393.js";import"./chunks/Radios.230b40d2.js";import"./chunks/Selects.7f4e72d6.js";import"./chunks/Textareas.4dc66c13.js";const d={id:"frontmatter-title",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=s("h2",{id:"import",tabindex:"-1"},[n("Import "),s("a",{class:"header-anchor",href:"#import","aria-hidden":"true"},"#")],-1),y=s("a",{href:"/vueventus/guides/vueventus-cli.html"},"vueventus CLI",-1),_=s("a",{href:"/vueventus/guides/vv-update-cli.html"},"vv-update CLI",-1),m=t(`<div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// ./src/components/SomeComponent.vue</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> VvScrollUp </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./vv/buttons/VvScrollUp.vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>CLI installed components pass along VueVentus core functionalities via component props, so you can fully customize each prop default and applied classes resulting from default and component instance values, by overriding VvConfig defaults in your app <code>./src/app.vv.ts</code> file.</p><p>From there, you can extend, combine, and leverage the VueVentus styling management patterns as needed for your project-specific components, interfaces and content!</p></div><h2 id="prop-buttonclasses" tabindex="-1">Prop: buttonClasses <a class="header-anchor" href="#prop-buttonclasses" aria-hidden="true">#</a></h2>`,3),D=s("strong",null,[s("code",null,"String")],-1),g=s("br",null,null,-1),b=s("code",null,"buttonClasses",-1),f=t(`<h3 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvScrollUp</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">button-classes</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rounded-full</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="prop-color" tabindex="-1">Prop: color <a class="header-anchor" href="#prop-color" aria-hidden="true">#</a></h2>`,3),v=s("strong",null,[s("code",null,"String")],-1),F=s("br",null,null,-1),S=s("code",null,"color",-1),T=s("code",null,"palette",-1),C=t(`<h3 id="syntax-1" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-1" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvScrollUp</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="typing-for-downstream-component-instances" tabindex="-1">Typing for Downstream Component Instances <a class="header-anchor" href="#typing-for-downstream-component-instances" aria-hidden="true">#</a></h3><p>Coming Soon!</p><h2 id="prop-debug" tabindex="-1">Prop: debug <a class="header-anchor" href="#prop-debug" aria-hidden="true">#</a></h2>`,5),x=s("strong",null,[s("code",null,"Boolean")],-1),V=s("br",null,null,-1),A=s("code",null,"debug",-1),w=s("code",null,"data-vv-scroll-up-",-1),P=t(`<h3 id="syntax-2" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-2" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvScrollUp</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:debug</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="prop-fab" tabindex="-1">Prop: fab <a class="header-anchor" href="#prop-fab" aria-hidden="true">#</a></h2>`,3),k=s("strong",null,[s("code",null,"Boolean")],-1),I=s("br",null,null,-1),E=s("code",null,"fab",-1),U=s("code",null,"fab",-1),q=s("code",null,"fabSizes",-1),N=t(`<h3 id="syntax-3" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-3" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvScrollUp</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:fab</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="prop" tabindex="-1">Prop: <a class="header-anchor" href="#prop" aria-hidden="true">#</a></h2>`,3),$=s("strong",null,[s("code",null,"Boolean")],-1),z=s("br",null,null,-1),B=s("code",null,"isVisible",-1),R=s("code",null,"false",-1),j=s("code",null,"isVisible",-1),M=s("code",null,"true",-1),L=t(`<h3 id="syntax-4" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-4" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvScrollUp</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:is-visible</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="prop-offsetminimum" tabindex="-1">Prop: offsetMinimum <a class="header-anchor" href="#prop-offsetminimum" aria-hidden="true">#</a></h2>`,3),O=s("strong",null,[s("code",null,"Number")],-1),G=s("br",null,null,-1),H=s("code",null,"offsetMinimum",-1),J=s("code",null,"offsetMinimum",-1),W=t(`<h3 id="syntax-5" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-5" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvScrollUp</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:offset-minimum</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="prop-palette" tabindex="-1">Prop: palette <a class="header-anchor" href="#prop-palette" aria-hidden="true">#</a></h2>`,3),K=s("strong",null,[s("code",null,"String")],-1),Q=s("br",null,null,-1),X=s("code",null,"palette",-1),Y=s("code",null,"color",-1),Z=t(`<h3 id="syntax-6" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-6" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvScrollUp</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">palette</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">solid</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="typing-for-downstream-component-instances-1" tabindex="-1">Typing for Downstream Component Instances <a class="header-anchor" href="#typing-for-downstream-component-instances-1" aria-hidden="true">#</a></h3><p>Coming Soon!</p><h2 id="prop-size" tabindex="-1">Prop: size <a class="header-anchor" href="#prop-size" aria-hidden="true">#</a></h2>`,5),ss=s("strong",null,[s("code",null,"String")],-1),ns=s("br",null,null,-1),es=s("code",null,"size",-1),ls=t(`<h3 id="syntax-7" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-7" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvScrollUp</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="typing-for-downstream-component-instances-2" tabindex="-1">Typing for Downstream Component Instances <a class="header-anchor" href="#typing-for-downstream-component-instances-2" aria-hidden="true">#</a></h3><p>Coming Soon!</p><h2 id="prop-title" tabindex="-1">Prop: title <a class="header-anchor" href="#prop-title" aria-hidden="true">#</a></h2>`,5),ts=s("strong",null,[s("code",null,"String")],-1),as=s("br",null,null,-1),os=s("code",null,"title",-1),ps=t(`<h3 id="syntax-8" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-8" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvScrollUp</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Scroll to Top</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="slot-default" tabindex="-1">Slot: #default <a class="header-anchor" href="#slot-default" aria-hidden="true">#</a></h2>`,3),rs=s("code",null,"#default",-1),is=t(`<h3 id="syntax-9" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-9" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvScrollUp</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvFa</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">house</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">VvScrollUp</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,2),As=JSON.parse('{"title":"VvScrollUp Component","description":"","frontmatter":{"title":"VvScrollUp Component"},"headers":[{"level":2,"title":"Import","slug":"import","link":"#import","children":[]},{"level":2,"title":"Prop: buttonClasses","slug":"prop-buttonclasses","link":"#prop-buttonclasses","children":[{"level":3,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]}]},{"level":2,"title":"Prop: color","slug":"prop-color","link":"#prop-color","children":[{"level":3,"title":"Syntax","slug":"syntax-1","link":"#syntax-1","children":[]},{"level":3,"title":"Typing for Downstream Component Instances","slug":"typing-for-downstream-component-instances","link":"#typing-for-downstream-component-instances","children":[]}]},{"level":2,"title":"Prop: debug","slug":"prop-debug","link":"#prop-debug","children":[{"level":3,"title":"Syntax","slug":"syntax-2","link":"#syntax-2","children":[]}]},{"level":2,"title":"Prop: fab","slug":"prop-fab","link":"#prop-fab","children":[{"level":3,"title":"Syntax","slug":"syntax-3","link":"#syntax-3","children":[]}]},{"level":2,"title":"Prop:","slug":"prop","link":"#prop","children":[{"level":3,"title":"Syntax","slug":"syntax-4","link":"#syntax-4","children":[]}]},{"level":2,"title":"Prop: offsetMinimum","slug":"prop-offsetminimum","link":"#prop-offsetminimum","children":[{"level":3,"title":"Syntax","slug":"syntax-5","link":"#syntax-5","children":[]}]},{"level":2,"title":"Prop: palette","slug":"prop-palette","link":"#prop-palette","children":[{"level":3,"title":"Syntax","slug":"syntax-6","link":"#syntax-6","children":[]},{"level":3,"title":"Typing for Downstream Component Instances","slug":"typing-for-downstream-component-instances-1","link":"#typing-for-downstream-component-instances-1","children":[]}]},{"level":2,"title":"Prop: size","slug":"prop-size","link":"#prop-size","children":[{"level":3,"title":"Syntax","slug":"syntax-7","link":"#syntax-7","children":[]},{"level":3,"title":"Typing for Downstream Component Instances","slug":"typing-for-downstream-component-instances-2","link":"#typing-for-downstream-component-instances-2","children":[]}]},{"level":2,"title":"Prop: title","slug":"prop-title","link":"#prop-title","children":[{"level":3,"title":"Syntax","slug":"syntax-8","link":"#syntax-8","children":[]}]},{"level":2,"title":"Slot: #default","slug":"slot-default","link":"#slot-default","children":[{"level":3,"title":"Syntax","slug":"syntax-9","link":"#syntax-9","children":[]}]}],"relativePath":"components/buttons/vv-scroll-up.md","lastUpdated":1673045914000}'),cs={name:"components/buttons/vv-scroll-up.md"},ws=Object.assign(cs,{setup(ds){return(l,us)=>(r(),i("div",null,[s("h1",d,[n(e(l.$frontmatter.title)+" ",1),u]),s("p",null,"The "+e(l.$frontmatter.title)+" is a GSAP powered component that automatically handles the classic scroll to the top of a page functionality, and also by default hides itself when the page is scrolled fully to the top.",1),h,s("p",null,[n("To import a "+e(l.$frontmatter.title)+" installed by the ",1),y,n(" or "),_,n(":")]),m,s("p",null,[n("Type: "),D,g,n(" Default: "),s("strong",null,[s("code",null,'"'+e(o(a).defaults.VvScrollUp.buttonClasses)+'"',1)])]),s("p",null,[n("The "+e(l.$frontmatter.title)+" ",1),b,n(" prop sets the underlying VvButton's Tailwind CSS classes.")]),f,s("p",null,[n("Type: "),v,F,n(" Default: "),s("strong",null,[s("code",null,'"'+e(o(a).defaults.VvScrollUp.color)+'"',1)])]),s("p",null,[n("The "+e(l.$frontmatter.title)+" ",1),S,n(" prop sets the underlying VvButton's palette color value (in conjunction with the "),T,n(" prop value).")]),C,s("p",null,[n("Type: "),x,V,n(" Default: "),s("strong",null,[s("code",null,e(o(a).defaults.VvScrollUp.debug),1)])]),s("p",null,[n("The "+e(l.$frontmatter.title)+" ",1),A,n(" prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through "),w,n(" prefixed HTML attributes.")]),P,s("p",null,[n("Type: "),k,I,n(" Default: "),s("strong",null,[s("code",null,e(o(a).defaults.VvScrollUp.fab),1)])]),s("p",null,[n("The "+e(l.$frontmatter.title)+" ",1),E,n(" prop sets the underlying VvButton's boolean "),U,n(" value, which switches the base classes for the button to the "),q,n(" set of classes.")]),N,s("p",null,[n("Type: "),$,z,n(" Default: "),s("strong",null,[s("code",null,e(o(a).defaults.VvScrollUp.isVisible),1)])]),s("p",null,[n("The "+e(l.$frontmatter.title)+" ",1),B,n(" prop sets the visibility state of the component, which by default is "),R,n(" to allow the VvScrollUp component to animate into view once a user has scrolled a page. If the value of the "),j,n(" prop is "),M,n(", then the component won't animate in/out and will stay visible.")]),L,s("p",null,[n("Type: "),O,G,n(" Default: "),s("strong",null,[s("code",null,e(o(a).defaults.VvScrollUp.offsetMinimum),1)])]),s("p",null,[n("The "+e(l.$frontmatter.title)+" ",1),H,n(" prop sets threshold (in pixels) that determines when the VvScrollUp component will animate into view once a user has scrolled a page past the "),J,n(" value.")]),W,s("p",null,[n("Type: "),K,Q,n(" Default: "),s("strong",null,[s("code",null,'"'+e(o(a).defaults.VvScrollUp.palette)+'"',1)])]),s("p",null,[n("The "+e(l.$frontmatter.title)+" ",1),X,n(" prop sets the underlying VvButton's color value (in conjunction with the "),Y,n(" prop value).")]),Z,s("p",null,[n("Type: "),ss,ns,n(" Default: "),s("strong",null,[s("code",null,'"'+e(o(a).defaults.VvScrollUp.size)+'"',1)])]),s("p",null,[n("The "+e(l.$frontmatter.title)+" ",1),es,n(" prop sets the underlying VvButton's size value.")]),ls,s("p",null,[n("Type: "),ts,as,n(" Default: "),s("strong",null,[s("code",null,'"'+e(o(a).defaults.VvScrollUp.title)+'"',1)])]),s("p",null,[n("The "+e(l.$frontmatter.title)+" ",1),os,n(" prop sets the underlying VvButton's title attribute value, which is shown to users that hover over the button without moving the cursor for a second or so, and is also accessible by screen readers.")]),ps,s("p",null,[n("The "+e(l.$frontmatter.title)+" has a standard ",1),rs,n(" Vue slot to insert child elements/nodes into the component.")]),is,c(p)]))}});export{As as __pageData,ws as default};