import{_ as A}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.fa02e46c.js";import{V as c}from"./chunks/VvConfig.87e4547d.js";import{f,i as _,g as S,_ as E,o as b,c as v,r as q,n as V,a as s,b as n,t as e,u as o,d as t,w as p,e as i}from"./app.605439d0.js";import"./chunks/Anchors.8bdcb837.js";import"./chunks/Text.d88c79dd.js";import"./chunks/Transitions.1d316f13.js";import"./chunks/Buttons.03bca295.js";import"./chunks/Checkboxes.344e9626.js";import"./chunks/ColorModes.4904e81c.js";import"./chunks/Inputs.1b95f59c.js";import"./chunks/Listboxes.e439c03d.js";import"./chunks/Lists.c1360393.js";import"./chunks/Radios.4e71a451.js";import"./chunks/Selects.f19d72d8.js";import"./chunks/Textareas.9fe3679a.js";const T=f({name:"VvSelect",emits:["update:modelValue"],props:{color:{type:String,default:c.defaults.VvSelect.color},debug:{type:Boolean,default:c.defaults.VvSelect.debug},palette:{type:String,default:c.defaults.VvSelect.palette},size:{type:String,default:c.defaults.VvSelect.size},modelValue:{type:String,default:""}},setup(a){const l=Object.keys(_("vv",{})).length>0?_("vv"):c;return{classes:S(()=>{var y,F,d,h,m,C;let D=[];return(y=l==null?void 0:l.selects)!=null&&y.base()&&D.push(l.selects.base()),a.size!==""&&((d=(F=l==null?void 0:l.selects)==null?void 0:F.sizes)!=null&&d[a.size])&&D.push(String(l.selects.sizes[a.size])),(C=(m=(h=l==null?void 0:l.selects)==null?void 0:h.palettes)==null?void 0:m[a.palette])!=null&&C[a.color]&&D.push(String(l.selects.palettes[a.palette][a.color])),D.join(" ").trim()}),handleSelectChange:D=>D.target.value}}}),w=["value","data-vv-select-generated-classes","data-vv-select-prop-color","data-vv-select-prop-model-value","data-vv-select-prop-palette","data-vv-select-prop-size"];function O(a,l,u,g,D,y){return b(),v("select",{class:V(a.classes),value:a.modelValue,onChange:l[0]||(l[0]=F=>a.$emit("update:modelValue",a.handleSelectChange(F))),"data-vv-select-generated-classes":a.debug?a.classes:null,"data-vv-select-prop-color":a.debug?a.color:null,"data-vv-select-prop-model-value":a.debug?a.modelValue:null,"data-vv-select-prop-palette":a.debug?a.palette:null,"data-vv-select-prop-size":a.debug?a.size:null},[q(a.$slots,"default")],42,w)}const r=E(T,[["render",O]]),x={id:"frontmatter-title",tabindex:"-1"},z=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),k=s("h2",{id:"import",tabindex:"-1"},[n("Import "),s("a",{class:"header-anchor",href:"#import","aria-hidden":"true"},"#")],-1),I=s("a",{href:"/vueventus/guides/vueventus-cli.html"},"vueventus CLI",-1),P=s("a",{href:"/vueventus/guides/vv-update-cli.html"},"vv-update CLI",-1),$=i("",2),R=i("",5),N=s("code",null,"update:modelValue",-1),j={class:"tip custom-block"},L=s("p",{class:"custom-block-title"},"TIP",-1),B=s("code",null,"v-model",-1),M=i("",3),H=s("strong",null,[s("code",null,"String")],-1),J=s("br",null,null,-1),U=s("code",null,"color",-1),W=s("code",null,"color",-1),Y=s("code",null,"palette",-1),G=i("",3),K={class:"w-full pt-4"},Q=s("option",{value:""},"Select an Option",-1),X=s("option",{value:"one"},"Default Color Option 1",-1),Z=s("option",{value:"two"},"Default Color Option 2",-1),ss=s("option",{value:""},"Select an Option",-1),ns=s("option",{value:"one"},"Error Color Option 1",-1),ls=s("option",{value:"two"},"Error Color Option 2",-1),as=s("option",{value:""},"Select an Option",-1),os=s("option",{value:"one"},"Success Color Option 1",-1),es=s("option",{value:"two"},"Success Color Option 2",-1),ts=s("h3",{id:"typing-for-downstream-component-instances",tabindex:"-1"},[n("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances","aria-hidden":"true"},"#")],-1),ps=s("p",null,"Coming Soon!",-1),rs=s("h2",{id:"prop-debug",tabindex:"-1"},[n("Prop: debug "),s("a",{class:"header-anchor",href:"#prop-debug","aria-hidden":"true"},"#")],-1),cs=s("strong",null,[s("code",null,"Boolean")],-1),is=s("br",null,null,-1),Ds=s("code",null,"debug",-1),Fs=s("code",null,"data-vv-select-",-1),ys=i("",3),us={class:"w-full pt-4"},ds=s("option",{value:""},"Select Option",-1),hs=s("option",{value:"one"},"Option 1",-1),ms=s("h2",{id:"prop-palette",tabindex:"-1"},[n("Prop: palette "),s("a",{class:"header-anchor",href:"#prop-palette","aria-hidden":"true"},"#")],-1),Cs=s("strong",null,[s("code",null,"String")],-1),_s=s("br",null,null,-1),bs=s("code",null,"palette",-1),vs=s("code",null,"color",-1),gs=s("code",null,"palette",-1),As=i("",3),fs={class:"w-full pt-4"},Ss=s("option",{value:""},"Select an Option",-1),Es=s("option",{value:"one"},"Default Color Option 1",-1),qs=s("option",{value:"two"},"Default Color Option 2",-1),Vs=s("option",{value:""},"Select an Option",-1),Ts=s("option",{value:"one"},"Error Color Option 1",-1),ws=s("option",{value:"two"},"Error Color Option 2",-1),Os=s("option",{value:""},"Select an Option",-1),xs=s("option",{value:"one"},"Success Color Option 1",-1),zs=s("option",{value:"two"},"Success Color Option 2",-1),ks=s("h3",{id:"typing-for-downstream-component-instances-1",tabindex:"-1"},[n("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances-1","aria-hidden":"true"},"#")],-1),Is=s("p",null,"Coming Soon!",-1),Ps=s("h2",{id:"prop-size",tabindex:"-1"},[n("Prop: size "),s("a",{class:"header-anchor",href:"#prop-size","aria-hidden":"true"},"#")],-1),$s=s("strong",null,[s("code",null,"String")],-1),Rs=s("br",null,null,-1),Ns=s("code",null,"size",-1),js=i("",3),Ls={class:"w-full pt-4"},Bs=s("option",{value:""},"Select an Option",-1),Ms=s("option",{value:"one"},'"lg" Size Option 1',-1),Hs=s("option",{value:"one"},'"lg" Size Option 2',-1),Js={class:"details custom-block"},Us=s("summary",null,"size prop input size examples",-1),Ws={class:"flex flex-wrap items-center gap-2 pt-4"},Ys=s("option",{value:""},"Select an Option",-1),Gs=s("option",{value:"one"},'"xs" Size Option 1',-1),Ks=s("option",{value:"one"},'"xs" Size Option 2',-1),Qs=s("option",{value:""},"Select an Option",-1),Xs=s("option",{value:"one"},'"sm" Size Option 1',-1),Zs=s("option",{value:"one"},'"sm" Size Option 2',-1),sn=s("option",{value:""},"Select an Option",-1),nn=s("option",{value:"one"},'"md" Size Option 1',-1),ln=s("option",{value:"one"},'"md" Size Option 2',-1),an=s("option",{value:""},"Select an Option",-1),on=s("option",{value:"one"},'"lg" Size Option 1',-1),en=s("option",{value:"one"},'"lg" Size Option 2',-1),tn=s("option",{value:""},"Select an Option",-1),pn=s("option",{value:"one"},'"xl" Size Option 1',-1),rn=s("option",{value:"one"},'"xl" Size Option 2',-1),cn=s("option",{value:""},"Select an Option",-1),Dn=s("option",{value:"one"},'"2xl" Size Option 1',-1),Fn=s("option",{value:"one"},'"2xl" Size Option 2',-1),yn=s("h3",{id:"typing-for-downstream-component-instances-2",tabindex:"-1"},[n("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances-2","aria-hidden":"true"},"#")],-1),un=s("p",null,"Coming Soon!",-1),dn=s("h2",{id:"slot-default",tabindex:"-1"},[n("Slot: #default "),s("a",{class:"header-anchor",href:"#slot-default","aria-hidden":"true"},"#")],-1),hn=s("code",null,"#default",-1),mn=i("",3),Cn={class:"w-full pt-4"},_n=s("option",{value:""},"Select an Option",-1),bn=s("option",{value:"one"},"Slot Example Option 1",-1),$n=JSON.parse('{"title":"VvSelect Component","description":"","frontmatter":{"title":"VvSelect Component"},"headers":[{"level":2,"title":"Import","slug":"import","link":"#import","children":[]},{"level":2,"title":"Emits: update:modelValue","slug":"emits-update-modelvalue","link":"#emits-update-modelvalue","children":[{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"Prop: color","slug":"prop-color","link":"#prop-color","children":[{"level":3,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":3,"title":"Result","slug":"result","link":"#result","children":[]},{"level":3,"title":"Typing for Downstream Component Instances","slug":"typing-for-downstream-component-instances","link":"#typing-for-downstream-component-instances","children":[]}]},{"level":2,"title":"Prop: debug","slug":"prop-debug","link":"#prop-debug","children":[{"level":3,"title":"Syntax","slug":"syntax-1","link":"#syntax-1","children":[]},{"level":3,"title":"Result","slug":"result-1","link":"#result-1","children":[]}]},{"level":2,"title":"Prop: palette","slug":"prop-palette","link":"#prop-palette","children":[{"level":3,"title":"Syntax","slug":"syntax-2","link":"#syntax-2","children":[]},{"level":3,"title":"Result","slug":"result-2","link":"#result-2","children":[]},{"level":3,"title":"Typing for Downstream Component Instances","slug":"typing-for-downstream-component-instances-1","link":"#typing-for-downstream-component-instances-1","children":[]}]},{"level":2,"title":"Prop: size","slug":"prop-size","link":"#prop-size","children":[{"level":3,"title":"Syntax","slug":"syntax-3","link":"#syntax-3","children":[]},{"level":3,"title":"Result","slug":"result-3","link":"#result-3","children":[]},{"level":3,"title":"Typing for Downstream Component Instances","slug":"typing-for-downstream-component-instances-2","link":"#typing-for-downstream-component-instances-2","children":[]}]},{"level":2,"title":"Slot: #default","slug":"slot-default","link":"#slot-default","children":[{"level":3,"title":"Syntax","slug":"syntax-4","link":"#syntax-4","children":[]},{"level":3,"title":"Result","slug":"result-4","link":"#result-4","children":[]}]}],"relativePath":"components/selects/vv-select.md","lastUpdated":1673045673000}'),vn={name:"components/selects/vv-select.md"},Rn=Object.assign(vn,{setup(a){return(l,u)=>(b(),v("div",null,[s("h1",x,[n(e(l.$frontmatter.title)+" ",1),z]),s("p",null,"The "+e(l.$frontmatter.title)+" provides a set of props and config module based settings to make a validation ready set of select elements for applications with an extremely DRY implementation of atomic classes.",1),k,s("p",null,[n("To import a "+e(l.$frontmatter.title)+" installed by the ",1),I,n(" or "),P,n(":")]),$,s("p",null,"Alternatively, you can install the raw library "+e(l.$frontmatter.title)+" with:",1),R,s("p",null,[n("The "+e(l.$frontmatter.title)+" emits a standard Vue key of ",1),N,n(" upon input event changes of the component's currently selected child option's value attribute.")]),s("div",j,[L,s("p",null,[n("This means when using the "+e(l.$frontmatter.title)+" downstream in an end application, you can safely use Vue's ",1),B,n(" binding to two-way bind a reactive value through your downstream component and into (and back from) the "+e(l.$frontmatter.title)+" instance.",1)])]),M,s("p",null,[n("Type: "),H,J,n(" Default: "),s("strong",null,[s("code",null,'"'+e(o(c).defaults.VvSelect.color)+'"',1)])]),s("p",null,[n("The "+e(l.$frontmatter.title)+" ",1),U,n(" prop sets the component instance color based both on the "),W,n(" prop and the "),Y,n(" prop value.")]),G,s("div",K,[t(o(r),{color:"default",class:"mb-2"},{default:p(()=>[Q,X,Z]),_:1}),t(o(r),{color:"error",class:"mb-2"},{default:p(()=>[ss,ns,ls]),_:1}),t(o(r),{color:"success",class:"mb-2"},{default:p(()=>[as,os,es]),_:1})]),ts,ps,rs,s("p",null,[n("Type: "),cs,is,n(" Default: "),s("strong",null,[s("code",null,e(o(c).defaults.VvSelect.debug),1)])]),s("p",null,[n("The "+e(l.$frontmatter.title)+" ",1),Ds,n(" prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through "),Fs,n(" prefixed HTML attributes.")]),ys,s("div",us,[t(o(r),{debug:!0},{default:p(()=>[ds,hs]),_:1})]),ms,s("p",null,[n("Type: "),Cs,_s,n(" Default: "),s("strong",null,[s("code",null,'"'+e(o(c).defaults.VvSelect.palette)+'"',1)])]),s("p",null,[n("The "+e(l.$frontmatter.title)+" ",1),bs,n(" prop sets the component instance palette based both on the "),vs,n(" prop and the "),gs,n(" prop value.")]),As,s("div",fs,[t(o(r),{palette:"underlined",color:"default",class:"mb-2",style:{"border-bottom":"2px"}},{default:p(()=>[Ss,Es,qs]),_:1}),t(o(r),{palette:"underlined",color:"error",class:"mb-2"},{default:p(()=>[Vs,Ts,ws]),_:1}),t(o(r),{palette:"underlined",color:"success",class:"mb-2"},{default:p(()=>[Os,xs,zs]),_:1})]),ks,Is,Ps,s("p",null,[n("Type: "),$s,Rs,n(" Default: "),s("strong",null,[s("code",null,'"'+e(o(c).defaults.VvSelect.size)+'"',1)])]),s("p",null,[n("The "+e(l.$frontmatter.title)+" ",1),Ns,n(" prop sets the component instance size-based classes which in the context of inputs typically involves padding and font size atomic classes.")]),js,s("div",Ls,[t(o(r),{size:"lg",class:"mb-2"},{default:p(()=>[Bs,Ms,Hs]),_:1})]),s("details",Js,[Us,s("div",Ws,[t(o(r),{size:"xs",class:"mb-2"},{default:p(()=>[Ys,Gs,Ks]),_:1}),t(o(r),{size:"sm",class:"mb-2"},{default:p(()=>[Qs,Xs,Zs]),_:1}),t(o(r),{size:"md",class:"mb-2"},{default:p(()=>[sn,nn,ln]),_:1}),t(o(r),{size:"lg",class:"mb-2"},{default:p(()=>[an,on,en]),_:1}),t(o(r),{size:"xl",class:"mb-2"},{default:p(()=>[tn,pn,rn]),_:1}),t(o(r),{size:"2xl",class:"mb-2"},{default:p(()=>[cn,Dn,Fn]),_:1})])]),yn,un,dn,s("p",null,[n("The "+e(l.$frontmatter.title)+" has a standard ",1),hn,n(" Vue slot to insert child elements/nodes into the component.")]),mn,s("div",Cn,[t(o(r),null,{default:p(()=>[_n,bn]),_:1})]),t(A)]))}});export{$n as __pageData,Rn as default};
