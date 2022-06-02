import{_ as s,c as e,o as a,a as o}from"./app.1fb71267.js";const D='{"title":"Guides","description":"","frontmatter":{},"headers":[{"level":2,"title":"Custom Color Palette Files","slug":"custom-color-palette-files"},{"level":2,"title":"Working with Config Modules","slug":"working-with-config-modules"},{"level":2,"title":"Palettes vs Colors","slug":"palettes-vs-colors"},{"level":2,"title":"Palettes, Colors, Props, & State","slug":"palettes-colors-props-state"},{"level":2,"title":"Global Element Visual Traits","slug":"global-element-visual-traits"}],"relativePath":"guides.md"}',n={name:"guides.md"},l=o(`<h1 id="guides" tabindex="-1">Guides <a class="header-anchor" href="#guides" aria-hidden="true">#</a></h1><p>The following guides will help you to understand the flow of VueVentus design system components, as well as how to customize and work with the system to keep your code base DRY while also encouraging dynamic state change visual color control for virtually any element in your application.</p><br><h2 id="custom-color-palette-files" tabindex="-1">Custom Color Palette Files <a class="header-anchor" href="#custom-color-palette-files" aria-hidden="true">#</a></h2><p>For prototyping, VueVentus comes with a default color palette that tweaks Tailwind CSS&#39;s default color palette slightly for dark/light mode accessiblity reasons. But this file is only meant for prototyping, as a production application would want to control many if not all of the visual characteristics VueVentus provides generically.</p><div class="info custom-block"><p class="custom-block-title">HEX COLOR CODE BLUES</p><p>Sadly, it&#39;s no small task to pick a full palette of colors that work well together, and then tint (add white tones) and shade (add dark tones) each one several times to get a full palette.</p></div><p>Luckily, there&#39;s a tool from <a href="https://github.com/oberocks" target="_blank" rel="noopener noreferrer">@oberocks</a> specifically for this tedious task.</p><p>Here&#39;s the steps to complete:</p><ol><li>Visit and use the free <a href="https://tailwind.mattmct.com/" target="_blank" rel="noopener noreferrer">TWCSS Colors Tool</a> to create, test out, and get your JSON color palette data ready to use in your app.</li><li>The tool allows you to copy the raw JSON data or download a file</li><li>Once you have your JSON color palette data, create a file with a descriptive name in your project&#39;s root directory and paste your data in it (or copy the file into your root if you downloaded a file)</li></ol><p>Assuming our JSON color palettes file is called <code>vueventus.tailwind.colors.json</code>, we should now have a <code>./vueventus.tailwind.colors.json</code> file in the root directory.</p><div class="info custom-block"><p class="custom-block-title">AFTER THE GETTING STARTED GUIDE</p><p>Now we can use our <code>./vueventus.tailwind.colors.json</code> file in our project&#39;s <code>./tailwind.config.js</code> file, instead of pulling our colors from the VueVentus package like we did in the Getting Started guide.</p></div><p>Let&#39;s open up our <code>./tailwind.config.js</code> file and change the following line:</p><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> appPalette </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./vueventus.tailwind.colors.json</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>And of course this means we&#39;ll also need to change the variable reference for the one we just replaced deeper in the <code>./tailwind.config.js</code> file like so:</p><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">extend</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* ... */</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">colors</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> appPalette</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Additionally, we can also access this data within our application and with our components directly... which really comes in handy for multi-color situations like JavaScript driven charts and SVGs!</p><p>Here&#39;s what that looks like for the default naming conventions the <a href="https://tailwind.mattmct.com/" target="_blank" rel="noopener noreferrer">TWCSS Colors Tool</a> provides:</p><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> vvTvColors </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./vueventus.tailwind.colors.json</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> red </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> vvTvColors</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">red[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">400</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> coolGray </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> vvTvColors</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">coolGray[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">600</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><br><h2 id="working-with-config-modules" tabindex="-1">Working with Config Modules <a class="header-anchor" href="#working-with-config-modules" aria-hidden="true">#</a></h2><p>Documentation coming soon!</p><br><h2 id="palettes-vs-colors" tabindex="-1">Palettes vs Colors <a class="header-anchor" href="#palettes-vs-colors" aria-hidden="true">#</a></h2><p>Documentation coming soon!</p><br><h2 id="palettes-colors-props-state" tabindex="-1">Palettes, Colors, Props, &amp; State <a class="header-anchor" href="#palettes-colors-props-state" aria-hidden="true">#</a></h2><p>Documentation coming soon!</p><br><h2 id="global-element-visual-traits" tabindex="-1">Global Element Visual Traits <a class="header-anchor" href="#global-element-visual-traits" aria-hidden="true">#</a></h2><p>Documentation coming soon!</p><br>`,31),t=[l];function p(r,i,c,d,u,y){return a(),e("div",null,t)}var m=s(n,[["render",p]]);export{D as __pageData,m as default};
