import{_ as s,a as i,o as a,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const g=JSON.parse('{"title":"MySql JDBC batch operation performance","description":"","frontmatter":{"title":"MySql JDBC batch operation performance","date":"2017-07-24T00:00:00.000Z","tags":["mysql","jdbc"]},"headers":[],"relativePath":"posts/2017/07/2017-07-24-jdbc-batch-operation-performance.md","filePath":"posts/2017/07/2017-07-24-jdbc-batch-operation-performance.md","lastUpdated":1718193786000}'),t={name:"posts/2017/07/2017-07-24-jdbc-batch-operation-performance.md"},p=n(`<p>对一个50多万行记录的表中更新数据,每次读取1000,根据主键id进行更新, 每次对1000条数据进行更新,测试平局消耗时间大概在18秒.</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">0000	 	 17363 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">1000	 	 16465 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">2000	 	 18326 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">3000	 	 17717 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">4000	 	 16415 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">5000	 	 18335 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">6000	 	 16864 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">7000	 	 17836 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">8000	 	 17948 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">9000	 	 17993 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">10000	 	 16410 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">11000	 	 18368 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">12000	 	 18536 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">13000	 	 19096 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">14000	 	 18106 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">15000	 	 18973 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">16000	 	 18720 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">17000	 	 22946 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">18000	 	 20874 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">19000	 	 21129 finish</span></span></code></pre></div><p>jdbc连接增加参数<code>useServerPrepStmts=false&amp;rewriteBatchedStatements=true</code>,</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">1000	 	 448 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">2000	 	 412 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">3000	 	 411 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">4000	 	 402 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">5000	 	 401 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">6000	 	 408 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">7000	 	 395 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">8000	 	 401 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">9000	 	 391 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">10000	 	 917 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">11000	 	 1427 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">12000	 	 1194 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">13000	 	 1256 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">14000	 	 1224 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">15000	 	 1728 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">16000	 	 1103 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">17000	 	 1388 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">18000	 	 1248 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">19000	 	 1220 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">20000	 	 1297 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">21000	 	 1187 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">22000	 	 1309 finish</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">23000	 	 1259 finish</span></span></code></pre></div><p>1000条数据平均1.2秒,对于更新过的数据耗时400毫秒.</p><p><code>useServerPrepStmts</code>默认已经是false,如果改成true,可能也没有太大影响.</p><p><code>rewriteBatchedStatements</code>设置为true的时候,jdbc发送到mysql server的sql语句会 由:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">INSERT INTO</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> X </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">VALUES</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (A1,B1,C1)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">INSERT INTO</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> X </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">VALUES</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (A2,B2,C2)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">INSERT INTO</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> X </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">VALUES</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (An,Bn,Cn)</span></span></code></pre></div><p>变成:</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">INSERT INTO</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> X </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">VALUES</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (A1,B1,C1),(A2,B2,C2),...,(An,Bn,Cn)</span></span></code></pre></div><p>可以通过 <code>SET global general_log = 1</code> 来监控到这些sql.</p><hr><p>Links:</p><ul><li><a href="https://stackoverflow.com/questions/2993251/jdbc-batch-insert-performance" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/2993251/jdbc-batch-insert-performance</a></li></ul><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>`,16),l=[p];function e(h,k,r,d,c,A){return a(),i("div",null,l)}const y=s(t,[["render",e]]);export{g as __pageData,y as default};
