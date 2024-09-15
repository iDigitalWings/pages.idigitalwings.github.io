import{_ as s,a as t,af as a,o}from"./chunks/framework.C87LdZyP.js";const u=JSON.parse('{"title":"Linux Process uptime","description":"","frontmatter":{"title":"Linux Process uptime","date":"2017-11-15T00:00:00.000Z","tags":["linux","uptime"]},"headers":[],"relativePath":"posts/2017/11/2017-11-15-2-linux-process-uptime.md","filePath":"posts/2017/11/2017-11-15-2-linux-process-uptime.md","lastUpdated":1718173059000}'),i={name:"posts/2017/11/2017-11-15-2-linux-process-uptime.md"};function n(p,e,d,c,l,r){return o(),t("div",null,e[0]||(e[0]=[a('<p>As &quot;uptime&quot; has several meanings, here is a useful command.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>ps -eo pid,comm,lstart,etime,time,args</span></span></code></pre></div><p>This command lists all processes with several different time-related columns. It has the following columns:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>PID COMMAND                          STARTED     ELAPSED     TIME COMMAND</span></span></code></pre></div><p><code>PID</code> = Process ID first <code>COMMAND</code> = only the command name without options and without arguments <code>STARTED</code> = the absolute time the process was started <code>ELAPSED</code> = elapsed time since the process was started (wall clock time), format [[dd-]hh:]mm:ss TIME = cumulative CPU time, &quot;[dd-]hh:mm:ss&quot; format second <code>COMMAND</code> = again the command, this time with all its provided options and arguments</p><ul><li><a href="https://superuser.com/questions/380520/how-to-find-uptime-of-a-linux-process" target="_blank" rel="noreferrer">How to find uptime of a linux process</a></li></ul>',6)]))}const h=s(i,[["render",n]]);export{u as __pageData,h as default};
