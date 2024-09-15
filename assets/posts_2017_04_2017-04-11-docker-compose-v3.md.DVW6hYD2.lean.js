import{_ as i,a,af as n,o as l}from"./chunks/framework.C87LdZyP.js";const o=JSON.parse('{"title":"Docker Compose v3","description":"Docker Compose v3","frontmatter":{"title":"Docker Compose v3","date":"2017-04-11T00:00:00.000Z","img":"docker-jekyll.jpg","description":"Docker Compose v3","category":["DevOps"],"tags":["container","docker","swarm","kubernetes","mesos"]},"headers":[],"relativePath":"posts/2017/04/2017-04-11-docker-compose-v3.md","filePath":"posts/2017/04/2017-04-11-docker-compose-v3.md","lastUpdated":1718193786000}'),p={name:"posts/2017/04/2017-04-11-docker-compose-v3.md"};function k(e,s,h,t,d,r){return l(),a("div",null,s[0]||(s[0]=[n(`<p>从 1.13 开始，Docker 命令行工具支持直接使用 v3 版本的 docker-compose.yml 文件来进行应用栈(stack)部署管理。</p><p>首先看一下官方的例子：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;3&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">      services</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">        redis</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          image</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">redis:alpine</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          ports</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;6379&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          networks</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">frontend</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          deploy</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">            replicas</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">            update_config</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">              parallelism</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">              delay</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">10s</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">            restart_policy</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">              condition</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">on-failure</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">        db</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          image</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">postgres:9.4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">db-data:/var/lib/postgresql/data</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          networks</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">backend</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          deploy</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">            placement</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">              constraints</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">node.role == manager</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">        vote</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          image</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">dockersamples/examplevotingapp_vote:before</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          ports</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">5000:80</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          networks</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">frontend</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          depends_on</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">redis</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          deploy</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">            replicas</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">            update_config</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">              parallelism</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">            restart_policy</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">              condition</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">on-failure</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">        result</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          image</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">dockersamples/examplevotingapp_result:before</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          ports</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">5001:80</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          networks</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">backend</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          depends_on</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">db</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          deploy</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">            replicas</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">            update_config</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">              parallelism</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">              delay</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">10s</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">            restart_policy</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">              condition</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">on-failure</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">        worker</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          image</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">dockersamples/examplevotingapp_worker</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          networks</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">frontend</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">backend</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          deploy</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">            mode</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">replicated</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">            replicas</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">            labels</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">APP=VOTING</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">            restart_policy</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">              condition</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">on-failure</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">              delay</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">10s</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">              max_attempts</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">              window</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">120s</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">            placement</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">              constraints</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">node.role == manager</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">        visualizer</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          image</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">dockersamples/visualizer:stable</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          ports</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;8080:8080&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          stop_grace_period</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">1m30s</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;/var/run/docker.sock:/var/run/docker.sock&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          deploy</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">            placement</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">              constraints</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">node.role == manager</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">      networks</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">        frontend</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">        backend</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">      volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">        db-data</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span></code></pre></div><p>用于Docker Compose v1/v2是面向容器编排设计，和Swarm Mode中的面向应用不同。使用其在 Swarm Mode中部署应用特别不方便。</p><p>而Docker 1.13版本之后，Docker Compose V3已经全面支持了Swarm Mode。</p><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><ul><li>启动 <code>docker stack deploy --compose-file=docker-compose.yml</code> <a href="https://docs.docker.com/engine/reference/commandline/stack_deploy/#description" target="_blank" rel="noreferrer">docker stack deploy</a></li><li>伸缩 <code>docker service scale xxx=n</code></li><li>停止 <code>docker stack rm</code></li></ul><h2 id="改变" tabindex="-1">改变 <a class="header-anchor" href="#改变" aria-label="Permalink to &quot;改变&quot;">​</a></h2><ul><li><code>expose</code>， <code>links</code>会被忽略，可以使用服务名连接</li><li><code>volumes_from</code>不再支持，只能使用命名数据卷持久化和共享数据</li><li><code>deploy</code> 来控制Swarm mode的服务部署</li><li><code>resources</code>： <code>cup_shares</code>,<code>cup_quota</code>,<code>cpuset</code>,<code>mem_limit</code>,<code>memswap_limit</code> etc （v1/v2相关指令不再支持）</li><li><code>mode</code>: <code>global</code>, <code>replicated(default)</code></li><li><code>replicas</code>: replicated模式下服务的副本数量</li><li><code>placement</code>: 容器放置的约束</li><li><code>update_config</code>: 服务更新方式</li><li><code>restart_policy</code>: 重启条件（v1/v1<code>restart</code>不再支持）</li><li><code>service</code>: 服务的标签</li></ul><h3 id="docker-cli-和-docker-compose" tabindex="-1">docker cli 和 docker-compose <a class="header-anchor" href="#docker-cli-和-docker-compose" aria-label="Permalink to &quot;docker cli 和 docker-compose&quot;">​</a></h3><p>docker-compose 仍然可用，但是用<code>up</code>或者<code>run</code>运行的时候，模板中的<code>deploy</code>将被忽略。</p><p>docker cli 只支持v3模板，但是不支持其中的<code>build</code>指令。</p><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>`,14)]))}const D=i(p,[["render",k]]);export{o as __pageData,D as default};
