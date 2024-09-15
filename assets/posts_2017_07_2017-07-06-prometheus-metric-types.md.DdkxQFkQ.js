import{_ as i,a,af as n,o as t}from"./chunks/framework.C87LdZyP.js";const h="/assets/count-with-labels.Cgpy5_U2.png",o=JSON.parse('{"title":"Prometheus: Metric Types","description":"","frontmatter":{"title":"Prometheus: Metric Types","date":"2017-07-06T00:00:00.000Z","tags":["prometheus"]},"headers":[],"relativePath":"posts/2017/07/2017-07-06-prometheus-metric-types.md","filePath":"posts/2017/07/2017-07-06-prometheus-metric-types.md","lastUpdated":1718193786000}'),l={name:"posts/2017/07/2017-07-06-prometheus-metric-types.md"};function e(p,s,k,r,d,g){return t(),a("div",null,s[0]||(s[0]=[n(`<h2 id="counter" tabindex="-1">Counter <a class="header-anchor" href="#counter" aria-label="Permalink to &quot;Counter&quot;">​</a></h2><ul><li>Counter 用于累计值，例如 记录 请求次数、任务完成数、错误发生次数。</li><li>一直增加，不会减少。</li><li>重启进程后，会被重置</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">http_response_total</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">{method=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">&quot;GET&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">,endpoint</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">&quot;/api/tracks&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">}</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 100</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">http_response_total</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">{method=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">&quot;GET&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">,endpoint</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">&quot;/api/tracks&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">}</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 100</span></span></code></pre></div><h2 id="gauge" tabindex="-1">Gauge <a class="header-anchor" href="#gauge" aria-label="Permalink to &quot;Gauge&quot;">​</a></h2><ul><li>Gauge 常规数值，例如 温度变化、内存使用变化。</li><li>可变大，可变小。</li><li>重启进程后，会被重置</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">memory_usage_bytes</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">{host=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">&quot;master-01&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">}</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 100</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">memory_usage_bytes</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">{host=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">&quot;master-01&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">}</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 30</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">memory_usage_bytes</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">{host=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">&quot;master-01&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">}</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 50</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">memory_usage_bytes</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">{host=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">&quot;master-01&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">}</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 80</span></span></code></pre></div><h2 id="histogram" tabindex="-1">Histogram <a class="header-anchor" href="#histogram" aria-label="Permalink to &quot;Histogram&quot;">​</a></h2><ul><li>Histogram 可以理解为柱状图的意思，常用于跟踪事件发生的规模， 例如：请求耗时、响应大小。它特别之处是可以对记录的内容进行分组， 提供 count 和 sum 全部值的功能。</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{小于10=5次，小于20=1次，小于30=2次}，count=7次，sum=7次的求和值</span></span></code></pre></div><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><ul><li>Summary和Histogram十分相似，常用于跟踪事件发生的规模，例如：请求耗时、响应大小。同样提供 count 和 sum 全部值的功能。</li><li>例如：count=7次，sum=7次的值求值</li><li>它提供一个quantiles的功能，可以按%比划分跟踪的结果。例如：quantile取值0.95，表示取采样值里面的95%数据</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>To pick between counter and gauge, there is a simple rule of thumb: </span></span>
<span class="line"><span>if the value can go down, it is a gauge.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Counters can only go up (and reset, such as when a process restarts). </span></span>
<span class="line"><span>They are useful for accumulating the number of events, </span></span>
<span class="line"><span>or the amount of something at each event. For example, </span></span>
<span class="line"><span>the total number of HTTP requests, </span></span>
<span class="line"><span>or the total number of bytes sent in HTTP requests. </span></span>
<span class="line"><span>Raw counters are rarely useful. Use the rate() function </span></span>
<span class="line"><span>to get the per-second rate at which they are increasing.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Gauges can be set, go up, and go down. </span></span>
<span class="line"><span>They are useful for snapshots of state, </span></span>
<span class="line"><span>such as in-progress requests, </span></span>
<span class="line"><span>free/total memory, or temperature. </span></span>
<span class="line"><span>You should never take a rate() of a gauge.</span></span></code></pre></div><h2 id="python-client-demo" tabindex="-1">Python Client demo <a class="header-anchor" href="#python-client-demo" aria-label="Permalink to &quot;Python Client demo&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> time</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> schedule</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> prometheus_client </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> CollectorRegistry, push_to_gateway</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> prometheus_client </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Counter</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> prometheus_client </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Gauge</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> prometheus_client </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Histogram</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> prometheus_client </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Summary</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">registry </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> CollectorRegistry()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Counter(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;my_req_failures_total&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Description of counter&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, [</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;method&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;endpoint&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">], </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">registry</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">registry)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">g </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Gauge(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;my_inprogress_requests&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Description of gauge&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">registry</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">registry)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">h </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Histogram(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;my_request_latency_seconds_h&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Description of histogram&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">registry</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">registry)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">s </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Summary(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;my_request_latency_seconds_s&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Description of summary&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">registry</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">registry)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> test_counter</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">():</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    c.labels(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;get&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">).inc(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    c.labels(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;post&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;/submit&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">).inc(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    # c.labels(method=&#39;get&#39;, endpoint=&#39;/&#39;).inc()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    # c.labels(method=&#39;post&#39;, endpoint=&#39;/submit&#39;).inc()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> test_counter_without_labels</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">():</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Counter(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;my_req_failures_total&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Description of counter&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">registry</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">registry)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    c.inc()  </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># Increment by 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    c.inc(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1.6</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># Increment by given value</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> test_gauge</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">():</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    g.inc()  </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># Increment by 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    g.dec(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># Decrement by given value</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    g.set(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">4.2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># Set to a given value</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> test_summary</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">():</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    s.observe(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">4.7</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># Observe 4.7 (seconds in this case)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> test_histogram</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">():</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    h.observe(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">4.7</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># Observe 4.7 (seconds in this case)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> update</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">():</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    test_counter()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    test_gauge()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    test_histogram()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    test_summary()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> push_guage</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">():</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    update()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    push_to_gateway(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;localhost:9091&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">job</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;my_job&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">registry</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">registry)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(time.time())</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">if</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> __name__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;__main__&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    schedule.every(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">).seconds.do(push_guage)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    while</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> True</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        schedule.run_pending()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        time.sleep(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div><p><img src="`+h+'" alt=""></p><hr><p>Links:</p><ul><li><a href="https://prometheus.io/docs/concepts/metric_types/" target="_blank" rel="noreferrer">docs</a></li><li><a href="https://prometheus.io/docs/practices/instrumentation/#counter-vs.-gauge,-summary-vs.-histogram" target="_blank" rel="noreferrer">比较</a></li><li><a href="http://www.cnblogs.com/vovlie/p/Prometheus_CONCEPTS.html" target="_blank" rel="noreferrer">cnblogs</a></li></ul><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>',20)]))}const c=i(l,[["render",e]]);export{o as __pageData,c as default};
