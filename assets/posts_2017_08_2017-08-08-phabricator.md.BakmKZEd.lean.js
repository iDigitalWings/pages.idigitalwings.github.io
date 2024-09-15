import{_ as i,a,af as n,o as t}from"./chunks/framework.C87LdZyP.js";const p="/assets/dashboard.gQIbeKE5.png",g=JSON.parse('{"title":"Mongo Gui Tools","description":"","frontmatter":{"title":"Mongo Gui Tools","date":"2017-08-08T00:00:00.000Z","tags":["code-review","phabricator"]},"headers":[],"relativePath":"posts/2017/08/2017-08-08-phabricator.md","filePath":"posts/2017/08/2017-08-08-phabricator.md","lastUpdated":1718193786000}'),l={name:"posts/2017/08/2017-08-08-phabricator.md"};function e(h,s,k,r,d,o){return t(),a("div",null,s[0]||(s[0]=[n(`<p>使用 Compose:</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;2&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  mariadb</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;bitnami/mariadb:latest&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">mariadb</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">ALLOW_EMPTY_PASSWORD=yes</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">mariadb_data:/bitnami</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  phabricator</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">bitnami/phabricator:latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">phabricator</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    depends_on</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">mariadb</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;7777:80&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;443:443&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">ALLOW_EMPTY_PASSWORD=yes</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">PHABRICATOR_USERNAME=alan</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">PHABRICATOR_PASSWORD=wang</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">phabricator_data:/bitnami</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  mariadb_data</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    driver</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">local</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  phabricator_data</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    driver</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">local</span></span></code></pre></div><p>如果报错:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>Site Not Found</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This request asked for &quot;/&quot; on host &quot;alan.io&quot;, but no site is configured which can serve this request.</span></span></code></pre></div><p>进入docker:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>$ docker exec -it phabricator bash</span></span>
<span class="line"><span>$ /opt/bitnami/phabricator/bin/config set phabricator.base-uri &#39;http://alan.io:7777&#39;</span></span></code></pre></div><p>刷新网页,登录:</p><p><img src="`+p+'" alt=""></p><hr><p>Links:</p><ul><li><a href="https://hub.docker.com/r/bitnami/phabricator/" target="_blank" rel="noreferrer">https://hub.docker.com/r/bitnami/phabricator/</a></li><li><a href="http://www.jianshu.com/p/b5514474d079" target="_blank" rel="noreferrer">http://www.jianshu.com/p/b5514474d079</a></li><li><a href="https://stackoverflow.com/questions/35628144/this-request-asked-for-on-host-example-com-but-no-site-is-configured-whic" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/35628144/this-request-asked-for-on-host-example-com-but-no-site-is-configured-whic</a></li></ul><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>',13)]))}const D=i(l,[["render",e]]);export{g as __pageData,D as default};
