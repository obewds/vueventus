import{_ as g}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.a987c1ae.js";import{V as r}from"./chunks/VvConfig.3c57a8a8.js";import{d as f,Q as _,g as S,_ as q,o as b,c as v,r as E,n as V,k as s,a as n,t as e,l,J as t,w as p,U as i}from"./chunks/framework.d06e35cd.js";import"./chunks/Anchors.8bdcb837.js";import"./chunks/Text.d88c79dd.js";import"./chunks/Transitions.1d316f13.js";import"./chunks/Buttons.03bca295.js";import"./chunks/Checkboxes.344e9626.js";import"./chunks/ColorModes.4904e81c.js";import"./chunks/Inputs.1b95f59c.js";import"./chunks/Listboxes.e439c03d.js";import"./chunks/Lists.c1360393.js";import"./chunks/Radios.4e71a451.js";import"./chunks/Selects.f19d72d8.js";import"./chunks/Textareas.9fe3679a.js";const T=f({name:"VvSelect",emits:["update:modelValue"],props:{color:{type:String,default:r.defaults.VvSelect.color},debug:{type:Boolean,default:r.defaults.VvSelect.debug},palette:{type:String,default:r.defaults.VvSelect.palette},size:{type:String,default:r.defaults.VvSelect.size},modelValue:{type:String,default:""}},setup(o){const a=Object.keys(_("vv",{})).length>0?_("vv"):r;return{classes:S(()=>{var y,F,d,m,h,C;let D=[];return(y=a==null?void 0:a.selects)!=null&&y.base()&&D.push(a.selects.base()),o.size!==""&&((d=(F=a==null?void 0:a.selects)==null?void 0:F.sizes)!=null&&d[o.size])&&D.push(String(a.selects.sizes[o.size])),(C=(h=(m=a==null?void 0:a.selects)==null?void 0:m.palettes)==null?void 0:h[o.palette])!=null&&C[o.color]&&D.push(String(a.selects.palettes[o.palette][o.color])),D.join(" ").trim()}),handleSelectChange:D=>D.target.value}}}),O=["value","data-vv-select-generated-classes","data-vv-select-prop-color","data-vv-select-prop-model-value","data-vv-select-prop-palette","data-vv-select-prop-size"];function w(o,a,u,A,D,y){return b(),v("select",{class:V(o.classes),value:o.modelValue,onChange:a[0]||(a[0]=F=>o.$emit("update:modelValue",o.handleSelectChange(F))),"data-vv-select-generated-classes":o.debug?o.classes:null,"data-vv-select-prop-color":o.debug?o.color:null,"data-vv-select-prop-model-value":o.debug?o.modelValue:null,"data-vv-select-prop-palette":o.debug?o.palette:null,"data-vv-select-prop-size":o.debug?o.size:null},[E(o.$slots,"default")],42,O)}const c=q(T,[["render",w]]),P={id:"frontmatter-title",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),z=s("h2",{id:"import",tabindex:"-1"},[n("Import "),s("a",{class:"header-anchor",href:"#import","aria-label":'Permalink to "Import"'},"​")],-1),x=s("a",{href:"/vueventus/guides/vueventus-cli.html"},"vueventus CLI",-1),I=s("a",{href:"/vueventus/guides/vv-update-cli.html"},"vv-update CLI",-1),$=i("",2),R=i("",5),N=s("code",null,"update:modelValue",-1),j={class:"tip custom-block"},L=s("p",{class:"custom-block-title"},"TIP",-1),B=s("code",null,"v-model",-1),J=i("",3),M=s("strong",null,[s("code",null,"String")],-1),U=s("br",null,null,-1),H=s("code",null,"color",-1),Q=s("code",null,"color",-1),W=s("code",null,"palette",-1),Y=i("",3),G={class:"w-full pt-4"},K=s("option",{value:""},"Select an Option",-1),X=s("option",{value:"one"},"Default Color Option 1",-1),Z=s("option",{value:"two"},"Default Color Option 2",-1),ss=s("option",{value:""},"Select an Option",-1),ns=s("option",{value:"one"},"Error Color Option 1",-1),as=s("option",{value:"two"},"Error Color Option 2",-1),os=s("option",{value:""},"Select an Option",-1),ls=s("option",{value:"one"},"Success Color Option 1",-1),es=s("option",{value:"two"},"Success Color Option 2",-1),ts=s("h3",{id:"typing-for-downstream-component-instances",tabindex:"-1"},[n("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances","aria-label":'Permalink to "Typing for Downstream Component Instances"'},"​")],-1),ps=s("p",null,"Coming Soon!",-1),cs=s("h2",{id:"prop-debug",tabindex:"-1"},[n("Prop: debug "),s("a",{class:"header-anchor",href:"#prop-debug","aria-label":'Permalink to "Prop: debug"'},"​")],-1),rs=s("strong",null,[s("code",null,"Boolean")],-1),is=s("br",null,null,-1),Ds=s("code",null,"debug",-1),Fs=s("code",null,"data-vv-select-",-1),ys=i("",3),us={class:"w-full pt-4"},ds=s("option",{value:""},"Select Option",-1),ms=s("option",{value:"one"},"Option 1",-1),hs=s("h2",{id:"prop-palette",tabindex:"-1"},[n("Prop: palette "),s("a",{class:"header-anchor",href:"#prop-palette","aria-label":'Permalink to "Prop: palette"'},"​")],-1),Cs=s("strong",null,[s("code",null,"String")],-1),_s=s("br",null,null,-1),bs=s("code",null,"palette",-1),vs=s("code",null,"color",-1),As=s("code",null,"palette",-1),gs=i("",3),fs={class:"w-full pt-4"},Ss=s("option",{value:""},"Select an Option",-1),qs=s("option",{value:"one"},"Default Color Option 1",-1),Es=s("option",{value:"two"},"Default Color Option 2",-1),Vs=s("option",{value:""},"Select an Option",-1),Ts=s("option",{value:"one"},"Error Color Option 1",-1),Os=s("option",{value:"two"},"Error Color Option 2",-1),ws=s("option",{value:""},"Select an Option",-1),Ps=s("option",{value:"one"},"Success Color Option 1",-1),ks=s("option",{value:"two"},"Success Color Option 2",-1),zs=s("h3",{id:"typing-for-downstream-component-instances-1",tabindex:"-1"},[n("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances-1","aria-label":'Permalink to "Typing for Downstream Component Instances"'},"​")],-1),xs=s("p",null,"Coming Soon!",-1),Is=s("h2",{id:"prop-size",tabindex:"-1"},[n("Prop: size "),s("a",{class:"header-anchor",href:"#prop-size","aria-label":'Permalink to "Prop: size"'},"​")],-1),$s=s("strong",null,[s("code",null,"String")],-1),Rs=s("br",null,null,-1),Ns=s("code",null,"size",-1),js=i("",3),Ls={class:"w-full pt-4"},Bs=s("option",{value:""},"Select an Option",-1),Js=s("option",{value:"one"},'"lg" Size Option 1',-1),Ms=s("option",{value:"one"},'"lg" Size Option 2',-1),Us={class:"details custom-block"},Hs=s("summary",null,"size prop input size examples",-1),Qs={class:"flex flex-wrap items-center gap-2 pt-4"},Ws=s("option",{value:""},"Select an Option",-1),Ys=s("option",{value:"one"},'"xs" Size Option 1',-1),Gs=s("option",{value:"one"},'"xs" Size Option 2',-1),Ks=s("option",{value:""},"Select an Option",-1),Xs=s("option",{value:"one"},'"sm" Size Option 1',-1),Zs=s("option",{value:"one"},'"sm" Size Option 2',-1),sn=s("option",{value:""},"Select an Option",-1),nn=s("option",{value:"one"},'"md" Size Option 1',-1),an=s("option",{value:"one"},'"md" Size Option 2',-1),on=s("option",{value:""},"Select an Option",-1),ln=s("option",{value:"one"},'"lg" Size Option 1',-1),en=s("option",{value:"one"},'"lg" Size Option 2',-1),tn=s("option",{value:""},"Select an Option",-1),pn=s("option",{value:"one"},'"xl" Size Option 1',-1),cn=s("option",{value:"one"},'"xl" Size Option 2',-1),rn=s("option",{value:""},"Select an Option",-1),Dn=s("option",{value:"one"},'"2xl" Size Option 1',-1),Fn=s("option",{value:"one"},'"2xl" Size Option 2',-1),yn=s("h3",{id:"typing-for-downstream-component-instances-2",tabindex:"-1"},[n("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances-2","aria-label":'Permalink to "Typing for Downstream Component Instances"'},"​")],-1),un=s("p",null,"Coming Soon!",-1),dn=s("h2",{id:"slot-default",tabindex:"-1"},[n("Slot: #default "),s("a",{class:"header-anchor",href:"#slot-default","aria-label":'Permalink to "Slot: #default"'},"​")],-1),mn=s("code",null,"#default",-1),hn=i("",3),Cn={class:"w-full pt-4"},_n=s("option",{value:""},"Select an Option",-1),bn=s("option",{value:"one"},"Slot Example Option 1",-1),$n=JSON.parse('{"title":"VvSelect Component","description":"","frontmatter":{"title":"VvSelect Component"},"headers":[],"relativePath":"components/selects/vv-select.md","filePath":"components/selects/vv-select.md","lastUpdated":1681865250000}'),vn={name:"components/selects/vv-select.md"},Rn=Object.assign(vn,{setup(o){return(a,u)=>(b(),v("div",null,[s("h1",P,[n(e(a.$frontmatter.title)+" ",1),k]),s("p",null,"The "+e(a.$frontmatter.title)+" provides a set of props and config module based settings to make a validation ready set of select elements for applications with an extremely DRY implementation of atomic classes.",1),z,s("p",null,[n("To import a "+e(a.$frontmatter.title)+" installed by the ",1),x,n(" or "),I,n(":")]),$,s("p",null,"Alternatively, you can install the raw library "+e(a.$frontmatter.title)+" with:",1),R,s("p",null,[n("The "+e(a.$frontmatter.title)+" emits a standard Vue key of ",1),N,n(" upon input event changes of the component's currently selected child option's value attribute.")]),s("div",j,[L,s("p",null,[n("This means when using the "+e(a.$frontmatter.title)+" downstream in an end application, you can safely use Vue's ",1),B,n(" binding to two-way bind a reactive value through your downstream component and into (and back from) the "+e(a.$frontmatter.title)+" instance.",1)])]),J,s("p",null,[n("Type: "),M,U,n(" Default: "),s("strong",null,[s("code",null,'"'+e(l(r).defaults.VvSelect.color)+'"',1)])]),s("p",null,[n("The "+e(a.$frontmatter.title)+" ",1),H,n(" prop sets the component instance color based both on the "),Q,n(" prop and the "),W,n(" prop value.")]),Y,s("div",G,[t(l(c),{color:"default",class:"mb-2"},{default:p(()=>[K,X,Z]),_:1}),t(l(c),{color:"error",class:"mb-2"},{default:p(()=>[ss,ns,as]),_:1}),t(l(c),{color:"success",class:"mb-2"},{default:p(()=>[os,ls,es]),_:1})]),ts,ps,cs,s("p",null,[n("Type: "),rs,is,n(" Default: "),s("strong",null,[s("code",null,e(l(r).defaults.VvSelect.debug),1)])]),s("p",null,[n("The "+e(a.$frontmatter.title)+" ",1),Ds,n(" prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through "),Fs,n(" prefixed HTML attributes.")]),ys,s("div",us,[t(l(c),{debug:!0},{default:p(()=>[ds,ms]),_:1})]),hs,s("p",null,[n("Type: "),Cs,_s,n(" Default: "),s("strong",null,[s("code",null,'"'+e(l(r).defaults.VvSelect.palette)+'"',1)])]),s("p",null,[n("The "+e(a.$frontmatter.title)+" ",1),bs,n(" prop sets the component instance palette based both on the "),vs,n(" prop and the "),As,n(" prop value.")]),gs,s("div",fs,[t(l(c),{palette:"underlined",color:"default",class:"mb-2",style:{"border-bottom":"2px"}},{default:p(()=>[Ss,qs,Es]),_:1}),t(l(c),{palette:"underlined",color:"error",class:"mb-2"},{default:p(()=>[Vs,Ts,Os]),_:1}),t(l(c),{palette:"underlined",color:"success",class:"mb-2"},{default:p(()=>[ws,Ps,ks]),_:1})]),zs,xs,Is,s("p",null,[n("Type: "),$s,Rs,n(" Default: "),s("strong",null,[s("code",null,'"'+e(l(r).defaults.VvSelect.size)+'"',1)])]),s("p",null,[n("The "+e(a.$frontmatter.title)+" ",1),Ns,n(" prop sets the component instance size-based classes which in the context of inputs typically involves padding and font size atomic classes.")]),js,s("div",Ls,[t(l(c),{size:"lg",class:"mb-2"},{default:p(()=>[Bs,Js,Ms]),_:1})]),s("details",Us,[Hs,s("div",Qs,[t(l(c),{size:"xs",class:"mb-2"},{default:p(()=>[Ws,Ys,Gs]),_:1}),t(l(c),{size:"sm",class:"mb-2"},{default:p(()=>[Ks,Xs,Zs]),_:1}),t(l(c),{size:"md",class:"mb-2"},{default:p(()=>[sn,nn,an]),_:1}),t(l(c),{size:"lg",class:"mb-2"},{default:p(()=>[on,ln,en]),_:1}),t(l(c),{size:"xl",class:"mb-2"},{default:p(()=>[tn,pn,cn]),_:1}),t(l(c),{size:"2xl",class:"mb-2"},{default:p(()=>[rn,Dn,Fn]),_:1})])]),yn,un,dn,s("p",null,[n("The "+e(a.$frontmatter.title)+" has a standard ",1),mn,n(" Vue slot to insert child elements/nodes into the component.")]),hn,s("div",Cn,[t(l(c),null,{default:p(()=>[_n,bn]),_:1})]),t(g)]))}});export{$n as __pageData,Rn as default};
