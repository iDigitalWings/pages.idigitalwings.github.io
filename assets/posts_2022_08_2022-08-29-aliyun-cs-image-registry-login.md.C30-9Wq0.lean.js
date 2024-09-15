import{_ as i,a,af as t,o as e}from"./chunks/framework.C87LdZyP.js";const g=JSON.parse('{"title":"阿里云K8S容器服务使用私有镜像仓库","description":"","frontmatter":{"title":"阿里云K8S容器服务使用私有镜像仓库","date":"2022-08-29T00:00:00.000Z","tags":["kubernetes","aliyun"],"category":["其它"]},"headers":[],"relativePath":"posts/2022/08/2022-08-29-aliyun-cs-image-registry-login.md","filePath":"posts/2022/08/2022-08-29-aliyun-cs-image-registry-login.md","lastUpdated":1718173059000}'),n={name:"posts/2022/08/2022-08-29-aliyun-cs-image-registry-login.md"};function l(h,s,p,k,r,d){return e(),a("div",null,s[0]||(s[0]=[t(`<h2 id="使用-secret" tabindex="-1">使用 Secret <a class="header-anchor" href="#使用-secret" aria-label="Permalink to &quot;使用 Secret&quot;">​</a></h2><h3 id="本地登录" tabindex="-1">本地登录 <a class="header-anchor" href="#本地登录" aria-label="Permalink to &quot;本地登录&quot;">​</a></h3><p>在本地登录：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> login</span></span></code></pre></div><p>然后查看生成的令牌配置：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ~/.docker/config.json</span></span></code></pre></div><p>类似：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">    &quot;auths&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">        &quot;https://index.docker.io/v1/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">            &quot;auth&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;c3R...zE2&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果使用 Docker 凭证仓库，则不会看到 auth 条目，看到的将是以仓库名称作为值的 credsStore 条目。 在这种情况下，你可以直接创建一个 Secret。请参阅在命令行上提供凭证来创建 Secret。</p></div><h3 id="创建凭证" tabindex="-1">创建凭证 <a class="header-anchor" href="#创建凭证" aria-label="Permalink to &quot;创建凭证&quot;">​</a></h3><p>创建 secret：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> secret</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> generic</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> regcred</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --from-file=.dockerconfigjson=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">path/to/.docker/config.json</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --type=kubernetes.io/dockerconfigjson</span></span></code></pre></div><p>使用命令行创建：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> secret</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> docker-registry</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> regcred</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --docker-server=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">你的镜像仓库服务器</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --docker-username=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">你的用户名</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --docker-password=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">你的密码</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --docker-email=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">你的邮箱地址</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span></span></code></pre></div><h3 id="检查-secret" tabindex="-1">检查 secret <a class="header-anchor" href="#检查-secret" aria-label="Permalink to &quot;检查 secret&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> secret</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> regcred</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --output=yaml</span></span></code></pre></div><p>输出：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">apiVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">v1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  .dockerconfigjson</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">eyJodHRwczovL2luZGV4L ... J0QUl6RTIifX0=</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">kind</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">Secret</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  ...</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">regcred</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  ...</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  .dockerconfigjson</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">eyJodHRwczovL2luZGV4L ... J0QUl6RTIifX0=</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">kubernetes.io/dockerconfigjson</span></span></code></pre></div><p>解密：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> secret</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> regcred</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --output=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;jsonpath={.data.\\.dockerconfigjson}&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> base64</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --decode</span></span></code></pre></div><p>输出：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;auths&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:{</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;your.private.registry.example.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:{</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;username&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;janedoe&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;password&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;xxxxxxxxxxx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;jdoe@example.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;auth&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;c3R...zE2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}}}</span></span></code></pre></div><p>查看 auth 内容：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;c3R...zE2&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> base64</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --decode</span></span></code></pre></div><p>输出结果中，用户名和密码用 : 链接，类似下面这样：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">janedoe:xxxxxxxxxxx</span></span></code></pre></div><h2 id="使用-免密组件" tabindex="-1">使用 免密组件 <a class="header-anchor" href="#使用-免密组件" aria-label="Permalink to &quot;使用 免密组件&quot;">​</a></h2><p>阿里云上配置标准的 secret 不太行，但是可以使用免密组件来拉锯阿里云cr的镜像。</p><ol><li><strong>升级aliyun-acr-credential-helper组件。</strong><ol><li><strong>登录</strong><a href="https://cs.console.aliyun.com/" target="_blank" rel="noreferrer">容器服务管理控制台</a>。</li><li><strong>在控制台左侧导航栏中，单击</strong>集群**。**</li><li><strong>在</strong>集群列表<strong>页面，单击目标集群操作列下的</strong>更多 &gt; <strong>组件管理</strong>。</li><li><strong>在</strong>安全<strong>区域，找到</strong>aliyun-acr-credential-helper**，单击<strong>升级</strong>。**</li></ol></li></ol><p>如果需要更多配置可参考阿里云文档。</p><hr><ul><li><a href="https://kubernetes.io/zh-cn/docs/tasks/configure-pod-container/pull-image-private-registry/" target="_blank" rel="noreferrer">从私有仓库拉取镜像</a></li><li><a href="https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/#inspecting-the-secret-regcred" target="_blank" rel="noreferrer">Pull an Image from a Private Registry</a></li><li><a href="https://help.aliyun.com/document_detail/159703.htm" target="_blank" rel="noreferrer">使用免密组件拉取容器镜像</a></li></ul>`,32)]))}const c=i(n,[["render",l]]);export{g as __pageData,c as default};
