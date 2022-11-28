import{_ as V}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.29953257.js";import{V as c}from"./chunks/VvConfig.387e376e.js";import{f as T,i as g,g as d,q as S,_ as w,o as E,c as q,n as z,a as s,b as n,t,u as l,d as e,e as r}from"./app.6b3a328f.js";import"./chunks/Anchors.f049ebc4.js";import"./chunks/Text.0efcfbbe.js";import"./chunks/Transitions.cc57681e.js";import"./chunks/Buttons.16d998aa.js";import"./chunks/Checkboxes.4124066b.js";import"./chunks/ColorModes.cf2ce130.js";import"./chunks/Inputs.f0037d89.js";import"./chunks/Radios.b252d274.js";import"./chunks/Textareas.4518d61e.js";const h=T({name:"VvCheckbox",emits:["update:modelValue"],props:{color:{type:String,default:c.defaults.VvCheckbox.color},checked:{type:Boolean,default:c.defaults.VvCheckbox.checked},darkCheckHex:{type:String,default:c.defaults.VvCheckbox.darkCheckHex},lightCheckHex:{type:String,default:c.defaults.VvCheckbox.lightCheckHex},palette:{type:String,default:c.defaults.VvCheckbox.palette},size:{type:String,default:c.defaults.VvCheckbox.size}},setup(p){const a=Object.keys(g("vv",{})).length>0?g("vv"):c;let F=d(()=>{var i,u,_,A,v,k;let D=[];return(i=a==null?void 0:a.checkboxes)!=null&&i.base()&&D.push(a.checkboxes.base()),p.size!==""&&((_=(u=a==null?void 0:a.checkboxes)==null?void 0:u.sizes)==null?void 0:_[p.size])&&D.push(a.checkboxes.sizes[p.size]),(k=(v=(A=a==null?void 0:a.checkboxes)==null?void 0:A.palettes)==null?void 0:v[p.palette])!=null&&k[p.color]&&D.push(a.checkboxes.palettes[p.palette][p.color]),D.join(" ").trim()});function y(D){return['url("data:image/svg+xml,%3csvg viewBox=',"'0 0 16 16'  fill='%23",D,"' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'",'/%3e%3c/svg%3e")'].join("")}let C=d(()=>y(p.darkCheckHex.replace(/#/g,""))),b=d(()=>y(p.lightCheckHex.replace(/#/g,"")));return{classes:F,darkCheckCssUrl:C,handleCheckboxChange:D=>D.target.checked===!0,lightCheckCssUrl:b}}}),x=()=>{S(p=>({"5fd4e498":p.lightCheckCssUrl,"65eff704":p.darkCheckCssUrl}))},f=h.setup;h.setup=f?(p,a)=>(x(),f(p,a)):x;const I=h;const P=["checked","data-test"];function R(p,a,F,y,C,b){return E(),q("input",{type:"checkbox",class:z(p.classes),checked:p.checked,onChange:a[0]||(a[0]=m=>p.$emit("update:modelValue",p.handleCheckboxChange(m))),"data-test":(p.darkCheckCssUrl?p.darkCheckHex:"")+(p.lightCheckCssUrl?p.lightCheckHex:"")},null,42,P)}const o=w(I,[["render",R],["__scopeId","data-v-388445ac"]]),$={id:"frontmatter-title",tabindex:"-1"},L=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),N=s("h2",{id:"import",tabindex:"-1"},[n("Import "),s("a",{class:"header-anchor",href:"#import","aria-hidden":"true"},"#")],-1),H=s("a",{href:"/vueventus/guides/vueventus-cli.html"},"vueventus CLI",-1),j=s("a",{href:"/vueventus/guides/vv-update-cli.html"},"vv-update CLI",-1),U=r("",2),O=r("",5),B=s("code",null,"update:modelValue",-1),M={class:"tip custom-block"},X=s("p",{class:"custom-block-title"},"TIP",-1),G=s("code",null,"v-model",-1),J=r("",3),Y=s("strong",null,[s("code",null,"Boolean")],-1),K=s("br",null,null,-1),Q=s("code",null,"checked",-1),W=s("code",null,"checked",-1),Z=s("code",null,"checked",-1),ss=s("code",null,"true",-1),ns=r("",3),ls={class:"w-full flex gap-3 pt-4"},as=s("h2",{id:"prop-color",tabindex:"-1"},[n("Prop: color "),s("a",{class:"header-anchor",href:"#prop-color","aria-hidden":"true"},"#")],-1),es=s("strong",null,[s("code",null,"String")],-1),os=s("br",null,null,-1),ps=s("code",null,"color",-1),ts=s("code",null,"color",-1),cs=s("code",null,"palette",-1),rs=r("",3),Ds={class:"w-full flex gap-3 pt-4"},Fs=s("h2",{id:"prop-darkcheckhex",tabindex:"-1"},[n("Prop: darkCheckHex "),s("a",{class:"header-anchor",href:"#prop-darkcheckhex","aria-hidden":"true"},"#")],-1),ys=s("strong",null,[s("code",null,"String")],-1),is=s("br",null,null,-1),us=s("code",null,"darkCheckHex",-1),ds=r("",3),hs={class:"w-full flex gap-3 pt-4"},Cs=s("h2",{id:"prop-lightcheckhex",tabindex:"-1"},[n("Prop: lightCheckHex "),s("a",{class:"header-anchor",href:"#prop-lightcheckhex","aria-hidden":"true"},"#")],-1),bs=s("strong",null,[s("code",null,"String")],-1),ms=s("br",null,null,-1),_s=s("code",null,"lightCheckHex",-1),As=r("",3),vs={class:"w-full flex gap-3 pt-4"},ks=s("h2",{id:"prop-palette",tabindex:"-1"},[n("Prop: palette "),s("a",{class:"header-anchor",href:"#prop-palette","aria-hidden":"true"},"#")],-1),gs=s("strong",null,[s("code",null,"String")],-1),xs=s("br",null,null,-1),fs=s("code",null,"palette",-1),Es=s("code",null,"color",-1),qs=s("code",null,"palette",-1),Vs=r("",3),Ts={class:"w-full flex gap-3 pt-4"},Ss=s("h2",{id:"prop-size",tabindex:"-1"},[n("Prop: size "),s("a",{class:"header-anchor",href:"#prop-size","aria-hidden":"true"},"#")],-1),ws=s("strong",null,[s("code",null,"String")],-1),zs=s("br",null,null,-1),Is=s("code",null,"size",-1),Ps=r("",3),Rs={class:"w-full flex items-center gap-3 pt-4"},$s={class:"details custom-block"},Ls=r("",4),Ns={class:"flex flex-col w-full space-y-2"},Hs={class:"flex items-center gap-1"},js=s("label",{htmlFor:"vvCheck-xs",class:"text-2xs"},"XS Size",-1),Us={class:"flex items-center gap-1.5"},Os=s("label",{htmlFor:"vvCheck-sm",class:"text-xs"},"SM Size",-1),Bs={class:"flex items-center gap-2"},Ms=s("label",{htmlFor:"vvCheck-md",class:"text-md"},"MD Size",-1),Xs={class:"flex items-center gap-2.5"},Gs=s("label",{htmlFor:"vvCheck-lg",class:"text-lg"},"LG Size",-1),Js={class:"flex items-center gap-3"},Ys=s("label",{htmlFor:"vvCheck-xl",class:"text-xl"},"XL Size",-1),Ks={class:"flex items-center gap-3"},Qs=s("label",{htmlFor:"vvCheck-2xl",class:"text-2xl"},"2XL Size",-1),Ws=s("h2",{id:"slot-none",tabindex:"-1"},[n("Slot: None "),s("a",{class:"header-anchor",href:"#slot-none","aria-hidden":"true"},"#")],-1),Zs={class:"danger custom-block"},sn=s("p",{class:"custom-block-title"},"NO SLOT AVAILABLE",-1),nn=s("code",null,"<input>",-1),ln=s("h2",{id:"use-with-labels",tabindex:"-1"},[n("Use with Labels "),s("a",{class:"header-anchor",href:"#use-with-labels","aria-hidden":"true"},"#")],-1),an=r("",3),en={class:"flex flex-col w-full space-y-2 pt-4"},on={class:"flex items-center gap-2"},pn=s("label",{for:"option-one"},"The First Option",-1),tn={class:"flex items-center gap-2"},cn=s("label",{for:"option-two"},"The Second Option",-1),kn=JSON.parse('{"title":"VvCheckbox Component","description":"","frontmatter":{"title":"VvCheckbox Component"},"headers":[{"level":2,"title":"Import","slug":"import","link":"#import","children":[]},{"level":2,"title":"Emits: update:modelValue","slug":"emits-update-modelvalue","link":"#emits-update-modelvalue","children":[{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"Prop: checked","slug":"prop-checked","link":"#prop-checked","children":[{"level":3,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":3,"title":"Result","slug":"result","link":"#result","children":[]}]},{"level":2,"title":"Prop: color","slug":"prop-color","link":"#prop-color","children":[{"level":3,"title":"Syntax","slug":"syntax-1","link":"#syntax-1","children":[]},{"level":3,"title":"Result","slug":"result-1","link":"#result-1","children":[]}]},{"level":2,"title":"Prop: darkCheckHex","slug":"prop-darkcheckhex","link":"#prop-darkcheckhex","children":[{"level":3,"title":"Syntax","slug":"syntax-2","link":"#syntax-2","children":[]},{"level":3,"title":"Result","slug":"result-2","link":"#result-2","children":[]}]},{"level":2,"title":"Prop: lightCheckHex","slug":"prop-lightcheckhex","link":"#prop-lightcheckhex","children":[{"level":3,"title":"Syntax","slug":"syntax-3","link":"#syntax-3","children":[]},{"level":3,"title":"Result","slug":"result-3","link":"#result-3","children":[]}]},{"level":2,"title":"Prop: palette","slug":"prop-palette","link":"#prop-palette","children":[{"level":3,"title":"Syntax","slug":"syntax-4","link":"#syntax-4","children":[]},{"level":3,"title":"Result","slug":"result-4","link":"#result-4","children":[]}]},{"level":2,"title":"Prop: size","slug":"prop-size","link":"#prop-size","children":[{"level":3,"title":"Syntax","slug":"syntax-5","link":"#syntax-5","children":[]},{"level":3,"title":"Result","slug":"result-5","link":"#result-5","children":[]}]},{"level":2,"title":"Slot: None","slug":"slot-none","link":"#slot-none","children":[]},{"level":2,"title":"Use with Labels","slug":"use-with-labels","link":"#use-with-labels","children":[{"level":3,"title":"Syntax","slug":"syntax-6","link":"#syntax-6","children":[]},{"level":3,"title":"Result","slug":"result-6","link":"#result-6","children":[]}]}],"relativePath":"components/inputs/vv-checkbox.md","lastUpdated":1661201921000}'),rn={name:"components/inputs/vv-checkbox.md"},gn=Object.assign(rn,{setup(p){return(a,F)=>(E(),q("div",null,[s("h1",$,[n(t(a.$frontmatter.title)+" ",1),L]),s("p",null,"The "+t(a.$frontmatter.title)+" provides a set of props and config module based settings to make a validation ready set of checkbox input elements for applications with an extremely DRY implementation of atomic classes.",1),N,s("p",null,[n("To import a "+t(a.$frontmatter.title)+" installed by the ",1),H,n(" or "),j,n(":")]),U,s("p",null,"Alternatively, you can install the raw library "+t(a.$frontmatter.title)+" with:",1),O,s("p",null,[n("The "+t(a.$frontmatter.title)+" emits a standard Vue key of ",1),B,n(" upon the change event of the component's generated checkbox input's checked attribute.")]),s("div",M,[X,s("p",null,[n("This means when using the "+t(a.$frontmatter.title)+" downstream in an end application, you can safely use Vue's ",1),G,n(" binding to two-way bind a reactive value through your downstream component and into (and back from) the "+t(a.$frontmatter.title)+" instance.",1)])]),J,s("p",null,[n("Type: "),Y,K,n(" Default: "),s("strong",null,[s("code",null,'"'+t(l(c).defaults.VvCheckbox.checked)+'"',1)])]),s("p",null,[n("The "+t(a.$frontmatter.title)+" ",1),Q,n(" prop sets the component instance "),W,n(" attribute. This means when the component is initialized with the "),Z,n(" prop being "),ss,n(", then the rendered checkbox will display in the fully checked state.")]),ns,s("div",ls,[e(l(o)),e(l(o),{checked:!0})]),as,s("p",null,[n("Type: "),es,os,n(" Default: "),s("strong",null,[s("code",null,'"'+t(l(c).defaults.VvCheckbox.color)+'"',1)])]),s("p",null,[n("The "+t(a.$frontmatter.title)+" ",1),ps,n(" prop sets the component instance color based both on the "),ts,n(" prop and the "),cs,n(" prop value.")]),rs,s("div",Ds,[e(l(o),{color:"default",checked:!0}),e(l(o),{color:"error",checked:!0}),e(l(o),{color:"primary",checked:!0}),e(l(o),{color:"secondary",checked:!0}),e(l(o),{color:"success",checked:!0})]),Fs,s("p",null,[n("Type: "),ys,is,n(" Default: "),s("strong",null,[s("code",null,'"'+t(l(c).defaults.VvCheckbox.darkCheckHex)+'"',1)])]),s("p",null,[n("The "+t(a.$frontmatter.title)+" ",1),us,n(" prop sets the component checked state's check icon color in the dark color mode state.")]),ds,s("div",hs,[e(l(o),{"dark-check-hex":"#00ffff","light-check-hex":"#00ffff",checked:""})]),Cs,s("p",null,[n("Type: "),bs,ms,n(" Default: "),s("strong",null,[s("code",null,'"'+t(l(c).defaults.VvCheckbox.lightCheckHex)+'"',1)])]),s("p",null,[n("The "+t(a.$frontmatter.title)+" ",1),_s,n(" prop sets the component checked state's check icon color in the light color mode state.")]),As,s("div",vs,[e(l(o),{"light-check-hex":"#00ffff","dark-check-hex":"#00ffff",checked:""})]),ks,s("p",null,[n("Type: "),gs,xs,n(" Default: "),s("strong",null,[s("code",null,'"'+t(l(c).defaults.VvCheckbox.palette)+'"',1)])]),s("p",null,[n("The "+t(a.$frontmatter.title)+" ",1),fs,n(" prop sets the component instance palette based both on the "),Es,n(" prop and the "),qs,n(" prop value.")]),Vs,s("div",Ts,[e(l(o),{palette:"default",checked:!0}),e(l(o),{palette:"default",color:"error",checked:!0}),e(l(o),{palette:"default",color:"primary",checked:!0}),e(l(o),{palette:"default",color:"secondary",checked:!0}),e(l(o),{palette:"default",color:"success",checked:!0})]),Ss,s("p",null,[n("Type: "),ws,zs,n(" Default: "),s("strong",null,[s("code",null,'"'+t(l(c).defaults.VvCheckbox.size)+'"',1)])]),s("p",null,[n("The "+t(a.$frontmatter.title)+" ",1),Is,n(" prop sets the component instance size-based classes which in the context of checkbox inputs typically involves fixed width and height atomic classes.")]),Ps,s("div",Rs,[e(l(o),{size:"xs",checked:!0}),e(l(o),{size:"sm",checked:!0}),e(l(o),{size:"md",checked:!0}),e(l(o),{size:"lg",checked:!0}),e(l(o),{size:"xl",checked:!0}),e(l(o),{size:"2xl",checked:!0})]),s("details",$s,[Ls,s("div",Ns,[s("div",Hs,[e(l(o),{id:"vvCheck-xs",size:"xs",checked:!0}),js]),s("div",Us,[e(l(o),{id:"vvCheck-sm",size:"sm",checked:!0}),Os]),s("div",Bs,[e(l(o),{id:"vvCheck-md",size:"md",checked:!0}),Ms]),s("div",Xs,[e(l(o),{id:"vvCheck-lg",size:"lg",checked:!0}),Gs]),s("div",Js,[e(l(o),{id:"vvCheck-xl",size:"xl",checked:!0}),Ys]),s("div",Ks,[e(l(o),{id:"vvCheck-2xl",size:"2xl",checked:!0}),Qs])])]),Ws,s("div",Zs,[sn,s("p",null,[n("The "+t(a.$frontmatter.title)+" does not have Vue slot option, because an ",1),nn,n(" element is a HTML Empty Element, which cannot have children or child nodes.")])]),ln,s("p",null,"In most application contexts, you'll want to use the "+t(a.$frontmatter.title)+" with label text and the inherent functionality between associated label and input elements. Here's a few examples to illustrate one of endless ways this can be accomplished within an atomic class and VueVentus context:",1),an,s("div",en,[s("div",on,[e(l(o),{id:"option-one",color:"primary",checked:!0}),pn]),s("div",tn,[e(l(o),{id:"option-two",color:"primary"}),cn])]),e(V)]))}});export{kn as __pageData,gn as default};
