import{_ as u}from"./chunks/DocsPackageVersion.vue_vue_type_script_setup_true_lang.Hzw28_zM.js";import{c as s}from"./chunks/cliData.LwVfeton.js";import{o as d,c as h,k as e,a as t,t as a,m as o,I as p,R as i}from"./chunks/framework.mpaTk55L.js";const v={id:"frontmatter-title",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),_=i('<p>The vv-update-locals CLI is a project maintenance tool to help an existing application bring in new versions of files and test files into an existing VueVentus dependent application - sometime after a prior <a href="/vueventus/guides/vueventus-cli.html">vueventus CLI</a> installation.</p><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h2><p>Assuming you already installed VueVentus with a CLI tool or manually, you can start the vv-update-locals CLI with the command:</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vv-update-locals</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="choose-your-stack" tabindex="-1">Choose Your Stack <a class="header-anchor" href="#choose-your-stack" aria-label="Permalink to &quot;Choose Your Stack&quot;">​</a></h2><p>Some files with the same name are different between different installation stacks. So first up, the vv-update-locals CLI will ask you which stack you are using. The currently supported stacks are:</p>',6),k=e("strong",null,"SPA Stack:",-1),f=e("strong",null,"SSG Stack:",-1),g=e("strong",null,"Nuxt 3 Stack:",-1),y=i('<h2 id="choose-your-fontawesome-version" tabindex="-1">Choose Your FontAwesome Version <a class="header-anchor" href="#choose-your-fontawesome-version" aria-label="Permalink to &quot;Choose Your FontAwesome Version&quot;">​</a></h2><p>Next up, you&#39;ll need to tell the vv-update-locals CLI which FontAwesome version you are using. The currently supported stacks are:</p><ol><li>FontAwesome Free</li><li>FontAwesome Pro</li></ol><div class="danger custom-block"><p class="custom-block-title">FILES ARE OVERWRITTEN</p><p>Please note that the vv-update-locals CLI doesn&#39;t care if you&#39;ve worked hard on customizing a file originally generated by the <a href="/vueventus/guides/vueventus-cli.html">vueventus CLI</a>!</p><p>This means the vv-update-locals CLI will <strong>overwrite</strong> a file if it already exists, so <strong>always</strong> be sure you have versioning or the ability to undo a vv-update-locals CLI selection to <strong>always</strong> ensure you have a way back out of an overwrite!</p></div><h2 id="enjoy-and-profit" tabindex="-1">Enjoy and Profit <a class="header-anchor" href="#enjoy-and-profit" aria-label="Permalink to &quot;Enjoy and Profit&quot;">​</a></h2><p>Now you can sit back (for like a second or two) while Node.js takes care of the updating. Just be sure to review each file and ensure you didn&#39;t lose any customizations you may have hacked in there. It&#39;s a pretty quick affair to use git and your IDE to add back in any overwritten customizations.</p><p>Happy Hacking! 🚀</p><br><div class="tip custom-block"><p class="custom-block-title">SKIP TO TEST DRIVE</p><p>If you&#39;d like to skip ahead to the <a href="/vueventus/guides/test-drive-vv-button.html">VvButton Test Drive</a>, you&#39;ll skip the next install guide(s)!</p></div>',9),V=JSON.parse('{"title":"vv-update-locals CLI","description":"","frontmatter":{"title":"vv-update-locals CLI"},"headers":[],"relativePath":"guides/vv-update-locals-cli.md","filePath":"guides/vv-update-locals-cli.md","lastUpdated":1676972028000}'),b={name:"guides/vv-update-locals-cli.md"},P=Object.assign(b,{setup(w){const n=s.stacks.vueTwViteTs.name,l=s.stacks.vueTwViteSsgMdTs.name,r=s.stacks.vueTwNuxt3.name;return(c,T)=>(d(),h("div",null,[e("h1",v,[t(a(c.$frontmatter.title)+" ",1),m]),_,e("ol",null,[e("li",null,[k,t(" "+a(o(n)),1)]),e("li",null,[f,t(" "+a(o(l)),1)]),e("li",null,[g,t(" "+a(o(r)),1)])]),y,p(u)]))}});export{V as __pageData,P as default};
