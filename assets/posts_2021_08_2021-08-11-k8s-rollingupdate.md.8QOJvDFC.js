import{_ as i,a,af as n,o as l}from"./chunks/framework.C87LdZyP.js";const D=JSON.parse('{"title":"Kubernetes RollingUpdate 滚动升级","description":"","frontmatter":{"title":"Kubernetes RollingUpdate 滚动升级","date":"2021-08-11T00:00:00.000Z","tags":["k8s"],"category":["运维"]},"headers":[],"relativePath":"posts/2021/08/2021-08-11-k8s-rollingupdate.md","filePath":"posts/2021/08/2021-08-11-k8s-rollingupdate.md","lastUpdated":1718173059000}'),p={name:"posts/2021/08/2021-08-11-k8s-rollingupdate.md"};function t(h,s,k,e,d,r){return l(),a("div",null,s[0]||(s[0]=[n(`<p>Kubernetes 支持 RollingUpdate，可以进行弹性扩容，并且可以查看状态，记录版本以及回滚。</p><p>开发环境的版本都是基于latest 和 Image Always Pull 的策略来部署的， 部署更新最简单的方案就是删除 pod 让 deployment 重新调度启动一个 pod， deployment 的操作是先 terminate 一个 pod，在 start 一个 pod，会造成 服务在启动过程中不能访问。</p><p>先结合 RollingUpdate 和 <code>startupProbe</code> 来进行不停服务的开发环境更新：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">apiVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">apps/v1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">kind</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">Deployment</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">wms</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">spec</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    replicas</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    strategy</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">        type</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">RollingUpdate</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">        rollingUpdate</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">            maxSurge</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">            maxUnavailable</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">        template</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">            spec</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">                containers</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                    -   </span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">wms</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">                        image</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">wms:latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">                        imagePullPolicy</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">Always</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">                        startupProbe</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">                            httpGet</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">                                path</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/actuator/health</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">                                port</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">9210</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">                            initialDelaySeconds</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">15</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">                            failureThreshold</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">100</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">                            periodSeconds</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">                            timeoutSeconds</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span></span></code></pre></div><p>上面例子给出了 315 秒的启动时间，该时间内如果没有启动成功，会被杀掉并且记录 restart 次数。每次应用部署文件都会先启动一个应用，启动成功后删除原来的。</p><p>为了方便运维我们在客户端更新环境变量来触发 deployment 更新：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> env</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> deployment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">deployment_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> DEPLOY_DATE=&quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">date</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">)&quot;</span></span></code></pre></div><p>封装一个函数：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">ksedd</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> env</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> deployment</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;"> $1</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> DEPLOY_DATE=&quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">date</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div>`,9)]))}const y=i(p,[["render",t]]);export{D as __pageData,y as default};
