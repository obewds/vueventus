import{_ as x}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.Hzw28_zM.js";import{V as r}from"./chunks/VvConfig.2rkets_p.js";import{d as C,N as b,g as _,_ as T,o as v,c as f,n as w,k as s,a,t as o,m as i,I as l,R as h}from"./chunks/framework.mpaTk55L.js";import"./chunks/Anchors.oRCStips.js";import"./chunks/Text.UOs-i8Ra.js";import"./chunks/Transitions._H0RGLfL.js";import"./chunks/Buttons.lorYpP73.js";import"./chunks/Checkboxes.UrkZcei7.js";import"./chunks/ColorModes.g-D_9X90.js";import"./chunks/Inputs.nTwAj66j.js";import"./chunks/Listboxes.5OjlJykU.js";import"./chunks/Lists.L4jdb2xy.js";import"./chunks/Radios.e-dvm4xV.js";import"./chunks/Selects.qf9pgigj.js";import"./chunks/Textareas.qvM0Xp3o.js";const S=C({name:"VvTextarea",emits:["update:modelValue"],props:{color:{type:String,default:r.defaults.VvTextarea.color},debug:{type:Boolean,default:r.defaults.VvTextarea.debug},modelValue:{type:String,default:""},palette:{type:String,default:r.defaults.VvTextarea.palette},rowSize:{type:String,default:r.defaults.VvTextarea.rowSize},size:{type:String,default:r.defaults.VvTextarea.size}},setup(t){const e=Object.keys(b("vv",{})).length>0?b("vv"):r;let c=_(()=>{var d,u,g,m,E,y;let p=[];return(d=e==null?void 0:e.textareas)!=null&&d.base()&&p.push(e.textareas.base()),t.size!==""&&((g=(u=e==null?void 0:e.textareas)==null?void 0:u.sizes)!=null&&g[t.size])&&p.push(String(e.textareas.sizes[t.size])),(y=(E=(m=e==null?void 0:e.textareas)==null?void 0:m.palettes)==null?void 0:E[t.palette])!=null&&y[t.color]&&p.push(String(e.textareas.palettes[t.palette][t.color])),p.join(" ").trim()}),k=_(()=>{var p,d;if(t.rowSize!==""&&((d=(p=e==null?void 0:e.textareas)==null?void 0:p.rowSizes)!=null&&d[t.rowSize]))return e.textareas.rowSizes[t.rowSize]});return{classes:c,rows:k,handleTextareaChange:p=>p.target.value}}}),B=["rows","value","data-vv-textarea-generated-classes","data-vv-textarea-prop-color","data-vv-textarea-prop-model-value","data-vv-textarea-prop-palette","data-vv-textarea-prop-row-size","data-vv-textarea-prop-size"];function V(t,e,c,k,F,p){return v(),f("textarea",{class:w(t.classes),rows:t.rows,value:t.modelValue,onInput:e[0]||(e[0]=d=>t.$emit("update:modelValue",t.handleTextareaChange(d))),"data-vv-textarea-generated-classes":t.debug?t.classes:null,"data-vv-textarea-prop-color":t.debug?t.color:null,"data-vv-textarea-prop-model-value":t.debug?t.modelValue:null,"data-vv-textarea-prop-palette":t.debug?t.palette:null,"data-vv-textarea-prop-row-size":t.debug?t.rowSize:null,"data-vv-textarea-prop-size":t.debug?t.size:null},null,42,B)}const n=T(S,[["render",V]]),z={id:"frontmatter-title",tabindex:"-1"},q=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),D=s("h2",{id:"import",tabindex:"-1"},[a("Import "),s("a",{class:"header-anchor",href:"#import","aria-label":'Permalink to "Import"'},"​")],-1),A=s("a",{href:"/vueventus/guides/vueventus-cli.html"},"vueventus CLI",-1),P=s("a",{href:"/vueventus/guides/vv-update-cli.html"},"vv-update CLI",-1),I=h(`<div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ./src/components/SomeComponent.vue</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> VvTextarea </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./vv/textareas/VvTextarea.vue&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>CLI installed components pass through VueVentus defaults via component props. Each prop default value can be customized globally by overriding VvConfig defaults in your app <code>./src/app.vv.ts</code> file or singularly in a component instance.</p></div>`,2),$=h('<div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { VvTextarea } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@obewds/vueventus&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Importing raw VueVentus library components will still apply your <code>./src/app.vv.ts</code> settings automatically through the Vue <code>provide()</code> and <code>inject()</code> pattern. All raw VueVentus library components automatically check for a provided <code>&quot;vv&quot;</code> keyed object with a <a href="/vueventus/typescript/interfaces.html#configvv">ConfigVv</a> type interface.</p></div><div class="warning custom-block"><p class="custom-block-title">CLI or Raw?</p><p>The main difference between raw library components and CLI installed components, is that you have no control over component defaults with raw library components. This is less flexible than using CLI installed components, because control of component defaults can greatly reduce the number of props a dev has to type for component instances, which reduces app code.</p><p>Meanwhile, the control CLI installed components provide through customizable defaults, opens up to a global level (styling management system) control for default component state characteristic values (particularly powerful with color and proportional size characteristics).</p></div><h2 id="emits-update-modelvalue" tabindex="-1">Emits: update:modelValue <a class="header-anchor" href="#emits-update-modelvalue" aria-label="Permalink to &quot;Emits: update:modelValue&quot;">​</a></h2><p>Emits: <strong><code>update:modelValue</code></strong><br> Emit Value Type: <strong><code>String</code></strong></p>',5),R=s("code",null,"update:modelValue",-1),N={class:"tip custom-block"},L=s("p",{class:"custom-block-title"},"TIP",-1),j=s("code",null,"v-model",-1),O=h(`<h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- ./src/components/AppTextarea.vue --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ref } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { VvTextarea } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@obewds/vueventus&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> someValue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">VvTextarea</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;someValue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="prop-color" tabindex="-1">Prop: color <a class="header-anchor" href="#prop-color" aria-label="Permalink to &quot;Prop: color&quot;">​</a></h2>`,3),M=s("strong",null,[s("code",null,"String")],-1),H=s("br",null,null,-1),J=s("code",null,"color",-1),U=s("code",null,"color",-1),W=s("code",null,"palette",-1),Y=h(`<h3 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">VvTextarea</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;default&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mb-2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">VvTextarea</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mb-2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">VvTextarea</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;success&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mb-2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-label="Permalink to &quot;Result&quot;">​</a></h3>`,3),G={class:"w-full pt-4"},K=s("h3",{id:"typing-for-downstream-component-instances",tabindex:"-1"},[a("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances","aria-label":'Permalink to "Typing for Downstream Component Instances"'},"​")],-1),Q=s("p",null,"Coming Soon!",-1),X=s("h2",{id:"prop-debug",tabindex:"-1"},[a("Prop: debug "),s("a",{class:"header-anchor",href:"#prop-debug","aria-label":'Permalink to "Prop: debug"'},"​")],-1),Z=s("strong",null,[s("code",null,"Boolean")],-1),ss=s("br",null,null,-1),as=s("code",null,"debug",-1),es=s("code",null,"data-vv-textarea-",-1),ts=h('<h3 id="syntax-1" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-1" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">VvTextarea</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="result-1" tabindex="-1">Result <a class="header-anchor" href="#result-1" aria-label="Permalink to &quot;Result&quot;">​</a></h3>',3),is={class:"w-full pt-4"},ls=s("h2",{id:"prop-palette",tabindex:"-1"},[a("Prop: palette "),s("a",{class:"header-anchor",href:"#prop-palette","aria-label":'Permalink to "Prop: palette"'},"​")],-1),ns=s("strong",null,[s("code",null,"String")],-1),os=s("br",null,null,-1),rs=s("code",null,"palette",-1),ps=s("code",null,"color",-1),hs=s("code",null,"palette",-1),ds=h(`<h3 id="syntax-2" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-2" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">VvTextarea</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> palette</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;default&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;default&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mb-2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">VvTextarea</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> palette</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;default&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mb-2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">VvTextarea</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> palette</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;default&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;success&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mb-2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="result-2" tabindex="-1">Result <a class="header-anchor" href="#result-2" aria-label="Permalink to &quot;Result&quot;">​</a></h3>`,3),cs={class:"w-full pt-4"},ks=s("h3",{id:"typing-for-downstream-component-instances-1",tabindex:"-1"},[a("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances-1","aria-label":'Permalink to "Typing for Downstream Component Instances"'},"​")],-1),us=s("p",null,"Coming Soon!",-1),gs=s("h2",{id:"prop-size",tabindex:"-1"},[a("Prop: size "),s("a",{class:"header-anchor",href:"#prop-size","aria-label":'Permalink to "Prop: size"'},"​")],-1),ms=s("strong",null,[s("code",null,"String")],-1),Es=s("br",null,null,-1),ys=s("code",null,"size",-1),bs=h('<h3 id="syntax-3" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-3" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">VvTextarea</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lg&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Size: lg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="result-3" tabindex="-1">Result <a class="header-anchor" href="#result-3" aria-label="Permalink to &quot;Result&quot;">​</a></h3>',3),_s={class:"w-full pt-4"},vs={class:"details custom-block"},fs=s("summary",null,"size prop textarea size examples",-1),Fs={class:"flex flex-wrap items-center gap-2 pt-4"},xs=s("h3",{id:"typing-for-downstream-component-instances-2",tabindex:"-1"},[a("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances-2","aria-label":'Permalink to "Typing for Downstream Component Instances"'},"​")],-1),Cs=s("p",null,"Coming Soon!",-1),Ts=s("h2",{id:"prop-rowsize",tabindex:"-1"},[a("Prop: rowSize "),s("a",{class:"header-anchor",href:"#prop-rowsize","aria-label":'Permalink to "Prop: rowSize"'},"​")],-1),ws=s("strong",null,[s("code",null,"String")],-1),Ss=s("br",null,null,-1),Bs=s("code",null,"rowSize",-1),Vs=s("code",null,'<textarea row="">',-1),zs=h('<h3 id="syntax-4" tabindex="-1">Syntax <a class="header-anchor" href="#syntax-4" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">VvTextarea</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> row-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lg&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Size: lg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="result-4" tabindex="-1">Result <a class="header-anchor" href="#result-4" aria-label="Permalink to &quot;Result&quot;">​</a></h3>',3),qs={class:"w-full pt-4"},Ds={class:"details custom-block"},As=s("summary",null,"size prop textarea size examples",-1),Ps={class:"flex flex-wrap items-center gap-2 pt-4"},Is=s("h2",{id:"slot-none",tabindex:"-1"},[a("Slot: None "),s("a",{class:"header-anchor",href:"#slot-none","aria-label":'Permalink to "Slot: None"'},"​")],-1),$s={class:"danger custom-block"},Rs=s("p",{class:"custom-block-title"},"NO SLOT AVAILABLE",-1),Ns=s("code",null,"<textarea>",-1),Ls=s("code",null,'v-bind-""',-1),ta=JSON.parse('{"title":"VvTextarea Component","description":"","frontmatter":{"title":"VvTextarea Component"},"headers":[],"relativePath":"components/textareas/vv-textarea.md","filePath":"components/textareas/vv-textarea.md","lastUpdated":1681865250000}'),js={name:"components/textareas/vv-textarea.md"},ia=Object.assign(js,{setup(t){return(e,c)=>(v(),f("div",null,[s("h1",z,[a(o(e.$frontmatter.title)+" ",1),q]),s("p",null,"The "+o(e.$frontmatter.title)+" provides a set of props and config module based settings to make a validation ready set of textarea elements for applications with an extremely DRY implementation of atomic classes.",1),D,s("p",null,[a("To import a "+o(e.$frontmatter.title)+" installed by the ",1),A,a(" or "),P,a(":")]),I,s("p",null,"Alternatively, you can install the raw library "+o(e.$frontmatter.title)+" with:",1),$,s("p",null,[a("The "+o(e.$frontmatter.title)+" emits a standard Vue key of ",1),R,a(" upon input event changes of the component's generated textarea value attribute.")]),s("div",N,[L,s("p",null,[a("This means when using the "+o(e.$frontmatter.title)+" downstream in an end application, you can safely use Vue's ",1),j,a(" binding to two-way bind a reactive value through your downstream component and into (and back from) the "+o(e.$frontmatter.title)+" instance.",1)])]),O,s("p",null,[a("Type: "),M,H,a(" Default: "),s("strong",null,[s("code",null,'"'+o(i(r).defaults.VvTextarea.color)+'"',1)])]),s("p",null,[a("The "+o(e.$frontmatter.title)+" ",1),J,a(" prop sets the component instance color based both on the "),U,a(" prop and the "),W,a(" prop value.")]),Y,s("div",G,[l(i(n),{color:"default",class:"mb-2"}),l(i(n),{color:"error",class:"mb-2"}),l(i(n),{color:"success",class:"mb-2"})]),K,Q,X,s("p",null,[a("Type: "),Z,ss,a(" Default: "),s("strong",null,[s("code",null,o(i(r).defaults.VvTextarea.debug),1)])]),s("p",null,[a("The "+o(e.$frontmatter.title)+" ",1),as,a(" prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through "),es,a(" prefixed HTML attributes.")]),ts,s("div",is,[l(i(n),{debug:!0})]),ls,s("p",null,[a("Type: "),ns,os,a(" Default: "),s("strong",null,[s("code",null,'"'+o(i(r).defaults.VvTextarea.palette)+'"',1)])]),s("p",null,[a("The "+o(e.$frontmatter.title)+" ",1),rs,a(" prop sets the component instance palette based both on the "),ps,a(" prop and the "),hs,a(" prop value.")]),ds,s("div",cs,[l(i(n),{palette:"default",color:"default",class:"mb-2"}),l(i(n),{palette:"default",color:"error",class:"mb-2"}),l(i(n),{palette:"default",color:"success",class:"mb-2"})]),ks,us,gs,s("p",null,[a("Type: "),ms,Es,a(" Default: "),s("strong",null,[s("code",null,'"'+o(i(r).defaults.VvTextarea.size)+'"',1)])]),s("p",null,[a("The "+o(e.$frontmatter.title)+" ",1),ys,a(" prop sets the component instance size-based classes which in the context of textarea typically involves padding and font size atomic classes.")]),bs,s("div",_s,[l(i(n),{size:"lg",placeholder:"Size: lg"})]),s("details",vs,[fs,s("div",Fs,[l(i(n),{size:"xs",placeholder:"Size: xs"}),l(i(n),{size:"sm",placeholder:"Size: sm"}),l(i(n),{size:"md",placeholder:"Size: md"}),l(i(n),{size:"lg",placeholder:"Size: lg"}),l(i(n),{size:"xl",placeholder:"Size: xl"}),l(i(n),{size:"2xl",placeholder:"Size: 2xl"})])]),xs,Cs,Ts,s("p",null,[a("Type: "),ws,Ss,a(" Default: "),s("strong",null,[s("code",null,'"'+o(i(r).defaults.VvTextarea.rowSize)+'"',1)])]),s("p",null,[a("The "+o(e.$frontmatter.title)+" ",1),Bs,a(" prop sets the component instance "),Vs,a(" number value for the rendered Textarea element, which controls the vertical height of the element.")]),zs,s("div",qs,[l(i(n),{"row-size":"lg",placeholder:"Size: lg"})]),s("details",Ds,[As,s("div",Ps,[l(i(n),{"row-size":"xs",placeholder:"Size: xs"}),l(i(n),{"row-size":"sm",placeholder:"Size: sm"}),l(i(n),{"row-size":"md",placeholder:"Size: md"}),l(i(n),{"row-size":"lg",placeholder:"Size: lg"}),l(i(n),{"row-size":"xl",placeholder:"Size: xl"}),l(i(n),{"row-size":"2xl",placeholder:"Size: 2xl"})])]),Is,s("div",$s,[Rs,s("p",null,[a("The "+o(e.$frontmatter.title)+" does not have Vue slot option, because it's expected to use this ",1),Ns,a(" based component with reactive values that are bound to this component (like "),Ls,a(" etc.)")])]),l(x)]))}});export{ta as __pageData,ia as default};