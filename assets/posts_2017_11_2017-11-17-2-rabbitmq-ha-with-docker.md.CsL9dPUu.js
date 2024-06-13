import{_ as s,a,o as n,aj as i}from"./chunks/framework.Ba_Ek9Jm.js";const t="/assets/unsync-queue1.CL0xV9L_.png",e="/assets/unsync-queue2.BrYNfYaJ.png",m=JSON.parse('{"title":"RabbitMQ ha with Docker","description":"","frontmatter":{"title":"RabbitMQ ha with Docker","date":"2017-11-17T00:00:00.000Z","tags":["rabbitmq","docker","ha","cluster"],"category":["DevOps"]},"headers":[],"relativePath":"posts/2017/11/2017-11-17-2-rabbitmq-ha-with-docker.md","filePath":"posts/2017/11/2017-11-17-2-rabbitmq-ha-with-docker.md","lastUpdated":1718173059000}'),p={name:"posts/2017/11/2017-11-17-2-rabbitmq-ha-with-docker.md"},l=i(`<h2 id="docker-compose-xml" tabindex="-1"><code>docker-compose.xml</code> <a class="header-anchor" href="#docker-compose-xml" aria-label="Permalink to &quot;\`docker-compose.xml\`&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;2&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  rabbitmq</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">rabbitmq:3.6.1-management</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">rabbitmq</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    hostname</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">rabbit80</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">always</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">     - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">RABBITMQ_DEFAULT_USER=root</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">     - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">RABBITMQ_DEFAULT_PASS=password</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#     - RABBITMQ_ERLANG_COOKIE=xxxxxxxxxxxx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">     - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">RABBITMQ_USE_LONGNAME=true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">     - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">RABBITMQ_LOGS=/var/log/rabbitmq/rabbit.log</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">     - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;4369:4369&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">     - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;5672:5672&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">     - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;15672:15672&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">     - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;25672:25672&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">     - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;35197:35197&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">     - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/etc/timezone:/etc/timezone</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">     - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">$PWD/data/rabbitmq:/var/lib/rabbitmq</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">     - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">$PWD/data/rabbitmq/logs:/var/log/rabbitmq</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    extra_hosts</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">     - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;rabbit81:172.16.120.81&quot;</span></span></code></pre></div><h2 id="修改权限" tabindex="-1">修改权限 <a class="header-anchor" href="#修改权限" aria-label="Permalink to &quot;修改权限&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>chmod 600 erlang.cookie</span></span></code></pre></div><h2 id="创建集群" tabindex="-1">创建集群 <a class="header-anchor" href="#创建集群" aria-label="Permalink to &quot;创建集群&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>rabbit1$ docker-compose up -d</span></span>
<span class="line"><span>rabbit2$ docker-compose up -d</span></span>
<span class="line"><span>rabbit1$ docker exec -it rabbitmq bash</span></span>
<span class="line"><span>rabbit2$ docker exec -it rabbitmq bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>root@rabbit80:/# rabbitmqctl cluster_status</span></span>
<span class="line"><span>Cluster status of node rabbit@rabbit80 ...</span></span>
<span class="line"><span>[{nodes,[{disc,[rabbit@rabbit80]}]},</span></span>
<span class="line"><span> {running_nodes,[rabbit@rabbit80]},</span></span>
<span class="line"><span> {cluster_name,&lt;&lt;&quot;rabbit@rabbit80&quot;&gt;&gt;},</span></span>
<span class="line"><span> {partitions,[]},</span></span>
<span class="line"><span> {alarms,[{rabbit@rabbit80,[]}]}]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>root@rabbit81:/# rabbitmqctl cluster_status</span></span>
<span class="line"><span>Cluster status of node rabbit@rabbit81 ...</span></span>
<span class="line"><span>[{nodes,[{disc,[rabbit@rabbit81]}]},</span></span>
<span class="line"><span> {running_nodes,[rabbit@rabbit81]},</span></span>
<span class="line"><span> {cluster_name,&lt;&lt;&quot;rabbit@rabbit81&quot;&gt;&gt;},</span></span>
<span class="line"><span> {partitions,[]},</span></span>
<span class="line"><span> {alarms,[{rabbit@rabbit81,[]}]}]</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>root@rabbit81:/# rabbitmqctl  stop_app</span></span>
<span class="line"><span>Stopping node rabbit@rabbit81 ...</span></span>
<span class="line"><span>root@rabbit81:/# rabbitmqctl  reset</span></span>
<span class="line"><span>Resetting node rabbit@rabbit81 ...</span></span>
<span class="line"><span>root@rabbit81:/# rabbitmqctl  join_cluster rabbit@rabbit80</span></span>
<span class="line"><span>Clustering node rabbit@rabbit81 with rabbit@rabbit80 ...</span></span>
<span class="line"><span>root@rabbit81:/# rabbitmqctl  start_app</span></span>
<span class="line"><span>Starting node rabbit@rabbit81 ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>root@rabbit81:/#  rabbitmqctl set_policy ha-all &quot;^&quot; &#39;{&quot;ha-mode&quot;:&quot;all&quot;, &quot;ha-sync-mode&quot;:&quot;automatic&quot;}&#39;</span></span>
<span class="line"><span>Setting policy &quot;ha-all&quot; for pattern &quot;^&quot; to &quot;{\\&quot;ha-mode\\&quot;:\\&quot;all\\&quot;}&quot; with priority &quot;0&quot; ...</span></span>
<span class="line"><span>root@rabbit81:/#</span></span></code></pre></div><h3 id="发消息" tabindex="-1">发消息 <a class="header-anchor" href="#发消息" aria-label="Permalink to &quot;发消息&quot;">​</a></h3><p><code>publish80.py</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>import pika</span></span>
<span class="line"><span></span></span>
<span class="line"><span>credentials = pika.PlainCredentials(&#39;xx&#39;, &#39;pwd&#39;)</span></span>
<span class="line"><span>parameters = pika.ConnectionParameters(&#39;node1&#39;,</span></span>
<span class="line"><span>                                       5672,</span></span>
<span class="line"><span>                                       &#39;/&#39;,</span></span>
<span class="line"><span>                                       credentials)</span></span>
<span class="line"><span>connection = pika.BlockingConnection(parameters)</span></span>
<span class="line"><span>channel = connection.channel()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>channel.queue_declare(queue=&#39;hello&#39;, durable=True, exclusive=False, auto_delete=False)</span></span>
<span class="line"><span>channel.basic_publish(exchange=&#39;&#39;,</span></span>
<span class="line"><span>                      routing_key=&#39;hello&#39;,</span></span>
<span class="line"><span>                      body=&#39;Hello World!&#39;)</span></span>
<span class="line"><span>print(&quot; [x] Sent &#39;Hello World!&#39;&quot;)</span></span>
<span class="line"><span>connection.close()</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> message_to_node1.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> message_to_node2.py</span></span></code></pre></div><h2 id="手动添加删除用户命令" tabindex="-1">手动添加删除用户命令 <a class="header-anchor" href="#手动添加删除用户命令" aria-label="Permalink to &quot;手动添加删除用户命令&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span># Disabling guest user</span></span>
<span class="line"><span>docker exec rabbit rabbitmqctl delete_user guest</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Admin user</span></span>
<span class="line"><span>docker exec rabbit rabbitmqctl add_user josuelima MyPassword999</span></span>
<span class="line"><span>docker exec rabbit rabbitmqctl set_user_tags josuelima administrator</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Application user</span></span>
<span class="line"><span>docker exec rabbit rabbitmqctl add_user ruby_app SuperPassword000</span></span>
<span class="line"><span>docker exec rabbit rabbitmqctl set_permissions -p / ruby_app &quot;.*&quot; &quot;.*&quot; &quot;.*&quot;</span></span></code></pre></div><h3 id="查看消息" tabindex="-1">查看消息 <a class="header-anchor" href="#查看消息" aria-label="Permalink to &quot;查看消息&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>root@rabbit80:/# rabbitmqctl list_queues</span></span>
<span class="line"><span>Listing queues ...</span></span>
<span class="line"><span>hello   2</span></span></code></pre></div><h3 id="关闭启动节点" tabindex="-1">关闭启动节点 <a class="header-anchor" href="#关闭启动节点" aria-label="Permalink to &quot;关闭启动节点&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>docker exec rabbit rabbitmqctl stop_app</span></span>
<span class="line"><span>docker exec rabbit rabbitmqctl start_app</span></span></code></pre></div><h3 id="determine-which-mirrors-are-synchronised-with-the-following-rabbitmqctl-invocation" tabindex="-1">determine which mirrors are synchronised with the following rabbitmqctl invocation <a class="header-anchor" href="#determine-which-mirrors-are-synchronised-with-the-following-rabbitmqctl-invocation" aria-label="Permalink to &quot;determine which mirrors are synchronised with the following rabbitmqctl invocation&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>rabbitmqctl list_queues name slave_pids synchronised_slave_pids</span></span></code></pre></div><h3 id="manually-synchronise-a-queue-with" tabindex="-1">manually synchronise a queue with <a class="header-anchor" href="#manually-synchronise-a-queue-with" aria-label="Permalink to &quot;manually synchronise a queue with&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>rabbitmqctl sync_queue name</span></span></code></pre></div><h3 id="cancel-synchronisation-with" tabindex="-1">cancel synchronisation with <a class="header-anchor" href="#cancel-synchronisation-with" aria-label="Permalink to &quot;cancel synchronisation with&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>rabbitmqctl cancel_sync_queue name</span></span></code></pre></div><h2 id="配置自动同步-对于大量消息-自动同步会卡住系统" tabindex="-1">配置自动同步（对于大量消息，自动同步会卡住系统） <a class="header-anchor" href="#配置自动同步-对于大量消息-自动同步会卡住系统" aria-label="Permalink to &quot;配置自动同步（对于大量消息，自动同步会卡住系统）&quot;">​</a></h2><ul><li>&quot;ha-sync-mode&quot;: &quot;automatic&quot; // default &#39;manual&#39;</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">rabbitmqctl</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> set_policy</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ha-two</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;^two\\.&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">   &#39;{&quot;ha-mode&quot;:&quot;exactly&quot;,&quot;ha-params&quot;:2,&quot;ha-sync-mode&quot;:&quot;automatic&quot;}&#39;</span></span></code></pre></div><p>如果不自动同步，一个节点挂掉重启之后需要手动同步列队。</p><p>不然会造成消息丢失。</p><p><img src="`+t+'" alt=""></p><p><img src="'+e+'" alt=""></p><hr><ul><li><a href="https://www.rabbitmq.com/ha.html#eager-synchronisation" target="_blank" rel="noreferrer">Configuring Synchronisation</a></li><li><a href="http://josuelima.github.io/docker/rabbitmq/cluster/2017/04/19/setting-up-a-rabbitmq-cluster-on-docker.html" target="_blank" rel="noreferrer">Setting up a RabbitMQ Cluster on Docker</a></li></ul>',31),r=[l];function o(h,c,d,b,k,u){return n(),a("div",null,r)}const q=s(p,[["render",o]]);export{m as __pageData,q as default};
