import{_ as T}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.921bb5b0.js";import{f as S,i as k,h as g,g as E,q as z,_ as P,o as m,c as A,n as D,a as s,b as n,t as e,F as I,s as L,d as l,w as $,u as a,e as y}from"./app.7595295d.js";import{V as F}from"./chunks/VvConfig.f99e8744.js";import{V as H}from"./chunks/VvEl.671dc0d6.js";import"./chunks/Anchors.bafcf40e.js";import"./chunks/Text.d88c79dd.js";import"./chunks/Transitions.262fdc37.js";import"./chunks/Buttons.b4b40e12.js";import"./chunks/Checkboxes.81ecc6c3.js";import"./chunks/ColorModes.4904e81c.js";import"./chunks/Inputs.a721047f.js";import"./chunks/Listboxes.3c490966.js";import"./chunks/Lists.c1360393.js";import"./chunks/Radios.230b40d2.js";import"./chunks/Selects.7f4e72d6.js";import"./chunks/Textareas.4dc66c13.js";const q=S({name:"VvRadio",emits:["update:modelValue"],props:{checked:{type:Boolean,default:F.defaults.VvRadio.checked},color:{type:String,default:F.defaults.VvRadio.color},darkRadioHex:{type:String,default:F.defaults.VvRadio.darkRadioHex},debug:{type:Boolean,default:F.defaults.VvRadio.debug},lightRadioHex:{type:String,default:F.defaults.VvRadio.lightRadioHex},palette:{type:String,default:F.defaults.VvRadio.palette},size:{type:String,default:F.defaults.VvRadio.size},value:{type:String,required:!0}},setup(p){const t=Object.keys(k("vv",{})).length>0?k("vv"):F,u=g(p.checked);let c=E(()=>{var b,v,f,_,x,R;let i=[];return(b=t==null?void 0:t.radios)!=null&&b.base()&&i.push(t.radios.base()),p.size!==""&&((f=(v=t==null?void 0:t.radios)==null?void 0:v.sizes)==null?void 0:f[p.size])&&i.push(t.radios.sizes[p.size]),(R=(x=(_=t==null?void 0:t.radios)==null?void 0:_.palettes)==null?void 0:x[p.palette])!=null&&R[p.color]&&i.push(t.radios.palettes[p.palette][p.color]),i.join(" ").trim()});function r(i){return['url("data:image/svg+xml,%3csvg viewBox=',"'0 0 16 16' fill='%23",i,"' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'",'/%3e%3c/svg%3e")'].join("")}let h=E(()=>r(p.darkRadioHex.replace(/#/g,""))),d=E(()=>r(p.lightRadioHex.replace(/#/g,"")));return{classes:c,darkRadioCssUrl:h,handleRadioChange:i=>{const b=i.target;return u.value=!1,b.checked===!0&&(u.value=!0),u.value},lightRadioCssUrl:d}}}),w=()=>{z(p=>({"010a6d38":p.lightRadioCssUrl,"03e3f704":p.darkRadioCssUrl}))},V=q.setup;q.setup=V?(p,t)=>(w(),V(p,t)):w;const N=q;const M=["value","checked","data-test","data-vv-radio-generated-classes","data-vv-radio-prop-checked","data-vv-radio-prop-color","data-vv-radio-prop-dark-radio-hex","data-vv-radio-prop-light-radio-hex","data-vv-radio-prop-palette","data-vv-radio-prop-size","data-vv-radio-prop-value"];function j(p,t,u,c,r,h){return m(),A("input",{type:"radio",class:D(p.classes),value:p.value,checked:p.checked,onChange:t[0]||(t[0]=d=>p.$emit("update:modelValue",p.handleRadioChange(d))),"data-test":p.darkRadioCssUrl+p.lightRadioCssUrl,"data-vv-radio-generated-classes":p.debug?p.classes:null,"data-vv-radio-prop-checked":p.debug?p.checked:null,"data-vv-radio-prop-color":p.debug?p.color:null,"data-vv-radio-prop-dark-radio-hex":p.debug?p.darkRadioHex:null,"data-vv-radio-prop-light-radio-hex":p.debug?p.lightRadioHex:null,"data-vv-radio-prop-palette":p.debug?p.palette:null,"data-vv-radio-prop-size":p.debug?p.size:null,"data-vv-radio-prop-value":p.debug?p.value:null},null,42,M)}const o=P(N,[["render",j],["__scopeId","data-v-2a825eae"]]),X={id:"frontmatter-title",tabindex:"-1"},B=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),U=s("h2",{id:"import",tabindex:"-1"},[n("Import "),s("a",{class:"header-anchor",href:"#import","aria-hidden":"true"},"#")],-1),O=s("a",{href:"/vueventus/guides/vueventus-cli.html"},"vueventus CLI",-1),G=s("a",{href:"/vueventus/guides/vv-update-cli.html"},"vv-update CLI",-1),J=y("",2),W=y("",5),Y=s("code",null,"update:modelValue",-1),K={class:"tip custom-block"},Q=s("p",{class:"custom-block-title"},"TIP",-1),Z=s("code",null,"v-model",-1),ss=y("",3),ns={class:"flex flex-col space-y-1"},as=["for"],ls=y("",3),os=s("strong",null,[s("code",null,"Boolean")],-1),ps=s("br",null,null,-1),es=s("code",null,"checked",-1),ts=s("code",null,"checked",-1),rs=s("code",null,"checked",-1),cs=s("code",null,"true",-1),Ds=y("",4),Fs={class:"flex flex-col space-y-1 pt-4"},ys={class:"flex items-center gap-2"},is=s("label",{for:"sunlight"},"Sunlight",-1),us={class:"flex items-center gap-2"},ds=s("label",{for:"moonlight"},"Moonlight",-1),Cs=s("h2",{id:"prop-color",tabindex:"-1"},[n("Prop: color "),s("a",{class:"header-anchor",href:"#prop-color","aria-hidden":"true"},"#")],-1),bs=s("strong",null,[s("code",null,"String")],-1),ms=s("br",null,null,-1),As=s("code",null,"color",-1),hs=s("code",null,"color",-1),vs=s("code",null,"palette",-1),Es=y("",3),gs=s("label",{for:"food-1"},"Pizza",-1),qs=s("label",{for:"food-2"},"Hamburger",-1),fs=s("label",{for:"drinks-1"},"Water",-1),_s=s("label",{for:"drinks-2"},"Juice",-1),xs=s("label",{for:"amPm-1"},"AM",-1),Rs=s("label",{for:"amPm-2"},"PM",-1),ks=s("label",{for:"dessert-1"},"Ice Cream",-1),ws=s("label",{for:"dessert-2"},"Fruit",-1),Vs=s("label",{for:"apps-1"},"Salad",-1),Ts=s("label",{for:"apps-2"},"Rolls",-1),Ss=s("h3",{id:"typing-for-downstream-component-instances",tabindex:"-1"},[n("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances","aria-hidden":"true"},"#")],-1),zs=s("p",null,"Coming Soon!",-1),Ps=s("h2",{id:"prop-darkradiohex",tabindex:"-1"},[n("Prop: darkRadioHex "),s("a",{class:"header-anchor",href:"#prop-darkradiohex","aria-hidden":"true"},"#")],-1),Is=s("strong",null,[s("code",null,"String")],-1),Ls=s("br",null,null,-1),$s=s("code",null,"darkRadioHex",-1),Hs=y("",3),Ns={class:"w-full flex gap-3 pt-4"},Ms=s("h2",{id:"prop-debug",tabindex:"-1"},[n("Prop: debug "),s("a",{class:"header-anchor",href:"#prop-debug","aria-hidden":"true"},"#")],-1),js=s("strong",null,[s("code",null,"Boolean")],-1),Xs=s("br",null,null,-1),Bs=s("code",null,"debug",-1),Us=s("code",null,"data-vv-radio-",-1),Os=y("",3),Gs={class:"w-full pt-4"},Js=s("h2",{id:"prop-lightradiohex",tabindex:"-1"},[n("Prop: lightRadioHex "),s("a",{class:"header-anchor",href:"#prop-lightradiohex","aria-hidden":"true"},"#")],-1),Ws=s("strong",null,[s("code",null,"String")],-1),Ys=s("br",null,null,-1),Ks=s("code",null,"lightRadioHex",-1),Qs=y("",3),Zs={class:"w-full flex gap-3 pt-4"},sn=s("h2",{id:"prop-palette",tabindex:"-1"},[n("Prop: palette "),s("a",{class:"header-anchor",href:"#prop-palette","aria-hidden":"true"},"#")],-1),nn=s("strong",null,[s("code",null,"String")],-1),an=s("br",null,null,-1),ln=s("code",null,"palette",-1),on=s("code",null,"color",-1),pn=s("code",null,"palette",-1),en=y("",3),tn={class:"w-full flex gap-3 pt-4"},rn=s("h3",{id:"typing-for-downstream-component-instances-1",tabindex:"-1"},[n("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances-1","aria-hidden":"true"},"#")],-1),cn=s("p",null,"Coming Soon!",-1),Dn=s("h2",{id:"prop-size",tabindex:"-1"},[n("Prop: size "),s("a",{class:"header-anchor",href:"#prop-size","aria-hidden":"true"},"#")],-1),Fn=s("strong",null,[s("code",null,"String")],-1),yn=s("br",null,null,-1),un=s("code",null,"size",-1),dn=y("",3),Cn={class:"w-full flex items-center gap-3 pt-4"},bn={class:"details custom-block"},mn=y("",4),An={class:"flex flex-col w-full space-y-2"},hn={class:"flex flex-col pb-4"},vn={class:"flex items-center gap-1.5"},En=s("label",{htmlFor:"vvRadio-xs-1",class:"text-2xs"},"XS Size 1",-1),gn={class:"flex items-center gap-1.5"},qn=s("label",{htmlFor:"vvRadio-xs-2",class:"text-2xs"},"XS Size 2",-1),fn={class:"flex flex-col space-y-0.5 pb-4"},_n={class:"flex items-center gap-1.5"},xn=s("label",{htmlFor:"vvRadio-sm-1",class:"text-xs"},"SM Size 1",-1),Rn={class:"flex items-center gap-1.5"},kn=s("label",{htmlFor:"vvRadio-sm-2",class:"text-xs"},"SM Size 2",-1),wn={class:"flex flex-col space-y-2 pb-4"},Vn={class:"flex items-center gap-2"},Tn=s("label",{htmlFor:"vvRadio-md-1",class:"text-md"},"MD Size 1",-1),Sn={class:"flex items-center gap-2"},zn=s("label",{htmlFor:"vvRadio-md-2",class:"text-md"},"MD Size 2",-1),Pn={class:"flex flex-col space-y-2 pb-4"},In={class:"flex items-center gap-2.5"},Ln=s("label",{htmlFor:"vvRadio-lg-1",class:"text-lg"},"LG Size 1",-1),$n={class:"flex items-center gap-2.5"},Hn=s("label",{htmlFor:"vvRadio-lg-2",class:"text-lg"},"LG Size 2",-1),Nn={class:"flex flex-col space-y-2.5 pb-4"},Mn={class:"flex items-center gap-3"},jn=s("label",{htmlFor:"vvRadio-xl-1",class:"text-xl"},"XL Size 1",-1),Xn={class:"flex items-center gap-3"},Bn=s("label",{htmlFor:"vvRadio-xl-2",class:"text-xl"},"XL Size 2",-1),Un={class:"flex flex-col space-y-2.5 pb-4"},On={class:"flex items-center gap-3"},Gn=s("label",{htmlFor:"vvRadio-2xl-1",class:"text-2xl"},"2XL Size 1",-1),Jn={class:"flex items-center gap-3"},Wn=s("label",{htmlFor:"vvRadio-2xl-2",class:"text-2xl"},"2XL Size 2",-1),Yn=s("h3",{id:"typing-for-downstream-component-instances-2",tabindex:"-1"},[n("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances-2","aria-hidden":"true"},"#")],-1),Kn=s("p",null,"Coming Soon!",-1),Qn=s("h2",{id:"slot-none",tabindex:"-1"},[n("Slot: None "),s("a",{class:"header-anchor",href:"#slot-none","aria-hidden":"true"},"#")],-1),Zn={class:"danger custom-block"},sa=s("p",{class:"custom-block-title"},"NO SLOT AVAILABLE",-1),na=s("code",null,"<input>",-1),Aa=JSON.parse('{"title":"VvRadio Component","description":"","frontmatter":{"title":"VvRadio Component"},"headers":[{"level":2,"title":"Import","slug":"import","link":"#import","children":[]},{"level":2,"title":"Emits: update:modelValue","slug":"emits-update-modelvalue","link":"#emits-update-modelvalue","children":[{"level":3,"title":"Example","slug":"example","link":"#example","children":[]},{"level":3,"title":"Result","slug":"result","link":"#result","children":[]}]},{"level":2,"title":"Prop: checked","slug":"prop-checked","link":"#prop-checked","children":[{"level":3,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":3,"title":"Result","slug":"result-1","link":"#result-1","children":[]}]},{"level":2,"title":"Prop: color","slug":"prop-color","link":"#prop-color","children":[{"level":3,"title":"Syntax","slug":"syntax-1","link":"#syntax-1","children":[]},{"level":3,"title":"Result","slug":"result-2","link":"#result-2","children":[]},{"level":3,"title":"Typing for Downstream Component Instances","slug":"typing-for-downstream-component-instances","link":"#typing-for-downstream-component-instances","children":[]}]},{"level":2,"title":"Prop: darkRadioHex","slug":"prop-darkradiohex","link":"#prop-darkradiohex","children":[{"level":3,"title":"Syntax","slug":"syntax-2","link":"#syntax-2","children":[]},{"level":3,"title":"Result","slug":"result-3","link":"#result-3","children":[]}]},{"level":2,"title":"Prop: debug","slug":"prop-debug","link":"#prop-debug","children":[{"level":3,"title":"Syntax","slug":"syntax-3","link":"#syntax-3","children":[]},{"level":3,"title":"Result","slug":"result-4","link":"#result-4","children":[]}]},{"level":2,"title":"Prop: lightRadioHex","slug":"prop-lightradiohex","link":"#prop-lightradiohex","children":[{"level":3,"title":"Syntax","slug":"syntax-4","link":"#syntax-4","children":[]},{"level":3,"title":"Result","slug":"result-5","link":"#result-5","children":[]}]},{"level":2,"title":"Prop: palette","slug":"prop-palette","link":"#prop-palette","children":[{"level":3,"title":"Syntax","slug":"syntax-5","link":"#syntax-5","children":[]},{"level":3,"title":"Result","slug":"result-6","link":"#result-6","children":[]},{"level":3,"title":"Typing for Downstream Component Instances","slug":"typing-for-downstream-component-instances-1","link":"#typing-for-downstream-component-instances-1","children":[]}]},{"level":2,"title":"Prop: size","slug":"prop-size","link":"#prop-size","children":[{"level":3,"title":"Syntax","slug":"syntax-6","link":"#syntax-6","children":[]},{"level":3,"title":"Result","slug":"result-7","link":"#result-7","children":[]},{"level":3,"title":"Typing for Downstream Component Instances","slug":"typing-for-downstream-component-instances-2","link":"#typing-for-downstream-component-instances-2","children":[]}]},{"level":2,"title":"Slot: None","slug":"slot-none","link":"#slot-none","children":[]}],"relativePath":"components/inputs/vv-radio.md","lastUpdated":1673045630000}'),aa={name:"components/inputs/vv-radio.md"},ha=Object.assign(aa,{setup(p){const t=g([{value:"dawn",label:"Dawn Light"},{value:"dusk",label:"Dusk Light"},{value:"moonlight",label:"Moonlight"},{value:"sunlight",label:"Sunlight"}]),u=g(t.value[0]),c={wrapper:"w-full flex flex-col gap-2 pb-4",row:"flex items-center gap-2"};return(r,h)=>(m(),A("div",null,[s("h1",X,[n(e(r.$frontmatter.title)+" ",1),B]),s("p",null,"The "+e(r.$frontmatter.title)+" provides a set of props and config module based settings to make a validation ready set of radio input elements for applications with an extremely DRY implementation of atomic classes.",1),U,s("p",null,[n("To import a "+e(r.$frontmatter.title)+" installed by the ",1),O,n(" or "),G,n(":")]),J,s("p",null,"Alternatively, you can install the raw library "+e(r.$frontmatter.title)+" with:",1),W,s("p",null,[n("The "+e(r.$frontmatter.title)+" emits a standard Vue key of ",1),Y,n(" upon the change event of the component's generated radio input's checked attribute.")]),s("div",K,[Q,s("p",null,[n("This means when using the "+e(r.$frontmatter.title)+" downstream in an end application, you can safely use Vue's ",1),Z,n(" binding to two-way bind a reactive value through your downstream component and into (and back from) the "+e(r.$frontmatter.title)+" instance.",1)])]),ss,s("div",ns,[(m(!0),A(I,null,L(t.value,(d,C)=>(m(),A("div",{class:"flex items-center gap-2",key:C},[l(a(o),{id:"lightType-"+C,name:"lightType",value:d.value,color:"primary","onUpdate:modelValue":i=>i===!0?u.value=d:null,checked:d===u.value},null,8,["id","value","onUpdate:modelValue","checked"]),s("label",{for:"lightType-"+C},e(d.label),9,as)]))),128)),l(a(H),{"text-color":"primary",class:"text-left font-bold pt-1"},{default:$(()=>[n(e(u.value.label),1)]),_:1})]),ls,s("p",null,[n("Type: "),os,ps,n(" Default: "),s("strong",null,[s("code",null,'"'+e(a(F).defaults.VvRadio.checked)+'"',1)])]),s("p",null,[n("The "+e(r.$frontmatter.title)+" ",1),es,n(" prop sets the component instance "),ts,n(" attribute. This means when the component is initialized with the "),rs,n(" prop being "),cs,n(", then the rendered radio will display in the fully checked state.")]),Ds,s("div",Fs,[s("div",ys,[l(a(o),{id:"sunlight",name:"lights",value:"sunlight",checked:!0}),is]),s("div",us,[l(a(o),{id:"moonlight",name:"lights",value:"moonlight",checked:!1}),ds])]),Cs,s("p",null,[n("Type: "),bs,ms,n(" Default: "),s("strong",null,[s("code",null,'"'+e(a(F).defaults.VvRadio.color)+'"',1)])]),s("p",null,[n("The "+e(r.$frontmatter.title)+" ",1),As,n(" prop sets the component instance color based both on the "),hs,n(" prop and the "),vs,n(" prop value.")]),Es,s("div",{class:D([c.wrapper,"pt-4"])},[s("div",{class:D(c.row)},[l(a(o),{color:"default",id:"food-1",name:"food",value:"pizza",checked:""}),gs],2),s("div",{class:D(c.row)},[l(a(o),{color:"default",id:"food-2",name:"food",value:"hamburger"}),qs],2)],2),s("div",{class:D(c.wrapper)},[s("div",{class:D(c.row)},[l(a(o),{color:"error",id:"drinks-1",name:"drinks",value:"water",checked:""}),fs],2),s("div",{class:D(c.row)},[l(a(o),{color:"error",id:"drinks-2",name:"drinks",value:"juice"}),_s],2)],2),s("div",{class:D(c.wrapper)},[s("div",{class:D(c.row)},[l(a(o),{color:"primary",id:"amPm-1",name:"amPm",value:"am",checked:""}),xs],2),s("div",{class:D(c.row)},[l(a(o),{color:"primary",id:"amPm-2",name:"amPm",value:"pm"}),Rs],2)],2),s("div",{class:D(c.wrapper)},[s("div",{class:D(c.row)},[l(a(o),{color:"secondary",id:"dessert-1",name:"dessert",value:"iceCream",checked:""}),ks],2),s("div",{class:D(c.row)},[l(a(o),{color:"secondary",id:"dessert-2",name:"dessert",value:"fruit"}),ws],2)],2),s("div",{class:D(c.wrapper)},[s("div",{class:D(c.row)},[l(a(o),{color:"success",id:"apps-1",name:"apps",value:"salad",checked:""}),Vs],2),s("div",{class:D(c.row)},[l(a(o),{color:"success",id:"apps-2",name:"apps",value:"rolls"}),Ts],2)],2),Ss,zs,Ps,s("p",null,[n("Type: "),Is,Ls,n(" Default: "),s("strong",null,[s("code",null,'"'+e(a(F).defaults.VvRadio.darkRadioHex)+'"',1)])]),s("p",null,[n("The "+e(r.$frontmatter.title)+" ",1),$s,n(" prop sets the component checked state's radio icon color in the dark color mode state.")]),Hs,s("div",Ns,[l(a(o),{"dark-radio-hex":"#00ffff","light-radio-hex":"#00ffff",name:"planets",value:"earth",checked:""}),l(a(o),{"dark-radio-hex":"#00ffff","light-radio-hex":"#00ffff",name:"planets",value:"mars"})]),Ms,s("p",null,[n("Type: "),js,Xs,n(" Default: "),s("strong",null,[s("code",null,e(a(F).defaults.VvRadio.debug),1)])]),s("p",null,[n("The "+e(r.$frontmatter.title)+" ",1),Bs,n(" prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through "),Us,n(" prefixed HTML attributes.")]),Os,s("div",Gs,[l(a(o),{debug:!0,value:"debugExample"})]),Js,s("p",null,[n("Type: "),Ws,Ys,n(" Default: "),s("strong",null,[s("code",null,'"'+e(a(F).defaults.VvRadio.lightRadioHex)+'"',1)])]),s("p",null,[n("The "+e(r.$frontmatter.title)+" ",1),Ks,n(" prop sets the component checked state's radio icon color in the light color mode state.")]),Qs,s("div",Zs,[l(a(o),{"dark-radio-hex":"#00ffff","light-radio-hex":"#00ffff",name:"weather",value:"rain",checked:""}),l(a(o),{"dark-radio-hex":"#00ffff","light-radio-hex":"#00ffff",name:"weather",value:"snow"})]),sn,s("p",null,[n("Type: "),nn,an,n(" Default: "),s("strong",null,[s("code",null,'"'+e(a(F).defaults.VvRadio.palette)+'"',1)])]),s("p",null,[n("The "+e(r.$frontmatter.title)+" ",1),ln,n(" prop sets the component instance palette based both on the "),on,n(" prop and the "),pn,n(" prop value.")]),en,s("div",tn,[l(a(o),{palette:"default",name:"colors",value:"gray",checked:""}),l(a(o),{palette:"default",name:"colors",value:"red",color:"error"}),l(a(o),{palette:"default",name:"colors",value:"violet",color:"primary"}),l(a(o),{palette:"default",name:"colors",value:"emerald",color:"secondary"}),l(a(o),{palette:"default",name:"colors",value:"green",color:"success"})]),rn,cn,Dn,s("p",null,[n("Type: "),Fn,yn,n(" Default: "),s("strong",null,[s("code",null,'"'+e(a(F).defaults.VvRadio.size)+'"',1)])]),s("p",null,[n("The "+e(r.$frontmatter.title)+" ",1),un,n(" prop sets the component instance size-based classes which in the context of radio inputs typically involves fixed width and height atomic classes.")]),dn,s("div",Cn,[l(a(o),{size:"xs",name:"sizes",value:"xs"}),l(a(o),{size:"sm",name:"sizes",value:"sm"}),l(a(o),{size:"md",name:"sizes",value:"md",checked:""}),l(a(o),{size:"lg",name:"sizes",value:"lg"}),l(a(o),{size:"xl",name:"sizes",value:"xl"}),l(a(o),{size:"2xl",name:"sizes",value:"2xl"})]),s("details",bn,[mn,s("div",An,[s("div",hn,[s("div",vn,[l(a(o),{id:"vvRadio-xs-1",name:"vvRadio-xs",value:"xs-1",color:"default",size:"xs",checked:!0}),En]),s("div",gn,[l(a(o),{id:"vvRadio-xs-2",name:"vvRadio-xs",value:"xs-2",color:"default",size:"xs",checked:!1}),qn])]),s("div",fn,[s("div",_n,[l(a(o),{id:"vvRadio-sm-1",name:"vvRadio-sm",value:"sm-1",color:"default",size:"sm",checked:!0}),xn]),s("div",Rn,[l(a(o),{id:"vvRadio-sm-2",name:"vvRadio-sm",value:"sm-2",color:"default",size:"sm",checked:!1}),kn])]),s("div",wn,[s("div",Vn,[l(a(o),{id:"vvRadio-md-1",name:"vvRadio-md",value:"md-1",color:"default",size:"md",checked:!0}),Tn]),s("div",Sn,[l(a(o),{id:"vvRadio-md-2",name:"vvRadio-md",value:"md-2",color:"default",size:"md",checked:!1}),zn])]),s("div",Pn,[s("div",In,[l(a(o),{id:"vvRadio-lg-1",name:"vvRadio-lg",value:"lg-1",color:"default",size:"lg",checked:!0}),Ln]),s("div",$n,[l(a(o),{id:"vvRadio-lg-2",name:"vvRadio-lg",value:"lg-2",color:"default",size:"lg",checked:!1}),Hn])]),s("div",Nn,[s("div",Mn,[l(a(o),{id:"vvRadio-xl-1",name:"vvRadio-xl",value:"xl-1",color:"default",size:"xl",checked:!0}),jn]),s("div",Xn,[l(a(o),{id:"vvRadio-xl-2",name:"vvRadio-xl",value:"xl-2",color:"default",size:"xl",checked:!1}),Bn])]),s("div",Un,[s("div",On,[l(a(o),{id:"vvRadio-2xl-1",name:"vvRadio-2xl",value:"2xl-1",color:"default",size:"2xl",checked:!0}),Gn]),s("div",Jn,[l(a(o),{id:"vvRadio-2xl-2",name:"vvRadio-2xl",value:"2xl-2",color:"default",size:"2xl",checked:!1}),Wn])])])]),Yn,Kn,Qn,s("div",Zn,[sa,s("p",null,[n("The "+e(r.$frontmatter.title)+" does not have Vue slot option, because an ",1),na,n(" element is a HTML Empty Element, which cannot have children or child nodes.")])]),l(T)]))}});export{Aa as __pageData,ha as default};
