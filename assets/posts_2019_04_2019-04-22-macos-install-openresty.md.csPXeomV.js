import{_ as i,a,af as n,o as t}from"./chunks/framework.C87LdZyP.js";const r=JSON.parse('{"title":"curl/wget查看http请求头和响应头","description":"","frontmatter":{"title":"curl/wget查看http请求头和响应头","date":"2019-04-19T00:00:00.000Z","tags":["nginx","openresty","mac"]},"headers":[],"relativePath":"posts/2019/04/2019-04-22-macos-install-openresty.md","filePath":"posts/2019/04/2019-04-22-macos-install-openresty.md","lastUpdated":1718173059000}'),h={name:"posts/2019/04/2019-04-22-macos-install-openresty.md"};function l(p,s,k,e,C,d){return t(),a("div",null,s[0]||(s[0]=[n(`<div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> libgd</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">RESTY_OPENSSL_VERSION</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;1.1.0j&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -fSL</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://www.openssl.org/source/openssl-</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">\${RESTY_OPENSSL_VERSION}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">.tar.gz</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> openssl-</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">\${RESTY_OPENSSL_VERSION}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">tar</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> xzf</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> openssl-</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">\${RESTY_OPENSSL_VERSION}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">./configure</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -j2</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-http_addition_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-http_auth_request_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-http_dav_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-http_flv_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-http_geoip_module=dynamic</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-http_gunzip_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-http_gzip_static_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-http_image_filter_module=dynamic</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-http_mp4_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-http_random_index_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-http_realip_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-http_secure_link_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-http_slice_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-http_ssl_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-http_stub_status_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-http_sub_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-http_v2_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-ipv6</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-mail</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-mail_ssl_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-md5-asm</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-pcre-jit</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-sha1-asm</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-stream</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-threads</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --with-openssl=./openssl-\${</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">RESTY_OPENSSL_VERSION</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">make</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">make</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span></span></code></pre></div><hr>`,2)]))}const g=i(h,[["render",l]]);export{r as __pageData,g as default};
