import{_ as s,a,o as i,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const g=JSON.parse('{"title":"Nginx Upstream","description":"","frontmatter":{"title":"Nginx Upstream","date":"2017-11-08T00:00:00.000Z","tags":["nginx"],"category":["DevOps"]},"headers":[],"relativePath":"posts/2017/11/2017-11-08-nginx-upstream.md","filePath":"posts/2017/11/2017-11-08-nginx-upstream.md","lastUpdated":1718173059000}'),p={name:"posts/2017/11/2017-11-08-nginx-upstream.md"},l=n(`<div class="language-perl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">perl</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">user  root;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">worker_processes  1;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">events {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  worker_connections  1024;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">http {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  include mime.types;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  default_type  application/octet-stream;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  include proxy.conf;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  sendfile on;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  keepalive_timeout 65;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  upstream xoms {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    server localhost:7001;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    server localhost:7002;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  server {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    listen</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">       80;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    server_name  localhost;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    root  /app/nginx/webapps/dist/v2.4;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    location / {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      proxy_pass http://xoms;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      proxy_set_header Host                $host;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      proxy_set_header X-Real-IP           $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      proxy_set_header X-Forwarded-For     $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    location ~ </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/js/oms/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      proxy_pass http://xoms;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    location ~ </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/css/oms/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      proxy_pass http://xoms;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    location ~ </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/images/prod-name.png {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">      proxy_pass http://</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">xoms</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    location ~ .*\\.(gif|jpg|jpeg|png|bmp|swf|js|json|css|woff|woff2|ttf|html|coffee|</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|mp3|wav)$ {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      expires      0d;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    location ~ .*$ {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      proxy_set_header Host $host:7101;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      proxy_set_header X-Real-IP           $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      proxy_set_header X-Forwarded-For $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      proxy_pass http://xoms;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    location ~ ^/(WEB-INF)/ {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      deny all;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    location = /50x.html {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      root   html;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div>`,1),e=[l];function t(h,k,r,d,A,o){return i(),a("div",null,e)}const y=s(p,[["render",t]]);export{g as __pageData,y as default};
