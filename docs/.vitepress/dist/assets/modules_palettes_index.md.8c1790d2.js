import{_ as s}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.59c6db63.js";import{o as i,c as n,x as e,a as t,t as a,D as u,N as o}from"./chunks/framework.bb38f269.js";const r={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=e("div",{class:"warning custom-block"},[e("p",{class:"custom-block-title"},"0.X ALPHA STATUS"),e("p",null,[t("VueVentus is in a 0.x ("),e("strong",null,"alpha"),t(") status. It is in an post-experimental stage, and is suitable for rapid prototyping, but modules and components could change between minor releases. Additionally, there's more components and modules coming!")])],-1),h=o('<ul><li><a href="/vueventus/modules/palettes/anchor-default.html">AnchorDefault Palette</a></li><li><a href="/vueventus/modules/palettes/border-default.html">BorderDefault Palette</a></li><li><a href="/vueventus/modules/palettes/button-outline.html">ButtonOutline Palette</a></li><li><a href="/vueventus/modules/palettes/button-solid.html">ButtonSolid Palette</a></li><li><a href="/vueventus/modules/palettes/checkbox-default.html">CheckboxDefault Palette</a></li><li><a href="/vueventus/modules/palettes/fill-default.html">FillDefault Palette</a></li><li><a href="/vueventus/modules/palettes/ground-console.html">GroundConsole Palette</a></li><li><a href="/vueventus/modules/palettes/ground-default.html">GroundDefault Palette</a></li><li><a href="/vueventus/modules/palettes/ground-monochromatic.html">GroundMonochromatic Palette</a></li><li><a href="/vueventus/modules/palettes/ground-pastel.html">GroundPastel Palette</a></li><li><a href="/vueventus/modules/palettes/input-default.html">InputDefault Palette</a></li><li><a href="/vueventus/modules/palettes/input-underlined.html">InputUnderlined Palette</a></li><li><a href="/vueventus/modules/palettes/listbox-button-default.html">ListboxButtonDefault Palette</a></li><li><a href="/vueventus/modules/palettes/listbox-button-underlined.html">ListboxButtonUnderlined Palette</a></li><li><a href="/vueventus/modules/palettes/listbox-option-default.html">ListboxOptionDefault Palette</a></li><li><a href="/vueventus/modules/palettes/listbox-option-underlined.html">ListboxOptionUnderlined Palette</a></li><li><a href="/vueventus/modules/palettes/list-default.html">ListDefault Palette</a></li><li><a href="/vueventus/modules/palettes/radio-default.html">RadioDefault Palette</a></li><li><a href="/vueventus/modules/palettes/scrollbar-default.html">ScrollbarDefault Palette</a></li><li><a href="/vueventus/modules/palettes/text-default.html">TextDefault Palette</a></li></ul>',1),m={class:"info custom-block"},p=e("p",{class:"custom-block-title"},"ABOUT PALETTE MODULES",-1),f=e("code",null,"@apply",-1),v=o('<h2 id="global-element-color-palettes" tabindex="-1">Global Element Color Palettes <a class="header-anchor" href="#global-element-color-palettes" aria-label="Permalink to &quot;Global Element Color Palettes&quot;">​</a></h2><p>It&#39;s worth noting that in the VueVentus premise, there are a handful of special element design/visual orientated characteristics that are considered &quot;global&quot; or &quot;universal&quot; from a design system hierarchical POV.</p><p>These traits are considered &quot;global&quot; because they could in theory be applied to any given html element (inline, block level, empty elements, etc.) on the markup side of things, and they are also typically definable on the CSS side of things for any element as well.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>These global characteristics are why a component like the <a href="/vueventus/components/elements/vv-el.html">VvEl</a> component exists!</p></div><p>This idea is simple, but the ramifications are... boundless.</p><p>So in a nutshell, a component like the <a href="/vueventus/components/elements/vv-el.html">VvEl</a> component has access to the &quot;global&quot; palettes for the following characteristics:</p><ul><li>Borders</li><li>Grounds (aka Background or bg)</li><li>Text</li></ul><p>This means you can access color palettes for the characteristics above at any time and in any combination. In theory, child elements also made using a component like or inherited from the <a href="/vueventus/components/elements/vv-el.html">VvEl</a> component, could also have the same palettes access.</p><p>When used in combination and with parents and children, there&#39;s a staggering amount of color control and interface complexity that becomes possible by leveraging strategic and state-focused <em>groups</em> of atomic classes.</p><h2 id="ground-text-palette-overlaps" tabindex="-1">Ground &amp; Text Palette Overlaps <a class="header-anchor" href="#ground-text-palette-overlaps" aria-label="Permalink to &quot;Ground &amp; Text Palette Overlaps&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Be aware that due to accessibility being a highest order concept in the VueVentus premise, there is a sometimes confusing overlap in two of the global palette characteristics: <strong>Grounds</strong> and <strong>Text</strong>.</p></div><p>In short, grounds should have some text accessibility built in by default. Meaning dark ground palette colors should also have light text colored atomic classes. And light grounds should have dark text colored classes by default. This way, when a component applies a ground palette color, the contained text content is accessible by default, too.</p><p>Now in the case of a parent element with a ground palette color specified, you would then want to use a child element component to further control the palette color of text within a ground palette parent. This way, it&#39;s an explicit decision to make text less accessible than the design principles established in the ground palette of the parent.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The VueVentus system follows this pattern to allow for the most amount of flexibility with the least amount of liability (and the least amount of overall atomic classes)!</p></div>',14),y=JSON.parse('{"title":"Palette Config Modules","description":"","frontmatter":{"title":"Palette Config Modules"},"headers":[],"relativePath":"modules/palettes/index.md","lastUpdated":1674693349000}'),b={name:"modules/palettes/index.md"},T=Object.assign(b,{setup(g){return(l,_)=>(i(),n("div",null,[e("h1",r,[t(a(l.$frontmatter.title)+" ",1),c]),d,e("p",null,a(l.$frontmatter.title)+" are subset of config modules specifically meant for atomic color class groupings. They are intended to be used with contextual language to humanize visual color state classes for various states of application elements.",1),h,e("div",m,[p,e("p",null,[t(a(l.$frontmatter.title)+" are also like the Tailwind CSS ",1),f,t(" directive, but specifically for the color CSS characteristics. Like all Config Modules, this means CSS values data isn't stuck inside CSS files or syntax. So the data can exist outside of the scope of CSS, and enjoy the flexibility of JS/JSON color data throughout the stack.")])]),v,u(s)]))}});export{y as __pageData,T as default};
