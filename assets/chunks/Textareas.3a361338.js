import{I as i}from"./Inputs.60e5b165.js";import{T as r}from"./Transitions.33f89a9f.js";var n={border:"border",display:"block w-full",outline:"",placeholder:"placeholder:opacity-50",ring:"",rounding:"",shadow:"",text:"",transition:r.classes("colors","inOut","300"),base:function(){return[this.border,this.display,this.outline,this.placeholder,this.ring,this.rounding,this.shadow,this.text,this.transition].join(" ").replace(/\s+/g," ").trim()},sizes:i.sizes,getSizeClasses:function(s){const t=s&&this.sizes[s]?s:"md";return this.sizes[t]},classes:function(s){const t=s||"";return[this.base(),this.getSizeClasses(t)].join(" ").replace(/\s+/g," ").trim()},rowSizes:{xs:1,sm:2,md:3,lg:4,xl:6,"2xl":8},getRowSize:function(s){const t=s&&this.rowSizes[s]?s:"md";return this.rowSizes[t]}};export{n as T};
