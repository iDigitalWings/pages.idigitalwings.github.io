import{_ as s,a,af as e,o as n}from"./chunks/framework.C87LdZyP.js";const o=JSON.parse('{"title":"How to Clear Nginx Cache","description":"","frontmatter":{"title":"How to Clear Nginx Cache","date":"2019-06-10T00:00:00.000Z","tags":["nginx"]},"headers":[],"relativePath":"posts/2019/06/2019-06-10-how-to-clear-cache.md","filePath":"posts/2019/06/2019-06-10-how-to-clear-cache.md","lastUpdated":1718173059000}'),t={name:"posts/2019/06/2019-06-10-how-to-clear-cache.md"};function h(l,i,r,p,k,c){return n(),a("div",null,i[0]||(i[0]=[e(`<h2 id="clear-nginx-proxy-cache" tabindex="-1">Clear Nginx Proxy cache <a class="header-anchor" href="#clear-nginx-proxy-cache" aria-label="Permalink to &quot;Clear Nginx Proxy cache&quot;">​</a></h2><p>default <code>/var/nginx/cache/</code></p><h2 id="cleaning-the-browser-cache-by-header-input" tabindex="-1">Cleaning the browser cache by header input <a class="header-anchor" href="#cleaning-the-browser-cache-by-header-input" aria-label="Permalink to &quot;Cleaning the browser cache by header input&quot;">​</a></h2><div class="language-ruby vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ruby</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">location </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">~*</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> ^</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">\\.(css</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">js</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">jpg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">gif</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">png</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">txt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">ico</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">swf</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">xml)$ {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  root </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">usr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">local</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">nginx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">htdocs;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  expires modified </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">2d;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">nginx</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> restart</span></span></code></pre></div><h2 id="disable-sendfile" tabindex="-1">Disable “sendfile” <a class="header-anchor" href="#disable-sendfile" aria-label="Permalink to &quot;Disable “sendfile”&quot;">​</a></h2><hr><ul><li><a href="https://docs.nginx.com/nginx/admin-guide/content-cache/content-caching/#limiting-or-disabling-caching" target="_blank" rel="noreferrer">https://docs.nginx.com/nginx/admin-guide/content-cache/content-caching/#limiting-or-disabling-caching</a></li><li><a href="https://www.techietown.info/2017/03/how-to-deleteclear-nginx-cache/" target="_blank" rel="noreferrer">Limiting or Disabling Caching</a></li><li><a href="https://docs.nginx.com/nginx/admin-guide/content-cache/content-caching/#purging-content-from-the-cache" target="_blank" rel="noreferrer">Purging Content From The Cache</a></li></ul>`,8)]))}const g=s(t,[["render",h]]);export{o as __pageData,g as default};
