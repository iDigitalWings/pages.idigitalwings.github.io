import{_ as i,a,af as n,o as e}from"./chunks/framework.C87LdZyP.js";const c=JSON.parse('{"title":"Kylin - 1","description":"","frontmatter":{"title":"Kylin - 1","date":"2020-04-23T11:31:32.491Z","category":["大数据"],"tag":["kylin"]},"headers":[],"relativePath":"posts/2020/05/20200502-kylin-1.md","filePath":"posts/2020/05/20200502-kylin-1.md","lastUpdated":1718173059000}'),h={name:"posts/2020/05/20200502-kylin-1.md"};function p(l,s,t,k,r,d){return e(),a("div",null,s[0]||(s[0]=[n(`<h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>使用容器安装，并增加 AWS S3 的相关 jar 包：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;2&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  kylin</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">apachekylin/apache-kylin-standalone:3.0.1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">kylin</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    hostname</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">kylin</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">7070:7070</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> # kylin</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">8088:8088</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> # yarn ResourceManager</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">50070:50070</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> # hdfs NameNode</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">10000:10000</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> # hive thrift server</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">10002:10002</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> # hive thrift web ui</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">8032:8032</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">8042:8042</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">16010:16010</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> # hbase</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">60010:60010</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> # hbase</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">HIVE_SERVER2_THRIFT_BIND_HOST:0.0.0.0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">AWS_ACCESS_KEY_ID=AKIAOLRE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">AWS_SECRET_ACCESS_KEY=e7ciK6eefQs8tBzJHx</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">./hive-site.xml:/home/admin/apache-hive-1.2.1-bin/conf/hive-site.xml</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">./hadoop-aws-2.7.0.jar:/home/admin/hadoop-2.7.0/share/hadoop/common/hadoop-aws-2.7.0.jar</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">./aws-java-sdk-core-1.11.759.jar:/home/admin/hadoop-2.7.0/share/hadoop/common/aws-java-sdk-core-1.11.759.jar</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">./aws-java-sdk-s3-1.11.759.jar:/home/admin/hadoop-2.7.0/share/hadoop/common/aws-java-sdk-s3-1.11.759.jar</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">./hadoop-client-2.7.0.jar:/home/admin/hadoop-2.7.0/share/hadoop/common/hadoop-client-2.7.0.jar</span></span></code></pre></div><h2 id="hive-thrift-web-ui" tabindex="-1">Hive Thrift Web UI <a class="header-anchor" href="#hive-thrift-web-ui" aria-label="Permalink to &quot;Hive Thrift Web UI&quot;">​</a></h2><p>启动 <a href="https://cwiki.apache.org/confluence/display/Hive/GettingStarted#GettingStarted-RunningHive" target="_blank" rel="noreferrer">HiveServer2</a></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">/home/admin/apache-hive-1.2.1-bin/hiveserver2</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>Thrift version configured by property thrift_version might be too high. </span></span>
<span class="line"><span>Request failed with &quot;Required field &#39;client_protocol&#39; is unset! </span></span>
<span class="line"><span>Struct:TOpenSessionReq(client_protocol:null, username:hue, </span></span>
<span class="line"><span>configuration:{hive.server2.proxy.user=admin})&quot; (code OPEN_SESSION): None</span></span></code></pre></div>`,7)]))}const g=i(h,[["render",p]]);export{c as __pageData,g as default};
