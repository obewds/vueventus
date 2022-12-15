import{_ as x}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.063af946.js";import{V as c}from"./chunks/VvConfig.8f4fa156.js";import{f as A,i as b,g as v,_ as T,o as C,c as f,n as S,a as s,b as e,t as p,u as l,d as n,e as d}from"./app.d380ac73.js";import"./chunks/Anchors.bafcf40e.js";import"./chunks/Text.d88c79dd.js";import"./chunks/Transitions.262fdc37.js";import"./chunks/Buttons.b4b40e12.js";import"./chunks/Checkboxes.81ecc6c3.js";import"./chunks/ColorModes.4904e81c.js";import"./chunks/Inputs.a721047f.js";import"./chunks/Lists.c1360393.js";import"./chunks/Radios.230b40d2.js";import"./chunks/Selects.7f4e72d6.js";import"./chunks/Textareas.4dc66c13.js";const z=A({name:"VvTextarea",emits:["update:modelValue"],props:{color:{type:String,default:c.defaults.VvTextarea.color},palette:{type:String,default:c.defaults.VvTextarea.palette},size:{type:String,default:c.defaults.VvTextarea.size},rowSize:{type:String,default:c.defaults.VvTextarea.rowSize},modelValue:{type:String,default:""}},setup(o){const a=Object.keys(b("vv",{})).length>0?b("vv"):c;let u=v(()=>{var i,y,F,h,m,_;let r=[];return(i=a==null?void 0:a.textareas)!=null&&i.base()&&r.push(a.textareas.base()),o.size!==""&&((F=(y=a==null?void 0:a.textareas)==null?void 0:y.sizes)==null?void 0:F[o.size])&&r.push(a.textareas.sizes[o.size]),(_=(m=(h=a==null?void 0:a.textareas)==null?void 0:h.palettes)==null?void 0:m[o.palette])!=null&&_[o.color]&&r.push(a.textareas.palettes[o.palette][o.color]),r.join(" ").trim()}),D=v(()=>{var r,i;if(o.rowSize!==""&&((i=(r=a==null?void 0:a.textareas)==null?void 0:r.rowSizes)==null?void 0:i[o.rowSize]))return a.textareas.rowSizes[o.rowSize]});return{classes:u,rows:D,handleTextareaChange:r=>r.target.value}}}),V=["rows","value"];function w(o,a,u,D,g,r){return C(),f("textarea",{class:S(o.classes),rows:o.rows,value:o.modelValue,onInput:a[0]||(a[0]=i=>o.$emit("update:modelValue",o.handleTextareaChange(i)))},null,42,V)}const t=T(z,[["render",w]]),E={id:"frontmatter-title",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),q=s("h2",{id:"import",tabindex:"-1"},[e("Import "),s("a",{class:"header-anchor",href:"#import","aria-hidden":"true"},"#")],-1),I=s("a",{href:"/vueventus/guides/vueventus-cli.html"},"vueventus CLI",-1),P=s("a",{href:"/vueventus/guides/vv-update-cli.html"},"vv-update CLI",-1),$=d("",2),R=d("",5),N=s("code",null,"update:modelValue",-1),j={class:"tip custom-block"},L=s("p",{class:"custom-block-title"},"TIP",-1),O=s("code",null,"v-model",-1),B=d("",3),J=s("strong",null,[s("code",null,"String")],-1),M=s("br",null,null,-1),U=s("code",null,"color",-1),Y=s("code",null,"color",-1),G=s("code",null,"palette",-1),H=d("",3),K={class:"w-full pt-4"},Q=s("h2",{id:"prop-palette",tabindex:"-1"},[e("Prop: palette "),s("a",{class:"header-anchor",href:"#prop-palette","aria-hidden":"true"},"#")],-1),W=s("strong",null,[s("code",null,"String")],-1),X=s("br",null,null,-1),Z=s("code",null,"palette",-1),ss=s("code",null,"color",-1),es=s("code",null,"palette",-1),as=d("",3),ls={class:"w-full pt-4"},ns=s("h2",{id:"prop-size",tabindex:"-1"},[e("Prop: size "),s("a",{class:"header-anchor",href:"#prop-size","aria-hidden":"true"},"#")],-1),ts=s("strong",null,[s("code",null,"String")],-1),os=s("br",null,null,-1),ps=s("code",null,"size",-1),rs=d("",3),cs={class:"w-full pt-4"},is={class:"details custom-block"},ds=s("summary",null,"size prop textarea size examples",-1),us={class:"flex flex-wrap items-center gap-2 pt-4"},Ds=s("h2",{id:"prop-rowsize",tabindex:"-1"},[e("Prop: rowSize "),s("a",{class:"header-anchor",href:"#prop-rowsize","aria-hidden":"true"},"#")],-1),ys=s("strong",null,[s("code",null,"String")],-1),Fs=s("br",null,null,-1),hs=s("code",null,"rowSize",-1),ms=s("code",null,'<textarea row="">',-1),_s=d("",3),bs={class:"w-full pt-4"},vs={class:"details custom-block"},Cs=s("summary",null,"size prop textarea size examples",-1),fs={class:"flex flex-wrap items-center gap-2 pt-4"},gs=s("h2",{id:"slot-none",tabindex:"-1"},[e("Slot: None "),s("a",{class:"header-anchor",href:"#slot-none","aria-hidden":"true"},"#")],-1),xs={class:"danger custom-block"},As=s("p",{class:"custom-block-title"},"NO SLOT AVAILABLE",-1),Ts=s("code",null,"<textarea>",-1),Ss=s("code",null,'v-bind-""',-1),Js=JSON.parse('{"title":"VvTextarea Component","description":"","frontmatter":{"title":"VvTextarea Component"},"headers":[{"level":2,"title":"Import","slug":"import","link":"#import","children":[]},{"level":2,"title":"Emits: update:modelValue","slug":"emits-update-modelvalue","link":"#emits-update-modelvalue","children":[{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"Prop: color","slug":"prop-color","link":"#prop-color","children":[{"level":3,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":3,"title":"Result","slug":"result","link":"#result","children":[]}]},{"level":2,"title":"Prop: palette","slug":"prop-palette","link":"#prop-palette","children":[{"level":3,"title":"Syntax","slug":"syntax-1","link":"#syntax-1","children":[]},{"level":3,"title":"Result","slug":"result-1","link":"#result-1","children":[]}]},{"level":2,"title":"Prop: size","slug":"prop-size","link":"#prop-size","children":[{"level":3,"title":"Syntax","slug":"syntax-2","link":"#syntax-2","children":[]},{"level":3,"title":"Result","slug":"result-2","link":"#result-2","children":[]}]},{"level":2,"title":"Prop: rowSize","slug":"prop-rowsize","link":"#prop-rowsize","children":[{"level":3,"title":"Syntax","slug":"syntax-3","link":"#syntax-3","children":[]},{"level":3,"title":"Result","slug":"result-3","link":"#result-3","children":[]}]},{"level":2,"title":"Slot: None","slug":"slot-none","link":"#slot-none","children":[]}],"relativePath":"components/textareas/vv-textarea.md","lastUpdated":1661201961000}'),zs={name:"components/textareas/vv-textarea.md"},Ms=Object.assign(zs,{setup(o){return(a,u)=>(C(),f("div",null,[s("h1",E,[e(p(a.$frontmatter.title)+" ",1),k]),s("p",null,"The "+p(a.$frontmatter.title)+" provides a set of props and config module based settings to make a validation ready set of textarea elements for applications with an extremely DRY implementation of atomic classes.",1),q,s("p",null,[e("To import a "+p(a.$frontmatter.title)+" installed by the ",1),I,e(" or "),P,e(":")]),$,s("p",null,"Alternatively, you can install the raw library "+p(a.$frontmatter.title)+" with:",1),R,s("p",null,[e("The "+p(a.$frontmatter.title)+" emits a standard Vue key of ",1),N,e(" upon input event changes of the component's generated textarea value attribute.")]),s("div",j,[L,s("p",null,[e("This means when using the "+p(a.$frontmatter.title)+" downstream in an end application, you can safely use Vue's ",1),O,e(" binding to two-way bind a reactive value through your downstream component and into (and back from) the "+p(a.$frontmatter.title)+" instance.",1)])]),B,s("p",null,[e("Type: "),J,M,e(" Default: "),s("strong",null,[s("code",null,'"'+p(l(c).defaults.VvTextarea.color)+'"',1)])]),s("p",null,[e("The "+p(a.$frontmatter.title)+" ",1),U,e(" prop sets the component instance color based both on the "),Y,e(" prop and the "),G,e(" prop value.")]),H,s("div",K,[n(l(t),{color:"default",class:"mb-2"}),n(l(t),{color:"error",class:"mb-2"}),n(l(t),{color:"success",class:"mb-2"})]),Q,s("p",null,[e("Type: "),W,X,e(" Default: "),s("strong",null,[s("code",null,'"'+p(l(c).defaults.VvTextarea.palette)+'"',1)])]),s("p",null,[e("The "+p(a.$frontmatter.title)+" ",1),Z,e(" prop sets the component instance palette based both on the "),ss,e(" prop and the "),es,e(" prop value.")]),as,s("div",ls,[n(l(t),{palette:"default",color:"default",class:"mb-2"}),n(l(t),{palette:"default",color:"error",class:"mb-2"}),n(l(t),{palette:"default",color:"success",class:"mb-2"})]),ns,s("p",null,[e("Type: "),ts,os,e(" Default: "),s("strong",null,[s("code",null,'"'+p(l(c).defaults.VvTextarea.size)+'"',1)])]),s("p",null,[e("The "+p(a.$frontmatter.title)+" ",1),ps,e(" prop sets the component instance size-based classes which in the context of textarea typically involves padding and font size atomic classes.")]),rs,s("div",cs,[n(l(t),{size:"lg",placeholder:"Size: lg"})]),s("details",is,[ds,s("div",us,[n(l(t),{size:"xs",placeholder:"Size: xs"}),n(l(t),{size:"sm",placeholder:"Size: sm"}),n(l(t),{size:"md",placeholder:"Size: md"}),n(l(t),{size:"lg",placeholder:"Size: lg"}),n(l(t),{size:"xl",placeholder:"Size: xl"}),n(l(t),{size:"2xl",placeholder:"Size: 2xl"})])]),Ds,s("p",null,[e("Type: "),ys,Fs,e(" Default: "),s("strong",null,[s("code",null,'"'+p(l(c).defaults.VvTextarea.rowSize)+'"',1)])]),s("p",null,[e("The "+p(a.$frontmatter.title)+" ",1),hs,e(" prop sets the component instance "),ms,e(" number value for the rendered Textarea element, which controls the vertical height of the element.")]),_s,s("div",bs,[n(l(t),{"row-size":"lg",placeholder:"Size: lg"})]),s("details",vs,[Cs,s("div",fs,[n(l(t),{"row-size":"xs",placeholder:"Size: xs"}),n(l(t),{"row-size":"sm",placeholder:"Size: sm"}),n(l(t),{"row-size":"md",placeholder:"Size: md"}),n(l(t),{"row-size":"lg",placeholder:"Size: lg"}),n(l(t),{"row-size":"xl",placeholder:"Size: xl"}),n(l(t),{"row-size":"2xl",placeholder:"Size: 2xl"})])]),gs,s("div",xs,[As,s("p",null,[e("The "+p(a.$frontmatter.title)+" does not have Vue slot option, because it's expected to use this ",1),Ts,e(" based component with reactive values that are bound to this component (like "),Ss,e(" etc.)")])]),n(x)]))}});export{Js as __pageData,Ms as default};
