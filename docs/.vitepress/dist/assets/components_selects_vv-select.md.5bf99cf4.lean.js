import{_ as g}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.2fc29b35.js";import{V as i}from"./chunks/VvConfig.1bf76bdf.js";import{f,i as _,g as S,_ as E,o as b,c as v,r as q,n as V,a as s,b as n,t,u as o,d as a,w as p,e as D}from"./app.eb070c81.js";import"./chunks/Anchors.bafcf40e.js";import"./chunks/Text.d88c79dd.js";import"./chunks/Transitions.262fdc37.js";import"./chunks/Buttons.b4b40e12.js";import"./chunks/Checkboxes.81ecc6c3.js";import"./chunks/ColorModes.4904e81c.js";import"./chunks/Inputs.a721047f.js";import"./chunks/Listboxes.3c490966.js";import"./chunks/Lists.c1360393.js";import"./chunks/Radios.230b40d2.js";import"./chunks/Selects.7f4e72d6.js";import"./chunks/Textareas.4dc66c13.js";const w=f({name:"VvSelect",emits:["update:modelValue"],props:{color:{type:String,default:i.defaults.VvSelect.color},palette:{type:String,default:i.defaults.VvSelect.palette},size:{type:String,default:i.defaults.VvSelect.size},modelValue:{type:String,default:""}},setup(e){const l=Object.keys(_("vv",{})).length>0?_("vv"):i;return{classes:S(()=>{var y,F,d,m,h,C;let r=[];return(y=l==null?void 0:l.selects)!=null&&y.base()&&r.push(l.selects.base()),e.size!==""&&((d=(F=l==null?void 0:l.selects)==null?void 0:F.sizes)==null?void 0:d[e.size])&&r.push(l.selects.sizes[e.size]),(C=(h=(m=l==null?void 0:l.selects)==null?void 0:m.palettes)==null?void 0:h[e.palette])!=null&&C[e.color]&&r.push(l.selects.palettes[e.palette][e.color]),r.join(" ").trim()}),handleSelectChange:r=>r.target.value}}}),O=["value"];function T(e,l,u,A,r,y){return b(),v("select",{class:V(e.classes),value:e.modelValue,onChange:l[0]||(l[0]=F=>e.$emit("update:modelValue",e.handleSelectChange(F)))},[q(e.$slots,"default")],42,O)}const c=E(w,[["render",T]]),x={id:"frontmatter-title",tabindex:"-1"},z=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),k=s("h2",{id:"import",tabindex:"-1"},[n("Import "),s("a",{class:"header-anchor",href:"#import","aria-hidden":"true"},"#")],-1),I=s("a",{href:"/vueventus/guides/vueventus-cli.html"},"vueventus CLI",-1),P=s("a",{href:"/vueventus/guides/vv-update-cli.html"},"vv-update CLI",-1),$=D("",2),R=D("",5),N=s("code",null,"update:modelValue",-1),j={class:"tip custom-block"},L=s("p",{class:"custom-block-title"},"TIP",-1),B=s("code",null,"v-model",-1),J=D("",3),M=s("strong",null,[s("code",null,"String")],-1),U=s("br",null,null,-1),Y=s("code",null,"color",-1),G=s("code",null,"color",-1),H=s("code",null,"palette",-1),K=D("",3),Q={class:"w-full pt-4"},W=s("option",{value:""},"Select an Option",-1),X=s("option",{value:"one"},"Default Color Option 1",-1),Z=s("option",{value:"two"},"Default Color Option 2",-1),ss=s("option",{value:""},"Select an Option",-1),ns=s("option",{value:"one"},"Error Color Option 1",-1),ls=s("option",{value:"two"},"Error Color Option 2",-1),os=s("option",{value:""},"Select an Option",-1),as=s("option",{value:"one"},"Success Color Option 1",-1),es=s("option",{value:"two"},"Success Color Option 2",-1),ts=s("h3",{id:"typing-for-downstream-component-instances",tabindex:"-1"},[n("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances","aria-hidden":"true"},"#")],-1),ps=s("p",null,"Coming Soon!",-1),cs=s("h2",{id:"prop-palette",tabindex:"-1"},[n("Prop: palette "),s("a",{class:"header-anchor",href:"#prop-palette","aria-hidden":"true"},"#")],-1),rs=s("strong",null,[s("code",null,"String")],-1),is=s("br",null,null,-1),Ds=s("code",null,"palette",-1),Fs=s("code",null,"color",-1),ys=s("code",null,"palette",-1),us=D("",3),ds={class:"w-full pt-4"},ms=s("option",{value:""},"Select an Option",-1),hs=s("option",{value:"one"},"Default Color Option 1",-1),Cs=s("option",{value:"two"},"Default Color Option 2",-1),_s=s("option",{value:""},"Select an Option",-1),bs=s("option",{value:"one"},"Error Color Option 1",-1),vs=s("option",{value:"two"},"Error Color Option 2",-1),As=s("option",{value:""},"Select an Option",-1),gs=s("option",{value:"one"},"Success Color Option 1",-1),fs=s("option",{value:"two"},"Success Color Option 2",-1),Ss=s("h3",{id:"typing-for-downstream-component-instances-1",tabindex:"-1"},[n("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances-1","aria-hidden":"true"},"#")],-1),Es=s("p",null,"Coming Soon!",-1),qs=s("h2",{id:"prop-size",tabindex:"-1"},[n("Prop: size "),s("a",{class:"header-anchor",href:"#prop-size","aria-hidden":"true"},"#")],-1),Vs=s("strong",null,[s("code",null,"String")],-1),ws=s("br",null,null,-1),Os=s("code",null,"size",-1),Ts=D("",3),xs={class:"w-full pt-4"},zs=s("option",{value:""},"Select an Option",-1),ks=s("option",{value:"one"},'"lg" Size Option 1',-1),Is=s("option",{value:"one"},'"lg" Size Option 2',-1),Ps={class:"details custom-block"},$s=s("summary",null,"size prop input size examples",-1),Rs={class:"flex flex-wrap items-center gap-2 pt-4"},Ns=s("option",{value:""},"Select an Option",-1),js=s("option",{value:"one"},'"xs" Size Option 1',-1),Ls=s("option",{value:"one"},'"xs" Size Option 2',-1),Bs=s("option",{value:""},"Select an Option",-1),Js=s("option",{value:"one"},'"sm" Size Option 1',-1),Ms=s("option",{value:"one"},'"sm" Size Option 2',-1),Us=s("option",{value:""},"Select an Option",-1),Ys=s("option",{value:"one"},'"md" Size Option 1',-1),Gs=s("option",{value:"one"},'"md" Size Option 2',-1),Hs=s("option",{value:""},"Select an Option",-1),Ks=s("option",{value:"one"},'"lg" Size Option 1',-1),Qs=s("option",{value:"one"},'"lg" Size Option 2',-1),Ws=s("option",{value:""},"Select an Option",-1),Xs=s("option",{value:"one"},'"xl" Size Option 1',-1),Zs=s("option",{value:"one"},'"xl" Size Option 2',-1),sn=s("option",{value:""},"Select an Option",-1),nn=s("option",{value:"one"},'"2xl" Size Option 1',-1),ln=s("option",{value:"one"},'"2xl" Size Option 2',-1),on=s("h3",{id:"typing-for-downstream-component-instances-2",tabindex:"-1"},[n("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances-2","aria-hidden":"true"},"#")],-1),an=s("p",null,"Coming Soon!",-1),en=s("h2",{id:"slot-default",tabindex:"-1"},[n("Slot: #default "),s("a",{class:"header-anchor",href:"#slot-default","aria-hidden":"true"},"#")],-1),tn=s("code",null,"#default",-1),pn=D("",3),cn={class:"w-full pt-4"},rn=s("option",{value:""},"Select an Option",-1),Dn=s("option",{value:"one"},"Slot Example Option 1",-1),Vn=JSON.parse('{"title":"VvSelect Component","description":"","frontmatter":{"title":"VvSelect Component"},"headers":[{"level":2,"title":"Import","slug":"import","link":"#import","children":[]},{"level":2,"title":"Emits: update:modelValue","slug":"emits-update-modelvalue","link":"#emits-update-modelvalue","children":[{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"Prop: color","slug":"prop-color","link":"#prop-color","children":[{"level":3,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":3,"title":"Result","slug":"result","link":"#result","children":[]},{"level":3,"title":"Typing for Downstream Component Instances","slug":"typing-for-downstream-component-instances","link":"#typing-for-downstream-component-instances","children":[]}]},{"level":2,"title":"Prop: palette","slug":"prop-palette","link":"#prop-palette","children":[{"level":3,"title":"Syntax","slug":"syntax-1","link":"#syntax-1","children":[]},{"level":3,"title":"Result","slug":"result-1","link":"#result-1","children":[]},{"level":3,"title":"Typing for Downstream Component Instances","slug":"typing-for-downstream-component-instances-1","link":"#typing-for-downstream-component-instances-1","children":[]}]},{"level":2,"title":"Prop: size","slug":"prop-size","link":"#prop-size","children":[{"level":3,"title":"Syntax","slug":"syntax-2","link":"#syntax-2","children":[]},{"level":3,"title":"Result","slug":"result-2","link":"#result-2","children":[]},{"level":3,"title":"Typing for Downstream Component Instances","slug":"typing-for-downstream-component-instances-2","link":"#typing-for-downstream-component-instances-2","children":[]}]},{"level":2,"title":"Slot: #default","slug":"slot-default","link":"#slot-default","children":[{"level":3,"title":"Syntax","slug":"syntax-3","link":"#syntax-3","children":[]},{"level":3,"title":"Result","slug":"result-3","link":"#result-3","children":[]}]}],"relativePath":"components/selects/vv-select.md","lastUpdated":1672866100000}'),Fn={name:"components/selects/vv-select.md"},wn=Object.assign(Fn,{setup(e){return(l,u)=>(b(),v("div",null,[s("h1",x,[n(t(l.$frontmatter.title)+" ",1),z]),s("p",null,"The "+t(l.$frontmatter.title)+" provides a set of props and config module based settings to make a validation ready set of select elements for applications with an extremely DRY implementation of atomic classes.",1),k,s("p",null,[n("To import a "+t(l.$frontmatter.title)+" installed by the ",1),I,n(" or "),P,n(":")]),$,s("p",null,"Alternatively, you can install the raw library "+t(l.$frontmatter.title)+" with:",1),R,s("p",null,[n("The "+t(l.$frontmatter.title)+" emits a standard Vue key of ",1),N,n(" upon input event changes of the component's currently selected child option's value attribute.")]),s("div",j,[L,s("p",null,[n("This means when using the "+t(l.$frontmatter.title)+" downstream in an end application, you can safely use Vue's ",1),B,n(" binding to two-way bind a reactive value through your downstream component and into (and back from) the "+t(l.$frontmatter.title)+" instance.",1)])]),J,s("p",null,[n("Type: "),M,U,n(" Default: "),s("strong",null,[s("code",null,'"'+t(o(i).defaults.VvSelect.color)+'"',1)])]),s("p",null,[n("The "+t(l.$frontmatter.title)+" ",1),Y,n(" prop sets the component instance color based both on the "),G,n(" prop and the "),H,n(" prop value.")]),K,s("div",Q,[a(o(c),{color:"default",class:"mb-2"},{default:p(()=>[W,X,Z]),_:1}),a(o(c),{color:"error",class:"mb-2"},{default:p(()=>[ss,ns,ls]),_:1}),a(o(c),{color:"success",class:"mb-2"},{default:p(()=>[os,as,es]),_:1})]),ts,ps,cs,s("p",null,[n("Type: "),rs,is,n(" Default: "),s("strong",null,[s("code",null,'"'+t(o(i).defaults.VvSelect.palette)+'"',1)])]),s("p",null,[n("The "+t(l.$frontmatter.title)+" ",1),Ds,n(" prop sets the component instance palette based both on the "),Fs,n(" prop and the "),ys,n(" prop value.")]),us,s("div",ds,[a(o(c),{palette:"underlined",color:"default",class:"mb-2",style:{"border-bottom":"2px"}},{default:p(()=>[ms,hs,Cs]),_:1}),a(o(c),{palette:"underlined",color:"error",class:"mb-2"},{default:p(()=>[_s,bs,vs]),_:1}),a(o(c),{palette:"underlined",color:"success",class:"mb-2"},{default:p(()=>[As,gs,fs]),_:1})]),Ss,Es,qs,s("p",null,[n("Type: "),Vs,ws,n(" Default: "),s("strong",null,[s("code",null,'"'+t(o(i).defaults.VvSelect.size)+'"',1)])]),s("p",null,[n("The "+t(l.$frontmatter.title)+" ",1),Os,n(" prop sets the component instance size-based classes which in the context of inputs typically involves padding and font size atomic classes.")]),Ts,s("div",xs,[a(o(c),{size:"lg",class:"mb-2"},{default:p(()=>[zs,ks,Is]),_:1})]),s("details",Ps,[$s,s("div",Rs,[a(o(c),{size:"xs",class:"mb-2"},{default:p(()=>[Ns,js,Ls]),_:1}),a(o(c),{size:"sm",class:"mb-2"},{default:p(()=>[Bs,Js,Ms]),_:1}),a(o(c),{size:"md",class:"mb-2"},{default:p(()=>[Us,Ys,Gs]),_:1}),a(o(c),{size:"lg",class:"mb-2"},{default:p(()=>[Hs,Ks,Qs]),_:1}),a(o(c),{size:"xl",class:"mb-2"},{default:p(()=>[Ws,Xs,Zs]),_:1}),a(o(c),{size:"2xl",class:"mb-2"},{default:p(()=>[sn,nn,ln]),_:1})])]),on,an,en,s("p",null,[n("The "+t(l.$frontmatter.title)+" has a standard ",1),tn,n(" Vue slot to insert child elements/nodes into the component.")]),pn,s("div",cn,[a(o(c),null,{default:p(()=>[rn,Dn]),_:1})]),a(g)]))}});export{Vn as __pageData,wn as default};
