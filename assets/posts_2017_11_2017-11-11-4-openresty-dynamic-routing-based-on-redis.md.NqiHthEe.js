import{_ as i,a,af as n,o as l}from"./chunks/framework.C87LdZyP.js";const g=JSON.parse('{"title":"OpenResty: Dynamic Routing Based On Redis","description":"","frontmatter":{"title":"OpenResty: Dynamic Routing Based On Redis","date":"2017-11-11T00:00:00.000Z","tags":["ratelimite","nginx","openresty","lua"],"category":["DevOps"]},"headers":[],"relativePath":"posts/2017/11/2017-11-11-4-openresty-dynamic-routing-based-on-redis.md","filePath":"posts/2017/11/2017-11-11-4-openresty-dynamic-routing-based-on-redis.md","lastUpdated":1718173059000}'),p={name:"posts/2017/11/2017-11-11-4-openresty-dynamic-routing-based-on-redis.md"};function e(t,s,h,k,r,F){return l(),a("div",null,s[0]||(s[0]=[n(`<p>来自官网例子，通过请求头里面的<code>User-Agent</code>把请求路由到不同的后端。</p><p>使用了 OpenResty 绑定的如下模块，</p><ul><li>Redis2 Nginx Module,</li><li>Lua Nginx Module,</li><li>Lua Redis Parser Library,</li><li>and Set Misc Nginx Module</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">worker_processes</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">error_log</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> logs/error.log</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> info</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">events</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    worker_connections</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1024</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">http</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    upstream</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> apache.org</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">        server</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> apache.org</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    upstream</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> nginx.org</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">        server</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> nginx.org</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    server</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">        listen</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 8080</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">        location</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> /redis</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">            internal</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">            set_unescape_uri</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> $key $arg_key;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">            redis2_query</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> get</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> $key;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">            redis2_pass</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 127.0.0.1:6379</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">        location</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">            set</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> $target </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">            access_by_lua</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                local key = ngx.var.http_user_agent</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                local res = ngx.location.capture(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                    &quot;/redis&quot;, { args = { key = key } }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                )</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                print(&quot;key: &quot;, key)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                if res.status ~= 200 then</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                    ngx.log(ngx.ERR, &quot;redis server returned bad status: &quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                        res.status)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                    ngx.exit(res.status)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                if not res.body then</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                    ngx.log(ngx.ERR, &quot;redis returned empty body&quot;)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                    ngx.exit(500)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                local parser = require &quot;redis.parser&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                local server, typ = parser.parse_reply(res.body)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                if typ ~= parser.BULK_REPLY or not server then</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                    ngx.log(ngx.ERR, &quot;bad redis response: &quot;, res.body)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                    ngx.exit(500)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                print(&quot;server: &quot;, server)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                ngx.var.target = server</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">            &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">            proxy_pass</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> http://</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$target;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>启动 redis, <code>localhost:6379</code>,</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ./redis-server</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  # default port is 6379</span></span></code></pre></div><p>插入一些值：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ./redis-cli</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">redis</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> foo</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> apache.org</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">OK</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">redis</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> bar</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> nginx.org</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">OK</span></span></code></pre></div><p>测试Nginx</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --user-agent</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> foo</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> localhost:8080</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">apache.org home page goes here</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --user-agent</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> bar</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> localhost:8080</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">nginx.org home page goes here</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span></span></code></pre></div><hr><ul><li><a href="http://openresty.org/cn/dynamic-routing-based-on-redis.html" target="_blank" rel="noreferrer">Dynamic Routing Based On Redis</a></li><li><a href="https://github.com/openresty/redis2-nginx-module#" target="_blank" rel="noreferrer">Github: redis2-nginx-module</a></li></ul><hr>`,13)]))}const y=i(p,[["render",e]]);export{g as __pageData,y as default};
