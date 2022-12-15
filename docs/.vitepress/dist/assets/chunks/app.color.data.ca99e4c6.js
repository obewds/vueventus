import{V as c}from"./VvConfig.8f4fa156.js";import{f as p,i as V,g as x,_ as C,o as A,c as _,r as w,n as G}from"../app.d380ac73.js";const F=p({name:"VvAnchor",props:{button:{type:Boolean,default:c.defaults.VvAnchor.button},buttonBlock:{type:Boolean,default:c.defaults.VvAnchor.buttonBlock},buttonFab:{type:Boolean,default:c.defaults.VvAnchor.buttonFab},buttonSize:{type:String,default:c.defaults.VvAnchor.buttonSize},color:{type:String,default:c.defaults.VvAnchor.color},external:{type:Boolean,default:c.defaults.VvAnchor.external},href:{type:String,default:c.defaults.VvAnchor.href},palette:{type:String,default:c.defaults.VvAnchor.palette},textSize:{type:String,default:c.defaults.VvAnchor.textSize}},setup(t){const e=Object.keys(V("vv",{})).length>0?V("vv"):c;return{classes:x(()=>{var b,o,n,d,s,f,l,u,r,i,h,S,z,y,g,m,k,B;let a=[];return t.button===!0?(t.buttonBlock===!0&&t.buttonFab===!1?((b=e==null?void 0:e.buttons)!=null&&b.blockBase()&&a.push(e.buttons.blockBase()),t.buttonSize!==""&&((n=(o=e==null?void 0:e.buttons)==null?void 0:o.blockSizes)==null?void 0:n[t.buttonSize])&&a.push(e.buttons.blockSizes[t.buttonSize])):t.buttonBlock===!1&&t.buttonFab===!0?((d=e==null?void 0:e.buttons)!=null&&d.fabBase()&&a.push(e.buttons.fabBase()),t.buttonSize!==""&&((f=(s=e==null?void 0:e.buttons)==null?void 0:s.fabSizes)==null?void 0:f[t.buttonSize])&&a.push(e.buttons.fabSizes[t.buttonSize])):((l=e==null?void 0:e.buttons)!=null&&l.base()&&a.push(e.buttons.base()),t.buttonSize!==""&&((r=(u=e==null?void 0:e.buttons)==null?void 0:u.sizes)==null?void 0:r[t.buttonSize])&&a.push(e.buttons.sizes[t.buttonSize])),(S=(h=(i=e==null?void 0:e.buttons)==null?void 0:i.palettes)==null?void 0:h[t.palette])!=null&&S[t.color]&&a.push(e.buttons.palettes[t.palette][t.color])):((z=e==null?void 0:e.anchors)!=null&&z.base()&&a.push(e.anchors.base()),t.textSize!==""&&((g=(y=e==null?void 0:e.anchors)==null?void 0:y.sizes)==null?void 0:g[t.textSize])&&a.push(e.anchors.sizes[t.textSize]),(B=(k=(m=e==null?void 0:e.anchors)==null?void 0:m.palettes)==null?void 0:k[t.palette])!=null&&B[t.color]&&a.push(e.anchors.palettes[t.palette][t.color])),a.join(" ").trim()})}}}),j=["href"],E=["href"];function O(t,e,$,a,b,o){return t.external?(A(),_("a",{key:0,href:t.href,class:G(t.classes),target:"_blank",rel:"noopener noreferrer"},[w(t.$slots,"default")],10,j)):(A(),_("a",{key:1,href:t.href,class:G(t.classes)},[w(t.$slots,"default")],10,E))}const n0=C(F,[["render",O]]),q="#1a1a1a",D="#f8f8f8",H={50:"#e8e9ea",100:"#d8dadc",200:"#b8bcc1",300:"#999fa7",400:"#7c848d",500:"#5f6974",600:"#545c65",700:"#42474e",800:"#383b40",900:"#2d3033"},I={50:"#ececec",100:"#e1e1e1",200:"#cacaca",300:"#b4b4b4",400:"#9e9e9e",500:"#898989",600:"#777777",700:"#595959",800:"#484848",900:"#383838"},J={50:"#eaeae9",100:"#dcdbd9",200:"#c2bfbb",300:"#a7a49e",400:"#8e8a82",500:"#757067",600:"#66625b",700:"#4e4b46",800:"#403e3b",900:"#33322f"},K={50:"#e8e9ee",100:"#d8dae4",200:"#b8bdd1",300:"#98a1be",400:"#7985ab",500:"#596b98",600:"#4f5e83",700:"#404962",800:"#363c4f",900:"#2d303c"},L={50:"#f4e7e5",100:"#f0d7d2",200:"#e6b6ae",300:"#d9958b",400:"#cb7569",500:"#ba5449",600:"#a04b42",700:"#763d35",800:"#5e342e",900:"#472c27"},M={50:"#f5e6e5",100:"#f1d4d3",200:"#e7b1af",300:"#da8e8c",400:"#cc6a6b",500:"#bb444c",600:"#a13f44",700:"#773537",800:"#5f2f30",900:"#482828"},N={50:"#f3e6ea",100:"#eed4dd",200:"#e3b0c2",300:"#d68da8",400:"#c8698f",500:"#b84176",600:"#9e3d67",700:"#75344f",800:"#5d2e41",900:"#462833"},P={50:"#f2e5ed",100:"#ebd3e2",200:"#ddaecd",300:"#ce89b8",400:"#be64a3",500:"#ac3a8f",600:"#94377c",700:"#6e315d",800:"#582c4b",900:"#43273a"},Q={50:"#f0e5f0",100:"#e9d2e8",200:"#d8abd8",300:"#c785c8",400:"#b45eb8",500:"#a032a8",600:"#8a3190",700:"#672d6b",800:"#532955",900:"#402540"},R={50:"#ede5f2",100:"#e2d3ec",200:"#ccaedf",300:"#b58ad2",400:"#9d66c5",500:"#8341b8",600:"#723c9e",700:"#583374",800:"#482d5c",900:"#382745"},T={50:"#ebe7f2",100:"#ddd6ec",200:"#c2b5df",300:"#a695d3",400:"#8975c6",500:"#6b57b9",600:"#5f4d9f",700:"#4a3e74",800:"#3e345c",900:"#322b45"},U={50:"#e8e9f2",100:"#d9daec",200:"#b9bee0",300:"#99a2d4",400:"#7887c7",500:"#536dbb",600:"#4b5fa0",700:"#3e4a75",800:"#363d5d",900:"#2d3145"},W={50:"#e7ecf2",100:"#d6dfec",200:"#b3c7e0",300:"#90afd4",400:"#6998c8",500:"#3a82bc",600:"#3971a1",700:"#335576",800:"#2f465d",900:"#293645"},X={50:"#e6eef2",100:"#d5e4ec",200:"#b1d1e0",300:"#8bbed5",400:"#61abc9",500:"#2298bd",600:"#2983a2",700:"#2c6276",800:"#2b4f5d",900:"#273c46"},Y={50:"#e6f0ef",100:"#d5e8e6",200:"#b1d8d4",300:"#8dc8c2",400:"#65b8b1",500:"#32a8a0",600:"#33908a",700:"#306b66",800:"#2d5552",900:"#28403e"},Z={50:"#e7f2ec",100:"#d7ece0",200:"#b5dfc8",300:"#93d2b0",400:"#6ec59a",500:"#41b883",600:"#3e9e72",700:"#377456",800:"#315c46",900:"#2a4537"},v={50:"#eaf0e9",100:"#dce7da",200:"#c0d6bd",300:"#a5c5a0",400:"#89b584",500:"#6da469",600:"#608d5c",700:"#4b6848",800:"#3e533c",900:"#323f30"},e0={50:"#edefe6",100:"#e3e6d5",200:"#cdd5b2",300:"#b7c491",400:"#a1b36f",500:"#8ba24e",600:"#798b46",700:"#5b6739",800:"#4a5331",900:"#3a3f2a"},t0={50:"#f1efe4",100:"#eae6d0",200:"#dbd4a9",300:"#cbc282",400:"#bab15c",500:"#a8a032",600:"#918a30",700:"#6c662b",800:"#565228",900:"#423e24"},a0={50:"#f2ede4",100:"#ece3d1",200:"#dfceab",300:"#d1b985",400:"#c1a560",500:"#b0923a",600:"#987e36",700:"#705e2f",800:"#5a4c2a",900:"#443a25"},c0={50:"#f3ece5",100:"#eee0d2",200:"#e3c8ac",300:"#d6b088",400:"#c89964",500:"#b88341",600:"#9e723b",700:"#755632",800:"#5d462c",900:"#463726"},d0={black:q,white:D,gray:H,trueGray:I,warmGray:J,coolGray:K,red:L,rose:M,pink:N,fuchsia:P,purple:Q,violet:R,indigo:T,blue:U,lightBlue:W,cyan:X,teal:Y,emerald:Z,green:v,lime:e0,yellow:t0,amber:a0,orange:c0};export{n0 as V,d0 as a};
