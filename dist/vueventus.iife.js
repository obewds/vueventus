var VueVentus=function(a,r){"use strict";var q=Object.defineProperty,J=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var G=(a,r,n)=>r in a?q(a,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[r]=n,C=(a,r)=>{for(var n in r||(r={}))Q.call(r,n)&&G(a,n,r[n]);if(L)for(var n of L(r))R.call(r,n)&&G(a,n,r[n]);return a},T=(a,r)=>J(a,O(r));var n={default:"text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200",error:"text-rose-500 hover:text-rose-600 dark:text-rose-300 dark:hover:text-rose-200",primary:"text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200",secondary:"text-teal-500 hover:text-teal-600 dark:text-teal-300 dark:hover:text-teal-200",success:"text-green-600 hover:text-green-700 dark:text-green-300 dark:hover:text-green-200"},B={"":"",default:"border-gray-200 dark:border-gray-600",error:"border-rose-600 dark:border-rose-300",primary:"border-blue-600 dark:border-blue-300",secondary:"border-violet-600 dark:border-violet-300",success:"border-green-600 dark:border-green-300"},z={default:"text-gray-500 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-gray-500 active:bg-gray-600 border-gray-300 hover:border-gray-800 focus:ring-gray-400 focus:border-gray-900",error:"text-rose-500 dark:text-rose-300 hover:text-white dark:hover:text-white hover:bg-rose-500 active:bg-rose-600 border-rose-300 hover:border-rose-800 focus:ring-rose-400 focus:border-rose-900",primary:"text-blue-500 dark:text-blue-300 hover:text-white dark:hover:text-white hover:bg-blue-500 active:bg-blue-600 border-blue-300 hover:border-blue-800 focus:ring-blue-400 focus:border-blue-900",secondary:"text-teal-600 dark:text-teal-500 hover:text-white dark:hover:text-white hover:bg-teal-600 active:bg-teal-800 border-teal-600 hover:border-teal-800 focus:ring-teal-500 focus:border-teal-900",success:"text-green-600 dark:text-green-500 hover:text-white dark:hover:text-white hover:bg-green-600 active:bg-green-800 border-green-600 hover:border-green-800 focus:ring-green-500 focus:border-green-900"},w={default:"text-gray-800 hover:text-black bg-gray-100 hover:bg-gray-200 active:bg-gray-300 border-gray-900 focus:border-black focus:ring-gray-400",error:"text-white bg-rose-500 hover:bg-rose-600 active:bg-rose-700 border-rose-800 focus:ring-rose-400 focus:border-rose-900",primary:"text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 border-blue-800 focus:ring-blue-400 focus:border-blue-900",secondary:"text-gray-900 hover:text-white bg-teal-500 hover:bg-teal-600 active:text-white active:bg-teal-700 border-teal-800 focus:ring-teal-400 focus:border-teal-900",success:"text-gray-900 hover:text-white bg-green-500 hover:bg-green-600 active:text-white active:bg-green-700 border-green-800 focus:ring-green-400 focus:border-green-900"},v={default:"text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",error:"text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",primary:"text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",secondary:"text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",success:"text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"},M={default:"",error:"text-white bg-rose-500 dark:bg-rose-600",primary:"text-white bg-blue-500 dark:bg-blue-600",secondary:"text-white bg-violet-500 dark:bg-violet-600",success:"text-white bg-green-500 dark:bg-green-600"},E={default:"text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",error:"text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",primary:"text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",secondary:"text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",success:"text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300"},D={default:"text-black bg-gray-100 dark:bg-gray-200",error:"text-black bg-rose-200 dark:bg-rose-300",primary:"text-black bg-blue-200 dark:bg-blue-300",secondary:"text-black bg-violet-200 dark:bg-violet-300",success:"text-black bg-green-300 dark:bg-green-400"},j={default:"",error:"text-rose-500 dark:text-rose-300",primary:"text-blue-500 dark:text-blue-300",secondary:"text-violet-500 dark:text-violet-300",success:"text-green-600 dark:text-green-300"},_={durations:{1e3:"duration-1000",700:"duration-700",500:"duration-500",300:"duration-300",200:"duration-200",150:"duration-150",100:"duration-100",75:"duration-75"},easings:{linear:"ease-linear",in:"ease-in",out:"ease-out",inOut:"ease-in-out"},transitions:{default:"transition",all:"transition-all",colors:"transition-colors",opacity:"transition-opacity",shadow:"transition-shadow",transform:"transition-transform"},getDurationClasses:function(o){const t=o&&this.durations[o]?o:"300";return this.durations[t]},getEasingClasses:function(o){const t=o&&this.easings[o]?o:"inOut";return this.easings[t]},getTransitionClasses:function(o){const t=o&&this.transitions[o]?o:"default";return this.transitions[t]},custom:function(o){const t={transitions:o&&o.transitions?o.transitions:"",easings:o&&o.easings?o.easings:"",durations:o&&o.durations?o.durations:""};return[this.getTransitionClasses(t.transitions),this.getEasingClasses(t.easings),this.getDurationClasses(t.durations)].join(" ")},classes:function(o,t,e){const l=o||"",s=t||"",i=e||"";return[this.getTransitionClasses(l),this.getEasingClasses(s),this.getDurationClasses(i)].join(" ")}},d={border:"border border-transparent",cursor:"cursor-pointer",disabled:"disabled:opacity-25",display:"inline-flex items-center",focus:"focus:outline-none focus:ring focus:ring-opacity-50",text:"font-semibold uppercase tracking-widest",base:function(){return[this.border,this.cursor,this.disabled,this.display,this.focus,this.text].join(" ")},sizes:{"4xs":"px-1 py-px text-xxs","3xs":"px-1.5 py-0.5 text-xxs","2xs":"px-2 py-1 text-xs",xs:"px-2.5 py-1.5 text-xs",sm:"px-2.5 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-4 py-2 text-base",xl:"px-6 py-3 text-base","2xl":"px-7 py-4 text-lg","3xl":"px-8 py-4 text-xl","4xl":"px-8 py-5 text-xl"},getSizeClasses:function(o){const t=o&&this.sizes[o]?o:"md";return this.sizes[t]},classes:function(o){const t=o||"";return[this.base(),this.getSizeClasses(t)].join(" ")},blockDisplay:"block w-full flex flex-col items-center justify-center",blockBase:function(){return[this.border,this.cursor,this.disabled,this.blockDisplay,this.focus,this.text].join(" ")},blockSizes:{"4xs":"px-1 py-1 text-2xs","3xs":"px-2.5 py-1.5 text-2xs","2xs":"px-2.5 py-1.5 text-xs",xs:"px-4 py-2 text-sm",sm:"px-4 py-2 text-base",md:"px-6 py-3 text-base",lg:"px-6 py-3 text-lg",xl:"px-7 py-3.5 text-lg","2xl":"px-8 py-5 text-xl","3xl":"px-9 py-5 text-2xl","4xl":"px-10 py-6 text-2xl"},getBlockSizeClasses:function(o){const t=o&&this.blockSizes[o]?o:"md";return this.blockSizes[t]},blockClasses:function(o){const t=o||"";return[this.blockBase(),this.getBlockSizeClasses(t)].join(" ")},fabDisplay:"inline-flex items-center items-center justify-center",fabBase:function(){return[this.border,this.cursor,this.disabled,this.fabDisplay,this.focus,this.text].join(" ")},fabSizes:{"4xs":"w-6 h-6 text-xxs","3xs":"w-7 h-7 text-xxs","2xs":"w-8 h-8 text-xs",xs:"w-9 h-9 text-xs",sm:"w-10 h-10 text-sm",md:"w-11 h-11 text-sm",lg:"w-12 h-12 text-base",xl:"w-14 h-14 text-base","2xl":"w-16 h-16 text-lg","3xl":"w-20 h-20 text-xl","4xl":"w-24 h-24 text-xl"},getFabSizeClasses:function(o){const t=o&&this.fabSizes[o]?o:"md";return this.fabSizes[t]},fabClasses:function(o){const t=o||"";return[this.fabBase(),this.getFabSizeClasses(t)].join(" ")}},c={anchors:{palettes:{default:n}},borders:{palettes:{default:B}},buttons:T(C({},d),{palettes:{outline:z,solid:w}}),colorMode:{dark:{bg:"bg-gray-900",text:"text-gray-100"},light:{bg:"bg-gray-100",text:"text-gray-900"}},ground:{palettes:{console:v,default:M,monochromatic:E,pastel:D}},text:{palettes:{default:j}},transitions:C({},_)};const H=["type"],V={name:"VvButton",props:{block:{type:Boolean,default:!1},color:{type:String,default:"default"},fab:{type:Boolean,default:!1},palette:{type:String,default:"solid"},size:{type:String,default:"md"},transitionClasses:{type:String,default:c.transitions.classes()},type:{type:String,default:"button",validator:o=>["button","submit","reset"].includes(o)}},setup(o){const t=o,e=Object.keys(r.inject("vv",{})).length>0?r.inject("vv"):c;let l=r.computed(()=>{var i,b,g,u,x,f,h,k,p,y,m,S;let s=[];return t.block===!0&&t.fab===!1?((i=e==null?void 0:e.buttons)!=null&&i.blockBase()&&s.push(e.buttons.blockBase()),t.size!==""&&((g=(b=e==null?void 0:e.buttons)==null?void 0:b.blockSizes)==null?void 0:g[t.size])&&s.push(e.buttons.blockSizes[t.size])):t.fab===!0&&t.block===!1?((u=e==null?void 0:e.buttons)!=null&&u.fabBase()&&s.push(e.buttons.fabBase()),t.size!==""&&((f=(x=e==null?void 0:e.buttons)==null?void 0:x.fabSizes)==null?void 0:f[t.size])&&s.push(e.buttons.fabSizes[t.size])):((h=e==null?void 0:e.buttons)!=null&&h.base()&&s.push(e.buttons.base()),t.size!==""&&((p=(k=e==null?void 0:e.buttons)==null?void 0:k.sizes)==null?void 0:p[t.size])&&s.push(e.buttons.sizes[t.size])),t.transitionClasses!==""&&s.push(t.transitionClasses),(S=(m=(y=e==null?void 0:e.buttons)==null?void 0:y.palettes)==null?void 0:m[t.palette])!=null&&S[t.color]&&s.push(e.buttons.palettes[t.palette][t.color]),s.join(" ")});return(s,i)=>(r.openBlock(),r.createElementBlock("button",{type:o.type,class:r.normalizeClass(r.unref(l))},[r.renderSlot(s.$slots,"default")],10,H))}},P={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},$=[r.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)],N={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},A=[r.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)],F={name:"VvColorModeButton",props:{mode:{type:String,default:"light",validator:o=>["light","dark"].includes(o)},color:{type:String,default:"default"},fab:{type:Boolean,default:!0},palette:{type:String,default:"outline"},size:{type:String,default:"xs"},type:{type:String,default:"button"},bgClassDark:{type:String,default:c.colorMode.dark.bg},bgClassLight:{type:String,default:c.colorMode.light.bg},bgHexDark:{type:String,default:"#242426"},bgHexLight:{type:String,default:"#e1e1e3"},textClassDark:{type:String,default:c.colorMode.dark.text},textClassLight:{type:String,default:c.colorMode.light.text}},setup(o){const t=o,e=Object.keys(r.inject("vv",{})).length>0?r.inject("vv"):c,l=r.ref(t.mode),s=r.computed(()=>l.value==="dark"?"sun":"moon"),i=r.computed(()=>l.value==="dark"?"Enable Light Mode":"Enable Dark Mode");l.value==="light"&&document&&(document.documentElement.classList.remove("dark",e.colorMode.dark.bg,e.colorMode.dark.text),document.documentElement.classList.add(e.colorMode.light.bg,e.colorMode.light.text),document.documentElement.style.backgroundColor=t.bgHexLight),l.value==="dark"&&document&&(document.documentElement.classList.remove(e.colorMode.light.bg,e.colorMode.light.text),document.documentElement.classList.add("dark",e.colorMode.dark.bg,e.colorMode.dark.text),document.documentElement.style.backgroundColor=t.bgHexDark);function b(g){l.value==="light"&&document?(l.value="dark",localStorage.setItem("colorMode","dark"),document.documentElement.classList.remove(e.colorMode.light.bg,e.colorMode.light.text),document.documentElement.classList.add("dark",e.colorMode.dark.bg,e.colorMode.dark.text),document.documentElement.style.backgroundColor=t.bgHexDark):l.value==="dark"&&document&&(l.value="light",localStorage.setItem("colorMode","light"),document.documentElement.classList.remove("dark",e.colorMode.dark.bg,e.colorMode.dark.text),document.documentElement.classList.add(e.colorMode.light.bg,e.colorMode.light.text),document.documentElement.style.backgroundColor=t.bgHexLight)}return(g,u)=>(r.openBlock(),r.createBlock(V,{title:r.unref(i),onClick:u[0]||(u[0]=x=>b()),class:"rounded-full",color:o.color,fab:o.fab,palette:o.palette,type:o.type,size:o.size},{default:r.withCtx(()=>[r.unref(s)==="moon"?(r.openBlock(),r.createElementBlock("svg",P,$)):r.createCommentVNode("",!0),r.unref(s)==="sun"?(r.openBlock(),r.createElementBlock("svg",N,A)):r.createCommentVNode("",!0)]),_:1},8,["title","color","fab","palette","type","size"]))}},I={name:"VvEl",props:{borderPalette:{type:String,default:"default"},borderColor:{type:String,default:"default"},groundPalette:{type:String,default:"default"},groundColor:{type:String,default:"default"},tag:{type:String,default:"div"},textPalette:{type:String,default:"default"},textColor:{type:String,default:"default"}},setup(o){const t=o,e=Object.keys(r.inject("vv",{})).length>0?r.inject("vv"):{buttons:{base:d.base(),palettes:{outline:z,solid:w},sizes:d.sizes,blockBase:d.blockBase(),blockSizes:d.blockSizes,fabBase:d.fabBase(),fabSizes:d.fabSizes}};let l=r.computed(()=>{var i,b,g,u,x,f,h,k,p,y,m,S;let s=[];return t.block===!0&&t.fab===!1?((i=e==null?void 0:e.buttons)!=null&&i.blockBase&&s.push(e.buttons.blockBase),t.size!==""&&((g=(b=e==null?void 0:e.buttons)==null?void 0:b.blockSizes)==null?void 0:g[t.size])&&s.push(e.buttons.blockSizes[t.size])):t.fab===!0&&t.block===!1?((u=e==null?void 0:e.buttons)!=null&&u.fabBase&&s.push(e.buttons.fabBase),t.size!==""&&((f=(x=e==null?void 0:e.buttons)==null?void 0:x.fabSizes)==null?void 0:f[t.size])&&s.push(e.buttons.fabSizes[t.size])):((h=e==null?void 0:e.buttons)!=null&&h.base&&s.push(e.buttons.base),t.size!==""&&((p=(k=e==null?void 0:e.buttons)==null?void 0:k.sizes)==null?void 0:p[t.size])&&s.push(e.buttons.sizes[t.size])),t.transitionClasses!==""&&s.push(t.transitionClasses),(S=(m=(y=e==null?void 0:e.buttons)==null?void 0:y.palettes)==null?void 0:m[t.palette])!=null&&S[t.color]&&s.push(e.buttons.palettes[t.palette][t.color]),s.join(" ")});return(s,i)=>(r.openBlock(),r.createBlock(r.resolveDynamicComponent(o.tag),{class:r.normalizeClass(r.unref(l))},{default:r.withCtx(()=>[r.renderSlot(s.$slots,"default")]),_:3},8,["class"]))}};return a.AnchorDefault=n,a.BorderDefault=B,a.ButtonOutline=z,a.ButtonSolid=w,a.Buttons=d,a.GroundConsole=v,a.GroundDefault=M,a.GroundMonochromatic=E,a.GroundPastel=D,a.TextDefault=j,a.Transitions=_,a.VvButton=V,a.VvColorModeButton=F,a.VvConfig=c,a.VvEl=I,Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),a}({},Vue);
