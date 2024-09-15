import{_ as i,a,af as n,o as e}from"./chunks/framework.C87LdZyP.js";const o=JSON.parse('{"title":"Vue: i18n 国际化","description":"","frontmatter":{"title":"Vue: i18n 国际化","date":"2017-06-20T00:00:00.000Z","tags":["js","vue"],"category":["前端"]},"headers":[],"relativePath":"posts/2017/06/2017-06-20-vue-i18n.md","filePath":"posts/2017/06/2017-06-20-vue-i18n.md","lastUpdated":1718193786000}'),l={name:"posts/2017/06/2017-06-20-vue-i18n.md"};function t(p,s,h,k,d,r){return e(),a("div",null,s[0]||(s[0]=[n(`<h2 id="安装-package" tabindex="-1">安装 package <a class="header-anchor" href="#安装-package" aria-label="Permalink to &quot;安装 package&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> vue-i18n</span></span></code></pre></div><h2 id="安装-插件" tabindex="-1">安装 插件 <a class="header-anchor" href="#安装-插件" aria-label="Permalink to &quot;安装 插件&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Vue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> VueI18n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;vue-i18n&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Vue.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(VueI18n)</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;#app&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;{{ $t(&quot;message.hello&quot;) }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// If using a module system (e.g. via vue-cli), import Vue and VueI18n and then call Vue.use(VueI18n).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// import Vue from &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// import VueI18n from &#39;vue-i18n&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">//</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// Vue.use(VueI18n)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// Ready translated locale messages</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> messages</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  en: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    message: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      hello: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;hello world&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  ja: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    message: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      hello: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;こんにちは、世界&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// Create VueI18n instance with options</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> i18n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> VueI18n</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  locale: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;ja&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// set locale</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  messages, </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// set locale messages</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">})</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// Create a Vue instanc with \`i18n\` option</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> Vue</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">({i18n}).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">$mount</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;#app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// Now the app has started!</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;#app&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;こんにちは、世界&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span></code></pre></div><p>警告：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>VM17700:431 [Vue warn]: You are using the runtime-only build</span></span>
<span class="line"><span>of Vue where the template compiler is not available.</span></span>
<span class="line"><span>Either pre-compile the templates into render functions, </span></span>
<span class="line"><span>or use the compiler-included build.</span></span></code></pre></div><p>更多<code>rutime-only build</code> <a href="https://github.com/vuejs/vue/issues/2873" target="_blank" rel="noreferrer">参考</a></p><h3 id="singel-fire" tabindex="-1">singel fire <a class="header-anchor" href="#singel-fire" aria-label="Permalink to &quot;singel fire&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --save-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @kazupon/vue-i18n-loader</span></span></code></pre></div><p>参考：</p><ul><li><a href="http://kazupon.github.io/vue-i18n/en/sfc.html" target="_blank" rel="noreferrer">http://kazupon.github.io/vue-i18n/en/sfc.html</a></li></ul><p><a href="https://github.com/kazupon/vue-i18n-loader" target="_blank" rel="noreferrer">https://github.com/kazupon/vue-i18n-loader</a></p><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>`,18)]))}const c=i(l,[["render",t]]);export{o as __pageData,c as default};
