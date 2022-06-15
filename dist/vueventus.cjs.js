"use strict";var Y=Object.defineProperty,J=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var A=(t,e,r)=>e in t?Y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,h=(t,e)=>{for(var r in e||(e={}))X.call(e,r)&&A(t,r,e[r]);if(E)for(var r of E(e))K.call(e,r)&&A(t,r,e[r]);return t},v=(t,e)=>J(t,Q(e));Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var a=require("vue"),w={align:"",decoration:"",family:"",lineHeight:"",smoothing:"subpixel-antialiased",spacing:"",weight:"",wordBreak:"",base:function(){return[this.align,this.decoration,this.family,this.lineHeight,this.smoothing,this.spacing,this.weight,this.wordBreak].join(" ").trim()},sizes:{"5xs":"text-5xs","4xs":"text-4xs","3xs":"text-3xs","2xs":"text-2xs",xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl","3xl":"text-3xl","4xl":"text-4xl","5xl":"text-5xl","6xl":"text-6xl","7xl":"text-7xl","8xl":"text-8xl","9xl":"text-9xl","10xl":"text-10xl","11xl":"text-11xl","12xl":"text-12xl"},getSizeClasses:function(t){const e=t&&this.sizes[t]?t:"md";return this.sizes[e]},classes:function(t){const e=t||"";return[this.base(),this.getSizeClasses(e)].join(" ").trim()}},V={durations:{1200:"duration-1200",1150:"duration-1150",1100:"duration-1100",1050:"duration-1050",1e3:"duration-1000",950:"duration-950",900:"duration-900",850:"duration-850",800:"duration-800",750:"duration-750",700:"duration-700",650:"duration-650",600:"duration-600",550:"duration-550",500:"duration-500",475:"duration-475",450:"duration-450",425:"duration-425",400:"duration-400",375:"duration-375",350:"duration-350",325:"duration-325",300:"duration-300",275:"duration-275",250:"duration-250",225:"duration-225",200:"duration-200",175:"duration-175",150:"duration-150",125:"duration-125",100:"duration-100",75:"duration-75",50:"duration-50",25:"duration-25"},easings:{linear:"ease-linear",in:"ease-in",out:"ease-out",inOut:"ease-in-out"},transitions:{default:"transition",all:"transition-all",colors:"transition-colors",none:"transition-none",opacity:"transition-opacity",shadow:"transition-shadow",transform:"transition-transform"},getDurationClasses:function(t){const e=t&&this.durations[t]?t:"300";return this.durations[e]},getEasingClasses:function(t){const e=t&&this.easings[t]?t:"inOut";return this.easings[e]},getTransitionClasses:function(t){const e=t&&this.transitions[t]?t:"default";return this.transitions[e]},custom:function(t){const e={transitions:t&&t.transitions?t.transitions:"",easings:t&&t.easings?t.easings:"",durations:t&&t.durations?t.durations:""};return[this.getTransitionClasses(e.transitions),this.getEasingClasses(e.easings),this.getDurationClasses(e.durations)].join(" ").trim()},classes:function(t,e,r){const s=t||"",o=e||"",l=r||"";return[this.getTransitionClasses(s),this.getEasingClasses(o),this.getDurationClasses(l)].join(" ").trim()}},_={cursor:"cursor-pointer",display:"",focus:"",text:"underline underline-offset-2",transition:V.classes("colors","inOut","300"),base:function(){return[this.cursor,this.display,this.focus,this.text,this.transition].join(" ").trim()},sizes:w.sizes,getSizeClasses:function(t){const e=t&&this.sizes[t]?t:"md";return this.sizes[e]},classes:function(t){const e=t||"";return[this.base(),this.getSizeClasses(e)].join(" ").trim()}},T={border:"border border-transparent",cursor:"cursor-pointer",disabled:"disabled:opacity-25",display:"inline-flex items-center",focus:"focus:outline-none focus:ring focus:ring-opacity-50",text:"font-semibold uppercase tracking-widest",transition:V.classes("all","inOut","300"),base:function(){return[this.border,this.cursor,this.disabled,this.display,this.focus,this.text,this.transition].join(" ").trim()},sizes:{"4xs":"px-1 py-px text-xxs","3xs":"px-1.5 py-0.5 text-xxs","2xs":"px-2 py-1 text-xs",xs:"px-2.5 py-1.5 text-xs",sm:"px-2.5 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-4 py-2 text-base",xl:"px-6 py-3 text-base","2xl":"px-7 py-4 text-lg","3xl":"px-8 py-4 text-xl","4xl":"px-8 py-5 text-xl"},getSizeClasses:function(t){const e=t&&this.sizes[t]?t:"md";return this.sizes[e]},classes:function(t){const e=t||"";return[this.base(),this.getSizeClasses(e)].join(" ").trim()},blockDisplay:"block w-full flex flex-col items-center justify-center",blockBase:function(){return[this.border,this.cursor,this.disabled,this.blockDisplay,this.focus,this.text,this.transition].join(" ").trim()},blockSizes:{"4xs":"px-1 py-1 text-2xs","3xs":"px-2.5 py-1.5 text-2xs","2xs":"px-2.5 py-1.5 text-xs",xs:"px-4 py-2 text-sm",sm:"px-4 py-2 text-base",md:"px-6 py-3 text-base",lg:"px-6 py-3 text-lg",xl:"px-7 py-3.5 text-lg","2xl":"px-8 py-5 text-xl","3xl":"px-9 py-5 text-2xl","4xl":"px-10 py-6 text-2xl"},getBlockSizeClasses:function(t){const e=t&&this.blockSizes[t]?t:"md";return this.blockSizes[e]},blockClasses:function(t){const e=t||"";return[this.blockBase(),this.getBlockSizeClasses(e)].join(" ").trim()},fabDisplay:"inline-flex items-center items-center justify-center",fabBase:function(){return[this.border,this.cursor,this.disabled,this.fabDisplay,this.focus,this.text,this.transition].join(" ").trim()},fabSizes:{"4xs":"w-6 h-6 text-xxs","3xs":"w-7 h-7 text-xxs","2xs":"w-8 h-8 text-xs",xs:"w-9 h-9 text-xs",sm:"w-10 h-10 text-sm",md:"w-11 h-11 text-sm",lg:"w-12 h-12 text-base",xl:"w-14 h-14 text-base","2xl":"w-16 h-16 text-lg","3xl":"w-20 h-20 text-xl","4xl":"w-24 h-24 text-xl"},getFabSizeClasses:function(t){const e=t&&this.fabSizes[t]?t:"md";return this.fabSizes[e]},fabClasses:function(t){const e=t||"";return[this.fabBase(),this.getFabSizeClasses(e)].join(" ").trim()}},L={border:"border",display:"block w-full",outline:"outline-none outline-offset-0 outline-2",placeholder:"",ring:"",text:"",transition:V.classes("all","inOut","300"),base:function(){return[this.border,this.display,this.outline,this.placeholder,this.ring,this.text,this.transition].join(" ").trim()},sizes:{xs:"px-2 py-1.5 text-sm",sm:"px-3 py-2 text-base",md:"px-3 py-2 text-lg",lg:"px-4 py-3 text-xl",xl:"px-4 py-3 text-2xl","2xl":"px-5 py-4 text-3xl"},getSizeClasses:function(t){const e=t&&this.sizes[t]?t:"md";return this.sizes[e]},classes:function(t){const e=t||"";return[this.base(),this.getSizeClasses(e)].join(" ").trim()}},D={default:"text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200",error:"text-rose-500 hover:text-rose-600 dark:text-rose-300 dark:hover:text-rose-200",primary:"text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200",secondary:"text-teal-500 hover:text-teal-600 dark:text-teal-300 dark:hover:text-teal-200",success:"text-green-600 hover:text-green-700 dark:text-green-300 dark:hover:text-green-200"},O={"":"",default:"border-gray-200 dark:border-gray-600",error:"border-rose-600 dark:border-rose-300",primary:"border-blue-600 dark:border-blue-300",secondary:"border-violet-600 dark:border-violet-300",success:"border-green-600 dark:border-green-300"},P={default:"text-gray-500 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-gray-500 active:bg-gray-600 border-gray-300 hover:border-gray-800 focus:ring-gray-400 focus:border-gray-900",error:"text-rose-500 dark:text-rose-300 hover:text-white dark:hover:text-white hover:bg-rose-500 active:bg-rose-600 border-rose-300 hover:border-rose-800 focus:ring-rose-400 focus:border-rose-900",primary:"text-blue-500 dark:text-blue-300 hover:text-white dark:hover:text-white hover:bg-blue-500 active:bg-blue-600 border-blue-300 hover:border-blue-800 focus:ring-blue-400 focus:border-blue-900",secondary:"text-teal-600 dark:text-teal-500 hover:text-white dark:hover:text-white hover:bg-teal-600 active:bg-teal-800 border-teal-600 hover:border-teal-800 focus:ring-teal-500 focus:border-teal-900",success:"text-green-600 dark:text-green-500 hover:text-white dark:hover:text-white hover:bg-green-600 active:bg-green-800 border-green-600 hover:border-green-800 focus:ring-green-500 focus:border-green-900"},F={default:"text-gray-800 hover:text-black bg-gray-100 hover:bg-gray-200 active:bg-gray-300 border-gray-900 focus:border-black focus:ring-gray-400",error:"text-white bg-rose-500 hover:bg-rose-600 active:bg-rose-700 border-rose-800 focus:ring-rose-400 focus:border-rose-900",primary:"text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 border-blue-800 focus:ring-blue-400 focus:border-blue-900",secondary:"text-gray-900 hover:text-white bg-teal-500 hover:bg-teal-600 active:text-white active:bg-teal-700 border-teal-800 focus:ring-teal-400 focus:border-teal-900",success:"text-gray-900 hover:text-white bg-green-500 hover:bg-green-600 active:text-white active:bg-green-700 border-green-800 focus:ring-green-400 focus:border-green-900"},I={default:"text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",error:"text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",primary:"text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",secondary:"text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",success:"text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"},$={default:"",error:"text-white bg-rose-500 dark:bg-rose-600",primary:"text-white bg-blue-500 dark:bg-blue-600",secondary:"text-white bg-violet-500 dark:bg-violet-600",success:"text-white bg-green-500 dark:bg-green-600"},N={default:"text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",error:"text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",primary:"text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",secondary:"text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",success:"text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300"},H={default:"text-black bg-gray-100 dark:bg-gray-200",error:"text-black bg-rose-200 dark:bg-rose-300",primary:"text-black bg-blue-200 dark:bg-blue-300",secondary:"text-black bg-violet-200 dark:bg-violet-300",success:"text-black bg-green-300 dark:bg-green-400"},G={default:"bg-gray-50 dark:bg-gray-800 focus:bg-white dark:focus:bg-gray-900 border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:outline-blue-500/50 placeholder:text-gray-200 dark:placeholder:text-gray-600",success:"text-green-700 dark:text-green-200 bg-green-100 dark:bg-green-800 focus:bg-green-50 dark:focus:bg-green-900 border-green-300 dark:border-green-600 focus:border-green-500 focus:outline-green-500/50 placeholder:text-green-300 dark:placeholder:text-green-600",error:"text-rose-700 dark:text-rose-200 bg-rose-100 dark:bg-rose-800 focus:bg-rose-50 dark:focus:bg-rose-900 border-rose-300 dark:border-rose-600 focus:border-rose-500 focus:outline-rose-500/50 placeholder:text-rose-300 dark:placeholder:text-rose-600"},U={default:"",error:"text-rose-500 dark:text-rose-300",primary:"text-blue-500 dark:text-blue-300",secondary:"text-violet-500 dark:text-violet-300",success:"text-green-600 dark:text-green-300"},n={anchors:v(h({},_),{palettes:{default:D}}),borders:{palettes:{default:O}},buttons:v(h({},T),{palettes:{outline:P,solid:F}}),inputs:v(h({},L),{palettes:{validation:G}}),colorMode:{dark:{bg:"bg-gray-900",ground:"bg-gray-900",hex:"#242426",text:"text-gray-100",title:"Enable Dark Mode"},light:{bg:"bg-gray-100",ground:"bg-gray-100",hex:"#e1e1e3",text:"text-gray-900",title:"Enable Light Mode"}},grounds:{palettes:{console:I,default:$,monochromatic:N,pastel:H}},text:v(h({},w),{palettes:{default:U}}),transitions:h({},V),defaults:{VvAnchor:{button:!1,buttonBlock:!1,buttonFab:!1,buttonSize:"md",color:"default",external:!1,href:"#",palette:"default"},VvButton:{block:!1,color:"primary",fab:!1,palette:"solid",size:"md",type:"button"},VvColorModeButton:{color:"default",mode:"light",palette:"outline",size:"xs"},VvEl:{borderPalette:"default",borderColor:"",groundPalette:"default",groundColor:"default",tag:"div",textPalette:"default",textColor:"default"}}};function ee(t){return t.replace(/([A-Z])/g," $1").replace(/\s+/g," ").split(" ").map(o=>o.charAt(0).toUpperCase()+o.substring(1).toLowerCase()).join(" ").trim()}function te(t,e){const r=String(t).trim();return/^[1-9]\d*$/.test(r)?Number(r):e}function re(t,e=2){if(t===0)return"0 Bytes";const r=1024,s=e<0?0:e,o=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],l=Math.floor(Math.log(t)/Math.log(r));return parseFloat((t/Math.pow(r,l)).toFixed(s))+" "+o[l]}function oe(t=0){let e=parseInt(t,10),r=Math.floor(parseInt(e/(24*3600)));e=e%(24*3600);let s=Math.floor(parseInt(e/3600));e%=3600;let o=Math.floor(e/60);e%=60;let l=Math.floor(e);r<10&&(r="0"+r),s<10&&(s="0"+s),o<10&&(o="0"+o),l<10&&(l="0"+l);let i=r==="00"?"":r+":";return i+=s==="00"?"":s+":",i+=o+":"+l,i}function ae(t){return new Intl.NumberFormat().format(t)}var se=function(e){return ne(e)&&!le(e)};function ne(t){return!!t&&typeof t=="object"}function le(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||de(t)}var ie=typeof Symbol=="function"&&Symbol.for,ue=ie?Symbol.for("react.element"):60103;function de(t){return t.$$typeof===ue}function ce(t){return Array.isArray(t)?[]:{}}function S(t,e){return e.clone!==!1&&e.isMergeableObject(t)?p(ce(t),t,e):t}function ge(t,e,r){return t.concat(e).map(function(s){return S(s,r)})}function be(t,e){if(!e.customMerge)return p;var r=e.customMerge(t);return typeof r=="function"?r:p}function fe(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(e){return t.propertyIsEnumerable(e)}):[]}function j(t){return Object.keys(t).concat(fe(t))}function q(t,e){try{return e in t}catch{return!1}}function xe(t,e){return q(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))}function he(t,e,r){var s={};return r.isMergeableObject(t)&&j(t).forEach(function(o){s[o]=S(t[o],r)}),j(e).forEach(function(o){xe(t,o)||(q(t,o)&&r.isMergeableObject(e[o])?s[o]=be(o,r)(t[o],e[o],r):s[o]=S(e[o],r))}),s}function p(t,e,r){r=r||{},r.arrayMerge=r.arrayMerge||ge,r.isMergeableObject=r.isMergeableObject||se,r.cloneUnlessOtherwiseSpecified=S;var s=Array.isArray(e),o=Array.isArray(t),l=s===o;return l?s?r.arrayMerge(t,e,r):he(t,e,r):S(e,r)}p.all=function(e,r){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(s,o){return p(s,o,r)},{})};var pe=p,me=pe;function ye(t){return Object.keys(t).length>0?me(n,t):n}function ke(t=10){let e="";const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=r.length;for(let o=0;o<Number(t);o++)e+=r.charAt(Math.floor(Math.random()*s));return e}function ve(t,e){let r=t||"",s=e||"-";return r.toString().toLowerCase().normalize("NFD").trim().replace(/\s+/g,s).replace(/[^\w\-]+/g,"").replace(/\-\-+/g,s)}function Se(t){return t.replace(/[^\w\s\']|_/g," ").replace(/\s+/g," ").replace(/(?:^\w|[A-Z]|\b\w)/g,function(e,r){return r===0?e.toLowerCase():e.toUpperCase()}).replace(/\s+/g,"")}function Ve(t){return t.replace(/[^A-z0-9._-]/gi,"")}function we(t){return t.filter((e,r,s)=>s.indexOf(e)===r)}var Ce=["audio/flac","audio/mp4","audio/mpeg","audio/ogg","audio/x-flac","audio/webm"],R=["button","submit","reset"],Z=["light","dark"],Be=["up","down","left","right",""],ze=["style","title","address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","main","nav","section","blockquote","dd","div","dl","dt","figcaption","figure","li","menu","ol","p","pre","ul","a","abbr","b","bdi","bdo","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","audio","map","video","iframe","object","picture","portal","svg","math","canvas","del","ins","caption","colgroup","table","tbody","td","tfoot","th","thead","tr","button","datalist","fieldset","form","input","label","legend","meter","optgroup","option","output","progress","select","textarea","details","dialog","summary"],Me=["fab","fad","fal","far","fas","fat"],Ee=["xs","sm","1x","lg","2x","3x","4x","5x","6x","7x","8x","9x","10x"],Ae=[1,2,3,4,5,6],je=["image/gif","image/jpeg","image/png","image/svg+xml","image/webp"],_e=["color","date","datetime-local","email","month","number","password","search","tel","text","time","url"],Te=["video/mp4","video/ogg","video/webm"];const Le=["href"],De=["href"],Oe={__name:"VvAnchor",props:{button:{type:Boolean,default:n.defaults.VvAnchor.button},buttonBlock:{type:Boolean,default:n.defaults.VvAnchor.buttonBlock},buttonFab:{type:Boolean,default:n.defaults.VvAnchor.buttonFab},buttonSize:{type:String,default:n.defaults.VvAnchor.buttonSize},color:{type:String,default:n.defaults.VvAnchor.color},external:{type:Boolean,default:n.defaults.VvAnchor.external},href:{type:String,default:n.defaults.VvAnchor.href},palette:{type:String,default:n.defaults.VvAnchor.palette}},setup(t){const e=t,r=Object.keys(a.inject("vv",{})).length>0?a.inject("vv"):n;let s=a.computed(()=>{var l,i,u,d,c,g,b,f,x,m,y,k,C,B,z,M;let o=[];return e.button===!0?(e.buttonBlock===!0&&e.buttonFab===!1?((l=r==null?void 0:r.buttons)!=null&&l.blockBase()&&o.push(r.buttons.blockBase()),e.buttonSize!==""&&((u=(i=r==null?void 0:r.buttons)==null?void 0:i.blockSizes)==null?void 0:u[e.buttonSize])&&o.push(r.buttons.blockSizes[e.buttonSize])):e.buttonBlock===!1&&e.buttonFab===!0?((d=r==null?void 0:r.buttons)!=null&&d.fabBase()&&o.push(r.buttons.fabBase()),e.buttonSize!==""&&((g=(c=r==null?void 0:r.buttons)==null?void 0:c.fabSizes)==null?void 0:g[e.buttonSize])&&o.push(r.buttons.fabSizes[e.buttonSize])):((b=r==null?void 0:r.buttons)!=null&&b.base()&&o.push(r.buttons.base()),e.buttonSize!==""&&((x=(f=r==null?void 0:r.buttons)==null?void 0:f.sizes)==null?void 0:x[e.buttonSize])&&o.push(r.buttons.sizes[e.buttonSize])),(k=(y=(m=r==null?void 0:r.buttons)==null?void 0:m.palettes)==null?void 0:y[e.palette])!=null&&k[e.color]&&o.push(r.buttons.palettes[e.palette][e.color])):((C=r==null?void 0:r.anchors)!=null&&C.base()&&o.push(r.anchors.base()),(M=(z=(B=r==null?void 0:r.anchors)==null?void 0:B.palettes)==null?void 0:z[e.palette])!=null&&M[e.color]&&o.push(r.anchors.palettes[e.palette][e.color])),o.join(" ").trim()});return(o,l)=>t.external?(a.openBlock(),a.createElementBlock("a",{key:0,href:t.href,class:a.normalizeClass(a.unref(s)),target:"_blank",rel:"noopener noreferrer"},[a.renderSlot(o.$slots,"default")],10,Le)):(a.openBlock(),a.createElementBlock("a",{key:1,href:t.href,class:a.normalizeClass(a.unref(s))},[a.renderSlot(o.$slots,"default")],10,De))}},Pe=["type"],W={__name:"VvButton",props:{block:{type:Boolean,default:n.defaults.VvButton.block},color:{type:String,default:n.defaults.VvButton.color},fab:{type:Boolean,default:n.defaults.VvButton.fab},palette:{type:String,default:n.defaults.VvButton.palette},size:{type:String,default:n.defaults.VvButton.size},type:{type:String,default:n.defaults.VvButton.type,validator:t=>R.includes(t)}},setup(t){const e=t,r=Object.keys(a.inject("vv",{})).length>0?a.inject("vv"):n;let s=a.computed(()=>{var l,i,u,d,c,g,b,f,x,m,y,k;let o=[];return e.block===!0&&e.fab===!1?((l=r==null?void 0:r.buttons)!=null&&l.blockBase()&&o.push(r.buttons.blockBase()),e.size!==""&&((u=(i=r==null?void 0:r.buttons)==null?void 0:i.blockSizes)==null?void 0:u[e.size])&&o.push(r.buttons.blockSizes[e.size])):e.fab===!0&&e.block===!1?((d=r==null?void 0:r.buttons)!=null&&d.fabBase()&&o.push(r.buttons.fabBase()),e.size!==""&&((g=(c=r==null?void 0:r.buttons)==null?void 0:c.fabSizes)==null?void 0:g[e.size])&&o.push(r.buttons.fabSizes[e.size])):((b=r==null?void 0:r.buttons)!=null&&b.base()&&o.push(r.buttons.base()),e.size!==""&&((x=(f=r==null?void 0:r.buttons)==null?void 0:f.sizes)==null?void 0:x[e.size])&&o.push(r.buttons.sizes[e.size])),(k=(y=(m=r==null?void 0:r.buttons)==null?void 0:m.palettes)==null?void 0:y[e.palette])!=null&&k[e.color]&&o.push(r.buttons.palettes[e.palette][e.color]),o.join(" ").trim()});return(o,l)=>(a.openBlock(),a.createElementBlock("button",{type:t.type,class:a.normalizeClass(a.unref(s))},[a.renderSlot(o.$slots,"default")],10,Pe))}},Fe={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},Ie=a.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1),$e=[Ie],Ne={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},He=a.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1),Ge=[He],Ue={__name:"VvColorModeButton",props:{mode:{type:String,default:n.defaults.VvColorModeButton.mode,validator:t=>Z.includes(t)},color:{type:String,default:n.defaults.VvColorModeButton.color},palette:{type:String,default:n.defaults.VvColorModeButton.palette},size:{type:String,default:n.defaults.VvColorModeButton.size},groundDark:{type:String,default:n.colorMode.dark.ground},groundDarkHex:{type:String,default:n.colorMode.dark.hex},groundLight:{type:String,default:n.colorMode.light.ground},groundLightHex:{type:String,default:n.colorMode.light.hex},textDark:{type:String,default:n.colorMode.dark.text},textLight:{type:String,default:n.colorMode.light.text},titleDark:{type:String,default:n.colorMode.dark.title},titleLight:{type:String,default:n.colorMode.light.title}},setup(t){const e=t,r=a.ref(e.mode),s=a.computed(()=>r.value==="dark"?"sun":"moon"),o=a.computed(()=>r.value==="dark"?e.titleLight:e.titleDark);a.onMounted(()=>{document&&r.value==="light"&&(document.documentElement.classList.remove("dark",e.groundDark,e.textDark),document.documentElement.classList.add(e.groundLight,e.textLight),document.documentElement.style.backgroundColor=e.groundLightHex),document&&r.value==="dark"&&(document.documentElement.classList.remove(e.groundLight,e.textLight),document.documentElement.classList.add("dark",e.groundDark,e.textDark),document.documentElement.style.backgroundColor=e.groundDarkHex)});function l(i){document&&r.value==="light"?(r.value="dark",localStorage.setItem("colorMode","dark"),document.documentElement.classList.remove(e.groundLight,e.textLight),document.documentElement.classList.add("dark",e.groundDark,e.textDark),document.documentElement.style.backgroundColor=e.groundDarkHex):document&&r.value==="dark"&&(r.value="light",localStorage.setItem("colorMode","light"),document.documentElement.classList.remove("dark",e.groundDark,e.textDark),document.documentElement.classList.add(e.groundLight,e.textLight),document.documentElement.style.backgroundColor=e.groundLightHex)}return(i,u)=>(a.openBlock(),a.createBlock(W,{title:a.unref(o),onClick:u[0]||(u[0]=d=>l()),class:"rounded-full",color:t.color,fab:!0,palette:t.palette,type:"button",size:t.size},{default:a.withCtx(()=>[a.unref(s)==="moon"?(a.openBlock(),a.createElementBlock("svg",Fe,$e)):a.createCommentVNode("",!0),a.unref(s)==="sun"?(a.openBlock(),a.createElementBlock("svg",Ne,Ge)):a.createCommentVNode("",!0)]),_:1},8,["title","color","palette","size"]))}},qe={__name:"VvEl",props:{borderPalette:{type:String,default:n.defaults.VvEl.borderPalette},borderColor:{type:String,default:n.defaults.VvEl.borderColor},groundPalette:{type:String,default:n.defaults.VvEl.groundPalette},groundColor:{type:String,default:n.defaults.VvEl.groundColor},tag:{type:String,default:n.defaults.VvEl.tag},textPalette:{type:String,default:n.defaults.VvEl.textPalette},textColor:{type:String,default:n.defaults.VvEl.textColor}},setup(t){const e=t,r=Object.keys(a.inject("vv",{})).length>0?a.inject("vv"):n;let s=a.computed(()=>{var l,i,u,d,c,g,b,f,x;let o=[];return(u=(i=(l=r==null?void 0:r.borders)==null?void 0:l.palettes)==null?void 0:i[e.borderPalette])!=null&&u[e.borderColor]&&o.push(r.borders.palettes[e.borderPalette][e.borderColor]),(g=(c=(d=r==null?void 0:r.grounds)==null?void 0:d.palettes)==null?void 0:c[e.groundPalette])!=null&&g[e.groundColor]&&o.push(r.grounds.palettes[e.groundPalette][e.groundColor]),(x=(f=(b=r==null?void 0:r.text)==null?void 0:b.palettes)==null?void 0:f[e.textPalette])!=null&&x[e.textColor]&&o.push(r.text.palettes[e.textPalette][e.textColor]),o.join(" ").trim()});return(o,l)=>(a.openBlock(),a.createBlock(a.resolveDynamicComponent(t.tag),{class:a.normalizeClass(a.unref(s))},{default:a.withCtx(()=>[a.renderSlot(o.$slots,"default")]),_:3},8,["class"]))}},Re=a.createElementVNode("path",{d:"m6.5 0 51.9 121.1L110.3 0h6.7L61.6 129h-6.2L0 0h6.5zM181.2 124.4c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V14.2h5.5v57.5c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V14.2h5.7v57.5c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.3 3 12 4.5 20.1 4.5zM333.6 123.8v5.2h-75.8V14.2h74.3v5.2h-68.7v48.3h60.1v5.2h-60.1v50.9h70.2zM351.3 0l51.9 121.1L455 0h6.7l-55.4 129h-6.2L344.7 0h6.6zM556.1 123.8v5.2h-75.8V14.2h74.3v5.2H486v48.3h60.1v5.2H486v50.9h70.1zM585.4 24.9V129h-5.7V14.2h4.2l84.4 105.9V14.2h5.7V129h-5.5L585.4 24.9zM784 19.4h-43V129h-5.7V19.4h-43v-5.2H784v5.2zM848 124.4c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V14.2h5.5v57.5c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V14.2h5.7v57.5c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.3 3 12 4.5 20.1 4.5zM991.2 31.2c-4.2-4.6-8.8-7.9-13.9-9.8-5.1-1.9-11-2.8-17.8-2.8-12.2 0-21 2.3-26.5 6.9-5.5 4.6-8.2 10.8-8.2 18.6 0 3.9.7 7.1 2 9.8 1.3 2.6 3.4 4.9 6.2 6.7 2.8 1.8 6.4 3.4 10.8 4.6 4.4 1.2 9.7 2.5 15.8 3.8 6.2 1.3 11.9 2.7 17 4.2s9.4 3.4 12.9 5.7c3.6 2.3 6.3 5.2 8.2 8.6 1.9 3.4 2.9 7.7 2.9 12.8 0 4.8-.9 9.1-2.8 12.8-1.9 3.7-4.6 6.7-8.2 9.2-3.6 2.5-7.8 4.3-12.8 5.6-5 1.2-10.6 1.9-16.7 1.9-9.2 0-17.4-1.4-24.7-4.3-7.3-2.9-14.1-7.2-20.4-13.2l3.4-4c5.4 5.5 11.5 9.6 18.4 12.4 6.9 2.8 14.7 4.2 23.4 4.2 10.8 0 19.3-2 25.5-5.9 6.2-3.9 9.3-9.9 9.3-18 0-4.1-.8-7.6-2.3-10.4-1.5-2.9-3.8-5.3-6.9-7.3-3.1-2-7-3.7-11.6-5.2S964 75.3 957.6 74c-6.3-1.3-11.8-2.6-16.6-4-4.8-1.4-8.8-3.2-12.1-5.3-3.3-2.2-5.8-4.8-7.4-7.9-1.7-3.1-2.5-7.1-2.5-11.8 0-5.1 1-9.6 2.9-13.5 1.9-3.9 4.7-7.2 8.2-9.9 3.5-2.6 7.7-4.7 12.7-6.1 5-1.4 10.4-2.1 16.5-2.1 7.4 0 14 1.1 19.6 3.2 5.6 2.2 10.7 5.6 15.4 10.3l-3.1 4.3z"},null,-1),Ze=[Re],We={__name:"VueVentusLogoText",props:{class:{type:String,default:"w-full fill-gray-900 dark:fill-gray-100"}},setup(t){return(e,r)=>(a.openBlock(),a.createElementBlock("svg",{class:a.normalizeClass(t.class),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 129","xml:space":"preserve"},Ze,2))}},Ye=["fill"],Je=["fill"],Qe={__name:"VueVentusSpinningMark",props:{animationClass:{type:String,default:"animate-spin-reverse-4s"},enableAnimation:{type:Boolean,default:!0},fillOne:{type:String,default:"#41b883"},fillTwo:{type:String,default:"#2298bd"}},setup(t){const e=t,r=a.computed(()=>e.enableAnimation?e.animationClass:"");return(s,o)=>(a.openBlock(),a.createElementBlock("svg",{class:a.normalizeClass(a.unref(r)),version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 1000 1000","xml:space":"preserve"},[a.createElementVNode("path",{fill:t.fillOne,d:"M210.3 237.6c0-61.4 19.2-118.5 51.8-165.4C88.8 152.1-84.2 466.7 81 657c134.5 134.8 363 48.8 386.2-131.2-66.9-7.6-126.8-37.9-172-83.1-52.4-52.4-84.9-125-84.9-205.1zM919.7 336c-134.5-134.8-363-48.8-386.2 131.2 66.9 7.6 126.8 37.9 172 83.1 52.5 52.5 85 125 85 205.1 0 61.4-19.2 118.5-51.8 165.4 173.2-79.9 346.3-394.6 181-584.8z"},null,8,Ye),a.createElementVNode("g",null,[a.createElementVNode("path",{fill:t.fillTwo,d:"M529.7 529.6C505.2 745.2 253.8 858.5 76.1 734.7c38.9 115.6 205.6 246 371.4 255.6 161.6 9.4 309.9-110.9 268.4-282.5-21.1-87.5-88.6-165.6-186.2-178.2zM339.8 77.1C205 211.6 291 440.2 471 463.4c7.6-66.9 37.9-126.8 83.1-172 52.5-52.5 125-85 205.1-85 61.4 0 118.5 19.2 165.4 51.8C844.8 84.9 530.1-88.1 339.8 77.1z"},null,8,Je)])],2))}};exports.AnchorDefault=D;exports.Anchors=_;exports.BorderDefault=O;exports.ButtonOutline=P;exports.ButtonSolid=F;exports.Buttons=T;exports.GroundConsole=I;exports.GroundDefault=$;exports.GroundMonochromatic=N;exports.GroundPastel=H;exports.InputValidation=G;exports.Inputs=L;exports.Text=w;exports.TextDefault=U;exports.Transitions=V;exports.ValidAudioSourceTypes=Ce;exports.ValidButtonTypes=R;exports.ValidColorModes=Z;exports.ValidDirections=Be;exports.ValidElementTags=ze;exports.ValidFontAwesomeFamilies=Me;exports.ValidFontAwesomeSizes=Ee;exports.ValidHeadingLevels=Ae;exports.ValidImageSourceTypes=je;exports.ValidInputTypes=_e;exports.ValidVideoSourceTypes=Te;exports.VueVentusLogoText=We;exports.VueVentusSpinningMark=Qe;exports.VvAnchor=Oe;exports.VvButton=W;exports.VvColorModeButton=Ue;exports.VvConfig=n;exports.VvEl=qe;exports.camelCaseToTitleCase=ee;exports.digitsOnly=te;exports.formatBytes=re;exports.formatMediaTime=oe;exports.formatNumber=ae;exports.mergeWithVvConfig=ye;exports.randomString=ke;exports.slugifyString=ve;exports.stringToCamelCase=Se;exports.stringToFilename=Ve;exports.uniqueArray=we;
