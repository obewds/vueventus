import{_ as c}from"./chunks/DocsPackageVersion.48c5bc9d.js";import{c as n}from"./chunks/cliData.ec64e7b9.js";import{o as d,c as u,a as e,b as i,t as s,u as o,d as p,e as r}from"./app.d2fbc225.js";const h={id:"frontmatter-title",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),_=r(`<p>This guide will walk through how to individually install/update VueVentus files with the vv-update CLI.</p><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h2><p>Assuming you already have a Vue project scaffolded, you can start the vv-update CLI with the command:</p><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npx vv-update</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="choose-your-stack" tabindex="-1">Choose Your Stack <a class="header-anchor" href="#choose-your-stack" aria-hidden="true">#</a></h2><p>Some files with the same name are different between different installation stacks. So first up, the vv-update CLI will ask you which stack you are using. These are the currently supported stacks:</p>`,6),g=i("The SPA Stack: "),m=i("The SSG Stack: "),f=r(`<h2 id="installing-vueventus" tabindex="-1">Installing VueVentus <a class="header-anchor" href="#installing-vueventus" aria-hidden="true">#</a></h2><p>Next up, go ahead and install VueVentus with the command:</p><div class="language-bash line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install @obewds/vueventus</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="selecting-a-file" tabindex="-1">Selecting a File <a class="header-anchor" href="#selecting-a-file" aria-hidden="true">#</a></h2><p>From there you can follow the prompts and ultimately select a specific file to install into the location that file is intended to be according to your chosen stack.</p><div class="danger custom-block"><p class="custom-block-title">FILES ARE OVERWRITTEN</p><p>Please note that the vv-update CLI doesn&#39;t care if you&#39;ve worked hard on customizing a VueVentus or app file, and the CLI will overwrite a file you choose to install/update if it already exists!</p></div><br><div class="tip custom-block"><p class="custom-block-title">SKIP TO TEST DRIVE</p><p>If you&#39;d like to skip ahead to the <a href="/vueventus/guides/test-drive-vv-button.html">VvButton Test Drive</a>, you&#39;ll skip the next install guide(s)!</p></div>`,8),I=JSON.parse('{"title":"vv-update CLI","description":"","frontmatter":{"title":"vv-update CLI"},"headers":[{"level":2,"title":"Getting Started","slug":"getting-started"},{"level":2,"title":"Choose Your Stack","slug":"choose-your-stack"},{"level":2,"title":"Installing VueVentus","slug":"installing-vueventus"},{"level":2,"title":"Selecting a File","slug":"selecting-a-file"}],"relativePath":"guides/vv-update-cli.md","lastUpdated":1659935071000}'),k={name:"guides/vv-update-cli.md"},w=Object.assign(k,{setup(b){let l=Object.keys(n.stacks),a=[];for(let t=0;t<l.length;t++)a.push(n.stacks[l[t]].name);return(t,y)=>(d(),u("div",null,[e("h1",h,[i(s(t.$frontmatter.title)+" ",1),v]),_,e("ol",null,[e("li",null,[g,e("strong",null,s(o(a)[0]),1)]),e("li",null,[m,e("strong",null,s(o(a)[1]),1)])]),f,p(c)]))}});export{I as __pageData,w as default};
