import{_ as x}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.921bb5b0.js";import{V as r}from"./chunks/VvConfig.f99e8744.js";import{f as T,i as b,g as v,_ as A,o as g,c as f,n as w,a as s,b as e,t as p,u as l,d as t,e as i}from"./app.7595295d.js";import"./chunks/Anchors.bafcf40e.js";import"./chunks/Text.d88c79dd.js";import"./chunks/Transitions.262fdc37.js";import"./chunks/Buttons.b4b40e12.js";import"./chunks/Checkboxes.81ecc6c3.js";import"./chunks/ColorModes.4904e81c.js";import"./chunks/Inputs.a721047f.js";import"./chunks/Listboxes.3c490966.js";import"./chunks/Lists.c1360393.js";import"./chunks/Radios.230b40d2.js";import"./chunks/Selects.7f4e72d6.js";import"./chunks/Textareas.4dc66c13.js";const S=T({name:"VvTextarea",emits:["update:modelValue"],props:{color:{type:String,default:r.defaults.VvTextarea.color},debug:{type:Boolean,default:r.defaults.VvTextarea.debug},modelValue:{type:String,default:""},palette:{type:String,default:r.defaults.VvTextarea.palette},rowSize:{type:String,default:r.defaults.VvTextarea.rowSize},size:{type:String,default:r.defaults.VvTextarea.size}},setup(n){const a=Object.keys(b("vv",{})).length>0?b("vv"):r;let u=v(()=>{var d,h,D,m,F,_;let c=[];return(d=a==null?void 0:a.textareas)!=null&&d.base()&&c.push(a.textareas.base()),n.size!==""&&((D=(h=a==null?void 0:a.textareas)==null?void 0:h.sizes)==null?void 0:D[n.size])&&c.push(a.textareas.sizes[n.size]),(_=(F=(m=a==null?void 0:a.textareas)==null?void 0:m.palettes)==null?void 0:F[n.palette])!=null&&_[n.color]&&c.push(a.textareas.palettes[n.palette][n.color]),c.join(" ").trim()}),y=v(()=>{var c,d;if(n.rowSize!==""&&((d=(c=a==null?void 0:a.textareas)==null?void 0:c.rowSizes)==null?void 0:d[n.rowSize]))return a.textareas.rowSizes[n.rowSize]});return{classes:u,rows:y,handleTextareaChange:c=>c.target.value}}}),z=["rows","value","data-vv-textarea-generated-classes","data-vv-textarea-prop-color","data-vv-textarea-prop-model-value","data-vv-textarea-prop-palette","data-vv-textarea-prop-row-size","data-vv-textarea-prop-size"];function V(n,a,u,y,C,c){return g(),f("textarea",{class:w(n.classes),rows:n.rows,value:n.modelValue,onInput:a[0]||(a[0]=d=>n.$emit("update:modelValue",n.handleTextareaChange(d))),"data-vv-textarea-generated-classes":n.debug?n.classes:null,"data-vv-textarea-prop-color":n.debug?n.color:null,"data-vv-textarea-prop-model-value":n.debug?n.modelValue:null,"data-vv-textarea-prop-palette":n.debug?n.palette:null,"data-vv-textarea-prop-row-size":n.debug?n.rowSize:null,"data-vv-textarea-prop-size":n.debug?n.size:null},null,42,z)}const o=A(S,[["render",V]]),E={id:"frontmatter-title",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),q=s("h2",{id:"import",tabindex:"-1"},[e("Import "),s("a",{class:"header-anchor",href:"#import","aria-hidden":"true"},"#")],-1),I=s("a",{href:"/vueventus/guides/vueventus-cli.html"},"vueventus CLI",-1),P=s("a",{href:"/vueventus/guides/vv-update-cli.html"},"vv-update CLI",-1),$=i("",2),R=i("",5),N=s("code",null,"update:modelValue",-1),j={class:"tip custom-block"},L=s("p",{class:"custom-block-title"},"TIP",-1),B=s("code",null,"v-model",-1),O=i("",3),M=s("strong",null,[s("code",null,"String")],-1),H=s("br",null,null,-1),J=s("code",null,"color",-1),U=s("code",null,"color",-1),W=s("code",null,"palette",-1),Y=i("",3),G={class:"w-full pt-4"},K=s("h3",{id:"typing-for-downstream-component-instances",tabindex:"-1"},[e("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances","aria-hidden":"true"},"#")],-1),Q=s("p",null,"Coming Soon!",-1),X=s("h2",{id:"prop-debug",tabindex:"-1"},[e("Prop: debug "),s("a",{class:"header-anchor",href:"#prop-debug","aria-hidden":"true"},"#")],-1),Z=s("strong",null,[s("code",null,"Boolean")],-1),ss=s("br",null,null,-1),es=s("code",null,"debug",-1),as=s("code",null,"data-vv-textarea-",-1),ns=i("",3),ls={class:"w-full pt-4"},ts=s("h2",{id:"prop-palette",tabindex:"-1"},[e("Prop: palette "),s("a",{class:"header-anchor",href:"#prop-palette","aria-hidden":"true"},"#")],-1),os=s("strong",null,[s("code",null,"String")],-1),ps=s("br",null,null,-1),rs=s("code",null,"palette",-1),cs=s("code",null,"color",-1),is=s("code",null,"palette",-1),ds=i("",3),us={class:"w-full pt-4"},ys=s("h3",{id:"typing-for-downstream-component-instances-1",tabindex:"-1"},[e("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances-1","aria-hidden":"true"},"#")],-1),hs=s("p",null,"Coming Soon!",-1),Ds=s("h2",{id:"prop-size",tabindex:"-1"},[e("Prop: size "),s("a",{class:"header-anchor",href:"#prop-size","aria-hidden":"true"},"#")],-1),ms=s("strong",null,[s("code",null,"String")],-1),Fs=s("br",null,null,-1),_s=s("code",null,"size",-1),bs=i("",3),vs={class:"w-full pt-4"},gs={class:"details custom-block"},fs=s("summary",null,"size prop textarea size examples",-1),Cs={class:"flex flex-wrap items-center gap-2 pt-4"},xs=s("h3",{id:"typing-for-downstream-component-instances-2",tabindex:"-1"},[e("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances-2","aria-hidden":"true"},"#")],-1),Ts=s("p",null,"Coming Soon!",-1),As=s("h2",{id:"prop-rowsize",tabindex:"-1"},[e("Prop: rowSize "),s("a",{class:"header-anchor",href:"#prop-rowsize","aria-hidden":"true"},"#")],-1),ws=s("strong",null,[s("code",null,"String")],-1),Ss=s("br",null,null,-1),zs=s("code",null,"rowSize",-1),Vs=s("code",null,'<textarea row="">',-1),Es=i("",3),ks={class:"w-full pt-4"},qs={class:"details custom-block"},Is=s("summary",null,"size prop textarea size examples",-1),Ps={class:"flex flex-wrap items-center gap-2 pt-4"},$s=s("h2",{id:"slot-none",tabindex:"-1"},[e("Slot: None "),s("a",{class:"header-anchor",href:"#slot-none","aria-hidden":"true"},"#")],-1),Rs={class:"danger custom-block"},Ns=s("p",{class:"custom-block-title"},"NO SLOT AVAILABLE",-1),js=s("code",null,"<textarea>",-1),Ls=s("code",null,'v-bind-""',-1),ne=JSON.parse('{"title":"VvTextarea Component","description":"","frontmatter":{"title":"VvTextarea Component"},"headers":[{"level":2,"title":"Import","slug":"import","link":"#import","children":[]},{"level":2,"title":"Emits: update:modelValue","slug":"emits-update-modelvalue","link":"#emits-update-modelvalue","children":[{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"Prop: color","slug":"prop-color","link":"#prop-color","children":[{"level":3,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":3,"title":"Result","slug":"result","link":"#result","children":[]},{"level":3,"title":"Typing for Downstream Component Instances","slug":"typing-for-downstream-component-instances","link":"#typing-for-downstream-component-instances","children":[]}]},{"level":2,"title":"Prop: debug","slug":"prop-debug","link":"#prop-debug","children":[{"level":3,"title":"Syntax","slug":"syntax-1","link":"#syntax-1","children":[]},{"level":3,"title":"Result","slug":"result-1","link":"#result-1","children":[]}]},{"level":2,"title":"Prop: palette","slug":"prop-palette","link":"#prop-palette","children":[{"level":3,"title":"Syntax","slug":"syntax-2","link":"#syntax-2","children":[]},{"level":3,"title":"Result","slug":"result-2","link":"#result-2","children":[]},{"level":3,"title":"Typing for Downstream Component Instances","slug":"typing-for-downstream-component-instances-1","link":"#typing-for-downstream-component-instances-1","children":[]}]},{"level":2,"title":"Prop: size","slug":"prop-size","link":"#prop-size","children":[{"level":3,"title":"Syntax","slug":"syntax-3","link":"#syntax-3","children":[]},{"level":3,"title":"Result","slug":"result-3","link":"#result-3","children":[]},{"level":3,"title":"Typing for Downstream Component Instances","slug":"typing-for-downstream-component-instances-2","link":"#typing-for-downstream-component-instances-2","children":[]}]},{"level":2,"title":"Prop: rowSize","slug":"prop-rowsize","link":"#prop-rowsize","children":[{"level":3,"title":"Syntax","slug":"syntax-4","link":"#syntax-4","children":[]},{"level":3,"title":"Result","slug":"result-4","link":"#result-4","children":[]}]},{"level":2,"title":"Slot: None","slug":"slot-none","link":"#slot-none","children":[]}],"relativePath":"components/textareas/vv-textarea.md","lastUpdated":1673045682000}'),Bs={name:"components/textareas/vv-textarea.md"},le=Object.assign(Bs,{setup(n){return(a,u)=>(g(),f("div",null,[s("h1",E,[e(p(a.$frontmatter.title)+" ",1),k]),s("p",null,"The "+p(a.$frontmatter.title)+" provides a set of props and config module based settings to make a validation ready set of textarea elements for applications with an extremely DRY implementation of atomic classes.",1),q,s("p",null,[e("To import a "+p(a.$frontmatter.title)+" installed by the ",1),I,e(" or "),P,e(":")]),$,s("p",null,"Alternatively, you can install the raw library "+p(a.$frontmatter.title)+" with:",1),R,s("p",null,[e("The "+p(a.$frontmatter.title)+" emits a standard Vue key of ",1),N,e(" upon input event changes of the component's generated textarea value attribute.")]),s("div",j,[L,s("p",null,[e("This means when using the "+p(a.$frontmatter.title)+" downstream in an end application, you can safely use Vue's ",1),B,e(" binding to two-way bind a reactive value through your downstream component and into (and back from) the "+p(a.$frontmatter.title)+" instance.",1)])]),O,s("p",null,[e("Type: "),M,H,e(" Default: "),s("strong",null,[s("code",null,'"'+p(l(r).defaults.VvTextarea.color)+'"',1)])]),s("p",null,[e("The "+p(a.$frontmatter.title)+" ",1),J,e(" prop sets the component instance color based both on the "),U,e(" prop and the "),W,e(" prop value.")]),Y,s("div",G,[t(l(o),{color:"default",class:"mb-2"}),t(l(o),{color:"error",class:"mb-2"}),t(l(o),{color:"success",class:"mb-2"})]),K,Q,X,s("p",null,[e("Type: "),Z,ss,e(" Default: "),s("strong",null,[s("code",null,p(l(r).defaults.VvTextarea.debug),1)])]),s("p",null,[e("The "+p(a.$frontmatter.title)+" ",1),es,e(" prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through "),as,e(" prefixed HTML attributes.")]),ns,s("div",ls,[t(l(o),{debug:!0})]),ts,s("p",null,[e("Type: "),os,ps,e(" Default: "),s("strong",null,[s("code",null,'"'+p(l(r).defaults.VvTextarea.palette)+'"',1)])]),s("p",null,[e("The "+p(a.$frontmatter.title)+" ",1),rs,e(" prop sets the component instance palette based both on the "),cs,e(" prop and the "),is,e(" prop value.")]),ds,s("div",us,[t(l(o),{palette:"default",color:"default",class:"mb-2"}),t(l(o),{palette:"default",color:"error",class:"mb-2"}),t(l(o),{palette:"default",color:"success",class:"mb-2"})]),ys,hs,Ds,s("p",null,[e("Type: "),ms,Fs,e(" Default: "),s("strong",null,[s("code",null,'"'+p(l(r).defaults.VvTextarea.size)+'"',1)])]),s("p",null,[e("The "+p(a.$frontmatter.title)+" ",1),_s,e(" prop sets the component instance size-based classes which in the context of textarea typically involves padding and font size atomic classes.")]),bs,s("div",vs,[t(l(o),{size:"lg",placeholder:"Size: lg"})]),s("details",gs,[fs,s("div",Cs,[t(l(o),{size:"xs",placeholder:"Size: xs"}),t(l(o),{size:"sm",placeholder:"Size: sm"}),t(l(o),{size:"md",placeholder:"Size: md"}),t(l(o),{size:"lg",placeholder:"Size: lg"}),t(l(o),{size:"xl",placeholder:"Size: xl"}),t(l(o),{size:"2xl",placeholder:"Size: 2xl"})])]),xs,Ts,As,s("p",null,[e("Type: "),ws,Ss,e(" Default: "),s("strong",null,[s("code",null,'"'+p(l(r).defaults.VvTextarea.rowSize)+'"',1)])]),s("p",null,[e("The "+p(a.$frontmatter.title)+" ",1),zs,e(" prop sets the component instance "),Vs,e(" number value for the rendered Textarea element, which controls the vertical height of the element.")]),Es,s("div",ks,[t(l(o),{"row-size":"lg",placeholder:"Size: lg"})]),s("details",qs,[Is,s("div",Ps,[t(l(o),{"row-size":"xs",placeholder:"Size: xs"}),t(l(o),{"row-size":"sm",placeholder:"Size: sm"}),t(l(o),{"row-size":"md",placeholder:"Size: md"}),t(l(o),{"row-size":"lg",placeholder:"Size: lg"}),t(l(o),{"row-size":"xl",placeholder:"Size: xl"}),t(l(o),{"row-size":"2xl",placeholder:"Size: 2xl"})])]),$s,s("div",Rs,[Ns,s("p",null,[e("The "+p(a.$frontmatter.title)+" does not have Vue slot option, because it's expected to use this ",1),js,e(" based component with reactive values that are bound to this component (like "),Ls,e(" etc.)")])]),t(x)]))}});export{ne as __pageData,le as default};
