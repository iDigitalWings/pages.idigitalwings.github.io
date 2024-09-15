import{_ as a,a as i,af as n,o as e}from"./chunks/framework.C87LdZyP.js";const t="/assets/prometheus-alert.De1U-x1u.png",d=JSON.parse('{"title":"Prometheus AlertManager Email configuration","description":"","frontmatter":{"title":"Prometheus AlertManager Email configuration","date":"2017-06-26T00:00:00.000Z","tags":["prometheus","alert-manager"]},"headers":[],"relativePath":"posts/2017/06/2017-06-26-prometheus-alertmanager-email.md","filePath":"posts/2017/06/2017-06-26-prometheus-alertmanager-email.md","lastUpdated":1718193786000}'),l={name:"posts/2017/06/2017-06-26-prometheus-alertmanager-email.md"};function p(h,s,r,k,o,g){return e(),i("div",null,s[0]||(s[0]=[n(`<h2 id="docker-compose-yml" tabindex="-1">docker-compose.yml <a class="header-anchor" href="#docker-compose-yml" aria-label="Permalink to &quot;docker-compose.yml&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  prometheus</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">prom/prometheus:v1.5.2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">prometheus</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">./prometheus/:/etc/prometheus/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">prometheus_data:/prometheus</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    command</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;-config.file=/etc/prometheus/prometheus.yml&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;-storage.local.path=/prometheus&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;-alertmanager.url=http://alertmanager:9093&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    expose</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">9090</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">30020:9090</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    links</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">alertmanager:alertmanager</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    networks</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">back-tier</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  alertmanager</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">alert-manager</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">prom/alertmanager:v0.5.1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">9093:9093</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">./alertmanager/:/etc/alertmanager/</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    networks</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">back-tier</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    command</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;-config.file=/etc/alertmanager/config.yml&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;-storage.path=/alertmanager&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">SMTP_AUTH_USERNAME=xxx@xxx.com</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">SMTP_AUTH_PASSWORD=xxxxx</span></span></code></pre></div><h2 id="prometheus-config" tabindex="-1">prometheus config <a class="header-anchor" href="#prometheus-config" aria-label="Permalink to &quot;prometheus config&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># my global config</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">global</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  scrape_interval</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:     </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">15s</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> # By default, scrape targets every 15 seconds.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  evaluation_interval</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">15s</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> # By default, scrape targets every 15 seconds.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  # scrape_timeout is set to the global default (10s).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  # Attach these labels to any time series or alerts when communicating with</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  # external systems (federation, remote storage, Alertmanager).</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  external_labels</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">      monitor</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;my-project&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># Load and evaluate rules in this file every &#39;evaluation_interval&#39; seconds.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">rule_files</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;alert.rules&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  # - &quot;first.rules&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  # - &quot;second.rules&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># A scrape configuration containing exactly one endpoint to scrape:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># Here it&#39;s Prometheus itself.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">scrape_configs</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">job_name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;springboot0&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    scrape_interval</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">3s</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    scrape_timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">1s</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    metrics_path</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;/prometheus&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    static_configs</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">targets</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;192.168.95.49:7777&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">        labels</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          group</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;proj&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          node</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;xxx&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          proj</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;xxx&#39;</span></span></code></pre></div><h2 id="alert-rules" tabindex="-1">alert.rules <a class="header-anchor" href="#alert-rules" aria-label="Permalink to &quot;alert.rules&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>ALERT service_down</span></span>
<span class="line"><span>  IF up == 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ALERT high_load</span></span>
<span class="line"><span>  IF node_load1 &gt; 0.5</span></span>
<span class="line"><span>  ANNOTATIONS {</span></span>
<span class="line"><span>      summary = &quot;Instance {{ $labels.instance }} under high load&quot;,</span></span>
<span class="line"><span>      description = &quot;{{ $labels.instance }} of job {{ $labels.job }} is under high load.&quot;,</span></span>
<span class="line"><span>  }</span></span></code></pre></div><h2 id="alertmanager-config" tabindex="-1">alertmanager config <a class="header-anchor" href="#alertmanager-config" aria-label="Permalink to &quot;alertmanager config&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">global</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  # The smarthost and SMTP sender used for mail notifications.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  smtp_smarthost</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;smtp.xxx.com:994&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  smtp_from</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;xxx@xxx.com&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#  smtp_auth_username: awang@shuyi.com</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#  smtp_auth_password: Chengyi.1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">route</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  group_by</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">Alertname</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  # Send all notifications to me.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  receiver</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">email-me</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  group_wait</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">3s</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  # When the first notification was sent, wait &#39;group_interval&#39; to send a batch</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  # of new alerts that started firing for that group.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  group_interval</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">5s</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  # If an alert has successfully been sent, wait &#39;repeat_interval&#39; to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  # resend them.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  repeat_interval</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">10s</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  # A default receiver</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  receiver</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">email-me</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">receivers</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">email-me</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  email_configs</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">to</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">xxx@xxx.com.cn</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    from</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">xxx@xxx.com</span></span></code></pre></div><h2 id="prometheus" tabindex="-1">prometheus <a class="header-anchor" href="#prometheus" aria-label="Permalink to &quot;prometheus&quot;">​</a></h2><p><img src="`+t+`" alt=""></p><h2 id="alert-manager" tabindex="-1">alert manager <a class="header-anchor" href="#alert-manager" aria-label="Permalink to &quot;alert manager&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>alert-manager   | time=&quot;2017-06-27T05:15:41Z&quot; level=error msg=&quot;Error on notify: EOF&quot; source=&quot;notify.go:272&quot; </span></span>
<span class="line"><span>alert-manager   | time=&quot;2017-06-27T05:15:41Z&quot; level=error msg=&quot;Notify for 2 alerts failed: EOF&quot; source=&quot;dispatch.go:246&quot; </span></span>
<span class="line"><span>alert-manager   | time=&quot;2017-06-27T05:16:01Z&quot; level=error msg=&quot;Error on notify: EOF&quot; source=&quot;notify.go:272&quot; </span></span>
<span class="line"><span>alert-manager   | time=&quot;2017-06-27T05:16:01Z&quot; level=error msg=&quot;Notify for 2 alerts failed: EOF&quot; source=&quot;dispatch.go:246&quot; </span></span>
<span class="line"><span>alert-manager   | time=&quot;2017-06-27T05:16:21Z&quot; level=error msg=&quot;Error on notify: EOF&quot; source=&quot;notify.go:272&quot; </span></span>
<span class="line"><span>alert-manager   | time=&quot;2017-06-27T05:16:21Z&quot; level=error msg=&quot;Notify for 2 alerts failed: EOF&quot; source=&quot;dispatch.go:246&quot; </span></span>
<span class="line"><span>alert-manager   | time=&quot;2017-06-27T05:16:42Z&quot; level=error msg=&quot;Error on notify: EOF&quot; source=&quot;notify.go:272&quot; </span></span>
<span class="line"><span>alert-manager   | time=&quot;2017-06-27T05:16:42Z&quot; level=error msg=&quot;Notify for 2 alerts failed: EOF&quot; source=&quot;dispatch.go:246&quot; </span></span>
<span class="line"><span>alert-manager   | time=&quot;2017-06-27T05:17:02Z&quot; level=error msg=&quot;Error on notify: EOF&quot; source=&quot;notify.go:272&quot; </span></span>
<span class="line"><span>alert-manager   | time=&quot;2017-06-27T05:17:02Z&quot; level=error msg=&quot;Notify for 2 alerts failed: EOF&quot; source=&quot;dispatch.go:246&quot; </span></span>
<span class="line"><span>alert-manager   | time=&quot;2017-06-27T05:17:22Z&quot; level=error msg=&quot;Error on notify: EOF&quot; source=&quot;notify.go:272&quot; </span></span>
<span class="line"><span>alert-manager   | time=&quot;2017-06-27T05:17:22Z&quot; level=error msg=&quot;Notify for 2 alerts failed: EOF&quot; source=&quot;dispatch.go:246&quot; </span></span>
<span class="line"><span>alert-manager   | time=&quot;2017-06-27T05:17:42Z&quot; level=error msg=&quot;Error on notify: EOF&quot; source=&quot;notify.go:272&quot; </span></span>
<span class="line"><span>alert-manager   | time=&quot;2017-06-27T05:17:42Z&quot; level=error msg=&quot;Notify for 2 alerts failed: EOF&quot; source=&quot;dispatch.go:246&quot; </span></span>
<span class="line"><span>alert-manager   | time=&quot;2017-06-27T05:18:03Z&quot; level=error msg=&quot;Error on notify: EOF&quot; source=&quot;notify.go:272&quot; </span></span>
<span class="line"><span>alert-manager   | time=&quot;2017-06-27T05:18:03Z&quot; level=error msg=&quot;Notify for 2 alerts failed: EOF&quot; source=&quot;dispatch.go:246&quot; </span></span>
<span class="line"><span>alert-manager   | time=&quot;2017-06-27T05:18:23Z&quot; level=error msg=&quot;Error on notify: EOF&quot; source=&quot;notify.go:272&quot; </span></span>
<span class="line"><span>alert-manager   | time=&quot;2017-06-27T05:18:23Z&quot; level=error msg=&quot;Notify for 2 alerts failed: EOF&quot; source=&quot;dispatch.go:246&quot; </span></span>
<span class="line"><span>alert-manager   | time=&quot;2017-06-27T05:18:43Z&quot; level=error msg=&quot;Error on notify: EOF&quot; source=&quot;notify.go:272&quot; </span></span>
<span class="line"><span>alert-manager   | time=&quot;2017-06-27T05:18:43Z&quot; level=error msg=&quot;Notify for 2 alerts failed: EOF&quot; source=&quot;dispatch.go:246&quot;</span></span></code></pre></div><h2 id="相关链接" tabindex="-1">相关链接 <a class="header-anchor" href="#相关链接" aria-label="Permalink to &quot;相关链接&quot;">​</a></h2><p><a href="https://github.com/prometheus/alertmanager/issues/766" target="_blank" rel="noreferrer">https://github.com/prometheus/alertmanager/issues/766</a><a href="https://github.com/prometheus/alertmanager/issues/705" target="_blank" rel="noreferrer">https://github.com/prometheus/alertmanager/issues/705</a><a href="https://github.com/prometheus/alertmanager/issues/275" target="_blank" rel="noreferrer">https://github.com/prometheus/alertmanager/issues/275</a><a href="https://github.com/prometheus/alertmanager/pull/266" target="_blank" rel="noreferrer">https://github.com/prometheus/alertmanager/pull/266</a><a href="https://github.com/prometheus/alertmanager/issues/327" target="_blank" rel="noreferrer">https://github.com/prometheus/alertmanager/issues/327</a><a href="https://github.com/prometheus/alertmanager/pull/308" target="_blank" rel="noreferrer">https://github.com/prometheus/alertmanager/pull/308</a><a href="https://prometheus.io/docs/alerting/configuration/#email-receiver-" target="_blank" rel="noreferrer">https://prometheus.io/docs/alerting/configuration/#email-receiver-</a><a href="https://www.robustperception.io/sending-email-with-the-alertmanager-via-gmail/" target="_blank" rel="noreferrer">https://www.robustperception.io/sending-email-with-the-alertmanager-via-gmail/</a></p><h2 id="exmail和163mail的smtp配置" tabindex="-1">exmail和163mail的smtp配置 <a class="header-anchor" href="#exmail和163mail的smtp配置" aria-label="Permalink to &quot;exmail和163mail的smtp配置&quot;">​</a></h2><h3 id="exmail" tabindex="-1">exmail <a class="header-anchor" href="#exmail" aria-label="Permalink to &quot;exmail&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>POP3/SMTP协议</span></span>
<span class="line"><span>接收邮件服务器：pop.exmail.qq.com ，使用SSL，端口号995</span></span>
<span class="line"><span>发送邮件服务器：smtp.exmail.qq.com ，使用SSL，端口号465</span></span>
<span class="line"><span>海外用户可使用以下服务器</span></span>
<span class="line"><span>接收邮件服务器：hwpop.exmail.qq.com ，使用SSL，端口号995</span></span>
<span class="line"><span>发送邮件服务器：hwsmtp.exmail.qq.com ，使用SSL，端口号465</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>IMAP协议</span></span>
<span class="line"><span>接收邮件服务器：imap.exmail.qq.com  ，使用SSL，端口号993</span></span>
<span class="line"><span>发送邮件服务器：smtp.exmail.qq.com ，使用SSL，端口号465</span></span>
<span class="line"><span>海外用户可使用以下服务器</span></span>
<span class="line"><span>接收邮件服务器：hwimap.exmail.qq.com ，使用SSL，端口号993</span></span>
<span class="line"><span>发送邮件服务器：hwsmtp.exmail.qq.com ，使用SSL，端口号465</span></span></code></pre></div><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>`,19)]))}const m=a(l,[["render",p]]);export{d as __pageData,m as default};
