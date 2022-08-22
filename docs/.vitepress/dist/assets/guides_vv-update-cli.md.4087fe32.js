import{_ as u}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.485e1ce4.js";import{c as s}from"./chunks/cliData.8ca7d3ae.js";import{o as c,c as d,a as e,b as t,t as a,u as n,d as p,e as i}from"./app.a36de030.js";const h={id:"frontmatter-title",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),g=i(`<p>The vv-update CLI is a project maintenance tool to help an existing application bring in new file updates, syntaxes, standards, types, etc. from a recent VueVentus update, into an existing VueVentus dependent application - sometime after a prior <a href="/vueventus/guides/vueventus-cli.html">vueventus CLI</a> installation.</p><h2 id="installing-vueventus" tabindex="-1">Installing VueVentus <a class="header-anchor" href="#installing-vueventus" aria-hidden="true">#</a></h2><p>Generally, you&#39;d use the vv-update CLI with an application already using VueVentus. However, in case you may be just testing things out or for some reason don&#39;t yet have VueVentus installed, you can do so with the command:</p><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install @obewds/vueventus</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h2><p>Assuming you already installed VueVentus with a CLI tool or manually, you can start the vv-update CLI with the command:</p><div class="language-bash line-numbers-mode"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">npx vv-update</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="choose-your-stack" tabindex="-1">Choose Your Stack <a class="header-anchor" href="#choose-your-stack" aria-hidden="true">#</a></h2><p>Some files with the same name are different between different installation stacks. So first up, the vv-update CLI will ask you which stack you are using. The currently supported stacks are:</p>`,9),m=e("strong",null,"SPA Stack:",-1),_=e("strong",null,"SSG Stack:",-1),f=i('<h2 id="selecting-a-file" tabindex="-1">Selecting a File <a class="header-anchor" href="#selecting-a-file" aria-hidden="true">#</a></h2><p>Once you&#39;ve selected a stack, the vv-update CLI will present you with a scrolling selection of files, allowing you to select a specific file to install into the location that file would normally be installed into during a <a href="/vueventus/guides/vueventus-cli.html">vueventus CLI</a> installation of that same file (according to your chosen stack).</p><div class="danger custom-block"><p class="custom-block-title">FILES ARE OVERWRITTEN</p><p>Please note that the vv-update CLI doesn&#39;t care if you&#39;ve worked hard on customizing a file originally written by the <a href="/vueventus/guides/vueventus-cli.html">vueventus CLI</a>!</p><p>This means the vv-update CLI will <strong>overwrite</strong> a file if it already exists, so <strong>always</strong> be sure you have versioning or the ability to undo a vv-update CLI selection to <strong>always</strong> have a way back out of an overwrite!</p></div><br><div class="tip custom-block"><p class="custom-block-title">SKIP TO TEST DRIVE</p><p>If you&#39;d like to skip ahead to the <a href="/vueventus/guides/test-drive-vv-button.html">VvButton Test Drive</a>, you&#39;ll skip the next install guide(s)!</p></div>',5),T=JSON.parse('{"title":"vv-update CLI","description":"","frontmatter":{"title":"vv-update CLI"},"headers":[{"level":2,"title":"Installing VueVentus","slug":"installing-vueventus"},{"level":2,"title":"Getting Started","slug":"getting-started"},{"level":2,"title":"Choose Your Stack","slug":"choose-your-stack"},{"level":2,"title":"Selecting a File","slug":"selecting-a-file"}],"relativePath":"guides/vv-update-cli.md","lastUpdated":1661202041000}'),y={name:"guides/vv-update-cli.md"},I=Object.assign(y,{setup(b){const l=s.stacks.vueTwViteTs.name,o=s.stacks.vueTwViteSsgMdTs.name;return(r,k)=>(c(),d("div",null,[e("h1",h,[t(a(r.$frontmatter.title)+" ",1),v]),g,e("ol",null,[e("li",null,[m,t(" "+a(n(l)),1)]),e("li",null,[_,t(" "+a(n(o)),1)])]),f,p(u)]))}});export{T as __pageData,I as default};
