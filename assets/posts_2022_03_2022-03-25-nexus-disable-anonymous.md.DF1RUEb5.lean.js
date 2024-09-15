import{_ as i,a,af as n,o as l}from"./chunks/framework.C87LdZyP.js";const g=JSON.parse('{"title":"Nexus Disable Anonymous Access","description":"","frontmatter":{"title":"Nexus Disable Anonymous Access","date":"2022-03-25T00:00:00.000Z","tags":["Java","Nexus"],"category":["Java"]},"headers":[],"relativePath":"posts/2022/03/2022-03-25-nexus-disable-anonymous.md","filePath":"posts/2022/03/2022-03-25-nexus-disable-anonymous.md","lastUpdated":1718173059000}'),p={name:"posts/2022/03/2022-03-25-nexus-disable-anonymous.md"};function t(e,s,h,k,r,d){return l(),a("div",null,s[0]||(s[0]=[n(`<p>Nexus 服务器设置禁用<code>Anonymous Access</code>。</p><p>修改文件 init.gradle，替换 <code>&lt;username&gt;</code>和<code>&lt;password&gt;</code>为你的帐号和密码。</p><div class="tip custom-block"><p class="custom-block-title">init.gradle</p><p>修改以下文件位置都可以（文件不存在请手动创建）：</p><ul><li><code>USER_HOME/.gradle/init.gradle</code></li><li><code>GRADLE_HOME/init.d/init.gradle</code></li></ul><p>详情请参考<a href="https://docs.gradle.org/current/userguide/init_scripts.html#sec:using_an_init_script" target="_blank" rel="noreferrer">Gradle 文档</a></p></div><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">allprojects {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    buildscript {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        repositories {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            mavenLocal()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            maven { </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                    allowInsecureProtocol </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                    credentials {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                        username </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                        password </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                    url </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;https://nexus.com/repository/public/&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            }        </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            mavenCentral()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    repositories{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        mavenLocal()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        maven {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                allowInsecureProtocol </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                url </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;https://nexus.com/repository/public/&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        mavenCentral()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">settingsEvaluated { </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">settings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> -&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    settings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">pluginManagement {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        repositories {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            mavenLocal()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            maven{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                url </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;https://nexus.com/repository/public/&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            mavenCentral()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><h2 id="publish-配置" tabindex="-1">Publish 配置 <a class="header-anchor" href="#publish-配置" aria-label="Permalink to &quot;Publish 配置&quot;">​</a></h2><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">publishing{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 配置发布的地址</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        repositories{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            mavenLocal()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            maven{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">                // 私服地址</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">\${</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">mavenUrl</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">                // 验证信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                credentials{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">                    // 私服的用户与密码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                    username </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">\${</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">nexusUsername</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                    password </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">\${</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">nexusPassword</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        publications{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            library(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">MavenPublication</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                groupId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">\${</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">group</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                artifactId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">\${</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">artifactId</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                version </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">\${</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">version</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                from components</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">java</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                artifact sourceJar</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span></code></pre></div><h2 id="project-properties-使用环境变量配置" tabindex="-1">Project Properties 使用环境变量配置 <a class="header-anchor" href="#project-properties-使用环境变量配置" aria-label="Permalink to &quot;Project Properties 使用环境变量配置&quot;">​</a></h2><p>参考： <a href="https://docs.gradle.org/current/userguide/build_environment.html#sec:project_properties" target="_blank" rel="noreferrer">Gradle 文档</a></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> ORG_GRADLE_PROJECT_nexusPassword</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> ORG_GRADLE_PROJECT_nexusUsername</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span></span></code></pre></div><h2 id="npm-yarn" tabindex="-1">Npm / Yarn <a class="header-anchor" href="#npm-yarn" aria-label="Permalink to &quot;Npm / Yarn&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> registry</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://nexus..com/repository/npm-public/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> registry</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://nexus..com/repository/npm-public/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> login</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --registry</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://nexus..com/repository/npm-public/</span></span></code></pre></div>`,11)]))}const c=i(p,[["render",t]]);export{g as __pageData,c as default};
