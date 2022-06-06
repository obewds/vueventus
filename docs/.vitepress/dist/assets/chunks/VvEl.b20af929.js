var _=Object.defineProperty,A=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var D=(r,t,e)=>t in r?_(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,v=(r,t)=>{for(var e in t||(t={}))$.call(t,e)&&D(r,e,t[e]);if(M)for(var e of M(t))F.call(t,e)&&D(r,e,t[e]);return r},S=(r,t)=>A(r,H(t));import{i as p,d as C,o as h,c as w,r as B,n as V,u as f,e as T,f as G,g as L,w as j,h as E,a as P,j as I}from"../app.e37b8968.js";var z={align:"",decoration:"",family:"",lineHeight:"",smoothing:"subpixel-antialiased",spacing:"",weight:"",wordBreak:"",base:function(){return[this.align,this.decoration,this.family,this.lineHeight,this.smoothing,this.spacing,this.weight,this.wordBreak].join(" ")},sizes:{"5xs":"text-5xs","4xs":"text-4xs","3xs":"text-3xs","2xs":"text-2xs",xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl","3xl":"text-3xl","4xl":"text-4xl","5xl":"text-5xl","6xl":"text-6xl","7xl":"text-7xl","8xl":"text-8xl","9xl":"text-9xl","10xl":"text-10xl","11xl":"text-11xl","12xl":"text-12xl"},getSizeClasses:function(r){const t=r&&this.sizes[r]?r:"md";return this.sizes[t]},classes:function(r){const t=r||"";return[this.base(),this.getSizeClasses(t)].join(" ")}},N={cursor:"cursor-pointer",display:"",focus:"",text:"underline underline-offset-1",base:function(){return[this.cursor,this.display,this.focus,this.text].join(" ")},sizes:z.sizes,getSizeClasses:z.getSizeClasses(sizesKey),classes:function(r){const t=r||"";return[this.base(),this.getSizeClasses(t)].join(" ")}},q={border:"border border-transparent",cursor:"cursor-pointer",disabled:"disabled:opacity-25",display:"inline-flex items-center",focus:"focus:outline-none focus:ring focus:ring-opacity-50",text:"font-semibold uppercase tracking-widest",base:function(){return[this.border,this.cursor,this.disabled,this.display,this.focus,this.text].join(" ")},sizes:{"4xs":"px-1 py-px text-xxs","3xs":"px-1.5 py-0.5 text-xxs","2xs":"px-2 py-1 text-xs",xs:"px-2.5 py-1.5 text-xs",sm:"px-2.5 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-4 py-2 text-base",xl:"px-6 py-3 text-base","2xl":"px-7 py-4 text-lg","3xl":"px-8 py-4 text-xl","4xl":"px-8 py-5 text-xl"},getSizeClasses:function(r){const t=r&&this.sizes[r]?r:"md";return this.sizes[t]},classes:function(r){const t=r||"";return[this.base(),this.getSizeClasses(t)].join(" ")},blockDisplay:"block w-full flex flex-col items-center justify-center",blockBase:function(){return[this.border,this.cursor,this.disabled,this.blockDisplay,this.focus,this.text].join(" ")},blockSizes:{"4xs":"px-1 py-1 text-2xs","3xs":"px-2.5 py-1.5 text-2xs","2xs":"px-2.5 py-1.5 text-xs",xs:"px-4 py-2 text-sm",sm:"px-4 py-2 text-base",md:"px-6 py-3 text-base",lg:"px-6 py-3 text-lg",xl:"px-7 py-3.5 text-lg","2xl":"px-8 py-5 text-xl","3xl":"px-9 py-5 text-2xl","4xl":"px-10 py-6 text-2xl"},getBlockSizeClasses:function(r){const t=r&&this.blockSizes[r]?r:"md";return this.blockSizes[t]},blockClasses:function(r){const t=r||"";return[this.blockBase(),this.getBlockSizeClasses(t)].join(" ")},fabDisplay:"inline-flex items-center items-center justify-center",fabBase:function(){return[this.border,this.cursor,this.disabled,this.fabDisplay,this.focus,this.text].join(" ")},fabSizes:{"4xs":"w-6 h-6 text-xxs","3xs":"w-7 h-7 text-xxs","2xs":"w-8 h-8 text-xs",xs:"w-9 h-9 text-xs",sm:"w-10 h-10 text-sm",md:"w-11 h-11 text-sm",lg:"w-12 h-12 text-base",xl:"w-14 h-14 text-base","2xl":"w-16 h-16 text-lg","3xl":"w-20 h-20 text-xl","4xl":"w-24 h-24 text-xl"},getFabSizeClasses:function(r){const t=r&&this.fabSizes[r]?r:"md";return this.fabSizes[t]},fabClasses:function(r){const t=r||"";return[this.fabBase(),this.getFabSizeClasses(t)].join(" ")}},J={durations:{1200:"duration-1200",1150:"duration-1150",1100:"duration-1100",1050:"duration-1050",1e3:"duration-1000",950:"duration-950",900:"duration-900",850:"duration-850",800:"duration-800",750:"duration-750",700:"duration-700",650:"duration-650",600:"duration-600",550:"duration-550",500:"duration-500",475:"duration-475",450:"duration-450",425:"duration-425",400:"duration-400",375:"duration-375",350:"duration-350",325:"duration-325",300:"duration-300",275:"duration-275",250:"duration-250",225:"duration-225",200:"duration-200",175:"duration-175",150:"duration-150",125:"duration-125",100:"duration-100",75:"duration-75",50:"duration-50",25:"duration-25"},easings:{linear:"ease-linear",in:"ease-in",out:"ease-out",inOut:"ease-in-out"},transitions:{default:"transition",all:"transition-all",colors:"transition-colors",opacity:"transition-opacity",shadow:"transition-shadow",transform:"transition-transform"},getDurationClasses:function(r){const t=r&&this.durations[r]?r:"300";return this.durations[t]},getEasingClasses:function(r){const t=r&&this.easings[r]?r:"inOut";return this.easings[t]},getTransitionClasses:function(r){const t=r&&this.transitions[r]?r:"default";return this.transitions[t]},custom:function(r){const t={transitions:r&&r.transitions?r.transitions:"",easings:r&&r.easings?r.easings:"",durations:r&&r.durations?r.durations:""};return[this.getTransitionClasses(t.transitions),this.getEasingClasses(t.easings),this.getDurationClasses(t.durations)].join(" ")},classes:function(r,t,e){const n=r||"",s=t||"",a=e||"";return[this.getTransitionClasses(n),this.getEasingClasses(s),this.getDurationClasses(a)].join(" ")}},Q={default:"text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200",error:"text-rose-500 hover:text-rose-600 dark:text-rose-300 dark:hover:text-rose-200",primary:"text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200",secondary:"text-teal-500 hover:text-teal-600 dark:text-teal-300 dark:hover:text-teal-200",success:"text-green-600 hover:text-green-700 dark:text-green-300 dark:hover:text-green-200"},R={"":"",default:"border-gray-200 dark:border-gray-600",error:"border-rose-600 dark:border-rose-300",primary:"border-blue-600 dark:border-blue-300",secondary:"border-violet-600 dark:border-violet-300",success:"border-green-600 dark:border-green-300"},U={default:"text-gray-500 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-gray-500 active:bg-gray-600 border-gray-300 hover:border-gray-800 focus:ring-gray-400 focus:border-gray-900",error:"text-rose-500 dark:text-rose-300 hover:text-white dark:hover:text-white hover:bg-rose-500 active:bg-rose-600 border-rose-300 hover:border-rose-800 focus:ring-rose-400 focus:border-rose-900",primary:"text-blue-500 dark:text-blue-300 hover:text-white dark:hover:text-white hover:bg-blue-500 active:bg-blue-600 border-blue-300 hover:border-blue-800 focus:ring-blue-400 focus:border-blue-900",secondary:"text-teal-600 dark:text-teal-500 hover:text-white dark:hover:text-white hover:bg-teal-600 active:bg-teal-800 border-teal-600 hover:border-teal-800 focus:ring-teal-500 focus:border-teal-900",success:"text-green-600 dark:text-green-500 hover:text-white dark:hover:text-white hover:bg-green-600 active:bg-green-800 border-green-600 hover:border-green-800 focus:ring-green-500 focus:border-green-900"},W={default:"text-gray-800 hover:text-black bg-gray-100 hover:bg-gray-200 active:bg-gray-300 border-gray-900 focus:border-black focus:ring-gray-400",error:"text-white bg-rose-500 hover:bg-rose-600 active:bg-rose-700 border-rose-800 focus:ring-rose-400 focus:border-rose-900",primary:"text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 border-blue-800 focus:ring-blue-400 focus:border-blue-900",secondary:"text-gray-900 hover:text-white bg-teal-500 hover:bg-teal-600 active:text-white active:bg-teal-700 border-teal-800 focus:ring-teal-400 focus:border-teal-900",success:"text-gray-900 hover:text-white bg-green-500 hover:bg-green-600 active:text-white active:bg-green-700 border-green-800 focus:ring-green-400 focus:border-green-900"},X={default:"text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",error:"text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",primary:"text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",secondary:"text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",success:"text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"},Y={default:"",error:"text-white bg-rose-500 dark:bg-rose-600",primary:"text-white bg-blue-500 dark:bg-blue-600",secondary:"text-white bg-violet-500 dark:bg-violet-600",success:"text-white bg-green-500 dark:bg-green-600"},Z={default:"text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",error:"text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",primary:"text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",secondary:"text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",success:"text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300"},O={default:"text-black bg-gray-100 dark:bg-gray-200",error:"text-black bg-rose-200 dark:bg-rose-300",primary:"text-black bg-blue-200 dark:bg-blue-300",secondary:"text-black bg-violet-200 dark:bg-violet-300",success:"text-black bg-green-300 dark:bg-green-400"},K={default:"",error:"text-rose-500 dark:text-rose-300",primary:"text-blue-500 dark:text-blue-300",secondary:"text-violet-500 dark:text-violet-300",success:"text-green-600 dark:text-green-300"},o={anchors:S(v({},N),{palettes:{default:Q}}),borders:{palettes:{default:R}},buttons:S(v({},q),{palettes:{outline:U,solid:W}}),colorMode:{dark:{bg:"bg-gray-900",ground:"bg-gray-900",hex:"#242426",text:"text-gray-100",title:"Enable Dark Mode"},light:{bg:"bg-gray-100",ground:"bg-gray-100",hex:"#e1e1e3",text:"text-gray-900",title:"Enable Light Mode"}},grounds:{palettes:{console:X,default:Y,monochromatic:Z,pastel:O}},text:S(v({},z),{palettes:{default:K}}),transitions:v({},J),defaults:{VvAnchor:{button:!1,buttonBlock:!1,buttonFab:!1,buttonSize:"md",color:"default",href:"#",palette:"default"},VvButton:{block:!1,color:"primary",fab:!1,palette:"solid",size:"md",type:"button"},VvColorModeButton:{color:"default",mode:"light",palette:"outline",size:"xs"},VvEl:{borderPalette:"default",borderColor:"",groundPalette:"default",groundColor:"default",tag:"div",textPalette:"default",textColor:"default"}}};const tt=["href"];o.defaults.VvAnchor.button,o.defaults.VvAnchor.buttonBlock,o.defaults.VvAnchor.buttonFab,o.defaults.VvAnchor.buttonSize,o.defaults.VvAnchor.color,o.defaults.VvAnchor.href,o.defaults.VvAnchor.palette,o.transitions.classes();var et=["button","submit","reset"];const rt=["type"],ot={name:"VvButton",props:{block:{type:Boolean,default:o.defaults.VvButton.block},color:{type:String,default:o.defaults.VvButton.color},fab:{type:Boolean,default:o.defaults.VvButton.fab},palette:{type:String,default:o.defaults.VvButton.palette},size:{type:String,default:o.defaults.VvButton.size},transitionClasses:{type:String,default:o.transitions.classes()},type:{type:String,default:o.defaults.VvButton.type,validator:r=>et.includes(r)}},setup(r){const t=r,e=Object.keys(p("vv",{})).length>0?p("vv"):o;let n=C(()=>{var a,i,l,u,d,c,g,b,x,k,y,m;let s=[];return t.block===!0&&t.fab===!1?((a=e==null?void 0:e.buttons)!=null&&a.blockBase()&&s.push(e.buttons.blockBase()),t.size!==""&&((l=(i=e==null?void 0:e.buttons)==null?void 0:i.blockSizes)==null?void 0:l[t.size])&&s.push(e.buttons.blockSizes[t.size])):t.fab===!0&&t.block===!1?((u=e==null?void 0:e.buttons)!=null&&u.fabBase()&&s.push(e.buttons.fabBase()),t.size!==""&&((c=(d=e==null?void 0:e.buttons)==null?void 0:d.fabSizes)==null?void 0:c[t.size])&&s.push(e.buttons.fabSizes[t.size])):((g=e==null?void 0:e.buttons)!=null&&g.base()&&s.push(e.buttons.base()),t.size!==""&&((x=(b=e==null?void 0:e.buttons)==null?void 0:b.sizes)==null?void 0:x[t.size])&&s.push(e.buttons.sizes[t.size])),t.transitionClasses!==""&&s.push(t.transitionClasses),(m=(y=(k=e==null?void 0:e.buttons)==null?void 0:k.palettes)==null?void 0:y[t.palette])!=null&&m[t.color]&&s.push(e.buttons.palettes[t.palette][t.color]),s.join(" ")});return(s,a)=>(h(),w("button",{type:r.type,class:V(f(n))},[B(s.$slots,"default")],10,rt))}};var st=["light","dark"];const at={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},lt=P("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1),nt=[lt],it={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},ut=P("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1),dt=[ut],bt={name:"VvColorModeButton",props:{mode:{type:String,default:o.defaults.VvColorModeButton.mode,validator:r=>st.includes(r)},color:{type:String,default:o.defaults.VvColorModeButton.color},palette:{type:String,default:o.defaults.VvColorModeButton.palette},size:{type:String,default:o.defaults.VvColorModeButton.size},groundDark:{type:String,default:o.colorMode.dark.ground},groundDarkHex:{type:String,default:o.colorMode.dark.hex},groundLight:{type:String,default:o.colorMode.light.ground},groundLightHex:{type:String,default:o.colorMode.light.hex},textDark:{type:String,default:o.colorMode.dark.text},textLight:{type:String,default:o.colorMode.light.text},titleDark:{type:String,default:o.colorMode.dark.title},titleLight:{type:String,default:o.colorMode.light.title}},setup(r){const t=r,e=T(t.mode),n=C(()=>e.value==="dark"?"sun":"moon"),s=C(()=>e.value==="dark"?t.titleLight:t.titleDark);G(()=>{document&&e.value==="light"&&(document.documentElement.classList.remove("dark",t.groundDark,t.textDark),document.documentElement.classList.add(t.groundLight,t.textLight),document.documentElement.style.backgroundColor=t.groundLightHex),document&&e.value==="dark"&&(document.documentElement.classList.remove(t.groundLight,t.textLight),document.documentElement.classList.add("dark",t.groundDark,t.textDark),document.documentElement.style.backgroundColor=t.groundDarkHex)});function a(i){document&&e.value==="light"?(e.value="dark",localStorage.setItem("colorMode","dark"),document.documentElement.classList.remove(t.groundLight,t.textLight),document.documentElement.classList.add("dark",t.groundDark,t.textDark),document.documentElement.style.backgroundColor=t.groundDarkHex):document&&e.value==="dark"&&(e.value="light",localStorage.setItem("colorMode","light"),document.documentElement.classList.remove("dark",t.groundDark,t.textDark),document.documentElement.classList.add(t.groundLight,t.textLight),document.documentElement.style.backgroundColor=t.groundLightHex)}return(i,l)=>(h(),L(ot,{title:f(s),onClick:l[0]||(l[0]=u=>a()),class:"rounded-full",color:r.color,fab:!0,palette:r.palette,type:"button",size:r.size},{default:j(()=>[f(n)==="moon"?(h(),w("svg",at,nt)):E("",!0),f(n)==="sun"?(h(),w("svg",it,dt)):E("",!0)]),_:1},8,["title","color","palette","size"]))}},xt={name:"VvEl",props:{borderPalette:{type:String,default:o.defaults.VvEl.borderPalette},borderColor:{type:String,default:o.defaults.VvEl.borderColor},groundPalette:{type:String,default:o.defaults.VvEl.groundPalette},groundColor:{type:String,default:o.defaults.VvEl.groundColor},tag:{type:String,default:o.defaults.VvEl.tag},textPalette:{type:String,default:o.defaults.VvEl.textPalette},textColor:{type:String,default:o.defaults.VvEl.textColor}},setup(r){const t=r,e=Object.keys(p("vv",{})).length>0?p("vv"):o;let n=C(()=>{var a,i,l,u,d,c,g,b,x;let s=[];return(l=(i=(a=e==null?void 0:e.borders)==null?void 0:a.palettes)==null?void 0:i[t.borderPalette])!=null&&l[t.borderColor]&&s.push(e.borders.palettes[t.borderPalette][t.borderColor]),(c=(d=(u=e==null?void 0:e.grounds)==null?void 0:u.palettes)==null?void 0:d[t.groundPalette])!=null&&c[t.groundColor]&&s.push(e.grounds.palettes[t.groundPalette][t.groundColor]),(x=(b=(g=e==null?void 0:e.text)==null?void 0:g.palettes)==null?void 0:b[t.textPalette])!=null&&x[t.textColor]&&s.push(e.text.palettes[t.textPalette][t.textColor]),s.join(" ")});return(s,a)=>(h(),L(I(r.tag),{class:V(f(n))},{default:j(()=>[B(s.$slots,"default")]),_:3},8,["class"]))}};export{o as V,ot as _,bt as a,xt as b};
