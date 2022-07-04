import{_ as o}from"./chunks/DocsPackageVersion.80757fb9.js";import{o as e,c as n,a as s,b as l,t,d as p,e as r}from"./app.b6e98a9c.js";const c={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(`<p>For prototyping, VueVentus comes with a default color palette that tweaks Tailwind CSS&#39;s default color palette slightly for dark/light mode accessibility reasons. However, this file is only meant for prototyping! A production application would want to control many if not all of the visual characteristics VueVentus provides generically.</p><h2 id="twcss-colors-tool" tabindex="-1">TWCSS Colors Tool <a class="header-anchor" href="#twcss-colors-tool" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">HEX COLOR CODE BLUES</p><p>Sadly, it&#39;s no small task to pick a full palette of colors that work well together, and then tint (add white tones) and shade (add dark tones) each one several times to get a full palette.</p></div><p>Luckily, there&#39;s a tool from <a href="https://github.com/oberocks" target="_blank" rel="noopener noreferrer">@oberocks</a> specifically for this tedious task.</p><p>Here&#39;s the steps to complete:</p><ol><li>Visit and use the free <a href="https://tailwind.mattmct.com/" target="_blank" rel="noopener noreferrer">TWCSS Colors Tool</a></li><li>Create, test out, and copy your JSON color palette data with the tool</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The TWCSS Colors Tool allows you to copy the raw JSON data or download a file</p></div><h2 id="adding-color-config-to-tailwind" tabindex="-1">Adding Color Config to Tailwind <a class="header-anchor" href="#adding-color-config-to-tailwind" aria-hidden="true">#</a></h2><p>Once you have your JSON color palette data, create a file with a descriptive name in your project&#39;s root directory and paste your data in it (or copy the file into your root if you downloaded a file)</p><p>Assuming our JSON color palettes file is called <code>my-app-colors.json</code>, we should now have a <code>./my-app-colors.json</code> file in the root directory.</p><div class="tip custom-block"><p class="custom-block-title">AFTER THE GETTING STARTED GUIDE</p><p>Now we can use our <code>./my-app-colors.json</code> file in our project&#39;s <code>./tailwind.config.js</code> file, instead of pulling our colors from the VueVentus package like we did in the Getting Started guide.</p></div><p>Let&#39;s open up our <code>./tailwind.config.js</code> file and change the following line:</p><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> appColors </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./my-app-colors.json</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>And of course this means we&#39;ll also need to change the variable reference for the one we just replaced deeper in the <code>./tailwind.config.js</code> file like so:</p><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">extend</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* ... */</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">colors</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> appColors</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="accessing-color-data" tabindex="-1">Accessing Color Data <a class="header-anchor" href="#accessing-color-data" aria-hidden="true">#</a></h2><p>Additionally, we can also access this data within our application and with our components directly... which really comes in handy for multi-color situations like JavaScript driven charts and SVGs!</p><p>Here&#39;s what that looks like for the default naming conventions the <a href="https://tailwind.mattmct.com/" target="_blank" rel="noopener noreferrer">TWCSS Colors Tool</a> provides:</p><div class="language-javascript line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> appColors </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./my-app-colors.json</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> red </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> appColors</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">red[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">400</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> coolGray </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> appColors</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">coolGray[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">600</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,19),m=JSON.parse('{"title":"App Color Data","description":"","frontmatter":{"title":"App Color Data"},"headers":[{"level":2,"title":"TWCSS Colors Tool","slug":"twcss-colors-tool"},{"level":2,"title":"Adding Color Config to Tailwind","slug":"adding-color-config-to-tailwind"},{"level":2,"title":"Accessing Color Data","slug":"accessing-color-data"}],"relativePath":"modules/data/app-color-data.md","lastUpdated":1655560850000}'),y={name:"modules/data/app-color-data.md"},f=Object.assign(y,{setup(D){return(a,u)=>(e(),n("div",null,[s("h1",c,[l(t(a.$frontmatter.title)+" ",1),i]),d,p(o)]))}});export{m as __pageData,f as default};
