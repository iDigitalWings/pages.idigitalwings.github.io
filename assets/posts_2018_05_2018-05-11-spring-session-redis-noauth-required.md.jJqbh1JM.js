import{_ as n,a as s,af as e,o as t}from"./chunks/framework.C87LdZyP.js";const d=JSON.parse('{"title":"Spring Security 5 – There is no PasswordEncoder mapped for the id “null”","description":"","frontmatter":{"title":"Spring Security 5 – There is no PasswordEncoder mapped for the id “null”","date":"2018-05-11T00:00:00.000Z","tags":["spring-session","spring"]},"headers":[],"relativePath":"posts/2018/05/2018-05-11-spring-session-redis-noauth-required.md","filePath":"posts/2018/05/2018-05-11-spring-session-redis-noauth-required.md","lastUpdated":1718187682000}'),r={name:"posts/2018/05/2018-05-11-spring-session-redis-noauth-required.md"};function i(o,a,p,c,E,l){return t(),s("div",null,a[0]||(a[0]=[e(`<p>Spring Session 使用Redis，Redis不能使用密码验证。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>org.springframework.beans.factory.BeanCreationException: Error creating bean with name &#39;enableRedisKeyspaceNotificationsInitializer&#39; defined in class path resource [org/springframework/boot/autoconfigure/session/RedisSessionConfiguration$SpringBootRedisHttpSessionConfiguration.class]: Invocation of init method failed; nested exception is org.springframework.data.redis.RedisSystemException: Error in execution; nested exception is io.lettuce.core.RedisCommandExecutionException: NOAUTH Authentication required.</span></span>
<span class="line"><span>	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1702) ~[spring-beans-5.0.5.RELEASE.jar:5.0.5.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:579) ~[spring-beans-5.0.5.RELEASE.jar:5.0.5.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:501) ~[spring-beans-5.0.5.RELEASE.jar:5.0.5.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:317) ~[spring-beans-5.0.5.RELEASE.jar:5.0.5.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:228) ~[spring-beans-5.0.5.RELEASE.jar:5.0.5.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:315) ~[spring-beans-5.0.5.RELEASE.jar:5.0.5.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:199) ~[spring-beans-5.0.5.RELEASE.jar:5.0.5.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.beans.factory.support.DefaultListableBeanFactory.preInstantiateSingletons(DefaultListableBeanFactory.java:760) ~[spring-beans-5.0.5.RELEASE.jar:5.0.5.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:869) ~[spring-context-5.0.5.RELEASE.jar:5.0.5.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:550) ~[spring-context-5.0.5.RELEASE.jar:5.0.5.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext.refresh(ServletWebServerApplicationContext.java:140) ~[spring-boot-2.0.1.RELEASE.jar:2.0.1.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:759) [spring-boot-2.0.1.RELEASE.jar:2.0.1.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:395) [spring-boot-2.0.1.RELEASE.jar:2.0.1.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.boot.SpringApplication.run(SpringApplication.java:327) [spring-boot-2.0.1.RELEASE.jar:2.0.1.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1255) [spring-boot-2.0.1.RELEASE.jar:2.0.1.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1243) [spring-boot-2.0.1.RELEASE.jar:2.0.1.RELEASE]</span></span>
<span class="line"><span>	at cn.com.shuyi.cbt.oauth.provider.SecurityProvider.main(SecurityProvider.java:13) [classes/:na]</span></span>
<span class="line"><span>	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[na:1.8.0_151]</span></span>
<span class="line"><span>	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62) ~[na:1.8.0_151]</span></span>
<span class="line"><span>	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[na:1.8.0_151]</span></span>
<span class="line"><span>	at java.lang.reflect.Method.invoke(Method.java:498) ~[na:1.8.0_151]</span></span>
<span class="line"><span>	at org.springframework.boot.devtools.restart.RestartLauncher.run(RestartLauncher.java:49) [spring-boot-devtools-2.0.1.RELEASE.jar:2.0.1.RELEASE]</span></span>
<span class="line"><span>Caused by: org.springframework.data.redis.RedisSystemException: Error in execution; nested exception is io.lettuce.core.RedisCommandExecutionException: NOAUTH Authentication required.</span></span>
<span class="line"><span>	at org.springframework.data.redis.connection.lettuce.LettuceExceptionConverter.convert(LettuceExceptionConverter.java:54) ~[spring-data-redis-2.0.6.RELEASE.jar:2.0.6.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.data.redis.connection.lettuce.LettuceExceptionConverter.convert(LettuceExceptionConverter.java:52) ~[spring-data-redis-2.0.6.RELEASE.jar:2.0.6.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.data.redis.connection.lettuce.LettuceExceptionConverter.convert(LettuceExceptionConverter.java:41) ~[spring-data-redis-2.0.6.RELEASE.jar:2.0.6.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.data.redis.PassThroughExceptionTranslationStrategy.translate(PassThroughExceptionTranslationStrategy.java:44) ~[spring-data-redis-2.0.6.RELEASE.jar:2.0.6.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.data.redis.FallbackExceptionTranslationStrategy.translate(FallbackExceptionTranslationStrategy.java:42) ~[spring-data-redis-2.0.6.RELEASE.jar:2.0.6.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.data.redis.connection.lettuce.LettuceConnection.convertLettuceAccessException(LettuceConnection.java:257) ~[spring-data-redis-2.0.6.RELEASE.jar:2.0.6.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.data.redis.connection.lettuce.LettuceServerCommands.convertLettuceAccessException(LettuceServerCommands.java:571) ~[spring-data-redis-2.0.6.RELEASE.jar:2.0.6.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.data.redis.connection.lettuce.LettuceServerCommands.getConfig(LettuceServerCommands.java:307) ~[spring-data-redis-2.0.6.RELEASE.jar:2.0.6.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.data.redis.connection.DefaultedRedisConnection.getConfig(DefaultedRedisConnection.java:1119) ~[spring-data-redis-2.0.6.RELEASE.jar:2.0.6.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.session.data.redis.config.ConfigureNotifyKeyspaceEventsAction.getNotifyOptions(ConfigureNotifyKeyspaceEventsAction.java:76) ~[spring-session-data-redis-2.0.2.RELEASE.jar:2.0.2.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.session.data.redis.config.ConfigureNotifyKeyspaceEventsAction.configure(ConfigureNotifyKeyspaceEventsAction.java:57) ~[spring-session-data-redis-2.0.2.RELEASE.jar:2.0.2.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.session.data.redis.config.annotation.web.http.RedisHttpSessionConfiguration$EnableRedisKeyspaceNotificationsInitializer.afterPropertiesSet(RedisHttpSessionConfiguration.java:286) ~[spring-session-data-redis-2.0.2.RELEASE.jar:2.0.2.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1761) ~[spring-beans-5.0.5.RELEASE.jar:5.0.5.RELEASE]</span></span>
<span class="line"><span>	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1698) ~[spring-beans-5.0.5.RELEASE.jar:5.0.5.RELEASE]</span></span>
<span class="line"><span>	... 21 common frames omitted</span></span></code></pre></div>`,2)]))}const A=n(r,[["render",i]]);export{d as __pageData,A as default};
