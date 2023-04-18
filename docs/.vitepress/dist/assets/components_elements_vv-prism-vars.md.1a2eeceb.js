import{_ as r}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.9897eeba.js";import{V as o}from"./chunks/VvConfig.3c57a8a8.js";import{o as i,c as p,z as e,a as t,t as s,b as l,G as c,O as a}from"./chunks/framework.d4e334f8.js";import"./chunks/Anchors.8bdcb837.js";import"./chunks/Text.d88c79dd.js";import"./chunks/Transitions.1d316f13.js";import"./chunks/Buttons.03bca295.js";import"./chunks/Checkboxes.344e9626.js";import"./chunks/ColorModes.4904e81c.js";import"./chunks/Inputs.1b95f59c.js";import"./chunks/Listboxes.e439c03d.js";import"./chunks/Lists.c1360393.js";import"./chunks/Radios.4e71a451.js";import"./chunks/Selects.f19d72d8.js";import"./chunks/Textareas.9fe3679a.js";const d={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),u=e("a",{href:"https://github.com/antfu",target:"_blank",rel:"noreferrer"},"@antfu's",-1),m=e("a",{href:"https://github.com/antfu/prism-theme-vars",target:"_blank",rel:"noreferrer"},"prism-theme-vars",-1),_={class:"danger custom-block"},y=e("p",{class:"custom-block-title"},"OVERRIDES PRISM.JS CSS",-1),g=e("h2",{id:"import",tabindex:"-1"},[t("Import "),e("a",{class:"header-anchor",href:"#import","aria-label":'Permalink to "Import"'},"​")],-1),b=e("a",{href:"/vueventus/guides/vueventus-cli.html"},"vueventus CLI",-1),D=e("a",{href:"/vueventus/guides/vv-update-cli.html"},"vv-update CLI",-1),f=a(`<div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// ./src/components/SomeComponent.vue</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> VvPrismVars </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./vv/elements/VvPrismVars.vue</span><span style="color:#89DDFF;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>CLI installed components pass along VueVentus core functionalities via component props, so you can fully customize each prop default and applied classes resulting from default and component instance values, by overriding VvConfig defaults in your app <code>./src/app.vv.ts</code> file.</p><p>From there, you can extend, combine, and leverage the VueVentus styling management patterns as needed for your project-specific components, interfaces and content!</p></div><h2 id="prop-commentstyle" tabindex="-1">Prop: commentStyle <a class="header-anchor" href="#prop-commentstyle" aria-label="Permalink to &quot;Prop: commentStyle&quot;">​</a></h2>`,3),F=e("strong",null,[e("code",null,"String")],-1),v=e("br",null,null,-1),S=e("strong",null,[e("code",null,'"normal"')],-1),T=e("strong",null,[e("code",null,'"italic"')],-1),C=e("strong",null,[e("code",null,'"oblique"')],-1),P=e("br",null,null,-1),V=e("code",null,"commentStyle",-1),x=a('<h3 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvPrismVars</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">comment-style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">normal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="typing-for-downstream-component-instances" tabindex="-1">Typing for Downstream Component Instances <a class="header-anchor" href="#typing-for-downstream-component-instances" aria-label="Permalink to &quot;Typing for Downstream Component Instances&quot;">​</a></h3><p>Coming Soon!</p><h2 id="prop-debug" tabindex="-1">Prop: debug <a class="header-anchor" href="#prop-debug" aria-label="Permalink to &quot;Prop: debug&quot;">​</a></h2>',5),q=e("strong",null,[e("code",null,"Boolean")],-1),k=e("br",null,null,-1),A=e("code",null,"debug",-1),w=e("code",null,"data-vv-prism-vars-",-1),I=a('<h3 id="syntax-1" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-1" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvPrismVars</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:debug</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="prop-fontsize" tabindex="-1">Prop: fontSize <a class="header-anchor" href="#prop-fontsize" aria-label="Permalink to &quot;Prop: fontSize&quot;">​</a></h2>',3),E=e("strong",null,[e("code",null,"String")],-1),N=e("br",null,null,-1),$=e("code",null,"fontSize",-1),R=a('<h3 id="syntax-2" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-2" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvPrismVars</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">font-size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1rem</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="prop-lineheight" tabindex="-1">Prop: lineHeight <a class="header-anchor" href="#prop-lineheight" aria-label="Permalink to &quot;Prop: lineHeight&quot;">​</a></h2>',3),z=e("strong",null,[e("code",null,"String")],-1),O=e("br",null,null,-1),H=e("code",null,"lineHeight",-1),L=a('<h3 id="syntax-3" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-3" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvPrismVars</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">line-height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.3rem</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="prop-linehighlightopacity" tabindex="-1">Prop: lineHighlightOpacity <a class="header-anchor" href="#prop-linehighlightopacity" aria-label="Permalink to &quot;Prop: lineHighlightOpacity&quot;">​</a></h2>',3),j=e("strong",null,[e("code",null,"String")],-1),B=e("br",null,null,-1),J=e("code",null,"lineHighlightOpacity",-1),M=a('<h3 id="syntax-4" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-4" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvPrismVars</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">line-highlight-opacity</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.25</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="prop-textshadow" tabindex="-1">Prop: textShadow <a class="header-anchor" href="#prop-textshadow" aria-label="Permalink to &quot;Prop: textShadow&quot;">​</a></h2>',3),U=e("strong",null,[e("code",null,"String")],-1),G=e("br",null,null,-1),W=e("code",null,"textShadow",-1),K=e("code",null,'"unset"',-1),Q=a('<h3 id="syntax-5" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-5" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvPrismVars</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text-shadow</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">unset</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="typing-for-downstream-component-instances-1" tabindex="-1">Typing for Downstream Component Instances <a class="header-anchor" href="#typing-for-downstream-component-instances-1" aria-label="Permalink to &quot;Typing for Downstream Component Instances&quot;">​</a></h3><p>Coming Soon!</p><h2 id="prop-urldecoration" tabindex="-1">Prop: urlDecoration <a class="header-anchor" href="#prop-urldecoration" aria-label="Permalink to &quot;Prop: urlDecoration&quot;">​</a></h2>',5),X=e("strong",null,[e("code",null,"String")],-1),Y=e("br",null,null,-1),Z=e("strong",null,[e("code",null,'"underline"')],-1),ee=e("strong",null,[e("code",null,'"overline"')],-1),te=e("strong",null,[e("code",null,'"none"')],-1),se=e("code",null,"urlDecoration",-1),ne=a('<h3 id="syntax-6" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-6" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvPrismVars</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">url-decoration</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">underline</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="typing-for-downstream-component-instances-2" tabindex="-1">Typing for Downstream Component Instances <a class="header-anchor" href="#typing-for-downstream-component-instances-2" aria-label="Permalink to &quot;Typing for Downstream Component Instances&quot;">​</a></h3><p>Coming Soon!</p><h2 id="slot-none" tabindex="-1">Slot: None <a class="header-anchor" href="#slot-none" aria-label="Permalink to &quot;Slot: None&quot;">​</a></h2>',5),ae={class:"danger custom-block"},oe=e("p",{class:"custom-block-title"},"NO SLOT AVAILABLE",-1),Te=JSON.parse('{"title":"VvPrismVars Component","description":"","frontmatter":{"title":"VvPrismVars Component"},"headers":[],"relativePath":"components/elements/vv-prism-vars.md","lastUpdated":1681774422000}'),le={name:"components/elements/vv-prism-vars.md"},Ce=Object.assign(le,{setup(re){return(n,ie)=>(i(),p("div",null,[e("h1",d,[t(s(n.$frontmatter.title)+" ",1),h]),e("p",null,[t("The "+s(n.$frontmatter.title)+" is an implementation of ",1),u,t(" awesome "),m,t(" package, but setup to allow you to use Tailwind CSS classes to control your app's code highlighting colors.")]),e("div",_,[y,e("p",null,"The "+s(n.$frontmatter.title)+" pushes a CSS variables packed into a style tag preceding your highlighted code. This CSS cascades over any Prism.js CSS theme you may be using.",1)]),g,e("p",null,[t("To import a "+s(n.$frontmatter.title)+" installed by the ",1),b,t(" or "),D,t(":")]),f,e("p",null,[t("Type: "),F,v,t(" Valid Values: "),S,t(", "),T,t(", "),C,P,t(" Default: "),e("strong",null,[e("code",null,'"'+s(l(o).defaults.VvPrismVars.commentStyle)+'"',1)])]),e("p",null,[t("The "+s(n.$frontmatter.title)+" ",1),V,t(" prop sets the font style of comments in highlighted code.")]),x,e("p",null,[t("Type: "),q,k,t(" Default: "),e("strong",null,[e("code",null,s(l(o).defaults.VvPrismVars.debug),1)])]),e("p",null,[t("The "+s(n.$frontmatter.title)+" ",1),A,t(" prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through "),w,t(" prefixed HTML attributes.")]),I,e("p",null,[t("Type: "),E,N,t(" Default: "),e("strong",null,[e("code",null,'"'+s(l(o).defaults.VvPrismVars.fontSize)+'"',1)])]),e("p",null,[t("The "+s(n.$frontmatter.title)+" ",1),$,t(" prop sets the font size of highlighted code.")]),R,e("p",null,[t("Type: "),z,O,t(" Default: "),e("strong",null,[e("code",null,'"'+s(l(o).defaults.VvPrismVars.lineHeight)+'"',1)])]),e("p",null,[t("The "+s(n.$frontmatter.title)+" ",1),H,t(" prop sets the line height of highlighted code.")]),L,e("p",null,[t("Type: "),j,B,t(" Default: "),e("strong",null,[e("code",null,'"'+s(l(o).defaults.VvPrismVars.lineHighlightOpacity)+'"',1)])]),e("p",null,[t("The "+s(n.$frontmatter.title)+" ",1),J,t(" prop sets the opacity of highlighted lines of code within your highlighted code.")]),M,e("p",null,[t("Type: "),U,G,t(" Default: "),e("strong",null,[e("code",null,'"'+s(l(o).defaults.VvPrismVars.textShadow)+'"',1)])]),e("p",null,[t("The "+s(n.$frontmatter.title)+" ",1),W,t(" prop sets the text shadowing used for highlighted code. VueVentus sets this to "),K,t(" by default, because text shadows can make the code a little harder to read in the contexts of dark/light mode highlighted code.")]),Q,e("p",null,[t("Type: "),X,Y,t(" Valid Values: "),Z,t(", "),ee,t(", "),te,t(" Default: "),e("strong",null,[e("code",null,'"'+s(l(o).defaults.VvPrismVars.urlDecoration)+'"',1)])]),e("p",null,[t("The "+s(n.$frontmatter.title)+" ",1),se,t(" prop sets the text decoration for any URL's that may appear in your highlighted code or code comments.")]),ne,e("div",ae,[oe,e("p",null,"The "+s(n.$frontmatter.title)+" does not have a Vue slot option.",1)]),c(r)]))}});export{Te as __pageData,Ce as default};
