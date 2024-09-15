import{_ as i,a,af as n,o as l}from"./chunks/framework.C87LdZyP.js";const A=JSON.parse('{"title":"Vue3 变化","description":"","frontmatter":{"title":"Vue3 变化","date":"2021-04-28T00:00:00.000Z","category":["前端"],"tags":["vue3","vue"]},"headers":[],"relativePath":"posts/2021/04/2021-04-28-vue3-02-changed.md","filePath":"posts/2021/04/2021-04-28-vue3-02-changed.md","lastUpdated":1718173059000}'),t={name:"posts/2021/04/2021-04-28-vue3-02-changed.md"};function p(h,s,e,k,d,r){return l(),a("div",null,s[0]||(s[0]=[n(`<h2 id="global-api-vs-app-instance" tabindex="-1">Global API vs APP instance <a class="header-anchor" href="#global-api-vs-app-instance" aria-label="Permalink to &quot;Global API vs APP instance&quot;">​</a></h2><p>Vue2 中很多全局的API，可能引起一些问题，比如vue实例配置污染。</p><p>Vue3中统一通过 createApp 返回 app实力，暴露全局API：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">({})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;comp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: ()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> h</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;div&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;i am comp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;#app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div><ul><li>app.config</li><li>app.config.isCustomElement</li><li>app.component</li><li>app.directive</li><li>app.mixin</li><li>app.use</li></ul><p>移除掉了：</p><ul><li>Vue.config.productionTip</li><li>Vue.filter</li></ul><h2 id="tree-shaking" tabindex="-1">Tree Shaking <a class="header-anchor" href="#tree-shaking" aria-label="Permalink to &quot;Tree Shaking&quot;">​</a></h2><p>Vue2很多 global-api 作为静态函数挂载构造函数，但是程序中却没有使用。这类 dead code 无法使用 webpack 的 tree-shaking 排除。Vue3将他们抽取成独立函数，这样打包工具就可以进行摇树优化。</p><ul><li>Vue.nextTick</li><li>Vue.observable -&gt; reactive</li><li>Vue.version</li><li>Vue.compile</li><li>Vue.set</li><li>Vue.delete</li></ul><h2 id="model-移除-sync" tabindex="-1">model(移除 sync) <a class="header-anchor" href="#model-移除-sync" aria-label="Permalink to &quot;model(移除 sync)&quot;">​</a></h2><p>Vue2的 .sync 和 v-model 功能有重叠，统一为 v-model</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;h3&gt;{{data}}&lt;/h3&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;comp v-model=&quot;data&quot;&gt;&lt;/comp&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;!--等效下面--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;comp :modelValue=&quot;data&quot; @update.modelValue=&quot;&#39;data=$event&quot;&gt;&lt;/comp&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;comp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  template: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">\`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&lt;div @click=&quot;$emit(&#39;update:modelValue&#39;,&#39;new value&#39;)&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">i am comp, {{modelValue}}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span></code></pre></div><h2 id="render-api" tabindex="-1">Render API <a class="header-anchor" href="#render-api" aria-label="Permalink to &quot;Render API&quot;">​</a></h2><ul><li>不再传入h函数，需要手动导入</li><li>scopeSlot去掉了，使用slots接口</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">components</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">  RenderTest</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    props</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">      counter</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">        type</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: Number,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        default</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">    render</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">      return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> h</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;div&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,[</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">        h</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;div&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">          onClick</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">            emit</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;update:counter&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.counter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">          }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">\`i am rendertest \${</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">counter</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      ])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> v-slot</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;xx&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> v-slot</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;footer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.$slots.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.$slots.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">footer</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span></code></pre></div>`,19)]))}const o=i(t,[["render",p]]);export{A as __pageData,o as default};
