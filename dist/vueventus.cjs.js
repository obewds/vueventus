"use strict";var J=Object.defineProperty,Q=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var E=(e,t,r)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,x=(e,t)=>{for(var r in t||(t={}))K.call(t,r)&&E(e,r,t[r]);if(j)for(var r of j(t))ee.call(t,r)&&E(e,r,t[r]);return e},S=(e,t)=>Q(e,X(t));Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var n=require("vue"),z={align:"",decoration:"",family:"",lineHeight:"",smoothing:"subpixel-antialiased",spacing:"",weight:"",wordBreak:"",base:function(){return[this.align,this.decoration,this.family,this.lineHeight,this.smoothing,this.spacing,this.weight,this.wordBreak].join(" ").trim()},sizes:{"5xs":"text-5xs","4xs":"text-4xs","3xs":"text-3xs","2xs":"text-2xs",xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl","3xl":"text-3xl","4xl":"text-4xl","5xl":"text-5xl","6xl":"text-6xl","7xl":"text-7xl","8xl":"text-8xl","9xl":"text-9xl","10xl":"text-10xl","11xl":"text-11xl","12xl":"text-12xl"},getSizeClasses:function(e){const t=e&&this.sizes[e]?e:"md";return this.sizes[t]},classes:function(e){const t=e||"";return[this.base(),this.getSizeClasses(t)].join(" ").trim()}},C={durations:{1200:"duration-1200",1150:"duration-1150",1100:"duration-1100",1050:"duration-1050",1e3:"duration-1000",950:"duration-950",900:"duration-900",850:"duration-850",800:"duration-800",750:"duration-750",700:"duration-700",650:"duration-650",600:"duration-600",550:"duration-550",500:"duration-500",475:"duration-475",450:"duration-450",425:"duration-425",400:"duration-400",375:"duration-375",350:"duration-350",325:"duration-325",300:"duration-300",275:"duration-275",250:"duration-250",225:"duration-225",200:"duration-200",175:"duration-175",150:"duration-150",125:"duration-125",100:"duration-100",75:"duration-75",50:"duration-50",25:"duration-25"},easings:{linear:"ease-linear",in:"ease-in",out:"ease-out",inOut:"ease-in-out"},transitions:{default:"transition",all:"transition-all",colors:"transition-colors",none:"transition-none",opacity:"transition-opacity",shadow:"transition-shadow",transform:"transition-transform"},getDurationClasses:function(e){var o,s,l;const t=e&&((o=this.durations)==null?void 0:o[e])?e:"300";return(s=this.durations)!=null&&s[t]?(l=this.durations)==null?void 0:l[t]:""},getEasingClasses:function(e){var o,s,l;const t=e&&((o=this.easings)==null?void 0:o[e])?e:"inOut";return(s=this.easings)!=null&&s[t]?(l=this.easings)==null?void 0:l[t]:""},getTransitionClasses:function(e){var o,s,l;const t=e&&((o=this.transitions)==null?void 0:o[e])?e:"default";return(s=this.transitions)!=null&&s[t]?(l=this.transitions)==null?void 0:l[t]:""},custom:function(e){const t={transitions:e&&e.transitions?e.transitions:"",easings:e&&e.easings?e.easings:"",durations:e&&e.durations?e.durations:""};return[this.getTransitionClasses(t.transitions),this.getEasingClasses(t.easings),this.getDurationClasses(t.durations)].join(" ").trim()},classes:function(e,t,r){const o=e||"",s=t||"",l=r||"";return[this.getTransitionClasses(o),this.getEasingClasses(s),this.getDurationClasses(l)].join(" ").trim()}},$={cursor:"cursor-pointer",display:"",focus:"",text:"underline underline-offset-2",transition:C.classes("colors","inOut","300"),base:function(){return[this.cursor,this.display,this.focus,this.text,this.transition].join(" ").trim()},sizes:z.sizes,getSizeClasses:function(e){const t=e&&this.sizes[e]?e:"md";return this.sizes[t]},classes:function(e){const t=e||"";return[this.base(),this.getSizeClasses(t)].join(" ").trim()}},A={border:"border border-transparent",cursor:"cursor-pointer",disabled:"disabled:opacity-25",display:"inline-flex items-center",focus:"focus:outline-none focus:ring focus:ring-opacity-50",text:"font-semibold uppercase tracking-widest",transition:C.classes("all","inOut","300"),base:function(){return[this.border,this.cursor,this.disabled,this.display,this.focus,this.text,this.transition].join(" ").trim()},sizes:{"4xs":"px-1 py-px text-xxs","3xs":"px-1.5 py-0.5 text-xxs","2xs":"px-2 py-1 text-xs",xs:"px-2.5 py-1.5 text-xs",sm:"px-2.5 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-4 py-2 text-base",xl:"px-6 py-3 text-base","2xl":"px-7 py-4 text-lg","3xl":"px-8 py-4 text-xl","4xl":"px-8 py-5 text-xl"},getSizeClasses:function(e){const t=e&&this.sizes[e]?e:"md";return this.sizes[t]},classes:function(e){const t=e||"";return[this.base(),this.getSizeClasses(t)].join(" ").trim()},blockDisplay:"block w-full flex flex-col items-center justify-center",blockBase:function(){return[this.border,this.cursor,this.disabled,this.blockDisplay,this.focus,this.text,this.transition].join(" ").trim()},blockSizes:{"4xs":"px-1 py-1 text-2xs","3xs":"px-2.5 py-1.5 text-2xs","2xs":"px-2.5 py-1.5 text-xs",xs:"px-4 py-2 text-sm",sm:"px-4 py-2 text-base",md:"px-6 py-3 text-base",lg:"px-6 py-3 text-lg",xl:"px-7 py-3.5 text-lg","2xl":"px-8 py-5 text-xl","3xl":"px-9 py-5 text-2xl","4xl":"px-10 py-6 text-2xl"},getBlockSizeClasses:function(e){const t=e&&this.blockSizes[e]?e:"md";return this.blockSizes[t]},blockClasses:function(e){const t=e||"";return[this.blockBase(),this.getBlockSizeClasses(t)].join(" ").trim()},fabDisplay:"inline-flex items-center items-center justify-center",fabBase:function(){return[this.border,this.cursor,this.disabled,this.fabDisplay,this.focus,this.text,this.transition].join(" ").trim()},fabSizes:{"4xs":"w-6 h-6 text-xxs","3xs":"w-7 h-7 text-xxs","2xs":"w-8 h-8 text-xs",xs:"w-9 h-9 text-xs",sm:"w-10 h-10 text-sm",md:"w-11 h-11 text-sm",lg:"w-12 h-12 text-base",xl:"w-14 h-14 text-base","2xl":"w-16 h-16 text-lg","3xl":"w-20 h-20 text-xl","4xl":"w-24 h-24 text-xl"},getFabSizeClasses:function(e){const t=e&&this.fabSizes[e]?e:"md";return this.fabSizes[t]},fabClasses:function(e){const t=e||"";return[this.fabBase(),this.getFabSizeClasses(t)].join(" ").trim()}},T={border:"border",display:"block w-full",outline:"outline-none outline-offset-0 outline-2",placeholder:"",ring:"",text:"",transition:C.classes("all","inOut","300"),base:function(){return[this.border,this.display,this.outline,this.placeholder,this.ring,this.text,this.transition].join(" ").trim()},sizes:{xs:"px-2 py-1.5 text-sm",sm:"px-3 py-2 text-base",md:"px-3 py-2 text-lg",lg:"px-4 py-3 text-xl",xl:"px-4 py-3 text-2xl","2xl":"px-5 py-4 text-3xl"},getSizeClasses:function(e){const t=e&&this.sizes[e]?e:"md";return this.sizes[t]},classes:function(e){const t=e||"";return[this.base(),this.getSizeClasses(t)].join(" ").trim()}},O={default:"text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200",error:"text-rose-500 hover:text-rose-600 dark:text-rose-300 dark:hover:text-rose-200",primary:"text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200",secondary:"text-teal-500 hover:text-teal-600 dark:text-teal-300 dark:hover:text-teal-200",success:"text-green-600 hover:text-green-700 dark:text-green-300 dark:hover:text-green-200"},L={"":"",default:"border-gray-200 dark:border-gray-600",error:"border-rose-600 dark:border-rose-300",primary:"border-blue-600 dark:border-blue-300",secondary:"border-violet-600 dark:border-violet-300",success:"border-green-600 dark:border-green-300"},D={default:"text-gray-500 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-gray-500 active:bg-gray-600 border-gray-300 hover:border-gray-800 focus:ring-gray-400 focus:border-gray-900",error:"text-rose-500 dark:text-rose-300 hover:text-white dark:hover:text-white hover:bg-rose-500 active:bg-rose-600 border-rose-300 hover:border-rose-800 focus:ring-rose-400 focus:border-rose-900",primary:"text-blue-500 dark:text-blue-300 hover:text-white dark:hover:text-white hover:bg-blue-500 active:bg-blue-600 border-blue-300 hover:border-blue-800 focus:ring-blue-400 focus:border-blue-900",secondary:"text-teal-600 dark:text-teal-500 hover:text-white dark:hover:text-white hover:bg-teal-600 active:bg-teal-800 border-teal-600 hover:border-teal-800 focus:ring-teal-500 focus:border-teal-900",success:"text-green-600 dark:text-green-500 hover:text-white dark:hover:text-white hover:bg-green-600 active:bg-green-800 border-green-600 hover:border-green-800 focus:ring-green-500 focus:border-green-900"},I={default:"text-gray-800 hover:text-black bg-gray-100 hover:bg-gray-200 active:bg-gray-300 border-gray-900 focus:border-black focus:ring-gray-400",error:"text-white bg-rose-500 hover:bg-rose-600 active:bg-rose-700 border-rose-800 focus:ring-rose-400 focus:border-rose-900",primary:"text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 border-blue-800 focus:ring-blue-400 focus:border-blue-900",secondary:"text-gray-900 hover:text-white bg-teal-500 hover:bg-teal-600 active:text-white active:bg-teal-700 border-teal-800 focus:ring-teal-400 focus:border-teal-900",success:"text-gray-900 hover:text-white bg-green-500 hover:bg-green-600 active:text-white active:bg-green-700 border-green-800 focus:ring-green-400 focus:border-green-900"},P={default:"text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",error:"text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",primary:"text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",secondary:"text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",success:"text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"},F={default:"",error:"text-white bg-rose-500 dark:bg-rose-600",primary:"text-white bg-blue-500 dark:bg-blue-600",secondary:"text-white bg-violet-500 dark:bg-violet-600",success:"text-white bg-green-500 dark:bg-green-600"},N={default:"text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",error:"text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",primary:"text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",secondary:"text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",success:"text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300"},H={default:"text-black bg-gray-100 dark:bg-gray-200",error:"text-black bg-rose-200 dark:bg-rose-300",primary:"text-black bg-blue-200 dark:bg-blue-300",secondary:"text-black bg-violet-200 dark:bg-violet-300",success:"text-black bg-green-300 dark:bg-green-400"},G={default:"bg-gray-50 dark:bg-gray-800 focus:bg-white dark:focus:bg-gray-900 border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:outline-blue-500/50 placeholder:text-gray-200 dark:placeholder:text-gray-600",success:"text-green-700 dark:text-green-200 bg-green-100 dark:bg-green-800 focus:bg-green-50 dark:focus:bg-green-900 border-green-300 dark:border-green-600 focus:border-green-500 focus:outline-green-500/50 placeholder:text-green-300 dark:placeholder:text-green-600",error:"text-rose-700 dark:text-rose-200 bg-rose-100 dark:bg-rose-800 focus:bg-rose-50 dark:focus:bg-rose-900 border-rose-300 dark:border-rose-600 focus:border-rose-500 focus:outline-rose-500/50 placeholder:text-rose-300 dark:placeholder:text-rose-600"},U={default:"",error:"text-rose-500 dark:text-rose-300",primary:"text-blue-500 dark:text-blue-300",secondary:"text-violet-500 dark:text-violet-300",success:"text-green-600 dark:text-green-300"},te={VvAnchor:{button:!1,buttonBlock:!1,buttonFab:!1,buttonSize:"md",color:"default",external:!1,href:"#",palette:"default"},VvButton:{block:!1,color:"primary",fab:!1,palette:"solid",size:"md",type:"button"},VvColorModeButton:{color:"default",mode:"light",palette:"outline",size:"xs"},VvEl:{borderPalette:"default",borderColor:"",groundPalette:"default",groundColor:"default",tag:"div",textPalette:"default",textColor:"default"},VvInput:{color:"default",palette:"validation",size:"md",type:"text"}},a={anchors:S(x({},$),{palettes:{default:O}}),borders:{palettes:{default:L}},buttons:S(x({},A),{palettes:{outline:D,solid:I}}),inputs:S(x({},T),{palettes:{validation:G}}),colorMode:{dark:{bg:"bg-gray-900",ground:"bg-gray-900",hex:"#242426",text:"text-gray-100",title:"Enable Dark Mode"},light:{bg:"bg-gray-100",ground:"bg-gray-100",hex:"#e1e1e3",text:"text-gray-900",title:"Enable Light Mode"}},grounds:{palettes:{console:P,default:F,monochromatic:N,pastel:H}},text:S(x({},z),{palettes:{default:U}}),transitions:x({},C),defaults:te};function re(e){return e.replace(/([A-Z])/g," $1").replace(/\s+/g," ").split(" ").map(s=>s.charAt(0).toUpperCase()+s.substring(1).toLowerCase()).join(" ").trim()}function oe(e,t){const r=String(e).trim();return/^[1-9]\d*$/.test(r)?Number(r):t}function ne(e,t=2){if(e===0)return"0 Bytes";const r=1024,o=t<0?0:t,s=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],l=Math.floor(Math.log(e)/Math.log(r));return parseFloat((e/Math.pow(r,l)).toFixed(o))+" "+s[l]}function se(e){let t=parseInt(e,10),r=Math.floor(parseInt(String(Number(t)/(24*3600))));t=t%(24*3600);let o=Math.floor(parseInt(String(Number(t)/3600)));t%=3600;let s=Math.floor(t/60);t%=60;let l=Math.floor(t),i=r<10?"0"+r:r,u=o<10?"0"+o:o,d=s<10?"0"+s:s,c=l<10?"0"+l:l,g=i==="00"?"":i+":";return g+=u==="00"?"":u+":",g+=d+":"+c,g}function ae(e){return new Intl.NumberFormat().format(e)}var le=function(t){return ie(t)&&!ue(t)};function ie(e){return!!e&&typeof e=="object"}function ue(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||ge(e)}var de=typeof Symbol=="function"&&Symbol.for,ce=de?Symbol.for("react.element"):60103;function ge(e){return e.$$typeof===ce}function be(e){return Array.isArray(e)?[]:{}}function V(e,t){return t.clone!==!1&&t.isMergeableObject(e)?m(be(e),e,t):e}function fe(e,t,r){return e.concat(t).map(function(o){return V(o,r)})}function he(e,t){if(!t.customMerge)return m;var r=t.customMerge(e);return typeof r=="function"?r:m}function xe(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return e.propertyIsEnumerable(t)}):[]}function _(e){return Object.keys(e).concat(xe(e))}function q(e,t){try{return t in e}catch{return!1}}function me(e,t){return q(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function pe(e,t,r){var o={};return r.isMergeableObject(e)&&_(e).forEach(function(s){o[s]=V(e[s],r)}),_(t).forEach(function(s){me(e,s)||(q(e,s)&&r.isMergeableObject(t[s])?o[s]=he(s,r)(e[s],t[s],r):o[s]=V(t[s],r))}),o}function m(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||fe,r.isMergeableObject=r.isMergeableObject||le,r.cloneUnlessOtherwiseSpecified=V;var o=Array.isArray(t),s=Array.isArray(e),l=o===s;return l?o?r.arrayMerge(e,t,r):pe(e,t,r):V(t,r)}m.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(o,s){return m(o,s,r)},{})};var ye=m,ke=ye;function ve(e){return Object.keys(e).length>0?ke(a,e):a}function Se(e=10){let t="";const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=r.length;for(let s=0;s<Number(e);s++)t+=r.charAt(Math.floor(Math.random()*o));return t}function Ve(e,t){let r=e||"",o=t||"-";return r.toString().toLowerCase().normalize("NFD").trim().replace(/\s+/g,o).replace(/[^\w\-]+/g,"").replace(/\-\-+/g,o)}function Ce(e){return e.replace(/[^\w\s\']|_/g," ").replace(/\s+/g," ").replace(/(?:^\w|[A-Z]|\b\w)/g,function(t,r){return r===0?t.toLowerCase():t.toUpperCase()}).replace(/\s+/g,"")}function ze(e){return e.replace(/[^A-z0-9._-]/gi,"")}function we(e){return e.filter((t,r,o)=>o.indexOf(t)===r)}const Be=["audio/flac","audio/mp4","audio/mpeg","audio/ogg","audio/x-flac","audio/webm"],R=["button","submit","reset"],Z=["light","dark"],Me=["up","down","left","right",""],je=["style","title","address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","main","nav","section","blockquote","dd","div","dl","dt","figcaption","figure","li","menu","ol","p","pre","ul","a","abbr","b","bdi","bdo","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","audio","map","video","iframe","object","picture","portal","svg","math","canvas","del","ins","caption","colgroup","table","tbody","td","tfoot","th","thead","tr","button","datalist","fieldset","form","input","label","legend","meter","optgroup","option","output","progress","select","textarea","details","dialog","summary"],Ee=["fab","fad","fal","far","fas","fat"],_e=["xs","sm","1x","lg","2x","3x","4x","5x","6x","7x","8x","9x","10x"],$e=[1,2,3,4,5,6],Ae=["image/gif","image/jpeg","image/png","image/svg+xml","image/webp"],W=["color","date","datetime-local","email","month","number","password","search","tel","text","time","url"],Te=["video/mp4","video/ogg","video/webm"];var h=(e,t)=>{const r=e.__vccOpts||e;for(const[o,s]of t)r[o]=s;return r};const Oe=n.defineComponent({name:"VvAnchor",props:{button:{type:Boolean,default:a.defaults.VvAnchor.button},buttonBlock:{type:Boolean,default:a.defaults.VvAnchor.buttonBlock},buttonFab:{type:Boolean,default:a.defaults.VvAnchor.buttonFab},buttonSize:{type:String,default:a.defaults.VvAnchor.buttonSize},color:{type:String,default:a.defaults.VvAnchor.color},external:{type:Boolean,default:a.defaults.VvAnchor.external},href:{type:String,default:a.defaults.VvAnchor.href},palette:{type:String,default:a.defaults.VvAnchor.palette}},setup(e){const t=Object.keys(n.inject("vv",{})).length>0?n.inject("vv"):a;return{classes:n.computed(()=>{var s,l,i,u,d,c,g,b,f,p,y,k,v,w,B,M;let o=[];return e.button===!0?(e.buttonBlock===!0&&e.buttonFab===!1?((s=t==null?void 0:t.buttons)!=null&&s.blockBase()&&o.push(t.buttons.blockBase()),e.buttonSize!==""&&((i=(l=t==null?void 0:t.buttons)==null?void 0:l.blockSizes)==null?void 0:i[e.buttonSize])&&o.push(t.buttons.blockSizes[e.buttonSize])):e.buttonBlock===!1&&e.buttonFab===!0?((u=t==null?void 0:t.buttons)!=null&&u.fabBase()&&o.push(t.buttons.fabBase()),e.buttonSize!==""&&((c=(d=t==null?void 0:t.buttons)==null?void 0:d.fabSizes)==null?void 0:c[e.buttonSize])&&o.push(t.buttons.fabSizes[e.buttonSize])):((g=t==null?void 0:t.buttons)!=null&&g.base()&&o.push(t.buttons.base()),e.buttonSize!==""&&((f=(b=t==null?void 0:t.buttons)==null?void 0:b.sizes)==null?void 0:f[e.buttonSize])&&o.push(t.buttons.sizes[e.buttonSize])),(k=(y=(p=t==null?void 0:t.buttons)==null?void 0:p.palettes)==null?void 0:y[e.palette])!=null&&k[e.color]&&o.push(t.buttons.palettes[e.palette][e.color])):((v=t==null?void 0:t.anchors)!=null&&v.base()&&o.push(t.anchors.base()),(M=(B=(w=t==null?void 0:t.anchors)==null?void 0:w.palettes)==null?void 0:B[e.palette])!=null&&M[e.color]&&o.push(t.anchors.palettes[e.palette][e.color])),o.join(" ").trim()})}}}),Le=["href"],De=["href"];function Ie(e,t,r,o,s,l){return e.external?(n.openBlock(),n.createElementBlock("a",{key:0,href:e.href,class:n.normalizeClass(e.classes),target:"_blank",rel:"noopener noreferrer"},[n.renderSlot(e.$slots,"default")],10,Le)):(n.openBlock(),n.createElementBlock("a",{key:1,href:e.href,class:n.normalizeClass(e.classes)},[n.renderSlot(e.$slots,"default")],10,De))}var Pe=h(Oe,[["render",Ie]]);const Fe=n.defineComponent({name:"VvAnchor",props:{block:{type:Boolean,default:a.defaults.VvButton.block},color:{type:String,default:a.defaults.VvButton.color},fab:{type:Boolean,default:a.defaults.VvButton.fab},palette:{type:String,default:a.defaults.VvButton.palette},size:{type:String,default:a.defaults.VvButton.size},type:{type:String,default:a.defaults.VvButton.type,validator:e=>R.includes(e)}},setup(e){const t=Object.keys(n.inject("vv",{})).length>0?n.inject("vv"):a,r=e.type;let o=n.computed(()=>{var l,i,u,d,c,g,b,f,p,y,k,v;let s=[];return e.block===!0&&e.fab===!1?((l=t==null?void 0:t.buttons)!=null&&l.blockBase()&&s.push(t.buttons.blockBase()),e.size!==""&&((u=(i=t==null?void 0:t.buttons)==null?void 0:i.blockSizes)==null?void 0:u[e.size])&&s.push(t.buttons.blockSizes[e.size])):e.fab===!0&&e.block===!1?((d=t==null?void 0:t.buttons)!=null&&d.fabBase()&&s.push(t.buttons.fabBase()),e.size!==""&&((g=(c=t==null?void 0:t.buttons)==null?void 0:c.fabSizes)==null?void 0:g[e.size])&&s.push(t.buttons.fabSizes[e.size])):((b=t==null?void 0:t.buttons)!=null&&b.base()&&s.push(t.buttons.base()),e.size!==""&&((p=(f=t==null?void 0:t.buttons)==null?void 0:f.sizes)==null?void 0:p[e.size])&&s.push(t.buttons.sizes[e.size])),(v=(k=(y=t==null?void 0:t.buttons)==null?void 0:y.palettes)==null?void 0:k[e.palette])!=null&&v[e.color]&&s.push(t.buttons.palettes[e.palette][e.color]),s.join(" ").trim()});return{btnType:r,classes:o}}}),Ne=["type"];function He(e,t,r,o,s,l){return n.openBlock(),n.createElementBlock("button",{type:e.btnType,class:n.normalizeClass(e.classes)},[n.renderSlot(e.$slots,"default")],10,Ne)}var Y=h(Fe,[["render",He]]);const Ge=n.defineComponent({name:"VvColorModeButton",components:{VvButton:Y},props:{mode:{type:String,default:a.defaults.VvColorModeButton.mode,validator:e=>Z.includes(e)},color:{type:String,default:a.defaults.VvColorModeButton.color},palette:{type:String,default:a.defaults.VvColorModeButton.palette},size:{type:String,default:a.defaults.VvColorModeButton.size},groundDark:{type:String,default:a.colorMode.dark.ground},groundDarkHex:{type:String,default:a.colorMode.dark.hex},groundLight:{type:String,default:a.colorMode.light.ground},groundLightHex:{type:String,default:a.colorMode.light.hex},textDark:{type:String,default:a.colorMode.dark.text},textLight:{type:String,default:a.colorMode.light.text},titleDark:{type:String,default:a.colorMode.dark.title},titleLight:{type:String,default:a.colorMode.light.title}},setup(e){const t=n.ref(e.mode),r=n.computed(()=>t.value==="dark"?"sun":"moon"),o=n.computed(()=>t.value==="dark"?e.titleLight:e.titleDark);return n.onMounted(()=>{document&&t.value==="light"&&(document.documentElement.classList.remove("dark",e.groundDark,e.textDark),document.documentElement.classList.add(e.groundLight,e.textLight),document.documentElement.style.backgroundColor=e.groundLightHex),document&&t.value==="dark"&&(document.documentElement.classList.remove(e.groundLight,e.textLight),document.documentElement.classList.add("dark",e.groundDark,e.textDark),document.documentElement.style.backgroundColor=e.groundDarkHex)}),{mode:t,icon:r,title:o}},methods:{toggleColorMode(e){document&&this.mode==="light"?(this.mode="dark",localStorage.setItem("colorMode","dark"),document.documentElement.classList.remove(this.groundLight,this.textLight),document.documentElement.classList.add("dark",this.groundDark,this.textDark),document.documentElement.style.backgroundColor=this.groundDarkHex):document&&this.mode==="dark"&&(this.mode="light",localStorage.setItem("colorMode","light"),document.documentElement.classList.remove("dark",this.groundDark,this.textDark),document.documentElement.classList.add(this.groundLight,this.textLight),document.documentElement.style.backgroundColor=this.groundLightHex)}}}),Ue={key:0,class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},qe=n.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1),Re=[qe],Ze={key:1,class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},We=n.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1),Ye=[We];function Je(e,t,r,o,s,l){const i=n.resolveComponent("VvButton");return n.openBlock(),n.createBlock(i,{title:e.title,onClick:t[0]||(t[0]=u=>e.toggleColorMode(u)),class:"rounded-full",color:e.color,fab:!0,palette:e.palette,type:"button",size:e.size},{default:n.withCtx(()=>[e.icon==="moon"?(n.openBlock(),n.createElementBlock("svg",Ue,Re)):n.createCommentVNode("",!0),e.icon==="sun"?(n.openBlock(),n.createElementBlock("svg",Ze,Ye)):n.createCommentVNode("",!0)]),_:1},8,["title","color","palette","size"])}var Qe=h(Ge,[["render",Je]]);const Xe=n.defineComponent({name:"VvEl",props:{borderPalette:{type:String,default:a.defaults.VvEl.borderPalette},borderColor:{type:String,default:a.defaults.VvEl.borderColor},groundPalette:{type:String,default:a.defaults.VvEl.groundPalette},groundColor:{type:String,default:a.defaults.VvEl.groundColor},tag:{type:String,default:a.defaults.VvEl.tag},textPalette:{type:String,default:a.defaults.VvEl.textPalette},textColor:{type:String,default:a.defaults.VvEl.textColor}},setup(e){const t=Object.keys(n.inject("vv",{})).length>0?n.inject("vv"):a;return{classes:n.computed(()=>{var s,l,i,u,d,c,g,b,f;let o=[];return(i=(l=(s=t==null?void 0:t.borders)==null?void 0:s.palettes)==null?void 0:l[e.borderPalette])!=null&&i[e.borderColor]&&o.push(t.borders.palettes[e.borderPalette][e.borderColor]),(c=(d=(u=t==null?void 0:t.grounds)==null?void 0:u.palettes)==null?void 0:d[e.groundPalette])!=null&&c[e.groundColor]&&o.push(t.grounds.palettes[e.groundPalette][e.groundColor]),(f=(b=(g=t==null?void 0:t.text)==null?void 0:g.palettes)==null?void 0:b[e.textPalette])!=null&&f[e.textColor]&&o.push(t.text.palettes[e.textPalette][e.textColor]),o.join(" ").trim()})}}});function Ke(e,t,r,o,s,l){return n.openBlock(),n.createBlock(n.resolveDynamicComponent(e.tag),{class:n.normalizeClass(e.classes)},{default:n.withCtx(()=>[n.renderSlot(e.$slots,"default")]),_:3},8,["class"])}var et=h(Xe,[["render",Ke]]);const tt=n.defineComponent({name:"VvEl",props:{color:{type:String,default:a.defaults.VvInput.color},palette:{type:String,default:a.defaults.VvInput.palette},size:{type:String,default:a.defaults.VvInput.size},type:{type:String,default:a.defaults.VvInput.type,validator:e=>W.includes(e)}},setup(e){const t=Object.keys(n.inject("vv",{})).length>0?n.inject("vv"):a;return{classes:n.computed(()=>{var s,l,i,u,d,c;let o=[];return(s=t==null?void 0:t.inputs)!=null&&s.base()&&o.push(t.inputs.base()),e.size!==""&&((i=(l=t==null?void 0:t.inputs)==null?void 0:l.sizes)==null?void 0:i[e.size])&&o.push(t.inputs.sizes[e.size]),(c=(d=(u=t==null?void 0:t.inputs)==null?void 0:u.palettes)==null?void 0:d[e.palette])!=null&&c[e.color]&&o.push(t.inputs.palettes[e.palette][e.color]),o.join(" ").trim()})}}}),rt=["type"];function ot(e,t,r,o,s,l){return n.openBlock(),n.createElementBlock("input",{type:e.type,class:n.normalizeClass(e.classes)},null,10,rt)}var nt=h(tt,[["render",ot]]);const st=n.defineComponent({name:"VueVentusLogoText",props:{colorClasses:{type:String,default:"w-full fill-gray-900 dark:fill-gray-100"}}}),at=n.createElementVNode("path",{d:"m6.5 0 51.9 121.1L110.3 0h6.7L61.6 129h-6.2L0 0h6.5zM181.2 124.4c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V14.2h5.5v57.5c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V14.2h5.7v57.5c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.3 3 12 4.5 20.1 4.5zM333.6 123.8v5.2h-75.8V14.2h74.3v5.2h-68.7v48.3h60.1v5.2h-60.1v50.9h70.2zM351.3 0l51.9 121.1L455 0h6.7l-55.4 129h-6.2L344.7 0h6.6zM556.1 123.8v5.2h-75.8V14.2h74.3v5.2H486v48.3h60.1v5.2H486v50.9h70.1zM585.4 24.9V129h-5.7V14.2h4.2l84.4 105.9V14.2h5.7V129h-5.5L585.4 24.9zM784 19.4h-43V129h-5.7V19.4h-43v-5.2H784v5.2zM848 124.4c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V14.2h5.5v57.5c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V14.2h5.7v57.5c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.3 3 12 4.5 20.1 4.5zM991.2 31.2c-4.2-4.6-8.8-7.9-13.9-9.8-5.1-1.9-11-2.8-17.8-2.8-12.2 0-21 2.3-26.5 6.9-5.5 4.6-8.2 10.8-8.2 18.6 0 3.9.7 7.1 2 9.8 1.3 2.6 3.4 4.9 6.2 6.7 2.8 1.8 6.4 3.4 10.8 4.6 4.4 1.2 9.7 2.5 15.8 3.8 6.2 1.3 11.9 2.7 17 4.2s9.4 3.4 12.9 5.7c3.6 2.3 6.3 5.2 8.2 8.6 1.9 3.4 2.9 7.7 2.9 12.8 0 4.8-.9 9.1-2.8 12.8-1.9 3.7-4.6 6.7-8.2 9.2-3.6 2.5-7.8 4.3-12.8 5.6-5 1.2-10.6 1.9-16.7 1.9-9.2 0-17.4-1.4-24.7-4.3-7.3-2.9-14.1-7.2-20.4-13.2l3.4-4c5.4 5.5 11.5 9.6 18.4 12.4 6.9 2.8 14.7 4.2 23.4 4.2 10.8 0 19.3-2 25.5-5.9 6.2-3.9 9.3-9.9 9.3-18 0-4.1-.8-7.6-2.3-10.4-1.5-2.9-3.8-5.3-6.9-7.3-3.1-2-7-3.7-11.6-5.2S964 75.3 957.6 74c-6.3-1.3-11.8-2.6-16.6-4-4.8-1.4-8.8-3.2-12.1-5.3-3.3-2.2-5.8-4.8-7.4-7.9-1.7-3.1-2.5-7.1-2.5-11.8 0-5.1 1-9.6 2.9-13.5 1.9-3.9 4.7-7.2 8.2-9.9 3.5-2.6 7.7-4.7 12.7-6.1 5-1.4 10.4-2.1 16.5-2.1 7.4 0 14 1.1 19.6 3.2 5.6 2.2 10.7 5.6 15.4 10.3l-3.1 4.3z"},null,-1),lt=[at];function it(e,t,r,o,s,l){return n.openBlock(),n.createElementBlock("svg",{class:n.normalizeClass(e.colorClasses),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 129","xml:space":"preserve"},lt,2)}var ut=h(st,[["render",it]]);const dt=n.defineComponent({name:"VueVentusSpinningMark",props:{animationClass:{type:String,default:"animate-spin-reverse-4s"},enableAnimation:{type:Boolean,default:!0},fillOne:{type:String,default:"#41b883"},fillTwo:{type:String,default:"#2298bd"}},setup(e){return{classes:n.computed(()=>e.enableAnimation?e.animationClass:"")}}}),ct=["fill"],gt=["fill"];function bt(e,t,r,o,s,l){return n.openBlock(),n.createElementBlock("svg",{class:n.normalizeClass(e.classes),version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 1000 1000","xml:space":"preserve"},[n.createElementVNode("path",{fill:e.fillOne,d:"M210.3 237.6c0-61.4 19.2-118.5 51.8-165.4C88.8 152.1-84.2 466.7 81 657c134.5 134.8 363 48.8 386.2-131.2-66.9-7.6-126.8-37.9-172-83.1-52.4-52.4-84.9-125-84.9-205.1zM919.7 336c-134.5-134.8-363-48.8-386.2 131.2 66.9 7.6 126.8 37.9 172 83.1 52.5 52.5 85 125 85 205.1 0 61.4-19.2 118.5-51.8 165.4 173.2-79.9 346.3-394.6 181-584.8z"},null,8,ct),n.createElementVNode("g",null,[n.createElementVNode("path",{fill:e.fillTwo,d:"M529.7 529.6C505.2 745.2 253.8 858.5 76.1 734.7c38.9 115.6 205.6 246 371.4 255.6 161.6 9.4 309.9-110.9 268.4-282.5-21.1-87.5-88.6-165.6-186.2-178.2zM339.8 77.1C205 211.6 291 440.2 471 463.4c7.6-66.9 37.9-126.8 83.1-172 52.5-52.5 125-85 205.1-85 61.4 0 118.5 19.2 165.4 51.8C844.8 84.9 530.1-88.1 339.8 77.1z"},null,8,gt)])],2)}var ft=h(dt,[["render",bt]]);exports.AnchorDefault=O;exports.Anchors=$;exports.BorderDefault=L;exports.ButtonOutline=D;exports.ButtonSolid=I;exports.Buttons=A;exports.GroundConsole=P;exports.GroundDefault=F;exports.GroundMonochromatic=N;exports.GroundPastel=H;exports.InputValidation=G;exports.Inputs=T;exports.Text=z;exports.TextDefault=U;exports.Transitions=C;exports.ValidAudioSourceTypes=Be;exports.ValidButtonTypes=R;exports.ValidColorModes=Z;exports.ValidDirections=Me;exports.ValidElementTags=je;exports.ValidFontAwesomeFamilies=Ee;exports.ValidFontAwesomeSizes=_e;exports.ValidHeadingLevels=$e;exports.ValidImageSourceTypes=Ae;exports.ValidInputTypes=W;exports.ValidVideoSourceTypes=Te;exports.VueVentusLogoText=ut;exports.VueVentusSpinningMark=ft;exports.VvAnchor=Pe;exports.VvButton=Y;exports.VvColorModeButton=Qe;exports.VvConfig=a;exports.VvEl=et;exports.VvInput=nt;exports.camelCaseToTitleCase=re;exports.digitsOnly=oe;exports.formatBytes=ne;exports.formatMediaTime=se;exports.formatNumber=ae;exports.mergeWithVvConfig=ve;exports.randomString=Se;exports.slugifyString=Ve;exports.stringToCamelCase=Ce;exports.stringToFilename=ze;exports.uniqueArray=we;
