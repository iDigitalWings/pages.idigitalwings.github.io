import{_ as a,a as s,af as o,o as t}from"./chunks/framework.C87LdZyP.js";const y=JSON.parse('{"title":"GroovyClassLoader Heap Dump and leak","description":"","frontmatter":{"title":"GroovyClassLoader Heap Dump and leak","date":"2019-04-15T00:00:00.000Z","tags":["jvm","heap","groovy"]},"headers":[],"relativePath":"posts/2019/04/2019-04-15-groovy-heap-groovy-class-loader.md","filePath":"posts/2019/04/2019-04-15-groovy-heap-groovy-class-loader.md","lastUpdated":1718173059000}'),n={name:"posts/2019/04/2019-04-15-groovy-heap-groovy-class-loader.md"};function i(l,e,r,c,d,h){return t(),s("div",null,e[0]||(e[0]=[o(`<p>Groovy is a dynamic language, every method call is dispatched dynamically. To optimise that Groovy creates a <code>MetaClass</code> for every <code>java.lang.Class</code> in the <code>MetaClassRegistry</code>. These MetaClass instances are created on-demand and stored using Weak references.</p><p>The reason you see a lot of <code>org.codehaus.groovy.runtime.metaclass.MetaMethodIndex.Entry</code> is because Groovy is storing a map of classes and methods in memory so that they can be quickly dispatched by the runtime. Depending on the size of the application this can be as you have discovered thousands of classes as each class can have dozens sometimes hundreds of methods.</p><p>However, there is no &quot;memory leak&quot; in Groovy and Grails, what you are seeing is normal behaviour. Your application is running low on memory, probably because it hasn&#39;t been allocated enough memory, this in turn causes <code>MetaClass</code> instances to be garbage collected. Now say for example you have a loop:</p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> strings) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">   println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">toUpperCase()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>In this case we are calling a method on the String class. If you are running low on memory what will happen is that for each iteration of the loop the <code>MetaClass</code> will be garbage collected and then recreated again for the next iteration. This can dramatically slow down an application and lead to the CPU being pinned as you have seen. This state is commonly referred to as &quot;metaclass churn&quot; and is a sign your application is running low on heap memory.</p><p>If Groovy was not garbage collecting these MetaClass instances then yes that would mean there is a memory leak in Groovy, but the fact that it is garbage collecting these classes is a sign that all is well, except for the fact that you have not allocated enough heap memory in the first place. That is not to say that there may be a memory leak in another part of the application that is eating up all the available memory and leaving not enough for Groovy to operate correctly.</p><p>As for the other answer you refer to, adding class unloading and PermGen tweaks won&#39;t actually do anything to resolve your memory issues unless you dynamically parsing classes at runtime. PermGen space is used by the JVM to store dynamically created classes. Groovy allows you to compile classes at runtime using <code>GroovyClassLoader.parseClass</code> or <code>GroovyShell.evaluate</code>. If you are continuously parsing classes then yes adding class unloading flags can help. See also this post:</p><p><a href="https://stackoverflow.com/questions/5815952/locating-code-that-is-filling-permgen-with-dead-groovy-code" target="_blank" rel="noreferrer">Locating code that is filling PermGen with dead Groovy code</a></p><p>However, a typical Grails application does not dynamically compile classes at runtime and hence tweaking PermGen and class unloading settings won&#39;t actually achieve anything.</p><p>You should verify if you have allocated enough heap memory using the -Xmx flag and if not allocate more.</p><hr><ul><li><a href="https://stackoverflow.com/questions/24169976/understanding-groovy-grails-classloader-leak" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/24169976/understanding-groovy-grails-classloader-leak</a></li></ul>`,12)]))}const g=a(n,[["render",i]]);export{y as __pageData,g as default};
