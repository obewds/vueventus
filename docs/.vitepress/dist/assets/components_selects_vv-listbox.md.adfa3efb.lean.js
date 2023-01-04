import{_ as gs}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.2fc29b35.js";import{V as m}from"./chunks/VvConfig.1bf76bdf.js";import{v as Ss,x as es,F as Y,i as G,y as us,h as x,j as U,z as ls,g as C,f as q,A as ds,B as ws,C as E,D as I,_ as Ls,k as M,o as T,l as K,w as $,n as V,r as os,b as P,t as _,d as W,a as d,c as B,s as Ps,m as ts,u as X,e as N}from"./app.eb070c81.js";import"./chunks/Anchors.bafcf40e.js";import"./chunks/Text.d88c79dd.js";import"./chunks/Transitions.262fdc37.js";import"./chunks/Buttons.b4b40e12.js";import"./chunks/Checkboxes.81ecc6c3.js";import"./chunks/ColorModes.4904e81c.js";import"./chunks/Inputs.a721047f.js";import"./chunks/Listboxes.3c490966.js";import"./chunks/Lists.c1360393.js";import"./chunks/Radios.230b40d2.js";import"./chunks/Selects.7f4e72d6.js";import"./chunks/Textareas.4dc66c13.js";function k(s,a,...l){if(s in a){let e=a[s];return typeof e=="function"?e(...l):e}let n=new Error(`Tried to handle "${s}" but there is no handler defined. Only defined handlers are: ${Object.keys(a).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,k),n}var as=(s=>(s[s.None=0]="None",s[s.RenderStrategy=1]="RenderStrategy",s[s.Static=2]="Static",s))(as||{}),_s=(s=>(s[s.Unmount=0]="Unmount",s[s.Hidden=1]="Hidden",s))(_s||{});function z({visible:s=!0,features:a=0,ourProps:l,theirProps:n,...e}){var r;let t=Os(n,l),i=Object.assign(e,{props:t});if(s||a&2&&t.static)return Z(i);if(a&1){let c=(r=t.unmount)==null||r?0:1;return k(c,{[0](){return null},[1](){return Z({...e,props:{...t,hidden:!0,style:{display:"none"}}})}})}return Z(i)}function Z({props:s,attrs:a,slots:l,slot:n,name:e}){var r;let{as:t,...i}=ys(s,["unmount","static"]),c=(r=l.default)==null?void 0:r.call(l,n),o={};if(n){let p=!1,y=[];for(let[v,S]of Object.entries(n))typeof S=="boolean"&&(p=!0),S===!0&&y.push(v);p&&(o["data-headlessui-state"]=y.join(" "))}if(t==="template"){if(c=bs(c??[]),Object.keys(i).length>0||Object.keys(a).length>0){let[p,...y]=c??[];if(!Es(p)||y.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${e} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(i).concat(Object.keys(a)).sort((v,S)=>v.localeCompare(S)).map(v=>`  - ${v}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(v=>`  - ${v}`).join(`
`)].join(`
`));return Ss(p,Object.assign({},i,o))}return Array.isArray(c)&&c.length===1?c[0]:c}return es(t,Object.assign({},i,o),{default:()=>c})}function bs(s){return s.flatMap(a=>a.type===Y?bs(a.children):[a])}function Os(...s){if(s.length===0)return{};if(s.length===1)return s[0];let a={},l={};for(let n of s)for(let e in n)e.startsWith("on")&&typeof n[e]=="function"?(l[e]!=null||(l[e]=[]),l[e].push(n[e])):a[e]=n[e];if(a.disabled||a["aria-disabled"])return Object.assign(a,Object.fromEntries(Object.keys(l).map(n=>[n,void 0])));for(let n in l)Object.assign(a,{[n](e,...r){let t=l[n];for(let i of t){if(e instanceof Event&&e.defaultPrevented)return;i(e,...r)}}});return a}function Vs(s){let a=Object.assign({},s);for(let l in a)a[l]===void 0&&delete a[l];return a}function ys(s,a=[]){let l=Object.assign({},s);for(let n of a)n in l&&delete l[n];return l}function Es(s){return s==null?!1:typeof s.type=="string"||typeof s.type=="object"||typeof s.type=="function"}let ks=0;function Ts(){return++ks}function J(){return Ts()}var A=(s=>(s.Space=" ",s.Enter="Enter",s.Escape="Escape",s.Backspace="Backspace",s.Delete="Delete",s.ArrowLeft="ArrowLeft",s.ArrowUp="ArrowUp",s.ArrowRight="ArrowRight",s.ArrowDown="ArrowDown",s.Home="Home",s.End="End",s.PageUp="PageUp",s.PageDown="PageDown",s.Tab="Tab",s))(A||{});function Is(s){throw new Error("Unexpected object: "+s)}var w=(s=>(s[s.First=0]="First",s[s.Previous=1]="Previous",s[s.Next=2]="Next",s[s.Last=3]="Last",s[s.Specific=4]="Specific",s[s.Nothing=5]="Nothing",s))(w||{});function qs(s,a){let l=a.resolveItems();if(l.length<=0)return null;let n=a.resolveActiveIndex(),e=n??-1,r=(()=>{switch(s.focus){case 0:return l.findIndex(t=>!a.resolveDisabled(t));case 1:{let t=l.slice().reverse().findIndex((i,c,o)=>e!==-1&&o.length-c-1>=e?!1:!a.resolveDisabled(i));return t===-1?t:l.length-1-t}case 2:return l.findIndex((t,i)=>i<=e?!1:!a.resolveDisabled(t));case 3:{let t=l.slice().reverse().findIndex(i=>!a.resolveDisabled(i));return t===-1?t:l.length-1-t}case 4:return l.findIndex(t=>a.resolveId(t)===s.id);case 5:return null;default:Is(s)}})();return r===-1?n:r}function h(s){var a;return s==null||s.value==null?null:(a=s.value.$el)!=null?a:s.value}let Ds=Symbol("Context");var Q=(s=>(s[s.Open=0]="Open",s[s.Closed=1]="Closed",s))(Q||{});function Rs(){return G(Ds,null)}function js(s){us(Ds,s)}function ps(s,a){if(s)return s;let l=a??"button";if(typeof l=="string"&&l.toLowerCase()==="button")return"button"}function $s(s,a){let l=x(ps(s.value.type,s.value.as));return U(()=>{l.value=ps(s.value.type,s.value.as)}),ls(()=>{var n;l.value||!h(a)||h(a)instanceof HTMLButtonElement&&!((n=h(a))!=null&&n.hasAttribute("type"))&&(l.value="button")}),l}const Fs=typeof window>"u"||typeof document>"u";function Bs(s){if(Fs)return null;if(s instanceof Node)return s.ownerDocument;if(s!=null&&s.hasOwnProperty("value")){let a=h(s);if(a)return a.ownerDocument}return document}let rs=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(s=>`${s}:not([tabindex='-1'])`).join(",");var Ns=(s=>(s[s.First=1]="First",s[s.Previous=2]="Previous",s[s.Next=4]="Next",s[s.Last=8]="Last",s[s.WrapAround=16]="WrapAround",s[s.NoScroll=32]="NoScroll",s))(Ns||{}),zs=(s=>(s[s.Error=0]="Error",s[s.Overflow=1]="Overflow",s[s.Success=2]="Success",s[s.Underflow=3]="Underflow",s))(zs||{}),Ms=(s=>(s[s.Previous=-1]="Previous",s[s.Next=1]="Next",s))(Ms||{}),ns=(s=>(s[s.Strict=0]="Strict",s[s.Loose=1]="Loose",s))(ns||{});function vs(s,a=0){var l;return s===((l=Bs(s))==null?void 0:l.body)?!1:k(a,{[0](){return s.matches(rs)},[1](){let n=s;for(;n!==null;){if(n.matches(rs))return!0;n=n.parentElement}return!1}})}function Us(s,a=l=>l){return s.slice().sort((l,n)=>{let e=a(l),r=a(n);if(e===null||r===null)return 0;let t=e.compareDocumentPosition(r);return t&Node.DOCUMENT_POSITION_FOLLOWING?-1:t&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ss(s,a,l){Fs||ls(n=>{document.addEventListener(s,a,l),n(()=>document.removeEventListener(s,a,l))})}function Ws(s,a,l=C(()=>!0)){function n(r,t){if(!l.value||r.defaultPrevented)return;let i=t(r);if(i===null||!i.getRootNode().contains(i))return;let c=function o(p){return typeof p=="function"?o(p()):Array.isArray(p)||p instanceof Set?p:[p]}(s);for(let o of c){if(o===null)continue;let p=o instanceof HTMLElement?o:h(o);if(p!=null&&p.contains(i)||r.composed&&r.composedPath().includes(p))return}return!vs(i,ns.Loose)&&i.tabIndex!==-1&&r.preventDefault(),a(r,i)}let e=x(null);ss("mousedown",r=>{var t,i;l.value&&(e.value=((i=(t=r.composedPath)==null?void 0:t.call(r))==null?void 0:i[0])||r.target)},!0),ss("click",r=>{!e.value||(n(r,()=>e.value),e.value=null)},!0),ss("blur",r=>n(r,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var ms=(s=>(s[s.None=1]="None",s[s.Focusable=2]="Focusable",s[s.Hidden=4]="Hidden",s))(ms||{});let Hs=q({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(s,{slots:a,attrs:l}){return()=>{let{features:n,...e}=s,r={"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return z({ourProps:r,theirProps:e,slot:{},attrs:l,slots:a,name:"Hidden"})}}});function fs(s={},a=null,l=[]){for(let[n,e]of Object.entries(s))Cs(l,hs(a,n),e);return l}function hs(s,a){return s?s+"["+a+"]":a}function Cs(s,a,l){if(Array.isArray(l))for(let[n,e]of l.entries())Cs(s,hs(a,n.toString()),e);else l instanceof Date?s.push([a,l.toISOString()]):typeof l=="boolean"?s.push([a,l?"1":"0"]):typeof l=="string"?s.push([a,l]):typeof l=="number"?s.push([a,`${l}`]):l==null?s.push([a,""]):fs(l,a,s)}function Ks(s,a,l){let n=x(l==null?void 0:l.value),e=C(()=>s.value!==void 0);return[C(()=>e.value?s.value:n.value),function(r){return e.value||(n.value=r),a==null?void 0:a(r)}]}function is(s){return[s.screenX,s.screenY]}function Ys(){let s=x([-1,-1]);return{wasMoved(a){let l=is(a);return s.value[0]===l[0]&&s.value[1]===l[1]?!1:(s.value=l,!0)},update(a){s.value=is(a)}}}function Gs(s,a){return s===a}var Qs=(s=>(s[s.Open=0]="Open",s[s.Closed=1]="Closed",s))(Qs||{}),Js=(s=>(s[s.Single=0]="Single",s[s.Multi=1]="Multi",s))(Js||{}),Xs=(s=>(s[s.Pointer=0]="Pointer",s[s.Other=1]="Other",s))(Xs||{});function Zs(s){requestAnimationFrame(()=>requestAnimationFrame(s))}let As=Symbol("ListboxContext");function H(s){let a=G(As,null);if(a===null){let l=new Error(`<${s} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,H),l}return a}let se=q({name:"Listbox",emits:{"update:modelValue":s=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>Gs},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(s,{slots:a,attrs:l,emit:n}){let e=x(1),r=x(null),t=x(null),i=x(null),c=x([]),o=x(""),p=x(null),y=x(1);function v(u=b=>b){let b=p.value!==null?c.value[p.value]:null,F=Us(u(c.value.slice()),L=>h(L.dataRef.domRef)),f=b?F.indexOf(b):null;return f===-1&&(f=null),{options:F,activeOptionIndex:f}}let S=C(()=>s.multiple?1:0),[O,R]=Ks(C(()=>s.modelValue===void 0?k(S.value,{[1]:[],[0]:void 0}):s.modelValue),u=>n("update:modelValue",u),C(()=>s.defaultValue)),D={listboxState:e,value:O,mode:S,compare(u,b){if(typeof s.by=="string"){let F=s.by;return(u==null?void 0:u[F])===(b==null?void 0:b[F])}return s.by(u,b)},orientation:C(()=>s.horizontal?"horizontal":"vertical"),labelRef:r,buttonRef:t,optionsRef:i,disabled:C(()=>s.disabled),options:c,searchQuery:o,activeOptionIndex:p,activationTrigger:y,closeListbox(){s.disabled||e.value!==1&&(e.value=1,p.value=null)},openListbox(){s.disabled||e.value!==0&&(e.value=0)},goToOption(u,b,F){if(s.disabled||e.value===1)return;let f=v(),L=qs(u===w.Specific?{focus:w.Specific,id:b}:{focus:u},{resolveItems:()=>f.options,resolveActiveIndex:()=>f.activeOptionIndex,resolveId:j=>j.id,resolveDisabled:j=>j.dataRef.disabled});o.value="",p.value=L,y.value=F??1,c.value=f.options},search(u){if(s.disabled||e.value===1)return;let b=o.value!==""?0:1;o.value+=u.toLowerCase();let F=(p.value!==null?c.value.slice(p.value+b).concat(c.value.slice(0,p.value+b)):c.value).find(L=>L.dataRef.textValue.startsWith(o.value)&&!L.dataRef.disabled),f=F?c.value.indexOf(F):-1;f===-1||f===p.value||(p.value=f,y.value=1)},clearSearch(){s.disabled||e.value!==1&&o.value!==""&&(o.value="")},registerOption(u,b){let F=v(f=>[...f,{id:u,dataRef:b}]);c.value=F.options,p.value=F.activeOptionIndex},unregisterOption(u){let b=v(F=>{let f=F.findIndex(L=>L.id===u);return f!==-1&&F.splice(f,1),F});c.value=b.options,p.value=b.activeOptionIndex,y.value=1},select(u){s.disabled||R(k(S.value,{[0]:()=>u,[1]:()=>{let b=E(D.value.value).slice(),F=E(u),f=b.findIndex(L=>D.compare(F,E(L)));return f===-1?b.push(F):b.splice(f,1),b}}))}};Ws([t,i],(u,b)=>{var F;D.closeListbox(),vs(b,ns.Loose)||(u.preventDefault(),(F=h(t))==null||F.focus())},C(()=>e.value===0)),us(As,D),js(C(()=>k(e.value,{[0]:Q.Open,[1]:Q.Closed})));let g=C(()=>{var u;return(u=h(t))==null?void 0:u.closest("form")});return U(()=>{ds([g],()=>{if(!g.value||s.defaultValue===void 0)return;function u(){D.select(s.defaultValue)}return g.value.addEventListener("reset",u),()=>{var b;(b=g.value)==null||b.removeEventListener("reset",u)}},{immediate:!0})}),()=>{let{name:u,modelValue:b,disabled:F,...f}=s,L={open:e.value===0,disabled:F,value:O.value};return es(Y,[...u!=null&&O.value!=null?fs({[u]:O.value}).map(([j,xs])=>es(Hs,Vs({features:ms.Hidden,key:j,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:j,value:xs}))):[],z({ourProps:{},theirProps:{...l,...ys(f,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:L,slots:a,attrs:l,name:"Listbox"})])}}}),ee=q({name:"ListboxLabel",props:{as:{type:[Object,String],default:"label"},id:{type:String,default:()=>`headlessui-listbox-label-${J()}`}},setup(s,{attrs:a,slots:l}){let n=H("ListboxLabel");function e(){var r;(r=h(n.buttonRef))==null||r.focus({preventScroll:!0})}return()=>{let r={open:n.listboxState.value===0,disabled:n.disabled.value},{id:t,...i}=s,c={id:t,ref:n.labelRef,onClick:e};return z({ourProps:c,theirProps:i,slot:r,attrs:a,slots:l,name:"ListboxLabel"})}}}),ae=q({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-listbox-button-${J()}`}},setup(s,{attrs:a,slots:l,expose:n}){let e=H("ListboxButton");n({el:e.buttonRef,$el:e.buttonRef});function r(o){switch(o.key){case A.Space:case A.Enter:case A.ArrowDown:o.preventDefault(),e.openListbox(),I(()=>{var p;(p=h(e.optionsRef))==null||p.focus({preventScroll:!0}),e.value.value||e.goToOption(w.First)});break;case A.ArrowUp:o.preventDefault(),e.openListbox(),I(()=>{var p;(p=h(e.optionsRef))==null||p.focus({preventScroll:!0}),e.value.value||e.goToOption(w.Last)});break}}function t(o){switch(o.key){case A.Space:o.preventDefault();break}}function i(o){e.disabled.value||(e.listboxState.value===0?(e.closeListbox(),I(()=>{var p;return(p=h(e.buttonRef))==null?void 0:p.focus({preventScroll:!0})})):(o.preventDefault(),e.openListbox(),Zs(()=>{var p;return(p=h(e.optionsRef))==null?void 0:p.focus({preventScroll:!0})})))}let c=$s(C(()=>({as:s.as,type:a.type})),e.buttonRef);return()=>{var o,p;let y={open:e.listboxState.value===0,disabled:e.disabled.value,value:e.value.value},{id:v,...S}=s,O={ref:e.buttonRef,id:v,type:c.value,"aria-haspopup":!0,"aria-controls":(o=h(e.optionsRef))==null?void 0:o.id,"aria-expanded":e.disabled.value?void 0:e.listboxState.value===0,"aria-labelledby":e.labelRef.value?[(p=h(e.labelRef))==null?void 0:p.id,v].join(" "):void 0,disabled:e.disabled.value===!0?!0:void 0,onKeydown:r,onKeyup:t,onClick:i};return z({ourProps:O,theirProps:S,slot:y,attrs:a,slots:l,name:"ListboxButton"})}}}),le=q({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-listbox-options-${J()}`}},setup(s,{attrs:a,slots:l,expose:n}){let e=H("ListboxOptions"),r=x(null);n({el:e.optionsRef,$el:e.optionsRef});function t(o){switch(r.value&&clearTimeout(r.value),o.key){case A.Space:if(e.searchQuery.value!=="")return o.preventDefault(),o.stopPropagation(),e.search(o.key);case A.Enter:if(o.preventDefault(),o.stopPropagation(),e.activeOptionIndex.value!==null){let p=e.options.value[e.activeOptionIndex.value];e.select(p.dataRef.value)}e.mode.value===0&&(e.closeListbox(),I(()=>{var p;return(p=h(e.buttonRef))==null?void 0:p.focus({preventScroll:!0})}));break;case k(e.orientation.value,{vertical:A.ArrowDown,horizontal:A.ArrowRight}):return o.preventDefault(),o.stopPropagation(),e.goToOption(w.Next);case k(e.orientation.value,{vertical:A.ArrowUp,horizontal:A.ArrowLeft}):return o.preventDefault(),o.stopPropagation(),e.goToOption(w.Previous);case A.Home:case A.PageUp:return o.preventDefault(),o.stopPropagation(),e.goToOption(w.First);case A.End:case A.PageDown:return o.preventDefault(),o.stopPropagation(),e.goToOption(w.Last);case A.Escape:o.preventDefault(),o.stopPropagation(),e.closeListbox(),I(()=>{var p;return(p=h(e.buttonRef))==null?void 0:p.focus({preventScroll:!0})});break;case A.Tab:o.preventDefault(),o.stopPropagation();break;default:o.key.length===1&&(e.search(o.key),r.value=setTimeout(()=>e.clearSearch(),350));break}}let i=Rs(),c=C(()=>i!==null?i.value===Q.Open:e.listboxState.value===0);return()=>{var o,p,y,v;let S={open:e.listboxState.value===0},{id:O,...R}=s,D={"aria-activedescendant":e.activeOptionIndex.value===null||(o=e.options.value[e.activeOptionIndex.value])==null?void 0:o.id,"aria-multiselectable":e.mode.value===1?!0:void 0,"aria-labelledby":(v=(p=h(e.labelRef))==null?void 0:p.id)!=null?v:(y=h(e.buttonRef))==null?void 0:y.id,"aria-orientation":e.orientation.value,id:O,onKeydown:t,role:"listbox",tabIndex:0,ref:e.optionsRef};return z({ourProps:D,theirProps:R,slot:S,attrs:a,slots:l,features:as.RenderStrategy|as.Static,visible:c.value,name:"ListboxOptions"})}}}),ne=q({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-listbox.option-${J()}`}},setup(s,{slots:a,attrs:l,expose:n}){let e=H("ListboxOption"),r=x(null);n({el:r,$el:r});let t=C(()=>e.activeOptionIndex.value!==null?e.options.value[e.activeOptionIndex.value].id===s.id:!1),i=C(()=>k(e.mode.value,{[0]:()=>e.compare(E(e.value.value),E(s.value)),[1]:()=>E(e.value.value).some(D=>e.compare(E(D),E(s.value)))})),c=C(()=>k(e.mode.value,{[1]:()=>{var D;let g=E(e.value.value);return((D=e.options.value.find(u=>g.some(b=>e.compare(E(b),E(u.dataRef.value)))))==null?void 0:D.id)===s.id},[0]:()=>i.value})),o=C(()=>({disabled:s.disabled,value:s.value,textValue:"",domRef:r}));U(()=>{var D,g;let u=(g=(D=h(r))==null?void 0:D.textContent)==null?void 0:g.toLowerCase().trim();u!==void 0&&(o.value.textValue=u)}),U(()=>e.registerOption(s.id,o)),ws(()=>e.unregisterOption(s.id)),U(()=>{ds([e.listboxState,i],()=>{e.listboxState.value===0&&(!i.value||k(e.mode.value,{[1]:()=>{c.value&&e.goToOption(w.Specific,s.id)},[0]:()=>{e.goToOption(w.Specific,s.id)}}))},{immediate:!0})}),ls(()=>{e.listboxState.value===0&&(!t.value||e.activationTrigger.value!==0&&I(()=>{var D,g;return(g=(D=h(r))==null?void 0:D.scrollIntoView)==null?void 0:g.call(D,{block:"nearest"})}))});function p(D){if(s.disabled)return D.preventDefault();e.select(s.value),e.mode.value===0&&(e.closeListbox(),I(()=>{var g;return(g=h(e.buttonRef))==null?void 0:g.focus({preventScroll:!0})}))}function y(){if(s.disabled)return e.goToOption(w.Nothing);e.goToOption(w.Specific,s.id)}let v=Ys();function S(D){v.update(D)}function O(D){!v.wasMoved(D)||s.disabled||t.value||e.goToOption(w.Specific,s.id,0)}function R(D){!v.wasMoved(D)||s.disabled||!t.value||e.goToOption(w.Nothing)}return()=>{let{disabled:D}=s,g={active:t.value,selected:i.value,disabled:D},{id:u,value:b,disabled:F,...f}=s,L={id:u,ref:r,role:"option",tabIndex:D===!0?void 0:-1,"aria-disabled":D===!0?!0:void 0,"aria-selected":i.value,disabled:void 0,onClick:p,onFocus:y,onPointerenter:S,onMouseenter:S,onPointermove:O,onMousemove:O,onPointerleave:R,onMouseleave:R};return z({ourProps:L,theirProps:f,slot:g,attrs:l,slots:a,name:"ListboxOption"})}}});const oe=q({name:"VvListbox",emits:["update:modelValue"],components:{Listbox:se,ListboxButton:ae,ListboxLabel:ee,ListboxOptions:le,ListboxOption:ne},props:{data:{type:Array,default:m.defaults.VvListbox.data},displayClasses:{type:String,default:m.defaults.VvListbox.displayClasses},displayDisabledClasses:{type:String,default:m.defaults.VvListbox.displayDisabledClasses},iconDisabledClasses:{type:String,default:m.defaults.VvListbox.iconDisabledClasses},iconSelectedClasses:{type:String,default:m.defaults.VvListbox.iconSelectedClasses},iconsSizeClasses:{type:String,default:m.defaults.VvListbox.iconsSizeClasses},label:{type:String,default:m.defaults.VvListbox.label},labelClasses:{type:String,default:m.defaults.VvListbox.labelClasses},listboxButtonClasses:{type:String,default:m.defaults.VvListbox.listboxButtonClasses},listboxButtonColor:{type:String,default:m.defaults.VvListbox.listboxButtonColor},listboxButtonPalette:{type:String,default:m.defaults.VvListbox.listboxButtonPalette},listboxOptionClasses:{type:String,default:m.defaults.VvListbox.listboxOptionClasses},listboxOptionColor:{type:String,default:m.defaults.VvListbox.listboxOptionColor},listboxOptionPalette:{type:String,default:m.defaults.VvListbox.listboxOptionPalette},listboxOptionsClasses:{type:String,default:m.defaults.VvListbox.listboxOptionsClasses},listboxOptionsWithLabelSpacing:{type:String,default:m.defaults.VvListbox.listboxOptionsWithLabelSpacing},listboxOptionsWithoutLabelSpacing:{type:String,default:m.defaults.VvListbox.listboxOptionsWithoutLabelSpacing},optionIconParentClasses:{type:String,default:m.defaults.VvListbox.optionIconParentClasses},selectedDisplayClasses:{type:String,default:m.defaults.VvListbox.selectedDisplayClasses},selectedIndex:{type:Number,default:m.defaults.VvListbox.selectedIndex},size:{type:String,default:m.defaults.VvListbox.size}},setup(s){const a=x(s.data),l=x(a.value[s.selectedIndex]),n=Object.keys(G("vv",{})).length>0?G("vv"):m,e=C(()=>{var i,c,o,p,y,v;let t=[];return(i=n==null?void 0:n.listboxes)!=null&&i.base()&&t.push(n.listboxes.base()),s.size!==""&&((o=(c=n==null?void 0:n.listboxes)==null?void 0:c.sizes)==null?void 0:o[s.size])&&t.push(n.listboxes.sizes[s.size]),(v=(y=(p=n==null?void 0:n.listboxes)==null?void 0:p.buttonPalettes)==null?void 0:y[s.listboxButtonPalette])!=null&&v[s.listboxButtonColor]&&t.push(n.listboxes.buttonPalettes[s.listboxButtonPalette][s.listboxButtonColor]),t.join(" ").trim()}),r=C(()=>{var i,c,o;let t=[];return(o=(c=(i=n==null?void 0:n.listboxes)==null?void 0:i.optionPalettes)==null?void 0:c[s.listboxOptionPalette])!=null&&o[s.listboxOptionColor]&&t.push(n.listboxes.optionPalettes[s.listboxOptionPalette][s.listboxOptionColor]),t.join(" ").trim()});return{listboxButtonVvClasses:e,listboxOptionVvClasses:r,selectData:a,selectedItem:l,VvConfig:m}}}),te=d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1),pe=[te],re=d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"},null,-1),ie=[re],ce=d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"},null,-1),ue=[ce];function de(s,a,l,n,e,r){const t=M("ListboxLabel"),i=M("ListboxButton"),c=M("ListboxOption"),o=M("ListboxOptions"),p=M("Listbox");return T(),K(p,{modelValue:s.selectedItem,"onUpdate:modelValue":[a[0]||(a[0]=y=>s.selectedItem=y),a[1]||(a[1]=y=>s.$emit("update:modelValue",y))],by:"id"},{default:$(()=>[s.label.length>0?(T(),K(t,{key:0,class:V(s.labelClasses)},{default:$(()=>[os(s.$slots,"default",{},()=>[P(_(s.label),1)])]),_:3},8,["class"])):(T(),K(t,{key:1,class:V(s.labelClasses)},{default:$(()=>[os(s.$slots,"default")]),_:3},8,["class"])),W(i,{class:V([s.listboxButtonClasses,s.listboxButtonVvClasses])},{default:$(()=>[d("span",{class:V(s.selectedDisplayClasses)},_(s.selectedItem.display),3),(T(),B("svg",{class:V(s.iconsSizeClasses),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},pe,2))]),_:1},8,["class"]),W(o,{class:V([s.listboxOptionsClasses,s.label.length>0?s.listboxOptionsWithLabelSpacing:s.listboxOptionsWithoutLabelSpacing])},{default:$(()=>[(T(!0),B(Y,null,Ps(s.selectData,y=>(T(),B(Y,null,[y.value!==""?(T(),K(c,{key:y.id,value:y,disabled:y.disabled,class:V([s.listboxOptionClasses,s.listboxOptionVvClasses])},{default:$(()=>[d("span",{class:V(s.optionIconParentClasses)},[(T(),B("svg",{class:V(["hidden ui-selected:block mr-3",s.iconsSizeClasses]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},ie,2)),y.disabled?(T(),B("svg",{key:0,class:V(["mr-3 opacity-25",s.iconsSizeClasses]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},ue,2)):ts("",!0)],2),d("span",{class:V([s.displayClasses,y.disabled?s.displayDisabledClasses:""])},_(y.display),3)]),_:2},1032,["value","disabled","class"])):ts("",!0)],64))),256))]),_:1},8,["class"])]),_:3},8,["modelValue"])}const cs=Ls(oe,[["render",de]]),be={id:"frontmatter-title",tabindex:"-1"},ye=d("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),De=d("h2",{id:"import",tabindex:"-1"},[P("Import "),d("a",{class:"header-anchor",href:"#import","aria-hidden":"true"},"#")],-1),Fe=d("a",{href:"/vueventus/guides/vueventus-cli.html"},"vueventus CLI",-1),ve=d("a",{href:"/vueventus/guides/vv-update-cli.html"},"vv-update CLI",-1),me=N("",2),fe=N("",5),he=d("code",null,"update:modelValue",-1),Ce={class:"tip custom-block"},Ae=d("p",{class:"custom-block-title"},"TIP",-1),xe=d("code",null,"v-model",-1),ge=N("",3),Se=d("strong",null,[d("code",null,"String")],-1),we=d("br",null,null,-1),Le=d("code",null,"data",-1),Pe=N("",3),_e={class:"w-full pt-4"},Oe=d("div",null,"User Selection:",-1),Ve=N("",3),Ee={class:"w-full pt-4"},ke=d("div",null,"User Selection:",-1),Te=N("",44),Je=JSON.parse('{"title":"VvListbox Component","description":"","frontmatter":{"title":"VvListbox Component"},"headers":[{"level":2,"title":"Import","slug":"import","link":"#import","children":[]},{"level":2,"title":"Emits: update:modelValue","slug":"emits-update-modelvalue","link":"#emits-update-modelvalue","children":[{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"Prop: data","slug":"prop-data","link":"#prop-data","children":[{"level":3,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":3,"title":"Result","slug":"result","link":"#result","children":[]},{"level":3,"title":"With Data Syntax","slug":"with-data-syntax","link":"#with-data-syntax","children":[]},{"level":3,"title":"With Data Result","slug":"with-data-result","link":"#with-data-result","children":[]}]},{"level":2,"title":"Prop: displayClasses","slug":"prop-displayclasses","link":"#prop-displayclasses","children":[]},{"level":2,"title":"Prop: displayDisabledClasses","slug":"prop-displaydisabledclasses","link":"#prop-displaydisabledclasses","children":[]},{"level":2,"title":"Prop: iconDisabledClasses","slug":"prop-icondisabledclasses","link":"#prop-icondisabledclasses","children":[]},{"level":2,"title":"Prop: iconSelectedClasses","slug":"prop-iconselectedclasses","link":"#prop-iconselectedclasses","children":[]},{"level":2,"title":"Prop: iconsSizeClasses","slug":"prop-iconssizeclasses","link":"#prop-iconssizeclasses","children":[]},{"level":2,"title":"Prop: label","slug":"prop-label","link":"#prop-label","children":[]},{"level":2,"title":"Prop: labelClasses","slug":"prop-labelclasses","link":"#prop-labelclasses","children":[]},{"level":2,"title":"Prop: listboxButtonClasses","slug":"prop-listboxbuttonclasses","link":"#prop-listboxbuttonclasses","children":[]},{"level":2,"title":"Prop: listboxButtonColor","slug":"prop-listboxbuttoncolor","link":"#prop-listboxbuttoncolor","children":[]},{"level":2,"title":"Prop: listboxButtonPalette","slug":"prop-listboxbuttonpalette","link":"#prop-listboxbuttonpalette","children":[]},{"level":2,"title":"Prop: listboxOptionClasses","slug":"prop-listboxoptionclasses","link":"#prop-listboxoptionclasses","children":[]},{"level":2,"title":"Prop: listboxOptionColor","slug":"prop-listboxoptioncolor","link":"#prop-listboxoptioncolor","children":[]},{"level":2,"title":"Prop: listboxOptionPalette","slug":"prop-listboxoptionpalette","link":"#prop-listboxoptionpalette","children":[]},{"level":2,"title":"Prop: listboxOptionsClasses","slug":"prop-listboxoptionsclasses","link":"#prop-listboxoptionsclasses","children":[]},{"level":2,"title":"Prop: listboxOptionsWithLabelSpacing","slug":"prop-listboxoptionswithlabelspacing","link":"#prop-listboxoptionswithlabelspacing","children":[]},{"level":2,"title":"Prop: listboxOptionsWithoutLabelSpacing","slug":"prop-listboxoptionswithoutlabelspacing","link":"#prop-listboxoptionswithoutlabelspacing","children":[]},{"level":2,"title":"Prop: optionIconParentClasses","slug":"prop-optioniconparentclasses","link":"#prop-optioniconparentclasses","children":[]},{"level":2,"title":"Prop: selectedDisplayClasses","slug":"prop-selecteddisplayclasses","link":"#prop-selecteddisplayclasses","children":[]},{"level":2,"title":"Prop: selectedDisplayClasses","slug":"prop-selecteddisplayclasses-1","link":"#prop-selecteddisplayclasses-1","children":[]},{"level":2,"title":"Prop: selectedIndex","slug":"prop-selectedindex","link":"#prop-selectedindex","children":[]},{"level":2,"title":"Prop: size","slug":"prop-size","link":"#prop-size","children":[]},{"level":2,"title":"Slot: #default","slug":"slot-default","link":"#slot-default","children":[]}],"relativePath":"components/selects/vv-listbox.md","lastUpdated":1672866094000}'),Ie={name:"components/selects/vv-listbox.md"},Xe=Object.assign(Ie,{setup(s){const a=x(""),l=x(""),n=[{id:0,display:"Select an option",value:"",disabled:!1},{id:1,display:"Morning",value:"am",disabled:!1},{id:2,display:"Noon",value:"noon",disabled:!0},{id:3,display:"Evening",value:"pm",disabled:!1}];return(e,r)=>(T(),B("div",null,[d("h1",be,[P(_(e.$frontmatter.title)+" ",1),ye]),d("p",null,"The "+_(e.$frontmatter.title)+" provides a set of props and config module based settings to make a validation ready set of select elements for applications with an extremely DRY implementation of atomic classes.",1),De,d("p",null,[P("To import a "+_(e.$frontmatter.title)+" installed by the ",1),Fe,P(" or "),ve,P(":")]),me,d("p",null,"Alternatively, you can install the raw library "+_(e.$frontmatter.title)+" with:",1),fe,d("p",null,[P("The "+_(e.$frontmatter.title)+" emits a standard Vue key of ",1),he,P(" upon input event changes of the component's currently selected data.")]),d("div",Ce,[Ae,d("p",null,[P("This means when using the "+_(e.$frontmatter.title)+" downstream in an end application, you can safely use Vue's ",1),xe,P(" binding to two-way bind a reactive value through your downstream component and into (and back from) the "+_(e.$frontmatter.title)+" instance.",1)])]),ge,d("p",null,[P("Type: "),Se,we,P(" Default: "),d("strong",null,[d("code",null,'"'+_(X(m).defaults.VvListbox.data)+'"',1)])]),d("p",null,[P("The "+_(e.$frontmatter.title)+" ",1),Le,P(" prop sets the component instance data that ultimately is displayed to the user for selection from a list of objects with a specific syntax and typing minimum requirements.")]),Pe,d("div",_e,[W(X(cs),{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=t=>a.value=t),label:"Example Listbox:"},null,8,["modelValue"]),Oe,d("div",null,_(a.value),1)]),Ve,d("div",Ee,[W(X(cs),{modelValue:l.value,"onUpdate:modelValue":r[1]||(r[1]=t=>l.value=t),data:n,label:"Listbox Data Example:"},null,8,["modelValue"]),ke,d("div",null,_(l.value),1)]),Te,W(gs)]))}});export{Je as __pageData,Xe as default};
