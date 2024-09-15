import{_ as s,a as n,af as e,o as p}from"./chunks/framework.C87LdZyP.js";const v=JSON.parse('{"title":"Multiple Java Environments on MacOS","description":"","frontmatter":{"title":"Multiple Java Environments on MacOS","date":"2017-11-28T00:00:00.000Z","tags":["java","mac"]},"headers":[],"relativePath":"posts/2017/11/2017-11-28-1-mac-java-versions.md","filePath":"posts/2017/11/2017-11-28-1-mac-java-versions.md","lastUpdated":1718173059000}'),i={name:"posts/2017/11/2017-11-28-1-mac-java-versions.md"};function l(t,a,c,o,r,d){return p(),n("div",null,a[0]||(a[0]=[e(`<p>命令行下输入<code>java -version</code>如果没有安装就会提示去Oracle的网站下载安装。</p><p>安装后 <code>which java</code> 可以看到 <code>/usr/bin/java</code> 命令已经存在，</p><p>实际的安装路径，</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># JDK 1.6：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">/System/Library/Java/JavaVirtualMachines/1.6.0.jdk</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># JDK 1.7&amp;1.8:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">/Library/Java/JavaVirtualMachines/jdk1.7.0_45.jdk</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">/Library/Java/JavaVirtualMachines/jdk1.8.0_25.jdk</span></span></code></pre></div><p>可以修改<code>~/.bash_profile</code>配置环境变量，然后<code>source ~/.bash_profile</code>生效。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span># Mac默认 JDK 6（Mac默认自带了一个jdk6版本）  </span></span>
<span class="line"><span>export JAVA_6_HOME=\`/usr/libexec/java_home -v 1.6\`  </span></span>
<span class="line"><span># 设置 JDK 7  </span></span>
<span class="line"><span>export JAVA_7_HOME=\`/usr/libexec/java_home -v 1.7\`  </span></span>
<span class="line"><span># 设置 JDK 8  </span></span>
<span class="line"><span>export JAVA_8_HOME=\`/usr/libexec/java_home -v 1.8\`  </span></span>
<span class="line"><span># 设置 JDK 9  </span></span>
<span class="line"><span>export JAVA_8_HOME=\`/usr/libexec/java_home -v 1.9\`  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>#默认JDK 6  </span></span>
<span class="line"><span>export JAVA_HOME=$JAVA_8_HOME  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>#alias命令动态切换JDK版本  </span></span>
<span class="line"><span>alias jdk6=&quot;export JAVA_HOME=$JAVA_6_HOME&quot;  </span></span>
<span class="line"><span>alias jdk7=&quot;export JAVA_HOME=$JAVA_7_HOME&quot;  </span></span>
<span class="line"><span>alias jdk8=&quot;export JAVA_HOME=$JAVA_8_HOME&quot;</span></span></code></pre></div><hr><ul><li><a href="http://blog.csdn.net/tianxiawuzhei/article/details/48263789" target="_blank" rel="noreferrer">http://blog.csdn.net/tianxiawuzhei/article/details/48263789</a></li></ul>`,8)]))}const _=s(i,[["render",l]]);export{v as __pageData,_ as default};
