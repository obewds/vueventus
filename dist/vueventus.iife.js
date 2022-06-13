var VueVentus=function(s,o){"use strict";var Tt=Object.defineProperty,Ot=Object.defineProperties;var Pt=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var $t=Object.prototype.hasOwnProperty,It=Object.prototype.propertyIsEnumerable;var J=(s,o,u)=>o in s?Tt(s,o,{enumerable:!0,configurable:!0,writable:!0,value:u}):s[o]=u,y=(s,o)=>{for(var u in o||(o={}))$t.call(o,u)&&J(s,u,o[u]);if(Y)for(var u of Y(o))It.call(o,u)&&J(s,u,o[u]);return s},z=(s,o)=>Ot(s,Pt(o));var u={align:"",decoration:"",family:"",lineHeight:"",smoothing:"subpixel-antialiased",spacing:"",weight:"",wordBreak:"",base:function(){return[this.align,this.decoration,this.family,this.lineHeight,this.smoothing,this.spacing,this.weight,this.wordBreak].join(" ").trim()},sizes:{"5xs":"text-5xs","4xs":"text-4xs","3xs":"text-3xs","2xs":"text-2xs",xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl","3xl":"text-3xl","4xl":"text-4xl","5xl":"text-5xl","6xl":"text-6xl","7xl":"text-7xl","8xl":"text-8xl","9xl":"text-9xl","10xl":"text-10xl","11xl":"text-11xl","12xl":"text-12xl"},getSizeClasses:function(e){const t=e&&this.sizes[e]?e:"md";return this.sizes[t]},classes:function(e){const t=e||"";return[this.base(),this.getSizeClasses(t)].join(" ").trim()}},k={durations:{1200:"duration-1200",1150:"duration-1150",1100:"duration-1100",1050:"duration-1050",1e3:"duration-1000",950:"duration-950",900:"duration-900",850:"duration-850",800:"duration-800",750:"duration-750",700:"duration-700",650:"duration-650",600:"duration-600",550:"duration-550",500:"duration-500",475:"duration-475",450:"duration-450",425:"duration-425",400:"duration-400",375:"duration-375",350:"duration-350",325:"duration-325",300:"duration-300",275:"duration-275",250:"duration-250",225:"duration-225",200:"duration-200",175:"duration-175",150:"duration-150",125:"duration-125",100:"duration-100",75:"duration-75",50:"duration-50",25:"duration-25"},easings:{linear:"ease-linear",in:"ease-in",out:"ease-out",inOut:"ease-in-out"},transitions:{default:"transition",all:"transition-all",colors:"transition-colors",none:"transition-none",opacity:"transition-opacity",shadow:"transition-shadow",transform:"transition-transform"},getDurationClasses:function(e){const t=e&&this.durations[e]?e:"300";return this.durations[t]},getEasingClasses:function(e){const t=e&&this.easings[e]?e:"inOut";return this.easings[t]},getTransitionClasses:function(e){const t=e&&this.transitions[e]?e:"default";return this.transitions[t]},custom:function(e){const t={transitions:e&&e.transitions?e.transitions:"",easings:e&&e.easings?e.easings:"",durations:e&&e.durations?e.durations:""};return[this.getTransitionClasses(t.transitions),this.getEasingClasses(t.easings),this.getDurationClasses(t.durations)].join(" ").trim()},classes:function(e,t,r){const l=e||"",a=t||"",i=r||"";return[this.getTransitionClasses(l),this.getEasingClasses(a),this.getDurationClasses(i)].join(" ").trim()}},B={cursor:"cursor-pointer",display:"",focus:"",text:"underline underline-offset-2",transition:k.classes("colors","inOut","300"),base:function(){return[this.cursor,this.display,this.focus,this.text,this.transition].join(" ").trim()},sizes:u.sizes,getSizeClasses:function(e){const t=e&&this.sizes[e]?e:"md";return this.sizes[t]},classes:function(e){const t=e||"";return[this.base(),this.getSizeClasses(t)].join(" ").trim()}},C={border:"border border-transparent",cursor:"cursor-pointer",disabled:"disabled:opacity-25",display:"inline-flex items-center",focus:"focus:outline-none focus:ring focus:ring-opacity-50",text:"font-semibold uppercase tracking-widest",transition:k.classes("all","inOut","300"),base:function(){return[this.border,this.cursor,this.disabled,this.display,this.focus,this.text,this.transition].join(" ").trim()},sizes:{"4xs":"px-1 py-px text-xxs","3xs":"px-1.5 py-0.5 text-xxs","2xs":"px-2 py-1 text-xs",xs:"px-2.5 py-1.5 text-xs",sm:"px-2.5 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-4 py-2 text-base",xl:"px-6 py-3 text-base","2xl":"px-7 py-4 text-lg","3xl":"px-8 py-4 text-xl","4xl":"px-8 py-5 text-xl"},getSizeClasses:function(e){const t=e&&this.sizes[e]?e:"md";return this.sizes[t]},classes:function(e){const t=e||"";return[this.base(),this.getSizeClasses(t)].join(" ").trim()},blockDisplay:"block w-full flex flex-col items-center justify-center",blockBase:function(){return[this.border,this.cursor,this.disabled,this.blockDisplay,this.focus,this.text,this.transition].join(" ").trim()},blockSizes:{"4xs":"px-1 py-1 text-2xs","3xs":"px-2.5 py-1.5 text-2xs","2xs":"px-2.5 py-1.5 text-xs",xs:"px-4 py-2 text-sm",sm:"px-4 py-2 text-base",md:"px-6 py-3 text-base",lg:"px-6 py-3 text-lg",xl:"px-7 py-3.5 text-lg","2xl":"px-8 py-5 text-xl","3xl":"px-9 py-5 text-2xl","4xl":"px-10 py-6 text-2xl"},getBlockSizeClasses:function(e){const t=e&&this.blockSizes[e]?e:"md";return this.blockSizes[t]},blockClasses:function(e){const t=e||"";return[this.blockBase(),this.getBlockSizeClasses(t)].join(" ").trim()},fabDisplay:"inline-flex items-center items-center justify-center",fabBase:function(){return[this.border,this.cursor,this.disabled,this.fabDisplay,this.focus,this.text,this.transition].join(" ").trim()},fabSizes:{"4xs":"w-6 h-6 text-xxs","3xs":"w-7 h-7 text-xxs","2xs":"w-8 h-8 text-xs",xs:"w-9 h-9 text-xs",sm:"w-10 h-10 text-sm",md:"w-11 h-11 text-sm",lg:"w-12 h-12 text-base",xl:"w-14 h-14 text-base","2xl":"w-16 h-16 text-lg","3xl":"w-20 h-20 text-xl","4xl":"w-24 h-24 text-xl"},getFabSizeClasses:function(e){const t=e&&this.fabSizes[e]?e:"md";return this.fabSizes[t]},fabClasses:function(e){const t=e||"";return[this.fabBase(),this.getFabSizeClasses(t)].join(" ").trim()}},M={border:"border",display:"block w-full",outline:"outline-none outline-offset-0 outline-2",placeholder:"",ring:"",text:"",transition:k.classes("all","inOut","300"),base:function(){return[this.border,this.display,this.outline,this.placeholder,this.ring,this.text,this.transition].join(" ").trim()},sizes:{xs:"px-2 py-1.5 text-sm",sm:"px-3 py-2 text-base",md:"px-3 py-2 text-lg",lg:"px-4 py-3 text-xl",xl:"px-4 py-3 text-2xl","2xl":"px-5 py-4 text-3xl"},getSizeClasses:function(e){const t=e&&this.sizes[e]?e:"md";return this.sizes[t]},classes:function(e){const t=e||"";return[this.base(),this.getSizeClasses(t)].join(" ").trim()}},E={default:"text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200",error:"text-rose-500 hover:text-rose-600 dark:text-rose-300 dark:hover:text-rose-200",primary:"text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200",secondary:"text-teal-500 hover:text-teal-600 dark:text-teal-300 dark:hover:text-teal-200",success:"text-green-600 hover:text-green-700 dark:text-green-300 dark:hover:text-green-200"},_={"":"",default:"border-gray-200 dark:border-gray-600",error:"border-rose-600 dark:border-rose-300",primary:"border-blue-600 dark:border-blue-300",secondary:"border-violet-600 dark:border-violet-300",success:"border-green-600 dark:border-green-300"},j={default:"text-gray-500 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-gray-500 active:bg-gray-600 border-gray-300 hover:border-gray-800 focus:ring-gray-400 focus:border-gray-900",error:"text-rose-500 dark:text-rose-300 hover:text-white dark:hover:text-white hover:bg-rose-500 active:bg-rose-600 border-rose-300 hover:border-rose-800 focus:ring-rose-400 focus:border-rose-900",primary:"text-blue-500 dark:text-blue-300 hover:text-white dark:hover:text-white hover:bg-blue-500 active:bg-blue-600 border-blue-300 hover:border-blue-800 focus:ring-blue-400 focus:border-blue-900",secondary:"text-teal-600 dark:text-teal-500 hover:text-white dark:hover:text-white hover:bg-teal-600 active:bg-teal-800 border-teal-600 hover:border-teal-800 focus:ring-teal-500 focus:border-teal-900",success:"text-green-600 dark:text-green-500 hover:text-white dark:hover:text-white hover:bg-green-600 active:bg-green-800 border-green-600 hover:border-green-800 focus:ring-green-500 focus:border-green-900"},A={default:"text-gray-800 hover:text-black bg-gray-100 hover:bg-gray-200 active:bg-gray-300 border-gray-900 focus:border-black focus:ring-gray-400",error:"text-white bg-rose-500 hover:bg-rose-600 active:bg-rose-700 border-rose-800 focus:ring-rose-400 focus:border-rose-900",primary:"text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 border-blue-800 focus:ring-blue-400 focus:border-blue-900",secondary:"text-gray-900 hover:text-white bg-teal-500 hover:bg-teal-600 active:text-white active:bg-teal-700 border-teal-800 focus:ring-teal-400 focus:border-teal-900",success:"text-gray-900 hover:text-white bg-green-500 hover:bg-green-600 active:text-white active:bg-green-700 border-green-800 focus:ring-green-400 focus:border-green-900"},D={default:"text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",error:"text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",primary:"text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",secondary:"text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",success:"text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"},L={default:"",error:"text-white bg-rose-500 dark:bg-rose-600",primary:"text-white bg-blue-500 dark:bg-blue-600",secondary:"text-white bg-violet-500 dark:bg-violet-600",success:"text-white bg-green-500 dark:bg-green-600"},T={default:"text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",error:"text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",primary:"text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",secondary:"text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",success:"text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300"},O={default:"text-black bg-gray-100 dark:bg-gray-200",error:"text-black bg-rose-200 dark:bg-rose-300",primary:"text-black bg-blue-200 dark:bg-blue-300",secondary:"text-black bg-violet-200 dark:bg-violet-300",success:"text-black bg-green-300 dark:bg-green-400"},P={default:"bg-gray-50 dark:bg-gray-800 focus:bg-white dark:focus:bg-gray-900 border-gray-300 dark:border-gray-600 focus:border-lightBlue-500 focus:outline-lightBlue-500/50 placeholder:text-gray-200 dark:placeholder:text-gray-600",success:"text-green-700 dark:text-green-200 bg-green-100 dark:bg-green-800 focus:bg-green-50 dark:focus:bg-green-900 border-green-300 dark:border-green-600 focus:border-green-500 focus:outline-green-500/50 placeholder:text-green-300 dark:placeholder:text-green-600",error:"text-rose-700 dark:text-rose-200 bg-rose-100 dark:bg-rose-800 focus:bg-rose-50 dark:focus:bg-rose-900 border-rose-300 dark:border-rose-600 focus:border-rose-500 focus:outline-rose-500/50 placeholder:text-rose-300 dark:placeholder:text-rose-600"},$={default:"",error:"text-rose-500 dark:text-rose-300",primary:"text-blue-500 dark:text-blue-300",secondary:"text-violet-500 dark:text-violet-300",success:"text-green-600 dark:text-green-300"},n={anchors:z(y({},B),{palettes:{default:E}}),borders:{palettes:{default:_}},buttons:z(y({},C),{palettes:{outline:j,solid:A}}),inputs:z(y({},M),{palettes:{validation:P}}),colorMode:{dark:{bg:"bg-gray-900",ground:"bg-gray-900",hex:"#242426",text:"text-gray-100",title:"Enable Dark Mode"},light:{bg:"bg-gray-100",ground:"bg-gray-100",hex:"#e1e1e3",text:"text-gray-900",title:"Enable Light Mode"}},grounds:{palettes:{console:D,default:L,monochromatic:T,pastel:O}},text:z(y({},u),{palettes:{default:$}}),transitions:y({},k),defaults:{VvAnchor:{button:!1,buttonBlock:!1,buttonFab:!1,buttonSize:"md",color:"default",external:!1,href:"#",palette:"default"},VvButton:{block:!1,color:"primary",fab:!1,palette:"solid",size:"md",type:"button"},VvColorModeButton:{color:"default",mode:"light",palette:"outline",size:"xs"},VvEl:{borderPalette:"default",borderColor:"",groundPalette:"default",groundColor:"default",tag:"div",textPalette:"default",textColor:"default"}}},Q=function(t){return X(t)&&!Z(t)};function X(e){return!!e&&typeof e=="object"}function Z(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||et(e)}var K=typeof Symbol=="function"&&Symbol.for,tt=K?Symbol.for("react.element"):60103;function et(e){return e.$$typeof===tt}function rt(e){return Array.isArray(e)?[]:{}}function S(e,t){return t.clone!==!1&&t.isMergeableObject(e)?m(rt(e),e,t):e}function ot(e,t,r){return e.concat(t).map(function(l){return S(l,r)})}function at(e,t){if(!t.customMerge)return m;var r=t.customMerge(e);return typeof r=="function"?r:m}function st(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return e.propertyIsEnumerable(t)}):[]}function I(e){return Object.keys(e).concat(st(e))}function F(e,t){try{return t in e}catch{return!1}}function nt(e,t){return F(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function lt(e,t,r){var l={};return r.isMergeableObject(e)&&I(e).forEach(function(a){l[a]=S(e[a],r)}),I(t).forEach(function(a){nt(e,a)||(F(e,a)&&r.isMergeableObject(t[a])?l[a]=at(a,r)(e[a],t[a],r):l[a]=S(t[a],r))}),l}function m(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||ot,r.isMergeableObject=r.isMergeableObject||Q,r.cloneUnlessOtherwiseSpecified=S;var l=Array.isArray(t),a=Array.isArray(e),i=l===a;return i?l?r.arrayMerge(e,t,r):lt(e,t,r):S(t,r)}m.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(l,a){return m(l,a,r)},{})};var it=m,ut=it;function dt(e){return Object.keys(e).length>0?ut(n,e):n}var ct=["audio/flac","audio/mp4","audio/mpeg","audio/ogg","audio/x-flac","audio/webm"],H=["button","submit","reset"],N=["light","dark"],gt=["up","down","left","right",""],bt=["style","title","address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","main","nav","section","blockquote","dd","div","dl","dt","figcaption","figure","li","menu","ol","p","pre","ul","a","abbr","b","bdi","bdo","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","audio","map","video","iframe","object","picture","portal","svg","math","canvas","del","ins","caption","colgroup","table","tbody","td","tfoot","th","thead","tr","button","datalist","fieldset","form","input","label","legend","meter","optgroup","option","output","progress","select","textarea","details","dialog","summary"],ft=["fab","fad","fal","far","fas","fat"],ht=["xs","sm","1x","lg","2x","3x","4x","5x","6x","7x","8x","9x","10x"],xt=[1,2,3,4,5,6],pt=["image/gif","image/jpeg","image/png","image/svg+xml","image/webp"],mt=["color","date","datetime-local","email","month","number","password","search","tel","text","time","url"],yt=["video/mp4","video/ogg","video/webm"];const kt=["href"],St=["href"],Vt={__name:"VvAnchor",props:{button:{type:Boolean,default:n.defaults.VvAnchor.button},buttonBlock:{type:Boolean,default:n.defaults.VvAnchor.buttonBlock},buttonFab:{type:Boolean,default:n.defaults.VvAnchor.buttonFab},buttonSize:{type:String,default:n.defaults.VvAnchor.buttonSize},color:{type:String,default:n.defaults.VvAnchor.color},external:{type:Boolean,default:!1},href:{type:String,default:n.defaults.VvAnchor.href},palette:{type:String,default:n.defaults.VvAnchor.palette}},setup(e){const t=e,r=Object.keys(o.inject("vv",{})).length>0?o.inject("vv"):n;let l=o.computed(()=>{var i,c,d,g,b,f,h,x,p,V,w,v,U,R,q,W;let a=[];return t.button===!0?(t.buttonBlock===!0&&t.buttonFab===!1?((i=r==null?void 0:r.buttons)!=null&&i.blockBase()&&a.push(r.buttons.blockBase()),t.buttonSize!==""&&((d=(c=r==null?void 0:r.buttons)==null?void 0:c.blockSizes)==null?void 0:d[t.buttonSize])&&a.push(r.buttons.blockSizes[t.buttonSize])):t.buttonBlock===!1&&t.buttonFab===!0?((g=r==null?void 0:r.buttons)!=null&&g.fabBase()&&a.push(r.buttons.fabBase()),t.buttonSize!==""&&((f=(b=r==null?void 0:r.buttons)==null?void 0:b.fabSizes)==null?void 0:f[t.buttonSize])&&a.push(r.buttons.fabSizes[t.buttonSize])):((h=r==null?void 0:r.buttons)!=null&&h.base()&&a.push(r.buttons.base()),t.buttonSize!==""&&((p=(x=r==null?void 0:r.buttons)==null?void 0:x.sizes)==null?void 0:p[t.buttonSize])&&a.push(r.buttons.sizes[t.buttonSize])),(v=(w=(V=r==null?void 0:r.buttons)==null?void 0:V.palettes)==null?void 0:w[t.palette])!=null&&v[t.color]&&a.push(r.buttons.palettes[t.palette][t.color])):((U=r==null?void 0:r.anchors)!=null&&U.base()&&a.push(r.anchors.base()),(W=(q=(R=r==null?void 0:r.anchors)==null?void 0:R.palettes)==null?void 0:q[t.palette])!=null&&W[t.color]&&a.push(r.anchors.palettes[t.palette][t.color])),a.join(" ").trim()});return(a,i)=>e.external?(o.openBlock(),o.createElementBlock("a",{key:0,href:e.href,class:o.normalizeClass(o.unref(l)),target:"_blank",rel:"noopener noreferrer"},[o.renderSlot(a.$slots,"default")],10,kt)):(o.openBlock(),o.createElementBlock("a",{key:1,href:e.href,class:o.normalizeClass(o.unref(l))},[o.renderSlot(a.$slots,"default")],10,St))}},wt=["type"],G={__name:"VvButton",props:{block:{type:Boolean,default:n.defaults.VvButton.block},color:{type:String,default:n.defaults.VvButton.color},fab:{type:Boolean,default:n.defaults.VvButton.fab},palette:{type:String,default:n.defaults.VvButton.palette},size:{type:String,default:n.defaults.VvButton.size},type:{type:String,default:n.defaults.VvButton.type,validator:e=>H.includes(e)}},setup(e){const t=e,r=Object.keys(o.inject("vv",{})).length>0?o.inject("vv"):n;let l=o.computed(()=>{var i,c,d,g,b,f,h,x,p,V,w,v;let a=[];return t.block===!0&&t.fab===!1?((i=r==null?void 0:r.buttons)!=null&&i.blockBase()&&a.push(r.buttons.blockBase()),t.size!==""&&((d=(c=r==null?void 0:r.buttons)==null?void 0:c.blockSizes)==null?void 0:d[t.size])&&a.push(r.buttons.blockSizes[t.size])):t.fab===!0&&t.block===!1?((g=r==null?void 0:r.buttons)!=null&&g.fabBase()&&a.push(r.buttons.fabBase()),t.size!==""&&((f=(b=r==null?void 0:r.buttons)==null?void 0:b.fabSizes)==null?void 0:f[t.size])&&a.push(r.buttons.fabSizes[t.size])):((h=r==null?void 0:r.buttons)!=null&&h.base()&&a.push(r.buttons.base()),t.size!==""&&((p=(x=r==null?void 0:r.buttons)==null?void 0:x.sizes)==null?void 0:p[t.size])&&a.push(r.buttons.sizes[t.size])),(v=(w=(V=r==null?void 0:r.buttons)==null?void 0:V.palettes)==null?void 0:w[t.palette])!=null&&v[t.color]&&a.push(r.buttons.palettes[t.palette][t.color]),a.join(" ").trim()});return(a,i)=>(o.openBlock(),o.createElementBlock("button",{type:e.type,class:o.normalizeClass(o.unref(l))},[o.renderSlot(a.$slots,"default")],10,wt))}},vt={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},zt=[o.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)],Bt={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},Ct=[o.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)],Mt={__name:"VvColorModeButton",props:{mode:{type:String,default:n.defaults.VvColorModeButton.mode,validator:e=>N.includes(e)},color:{type:String,default:n.defaults.VvColorModeButton.color},palette:{type:String,default:n.defaults.VvColorModeButton.palette},size:{type:String,default:n.defaults.VvColorModeButton.size},groundDark:{type:String,default:n.colorMode.dark.ground},groundDarkHex:{type:String,default:n.colorMode.dark.hex},groundLight:{type:String,default:n.colorMode.light.ground},groundLightHex:{type:String,default:n.colorMode.light.hex},textDark:{type:String,default:n.colorMode.dark.text},textLight:{type:String,default:n.colorMode.light.text},titleDark:{type:String,default:n.colorMode.dark.title},titleLight:{type:String,default:n.colorMode.light.title}},setup(e){const t=e,r=o.ref(t.mode),l=o.computed(()=>r.value==="dark"?"sun":"moon"),a=o.computed(()=>r.value==="dark"?t.titleLight:t.titleDark);o.onMounted(()=>{document&&r.value==="light"&&(document.documentElement.classList.remove("dark",t.groundDark,t.textDark),document.documentElement.classList.add(t.groundLight,t.textLight),document.documentElement.style.backgroundColor=t.groundLightHex),document&&r.value==="dark"&&(document.documentElement.classList.remove(t.groundLight,t.textLight),document.documentElement.classList.add("dark",t.groundDark,t.textDark),document.documentElement.style.backgroundColor=t.groundDarkHex)});function i(c){document&&r.value==="light"?(r.value="dark",localStorage.setItem("colorMode","dark"),document.documentElement.classList.remove(t.groundLight,t.textLight),document.documentElement.classList.add("dark",t.groundDark,t.textDark),document.documentElement.style.backgroundColor=t.groundDarkHex):document&&r.value==="dark"&&(r.value="light",localStorage.setItem("colorMode","light"),document.documentElement.classList.remove("dark",t.groundDark,t.textDark),document.documentElement.classList.add(t.groundLight,t.textLight),document.documentElement.style.backgroundColor=t.groundLightHex)}return(c,d)=>(o.openBlock(),o.createBlock(G,{title:o.unref(a),onClick:d[0]||(d[0]=g=>i()),class:"rounded-full",color:e.color,fab:!0,palette:e.palette,type:"button",size:e.size},{default:o.withCtx(()=>[o.unref(l)==="moon"?(o.openBlock(),o.createElementBlock("svg",vt,zt)):o.createCommentVNode("",!0),o.unref(l)==="sun"?(o.openBlock(),o.createElementBlock("svg",Bt,Ct)):o.createCommentVNode("",!0)]),_:1},8,["title","color","palette","size"]))}},Et={__name:"VvEl",props:{borderPalette:{type:String,default:n.defaults.VvEl.borderPalette},borderColor:{type:String,default:n.defaults.VvEl.borderColor},groundPalette:{type:String,default:n.defaults.VvEl.groundPalette},groundColor:{type:String,default:n.defaults.VvEl.groundColor},tag:{type:String,default:n.defaults.VvEl.tag},textPalette:{type:String,default:n.defaults.VvEl.textPalette},textColor:{type:String,default:n.defaults.VvEl.textColor}},setup(e){const t=e,r=Object.keys(o.inject("vv",{})).length>0?o.inject("vv"):n;let l=o.computed(()=>{var i,c,d,g,b,f,h,x,p;let a=[];return(d=(c=(i=r==null?void 0:r.borders)==null?void 0:i.palettes)==null?void 0:c[t.borderPalette])!=null&&d[t.borderColor]&&a.push(r.borders.palettes[t.borderPalette][t.borderColor]),(f=(b=(g=r==null?void 0:r.grounds)==null?void 0:g.palettes)==null?void 0:b[t.groundPalette])!=null&&f[t.groundColor]&&a.push(r.grounds.palettes[t.groundPalette][t.groundColor]),(p=(x=(h=r==null?void 0:r.text)==null?void 0:h.palettes)==null?void 0:x[t.textPalette])!=null&&p[t.textColor]&&a.push(r.text.palettes[t.textPalette][t.textColor]),a.join(" ").trim()});return(a,i)=>(o.openBlock(),o.createBlock(o.resolveDynamicComponent(e.tag),{class:o.normalizeClass(o.unref(l))},{default:o.withCtx(()=>[o.renderSlot(a.$slots,"default")]),_:3},8,["class"]))}},_t=[o.createElementVNode("path",{d:"m6.5 0 51.9 121.1L110.3 0h6.7L61.6 129h-6.2L0 0h6.5zM181.2 124.4c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V14.2h5.5v57.5c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V14.2h5.7v57.5c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.3 3 12 4.5 20.1 4.5zM333.6 123.8v5.2h-75.8V14.2h74.3v5.2h-68.7v48.3h60.1v5.2h-60.1v50.9h70.2zM351.3 0l51.9 121.1L455 0h6.7l-55.4 129h-6.2L344.7 0h6.6zM556.1 123.8v5.2h-75.8V14.2h74.3v5.2H486v48.3h60.1v5.2H486v50.9h70.1zM585.4 24.9V129h-5.7V14.2h4.2l84.4 105.9V14.2h5.7V129h-5.5L585.4 24.9zM784 19.4h-43V129h-5.7V19.4h-43v-5.2H784v5.2zM848 124.4c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V14.2h5.5v57.5c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V14.2h5.7v57.5c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.3 3 12 4.5 20.1 4.5zM991.2 31.2c-4.2-4.6-8.8-7.9-13.9-9.8-5.1-1.9-11-2.8-17.8-2.8-12.2 0-21 2.3-26.5 6.9-5.5 4.6-8.2 10.8-8.2 18.6 0 3.9.7 7.1 2 9.8 1.3 2.6 3.4 4.9 6.2 6.7 2.8 1.8 6.4 3.4 10.8 4.6 4.4 1.2 9.7 2.5 15.8 3.8 6.2 1.3 11.9 2.7 17 4.2s9.4 3.4 12.9 5.7c3.6 2.3 6.3 5.2 8.2 8.6 1.9 3.4 2.9 7.7 2.9 12.8 0 4.8-.9 9.1-2.8 12.8-1.9 3.7-4.6 6.7-8.2 9.2-3.6 2.5-7.8 4.3-12.8 5.6-5 1.2-10.6 1.9-16.7 1.9-9.2 0-17.4-1.4-24.7-4.3-7.3-2.9-14.1-7.2-20.4-13.2l3.4-4c5.4 5.5 11.5 9.6 18.4 12.4 6.9 2.8 14.7 4.2 23.4 4.2 10.8 0 19.3-2 25.5-5.9 6.2-3.9 9.3-9.9 9.3-18 0-4.1-.8-7.6-2.3-10.4-1.5-2.9-3.8-5.3-6.9-7.3-3.1-2-7-3.7-11.6-5.2S964 75.3 957.6 74c-6.3-1.3-11.8-2.6-16.6-4-4.8-1.4-8.8-3.2-12.1-5.3-3.3-2.2-5.8-4.8-7.4-7.9-1.7-3.1-2.5-7.1-2.5-11.8 0-5.1 1-9.6 2.9-13.5 1.9-3.9 4.7-7.2 8.2-9.9 3.5-2.6 7.7-4.7 12.7-6.1 5-1.4 10.4-2.1 16.5-2.1 7.4 0 14 1.1 19.6 3.2 5.6 2.2 10.7 5.6 15.4 10.3l-3.1 4.3z"},null,-1)],jt={__name:"VueVentusLogoText",props:{class:{type:String,default:"w-full fill-gray-900 dark:fill-gray-100"}},setup(e){return(t,r)=>(o.openBlock(),o.createElementBlock("svg",{class:o.normalizeClass(e.class),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 129","xml:space":"preserve"},_t,2))}},At=["fill"],Dt=["fill"],Lt={__name:"VueVentusSpinningMark",props:{animationClass:{type:String,default:"animate-spin-reverse-4s"},enableAnimation:{type:Boolean,default:!0},fillOne:{type:String,default:"#41b883"},fillTwo:{type:String,default:"#2298bd"}},setup(e){const t=e,r=o.computed(()=>t.enableAnimation?t.animationClass:"");return(l,a)=>(o.openBlock(),o.createElementBlock("svg",{class:o.normalizeClass(o.unref(r)),version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 1000 1000","xml:space":"preserve"},[o.createElementVNode("path",{fill:e.fillOne,d:"M210.3 237.6c0-61.4 19.2-118.5 51.8-165.4C88.8 152.1-84.2 466.7 81 657c134.5 134.8 363 48.8 386.2-131.2-66.9-7.6-126.8-37.9-172-83.1-52.4-52.4-84.9-125-84.9-205.1zM919.7 336c-134.5-134.8-363-48.8-386.2 131.2 66.9 7.6 126.8 37.9 172 83.1 52.5 52.5 85 125 85 205.1 0 61.4-19.2 118.5-51.8 165.4 173.2-79.9 346.3-394.6 181-584.8z"},null,8,At),o.createElementVNode("g",null,[o.createElementVNode("path",{fill:e.fillTwo,d:"M529.7 529.6C505.2 745.2 253.8 858.5 76.1 734.7c38.9 115.6 205.6 246 371.4 255.6 161.6 9.4 309.9-110.9 268.4-282.5-21.1-87.5-88.6-165.6-186.2-178.2zM339.8 77.1C205 211.6 291 440.2 471 463.4c7.6-66.9 37.9-126.8 83.1-172 52.5-52.5 125-85 205.1-85 61.4 0 118.5 19.2 165.4 51.8C844.8 84.9 530.1-88.1 339.8 77.1z"},null,8,Dt)])],2))}};return s.AnchorDefault=E,s.Anchors=B,s.BorderDefault=_,s.ButtonOutline=j,s.ButtonSolid=A,s.Buttons=C,s.GroundConsole=D,s.GroundDefault=L,s.GroundMonochromatic=T,s.GroundPastel=O,s.InputValidation=P,s.Inputs=M,s.Text=u,s.TextDefault=$,s.Transitions=k,s.ValidAudioSourceTypes=ct,s.ValidButtonTypes=H,s.ValidColorModes=N,s.ValidDirections=gt,s.ValidElementTags=bt,s.ValidFontAwesomeFamilies=ft,s.ValidFontAwesomeSizes=ht,s.ValidHeadingLevels=xt,s.ValidImageSourceTypes=pt,s.ValidInputTypes=mt,s.ValidVideoSourceTypes=yt,s.VueVentusLogoText=jt,s.VueVentusSpinningMark=Lt,s.VvAnchor=Vt,s.VvButton=G,s.VvColorModeButton=Mt,s.VvConfig=n,s.VvEl=Et,s.mergeWithVvConfig=dt,Object.defineProperties(s,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),s}({},Vue);
