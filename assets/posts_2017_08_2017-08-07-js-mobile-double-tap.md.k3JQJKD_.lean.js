import{_ as i,a,af as n,o as h}from"./chunks/framework.C87LdZyP.js";const g=JSON.parse('{"title":"Js Mobile double-tap","description":"","frontmatter":{"title":"Js Mobile double-tap","date":"2017-08-07T00:00:00.000Z","tags":["js","mobile"]},"headers":[],"relativePath":"posts/2017/08/2017-08-07-js-mobile-double-tap.md","filePath":"posts/2017/08/2017-08-07-js-mobile-double-tap.md","lastUpdated":1718193786000}'),l={name:"posts/2017/08/2017-08-07-js-mobile-double-tap.md"};function k(t,s,p,e,d,r){return h(),a("div",null,s[0]||(s[0]=[n(`<p>由于移动设备没有双击事件,我们使用一下代码来实现.</p><h2 id="仅支持双击" tabindex="-1">仅支持双击 <a class="header-anchor" href="#仅支持双击" aria-label="Permalink to &quot;仅支持双击&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> touchtime </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;h1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">), </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (touchtime </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    touchtime </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getTime</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (((</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getTime</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> touchtime) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 500</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;double&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      touchtime </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      touchtime </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getTime</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">})</span></span></code></pre></div><h2 id="支持双击和单击" tabindex="-1">支持双击和单击 <a class="header-anchor" href="#支持双击和单击" aria-label="Permalink to &quot;支持双击和单击&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> handler </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;h2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">), </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (handler </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    handler </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;single&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">      clearTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(handler)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      handler </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">400</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">    clearTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(handler)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    handler </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;double&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">})</span></span></code></pre></div><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>`,7)]))}const D=i(l,[["render",k]]);export{g as __pageData,D as default};
