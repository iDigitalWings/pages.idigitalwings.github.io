import{_ as i,a,af as h,o as n}from"./chunks/framework.C87LdZyP.js";const A=JSON.parse('{"title":"Mysql backup database","description":"","frontmatter":{"title":"Mysql backup database","date":"2017-07-12T00:00:00.000Z","tags":["mysql"]},"headers":[],"relativePath":"posts/2017/07/2017-07-12-mysql-export-import.md","filePath":"posts/2017/07/2017-07-12-mysql-export-import.md","lastUpdated":1718193786000}'),k={name:"posts/2017/07/2017-07-12-mysql-export-import.md"};function t(l,s,p,e,d,r){return n(),a("div",null,s[0]||(s[0]=[h(`<div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">IP</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">xxx.xxx.xxx.xxx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">PORT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">3016</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">USER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">xxx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">PASSWORD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">xxx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">DIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">xwms_2_5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">TARGET_DB</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">xwms_2_5</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ~/sqldumps/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$DIR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">date</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> +&quot;%Y%m%d_%H%M%S&quot;\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">DATABASE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$TARGET_DB$NAME</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># create database yourdb DEFAULT CHARACTER SET gbk COLLATE gbk_chinese_ci</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;CREATE DATABASE xoms_sq_beta_\${</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">NAME</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">}  DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ~/sqldumps/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/create-database.sql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">mysql</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -h</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 127.0.0.1</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -uroot</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$PASSWORD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ~/sqldumps/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/create-database.sql</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">mysqldump</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -h</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> $IP </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">-P</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$PORT</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -u</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> $USER </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">-p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$PASSWORD</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> $TARGET_DB </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ~/sqldumps/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$DATABASE</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">.sql</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">mysql</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> root</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$PASSWORD</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -h</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 127.0.0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> $DATABASE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ~/sqldumps/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$DIR</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$DATABASE</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">.sql</span></span></code></pre></div><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>`,3)]))}const y=i(k,[["render",t]]);export{A as __pageData,y as default};
