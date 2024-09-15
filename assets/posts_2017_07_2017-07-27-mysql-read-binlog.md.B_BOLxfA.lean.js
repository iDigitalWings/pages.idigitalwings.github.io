import{_ as a,a as n,af as e,o as p}from"./chunks/framework.C87LdZyP.js";const g=JSON.parse('{"title":"MySql read binlog","description":"","frontmatter":{"title":"MySql read binlog","date":"2017-07-27T00:00:00.000Z","tags":["mysql","binlog"],"category":["DevOps"]},"headers":[],"relativePath":"posts/2017/07/2017-07-27-mysql-read-binlog.md","filePath":"posts/2017/07/2017-07-27-mysql-read-binlog.md","lastUpdated":1718193786000}'),t={name:"posts/2017/07/2017-07-27-mysql-read-binlog.md"};function l(i,s,o,d,r,c){return p(),n("div",null,s[0]||(s[0]=[e(`<p>拷贝或者下载binlog文件，比如　<code>mysql-bin00000111</code></p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">mysqlbinlog  --base64-output=decode-rows -v  mysql-bin00000111 &gt; mysql-bin00000111.sql</span></span></code></pre></div><p>打开SQL文件,即可看到了类似内容:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span># at 489593</span></span>
<span class="line"><span>#170724 20:42:00 server id 1526520475  end_log_pos 489656 CRC32 0x0f351a29 	Query	thread_id=638237870	exec_time=0	error_code=0</span></span>
<span class="line"><span>SET TIMESTAMP=1500928920/*!*/;</span></span>
<span class="line"><span>BEGIN</span></span>
<span class="line"><span>/*!*/;</span></span>
<span class="line"><span># at 489656</span></span>
<span class="line"><span>#170724 20:42:00 server id 1526520475  end_log_pos 489780 CRC32 0xa35118f6 	Table_map: \`wany\`.\`shipment_history\` mapped to number 536</span></span>
<span class="line"><span># at 489780</span></span>
<span class="line"><span>#170724 20:42:00 server id 1526520475  end_log_pos 489912 CRC32 0x271fe008 	Write_rows: table id 536 flags: STMT_END_F</span></span>
<span class="line"><span>### INSERT INTO \`wany\`.\`shipment_history\`</span></span>
<span class="line"><span>### SET</span></span>
<span class="line"><span>###   @1=49611</span></span>
<span class="line"><span>###   @2=270149</span></span>
<span class="line"><span>###   @3=&#39;3707253620043&#39;</span></span>
<span class="line"><span>...</span></span></code></pre></div><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>`,6)]))}const b=a(t,[["render",l]]);export{g as __pageData,b as default};
