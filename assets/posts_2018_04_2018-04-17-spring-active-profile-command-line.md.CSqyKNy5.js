import{_ as a,a as e,af as s,o as t}from"./chunks/framework.C87LdZyP.js";const g=JSON.parse('{"title":"Spring Active Profile by Command Line","description":"","frontmatter":{"title":"Spring Active Profile by Command Line","date":"2018-04-17T00:00:00.000Z","tags":["spring"]},"headers":[],"relativePath":"posts/2018/04/2018-04-17-spring-active-profile-command-line.md","filePath":"posts/2018/04/2018-04-17-spring-active-profile-command-line.md","lastUpdated":1718173059000}'),n={name:"posts/2018/04/2018-04-17-spring-active-profile-command-line.md"};function r(o,i,p,l,h,d){return t(),e("div",null,i[0]||(i[0]=[s('<h2 id="option-1-java-system-properties-vm-arguments" tabindex="-1">Option 1: Java System Properties (VM Arguments) <a class="header-anchor" href="#option-1-java-system-properties-vm-arguments" aria-label="Permalink to &quot;Option 1: Java System Properties (VM Arguments)&quot;">​</a></h2><p><strong>It&#39;s important that the -D parameters are before your application.jar otherwise they are not recognized.</strong></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">java</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -jar</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -Dspring.profiles.active=prod</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> application.jar</span></span></code></pre></div><h2 id="option-2-program-arguments" tabindex="-1">Option 2: Program arguments <a class="header-anchor" href="#option-2-program-arguments" aria-label="Permalink to &quot;Option 2: Program arguments&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">java</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -jar</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> application.jar</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --spring.profiles.active=prod</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --spring.config.location=c:</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">\\c</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">onfig</span></span></code></pre></div><hr><p>Links:</p><ul><li><a href="https://stackoverflow.com/questions/31038250/setting-active-profile-and-config-location-from-command-line-in-spring-boot" target="_blank" rel="noreferrer">Setting active profile and config location from command line in spring boot</a></li><li><a href="https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-profiles.html" target="_blank" rel="noreferrer">Profiles</a></li></ul>',8)]))}const m=a(n,[["render",r]]);export{g as __pageData,m as default};
