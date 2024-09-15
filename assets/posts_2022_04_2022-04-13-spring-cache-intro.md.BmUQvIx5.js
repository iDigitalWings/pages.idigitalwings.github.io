import{_ as i,a,af as h,o as e}from"./chunks/framework.C87LdZyP.js";const c=JSON.parse('{"title":"Spring: Spring Cache Intro","description":"","frontmatter":{"title":"Spring: Spring Cache Intro","date":"2022-04-13T00:00:00.000Z","tags":["Java","Spring"],"category":["Java"]},"headers":[],"relativePath":"posts/2022/04/2022-04-13-spring-cache-intro.md","filePath":"posts/2022/04/2022-04-13-spring-cache-intro.md","lastUpdated":1718173059000}'),n={name:"posts/2022/04/2022-04-13-spring-cache-intro.md"};function l(t,s,k,p,d,o){return e(),a("div",null,s[0]||(s[0]=[h(`<h2 id="多-provider-支持" tabindex="-1">多 Provider 支持 <a class="header-anchor" href="#多-provider-支持" aria-label="Permalink to &quot;多 Provider 支持&quot;">​</a></h2><p>支持如下 Provider：</p><ul><li>GenericJCache (JSR-107) (EhCache 3, Hazelcast, Infinispan, and others)</li><li>EhCache 2.x</li><li>Hazelcast</li><li>Infinispan</li><li>Couchbase</li><li>Redis</li><li>Caffeine</li><li>Simple</li><li>Apache Geode(Spring Boot for Apache Geode)</li></ul><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># Only necessary if more than one provider is present</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">spring</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  cache</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    jcache</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">      provider</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;com.example.MyCachingProvider&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">      config</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;classpath:example.xml&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    ehcache</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">      config</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;classpath:config/another-config.xml&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    infinispan</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">      config</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;infinispan.xml&quot;</span></span></code></pre></div><h2 id="redis" tabindex="-1">Redis <a class="header-anchor" href="#redis" aria-label="Permalink to &quot;Redis&quot;">​</a></h2><p>Redis 自动配置之后，<code>RedisCacheManager</code>也会自动配置。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">spring</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  cache</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    cache-names</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;cache1,cache2&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    redis</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">      time-to-live</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;10m&quot;</span></span></code></pre></div><h2 id="注解驱动" tabindex="-1">注解驱动 <a class="header-anchor" href="#注解驱动" aria-label="Permalink to &quot;注解驱动&quot;">​</a></h2><ul><li><code>@Cacheable</code> 触发缓存填充</li><li><code>@CacheEvict</code> 触发缓存收回</li><li><code>@CachePut</code> 在不干扰方法执行的情况下更新缓存</li><li><code>@Caching</code> 重新组合多个缓存操作以应用于一个方法</li><li><code>@CacheConfig</code> 在类级别共享一些常见的缓存相关设置</li></ul><h2 id="cacheable" tabindex="-1"><code>@Cacheable</code> <a class="header-anchor" href="#cacheable" aria-label="Permalink to &quot;\`@Cacheable\`&quot;">​</a></h2><p><code>@Cacheable</code> 来标记可缓存的方法。相同参数的时候无需实际调用该方法。</p><p>最简单的形式，注解声明关联缓存的名称，比如「books」：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Cacheable</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;books&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Book </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">findBook</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(ISBN isbn) {...}</span></span></code></pre></div><p>大多数情况下值声明一个缓存，但注解允许指定多个名称，以便使用多个缓存。 调用方法之前会检查每个缓存，命中一个缓存则返回相关联的值。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Cacheable</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">({</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;books&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;isbns&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">})</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Book </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">findBook</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(ISBN isbn) {...}</span></span></code></pre></div><h3 id="默认缓存-key-生成" tabindex="-1">默认缓存 Key 生成 <a class="header-anchor" href="#默认缓存-key-生成" aria-label="Permalink to &quot;默认缓存 Key 生成&quot;">​</a></h3><p>缓存的本质是键值存储。<code>KeyGenerator</code>基于以下算法：</p><ul><li>如果没有参数，返回<code>SimpleKey.EMPTY</code></li><li>如果只有一个参数，返回该实例</li><li>如果有多个参数，返回包含所有参数的<code>SimpleKey</code></li></ul><p>这种方法适用大多数场景，只要参数具有自然键并实现有有效<code>hashCode()</code>和<code>equals</code> 方法。</p><p>可以实现<code>org.springframework.cache.interceptor.KeyGenerator</code>接口来 提供不同的默认 KeyGenerator。</p><h3 id="自定义-key-generation-生成" tabindex="-1">自定义 Key Generation 生成 <a class="header-anchor" href="#自定义-key-generation-生成" aria-label="Permalink to &quot;自定义 Key Generation 生成&quot;">​</a></h3><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Cacheable</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;books&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Book </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">findBook</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(ISBN isbn, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> checkWarehouse, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> includeUsed)</span></span></code></pre></div><p><code>@Cacheable</code>允许通过 <code>SpEL</code> 选择感兴趣的参数（或其嵌套属性）来生成 Key。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 使用某个参数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Cacheable</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cacheNames</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;books&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;#isbn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Book </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">findBook</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(ISBN isbn, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> checkWarehouse, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> includeUsed)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 使用参数属性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Cacheable</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cacheNames</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;books&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;#isbn.rawNumber&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Book </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">findBook</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(ISBN isbn, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> checkWarehouse, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> includeUsed)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 使用静态方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Cacheable</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cacheNames</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;books&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;T(someType).hash(#isbn)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Book </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">findBook</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(ISBN isbn, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> checkWarehouse, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> includeUsed)</span></span></code></pre></div><p>指定 KeyGenerator 的 Bean 名称：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Cacheable</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cacheNames</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;books&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">keyGenerator</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;myKeyGenerator&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Book </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">findBook</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(ISBN isbn, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> checkWarehouse, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> includeUsed)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>key</code>和<code>keyGenerator</code>参数是互斥的，同时指定两者会导致异常。</p></div><h3 id="默认缓存解析器" tabindex="-1">默认缓存解析器 <a class="header-anchor" href="#默认缓存解析器" aria-label="Permalink to &quot;默认缓存解析器&quot;">​</a></h3><p><code>CacheResolver</code> 使用配置的 <code>CacheManager</code> 来检索在操作级别定义的缓存。</p><p>可以实现<code>org.springframework.cache.interceptor.CacheResolver</code>接口 来提供不同的默认缓存解析器。</p><h3 id="自定义缓存解析器" tabindex="-1">自定义缓存解析器 <a class="header-anchor" href="#自定义缓存解析器" aria-label="Permalink to &quot;自定义缓存解析器&quot;">​</a></h3><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Cacheable</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cacheNames</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;books&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cacheManager</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;anotherCacheManager&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Book </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">findBook</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(ISBN isbn) {...}</span></span></code></pre></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Cacheable</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cacheResolver</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;runtimeCacheResolver&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Book </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">findBook</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(ISBN isbn) {...}</span></span></code></pre></div><h3 id="同步缓存" tabindex="-1">同步缓存 <a class="header-anchor" href="#同步缓存" aria-label="Permalink to &quot;同步缓存&quot;">​</a></h3><p>使用<code>sync</code>属性在程序计算时锁定缓存条目，使一个线程在计算该值时， 其它线程被阻塞，直到缓存中的条目被更新。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Cacheable</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cacheNames</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;foos&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">sync</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Foo </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">executeExpensiveOperation</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(String id) {...}</span></span></code></pre></div><h3 id="条件缓存" tabindex="-1">条件缓存 <a class="header-anchor" href="#条件缓存" aria-label="Permalink to &quot;条件缓存&quot;">​</a></h3><p>通过 <code>condition</code>的<code>SpEL</code>表达式来指定哪些条件下需要缓存。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Cacheable</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cacheNames</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;book&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">condition</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;#name.length() &lt; 32&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Book </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">findBook</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(String name)</span></span></code></pre></div><p>同样也可以使用 <code>unless</code> 参数根据计算结果来决定是否缓存。 <code>unless</code>表达式是在方法呗调用之后计算的。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Cacheable</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cacheNames</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;book&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">condition</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;#name.length() &lt; 32&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">unless</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;#result.hardback&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Book </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">findBook</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(String name)</span></span></code></pre></div><p>参数处理支持 <code>boolean</code> 类型之外，还支持<code>Option</code>类型。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Cacheable</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cacheNames</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;book&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">condition</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;#name.length() &lt; 32&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">unless</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;#result?.hardback&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Optional</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Book</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> findBook</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(String name)</span></span></code></pre></div><p>注意：<code>#result</code>仍然是指<code>Book</code>而不是<code>Optional&lt;Book&gt;</code>。</p><h3 id="可用的-spel-上下文" tabindex="-1">可用的 <code>SpEL</code> 上下文 <a class="header-anchor" href="#可用的-spel-上下文" aria-label="Permalink to &quot;可用的 \`SpEL\` 上下文&quot;">​</a></h3><ul><li><code>methodName</code><ul><li><code>#root.methodName</code></li></ul></li><li><code>method</code><ul><li><code>#root.method.name</code></li></ul></li><li><code>target</code><ul><li><code>#root.target</code></li></ul></li><li><code>targetClass</code><ul><li><code>#root.targetClass</code></li></ul></li><li><code>args</code><ul><li><code>#root.args[0]</code></li></ul></li><li><code>caches</code><ul><li><code>#root.caches[0].name</code></li></ul></li><li><code>result</code></li><li>参数名称</li></ul><h2 id="cacheput" tabindex="-1"><code>@CachePut</code> <a class="header-anchor" href="#cacheput" aria-label="Permalink to &quot;\`@CachePut\`&quot;">​</a></h2><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">CachePut</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cacheNames</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;book&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;#isbn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Book </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">updateBook</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(ISBN isbn, BookDescriptor descriptor)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>不要在同一个方法上使用<code>@Cacheable</code>和<code>@CachePut</code>注解，因为他们具有相同 的行为。</p></div><h2 id="cacheevit" tabindex="-1"><code>@CacheEvit</code> <a class="header-anchor" href="#cacheevit" aria-label="Permalink to &quot;\`@CacheEvit\`&quot;">​</a></h2><p>缓存抽象不仅支持缓存填充，还支持缓存逐出。来删除陈旧或未使用的数据。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">CacheEvict</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cacheNames</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;books&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">allEntries</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> loadBooks</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(InputStream batch)</span></span></code></pre></div><h2 id="caching" tabindex="-1"><code>@Caching</code> <a class="header-anchor" href="#caching" aria-label="Permalink to &quot;\`@Caching\`&quot;">​</a></h2><p>在同一个方法上使用@Caching多个嵌套@Cacheable的@CachePut。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Caching</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">evict</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> { @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">CacheEvict</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;primary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">), @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">CacheEvict</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cacheNames</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;secondary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;#p0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) })</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Book </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">importBooks</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(String deposit, Date date)</span></span></code></pre></div><h2 id="cacheconfig" tabindex="-1"><code>@CacheConfig</code> <a class="header-anchor" href="#cacheconfig" aria-label="Permalink to &quot;\`@CacheConfig\`&quot;">​</a></h2><p>在 Class 级别定义缓存的配置。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">CacheConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;books&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> BookRepositoryImpl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> BookRepository</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Cacheable</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Book </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">findBook</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(ISBN </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">isbn</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {...}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p><code>@CacheConfig</code>是一个类级别的注释，允许共享<code>缓存名称</code>、自定义<code>KeyGenerator</code>、 自定义<code>CacheManager</code>和自定义<code>CacheResolver</code>。</p><ul><li>将此注释放在类上不会打开任何缓存操作。</li><li>方法上的定义覆盖类上的定义 <code>@CacheConfig</code></li><li>类上的定义覆盖全局配置<code>CacheManager</code>，<code>KeyGenerator</code></li></ul><h2 id="启用缓存注解" tabindex="-1">启用缓存注解 <a class="header-anchor" href="#启用缓存注解" aria-label="Permalink to &quot;启用缓存注解&quot;">​</a></h2><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Configuration</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">EnableCaching</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> AppConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><hr><ul><li><a href="https://docs.spring.io/spring-boot/docs/2.6.6/reference/htmlsingle/#io.caching" target="_blank" rel="noreferrer">https://docs.spring.io/spring-boot/docs/2.6.6/reference/htmlsingle/#io.caching</a></li><li></li></ul>`,64)]))}const g=i(n,[["render",l]]);export{c as __pageData,g as default};
