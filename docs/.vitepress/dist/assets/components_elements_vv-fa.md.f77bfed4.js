import{_ as i}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.714dc4ec.js";import{V as o}from"./chunks/VvConfig.f99e8744.js";import{o as r,c as p,a as e,b as n,t as s,u as l,d as c,e as t}from"./app.7595295d.js";import"./chunks/Anchors.bafcf40e.js";import"./chunks/Text.d88c79dd.js";import"./chunks/Transitions.262fdc37.js";import"./chunks/Buttons.b4b40e12.js";import"./chunks/Checkboxes.81ecc6c3.js";import"./chunks/ColorModes.4904e81c.js";import"./chunks/Inputs.a721047f.js";import"./chunks/Listboxes.3c490966.js";import"./chunks/Lists.c1360393.js";import"./chunks/Radios.230b40d2.js";import"./chunks/Selects.7f4e72d6.js";import"./chunks/Textareas.4dc66c13.js";const d={id:"frontmatter-title",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=e("code",null,"font-awesome-icon",-1),m=e("a",{href:"https://fontawesome.com/docs/web/use-with/vue/add-icons",target:"_blank",rel:"noreferrer"},"vue-fontawesome",-1),_=e("h2",{id:"import",tabindex:"-1"},[n("Import "),e("a",{class:"header-anchor",href:"#import","aria-hidden":"true"},"#")],-1),y=e("a",{href:"/vueventus/guides/vueventus-cli.html"},"vueventus CLI",-1),f=e("a",{href:"/vueventus/guides/vv-update-cli.html"},"vv-update CLI",-1),g=t(`<div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// ./src/components/SomeComponent.vue</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> VvFa </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./vv/elements/VvFa.vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>CLI installed components pass along VueVentus core functionalities via component props, so you can fully customize each prop default and applied classes resulting from default and component instance values, by overriding VvConfig defaults in your app <code>./src/app.vv.ts</code> file.</p><p>From there, you can extend, combine, and leverage the VueVentus styling management patterns as needed for your project-specific components, interfaces and content!</p></div><h2 id="prop-debug" tabindex="-1">Prop: debug <a class="header-anchor" href="#prop-debug" aria-hidden="true">#</a></h2>`,3),v=e("strong",null,[e("code",null,"Boolean")],-1),F=e("br",null,null,-1),b=e("code",null,"debug",-1),D=e("code",null,"data-vv-fa-",-1),T=t(`<h3 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvFa</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:debug</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="prop-family" tabindex="-1">Prop: family <a class="header-anchor" href="#prop-family" aria-hidden="true">#</a></h2>`,3),C=e("strong",null,[e("code",null,"String")],-1),V=e("br",null,null,-1),S=e("a",{href:"/vueventus/components/prop-validators.html#validfontawesomefamilies"},"ValidFontAwesomeFamilies Module",-1),x=e("br",null,null,-1),w=e("code",null,"family",-1),A=e("code",null,"library()",-1),k=t(`<h3 id="syntax-1" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-1" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvFa</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">family</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fas</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="typing-for-downstream-component-instances" tabindex="-1">Typing for Downstream Component Instances <a class="header-anchor" href="#typing-for-downstream-component-instances" aria-hidden="true">#</a></h3><p>Coming Soon!</p><h2 id="prop-icon" tabindex="-1">Prop: icon <a class="header-anchor" href="#prop-icon" aria-hidden="true">#</a></h2>`,5),I=e("strong",null,[e("code",null,"String")],-1),P=e("br",null,null,-1),E=e("code",null,"icon",-1),z=e("code",null,"library()",-1),N=t(`<h3 id="syntax-2" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-2" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvFa</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">house</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="prop-size" tabindex="-1">Prop: size <a class="header-anchor" href="#prop-size" aria-hidden="true">#</a></h2>`,3),$=e("strong",null,[e("code",null,"String")],-1),q=e("br",null,null,-1),L=e("a",{href:"/vueventus/components/prop-validators.html#validfontawesomesizes"},"ValidFontAwesomeSizes Module",-1),B=e("br",null,null,-1),R=e("code",null,"size",-1),j=e("code",null,"library()",-1),O=t(`<h3 id="syntax-3" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-3" aria-hidden="true">#</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvFa</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1x</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="typing-for-downstream-component-instances-1" tabindex="-1">Typing for Downstream Component Instances <a class="header-anchor" href="#typing-for-downstream-component-instances-1" aria-hidden="true">#</a></h3><p>Coming Soon!</p><h2 id="slot-none" tabindex="-1">Slot: None <a class="header-anchor" href="#slot-none" aria-hidden="true">#</a></h2>`,5),M={class:"danger custom-block"},H=e("p",{class:"custom-block-title"},"NO SLOT AVAILABLE",-1),pe=JSON.parse('{"title":"VvFa Component","description":"","frontmatter":{"title":"VvFa Component"},"headers":[{"level":2,"title":"Import","slug":"import","link":"#import","children":[]},{"level":2,"title":"Prop: debug","slug":"prop-debug","link":"#prop-debug","children":[{"level":3,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]}]},{"level":2,"title":"Prop: family","slug":"prop-family","link":"#prop-family","children":[{"level":3,"title":"Syntax","slug":"syntax-1","link":"#syntax-1","children":[]},{"level":3,"title":"Typing for Downstream Component Instances","slug":"typing-for-downstream-component-instances","link":"#typing-for-downstream-component-instances","children":[]}]},{"level":2,"title":"Prop: icon","slug":"prop-icon","link":"#prop-icon","children":[{"level":3,"title":"Syntax","slug":"syntax-2","link":"#syntax-2","children":[]}]},{"level":2,"title":"Prop: size","slug":"prop-size","link":"#prop-size","children":[{"level":3,"title":"Syntax","slug":"syntax-3","link":"#syntax-3","children":[]},{"level":3,"title":"Typing for Downstream Component Instances","slug":"typing-for-downstream-component-instances-1","link":"#typing-for-downstream-component-instances-1","children":[]}]},{"level":2,"title":"Slot: None","slug":"slot-none","link":"#slot-none","children":[]}],"relativePath":"components/elements/vv-fa.md","lastUpdated":1673045926000}'),J={name:"components/elements/vv-fa.md"},ce=Object.assign(J,{setup(U){return(a,W)=>(r(),p("div",null,[e("h1",d,[n(s(a.$frontmatter.title)+" ",1),u]),e("p",null,[n("The "+s(a.$frontmatter.title)+" is essentially a pass-through for the ",1),h,n(" component from FontAwesome's "),m,n(", but setup for VueVentus config defaults and components.")]),_,e("p",null,[n("To import a "+s(a.$frontmatter.title)+" installed by the ",1),y,n(" or "),f,n(":")]),g,e("p",null,[n("Type: "),v,F,n(" Default: "),e("strong",null,[e("code",null,s(l(o).defaults.VvFa.debug),1)])]),e("p",null,[n("The "+s(a.$frontmatter.title)+" ",1),b,n(" prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through "),D,n(" prefixed HTML attributes.")]),T,e("p",null,[n("Type: "),C,V,n(" Valid Values: "),S,x,n(" Default: "),e("strong",null,[e("code",null,'"'+s(l(o).defaults.VvFa.family)+'"',1)])]),e("p",null,[n("The "+s(a.$frontmatter.title)+" ",1),w,n(" prop sets the font awesome family of icons you are using via your FontAwesome "),A,n(" icon families.")]),k,e("p",null,[n("Type: "),I,P,n(" Default: "),e("strong",null,[e("code",null,'"'+s(l(o).defaults.VvFa.icon)+'"',1)])]),e("p",null,[n("The "+s(a.$frontmatter.title)+" ",1),E,n(" prop sets the font awesome icon from the icons you are using via your FontAwesome "),z,n(" declared icons.")]),N,e("p",null,[n("Type: "),$,q,n(" Valid Values: "),L,B,n(" Default: "),e("strong",null,[e("code",null,'"'+s(l(o).defaults.VvFa.size)+'"',1)])]),e("p",null,[n("The "+s(a.$frontmatter.title)+" ",1),R,n(" prop sets the font awesome size for any icons you are using via your FontAwesome "),j,n(" declared icons.")]),O,e("div",M,[H,e("p",null,"The "+s(a.$frontmatter.title)+" does not have a Vue slot option.",1)]),c(i)]))}});export{pe as __pageData,ce as default};
