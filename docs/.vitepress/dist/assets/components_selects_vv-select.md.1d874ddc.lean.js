import{_ as f}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.2985ab4b.js";import{V as D}from"./chunks/VvConfig.c0b3657c.js";import{f as S,i as _,g as E,_ as q,o as b,c as v,r as V,n as O,a as s,b as n,t as p,u as l,d as o,w as c,e as F}from"./app.ba5baeac.js";import"./chunks/Anchors.f049ebc4.js";import"./chunks/Text.0efcfbbe.js";import"./chunks/Transitions.cc57681e.js";import"./chunks/Buttons.16d998aa.js";import"./chunks/Checkboxes.4124066b.js";import"./chunks/ColorModes.cf2ce130.js";import"./chunks/Inputs.f0037d89.js";import"./chunks/Radios.b252d274.js";import"./chunks/Selects.144dd1c3.js";import"./chunks/Textareas.4518d61e.js";const T=S({name:"VvSelect",emits:["update:modelValue"],props:{color:{type:String,default:D.defaults.VvSelect.color},palette:{type:String,default:D.defaults.VvSelect.palette},size:{type:String,default:D.defaults.VvSelect.size},modelValue:{type:String,default:""}},setup(e,a){const t=Object.keys(_("vv",{})).length>0?_("vv"):D;return{classes:E(()=>{var y,u,d,C,m,h;let i=[];return(y=t==null?void 0:t.selects)!=null&&y.base()&&i.push(t.selects.base()),e.size!==""&&((d=(u=t==null?void 0:t.selects)==null?void 0:u.sizes)==null?void 0:d[e.size])&&i.push(t.selects.sizes[e.size]),(h=(m=(C=t==null?void 0:t.selects)==null?void 0:C.palettes)==null?void 0:m[e.palette])!=null&&h[e.color]&&i.push(t.selects.palettes[e.palette][e.color]),i.join(" ").trim()}),handleSelectChange:i=>i.target.value}}}),x=["value"];function w(e,a,t,A,g,i){return b(),v("select",{class:O(e.classes),value:e.modelValue,onChange:a[0]||(a[0]=y=>e.$emit("update:modelValue",e.handleSelectChange(y)))},[V(e.$slots,"default")],42,x)}const r=q(T,[["render",w]]),z={id:"frontmatter-title",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),I=s("h2",{id:"import",tabindex:"-1"},[n("Import "),s("a",{class:"header-anchor",href:"#import","aria-hidden":"true"},"#")],-1),P=s("a",{href:"/vueventus/guides/vueventus-cli.html"},"vueventus CLI",-1),$=s("a",{href:"/vueventus/guides/vv-update-cli.html"},"vv-update CLI",-1),R=F("",2),N=F("",5),j=s("code",null,"update:modelValue",-1),L={class:"tip custom-block"},B=s("p",{class:"custom-block-title"},"TIP",-1),J=s("code",null,"v-model",-1),M=F("",3),U=s("strong",null,[s("code",null,"String")],-1),Y=s("br",null,null,-1),G=s("code",null,"color",-1),H=s("code",null,"color",-1),K=s("code",null,"palette",-1),Q=F("",3),W={class:"w-full pt-4"},X=s("option",{value:""},"Select an Option",-1),Z=s("option",{value:"one"},"Default Color Option 1",-1),ss=s("option",{value:"two"},"Default Color Option 2",-1),ns=s("option",{value:""},"Select an Option",-1),ls=s("option",{value:"one"},"Error Color Option 1",-1),as=s("option",{value:"two"},"Error Color Option 2",-1),os=s("option",{value:""},"Select an Option",-1),es=s("option",{value:"one"},"Success Color Option 1",-1),ts=s("option",{value:"two"},"Success Color Option 2",-1),ps=s("h2",{id:"prop-palette",tabindex:"-1"},[n("Prop: palette "),s("a",{class:"header-anchor",href:"#prop-palette","aria-hidden":"true"},"#")],-1),cs=s("strong",null,[s("code",null,"String")],-1),rs=s("br",null,null,-1),is=s("code",null,"palette",-1),Ds=s("code",null,"color",-1),Fs=s("code",null,"palette",-1),ys=F("",3),us={class:"w-full pt-4"},ds=s("option",{value:""},"Select an Option",-1),Cs=s("option",{value:"one"},"Default Color Option 1",-1),ms=s("option",{value:"two"},"Default Color Option 2",-1),hs=s("option",{value:""},"Select an Option",-1),_s=s("option",{value:"one"},"Error Color Option 1",-1),bs=s("option",{value:"two"},"Error Color Option 2",-1),vs=s("option",{value:""},"Select an Option",-1),As=s("option",{value:"one"},"Success Color Option 1",-1),gs=s("option",{value:"two"},"Success Color Option 2",-1),fs=s("h2",{id:"prop-size",tabindex:"-1"},[n("Prop: size "),s("a",{class:"header-anchor",href:"#prop-size","aria-hidden":"true"},"#")],-1),Ss=s("strong",null,[s("code",null,"String")],-1),Es=s("br",null,null,-1),qs=s("code",null,"size",-1),Vs=F("",3),Os={class:"w-full pt-4"},Ts=s("option",{value:""},"Select an Option",-1),xs=s("option",{value:"one"},'"lg" Size Option 1',-1),ws=s("option",{value:"one"},'"lg" Size Option 2',-1),zs={class:"details custom-block"},ks=s("summary",null,"size prop input size examples",-1),Is={class:"flex flex-wrap items-center gap-2 pt-4"},Ps=s("option",{value:""},"Select an Option",-1),$s=s("option",{value:"one"},'"xs" Size Option 1',-1),Rs=s("option",{value:"one"},'"xs" Size Option 2',-1),Ns=s("option",{value:""},"Select an Option",-1),js=s("option",{value:"one"},'"sm" Size Option 1',-1),Ls=s("option",{value:"one"},'"sm" Size Option 2',-1),Bs=s("option",{value:""},"Select an Option",-1),Js=s("option",{value:"one"},'"md" Size Option 1',-1),Ms=s("option",{value:"one"},'"md" Size Option 2',-1),Us=s("option",{value:""},"Select an Option",-1),Ys=s("option",{value:"one"},'"lg" Size Option 1',-1),Gs=s("option",{value:"one"},'"lg" Size Option 2',-1),Hs=s("option",{value:""},"Select an Option",-1),Ks=s("option",{value:"one"},'"xl" Size Option 1',-1),Qs=s("option",{value:"one"},'"xl" Size Option 2',-1),Ws=s("option",{value:""},"Select an Option",-1),Xs=s("option",{value:"one"},'"2xl" Size Option 1',-1),Zs=s("option",{value:"one"},'"2xl" Size Option 2',-1),sn=s("h2",{id:"slot-default",tabindex:"-1"},[n("Slot: #default "),s("a",{class:"header-anchor",href:"#slot-default","aria-hidden":"true"},"#")],-1),nn=s("code",null,"#default",-1),ln=F("",3),an={class:"w-full pt-4"},on=s("option",{value:""},"Select an Option",-1),en=s("option",{value:"one"},"Slot Example Option 1",-1),vn=JSON.parse('{"title":"VvSelect Component","description":"","frontmatter":{"title":"VvSelect Component"},"headers":[{"level":2,"title":"Import","slug":"import","link":"#import","children":[]},{"level":2,"title":"Emits: update:modelValue","slug":"emits-update-modelvalue","link":"#emits-update-modelvalue","children":[{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"Prop: color","slug":"prop-color","link":"#prop-color","children":[{"level":3,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":3,"title":"Result","slug":"result","link":"#result","children":[]}]},{"level":2,"title":"Prop: palette","slug":"prop-palette","link":"#prop-palette","children":[{"level":3,"title":"Syntax","slug":"syntax-1","link":"#syntax-1","children":[]},{"level":3,"title":"Result","slug":"result-1","link":"#result-1","children":[]}]},{"level":2,"title":"Prop: size","slug":"prop-size","link":"#prop-size","children":[{"level":3,"title":"Syntax","slug":"syntax-2","link":"#syntax-2","children":[]},{"level":3,"title":"Result","slug":"result-2","link":"#result-2","children":[]}]},{"level":2,"title":"Slot: #default","slug":"slot-default","link":"#slot-default","children":[{"level":3,"title":"Syntax","slug":"syntax-3","link":"#syntax-3","children":[]},{"level":3,"title":"Result","slug":"result-3","link":"#result-3","children":[]}]}],"relativePath":"components/selects/vv-select.md","lastUpdated":1670859817000}'),tn={name:"components/selects/vv-select.md"},An=Object.assign(tn,{setup(e){return(a,t)=>(b(),v("div",null,[s("h1",z,[n(p(a.$frontmatter.title)+" ",1),k]),s("p",null,"The "+p(a.$frontmatter.title)+" provides a set of props and config module based settings to make a validation ready set of select elements for applications with an extremely DRY implementation of atomic classes.",1),I,s("p",null,[n("To import a "+p(a.$frontmatter.title)+" installed by the ",1),P,n(" or "),$,n(":")]),R,s("p",null,"Alternatively, you can install the raw library "+p(a.$frontmatter.title)+" with:",1),N,s("p",null,[n("The "+p(a.$frontmatter.title)+" emits a standard Vue key of ",1),j,n(" upon input event changes of the component's currently selected child option's value attribute.")]),s("div",L,[B,s("p",null,[n("This means when using the "+p(a.$frontmatter.title)+" downstream in an end application, you can safely use Vue's ",1),J,n(" binding to two-way bind a reactive value through your downstream component and into (and back from) the "+p(a.$frontmatter.title)+" instance.",1)])]),M,s("p",null,[n("Type: "),U,Y,n(" Default: "),s("strong",null,[s("code",null,'"'+p(l(D).defaults.VvSelect.color)+'"',1)])]),s("p",null,[n("The "+p(a.$frontmatter.title)+" ",1),G,n(" prop sets the component instance color based both on the "),H,n(" prop and the "),K,n(" prop value.")]),Q,s("div",W,[o(l(r),{color:"default",class:"mb-2"},{default:c(()=>[X,Z,ss]),_:1}),o(l(r),{color:"error",class:"mb-2"},{default:c(()=>[ns,ls,as]),_:1}),o(l(r),{color:"success",class:"mb-2"},{default:c(()=>[os,es,ts]),_:1})]),ps,s("p",null,[n("Type: "),cs,rs,n(" Default: "),s("strong",null,[s("code",null,'"'+p(l(D).defaults.VvSelect.palette)+'"',1)])]),s("p",null,[n("The "+p(a.$frontmatter.title)+" ",1),is,n(" prop sets the component instance palette based both on the "),Ds,n(" prop and the "),Fs,n(" prop value.")]),ys,s("div",us,[o(l(r),{palette:"underlined",color:"default",class:"mb-2",style:{"border-bottom":"2px"}},{default:c(()=>[ds,Cs,ms]),_:1}),o(l(r),{palette:"underlined",color:"error",class:"mb-2"},{default:c(()=>[hs,_s,bs]),_:1}),o(l(r),{palette:"underlined",color:"success",class:"mb-2"},{default:c(()=>[vs,As,gs]),_:1})]),fs,s("p",null,[n("Type: "),Ss,Es,n(" Default: "),s("strong",null,[s("code",null,'"'+p(l(D).defaults.VvSelect.size)+'"',1)])]),s("p",null,[n("The "+p(a.$frontmatter.title)+" ",1),qs,n(" prop sets the component instance size-based classes which in the context of inputs typically involves padding and font size atomic classes.")]),Vs,s("div",Os,[o(l(r),{size:"lg",class:"mb-2"},{default:c(()=>[Ts,xs,ws]),_:1})]),s("details",zs,[ks,s("div",Is,[o(l(r),{size:"xs",class:"mb-2"},{default:c(()=>[Ps,$s,Rs]),_:1}),o(l(r),{size:"sm",class:"mb-2"},{default:c(()=>[Ns,js,Ls]),_:1}),o(l(r),{size:"md",class:"mb-2"},{default:c(()=>[Bs,Js,Ms]),_:1}),o(l(r),{size:"lg",class:"mb-2"},{default:c(()=>[Us,Ys,Gs]),_:1}),o(l(r),{size:"xl",class:"mb-2"},{default:c(()=>[Hs,Ks,Qs]),_:1}),o(l(r),{size:"2xl",class:"mb-2"},{default:c(()=>[Ws,Xs,Zs]),_:1})])]),sn,s("p",null,[n("The "+p(a.$frontmatter.title)+" has a standard ",1),nn,n(" Vue slot to insert child elements/nodes into the component.")]),ln,s("div",an,[o(l(r),null,{default:c(()=>[on,en]),_:1})]),o(f)]))}});export{vn as __pageData,An as default};
