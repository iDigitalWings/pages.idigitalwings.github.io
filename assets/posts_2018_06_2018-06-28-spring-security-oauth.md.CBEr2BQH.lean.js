import{_ as g}from"./chunks/ArticleMetadata.DqNZd5s0.js";import{_ as h,m as f,a as m,e as t,x as l,u as c,B as p,af as b,o as s,p as u,q as d}from"./chunks/framework.C87LdZyP.js";import"./chunks/theme.Cy9eYTfS.js";const $=JSON.parse('{"title":"Spring Security Errors","description":"","frontmatter":{"title":"Spring Security Errors","date":"2018-06-25T00:00:00.000Z","tags":["spring","security"]},"headers":[],"relativePath":"posts/2018/06/2018-06-28-spring-security-oauth.md","filePath":"posts/2018/06/2018-06-28-spring-security-oauth.md","lastUpdated":1718187682000}'),y={name:"posts/2018/06/2018-06-28-spring-security-oauth.md"};function v(n,e,E,A,C,k){const r=g,i=f("ClientOnly");return s(),m("div",null,[e[0]||(e[0]=t("p",null,"凌乱一对错",-1)),e[1]||(e[1]=t("h1",{id:"bean-method-clientregistrationrepository-not-loaded-because-oauth2-clients-configured-condition-registered-clients-is-not-available",tabindex:"-1"},[l("Bean method 'clientRegistrationRepository' not loaded because OAuth2 Clients Configured Condition registered clients is not available "),t("a",{class:"header-anchor",href:"#bean-method-clientregistrationrepository-not-loaded-because-oauth2-clients-configured-condition-registered-clients-is-not-available","aria-label":`Permalink to "Bean method 'clientRegistrationRepository' not loaded because OAuth2 Clients Configured Condition registered clients is not available"`},"​")],-1)),c(i,null,{default:p(()=>{var a,o;return[(((a=n.$frontmatter)==null?void 0:a.aside)??!0)&&(((o=n.$frontmatter)==null?void 0:o.showArticleMetadata)??!0)?(s(),u(r,{key:0,article:n.$frontmatter},null,8,["article"])):d("",!0)]}),_:1}),e[2]||(e[2]=t("p",null,[t("a",{href:"https://github.com/spring-projects/spring-boot/issues/12654",target:"_blank",rel:"noreferrer"},"https://github.com/spring-projects/spring-boot/issues/12654")],-1)),e[3]||(e[3]=t("p",null,[t("a",{href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-security-oauth2-client",target:"_blank",rel:"noreferrer"},"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-security-oauth2-client")],-1)),e[4]||(e[4]=t("p",null,"配置格式更新了",-1)),e[5]||(e[5]=t("h1",{id:"caused-by-java-lang-classnotfoundexception-org-springframework-security-oauth2-client-web-oauth2loginauthenticationfilter",tabindex:"-1"},[l("Caused by: java.lang.ClassNotFoundException: org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter "),t("a",{class:"header-anchor",href:"#caused-by-java-lang-classnotfoundexception-org-springframework-security-oauth2-client-web-oauth2loginauthenticationfilter","aria-label":'Permalink to "Caused by: java.lang.ClassNotFoundException: org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter"'},"​")],-1)),c(i,null,{default:p(()=>{var a,o;return[(((a=n.$frontmatter)==null?void 0:a.aside)??!0)&&(((o=n.$frontmatter)==null?void 0:o.showArticleMetadata)??!0)?(s(),u(r,{key:0,article:n.$frontmatter},null,8,["article"])):d("",!0)]}),_:1}),e[6]||(e[6]=b(`<p>compile &#39;org.springframework.security:spring-security-oauth2-client&#39;</p><h2 id="order" tabindex="-1">order <a class="header-anchor" href="#order" aria-label="Permalink to &quot;order&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>Caused by: java.lang.IllegalStateException: @Order on WebSecurityConfigurers must be unique. Order of 100 was already used on cn.com.shuyi.cbt.oauth.client.UiSecurityConfig$$EnhancerBySpringCGLIB$$eb64ae96@d34cee7, so it cannot be used on cn.com.shuyi.cbt.oauth.client.config.Config1$$EnhancerBySpringCGLIB$$5225a823@2057c0e2 too.</span></span>
<span class="line"><span>	at org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration.setFilterChainProxySecurityConfigurer(WebSecurityConfiguration.java:148) ~[spring-security-config-5.0.6.RELEASE.jar:5.0.6.RELEASE]</span></span>
<span class="line"><span>	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[na:1.8.0_151]</span></span>
<span class="line"><span>	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62) ~[na:1.8.0_151]</span></span>
<span class="line"><span>	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[na:1.8.0_151]</span></span>
<span class="line"><span>	at java.lang.reflect.Method.invoke(Method.java:498) ~[na:1.8.0_151]</span></span>
<span class="line"><span>	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor$AutowiredMethodElement.inject(AutowiredAnnotationBeanPostProcessor.java:699) ~[spring-beans-5.0.7.RELEASE.jar:5.0.7.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.beans.factory.annotation.InjectionMetadata.inject(InjectionMetadata.java:91) ~[spring-beans-5.0.7.RELEASE.jar:5.0.7.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor.postProcessPropertyValues(AutowiredAnnotationBeanPostProcessor.java:373) ~[spring-beans-5.0.7.RELEASE.jar:5.0.7.RELEASE]</span></span>
<span class="line"><span>	... 23 common frames omitted</span></span></code></pre></div>`,3))])}const P=h(y,[["render",v]]);export{$ as __pageData,P as default};
