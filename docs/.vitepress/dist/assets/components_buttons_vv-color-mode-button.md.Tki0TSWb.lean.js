import{_ as E}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.Hzw28_zM.js";import{V as i}from"./chunks/VvConfig.2rkets_p.js";import{V as b,a as y}from"./chunks/VvButton.dVVyC2ik.js";import{d as _,h as v,g as u,j as f,_ as C,D as F,o as p,b as T,w,c,e as g,k as s,a as t,t as n,m as a,I as r,R as o}from"./chunks/framework.mpaTk55L.js";import"./chunks/Anchors.oRCStips.js";import"./chunks/Text.UOs-i8Ra.js";import"./chunks/Transitions._H0RGLfL.js";import"./chunks/Buttons.lorYpP73.js";import"./chunks/Checkboxes.UrkZcei7.js";import"./chunks/ColorModes.g-D_9X90.js";import"./chunks/Inputs.nTwAj66j.js";import"./chunks/Listboxes.5OjlJykU.js";import"./chunks/Lists.L4jdb2xy.js";import"./chunks/Radios.e-dvm4xV.js";import"./chunks/Selects.qf9pgigj.js";import"./chunks/Textareas.qvM0Xp3o.js";const x=["light","dark"],D=x,A=_({name:"VvColorModeButton",components:{VvButton:b},props:{color:{type:String,default:i.defaults.VvColorModeButton.color},debug:{type:Boolean,default:i.defaults.VvColorModeButton.debug},groundDark:{type:String,default:i.colorModes.dark.ground},groundDarkHex:{type:String,default:i.colorModes.dark.hex},groundLight:{type:String,default:i.colorModes.light.ground},groundLightHex:{type:String,default:i.colorModes.light.hex},mode:{type:String,default:i.defaults.VvColorModeButton.mode,validator:e=>D.includes(e)},palette:{type:String,default:i.defaults.VvColorModeButton.palette},size:{type:String,default:i.defaults.VvColorModeButton.size},textDark:{type:String,default:i.colorModes.dark.text},textLight:{type:String,default:i.colorModes.light.text},titleDark:{type:String,default:i.colorModes.dark.title},titleLight:{type:String,default:i.colorModes.light.title},type:{type:String,default:i.defaults.VvColorModeButton.type,validator:e=>y.includes(e)}},setup(e){const l=v(e.mode),d=u(()=>l.value==="dark"?"sun":"moon"),k=u(()=>l.value==="dark"?e.titleLight:e.titleDark);return f(()=>{typeof window<"u"&&document&&(document.documentElement.classList.add(e.groundLight,e.groundDark,e.textLight,e.textDark),document.body.classList.add(e.textLight,e.textDark),l.value==="light"?(document.documentElement.classList.remove("dark"),document.documentElement.style.backgroundColor=e.groundLightHex):l.value==="dark"&&(document.documentElement.classList.add("dark"),document.documentElement.style.backgroundColor=e.groundDarkHex))}),{mode:l,icon:d,title:k}},methods:{toggleColorMode(){typeof window<"u"&&document&&(this.mode==="light"?(this.mode="dark",localStorage.setItem("colorMode","dark"),document.documentElement.style.backgroundColor=this.groundDarkHex,document.documentElement.classList.add("dark")):this.mode==="dark"&&(this.mode="light",localStorage.setItem("colorMode","light"),document.documentElement.style.backgroundColor=this.groundLightHex,document.documentElement.classList.remove("dark")))}}}),B={key:0,class:"h-5 w-5",stroke:"currentColor",fill:"none","stroke-width":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},P=s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1),S=[P],V={key:1,class:"h-5 w-5",stroke:"currentColor",fill:"none","stroke-width":"2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},q=s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1),M=[q];function I(e,l,d,k,Xt,Zt){const m=F("VvButton");return p(),T(m,{onClick:l[0]||(l[0]=se=>e.toggleColorMode()),class:"rounded-full",color:e.color,fab:!0,palette:e.palette,size:e.size,title:e.title,type:e.type,"data-vv-color-mode-button-prop-color":e.debug?e.color:null,"data-vv-color-mode-button-prop-ground-dark":e.debug?e.groundDark:null,"data-vv-color-mode-button-prop-ground-dark-hex":e.debug?e.groundDarkHex:null,"data-vv-color-mode-button-prop-ground-light":e.debug?e.groundLight:null,"data-vv-color-mode-button-prop-ground-light-hex":e.debug?e.groundLightHex:null,"data-vv-color-mode-button-prop-mode":e.debug?e.mode:null,"data-vv-color-mode-button-prop-palette":e.debug?e.palette:null,"data-vv-color-mode-button-prop-size":e.debug?e.size:null,"data-vv-color-mode-button-prop-text-dark":e.debug?e.textDark:null,"data-vv-color-mode-button-prop-text-light":e.debug?e.textLight:null,"data-vv-color-mode-button-prop-title-dark":e.debug?e.titleDark:null,"data-vv-color-mode-button-prop-title-light":e.debug?e.titleLight:null,"data-vv-color-mode-button-prop-type":e.debug?e.type:null},{default:w(()=>[e.icon==="moon"?(p(),c("svg",B,S)):g("",!0),e.icon==="sun"?(p(),c("svg",V,M)):g("",!0)]),_:1},8,["color","palette","size","title","type","data-vv-color-mode-button-prop-color","data-vv-color-mode-button-prop-ground-dark","data-vv-color-mode-button-prop-ground-dark-hex","data-vv-color-mode-button-prop-ground-light","data-vv-color-mode-button-prop-ground-light-hex","data-vv-color-mode-button-prop-mode","data-vv-color-mode-button-prop-palette","data-vv-color-mode-button-prop-size","data-vv-color-mode-button-prop-text-dark","data-vv-color-mode-button-prop-text-light","data-vv-color-mode-button-prop-title-dark","data-vv-color-mode-button-prop-title-light","data-vv-color-mode-button-prop-type"])}const h=C(A,[["render",I]]),R={id:"frontmatter-title",tabindex:"-1"},N=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),L=s("code",null,"localStorage()",-1),$=s("h2",{id:"import",tabindex:"-1"},[t("Import "),s("a",{class:"header-anchor",href:"#import","aria-label":'Permalink to "Import"'},"​")],-1),z=s("a",{href:"/vueventus/guides/vueventus-cli.html"},"vueventus CLI",-1),H=s("a",{href:"/vueventus/guides/vv-update-cli.html"},"vv-update CLI",-1),W=o("",2),G=o("",4),Y=o("",3),j=o("",3),O=s("strong",null,[s("code",null,"String")],-1),U=s("br",null,null,-1),J=s("code",null,"color",-1),K=s("code",null,"color",-1),Q=s("code",null,"palette",-1),X=o("",3),Z={class:"w-full pt-4"},ss=o("",4),ts=s("strong",null,[s("code",null,"Boolean")],-1),es=s("br",null,null,-1),as=s("code",null,"debug",-1),is=s("code",null,"data-vv-color-mode-button-",-1),ns=o("",3),ls={class:"w-full pt-4"},os=s("h2",{id:"prop-grounddark",tabindex:"-1"},[t("Prop: groundDark "),s("a",{class:"header-anchor",href:"#prop-grounddark","aria-label":'Permalink to "Prop: groundDark"'},"​")],-1),rs=s("strong",null,[s("code",null,"String")],-1),hs=s("br",null,null,-1),ps=s("code",null,"groundDark",-1),ds=o("",3),cs={class:"w-full pt-4"},ks=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,[t("You may have to click this component a couple of times as VitePress's awesome template (used to make these docs) has it's own dark/light mode functionality and they both kinda work together because they both add/remove a "),s("code",null,".dark"),t(" class from the app!")]),s("p",null,"That said, if you click these example elements a few times, then they will take over the page from VitePress!")],-1),us=s("h2",{id:"prop-grounddarkhex",tabindex:"-1"},[t("Prop: groundDarkHex "),s("a",{class:"header-anchor",href:"#prop-grounddarkhex","aria-label":'Permalink to "Prop: groundDarkHex"'},"​")],-1),gs=s("strong",null,[s("code",null,"String")],-1),ms=s("br",null,null,-1),Es=s("code",null,"groundDarkHex",-1),bs=o("",3),ys={class:"w-full pt-4"},_s=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,[t("You may have to click this component a couple of times as VitePress's awesome template (used to make these docs) has it's own dark/light mode functionality and they both kinda work together because they both add/remove a "),s("code",null,".dark"),t(" class from the app!")]),s("p",null,"That said, if you click these example elements a few times, then they will take over the page from VitePress!")],-1),vs=s("h2",{id:"prop-groundlight",tabindex:"-1"},[t("Prop: groundLight "),s("a",{class:"header-anchor",href:"#prop-groundlight","aria-label":'Permalink to "Prop: groundLight"'},"​")],-1),fs=s("strong",null,[s("code",null,"String")],-1),Cs=s("br",null,null,-1),Fs=s("code",null,"groundLight",-1),Ts=o("",3),ws={class:"w-full pt-4"},xs=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,[t("You may have to click this component a couple of times as VitePress's awesome template (used to make these docs) has it's own dark/light mode functionality and they both kinda work together because they both add/remove a "),s("code",null,".dark"),t(" class from the app!")]),s("p",null,"That said, if you click these example elements a few times, then they will take over the page from VitePress!")],-1),Ds=s("h2",{id:"prop-groundlighthex",tabindex:"-1"},[t("Prop: groundLightHex "),s("a",{class:"header-anchor",href:"#prop-groundlighthex","aria-label":'Permalink to "Prop: groundLightHex"'},"​")],-1),As=s("strong",null,[s("code",null,"String")],-1),Bs=s("br",null,null,-1),Ps=s("code",null,"groundLightHex",-1),Ss=o("",3),Vs={class:"w-full pt-4"},qs=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,[t("You may have to click this component a couple of times as VitePress's awesome template (used to make these docs) has it's own dark/light mode functionality and they both kinda work together because they both add/remove a "),s("code",null,".dark"),t(" class from the app!")]),s("p",null,"That said, if you click these example elements a few times, then they will take over the page from VitePress!")],-1),Ms=s("h2",{id:"prop-mode",tabindex:"-1"},[t("Prop: mode "),s("a",{class:"header-anchor",href:"#prop-mode","aria-label":'Permalink to "Prop: mode"'},"​")],-1),Is=s("strong",null,[s("code",null,"String")],-1),Rs=s("br",null,null,-1),Ns=s("a",{href:"/vueventus/components/prop-validators.html#validcolormodes"},"ValidColorModes Module",-1),Ls=s("br",null,null,-1),$s=s("code",null,"type",-1),zs=s("code",null,"type",-1),Hs=s("a",{href:"/vueventus/components/prop-validators.html#validcolormodes"},"ValidColorModes Module",-1),Ws=o("",3),Gs={class:"w-full pt-4"},Ys=o("",4),js=s("strong",null,[s("code",null,"String")],-1),Os=s("br",null,null,-1),Us=s("code",null,"palette",-1),Js=s("code",null,"palette",-1),Ks=s("code",null,"color",-1),Qs=o("",3),Xs={class:"w-full pt-4"},Zs=o("",4),st=s("strong",null,[s("code",null,"String")],-1),tt=s("br",null,null,-1),et=s("code",null,"size",-1),at=o("",3),it={class:"w-full pt-4"},nt=o("",4),lt=s("strong",null,[s("code",null,"String")],-1),ot=s("br",null,null,-1),rt=s("code",null,"textDark",-1),ht=o("",3),pt={class:"w-full pt-4"},dt=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,[t("You may have to click this component a couple of times as VitePress's awesome template (used to make these docs) has it's own dark/light mode functionality and they both kinda work together because they both add/remove a "),s("code",null,".dark"),t(" class from the app!")]),s("p",null,"That said, if you click these example elements a few times, then they will take over the page from VitePress!")],-1),ct=s("h2",{id:"prop-textlight",tabindex:"-1"},[t("Prop: textLight "),s("a",{class:"header-anchor",href:"#prop-textlight","aria-label":'Permalink to "Prop: textLight"'},"​")],-1),kt=s("strong",null,[s("code",null,"String")],-1),ut=s("br",null,null,-1),gt=s("code",null,"textLight",-1),mt=o("",3),Et={class:"w-full pt-4"},bt=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,[t("You may have to click this component a couple of times as VitePress's awesome template (used to make these docs) has it's own dark/light mode functionality and they both kinda work together because they both add/remove a "),s("code",null,".dark"),t(" class from the app!")]),s("p",null,"That said, if you click these example elements a few times, then they will take over the page from VitePress!")],-1),yt=s("h2",{id:"prop-titledark",tabindex:"-1"},[t("Prop: titleDark "),s("a",{class:"header-anchor",href:"#prop-titledark","aria-label":'Permalink to "Prop: titleDark"'},"​")],-1),_t=s("strong",null,[s("code",null,"String")],-1),vt=s("br",null,null,-1),ft=s("code",null,"titleDark",-1),Ct=o("",4),Ft={class:"w-full pt-4"},Tt=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,[t("You may have to click this component a couple of times as VitePress's awesome template (used to make these docs) has it's own dark/light mode functionality and they both kinda work together because they both add/remove a "),s("code",null,".dark"),t(" class from the app!")]),s("p",null,"That said, if you click these example elements a few times, then they will take over the page from VitePress!")],-1),wt=s("h2",{id:"prop-titlelight",tabindex:"-1"},[t("Prop: titleLight "),s("a",{class:"header-anchor",href:"#prop-titlelight","aria-label":'Permalink to "Prop: titleLight"'},"​")],-1),xt=s("strong",null,[s("code",null,"String")],-1),Dt=s("br",null,null,-1),At=s("code",null,"titleLight",-1),Bt=o("",4),Pt={class:"w-full pt-4"},St=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,[t("You may have to click this component a couple of times as VitePress's awesome template (used to make these docs) has it's own dark/light mode functionality and they both kinda work together because they both add/remove a "),s("code",null,".dark"),t(" class from the app!")]),s("p",null,"That said, if you click these example elements a few times, then they will take over the page from VitePress!")],-1),Vt=s("h2",{id:"prop-type",tabindex:"-1"},[t("Prop: type "),s("a",{class:"header-anchor",href:"#prop-type","aria-label":'Permalink to "Prop: type"'},"​")],-1),qt=s("strong",null,[s("code",null,"String")],-1),Mt=s("br",null,null,-1),It=s("a",{href:"/vueventus/components/prop-validators.html#validbuttontypes"},"ValidButtonTypes Module",-1),Rt=s("br",null,null,-1),Nt=s("code",null,"type",-1),Lt=s("code",null,"type",-1),$t=s("a",{href:"/vueventus/components/prop-validators.html#validbuttontypes"},"ValidButtonTypes Module",-1),zt=o("",3),Ht={class:"w-full pt-4"},Wt=s("h3",{id:"typing-for-downstream-component-instances-4",tabindex:"-1"},[t("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances-4","aria-label":'Permalink to "Typing for Downstream Component Instances"'},"​")],-1),Gt=s("p",null,"Coming Soon!",-1),Yt=s("h2",{id:"slot-none",tabindex:"-1"},[t("Slot: None "),s("a",{class:"header-anchor",href:"#slot-none","aria-label":'Permalink to "Slot: None"'},"​")],-1),jt={class:"danger custom-block"},Ot=s("p",{class:"custom-block-title"},"NO SLOT AVAILABLE",-1),Ut=s("a",{href:"https://heroicons.com/",target:"_blank",rel:"noreferrer"},"heroicons",-1),Jt=s("code",null,"<button>",-1),Kt=s("code",null,"title",-1),Ee=JSON.parse('{"title":"VvColorModeButton Component","description":"","frontmatter":{"title":"VvColorModeButton Component"},"headers":[],"relativePath":"components/buttons/vv-color-mode-button.md","filePath":"components/buttons/vv-color-mode-button.md","lastUpdated":1681865250000}'),Qt={name:"components/buttons/vv-color-mode-button.md"},be=Object.assign(Qt,{setup(e){return(l,d)=>(p(),c("div",null,[s("h1",R,[t(n(l.$frontmatter.title)+" ",1),N]),s("p",null,[t("The "+n(l.$frontmatter.title)+" provides a ",1),L,t(" based solution to quickly implement and manage a user's dark or light color mode setting (with optional unnoticeable faux-persistence) for a VueVentus powered application.")]),$,s("p",null,[t("To import a "+n(l.$frontmatter.title)+" installed by the ",1),z,t(" or "),H,t(":")]),W,s("p",null,"Alternatively, you can install the raw library "+n(l.$frontmatter.title)+" with:",1),G,s("p",null,"Manually installing the "+n(l.$frontmatter.title)+" requires a little bit of extra work due to the nature of Color Modes and JavaScript applications in browser contexts.",1),Y,s("p",null,"Additionally and for completeness when installing of the "+n(l.$frontmatter.title)+", after adding the script above to a code base there's still one more important step to do.",1),j,s("p",null,[t("Type: "),O,U,t(" Default: "),s("strong",null,[s("code",null,'"'+n(a(i).defaults.VvColorModeButton.color)+'"',1)])]),s("p",null,[t("The "+n(l.$frontmatter.title)+" ",1),J,t(" prop sets the component instance color based both on the "),K,t(" prop and the "),Q,t(" prop value together.")]),X,s("div",Z,[r(a(h),{color:a(i).defaults.VvColorModeButton.color,class:"border-solid"},null,8,["color"])]),ss,s("p",null,[t("Type: "),ts,es,t(" Default: "),s("strong",null,[s("code",null,n(a(i).defaults.VvColorModeButton.debug),1)])]),s("p",null,[t("The "+n(l.$frontmatter.title)+" ",1),as,t(" prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through "),is,t(" prefixed HTML attributes.")]),ns,s("div",ls,[r(a(h),{debug:!0})]),os,s("p",null,[t("Type: "),rs,hs,t(" Default: "),s("strong",null,[s("code",null,'"'+n(a(i).colorModes.dark.ground)+'"',1)])]),s("p",null,[t("The "+n(l.$frontmatter.title)+" ",1),ps,t(" prop sets the component instance class(es) for the background color of the application when in the dark color mode state.")]),ds,s("div",cs,[r(a(h),{"ground-dark":a(i).colorModes.dark.ground,class:"border-solid"},null,8,["ground-dark"])]),ks,us,s("p",null,[t("Type: "),gs,ms,t(" Default: "),s("strong",null,[s("code",null,'"'+n(a(i).colorModes.dark.hex)+'"',1)])]),s("p",null,[t("The "+n(l.$frontmatter.title)+" ",1),Es,t(" prop sets the component instance color code for the background color of the application when in the dark color mode state.")]),bs,s("div",ys,[r(a(h),{"ground-dark-hex":a(i).colorModes.dark.hex,class:"border-solid"},null,8,["ground-dark-hex"])]),_s,vs,s("p",null,[t("Type: "),fs,Cs,t(" Default: "),s("strong",null,[s("code",null,'"'+n(a(i).colorModes.light.ground)+'"',1)])]),s("p",null,[t("The "+n(l.$frontmatter.title)+" ",1),Fs,t(" prop sets the component instance class(es) for the background color of the application when in the light color mode state.")]),Ts,s("div",ws,[r(a(h),{"ground-light":a(i).colorModes.light.ground,class:"border-solid"},null,8,["ground-light"])]),xs,Ds,s("p",null,[t("Type: "),As,Bs,t(" Default: "),s("strong",null,[s("code",null,'"'+n(a(i).colorModes.light.hex)+'"',1)])]),s("p",null,[t("The "+n(l.$frontmatter.title)+" ",1),Ps,t(" prop sets the component instance color code for the background color of the application when in the light color mode state.")]),Ss,s("div",Vs,[r(a(h),{"ground-light-hex":a(i).colorModes.light.hex,class:"border-solid"},null,8,["ground-light-hex"])]),qs,Ms,s("p",null,[t("Type: "),Is,Rs,t(" Valid Values: "),Ns,Ls,t(" Default: "),s("strong",null,[s("code",null,'"'+n(a(i).defaults.VvColorModeButton.mode)+'"',1)])]),s("p",null,[t("The "+n(l.$frontmatter.title)+" ",1),$s,t(" prop sets the button HTML "),zs,t(" attribute to a value that should be present in the "),Hs,t(" to be a valid value for this component.")]),Ws,s("div",Gs,[r(a(h),{mode:a(i).defaults.VvColorModeButton.mode,class:"border-solid"},null,8,["mode"])]),Ys,s("p",null,[t("Type: "),js,Os,t(" Default: "),s("strong",null,[s("code",null,'"'+n(a(i).defaults.VvColorModeButton.palette)+'"',1)])]),s("p",null,[t("The "+n(l.$frontmatter.title)+" ",1),Us,t(" prop sets the component instance color based both on the "),Js,t(" prop and the "),Ks,t(" prop values together.")]),Qs,s("div",Xs,[r(a(h),{palette:a(i).defaults.VvColorModeButton.palette,class:"border-solid"},null,8,["palette"])]),Zs,s("p",null,[t("Type: "),st,tt,t(" Default: "),s("strong",null,[s("code",null,'"'+n(a(i).defaults.VvColorModeButton.size)+'"',1)])]),s("p",null,[t("The "+n(l.$frontmatter.title)+" ",1),et,t(" prop sets the component instance size-based classes which in the context of buttons typically involves padding and font size atomic classes.")]),at,s("div",it,[r(a(h),{size:a(i).defaults.VvColorModeButton.size,class:"border-solid"},null,8,["size"])]),nt,s("p",null,[t("Type: "),lt,ot,t(" Default: "),s("strong",null,[s("code",null,'"'+n(a(i).colorModes.dark.text)+'"',1)])]),s("p",null,[t("The "+n(l.$frontmatter.title)+" ",1),rt,t(" prop sets the component instance class(es) for the text color of the application when in the dark color mode state.")]),ht,s("div",pt,[r(a(h),{"text-dark":a(i).colorModes.dark.text,class:"border-solid"},null,8,["text-dark"])]),dt,ct,s("p",null,[t("Type: "),kt,ut,t(" Default: "),s("strong",null,[s("code",null,'"'+n(a(i).colorModes.light.text)+'"',1)])]),s("p",null,[t("The "+n(l.$frontmatter.title)+" ",1),gt,t(" prop sets the component instance class(es) for the text color of the application when in the light color mode state.")]),mt,s("div",Et,[r(a(h),{"text-light":a(i).colorModes.light.text,class:"border-solid"},null,8,["text-light"])]),bt,yt,s("p",null,[t("Type: "),_t,vt,t(" Default: "),s("strong",null,[s("code",null,'"'+n(a(i).colorModes.dark.title)+'"',1)])]),s("p",null,[t("The "+n(l.$frontmatter.title)+" ",1),ft,t(" prop sets the component instance title attribute string of the component when the app is currently in the dark color mode state.")]),Ct,s("div",Ft,[r(a(h),{"title-dark":"Custom "+a(i).colorModes.dark.title,class:"border-solid"},null,8,["title-dark"])]),Tt,wt,s("p",null,[t("Type: "),xt,Dt,t(" Default: "),s("strong",null,[s("code",null,'"'+n(a(i).colorModes.light.title)+'"',1)])]),s("p",null,[t("The "+n(l.$frontmatter.title)+" ",1),At,t(" prop sets the component instance title attribute string of the component when the app is currently in the light color mode state.")]),Bt,s("div",Pt,[r(a(h),{"title-light":"Custom "+a(i).colorModes.light.title,class:"border-solid"},null,8,["title-light"])]),St,Vt,s("p",null,[t("Type: "),qt,Mt,t(" Valid Values: "),It,Rt,t(" Default: "),s("strong",null,[s("code",null,'"'+n(a(i).defaults.VvColorModeButton.type)+'"',1)])]),s("p",null,[t("The "+n(l.$frontmatter.title)+" ",1),Nt,t(" prop sets the button HTML "),Lt,t(" attribute to a value that should be present in the "),$t,t(" to be a valid value for this component.")]),zt,s("div",Ht,[r(a(h),{type:"submit"})]),Wt,Gt,Yt,s("div",jt,[Ot,s("p",null,[t("The "+n(l.$frontmatter.title)+" does not have Vue slot option, because the component uses two ",1),Ut,t(" and is intended to output an equal in height and width "),Jt,t(" element that toggles between two icons and leverages HTML "),Kt,t(" attributes to compensate for the use of non-text iconography.")])]),r(E)]))}});export{Ee as __pageData,be as default};