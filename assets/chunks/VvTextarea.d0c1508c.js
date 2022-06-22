var H=Object.defineProperty,O=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var L=(t,e,l)=>e in t?H(t,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[e]=l,x=(t,e)=>{for(var l in e||(e={}))G.call(e,l)&&L(t,l,e[l]);if(E)for(var l of E(e))N.call(e,l)&&L(t,l,e[l]);return t},m=(t,e)=>O(t,F(e));import{f as v,i as f,g as k,_ as S,o as h,c as y,r as C,n as p,h as q,j as J,k as P,w as A,l as D,m as K,a as j,p as Q}from"../app.e59e06d2.js";import{A as R}from"./Anchors.388ee882.js";import{B as U}from"./Buttons.dfe50adc.js";import{I as W}from"./Inputs.60e5b165.js";import{T as X}from"./Text.caa3aa9a.js";import{T as Y}from"./Textareas.3a361338.js";import{T as Z}from"./Transitions.33f89a9f.js";var ee={default:"text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200",error:"text-rose-500 hover:text-rose-600 dark:text-rose-300 dark:hover:text-rose-200",primary:"text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200",secondary:"text-teal-500 hover:text-teal-600 dark:text-teal-300 dark:hover:text-teal-200",success:"text-green-600 hover:text-green-700 dark:text-green-300 dark:hover:text-green-200"},te={"":"",default:"border-gray-200 dark:border-gray-600",error:"border-rose-600 dark:border-rose-300",primary:"border-blue-600 dark:border-blue-300",secondary:"border-violet-600 dark:border-violet-300",success:"border-green-600 dark:border-green-300"},re={default:"text-gray-500 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-gray-500 active:bg-gray-600 border-gray-300 hover:border-gray-800 focus:ring-gray-400 focus:border-gray-900",error:"text-rose-500 dark:text-rose-300 hover:text-white dark:hover:text-white hover:bg-rose-500 active:bg-rose-600 border-rose-300 hover:border-rose-800 focus:ring-rose-400 focus:border-rose-900",primary:"text-blue-500 dark:text-blue-300 hover:text-white dark:hover:text-white hover:bg-blue-500 active:bg-blue-600 border-blue-300 hover:border-blue-800 focus:ring-blue-400 focus:border-blue-900",secondary:"text-teal-600 dark:text-teal-500 hover:text-white dark:hover:text-white hover:bg-teal-600 active:bg-teal-800 border-teal-600 hover:border-teal-800 focus:ring-teal-500 focus:border-teal-900",success:"text-green-600 dark:text-green-500 hover:text-white dark:hover:text-white hover:bg-green-600 active:bg-green-800 border-green-600 hover:border-green-800 focus:ring-green-500 focus:border-green-900"},oe={default:"text-gray-800 hover:text-black bg-gray-100 hover:bg-gray-200 active:bg-gray-300 border-gray-900 focus:border-black focus:ring-gray-400",error:"text-white bg-rose-500 hover:bg-rose-600 active:bg-rose-700 border-rose-800 focus:ring-rose-400 focus:border-rose-900",primary:"text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 border-blue-800 focus:ring-blue-400 focus:border-blue-900",secondary:"text-gray-900 hover:text-white bg-teal-500 hover:bg-teal-600 active:text-white active:bg-teal-700 border-teal-800 focus:ring-teal-400 focus:border-teal-900",success:"text-gray-900 hover:text-white bg-green-500 hover:bg-green-600 active:text-white active:bg-green-700 border-green-800 focus:ring-green-400 focus:border-green-900"},ae={default:"text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",error:"text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",primary:"text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",secondary:"text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",success:"text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"},le={default:"",error:"text-white bg-rose-500 dark:bg-rose-600",primary:"text-white bg-blue-500 dark:bg-blue-600",secondary:"text-white bg-violet-500 dark:bg-violet-600",success:"text-white bg-green-500 dark:bg-green-600"},se={default:"text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",error:"text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",primary:"text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",secondary:"text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",success:"text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300"},ne={default:"text-black bg-gray-100 dark:bg-gray-200",error:"text-black bg-rose-200 dark:bg-rose-300",primary:"text-black bg-blue-200 dark:bg-blue-300",secondary:"text-black bg-violet-200 dark:bg-violet-300",success:"text-black bg-green-300 dark:bg-green-400"},ue={default:"",error:"text-rose-500 dark:text-rose-300",primary:"text-blue-500 dark:text-blue-300",secondary:"text-violet-500 dark:text-violet-300",success:"text-green-600 dark:text-green-300"},T={default:"focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 border-gray-300 dark:border-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-gray-400 placeholder:dark:text-gray-300 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white",error:"text-rose-700 dark:text-rose-200 focus:ring-rose-500 focus:border-rose-500 dark:focus:ring-rose-400 dark:focus:border-rose-400 border-rose-300 dark:border-rose-600 bg-rose-100 focus:bg-rose-50 dark:bg-rose-800 dark:focus:bg-rose-700 placeholder:text-rose-400 placeholder:dark:text-rose-300 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white",success:"text-green-700 dark:text-green-200 focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-400 dark:focus:border-green-400 border-green-300 dark:border-green-600 bg-green-100 focus:bg-green-50 dark:bg-green-800 dark:focus:bg-green-700 placeholder:text-green-600 placeholder:dark:text-green-400 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white"},de={VvAnchor:{button:!1,buttonBlock:!1,buttonFab:!1,buttonSize:"md",color:"default",external:!1,href:"#",palette:"default"},VvButton:{block:!1,color:"primary",fab:!1,palette:"solid",size:"md",type:"button"},VvColorModeButton:{color:"default",mode:"light",palette:"outline",size:"xs",type:"button"},VvEl:{borderPalette:"default",borderColor:"",groundPalette:"default",groundColor:"default",tag:"div",textPalette:"default",textColor:"default"},VvInput:{color:"default",palette:"validation",size:"md",type:"text"},VvTextarea:{color:"default",palette:"validation",size:"md",rowSize:"md"}},r={anchors:m(x({},R),{palettes:{default:ee}}),borders:{palettes:{default:te}},buttons:m(x({},U),{palettes:{outline:re,solid:oe}}),inputs:m(x({},W),{palettes:{validation:T}}),colorMode:{dark:{bg:"bg-gray-900",ground:"bg-gray-900",hex:"#242426",text:"text-gray-100",title:"Enable Dark Mode"},light:{bg:"bg-gray-100",ground:"bg-gray-100",hex:"#e1e1e3",text:"text-gray-900",title:"Enable Light Mode"}},grounds:{palettes:{console:ae,default:le,monochromatic:se,pastel:ne}},text:m(x({},X),{palettes:{default:ue}}),textareas:m(x({},Y),{palettes:{validation:T}}),transitions:x({},Z),defaults:de};const I=["button","submit","reset"],ie=["light","dark"],ce=["color","date","datetime-local","email","month","number","password","search","tel","text","time","url"],ge=v({name:"VvAnchor",props:{button:{type:Boolean,default:r.defaults.VvAnchor.button},buttonBlock:{type:Boolean,default:r.defaults.VvAnchor.buttonBlock},buttonFab:{type:Boolean,default:r.defaults.VvAnchor.buttonFab},buttonSize:{type:String,default:r.defaults.VvAnchor.buttonSize},color:{type:String,default:r.defaults.VvAnchor.color},external:{type:Boolean,default:r.defaults.VvAnchor.external},href:{type:String,default:r.defaults.VvAnchor.href},palette:{type:String,default:r.defaults.VvAnchor.palette}},setup(t){const e=Object.keys(f("vv",{})).length>0?f("vv"):r;return{classes:k(()=>{var a,s,n,u,d,i,c,g,b,z,V,w,B,$,_,M;let o=[];return t.button===!0?(t.buttonBlock===!0&&t.buttonFab===!1?((a=e==null?void 0:e.buttons)!=null&&a.blockBase()&&o.push(e.buttons.blockBase()),t.buttonSize!==""&&((n=(s=e==null?void 0:e.buttons)==null?void 0:s.blockSizes)==null?void 0:n[t.buttonSize])&&o.push(e.buttons.blockSizes[t.buttonSize])):t.buttonBlock===!1&&t.buttonFab===!0?((u=e==null?void 0:e.buttons)!=null&&u.fabBase()&&o.push(e.buttons.fabBase()),t.buttonSize!==""&&((i=(d=e==null?void 0:e.buttons)==null?void 0:d.fabSizes)==null?void 0:i[t.buttonSize])&&o.push(e.buttons.fabSizes[t.buttonSize])):((c=e==null?void 0:e.buttons)!=null&&c.base()&&o.push(e.buttons.base()),t.buttonSize!==""&&((b=(g=e==null?void 0:e.buttons)==null?void 0:g.sizes)==null?void 0:b[t.buttonSize])&&o.push(e.buttons.sizes[t.buttonSize])),(w=(V=(z=e==null?void 0:e.buttons)==null?void 0:z.palettes)==null?void 0:V[t.palette])!=null&&w[t.color]&&o.push(e.buttons.palettes[t.palette][t.color])):((B=e==null?void 0:e.anchors)!=null&&B.base()&&o.push(e.anchors.base()),(M=(_=($=e==null?void 0:e.anchors)==null?void 0:$.palettes)==null?void 0:_[t.palette])!=null&&M[t.color]&&o.push(e.anchors.palettes[t.palette][t.color])),o.join(" ").trim()})}}}),be=["href"],fe=["href"];function he(t,e,l,o,a,s){return t.external?(h(),y("a",{key:0,href:t.href,class:p(t.classes),target:"_blank",rel:"noopener noreferrer"},[C(t.$slots,"default")],10,be)):(h(),y("a",{key:1,href:t.href,class:p(t.classes)},[C(t.$slots,"default")],10,fe))}var qe=S(ge,[["render",he]]);const ke=v({name:"VvButton",props:{block:{type:Boolean,default:r.defaults.VvButton.block},color:{type:String,default:r.defaults.VvButton.color},fab:{type:Boolean,default:r.defaults.VvButton.fab},palette:{type:String,default:r.defaults.VvButton.palette},size:{type:String,default:r.defaults.VvButton.size},type:{type:String,default:r.defaults.VvButton.type,validator:t=>I.includes(t)}},setup(t){const e=Object.keys(f("vv",{})).length>0?f("vv"):r,l=t.type;let o=k(()=>{var s,n,u,d,i,c,g,b,z,V,w,B;let a=[];return t.block===!0&&t.fab===!1?((s=e==null?void 0:e.buttons)!=null&&s.blockBase()&&a.push(e.buttons.blockBase()),t.size!==""&&((u=(n=e==null?void 0:e.buttons)==null?void 0:n.blockSizes)==null?void 0:u[t.size])&&a.push(e.buttons.blockSizes[t.size])):t.fab===!0&&t.block===!1?((d=e==null?void 0:e.buttons)!=null&&d.fabBase()&&a.push(e.buttons.fabBase()),t.size!==""&&((c=(i=e==null?void 0:e.buttons)==null?void 0:i.fabSizes)==null?void 0:c[t.size])&&a.push(e.buttons.fabSizes[t.size])):((g=e==null?void 0:e.buttons)!=null&&g.base()&&a.push(e.buttons.base()),t.size!==""&&((z=(b=e==null?void 0:e.buttons)==null?void 0:b.sizes)==null?void 0:z[t.size])&&a.push(e.buttons.sizes[t.size])),(B=(w=(V=e==null?void 0:e.buttons)==null?void 0:V.palettes)==null?void 0:w[t.palette])!=null&&B[t.color]&&a.push(e.buttons.palettes[t.palette][t.color]),a.join(" ").trim()});return{btnType:l,classes:o}}}),xe=["type"];function ye(t,e,l,o,a,s){return h(),y("button",{type:t.btnType,class:p(t.classes)},[C(t.$slots,"default")],10,xe)}var me=S(ke,[["render",ye]]);const pe=v({name:"VvColorModeButton",components:{VvButton:me},props:{mode:{type:String,default:r.defaults.VvColorModeButton.mode,validator:t=>ie.includes(t)},color:{type:String,default:r.defaults.VvColorModeButton.color},palette:{type:String,default:r.defaults.VvColorModeButton.palette},size:{type:String,default:r.defaults.VvColorModeButton.size},groundDark:{type:String,default:r.colorMode.dark.ground},groundDarkHex:{type:String,default:r.colorMode.dark.hex},groundLight:{type:String,default:r.colorMode.light.ground},groundLightHex:{type:String,default:r.colorMode.light.hex},textDark:{type:String,default:r.colorMode.dark.text},textLight:{type:String,default:r.colorMode.light.text},titleDark:{type:String,default:r.colorMode.dark.title},titleLight:{type:String,default:r.colorMode.light.title},type:{type:String,default:r.defaults.VvColorModeButton.type,validator:t=>I.includes(t)}},setup(t){const e=q(t.mode),l=k(()=>e.value==="dark"?"sun":"moon"),o=k(()=>e.value==="dark"?t.titleLight:t.titleDark);return J(()=>{document&&e.value==="light"&&(document.documentElement.classList.remove("dark",t.groundDark,t.textDark),document.documentElement.classList.add(t.groundLight,t.textLight),document.documentElement.style.backgroundColor=t.groundLightHex),document&&e.value==="dark"&&(document.documentElement.classList.remove(t.groundLight,t.textLight),document.documentElement.classList.add("dark",t.groundDark,t.textDark),document.documentElement.style.backgroundColor=t.groundDarkHex)}),{mode:e,icon:l,title:o}},methods:{toggleColorMode(t){document&&this.mode==="light"?(this.mode="dark",localStorage.setItem("colorMode","dark"),document.documentElement.classList.remove(this.groundLight,this.textLight),document.documentElement.classList.add("dark",this.groundDark,this.textDark),document.documentElement.style.backgroundColor=this.groundDarkHex):document&&this.mode==="dark"&&(this.mode="light",localStorage.setItem("colorMode","light"),document.documentElement.classList.remove("dark",this.groundDark,this.textDark),document.documentElement.classList.add(this.groundLight,this.textLight),document.documentElement.style.backgroundColor=this.groundLightHex)}}}),ve={key:0,class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},Se=j("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1),ze=[Se],Ve={key:1,class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},we=j("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1),Be=[we];function Ce(t,e,l,o,a,s){const n=K("VvButton");return h(),P(n,{title:t.title,onClick:e[0]||(e[0]=u=>t.toggleColorMode(u)),class:"rounded-full",color:t.color,fab:!0,palette:t.palette,type:"button",size:t.size},{default:A(()=>[t.icon==="moon"?(h(),y("svg",ve,ze)):D("",!0),t.icon==="sun"?(h(),y("svg",Ve,Be)):D("",!0)]),_:1},8,["title","color","palette","size"])}var Je=S(pe,[["render",Ce]]);const $e=v({name:"VvEl",props:{borderPalette:{type:String,default:r.defaults.VvEl.borderPalette},borderColor:{type:String,default:r.defaults.VvEl.borderColor},groundPalette:{type:String,default:r.defaults.VvEl.groundPalette},groundColor:{type:String,default:r.defaults.VvEl.groundColor},tag:{type:String,default:r.defaults.VvEl.tag},textPalette:{type:String,default:r.defaults.VvEl.textPalette},textColor:{type:String,default:r.defaults.VvEl.textColor}},setup(t){const e=Object.keys(f("vv",{})).length>0?f("vv"):r;return{classes:k(()=>{var a,s,n,u,d,i,c,g,b;let o=[];return(n=(s=(a=e==null?void 0:e.borders)==null?void 0:a.palettes)==null?void 0:s[t.borderPalette])!=null&&n[t.borderColor]&&o.push(e.borders.palettes[t.borderPalette][t.borderColor]),(i=(d=(u=e==null?void 0:e.grounds)==null?void 0:u.palettes)==null?void 0:d[t.groundPalette])!=null&&i[t.groundColor]&&o.push(e.grounds.palettes[t.groundPalette][t.groundColor]),(b=(g=(c=e==null?void 0:e.text)==null?void 0:c.palettes)==null?void 0:g[t.textPalette])!=null&&b[t.textColor]&&o.push(e.text.palettes[t.textPalette][t.textColor]),o.join(" ").trim()})}}});function _e(t,e,l,o,a,s){return h(),P(Q(t.tag),{class:p(t.classes)},{default:A(()=>[C(t.$slots,"default")]),_:3},8,["class"])}var Ke=S($e,[["render",_e]]);const Me=v({name:"VvInput",props:{color:{type:String,default:r.defaults.VvInput.color},palette:{type:String,default:r.defaults.VvInput.palette},size:{type:String,default:r.defaults.VvInput.size},type:{type:String,default:r.defaults.VvInput.type,validator:t=>ce.includes(t)}},setup(t){const e=Object.keys(f("vv",{})).length>0?f("vv"):r;return{classes:k(()=>{var a,s,n,u,d,i;let o=[];return(a=e==null?void 0:e.inputs)!=null&&a.base()&&o.push(e.inputs.base()),t.size!==""&&((n=(s=e==null?void 0:e.inputs)==null?void 0:s.sizes)==null?void 0:n[t.size])&&o.push(e.inputs.sizes[t.size]),(i=(d=(u=e==null?void 0:e.inputs)==null?void 0:u.palettes)==null?void 0:d[t.palette])!=null&&i[t.color]&&o.push(e.inputs.palettes[t.palette][t.color]),o.join(" ").trim()})}}}),Ee=["type"];function Le(t,e,l,o,a,s){return h(),y("input",{type:t.type,class:p(t.classes)},null,10,Ee)}var Qe=S(Me,[["render",Le]]);const De=v({name:"VvTextarea",props:{color:{type:String,default:r.defaults.VvTextarea.color},palette:{type:String,default:r.defaults.VvTextarea.palette},size:{type:String,default:r.defaults.VvTextarea.size},rowSize:{type:String,default:r.defaults.VvTextarea.rowSize}},setup(t){const e=Object.keys(f("vv",{})).length>0?f("vv"):r;let l=k(()=>{var u,d,i,c,g,b;let a=[],s=t.palette?t.palette:String(e==null?void 0:e.defaults.VvTextarea.palette),n=t.color?t.color:String(e==null?void 0:e.defaults.VvTextarea.color);return(u=e==null?void 0:e.textareas)!=null&&u.base()&&a.push(e.textareas.base()),t.size!==""&&((i=(d=e==null?void 0:e.textareas)==null?void 0:d.sizes)==null?void 0:i[t.size])&&a.push(e.textareas.sizes[t.size]),(b=(g=(c=e==null?void 0:e.textareas)==null?void 0:c.palettes)==null?void 0:g[s])!=null&&b[n]&&a.push(e.textareas.palettes[s][n]),a.join(" ").trim()}),o=k(()=>{var a,s;if(t.rowSize!==""&&((s=(a=e==null?void 0:e.textareas)==null?void 0:a.rowSizes)==null?void 0:s[t.rowSize]))return e.textareas.rowSizes[t.rowSize]});return{classes:l,rows:o}}}),Te=["rows"];function Pe(t,e,l,o,a,s){return h(),y("textarea",{class:p(t.classes),rows:t.rows},null,10,Te)}var Re=S(De,[["render",Pe]]);export{qe as V,r as a,me as b,Je as c,Ke as d,Qe as e,Re as f};
