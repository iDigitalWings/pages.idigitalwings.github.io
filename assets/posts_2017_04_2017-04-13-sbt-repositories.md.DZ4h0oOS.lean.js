import{_ as a,a as n,af as e,o as i}from"./chunks/framework.C87LdZyP.js";const d=JSON.parse('{"title":"Sbt Repositories","description":"Docker 2017","frontmatter":{"title":"Sbt Repositories","date":"2017-04-13T00:00:00.000Z","img":"docker-jekyll.jpg","description":"Docker 2017","category":["Scala"],"tags":["container","docker","swarm","kubernetes","mesos"]},"headers":[],"relativePath":"posts/2017/04/2017-04-13-sbt-repositories.md","filePath":"posts/2017/04/2017-04-13-sbt-repositories.md","lastUpdated":1718193786000}'),t={name:"posts/2017/04/2017-04-13-sbt-repositories.md"};function p(l,s,o,r,c,h){return i(),n("div",null,s[0]||(s[0]=[e(`<p>为Sbt更改仓库配置：</p><p>配置文件： <code>～/.sbt/repositories</code>，如果没有则创建一个，内容如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>[repositories]</span></span>
<span class="line"><span>local</span></span>
<span class="line"><span>osc: http://maven.oschina.net/content/groups/public/</span></span>
<span class="line"><span>typesafe: http://repo.typesafe.com/typesafe/ivy-releases/, [organization]/[module]/(scala_[scalaVersion]/)(sbt_[sbtVersion]/)[revision]/[type]s/[artifact](-[classifier]).[ext], bootOnly</span></span>
<span class="line"><span>sonatype-oss-releases</span></span>
<span class="line"><span>maven-central</span></span>
<span class="line"><span>sonatype-oss-snapshots</span></span></code></pre></div><p>然而并不管用。</p><p>参考<a href="http://www.ituring.com.cn/article/132055" target="_blank" rel="noreferrer">http://www.ituring.com.cn/article/132055</a></p><blockquote><p>最后发现文档中的配置文件是在<code>sbt\\0.13\\bin\\sbt-launch.jar</code>中的<code>\\sbt\\sbt.boot.properties</code>中，修改后内容如下：</p></blockquote><p>文档地址： <a href="http://www.scala-sbt.org/0.13/docs/Launcher-Configuration.html" target="_blank" rel="noreferrer">http://www.scala-sbt.org/0.13/docs/Launcher-Configuration.html</a></p><div class="language-properties vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">properties</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">[scala]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  version: \${sbt.scala.version-auto}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">[app]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  org: \${sbt.organization-org.scala-sbt}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  name: sbt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  version: \${sbt.version-read(sbt.version)[0.13.7]}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  class: \${sbt.main.class-sbt.xMain}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  components: xsbti,extra</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  cross-versioned: \${sbt.cross.versioned-false}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  resources: \${sbt.extraClasspath-}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">[repositories]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  local</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  shuyi: http://111.11.11.11:30001/nexus/content/groups/public/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  oschina: http://maven.oschina.net/content/groups/public/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  typesafe-ivy-releases: https://repo.typesafe.com/typesafe/ivy-releases/, [organization]/[module]/[revision]/[type]s/[artifact](-[classifier]).[ext], bootOnly</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  maven-central</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  sbt-plugins-repo: http://repo.scala-sbt.org/scalasbt/sbt-plugin-releases/, [organization]/[module]/(scala_[scalaVersion]/)(sbt_[sbtVersion]/)[revision]/[type]s/[artifact](-[classifier]).[ext]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  play: http://private-repo.typesafe.com/typesafe/maven-releases/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  sonatype-snapshots: https://oss.sonatype.org/content/repositories/snapshots</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">[boot]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  directory: \${sbt.boot.directory-\${sbt.global.base-\${user.home}/.sbt}/boot/}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">[ivy]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  ivy-home: H:\\repository\\jar</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  checksums: \${sbt.checksums-sha1,md5}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  override-build-repos: \${sbt.override.build.repos-false}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  repository-config: \${sbt.repository.config-\${sbt.global.base-\${user.home}/.sbt}/repositories}</span></span></code></pre></div><p>仍然会从 maven central 下载。</p><p>增加参数 <code>-Dsbt.override.build.repos=true</code> 仍然无效果。</p><p>配置文件：</p><p><a href="http://www.scala-sbt.org/0.13/docs/Launcher-Configuration.html" target="_blank" rel="noreferrer">http://www.scala-sbt.org/0.13/docs/Launcher-Configuration.html</a></p><p>这个时间我已经把包下载好了，等以后在研究。</p><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>`,15)]))}const b=a(t,[["render",p]]);export{d as __pageData,b as default};
