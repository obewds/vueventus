import{_ as s}from"./chunks/DocsAnimatedLogoSection.8357797e.js";import{_ as o}from"./chunks/DocsPackageVersion.98ca7216.js";import{o as n,c as i,d as e,a as t,b as r,t as l,e as u}from"./app.7082c675.js";import"./chunks/VueVentusSpinningMark.74d2ca60.js";const d={id:"frontmatter-title",tabindex:"-1"},c=t("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=u('<div class="warning custom-block"><p class="custom-block-title">0.X ALPHA STATUS</p><p>VueVentus is in a 0.x (<strong>alpha</strong>) status. It is in an post-experimental stage, and is suitable for rapid prototyping, but modules and components could change between minor releases. Additionally, there&#39;s more components and modules coming!</p></div><p>If you&#39;re already a fan of the sometimes controversial way of managing large HTML and CSS projects with atomic classes, then you already know what the main pain point is... very long strings of atomic CSS classes! \u{1F631}</p><p>Add to that problem the inherently tricky normal solution of abstracting common strings for reuse, and things always seem to end up in a tough decision between:</p><ul><li>Should I abstract this string? \u{1F914}</li><li>Or just plan on a future find/replace? \u{1F914}</li></ul><p>That fork in the road is exactly where VueVentus begins.</p><h2 id="the-solution" tabindex="-1">The Solution <a class="header-anchor" href="#the-solution" aria-hidden="true">#</a></h2><p>To help manage this common &quot;abstract or not&quot; conundrum, VueVentus takes a simple and modular approach.</p><p>VueVentus is a &quot;design system&quot; layer of both components and utility modules for modern web applications. It is designed to sit <strong>around</strong> the Tailwind CSS functionalities of an app and <strong>between</strong> the CSS and JavaScript functionalities (and DX \u270A) of Vue.js.</p><p>This position and these abstractions provide modular and component focused management of the many different types of repeated strings and JavaScript primitives that occur in everyday app development.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>VueVentus is highly opinionated from a programmatic POV. But from a design POV, VueVentus is intensely customizable and powerful, because it uses hardcore programmatic DRY approaches under the hood.</p></div><h2 id="why-learn-vueventus" tabindex="-1">Why Learn VueVentus? <a class="header-anchor" href="#why-learn-vueventus" aria-hidden="true">#</a></h2><p>There is a learning curve to be able to fully customize the visual aesthetics of a modern web application through VueVentus&#39;s abstractions.</p><p>However, a major reason for these abstractions, is to make rapid prototyping efficient/logical for devs and iteratively fast/flexible for designers.</p><p>The complexity and learning curve only applies to the need to make surgical component-level edits or global component-wide edits well into the production process for:</p><ul><li>Design changes</li><li>Feature call-outs</li><li>Accessibility updates</li><li>Branding reasons</li><li>Re-designs</li><li>Legal call-outs</li></ul><p>In the end, VueVentus acts as an initial data store for rapid prototyping, and a structural blueprint for DRYness in production apps built with atomic classes.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Over time, VueVentus defaults should be replaced as needed by a custom configuration file (or files) that follow the <a href="/vueventus/modules/configs/vv-config.html">VvConfig</a> structure.</p><p>In most cases, an app&#39;s custom configs are merged with VueVentus defaults at app start. In the case of Vue.js v3, the merged config data should then use the <code>provide()</code>/<code>inject()</code> pattern to pass the merged data down to app layouts, components and modules.</p></div>',17),b=JSON.parse('{"title":"Why VueVentus","description":"","frontmatter":{"title":"Why VueVentus"},"headers":[{"level":2,"title":"The Solution","slug":"the-solution"},{"level":2,"title":"Why Learn VueVentus?","slug":"why-learn-vueventus"}],"relativePath":"guides/why-vueventus.md","lastUpdated":1655557092000}'),h={name:"guides/why-vueventus.md"},_=Object.assign(h,{setup(m){return(a,f)=>(n(),i("div",null,[e(s),t("h1",d,[r(l(a.$frontmatter.title)+" ",1),c]),p,e(o)]))}});export{b as __pageData,_ as default};
