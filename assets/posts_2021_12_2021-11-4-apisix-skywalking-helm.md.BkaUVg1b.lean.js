import{_ as i,a,af as n,o as l}from"./chunks/framework.C87LdZyP.js";const p="/assets/skywalking.LdnE-s70.png",o=JSON.parse('{"title":"APISIX: Skywalking","description":"","frontmatter":{"title":"APISIX: Skywalking","date":"2021-12-03T00:00:00.000Z","tags":["apisix","skywalking"],"category":["运维"]},"headers":[],"relativePath":"posts/2021/12/2021-11-4-apisix-skywalking-helm.md","filePath":"posts/2021/12/2021-11-4-apisix-skywalking-helm.md","lastUpdated":1718173059000}'),t={name:"posts/2021/12/2021-11-4-apisix-skywalking-helm.md"};function h(e,s,k,d,g,r){return l(),a("div",null,s[0]||(s[0]=[n(`<p>使用 SkyWalking 记录 ApiSix 日志可以参考：<a href="https://apisix.apache.org/docs/apisix/plugins/skywalking" target="_blank" rel="noreferrer">文档</a> 。 但是我是用 Helm 安装的，测试下来发现了一些小问题。</p><p>首先开启插件:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># Add this in config.yaml</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  - </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">...</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> # plugin you need</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">skywalking</span></span></code></pre></div><p>其次在你的 Route 上开启 SkyWalking 插件，有一个采样率的配置：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">sample_ratio</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span></span></code></pre></div><p>最后设置在<code>conf/config.yaml</code> 设置你的 SkyWalking Endpoint：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">plugin_attr</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  skywalking</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    service_name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">APISIX</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    service_instance_name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;APISIX Instance Name&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    endpoint_addr</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">http://127.0.0.1:12800</span></span></code></pre></div><p>我用的是 <code>apisix-0.7.2</code> 这个版本的 helm chart，有一个 bug，就是 你配置了 plugin_attr 就要配置 volumeMount，我不知道这个是干啥的：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">customPlugins</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  # the lua_path that tells APISIX where it can find plugins,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  # note the last &#39;;&#39; is required.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  luaPath</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;/opts/custom_plugins/?.lua&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">      # plugin name.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">      # plugin attrs</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">      attrs</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">|</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">      # plugin codes can be saved inside configmap object.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">      configMap:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">        # name of configmap.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">        name: &quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">        # since keys in configmap is flat, mountPath allows to define the mount</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">        # path, so that plugin codes can be mounted hierarchically.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">        mounts:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">          - key: &quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">            path: &quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">          - key: &quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">            path: &quot;&quot;</span></span></code></pre></div><p>configMap 不配置就无法应用，</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Error:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> UPGRADE</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> FAILED:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> template:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> apisix/templates/deployment.yaml:96:37:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> executing</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;apisix/templates/deployment.yaml&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> at</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">.configMap.mount</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> nil</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> pointer</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> evaluating</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> interface</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> {}.mounts</span></span></code></pre></div><p>为此我还提了个 <a href="https://github.com/apache/apisix-helm-chart/issues/186" target="_blank" rel="noreferrer">issue</a> ，但是维护者好像并没有看懂我的描述。</p><p>我是在不知道映射这个 configMap 有啥用，最后改了 <code>configmap.yaml</code>，自己定义了 plugin attr 部分：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    {{- </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">if .Values.myCustomPlugins.enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    plugin_attr</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    {{- </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">range $plugin := .Values.myCustomPlugins.plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      {{ </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">$plugin.name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> }}: {{ </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">$plugin.attrs | toYaml | nindent 8</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    {{- </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    {{- </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> }}</span></span></code></pre></div><p><img src="`+p+'" alt=""></p>',15)]))}const c=i(t,[["render",h]]);export{o as __pageData,c as default};
