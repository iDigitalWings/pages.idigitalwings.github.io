import{_ as s,a as i,o as a,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const F=JSON.parse('{"title":"Github Push 问题","description":"","frontmatter":{"title":"Github Push 问题","date":"2022-04-19T00:00:00.000Z","tags":["Github"],"category":["其它"]},"headers":[],"relativePath":"posts/2022/04/2022-04-19-github-push-problem.md","filePath":"posts/2022/04/2022-04-19-github-push-problem.md","lastUpdated":1718173059000}'),t={name:"posts/2022/04/2022-04-19-github-push-problem.md"},p=n(`<p>代理问题报错：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> LibreSSL</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> SSL_connect:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> SSL_ERROR_SYSCALL</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> connection</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> github.com:443</span></span></code></pre></div><p>编辑 <code>~/.gitconfig</code>，</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">[http]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">	postBuffer</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> = 524288000</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">	sslverify</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> = false</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">	sslBackend</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> = openssl</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    proxy</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> = socks5://127.0.0.1:7890</span></span></code></pre></div><p>Git Pages 自动 Push 脚本：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># abort on errors</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">set</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -e</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># build</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;STEP: building docs ...&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#echo &#39;STEP: Generating radar ...&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#python radar.py</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#echo &#39;STEP: Move radar static ...&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#mv dist public/radar</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># navigate into the build output directory</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> public</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># if you are deploying to a custom domain</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># echo &#39;www.example.com&#39; &gt; CNAME</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;STEP: Git committing ...&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> init</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -A</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;deploy&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># if you are deploying to https://&lt;USERNAME&gt;.github.io</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io.git master</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;STEP: Git pushing ...&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://github.com/alanland/alanland.github.io.git</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> master:html-pages</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># if you are deploying to https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> -</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;STEP: success.&quot;</span></span></code></pre></div>`,6),l=[p];function h(e,k,d,g,r,c){return a(),i("div",null,l)}const y=s(t,[["render",h]]);export{F as __pageData,y as default};
