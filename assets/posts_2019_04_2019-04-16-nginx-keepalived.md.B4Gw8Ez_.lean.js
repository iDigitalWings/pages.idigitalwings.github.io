import{_ as i,a,af as n,o as p}from"./chunks/framework.C87LdZyP.js";const g=JSON.parse('{"title":"Nginx Keepalived VIP","description":"","frontmatter":{"title":"Nginx Keepalived VIP","date":"2019-04-16T00:00:00.000Z","tags":["nginx","keepalived","vip"]},"headers":[],"relativePath":"posts/2019/04/2019-04-16-nginx-keepalived.md","filePath":"posts/2019/04/2019-04-16-nginx-keepalived.md","lastUpdated":1718187682000}'),h={name:"posts/2019/04/2019-04-16-nginx-keepalived.md"};function l(k,s,t,e,F,d){return p(),a("div",null,s[0]||(s[0]=[n(`<p><code>/etc/keepalived/keepalived.conf</code></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> Configuration</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> File</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> keepalived</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">global_defs</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   notification_email</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">     root@localhost</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">   }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   notification_email_from</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> kaadmin@localhost</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   smtp_server</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 127.0.0.1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   smtp_connect_timeout</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 30</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   router_id</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> LVS_DEVEL</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   vrrp_skip_check_adv_addr</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   vrrp_garp_interval</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   vrrp_gna_interval</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">vrrp_script</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> chk_nginx</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> {</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    script</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;/etc/keepalived/nginx_check.sh&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    interval</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    weight</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -20</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">} </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">  vrrp_instance</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> VI_1</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    state</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> BACKUP</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    interface</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ens160</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    virtual_router_id</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 55</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    priority</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 99</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    advert_int</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    authentication</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">        auth_type</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> PASS</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">        auth_pass</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1111</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    virtual_ipaddress</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">        10.250.62.51</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    track_script</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> {</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">        chk_nginx</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p><code>/etc/keepalived/nginx_check.sh</code></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#!/bin/bash  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">A</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">ps</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -C</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> nginx </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">-no-header</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">wc</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -l</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">\`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [ $A </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">-eq</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> ];</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">/home/shuyi/app/nginx/sbin/nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">sleep</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [ </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">ps</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -C</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> nginx </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">--no-header</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">wc</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -l</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">\`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> -eq</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> ];</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    killall</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> keepalived</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">fi</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">fi</span></span></code></pre></div>`,4)]))}const C=i(h,[["render",l]]);export{g as __pageData,C as default};
