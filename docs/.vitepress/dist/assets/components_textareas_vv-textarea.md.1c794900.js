import{_ as x}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.3e8eb2e2.js";import{V as r}from"./chunks/VvConfig.3c57a8a8.js";import{d as T,R as _,l as v,_ as A,o as f,c as g,n as w,z as s,a as e,t as p,b as t,G as l,O as i}from"./chunks/framework.d4e334f8.js";import"./chunks/Anchors.8bdcb837.js";import"./chunks/Text.d88c79dd.js";import"./chunks/Transitions.1d316f13.js";import"./chunks/Buttons.03bca295.js";import"./chunks/Checkboxes.344e9626.js";import"./chunks/ColorModes.4904e81c.js";import"./chunks/Inputs.1b95f59c.js";import"./chunks/Listboxes.e439c03d.js";import"./chunks/Lists.c1360393.js";import"./chunks/Radios.4e71a451.js";import"./chunks/Selects.f19d72d8.js";import"./chunks/Textareas.9fe3679a.js";const S=T({name:"VvTextarea",emits:["update:modelValue"],props:{color:{type:String,default:r.defaults.VvTextarea.color},debug:{type:Boolean,default:r.defaults.VvTextarea.debug},modelValue:{type:String,default:""},palette:{type:String,default:r.defaults.VvTextarea.palette},rowSize:{type:String,default:r.defaults.VvTextarea.rowSize},size:{type:String,default:r.defaults.VvTextarea.size}},setup(n){const a=Object.keys(_("vv",{})).length>0?_("vv"):r;let u=v(()=>{var d,y,m,h,F,b;let c=[];return(d=a==null?void 0:a.textareas)!=null&&d.base()&&c.push(a.textareas.base()),n.size!==""&&((m=(y=a==null?void 0:a.textareas)==null?void 0:y.sizes)!=null&&m[n.size])&&c.push(String(a.textareas.sizes[n.size])),(b=(F=(h=a==null?void 0:a.textareas)==null?void 0:h.palettes)==null?void 0:F[n.palette])!=null&&b[n.color]&&c.push(String(a.textareas.palettes[n.palette][n.color])),c.join(" ").trim()}),D=v(()=>{var c,d;if(n.rowSize!==""&&((d=(c=a==null?void 0:a.textareas)==null?void 0:c.rowSizes)!=null&&d[n.rowSize]))return a.textareas.rowSizes[n.rowSize]});return{classes:u,rows:D,handleTextareaChange:c=>c.target.value}}}),V=["rows","value","data-vv-textarea-generated-classes","data-vv-textarea-prop-color","data-vv-textarea-prop-model-value","data-vv-textarea-prop-palette","data-vv-textarea-prop-row-size","data-vv-textarea-prop-size"];function z(n,a,u,D,C,c){return f(),g("textarea",{class:w(n.classes),rows:n.rows,value:n.modelValue,onInput:a[0]||(a[0]=d=>n.$emit("update:modelValue",n.handleTextareaChange(d))),"data-vv-textarea-generated-classes":n.debug?n.classes:null,"data-vv-textarea-prop-color":n.debug?n.color:null,"data-vv-textarea-prop-model-value":n.debug?n.modelValue:null,"data-vv-textarea-prop-palette":n.debug?n.palette:null,"data-vv-textarea-prop-row-size":n.debug?n.rowSize:null,"data-vv-textarea-prop-size":n.debug?n.size:null},null,42,V)}const o=A(S,[["render",z]]),q={id:"frontmatter-title",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),P=s("h2",{id:"import",tabindex:"-1"},[e("Import "),s("a",{class:"header-anchor",href:"#import","aria-label":'Permalink to "Import"'},"​")],-1),k=s("a",{href:"/vueventus/guides/vueventus-cli.html"},"vueventus CLI",-1),I=s("a",{href:"/vueventus/guides/vv-update-cli.html"},"vv-update CLI",-1),$=i(`<div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// ./src/components/SomeComponent.vue</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> VvTextarea </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./vv/textareas/VvTextarea.vue</span><span style="color:#89DDFF;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>CLI installed components pass along VueVentus core functionalities via component props, so you can fully customize each prop default and applied classes resulting from default and component instance values, by overriding VvConfig defaults in your app <code>./src/app.vv.ts</code> file.</p><p>From there, you can extend, combine, and leverage the VueVentus styling management patterns as needed for your project-specific components, interfaces and content!</p></div>`,2),R=i('<div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VvTextarea</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vueventus</span><span style="color:#89DDFF;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Importing raw VueVentus library components will still apply your <code>./src/app.vv.ts</code> settings automatically through the Vue <code>provide()</code> and <code>inject()</code> pattern. All raw VueVentus library components automatically check for a provided <code>&quot;vv&quot;</code> keyed object with a <a href="/vueventus/typescript/interfaces.html#configvv">ConfigVv</a> type interface.</p></div><div class="warning custom-block"><p class="custom-block-title">CLI or Raw?</p><p>The main difference between raw library components and CLI installed components, is that you have no control over component defaults with raw library components. This is less flexible than using CLI installed components, because control of component defaults can greatly reduce the number of props a dev has to type for component instances, which reduces app code.</p><p>Meanwhile, the control CLI installed components provide through customizable defaults, opens up to a global level (styling management system) control for default component state characteristic values (particularly powerful with color and proportional size characteristics).</p></div><h2 id="emits-update-modelvalue" tabindex="-1">Emits: update:modelValue <a class="header-anchor" href="#emits-update-modelvalue" aria-label="Permalink to &quot;Emits: update:modelValue&quot;">​</a></h2><p>Emits: <strong><code>update:modelValue</code></strong><br> Emit Value Type: <strong><code>String</code></strong></p>',5),N=s("code",null,"update:modelValue",-1),j={class:"tip custom-block"},L=s("p",{class:"custom-block-title"},"TIP",-1),B=s("code",null,"v-model",-1),O=i(`<h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- ./src/components/AppTextarea.vue --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VvTextarea</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@obewds/vueventus</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> someValue </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvTextarea</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">someValue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="prop-color" tabindex="-1">Prop: color <a class="header-anchor" href="#prop-color" aria-label="Permalink to &quot;Prop: color&quot;">​</a></h2>`,3),M=s("strong",null,[s("code",null,"String")],-1),G=s("br",null,null,-1),H=s("code",null,"color",-1),J=s("code",null,"color",-1),U=s("code",null,"palette",-1),W=i(`<h3 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvTextarea</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mb-2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvTextarea</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mb-2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvTextarea</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mb-2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-label="Permalink to &quot;Result&quot;">​</a></h3>`,3),Y={class:"w-full pt-4"},K=s("h3",{id:"typing-for-downstream-component-instances",tabindex:"-1"},[e("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances","aria-label":'Permalink to "Typing for Downstream Component Instances"'},"​")],-1),Q=s("p",null,"Coming Soon!",-1),X=s("h2",{id:"prop-debug",tabindex:"-1"},[e("Prop: debug "),s("a",{class:"header-anchor",href:"#prop-debug","aria-label":'Permalink to "Prop: debug"'},"​")],-1),Z=s("strong",null,[s("code",null,"Boolean")],-1),ss=s("br",null,null,-1),es=s("code",null,"debug",-1),as=s("code",null,"data-vv-textarea-",-1),ns=i('<h3 id="syntax-1" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-1" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvTextarea</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:debug</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="result-1" tabindex="-1">Result <a class="header-anchor" href="#result-1" aria-label="Permalink to &quot;Result&quot;">​</a></h3>',3),ts={class:"w-full pt-4"},ls=s("h2",{id:"prop-palette",tabindex:"-1"},[e("Prop: palette "),s("a",{class:"header-anchor",href:"#prop-palette","aria-label":'Permalink to "Prop: palette"'},"​")],-1),os=s("strong",null,[s("code",null,"String")],-1),ps=s("br",null,null,-1),rs=s("code",null,"palette",-1),cs=s("code",null,"color",-1),is=s("code",null,"palette",-1),ds=i(`<h3 id="syntax-2" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-2" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvTextarea</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">palette</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mb-2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvTextarea</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">palette</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mb-2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvTextarea</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">palette</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mb-2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result-2" tabindex="-1">Result <a class="header-anchor" href="#result-2" aria-label="Permalink to &quot;Result&quot;">​</a></h3>`,3),us={class:"w-full pt-4"},Ds=s("h3",{id:"typing-for-downstream-component-instances-1",tabindex:"-1"},[e("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances-1","aria-label":'Permalink to "Typing for Downstream Component Instances"'},"​")],-1),ys=s("p",null,"Coming Soon!",-1),ms=s("h2",{id:"prop-size",tabindex:"-1"},[e("Prop: size "),s("a",{class:"header-anchor",href:"#prop-size","aria-label":'Permalink to "Prop: size"'},"​")],-1),hs=s("strong",null,[s("code",null,"String")],-1),Fs=s("br",null,null,-1),bs=s("code",null,"size",-1),_s=i('<h3 id="syntax-3" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-3" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvTextarea</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Size: lg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="result-3" tabindex="-1">Result <a class="header-anchor" href="#result-3" aria-label="Permalink to &quot;Result&quot;">​</a></h3>',3),vs={class:"w-full pt-4"},fs={class:"details custom-block"},gs=s("summary",null,"size prop textarea size examples",-1),Cs={class:"flex flex-wrap items-center gap-2 pt-4"},xs=s("h3",{id:"typing-for-downstream-component-instances-2",tabindex:"-1"},[e("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances-2","aria-label":'Permalink to "Typing for Downstream Component Instances"'},"​")],-1),Ts=s("p",null,"Coming Soon!",-1),As=s("h2",{id:"prop-rowsize",tabindex:"-1"},[e("Prop: rowSize "),s("a",{class:"header-anchor",href:"#prop-rowsize","aria-label":'Permalink to "Prop: rowSize"'},"​")],-1),ws=s("strong",null,[s("code",null,"String")],-1),Ss=s("br",null,null,-1),Vs=s("code",null,"rowSize",-1),zs=s("code",null,'<textarea row="">',-1),qs=i('<h3 id="syntax-4" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-4" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">VvTextarea</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">row-size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Size: lg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="result-4" tabindex="-1">Result <a class="header-anchor" href="#result-4" aria-label="Permalink to &quot;Result&quot;">​</a></h3>',3),Es={class:"w-full pt-4"},Ps={class:"details custom-block"},ks=s("summary",null,"size prop textarea size examples",-1),Is={class:"flex flex-wrap items-center gap-2 pt-4"},$s=s("h2",{id:"slot-none",tabindex:"-1"},[e("Slot: None "),s("a",{class:"header-anchor",href:"#slot-none","aria-label":'Permalink to "Slot: None"'},"​")],-1),Rs={class:"danger custom-block"},Ns=s("p",{class:"custom-block-title"},"NO SLOT AVAILABLE",-1),js=s("code",null,"<textarea>",-1),Ls=s("code",null,'v-bind-""',-1),ne=JSON.parse('{"title":"VvTextarea Component","description":"","frontmatter":{"title":"VvTextarea Component"},"headers":[],"relativePath":"components/textareas/vv-textarea.md","lastUpdated":1681774422000}'),Bs={name:"components/textareas/vv-textarea.md"},te=Object.assign(Bs,{setup(n){return(a,u)=>(f(),g("div",null,[s("h1",q,[e(p(a.$frontmatter.title)+" ",1),E]),s("p",null,"The "+p(a.$frontmatter.title)+" provides a set of props and config module based settings to make a validation ready set of textarea elements for applications with an extremely DRY implementation of atomic classes.",1),P,s("p",null,[e("To import a "+p(a.$frontmatter.title)+" installed by the ",1),k,e(" or "),I,e(":")]),$,s("p",null,"Alternatively, you can install the raw library "+p(a.$frontmatter.title)+" with:",1),R,s("p",null,[e("The "+p(a.$frontmatter.title)+" emits a standard Vue key of ",1),N,e(" upon input event changes of the component's generated textarea value attribute.")]),s("div",j,[L,s("p",null,[e("This means when using the "+p(a.$frontmatter.title)+" downstream in an end application, you can safely use Vue's ",1),B,e(" binding to two-way bind a reactive value through your downstream component and into (and back from) the "+p(a.$frontmatter.title)+" instance.",1)])]),O,s("p",null,[e("Type: "),M,G,e(" Default: "),s("strong",null,[s("code",null,'"'+p(t(r).defaults.VvTextarea.color)+'"',1)])]),s("p",null,[e("The "+p(a.$frontmatter.title)+" ",1),H,e(" prop sets the component instance color based both on the "),J,e(" prop and the "),U,e(" prop value.")]),W,s("div",Y,[l(t(o),{color:"default",class:"mb-2"}),l(t(o),{color:"error",class:"mb-2"}),l(t(o),{color:"success",class:"mb-2"})]),K,Q,X,s("p",null,[e("Type: "),Z,ss,e(" Default: "),s("strong",null,[s("code",null,p(t(r).defaults.VvTextarea.debug),1)])]),s("p",null,[e("The "+p(a.$frontmatter.title)+" ",1),es,e(" prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through "),as,e(" prefixed HTML attributes.")]),ns,s("div",ts,[l(t(o),{debug:!0})]),ls,s("p",null,[e("Type: "),os,ps,e(" Default: "),s("strong",null,[s("code",null,'"'+p(t(r).defaults.VvTextarea.palette)+'"',1)])]),s("p",null,[e("The "+p(a.$frontmatter.title)+" ",1),rs,e(" prop sets the component instance palette based both on the "),cs,e(" prop and the "),is,e(" prop value.")]),ds,s("div",us,[l(t(o),{palette:"default",color:"default",class:"mb-2"}),l(t(o),{palette:"default",color:"error",class:"mb-2"}),l(t(o),{palette:"default",color:"success",class:"mb-2"})]),Ds,ys,ms,s("p",null,[e("Type: "),hs,Fs,e(" Default: "),s("strong",null,[s("code",null,'"'+p(t(r).defaults.VvTextarea.size)+'"',1)])]),s("p",null,[e("The "+p(a.$frontmatter.title)+" ",1),bs,e(" prop sets the component instance size-based classes which in the context of textarea typically involves padding and font size atomic classes.")]),_s,s("div",vs,[l(t(o),{size:"lg",placeholder:"Size: lg"})]),s("details",fs,[gs,s("div",Cs,[l(t(o),{size:"xs",placeholder:"Size: xs"}),l(t(o),{size:"sm",placeholder:"Size: sm"}),l(t(o),{size:"md",placeholder:"Size: md"}),l(t(o),{size:"lg",placeholder:"Size: lg"}),l(t(o),{size:"xl",placeholder:"Size: xl"}),l(t(o),{size:"2xl",placeholder:"Size: 2xl"})])]),xs,Ts,As,s("p",null,[e("Type: "),ws,Ss,e(" Default: "),s("strong",null,[s("code",null,'"'+p(t(r).defaults.VvTextarea.rowSize)+'"',1)])]),s("p",null,[e("The "+p(a.$frontmatter.title)+" ",1),Vs,e(" prop sets the component instance "),zs,e(" number value for the rendered Textarea element, which controls the vertical height of the element.")]),qs,s("div",Es,[l(t(o),{"row-size":"lg",placeholder:"Size: lg"})]),s("details",Ps,[ks,s("div",Is,[l(t(o),{"row-size":"xs",placeholder:"Size: xs"}),l(t(o),{"row-size":"sm",placeholder:"Size: sm"}),l(t(o),{"row-size":"md",placeholder:"Size: md"}),l(t(o),{"row-size":"lg",placeholder:"Size: lg"}),l(t(o),{"row-size":"xl",placeholder:"Size: xl"}),l(t(o),{"row-size":"2xl",placeholder:"Size: 2xl"})])]),$s,s("div",Rs,[Ns,s("p",null,[e("The "+p(a.$frontmatter.title)+" does not have Vue slot option, because it's expected to use this ",1),js,e(" based component with reactive values that are bound to this component (like "),Ls,e(" etc.)")])]),l(x)]))}});export{ne as __pageData,te as default};
