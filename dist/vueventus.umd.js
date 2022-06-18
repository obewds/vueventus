(function(s,r){typeof exports=="object"&&typeof module!="undefined"?r(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],r):(s=typeof globalThis!="undefined"?globalThis:s||self,r(s.VueVentus={},s.Vue))})(this,function(s,r){"use strict";var it=Object.defineProperty,ut=Object.defineProperties;var dt=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var ct=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable;var J=(s,r,c)=>r in s?it(s,r,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[r]=c,y=(s,r)=>{for(var c in r||(r={}))ct.call(r,c)&&J(s,c,r[c]);if(Y)for(var c of Y(r))gt.call(r,c)&&J(s,c,r[c]);return s},B=(s,r)=>ut(s,dt(r));var c={align:"",decoration:"",family:"",lineHeight:"",smoothing:"subpixel-antialiased",spacing:"",weight:"",wordBreak:"",base:function(){return[this.align,this.decoration,this.family,this.lineHeight,this.smoothing,this.spacing,this.weight,this.wordBreak].join(" ").trim()},sizes:{"5xs":"text-5xs","4xs":"text-4xs","3xs":"text-3xs","2xs":"text-2xs",xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl","3xl":"text-3xl","4xl":"text-4xl","5xl":"text-5xl","6xl":"text-6xl","7xl":"text-7xl","8xl":"text-8xl","9xl":"text-9xl","10xl":"text-10xl","11xl":"text-11xl","12xl":"text-12xl"},getSizeClasses:function(e){const t=e&&this.sizes[e]?e:"md";return this.sizes[t]},classes:function(e){const t=e||"";return[this.base(),this.getSizeClasses(t)].join(" ").trim()}},k={durations:{1200:"duration-1200",1150:"duration-1150",1100:"duration-1100",1050:"duration-1050",1e3:"duration-1000",950:"duration-950",900:"duration-900",850:"duration-850",800:"duration-800",750:"duration-750",700:"duration-700",650:"duration-650",600:"duration-600",550:"duration-550",500:"duration-500",475:"duration-475",450:"duration-450",425:"duration-425",400:"duration-400",375:"duration-375",350:"duration-350",325:"duration-325",300:"duration-300",275:"duration-275",250:"duration-250",225:"duration-225",200:"duration-200",175:"duration-175",150:"duration-150",125:"duration-125",100:"duration-100",75:"duration-75",50:"duration-50",25:"duration-25"},easings:{linear:"ease-linear",in:"ease-in",out:"ease-out",inOut:"ease-in-out"},transitions:{default:"transition",all:"transition-all",colors:"transition-colors",none:"transition-none",opacity:"transition-opacity",shadow:"transition-shadow",transform:"transition-transform"},getDurationClasses:function(e){var o,a;const t=e&&((o=this.durations)==null?void 0:o[e])?e:"300";return((a=this.durations)==null?void 0:a[t])||""},getEasingClasses:function(e){var o,a;const t=e&&((o=this.easings)==null?void 0:o[e])?e:"inOut";return((a=this.easings)==null?void 0:a[t])||""},getTransitionClasses:function(e){var o,a;const t=e&&((o=this.transitions)==null?void 0:o[e])?e:"default";return((a=this.transitions)==null?void 0:a[t])||""},custom:function(e){const t={transitions:e&&e.transitions?e.transitions:"",easings:e&&e.easings?e.easings:"",durations:e&&e.durations?e.durations:""};return[this.getTransitionClasses(t.transitions),this.getEasingClasses(t.easings),this.getDurationClasses(t.durations)].join(" ").trim()},classes:function(e,t,n){const o=e||"",a=t||"",i=n||"";return[this.getTransitionClasses(o),this.getEasingClasses(a),this.getDurationClasses(i)].join(" ").trim()}},v={cursor:"cursor-pointer",display:"",focus:"",text:"underline underline-offset-2",transition:k.classes("colors","inOut","300"),base:function(){return[this.cursor,this.display,this.focus,this.text,this.transition].join(" ").trim()},sizes:c.sizes,getSizeClasses:function(e){const t=e&&this.sizes[e]?e:"md";return this.sizes[t]},classes:function(e){const t=e||"";return[this.base(),this.getSizeClasses(t)].join(" ").trim()}},M={border:"border border-transparent",cursor:"cursor-pointer",disabled:"disabled:opacity-25",display:"inline-flex items-center",focus:"focus:outline-none focus:ring focus:ring-opacity-50",text:"font-semibold uppercase tracking-widest",transition:k.classes("all","inOut","300"),base:function(){return[this.border,this.cursor,this.disabled,this.display,this.focus,this.text,this.transition].join(" ").trim()},sizes:{"4xs":"px-1 py-px text-xxs","3xs":"px-1.5 py-0.5 text-xxs","2xs":"px-2 py-1 text-xs",xs:"px-2.5 py-1.5 text-xs",sm:"px-2.5 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-4 py-2 text-base",xl:"px-6 py-3 text-base","2xl":"px-7 py-4 text-lg","3xl":"px-8 py-4 text-xl","4xl":"px-8 py-5 text-xl"},getSizeClasses:function(e){const t=e&&this.sizes[e]?e:"md";return this.sizes[t]},classes:function(e){const t=e||"";return[this.base(),this.getSizeClasses(t)].join(" ").trim()},blockDisplay:"block w-full flex flex-col items-center justify-center",blockBase:function(){return[this.border,this.cursor,this.disabled,this.blockDisplay,this.focus,this.text,this.transition].join(" ").trim()},blockSizes:{"4xs":"px-1 py-1 text-2xs","3xs":"px-2.5 py-1.5 text-2xs","2xs":"px-2.5 py-1.5 text-xs",xs:"px-4 py-2 text-sm",sm:"px-4 py-2 text-base",md:"px-6 py-3 text-base",lg:"px-6 py-3 text-lg",xl:"px-7 py-3.5 text-lg","2xl":"px-8 py-5 text-xl","3xl":"px-9 py-5 text-2xl","4xl":"px-10 py-6 text-2xl"},getBlockSizeClasses:function(e){const t=e&&this.blockSizes[e]?e:"md";return this.blockSizes[t]},blockClasses:function(e){const t=e||"";return[this.blockBase(),this.getBlockSizeClasses(t)].join(" ").trim()},fabDisplay:"inline-flex items-center items-center justify-center",fabBase:function(){return[this.border,this.cursor,this.disabled,this.fabDisplay,this.focus,this.text,this.transition].join(" ").trim()},fabSizes:{"4xs":"w-6 h-6 text-xxs","3xs":"w-7 h-7 text-xxs","2xs":"w-8 h-8 text-xs",xs:"w-9 h-9 text-xs",sm:"w-10 h-10 text-sm",md:"w-11 h-11 text-sm",lg:"w-12 h-12 text-base",xl:"w-14 h-14 text-base","2xl":"w-16 h-16 text-lg","3xl":"w-20 h-20 text-xl","4xl":"w-24 h-24 text-xl"},getFabSizeClasses:function(e){const t=e&&this.fabSizes[e]?e:"md";return this.fabSizes[t]},fabClasses:function(e){const t=e||"";return[this.fabBase(),this.getFabSizeClasses(t)].join(" ").trim()}},_={border:"border",display:"block w-full",outline:"outline-none outline-offset-0 outline-2",placeholder:"",ring:"",text:"",transition:k.classes("all","inOut","300"),base:function(){return[this.border,this.display,this.outline,this.placeholder,this.ring,this.text,this.transition].join(" ").trim()},sizes:{xs:"px-2 py-1.5 text-sm",sm:"px-3 py-2 text-base",md:"px-3 py-2 text-lg",lg:"px-4 py-3 text-xl",xl:"px-4 py-3 text-2xl","2xl":"px-5 py-4 text-3xl"},getSizeClasses:function(e){const t=e&&this.sizes[e]?e:"md";return this.sizes[t]},classes:function(e){const t=e||"";return[this.base(),this.getSizeClasses(t)].join(" ").trim()}},j={default:"text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200",error:"text-rose-500 hover:text-rose-600 dark:text-rose-300 dark:hover:text-rose-200",primary:"text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200",secondary:"text-teal-500 hover:text-teal-600 dark:text-teal-300 dark:hover:text-teal-200",success:"text-green-600 hover:text-green-700 dark:text-green-300 dark:hover:text-green-200"},E={"":"",default:"border-gray-200 dark:border-gray-600",error:"border-rose-600 dark:border-rose-300",primary:"border-blue-600 dark:border-blue-300",secondary:"border-violet-600 dark:border-violet-300",success:"border-green-600 dark:border-green-300"},$={default:"text-gray-500 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-gray-500 active:bg-gray-600 border-gray-300 hover:border-gray-800 focus:ring-gray-400 focus:border-gray-900",error:"text-rose-500 dark:text-rose-300 hover:text-white dark:hover:text-white hover:bg-rose-500 active:bg-rose-600 border-rose-300 hover:border-rose-800 focus:ring-rose-400 focus:border-rose-900",primary:"text-blue-500 dark:text-blue-300 hover:text-white dark:hover:text-white hover:bg-blue-500 active:bg-blue-600 border-blue-300 hover:border-blue-800 focus:ring-blue-400 focus:border-blue-900",secondary:"text-teal-600 dark:text-teal-500 hover:text-white dark:hover:text-white hover:bg-teal-600 active:bg-teal-800 border-teal-600 hover:border-teal-800 focus:ring-teal-500 focus:border-teal-900",success:"text-green-600 dark:text-green-500 hover:text-white dark:hover:text-white hover:bg-green-600 active:bg-green-800 border-green-600 hover:border-green-800 focus:ring-green-500 focus:border-green-900"},A={default:"text-gray-800 hover:text-black bg-gray-100 hover:bg-gray-200 active:bg-gray-300 border-gray-900 focus:border-black focus:ring-gray-400",error:"text-white bg-rose-500 hover:bg-rose-600 active:bg-rose-700 border-rose-800 focus:ring-rose-400 focus:border-rose-900",primary:"text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 border-blue-800 focus:ring-blue-400 focus:border-blue-900",secondary:"text-gray-900 hover:text-white bg-teal-500 hover:bg-teal-600 active:text-white active:bg-teal-700 border-teal-800 focus:ring-teal-400 focus:border-teal-900",success:"text-gray-900 hover:text-white bg-green-500 hover:bg-green-600 active:text-white active:bg-green-700 border-green-800 focus:ring-green-400 focus:border-green-900"},T={default:"text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",error:"text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",primary:"text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",secondary:"text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",success:"text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"},O={default:"",error:"text-white bg-rose-500 dark:bg-rose-600",primary:"text-white bg-blue-500 dark:bg-blue-600",secondary:"text-white bg-violet-500 dark:bg-violet-600",success:"text-white bg-green-500 dark:bg-green-600"},L={default:"text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",error:"text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",primary:"text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",secondary:"text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",success:"text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300"},D={default:"text-black bg-gray-100 dark:bg-gray-200",error:"text-black bg-rose-200 dark:bg-rose-300",primary:"text-black bg-blue-200 dark:bg-blue-300",secondary:"text-black bg-violet-200 dark:bg-violet-300",success:"text-black bg-green-300 dark:bg-green-400"},I={default:"bg-gray-50 dark:bg-gray-800 focus:bg-white dark:focus:bg-gray-900 border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:outline-blue-500/50 placeholder:text-gray-200 dark:placeholder:text-gray-600",success:"text-green-700 dark:text-green-200 bg-green-100 dark:bg-green-800 focus:bg-green-50 dark:focus:bg-green-900 border-green-300 dark:border-green-600 focus:border-green-500 focus:outline-green-500/50 placeholder:text-green-300 dark:placeholder:text-green-600",error:"text-rose-700 dark:text-rose-200 bg-rose-100 dark:bg-rose-800 focus:bg-rose-50 dark:focus:bg-rose-900 border-rose-300 dark:border-rose-600 focus:border-rose-500 focus:outline-rose-500/50 placeholder:text-rose-300 dark:placeholder:text-rose-600"},P={default:"",error:"text-rose-500 dark:text-rose-300",primary:"text-blue-500 dark:text-blue-300",secondary:"text-violet-500 dark:text-violet-300",success:"text-green-600 dark:text-green-300"},Q={VvAnchor:{button:!1,buttonBlock:!1,buttonFab:!1,buttonSize:"md",color:"default",external:!1,href:"#",palette:"default"},VvButton:{block:!1,color:"primary",fab:!1,palette:"solid",size:"md",type:"button"},VvColorModeButton:{color:"default",mode:"light",palette:"outline",size:"xs"},VvEl:{borderPalette:"default",borderColor:"",groundPalette:"default",groundColor:"default",tag:"div",textPalette:"default",textColor:"default"},VvInput:{color:"default",palette:"validation",size:"md",type:"text"}},l={anchors:B(y({},v),{palettes:{default:j}}),borders:{palettes:{default:E}},buttons:B(y({},M),{palettes:{outline:$,solid:A}}),inputs:B(y({},_),{palettes:{validation:I}}),colorMode:{dark:{bg:"bg-gray-900",ground:"bg-gray-900",hex:"#242426",text:"text-gray-100",title:"Enable Dark Mode"},light:{bg:"bg-gray-100",ground:"bg-gray-100",hex:"#e1e1e3",text:"text-gray-900",title:"Enable Light Mode"}},grounds:{palettes:{console:T,default:O,monochromatic:L,pastel:D}},text:B(y({},c),{palettes:{default:P}}),transitions:y({},k),defaults:Q};function X(e){return e.replace(/([A-Z])/g," $1").replace(/\s+/g," ").split(" ").map(a=>a.charAt(0).toUpperCase()+a.substring(1).toLowerCase()).join(" ").trim()}function K(e,t){const n=String(e).trim();return/^[1-9]\d*$/.test(n)?Number(n):t}function ee(e,t=2){if(e===0)return"0 Bytes";const n=1024,o=t<0?0:t,a=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],i=Math.floor(Math.log(e)/Math.log(n));return parseFloat((e/Math.pow(n,i)).toFixed(o))+" "+a[i]}function te(e){let t=parseInt(e,10),n=Math.floor(parseInt(String(Number(t)/(24*3600))));t=t%(24*3600);let o=Math.floor(parseInt(String(Number(t)/3600)));t%=3600;let a=Math.floor(t/60);t%=60;let i=Math.floor(t),u=n<10?"0"+n:n,d=o<10?"0"+o:o,g=a<10?"0"+a:a,b=i<10?"0"+i:i,f=u==="00"?"":u+":";return f+=d==="00"?"":d+":",f+=g+":"+b,f}function re(e){return new Intl.NumberFormat().format(e)}var oe=function(t){return ne(t)&&!ae(t)};function ne(e){return!!e&&typeof e=="object"}function ae(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||ie(e)}var se=typeof Symbol=="function"&&Symbol.for,le=se?Symbol.for("react.element"):60103;function ie(e){return e.$$typeof===le}function ue(e){return Array.isArray(e)?[]:{}}function V(e,t){return t.clone!==!1&&t.isMergeableObject(e)?p(ue(e),e,t):e}function de(e,t,n){return e.concat(t).map(function(o){return V(o,n)})}function ce(e,t){if(!t.customMerge)return p;var n=t.customMerge(e);return typeof n=="function"?n:p}function ge(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return e.propertyIsEnumerable(t)}):[]}function F(e){return Object.keys(e).concat(ge(e))}function N(e,t){try{return t in e}catch{return!1}}function be(e,t){return N(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function fe(e,t,n){var o={};return n.isMergeableObject(e)&&F(e).forEach(function(a){o[a]=V(e[a],n)}),F(t).forEach(function(a){be(e,a)||(N(e,a)&&n.isMergeableObject(t[a])?o[a]=ce(a,n)(e[a],t[a],n):o[a]=V(t[a],n))}),o}function p(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||de,n.isMergeableObject=n.isMergeableObject||oe,n.cloneUnlessOtherwiseSpecified=V;var o=Array.isArray(t),a=Array.isArray(e),i=o===a;return i?o?n.arrayMerge(e,t,n):fe(e,t,n):V(t,n)}p.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(o,a){return p(o,a,n)},{})};var he=p,me=he;function xe(e){return Object.keys(e).length>0?me(l,e):l}function pe(e=10){let t="";const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=n.length;for(let a=0;a<Number(e);a++)t+=n.charAt(Math.floor(Math.random()*o));return t}function ye(e,t){let n=e||"",o=t||"-";return n.toString().toLowerCase().normalize("NFD").trim().replace(/\s+/g,o).replace(/[^\w\-]+/g,"").replace(/\-\-+/g,o)}function ke(e){return e.replace(/[^\w\s\']|_/g," ").replace(/\s+/g," ").replace(/(?:^\w|[A-Z]|\b\w)/g,function(t,n){return n===0?t.toLowerCase():t.toUpperCase()}).replace(/\s+/g,"")}function Ve(e){return e.replace(/[^A-z0-9._-]/gi,"")}function Se(e){return e.filter((t,n,o)=>o.indexOf(t)===n)}const Ce=["audio/flac","audio/mp4","audio/mpeg","audio/ogg","audio/x-flac","audio/webm"],H=["button","submit","reset"],G=["light","dark"],ze=["up","down","left","right",""],we=["style","title","address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","main","nav","section","blockquote","dd","div","dl","dt","figcaption","figure","li","menu","ol","p","pre","ul","a","abbr","b","bdi","bdo","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","audio","map","video","iframe","object","picture","portal","svg","math","canvas","del","ins","caption","colgroup","table","tbody","td","tfoot","th","thead","tr","button","datalist","fieldset","form","input","label","legend","meter","optgroup","option","output","progress","select","textarea","details","dialog","summary"],Be=["fab","fad","fal","far","fas","fat"],ve=["xs","sm","1x","lg","2x","3x","4x","5x","6x","7x","8x","9x","10x"],Me=[1,2,3,4,5,6],_e=["image/gif","image/jpeg","image/png","image/svg+xml","image/webp"],U=["color","date","datetime-local","email","month","number","password","search","tel","text","time","url"],je=["video/mp4","video/ogg","video/webm"];var x=(e,t)=>{const n=e.__vccOpts||e;for(const[o,a]of t)n[o]=a;return n};const Ee=r.defineComponent({name:"VvAnchor",props:{button:{type:Boolean,default:l.defaults.VvAnchor.button},buttonBlock:{type:Boolean,default:l.defaults.VvAnchor.buttonBlock},buttonFab:{type:Boolean,default:l.defaults.VvAnchor.buttonFab},buttonSize:{type:String,default:l.defaults.VvAnchor.buttonSize},color:{type:String,default:l.defaults.VvAnchor.color},external:{type:Boolean,default:l.defaults.VvAnchor.external},href:{type:String,default:l.defaults.VvAnchor.href},palette:{type:String,default:l.defaults.VvAnchor.palette}},setup(e){const t=Object.keys(r.inject("vv",{})).length>0?r.inject("vv"):l;return{classes:r.computed(()=>{var a,i,u,d,g,b,f,h,m,S,C,z,w,R,Z,W;let o=[];return e.button===!0?(e.buttonBlock===!0&&e.buttonFab===!1?((a=t==null?void 0:t.buttons)!=null&&a.blockBase()&&o.push(t.buttons.blockBase()),e.buttonSize!==""&&((u=(i=t==null?void 0:t.buttons)==null?void 0:i.blockSizes)==null?void 0:u[e.buttonSize])&&o.push(t.buttons.blockSizes[e.buttonSize])):e.buttonBlock===!1&&e.buttonFab===!0?((d=t==null?void 0:t.buttons)!=null&&d.fabBase()&&o.push(t.buttons.fabBase()),e.buttonSize!==""&&((b=(g=t==null?void 0:t.buttons)==null?void 0:g.fabSizes)==null?void 0:b[e.buttonSize])&&o.push(t.buttons.fabSizes[e.buttonSize])):((f=t==null?void 0:t.buttons)!=null&&f.base()&&o.push(t.buttons.base()),e.buttonSize!==""&&((m=(h=t==null?void 0:t.buttons)==null?void 0:h.sizes)==null?void 0:m[e.buttonSize])&&o.push(t.buttons.sizes[e.buttonSize])),(z=(C=(S=t==null?void 0:t.buttons)==null?void 0:S.palettes)==null?void 0:C[e.palette])!=null&&z[e.color]&&o.push(t.buttons.palettes[e.palette][e.color])):((w=t==null?void 0:t.anchors)!=null&&w.base()&&o.push(t.anchors.base()),(W=(Z=(R=t==null?void 0:t.anchors)==null?void 0:R.palettes)==null?void 0:Z[e.palette])!=null&&W[e.color]&&o.push(t.anchors.palettes[e.palette][e.color])),o.join(" ").trim()})}}}),$e=["href"],Ae=["href"];function Te(e,t,n,o,a,i){return e.external?(r.openBlock(),r.createElementBlock("a",{key:0,href:e.href,class:r.normalizeClass(e.classes),target:"_blank",rel:"noopener noreferrer"},[r.renderSlot(e.$slots,"default")],10,$e)):(r.openBlock(),r.createElementBlock("a",{key:1,href:e.href,class:r.normalizeClass(e.classes)},[r.renderSlot(e.$slots,"default")],10,Ae))}var Oe=x(Ee,[["render",Te]]);const Le=r.defineComponent({name:"VvAnchor",props:{block:{type:Boolean,default:l.defaults.VvButton.block},color:{type:String,default:l.defaults.VvButton.color},fab:{type:Boolean,default:l.defaults.VvButton.fab},palette:{type:String,default:l.defaults.VvButton.palette},size:{type:String,default:l.defaults.VvButton.size},type:{type:String,default:l.defaults.VvButton.type,validator:e=>H.includes(e)}},setup(e){const t=Object.keys(r.inject("vv",{})).length>0?r.inject("vv"):l,n=e.type;let o=r.computed(()=>{var i,u,d,g,b,f,h,m,S,C,z,w;let a=[];return e.block===!0&&e.fab===!1?((i=t==null?void 0:t.buttons)!=null&&i.blockBase()&&a.push(t.buttons.blockBase()),e.size!==""&&((d=(u=t==null?void 0:t.buttons)==null?void 0:u.blockSizes)==null?void 0:d[e.size])&&a.push(t.buttons.blockSizes[e.size])):e.fab===!0&&e.block===!1?((g=t==null?void 0:t.buttons)!=null&&g.fabBase()&&a.push(t.buttons.fabBase()),e.size!==""&&((f=(b=t==null?void 0:t.buttons)==null?void 0:b.fabSizes)==null?void 0:f[e.size])&&a.push(t.buttons.fabSizes[e.size])):((h=t==null?void 0:t.buttons)!=null&&h.base()&&a.push(t.buttons.base()),e.size!==""&&((S=(m=t==null?void 0:t.buttons)==null?void 0:m.sizes)==null?void 0:S[e.size])&&a.push(t.buttons.sizes[e.size])),(w=(z=(C=t==null?void 0:t.buttons)==null?void 0:C.palettes)==null?void 0:z[e.palette])!=null&&w[e.color]&&a.push(t.buttons.palettes[e.palette][e.color]),a.join(" ").trim()});return{btnType:n,classes:o}}}),De=["type"];function Ie(e,t,n,o,a,i){return r.openBlock(),r.createElementBlock("button",{type:e.btnType,class:r.normalizeClass(e.classes)},[r.renderSlot(e.$slots,"default")],10,De)}var q=x(Le,[["render",Ie]]);const Pe=r.defineComponent({name:"VvColorModeButton",components:{VvButton:q},props:{mode:{type:String,default:l.defaults.VvColorModeButton.mode,validator:e=>G.includes(e)},color:{type:String,default:l.defaults.VvColorModeButton.color},palette:{type:String,default:l.defaults.VvColorModeButton.palette},size:{type:String,default:l.defaults.VvColorModeButton.size},groundDark:{type:String,default:l.colorMode.dark.ground},groundDarkHex:{type:String,default:l.colorMode.dark.hex},groundLight:{type:String,default:l.colorMode.light.ground},groundLightHex:{type:String,default:l.colorMode.light.hex},textDark:{type:String,default:l.colorMode.dark.text},textLight:{type:String,default:l.colorMode.light.text},titleDark:{type:String,default:l.colorMode.dark.title},titleLight:{type:String,default:l.colorMode.light.title}},setup(e){const t=r.ref(e.mode),n=r.computed(()=>t.value==="dark"?"sun":"moon"),o=r.computed(()=>t.value==="dark"?e.titleLight:e.titleDark);return r.onMounted(()=>{document&&t.value==="light"&&(document.documentElement.classList.remove("dark",e.groundDark,e.textDark),document.documentElement.classList.add(e.groundLight,e.textLight),document.documentElement.style.backgroundColor=e.groundLightHex),document&&t.value==="dark"&&(document.documentElement.classList.remove(e.groundLight,e.textLight),document.documentElement.classList.add("dark",e.groundDark,e.textDark),document.documentElement.style.backgroundColor=e.groundDarkHex)}),{mode:t,icon:n,title:o}},methods:{toggleColorMode(e){document&&this.mode==="light"?(this.mode="dark",localStorage.setItem("colorMode","dark"),document.documentElement.classList.remove(this.groundLight,this.textLight),document.documentElement.classList.add("dark",this.groundDark,this.textDark),document.documentElement.style.backgroundColor=this.groundDarkHex):document&&this.mode==="dark"&&(this.mode="light",localStorage.setItem("colorMode","light"),document.documentElement.classList.remove("dark",this.groundDark,this.textDark),document.documentElement.classList.add(this.groundLight,this.textLight),document.documentElement.style.backgroundColor=this.groundLightHex)}}}),Fe={key:0,class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},Ne=[r.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)],He={key:1,class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},Ge=[r.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)];function Ue(e,t,n,o,a,i){const u=r.resolveComponent("VvButton");return r.openBlock(),r.createBlock(u,{title:e.title,onClick:t[0]||(t[0]=d=>e.toggleColorMode(d)),class:"rounded-full",color:e.color,fab:!0,palette:e.palette,type:"button",size:e.size},{default:r.withCtx(()=>[e.icon==="moon"?(r.openBlock(),r.createElementBlock("svg",Fe,Ne)):r.createCommentVNode("",!0),e.icon==="sun"?(r.openBlock(),r.createElementBlock("svg",He,Ge)):r.createCommentVNode("",!0)]),_:1},8,["title","color","palette","size"])}var qe=x(Pe,[["render",Ue]]);const Re=r.defineComponent({name:"VvEl",props:{borderPalette:{type:String,default:l.defaults.VvEl.borderPalette},borderColor:{type:String,default:l.defaults.VvEl.borderColor},groundPalette:{type:String,default:l.defaults.VvEl.groundPalette},groundColor:{type:String,default:l.defaults.VvEl.groundColor},tag:{type:String,default:l.defaults.VvEl.tag},textPalette:{type:String,default:l.defaults.VvEl.textPalette},textColor:{type:String,default:l.defaults.VvEl.textColor}},setup(e){const t=Object.keys(r.inject("vv",{})).length>0?r.inject("vv"):l;return{classes:r.computed(()=>{var a,i,u,d,g,b,f,h,m;let o=[];return(u=(i=(a=t==null?void 0:t.borders)==null?void 0:a.palettes)==null?void 0:i[e.borderPalette])!=null&&u[e.borderColor]&&o.push(t.borders.palettes[e.borderPalette][e.borderColor]),(b=(g=(d=t==null?void 0:t.grounds)==null?void 0:d.palettes)==null?void 0:g[e.groundPalette])!=null&&b[e.groundColor]&&o.push(t.grounds.palettes[e.groundPalette][e.groundColor]),(m=(h=(f=t==null?void 0:t.text)==null?void 0:f.palettes)==null?void 0:h[e.textPalette])!=null&&m[e.textColor]&&o.push(t.text.palettes[e.textPalette][e.textColor]),o.join(" ").trim()})}}});function Ze(e,t,n,o,a,i){return r.openBlock(),r.createBlock(r.resolveDynamicComponent(e.tag),{class:r.normalizeClass(e.classes)},{default:r.withCtx(()=>[r.renderSlot(e.$slots,"default")]),_:3},8,["class"])}var We=x(Re,[["render",Ze]]);const Ye=r.defineComponent({name:"VvEl",props:{color:{type:String,default:l.defaults.VvInput.color},palette:{type:String,default:l.defaults.VvInput.palette},size:{type:String,default:l.defaults.VvInput.size},type:{type:String,default:l.defaults.VvInput.type,validator:e=>U.includes(e)}},setup(e){const t=Object.keys(r.inject("vv",{})).length>0?r.inject("vv"):l;return{classes:r.computed(()=>{var a,i,u,d,g,b;let o=[];return(a=t==null?void 0:t.inputs)!=null&&a.base()&&o.push(t.inputs.base()),e.size!==""&&((u=(i=t==null?void 0:t.inputs)==null?void 0:i.sizes)==null?void 0:u[e.size])&&o.push(t.inputs.sizes[e.size]),(b=(g=(d=t==null?void 0:t.inputs)==null?void 0:d.palettes)==null?void 0:g[e.palette])!=null&&b[e.color]&&o.push(t.inputs.palettes[e.palette][e.color]),o.join(" ").trim()})}}}),Je=["type"];function Qe(e,t,n,o,a,i){return r.openBlock(),r.createElementBlock("input",{type:e.type,class:r.normalizeClass(e.classes)},null,10,Je)}var Xe=x(Ye,[["render",Qe]]);const Ke=r.defineComponent({name:"VueVentusLogoText",props:{colorClasses:{type:String,default:"w-full fill-gray-900 dark:fill-gray-100"}}}),et=[r.createElementVNode("path",{d:"m6.5 0 51.9 121.1L110.3 0h6.7L61.6 129h-6.2L0 0h6.5zM181.2 124.4c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V14.2h5.5v57.5c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V14.2h5.7v57.5c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.3 3 12 4.5 20.1 4.5zM333.6 123.8v5.2h-75.8V14.2h74.3v5.2h-68.7v48.3h60.1v5.2h-60.1v50.9h70.2zM351.3 0l51.9 121.1L455 0h6.7l-55.4 129h-6.2L344.7 0h6.6zM556.1 123.8v5.2h-75.8V14.2h74.3v5.2H486v48.3h60.1v5.2H486v50.9h70.1zM585.4 24.9V129h-5.7V14.2h4.2l84.4 105.9V14.2h5.7V129h-5.5L585.4 24.9zM784 19.4h-43V129h-5.7V19.4h-43v-5.2H784v5.2zM848 124.4c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V14.2h5.5v57.5c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V14.2h5.7v57.5c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.3 3 12 4.5 20.1 4.5zM991.2 31.2c-4.2-4.6-8.8-7.9-13.9-9.8-5.1-1.9-11-2.8-17.8-2.8-12.2 0-21 2.3-26.5 6.9-5.5 4.6-8.2 10.8-8.2 18.6 0 3.9.7 7.1 2 9.8 1.3 2.6 3.4 4.9 6.2 6.7 2.8 1.8 6.4 3.4 10.8 4.6 4.4 1.2 9.7 2.5 15.8 3.8 6.2 1.3 11.9 2.7 17 4.2s9.4 3.4 12.9 5.7c3.6 2.3 6.3 5.2 8.2 8.6 1.9 3.4 2.9 7.7 2.9 12.8 0 4.8-.9 9.1-2.8 12.8-1.9 3.7-4.6 6.7-8.2 9.2-3.6 2.5-7.8 4.3-12.8 5.6-5 1.2-10.6 1.9-16.7 1.9-9.2 0-17.4-1.4-24.7-4.3-7.3-2.9-14.1-7.2-20.4-13.2l3.4-4c5.4 5.5 11.5 9.6 18.4 12.4 6.9 2.8 14.7 4.2 23.4 4.2 10.8 0 19.3-2 25.5-5.9 6.2-3.9 9.3-9.9 9.3-18 0-4.1-.8-7.6-2.3-10.4-1.5-2.9-3.8-5.3-6.9-7.3-3.1-2-7-3.7-11.6-5.2S964 75.3 957.6 74c-6.3-1.3-11.8-2.6-16.6-4-4.8-1.4-8.8-3.2-12.1-5.3-3.3-2.2-5.8-4.8-7.4-7.9-1.7-3.1-2.5-7.1-2.5-11.8 0-5.1 1-9.6 2.9-13.5 1.9-3.9 4.7-7.2 8.2-9.9 3.5-2.6 7.7-4.7 12.7-6.1 5-1.4 10.4-2.1 16.5-2.1 7.4 0 14 1.1 19.6 3.2 5.6 2.2 10.7 5.6 15.4 10.3l-3.1 4.3z"},null,-1)];function tt(e,t,n,o,a,i){return r.openBlock(),r.createElementBlock("svg",{class:r.normalizeClass(e.colorClasses),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 129","xml:space":"preserve"},et,2)}var rt=x(Ke,[["render",tt]]);const ot=r.defineComponent({name:"VueVentusSpinningMark",props:{animationClass:{type:String,default:"animate-spin-reverse-4s"},enableAnimation:{type:Boolean,default:!0},fillOne:{type:String,default:"#41b883"},fillTwo:{type:String,default:"#2298bd"}},setup(e){return{classes:r.computed(()=>e.enableAnimation?e.animationClass:"")}}}),nt=["fill"],at=["fill"];function st(e,t,n,o,a,i){return r.openBlock(),r.createElementBlock("svg",{class:r.normalizeClass(e.classes),version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 1000 1000","xml:space":"preserve"},[r.createElementVNode("path",{fill:e.fillOne,d:"M210.3 237.6c0-61.4 19.2-118.5 51.8-165.4C88.8 152.1-84.2 466.7 81 657c134.5 134.8 363 48.8 386.2-131.2-66.9-7.6-126.8-37.9-172-83.1-52.4-52.4-84.9-125-84.9-205.1zM919.7 336c-134.5-134.8-363-48.8-386.2 131.2 66.9 7.6 126.8 37.9 172 83.1 52.5 52.5 85 125 85 205.1 0 61.4-19.2 118.5-51.8 165.4 173.2-79.9 346.3-394.6 181-584.8z"},null,8,nt),r.createElementVNode("g",null,[r.createElementVNode("path",{fill:e.fillTwo,d:"M529.7 529.6C505.2 745.2 253.8 858.5 76.1 734.7c38.9 115.6 205.6 246 371.4 255.6 161.6 9.4 309.9-110.9 268.4-282.5-21.1-87.5-88.6-165.6-186.2-178.2zM339.8 77.1C205 211.6 291 440.2 471 463.4c7.6-66.9 37.9-126.8 83.1-172 52.5-52.5 125-85 205.1-85 61.4 0 118.5 19.2 165.4 51.8C844.8 84.9 530.1-88.1 339.8 77.1z"},null,8,at)])],2)}var lt=x(ot,[["render",st]]);s.AnchorDefault=j,s.Anchors=v,s.BorderDefault=E,s.ButtonOutline=$,s.ButtonSolid=A,s.Buttons=M,s.GroundConsole=T,s.GroundDefault=O,s.GroundMonochromatic=L,s.GroundPastel=D,s.InputValidation=I,s.Inputs=_,s.Text=c,s.TextDefault=P,s.Transitions=k,s.ValidAudioSourceTypes=Ce,s.ValidButtonTypes=H,s.ValidColorModes=G,s.ValidDirections=ze,s.ValidElementTags=we,s.ValidFontAwesomeFamilies=Be,s.ValidFontAwesomeSizes=ve,s.ValidHeadingLevels=Me,s.ValidImageSourceTypes=_e,s.ValidInputTypes=U,s.ValidVideoSourceTypes=je,s.VueVentusLogoText=rt,s.VueVentusSpinningMark=lt,s.VvAnchor=Oe,s.VvButton=q,s.VvColorModeButton=qe,s.VvConfig=l,s.VvEl=We,s.VvInput=Xe,s.camelCaseToTitleCase=X,s.digitsOnly=K,s.formatBytes=ee,s.formatMediaTime=te,s.formatNumber=re,s.mergeWithVvConfig=xe,s.randomString=pe,s.slugifyString=ye,s.stringToCamelCase=ke,s.stringToFilename=Ve,s.uniqueArray=Se,Object.defineProperties(s,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
