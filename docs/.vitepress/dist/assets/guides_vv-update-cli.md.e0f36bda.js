import{_ as c}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.9897eeba.js";import{c as s}from"./chunks/cliData.f8e0151d.js";import{o as d,c as p,z as e,a as t,t as a,b as n,G as h,O as o}from"./chunks/framework.d4e334f8.js";const v={id:"frontmatter-title",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),g=o('<p>The vv-update CLI is a project maintenance tool to help an existing application bring in new file updates, syntaxes, standards, types, etc. from a recent VueVentus update, into an existing VueVentus dependent application - sometime after a prior <a href="/vueventus/guides/vueventus-cli.html">vueventus CLI</a> installation.</p><h2 id="installing-vueventus" tabindex="-1">Installing VueVentus <a class="header-anchor" href="#installing-vueventus" aria-label="Permalink to &quot;Installing VueVentus&quot;">​</a></h2><p>Generally, you&#39;d use the vv-update CLI with an application already using VueVentus. However, in case you may be just testing things out or for some reason don&#39;t yet have VueVentus installed, you can do so with the command:</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@obewds/vueventus</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h2><p>Assuming you already installed VueVentus with a CLI tool or manually, you can start the vv-update CLI with the command:</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vv-update</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="choose-your-stack" tabindex="-1">Choose Your Stack <a class="header-anchor" href="#choose-your-stack" aria-label="Permalink to &quot;Choose Your Stack&quot;">​</a></h2><p>Some files with the same name are different between different installation stacks. So first up, the vv-update CLI will ask you which stack you are using. The currently supported stacks are:</p>',9),_=e("strong",null,"SPA Stack:",-1),y=e("strong",null,"SSG Stack:",-1),f=e("strong",null,"Nuxt 3 Stack:",-1),b=o('<h2 id="selecting-a-file" tabindex="-1">Selecting a File <a class="header-anchor" href="#selecting-a-file" aria-label="Permalink to &quot;Selecting a File&quot;">​</a></h2><p>Once you&#39;ve selected a stack, the vv-update CLI will present you with a scrolling selection of files, allowing you to select a specific file to install into the location that file would normally be installed into during a <a href="/vueventus/guides/vueventus-cli.html">vueventus CLI</a> installation of that same file (according to your chosen stack).</p><div class="danger custom-block"><p class="custom-block-title">FILES ARE OVERWRITTEN</p><p>Please note that the vv-update CLI doesn&#39;t care if you&#39;ve worked hard on customizing a file originally generated by the <a href="/vueventus/guides/vueventus-cli.html">vueventus CLI</a>!</p><p>This means the vv-update CLI will <strong>overwrite</strong> a file if it already exists, so <strong>always</strong> be sure you have versioning or the ability to undo a vv-update CLI selection to <strong>always</strong> ensure you have a way back out of an overwrite!</p></div><br><div class="tip custom-block"><p class="custom-block-title">SKIP TO TEST DRIVE</p><p>If you&#39;d like to skip ahead to the <a href="/vueventus/guides/test-drive-vv-button.html">VvButton Test Drive</a>, you&#39;ll skip the next install guide(s)!</p></div>',5),I=JSON.parse('{"title":"vv-update CLI","description":"","frontmatter":{"title":"vv-update CLI"},"headers":[],"relativePath":"guides/vv-update-cli.md","lastUpdated":1676972028000}'),k={name:"guides/vv-update-cli.md"},x=Object.assign(k,{setup(C){const i=s.stacks.vueTwViteTs.name,l=s.stacks.vueTwViteSsgMdTs.name,r=s.stacks.vueTwNuxt3.name;return(u,w)=>(d(),p("div",null,[e("h1",v,[t(a(u.$frontmatter.title)+" ",1),m]),g,e("ol",null,[e("li",null,[_,t(" "+a(n(i)),1)]),e("li",null,[y,t(" "+a(n(l)),1)]),e("li",null,[f,t(" "+a(n(r)),1)])]),b,h(c)]))}});export{I as __pageData,x as default};
