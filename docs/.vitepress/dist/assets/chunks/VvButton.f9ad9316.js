import{V as a}from"./VvConfig.8f4fa156.js";import{f as k,i as m,g as h,_ as p,o as S,c as _,r as g,n as $}from"../app.d380ac73.js";const T=["button","submit","reset"],j=T,C=k({name:"VvButton",props:{block:{type:Boolean,default:a.defaults.VvButton.block},color:{type:String,default:a.defaults.VvButton.color},fab:{type:Boolean,default:a.defaults.VvButton.fab},palette:{type:String,default:a.defaults.VvButton.palette},size:{type:String,default:a.defaults.VvButton.size},type:{type:String,default:a.defaults.VvButton.type,validator:e=>j.includes(e)}},setup(e){const t=Object.keys(m("vv",{})).length>0?m("vv"):a,o=e.type;let u=h(()=>{var n,l,i,f,b,c,d,r,z,B,y,V;let s=[];return e.block===!0&&e.fab===!1?((n=t==null?void 0:t.buttons)!=null&&n.blockBase()&&s.push(t.buttons.blockBase()),e.size!==""&&((i=(l=t==null?void 0:t.buttons)==null?void 0:l.blockSizes)==null?void 0:i[e.size])&&s.push(t.buttons.blockSizes[e.size])):e.fab===!0&&e.block===!1?((f=t==null?void 0:t.buttons)!=null&&f.fabBase()&&s.push(t.buttons.fabBase()),e.size!==""&&((c=(b=t==null?void 0:t.buttons)==null?void 0:b.fabSizes)==null?void 0:c[e.size])&&s.push(t.buttons.fabSizes[e.size])):((d=t==null?void 0:t.buttons)!=null&&d.base()&&s.push(t.buttons.base()),e.size!==""&&((z=(r=t==null?void 0:t.buttons)==null?void 0:r.sizes)==null?void 0:z[e.size])&&s.push(t.buttons.sizes[e.size])),(V=(y=(B=t==null?void 0:t.buttons)==null?void 0:B.palettes)==null?void 0:y[e.palette])!=null&&V[e.color]&&s.push(t.buttons.palettes[e.palette][e.color]),s.join(" ").trim()});return{btnType:o,classes:u}}}),E=["type"];function O(e,t,o,u,s,n){return S(),_("button",{type:e.btnType,class:$(e.classes)},[g(e.$slots,"default")],10,E)}const x=p(C,[["render",O]]);export{x as V,j as a};