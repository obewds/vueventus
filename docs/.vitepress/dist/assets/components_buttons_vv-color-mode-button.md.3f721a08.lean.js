import{_ as F}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.59c6db63.js";import{V as n}from"./chunks/VvConfig.87e4547d.js";import{V as b,a as g}from"./chunks/VvButton.95d6170b.js";import{d as _,f as C,e as m,h as v,_ as f,B as k,o as i,y as A,z as T,c as u,A as y,x as s,a as e,t,b as o,D as r,N as p}from"./chunks/framework.bb38f269.js";import"./chunks/Anchors.8bdcb837.js";import"./chunks/Text.d88c79dd.js";import"./chunks/Transitions.1d316f13.js";import"./chunks/Buttons.03bca295.js";import"./chunks/Checkboxes.344e9626.js";import"./chunks/ColorModes.4904e81c.js";import"./chunks/Inputs.1b95f59c.js";import"./chunks/Listboxes.e439c03d.js";import"./chunks/Lists.c1360393.js";import"./chunks/Radios.4e71a451.js";import"./chunks/Selects.f19d72d8.js";import"./chunks/Textareas.9fe3679a.js";const w=["light","dark"],x=w,P=_({name:"VvColorModeButton",components:{VvButton:b},props:{color:{type:String,default:n.defaults.VvColorModeButton.color},debug:{type:Boolean,default:n.defaults.VvColorModeButton.debug},groundDark:{type:String,default:n.colorModes.dark.ground},groundDarkHex:{type:String,default:n.colorModes.dark.hex},groundLight:{type:String,default:n.colorModes.light.ground},groundLightHex:{type:String,default:n.colorModes.light.hex},mode:{type:String,default:n.defaults.VvColorModeButton.mode,validator:a=>x.includes(a)},palette:{type:String,default:n.defaults.VvColorModeButton.palette},size:{type:String,default:n.defaults.VvColorModeButton.size},textDark:{type:String,default:n.colorModes.dark.text},textLight:{type:String,default:n.colorModes.light.text},titleDark:{type:String,default:n.colorModes.dark.title},titleLight:{type:String,default:n.colorModes.light.title},type:{type:String,default:n.defaults.VvColorModeButton.type,validator:a=>g.includes(a)}},setup(a){const l=C(a.mode),d=m(()=>l.value==="dark"?"sun":"moon"),h=m(()=>l.value==="dark"?a.titleLight:a.titleDark);return v(()=>{typeof window<"u"&&document&&(document.documentElement.classList.add(a.groundLight,a.groundDark,a.textLight,a.textDark),document.body.classList.add(a.textLight,a.textDark),l.value==="light"?(document.documentElement.classList.remove("dark"),document.documentElement.style.backgroundColor=a.groundLightHex):l.value==="dark"&&(document.documentElement.classList.add("dark"),document.documentElement.style.backgroundColor=a.groundDarkHex))}),{mode:l,icon:d,title:h}},methods:{toggleColorMode(){typeof window<"u"&&document&&(this.mode==="light"?(this.mode="dark",localStorage.setItem("colorMode","dark"),document.documentElement.style.backgroundColor=this.groundDarkHex,document.documentElement.classList.add("dark")):this.mode==="dark"&&(this.mode="light",localStorage.setItem("colorMode","light"),document.documentElement.style.backgroundColor=this.groundLightHex,document.documentElement.classList.remove("dark")))}}}),S={key:0,class:"h-5 w-5",stroke:"currentColor",fill:"none","stroke-width":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},V=s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1),q=[V],E={key:1,class:"h-5 w-5",stroke:"currentColor",fill:"none","stroke-width":"2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},M=s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1),I=[M];function R(a,l,d,h,Xe,Ze){const D=k("VvButton");return i(),A(D,{onClick:l[0]||(l[0]=sa=>a.toggleColorMode()),class:"rounded-full",color:a.color,fab:!0,palette:a.palette,size:a.size,title:a.title,type:a.type,"data-vv-color-mode-button-prop-color":a.debug?a.color:null,"data-vv-color-mode-button-prop-ground-dark":a.debug?a.groundDark:null,"data-vv-color-mode-button-prop-ground-dark-hex":a.debug?a.groundDarkHex:null,"data-vv-color-mode-button-prop-ground-light":a.debug?a.groundLight:null,"data-vv-color-mode-button-prop-ground-light-hex":a.debug?a.groundLightHex:null,"data-vv-color-mode-button-prop-mode":a.debug?a.mode:null,"data-vv-color-mode-button-prop-palette":a.debug?a.palette:null,"data-vv-color-mode-button-prop-size":a.debug?a.size:null,"data-vv-color-mode-button-prop-text-dark":a.debug?a.textDark:null,"data-vv-color-mode-button-prop-text-light":a.debug?a.textLight:null,"data-vv-color-mode-button-prop-title-dark":a.debug?a.titleDark:null,"data-vv-color-mode-button-prop-title-light":a.debug?a.titleLight:null,"data-vv-color-mode-button-prop-type":a.debug?a.type:null},{default:T(()=>[a.icon==="moon"?(i(),u("svg",S,q)):y("",!0),a.icon==="sun"?(i(),u("svg",E,I)):y("",!0)]),_:1},8,["color","palette","size","title","type","data-vv-color-mode-button-prop-color","data-vv-color-mode-button-prop-ground-dark","data-vv-color-mode-button-prop-ground-dark-hex","data-vv-color-mode-button-prop-ground-light","data-vv-color-mode-button-prop-ground-light-hex","data-vv-color-mode-button-prop-mode","data-vv-color-mode-button-prop-palette","data-vv-color-mode-button-prop-size","data-vv-color-mode-button-prop-text-dark","data-vv-color-mode-button-prop-text-light","data-vv-color-mode-button-prop-title-dark","data-vv-color-mode-button-prop-title-light","data-vv-color-mode-button-prop-type"])}const c=f(P,[["render",R]]),B={id:"frontmatter-title",tabindex:"-1"},N=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),L=s("code",null,"localStorage()",-1),$=s("h2",{id:"import",tabindex:"-1"},[e("Import "),s("a",{class:"header-anchor",href:"#import","aria-label":'Permalink to "Import"'},"​")],-1),z=s("a",{href:"/vueventus/guides/vueventus-cli.html"},"vueventus CLI",-1),H=s("a",{href:"/vueventus/guides/vv-update-cli.html"},"vv-update CLI",-1),W=p("",2),G=p("",4),Y=p("",3),j=p("",3),O=s("strong",null,[s("code",null,"String")],-1),U=s("br",null,null,-1),J=s("code",null,"color",-1),K=s("code",null,"color",-1),Q=s("code",null,"palette",-1),X=p("",3),Z={class:"w-full pt-4"},ss=p("",4),es=s("strong",null,[s("code",null,"Boolean")],-1),as=s("br",null,null,-1),os=s("code",null,"debug",-1),ns=s("code",null,"data-vv-color-mode-button-",-1),ts=p("",3),ls={class:"w-full pt-4"},ps=s("h2",{id:"prop-grounddark",tabindex:"-1"},[e("Prop: groundDark "),s("a",{class:"header-anchor",href:"#prop-grounddark","aria-label":'Permalink to "Prop: groundDark"'},"​")],-1),rs=s("strong",null,[s("code",null,"String")],-1),cs=s("br",null,null,-1),is=s("code",null,"groundDark",-1),ds=p("",3),us={class:"w-full pt-4"},hs=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,[e("You may have to click this component a couple of times as VitePress's awesome template (used to make these docs) has it's own dark/light mode functionality and they both kinda work together because they both add/remove a "),s("code",null,".dark"),e(" class from the app!")]),s("p",null,"That said, if you click these example elements a few times, then they will take over the page from VitePress!")],-1),ms=s("h2",{id:"prop-grounddarkhex",tabindex:"-1"},[e("Prop: groundDarkHex "),s("a",{class:"header-anchor",href:"#prop-grounddarkhex","aria-label":'Permalink to "Prop: groundDarkHex"'},"​")],-1),ys=s("strong",null,[s("code",null,"String")],-1),Ds=s("br",null,null,-1),Fs=s("code",null,"groundDarkHex",-1),bs=p("",3),gs={class:"w-full pt-4"},_s=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,[e("You may have to click this component a couple of times as VitePress's awesome template (used to make these docs) has it's own dark/light mode functionality and they both kinda work together because they both add/remove a "),s("code",null,".dark"),e(" class from the app!")]),s("p",null,"That said, if you click these example elements a few times, then they will take over the page from VitePress!")],-1),Cs=s("h2",{id:"prop-groundlight",tabindex:"-1"},[e("Prop: groundLight "),s("a",{class:"header-anchor",href:"#prop-groundlight","aria-label":'Permalink to "Prop: groundLight"'},"​")],-1),vs=s("strong",null,[s("code",null,"String")],-1),fs=s("br",null,null,-1),ks=s("code",null,"groundLight",-1),As=p("",3),Ts={class:"w-full pt-4"},ws=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,[e("You may have to click this component a couple of times as VitePress's awesome template (used to make these docs) has it's own dark/light mode functionality and they both kinda work together because they both add/remove a "),s("code",null,".dark"),e(" class from the app!")]),s("p",null,"That said, if you click these example elements a few times, then they will take over the page from VitePress!")],-1),xs=s("h2",{id:"prop-groundlighthex",tabindex:"-1"},[e("Prop: groundLightHex "),s("a",{class:"header-anchor",href:"#prop-groundlighthex","aria-label":'Permalink to "Prop: groundLightHex"'},"​")],-1),Ps=s("strong",null,[s("code",null,"String")],-1),Ss=s("br",null,null,-1),Vs=s("code",null,"groundLightHex",-1),qs=p("",3),Es={class:"w-full pt-4"},Ms=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,[e("You may have to click this component a couple of times as VitePress's awesome template (used to make these docs) has it's own dark/light mode functionality and they both kinda work together because they both add/remove a "),s("code",null,".dark"),e(" class from the app!")]),s("p",null,"That said, if you click these example elements a few times, then they will take over the page from VitePress!")],-1),Is=s("h2",{id:"prop-mode",tabindex:"-1"},[e("Prop: mode "),s("a",{class:"header-anchor",href:"#prop-mode","aria-label":'Permalink to "Prop: mode"'},"​")],-1),Rs=s("strong",null,[s("code",null,"String")],-1),Bs=s("br",null,null,-1),Ns=s("a",{href:"/vueventus/components/prop-validators.html#validcolormodes"},"ValidColorModes Module",-1),Ls=s("br",null,null,-1),$s=s("code",null,"type",-1),zs=s("code",null,"type",-1),Hs=s("a",{href:"/vueventus/components/prop-validators.html#validcolormodes"},"ValidColorModes Module",-1),Ws=p("",3),Gs={class:"w-full pt-4"},Ys=p("",4),js=s("strong",null,[s("code",null,"String")],-1),Os=s("br",null,null,-1),Us=s("code",null,"palette",-1),Js=s("code",null,"palette",-1),Ks=s("code",null,"color",-1),Qs=p("",3),Xs={class:"w-full pt-4"},Zs=p("",4),se=s("strong",null,[s("code",null,"String")],-1),ee=s("br",null,null,-1),ae=s("code",null,"size",-1),oe=p("",3),ne={class:"w-full pt-4"},te=p("",4),le=s("strong",null,[s("code",null,"String")],-1),pe=s("br",null,null,-1),re=s("code",null,"textDark",-1),ce=p("",3),ie={class:"w-full pt-4"},de=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,[e("You may have to click this component a couple of times as VitePress's awesome template (used to make these docs) has it's own dark/light mode functionality and they both kinda work together because they both add/remove a "),s("code",null,".dark"),e(" class from the app!")]),s("p",null,"That said, if you click these example elements a few times, then they will take over the page from VitePress!")],-1),ue=s("h2",{id:"prop-textlight",tabindex:"-1"},[e("Prop: textLight "),s("a",{class:"header-anchor",href:"#prop-textlight","aria-label":'Permalink to "Prop: textLight"'},"​")],-1),he=s("strong",null,[s("code",null,"String")],-1),me=s("br",null,null,-1),ye=s("code",null,"textLight",-1),De=p("",3),Fe={class:"w-full pt-4"},be=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,[e("You may have to click this component a couple of times as VitePress's awesome template (used to make these docs) has it's own dark/light mode functionality and they both kinda work together because they both add/remove a "),s("code",null,".dark"),e(" class from the app!")]),s("p",null,"That said, if you click these example elements a few times, then they will take over the page from VitePress!")],-1),ge=s("h2",{id:"prop-titledark",tabindex:"-1"},[e("Prop: titleDark "),s("a",{class:"header-anchor",href:"#prop-titledark","aria-label":'Permalink to "Prop: titleDark"'},"​")],-1),_e=s("strong",null,[s("code",null,"String")],-1),Ce=s("br",null,null,-1),ve=s("code",null,"titleDark",-1),fe=p("",4),ke={class:"w-full pt-4"},Ae=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,[e("You may have to click this component a couple of times as VitePress's awesome template (used to make these docs) has it's own dark/light mode functionality and they both kinda work together because they both add/remove a "),s("code",null,".dark"),e(" class from the app!")]),s("p",null,"That said, if you click these example elements a few times, then they will take over the page from VitePress!")],-1),Te=s("h2",{id:"prop-titlelight",tabindex:"-1"},[e("Prop: titleLight "),s("a",{class:"header-anchor",href:"#prop-titlelight","aria-label":'Permalink to "Prop: titleLight"'},"​")],-1),we=s("strong",null,[s("code",null,"String")],-1),xe=s("br",null,null,-1),Pe=s("code",null,"titleLight",-1),Se=p("",4),Ve={class:"w-full pt-4"},qe=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,[e("You may have to click this component a couple of times as VitePress's awesome template (used to make these docs) has it's own dark/light mode functionality and they both kinda work together because they both add/remove a "),s("code",null,".dark"),e(" class from the app!")]),s("p",null,"That said, if you click these example elements a few times, then they will take over the page from VitePress!")],-1),Ee=s("h2",{id:"prop-type",tabindex:"-1"},[e("Prop: type "),s("a",{class:"header-anchor",href:"#prop-type","aria-label":'Permalink to "Prop: type"'},"​")],-1),Me=s("strong",null,[s("code",null,"String")],-1),Ie=s("br",null,null,-1),Re=s("a",{href:"/vueventus/components/prop-validators.html#validbuttontypes"},"ValidButtonTypes Module",-1),Be=s("br",null,null,-1),Ne=s("code",null,"type",-1),Le=s("code",null,"type",-1),$e=s("a",{href:"/vueventus/components/prop-validators.html#validbuttontypes"},"ValidButtonTypes Module",-1),ze=p("",3),He={class:"w-full pt-4"},We=s("h3",{id:"typing-for-downstream-component-instances-4",tabindex:"-1"},[e("Typing for Downstream Component Instances "),s("a",{class:"header-anchor",href:"#typing-for-downstream-component-instances-4","aria-label":'Permalink to "Typing for Downstream Component Instances"'},"​")],-1),Ge=s("p",null,"Coming Soon!",-1),Ye=s("h2",{id:"slot-none",tabindex:"-1"},[e("Slot: None "),s("a",{class:"header-anchor",href:"#slot-none","aria-label":'Permalink to "Slot: None"'},"​")],-1),je={class:"danger custom-block"},Oe=s("p",{class:"custom-block-title"},"NO SLOT AVAILABLE",-1),Ue=s("a",{href:"https://heroicons.com/",target:"_blank",rel:"noreferrer"},"heroicons",-1),Je=s("code",null,"<button>",-1),Ke=s("code",null,"title",-1),Fa=JSON.parse('{"title":"VvColorModeButton Component","description":"","frontmatter":{"title":"VvColorModeButton Component"},"headers":[],"relativePath":"components/buttons/vv-color-mode-button.md","lastUpdated":1673045698000}'),Qe={name:"components/buttons/vv-color-mode-button.md"},ba=Object.assign(Qe,{setup(a){return(l,d)=>(i(),u("div",null,[s("h1",B,[e(t(l.$frontmatter.title)+" ",1),N]),s("p",null,[e("The "+t(l.$frontmatter.title)+" provides a ",1),L,e(" based solution to quickly implement and manage a user's dark or light color mode setting (with optional unnoticeable faux-persistence) for a VueVentus powered application.")]),$,s("p",null,[e("To import a "+t(l.$frontmatter.title)+" installed by the ",1),z,e(" or "),H,e(":")]),W,s("p",null,"Alternatively, you can install the raw library "+t(l.$frontmatter.title)+" with:",1),G,s("p",null,"Manually installing the "+t(l.$frontmatter.title)+" requires a little bit of extra work due to the nature of Color Modes and JavaScript applications in browser contexts.",1),Y,s("p",null,"Additionally and for completeness when installing of the "+t(l.$frontmatter.title)+", after adding the script above to a code base there's still one more important step to do.",1),j,s("p",null,[e("Type: "),O,U,e(" Default: "),s("strong",null,[s("code",null,'"'+t(o(n).defaults.VvColorModeButton.color)+'"',1)])]),s("p",null,[e("The "+t(l.$frontmatter.title)+" ",1),J,e(" prop sets the component instance color based both on the "),K,e(" prop and the "),Q,e(" prop value together.")]),X,s("div",Z,[r(o(c),{color:o(n).defaults.VvColorModeButton.color,class:"border-solid"},null,8,["color"])]),ss,s("p",null,[e("Type: "),es,as,e(" Default: "),s("strong",null,[s("code",null,t(o(n).defaults.VvColorModeButton.debug),1)])]),s("p",null,[e("The "+t(l.$frontmatter.title)+" ",1),os,e(" prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through "),ns,e(" prefixed HTML attributes.")]),ts,s("div",ls,[r(o(c),{debug:!0})]),ps,s("p",null,[e("Type: "),rs,cs,e(" Default: "),s("strong",null,[s("code",null,'"'+t(o(n).colorModes.dark.ground)+'"',1)])]),s("p",null,[e("The "+t(l.$frontmatter.title)+" ",1),is,e(" prop sets the component instance class(es) for the background color of the application when in the dark color mode state.")]),ds,s("div",us,[r(o(c),{"ground-dark":o(n).colorModes.dark.ground,class:"border-solid"},null,8,["ground-dark"])]),hs,ms,s("p",null,[e("Type: "),ys,Ds,e(" Default: "),s("strong",null,[s("code",null,'"'+t(o(n).colorModes.dark.hex)+'"',1)])]),s("p",null,[e("The "+t(l.$frontmatter.title)+" ",1),Fs,e(" prop sets the component instance color code for the background color of the application when in the dark color mode state.")]),bs,s("div",gs,[r(o(c),{"ground-dark-hex":o(n).colorModes.dark.hex,class:"border-solid"},null,8,["ground-dark-hex"])]),_s,Cs,s("p",null,[e("Type: "),vs,fs,e(" Default: "),s("strong",null,[s("code",null,'"'+t(o(n).colorModes.light.ground)+'"',1)])]),s("p",null,[e("The "+t(l.$frontmatter.title)+" ",1),ks,e(" prop sets the component instance class(es) for the background color of the application when in the light color mode state.")]),As,s("div",Ts,[r(o(c),{"ground-light":o(n).colorModes.light.ground,class:"border-solid"},null,8,["ground-light"])]),ws,xs,s("p",null,[e("Type: "),Ps,Ss,e(" Default: "),s("strong",null,[s("code",null,'"'+t(o(n).colorModes.light.hex)+'"',1)])]),s("p",null,[e("The "+t(l.$frontmatter.title)+" ",1),Vs,e(" prop sets the component instance color code for the background color of the application when in the light color mode state.")]),qs,s("div",Es,[r(o(c),{"ground-light-hex":o(n).colorModes.light.hex,class:"border-solid"},null,8,["ground-light-hex"])]),Ms,Is,s("p",null,[e("Type: "),Rs,Bs,e(" Valid Values: "),Ns,Ls,e(" Default: "),s("strong",null,[s("code",null,'"'+t(o(n).defaults.VvColorModeButton.mode)+'"',1)])]),s("p",null,[e("The "+t(l.$frontmatter.title)+" ",1),$s,e(" prop sets the button HTML "),zs,e(" attribute to a value that should be present in the "),Hs,e(" to be a valid value for this component.")]),Ws,s("div",Gs,[r(o(c),{mode:o(n).defaults.VvColorModeButton.mode,class:"border-solid"},null,8,["mode"])]),Ys,s("p",null,[e("Type: "),js,Os,e(" Default: "),s("strong",null,[s("code",null,'"'+t(o(n).defaults.VvColorModeButton.palette)+'"',1)])]),s("p",null,[e("The "+t(l.$frontmatter.title)+" ",1),Us,e(" prop sets the component instance color based both on the "),Js,e(" prop and the "),Ks,e(" prop values together.")]),Qs,s("div",Xs,[r(o(c),{palette:o(n).defaults.VvColorModeButton.palette,class:"border-solid"},null,8,["palette"])]),Zs,s("p",null,[e("Type: "),se,ee,e(" Default: "),s("strong",null,[s("code",null,'"'+t(o(n).defaults.VvColorModeButton.size)+'"',1)])]),s("p",null,[e("The "+t(l.$frontmatter.title)+" ",1),ae,e(" prop sets the component instance size-based classes which in the context of buttons typically involves padding and font size atomic classes.")]),oe,s("div",ne,[r(o(c),{size:o(n).defaults.VvColorModeButton.size,class:"border-solid"},null,8,["size"])]),te,s("p",null,[e("Type: "),le,pe,e(" Default: "),s("strong",null,[s("code",null,'"'+t(o(n).colorModes.dark.text)+'"',1)])]),s("p",null,[e("The "+t(l.$frontmatter.title)+" ",1),re,e(" prop sets the component instance class(es) for the text color of the application when in the dark color mode state.")]),ce,s("div",ie,[r(o(c),{"text-dark":o(n).colorModes.dark.text,class:"border-solid"},null,8,["text-dark"])]),de,ue,s("p",null,[e("Type: "),he,me,e(" Default: "),s("strong",null,[s("code",null,'"'+t(o(n).colorModes.light.text)+'"',1)])]),s("p",null,[e("The "+t(l.$frontmatter.title)+" ",1),ye,e(" prop sets the component instance class(es) for the text color of the application when in the light color mode state.")]),De,s("div",Fe,[r(o(c),{"text-light":o(n).colorModes.light.text,class:"border-solid"},null,8,["text-light"])]),be,ge,s("p",null,[e("Type: "),_e,Ce,e(" Default: "),s("strong",null,[s("code",null,'"'+t(o(n).colorModes.dark.title)+'"',1)])]),s("p",null,[e("The "+t(l.$frontmatter.title)+" ",1),ve,e(" prop sets the component instance title attribute string of the component when the app is currently in the dark color mode state.")]),fe,s("div",ke,[r(o(c),{"title-dark":"Custom "+o(n).colorModes.dark.title,class:"border-solid"},null,8,["title-dark"])]),Ae,Te,s("p",null,[e("Type: "),we,xe,e(" Default: "),s("strong",null,[s("code",null,'"'+t(o(n).colorModes.light.title)+'"',1)])]),s("p",null,[e("The "+t(l.$frontmatter.title)+" ",1),Pe,e(" prop sets the component instance title attribute string of the component when the app is currently in the light color mode state.")]),Se,s("div",Ve,[r(o(c),{"title-light":"Custom "+o(n).colorModes.light.title,class:"border-solid"},null,8,["title-light"])]),qe,Ee,s("p",null,[e("Type: "),Me,Ie,e(" Valid Values: "),Re,Be,e(" Default: "),s("strong",null,[s("code",null,'"'+t(o(n).defaults.VvColorModeButton.type)+'"',1)])]),s("p",null,[e("The "+t(l.$frontmatter.title)+" ",1),Ne,e(" prop sets the button HTML "),Le,e(" attribute to a value that should be present in the "),$e,e(" to be a valid value for this component.")]),ze,s("div",He,[r(o(c),{type:"submit"})]),We,Ge,Ye,s("div",je,[Oe,s("p",null,[e("The "+t(l.$frontmatter.title)+" does not have Vue slot option, because the component uses two ",1),Ue,e(" and is intended to output an equal in height and width "),Je,e(" element that toggles between two icons and leverages HTML "),Ke,e(" attributes to compensate for the use of non-text iconography.")])]),r(F)]))}});export{Fa as __pageData,ba as default};
