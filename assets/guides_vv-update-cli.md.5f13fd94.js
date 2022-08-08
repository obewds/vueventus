import{_ as c}from"./chunks/DocsPackageVersion.1abc625d.js";import{c as l}from"./chunks/cliData.cdf63713.js";import{o as u,c as d,a as e,b as s,t as n,u as o,d as p,e as r}from"./app.d2fbc225.js";const h={id:"frontmatter-title",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),g=r(`<p>This guide will walk through installing and setting up a project with the vueventus CLI.</p><h2 id="installing-vueventus" tabindex="-1">Installing VueVentus <a class="header-anchor" href="#installing-vueventus" aria-hidden="true">#</a></h2><p>Generally, you&#39;d use the vv-update CLI with an application already using VueVentus. However, in case you may be just testing things out or for some reason don&#39;t yet have VueVentus installed, you can do so with the command:</p><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install @obewds/vueventus</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h2><p>Assuming you already installed VueVentus with a CLI tool or manually, you can start the vv-update CLI with the command:</p><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npx vv-update</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="choose-your-stack" tabindex="-1">Choose Your Stack <a class="header-anchor" href="#choose-your-stack" aria-hidden="true">#</a></h2><p>Some files with the same name are different between different installation stacks. So first up, the vv-update CLI will ask you which stack you are using. The currently supported stacks are:</p>`,9),_=e("strong",null,"SPA Stack:",-1),m=e("strong",null,"SSG Stack:",-1),f=r('<h2 id="selecting-a-file" tabindex="-1">Selecting a File <a class="header-anchor" href="#selecting-a-file" aria-hidden="true">#</a></h2><p>Once you&#39;ve selected a stack, the vv-update CLI will present you a scrolling checklist of files, allowing you to select a specific file to install into the location that file would be installed in during a vueventus CLI installation of that same file (according to your chosen stack).</p><div class="danger custom-block"><p class="custom-block-title">FILES ARE OVERWRITTEN</p><p>Please note that the vv-update CLI doesn&#39;t care if you&#39;ve worked hard on customizing a file originally written by the vueventus CLI!</p><p>This means the vv-update CLI will <strong>overwrite</strong> a file if it already exists, so <strong>always</strong> be sure you have versioning or the ability to undo an vv-update CLI selection to <strong>always</strong> have a way back out of an overwrite!</p></div><br><div class="tip custom-block"><p class="custom-block-title">SKIP TO TEST DRIVE</p><p>If you&#39;d like to skip ahead to the <a href="/vueventus/guides/test-drive-vv-button.html">VvButton Test Drive</a>, you&#39;ll skip the next install guide(s)!</p></div>',5),C=JSON.parse('{"title":"vv-update CLI","description":"","frontmatter":{"title":"vv-update CLI"},"headers":[{"level":2,"title":"Installing VueVentus","slug":"installing-vueventus"},{"level":2,"title":"Getting Started","slug":"getting-started"},{"level":2,"title":"Choose Your Stack","slug":"choose-your-stack"},{"level":2,"title":"Selecting a File","slug":"selecting-a-file"}],"relativePath":"guides/vv-update-cli.md","lastUpdated":1659984964000}'),y={name:"guides/vv-update-cli.md"},T=Object.assign(y,{setup(b){let i=Object.keys(l.stacks),a=[];for(let t=0;t<i.length;t++)a.push(l.stacks[i[t]].name);return(t,k)=>(u(),d("div",null,[e("h1",h,[s(n(t.$frontmatter.title)+" ",1),v]),g,e("ol",null,[e("li",null,[_,s(" "+n(o(a)[0]),1)]),e("li",null,[m,s(" "+n(o(a)[1]),1)])]),f,p(c)]))}});export{C as __pageData,T as default};
