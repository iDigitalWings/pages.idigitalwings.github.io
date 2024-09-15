import{_ as a,a as i,af as t,o as n}from"./chunks/framework.C87LdZyP.js";const l="/assets/chronograf-home.D59UkntP.png",u=JSON.parse('{"title":"InfluxData: TICK","description":"","frontmatter":{"title":"InfluxData: TICK","date":"2017-07-07T00:00:00.000Z","tags":["influxdb"]},"headers":[],"relativePath":"posts/2017/07/2017-07-07-influxdata-tick.md","filePath":"posts/2017/07/2017-07-07-influxdata-tick.md","lastUpdated":1718193786000}'),e={name:"posts/2017/07/2017-07-07-influxdata-tick.md"};function p(h,s,k,d,r,o){return n(),i("div",null,s[0]||(s[0]=[t('<p>使用｀compose`运行TICK, 运行成功后打开chronograf的<a href="http://127.0.0.1:8888/" target="_blank" rel="noreferrer">界面</a></p><p><img src="'+l+`" alt=""></p><h2 id="创建数据库" tabindex="-1">创建数据库 <a class="header-anchor" href="#创建数据库" aria-label="Permalink to &quot;创建数据库&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>curl -XPOST &#39;http://127.0.0.1:8086/query&#39; --data-urlencode &quot;q=CREATE DATABASE mydb&quot;</span></span></code></pre></div><h2 id="插入数据" tabindex="-1">插入数据 <a class="header-anchor" href="#插入数据" aria-label="Permalink to &quot;插入数据&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>curl -XPOST &#39;http://127.0.0.1:8086/write?db=mydb&#39; \\</span></span>
<span class="line"><span>-d &#39;cpu,host=server01,region=uswest load=42 1434055562000000000&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>curl -XPOST &#39;http://127.0.0.1:8086/write?db=mydb&#39; \\</span></span>
<span class="line"><span>-d &#39;cpu,host=server02,region=uswest load=78 1434055562000000000&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>curl -XPOST &#39;http://127.0.0.1:8086/write?db=mydb&#39; \\</span></span>
<span class="line"><span>-d &#39;cpu,host=server03,region=useast load=15.4 1434055562000000000&#39;</span></span></code></pre></div><h2 id="查询数据" tabindex="-1">查询数据 <a class="header-anchor" href="#查询数据" aria-label="Permalink to &quot;查询数据&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>curl -G http://127.0.0.1:8086/query?pretty=true --data-urlencode &quot;db=mydb&quot; \\</span></span>
<span class="line"><span>--data-urlencode &quot;q=SELECT * FROM cpu WHERE host=&#39;server01&#39; AND time &lt; now() - 1d&quot;</span></span></code></pre></div><h2 id="analyze-the-data" tabindex="-1">Analyze the data <a class="header-anchor" href="#analyze-the-data" aria-label="Permalink to &quot;Analyze the data&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>curl -G http://127.0.0.1:8086/query?pretty=true --data-urlencode &quot;db=mydb&quot; \\</span></span>
<span class="line"><span>--data-urlencode &quot;q=SELECT mean(load) FROM cpu WHERE region=&#39;uswest&#39;&quot;</span></span></code></pre></div><h2 id="python-client" tabindex="-1">python client <a class="header-anchor" href="#python-client" aria-label="Permalink to &quot;python client&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> pip</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> influxdb</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> pip</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --upgrade</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> influxdb</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> pip</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> uninstall</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> influxdb</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">json_body </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">        &quot;measurement&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;cpu_load_short&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">        &quot;tags&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">            &quot;host&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;server01&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">            &quot;region&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;us-west&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">        &quot;time&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;2009-11-10T23:00:00Z&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">        &quot;fields&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">            &quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: random.randint(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">client </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> InfluxDBClient(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;localhost&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">8086</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;root&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;root&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;example&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">client.create_database(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;example&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">client.write_points(json_body)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> client.query(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;select value from cpu_load_short;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Result: </span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">{0}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.format(result))</span></span></code></pre></div><hr><p>Links:</p><ul><li><a href="https://github.com/influxdata/influxdb" target="_blank" rel="noreferrer">https://github.com/influxdata/influxdb</a></li><li><a href="https://github.com/influxdata/TICK-docker/blob/master/README.md" target="_blank" rel="noreferrer">https://github.com/influxdata/TICK-docker/blob/master/README.md</a></li><li><a href="https://docs.influxdata.com/influxdb/v1.2/introduction/getting_started/" target="_blank" rel="noreferrer">https://docs.influxdata.com/influxdb/v1.2/introduction/getting_started/</a></li><li><a href="https://github.com/influxdata/influxdb-python" target="_blank" rel="noreferrer">https://github.com/influxdata/influxdb-python</a></li></ul><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>`,18)]))}const g=a(e,[["render",p]]);export{u as __pageData,g as default};
