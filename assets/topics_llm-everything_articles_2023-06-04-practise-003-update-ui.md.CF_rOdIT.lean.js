import{_ as i,a,af as n,o as t}from"./chunks/framework.C87LdZyP.js";const l="/assets/1643782090089541.BssDz9HE.png",h="/assets/1644094417788041.RjATe3Gz.png",e="/assets/1644155791555958.B8BesZsT.png",p="/assets/1645856739253125.Dg9KUV5h.png",D=JSON.parse('{"title":"《万物皆可LLM》003：花了半个周末，换了个皮肤","description":"","frontmatter":{"title":"《万物皆可LLM》003：花了半个周末，换了个皮肤","date":"2023-06-05T00:00:00.000Z","tags":["ai","ml"],"category":["AI"]},"headers":[],"relativePath":"topics/llm-everything/articles/2023-06-04-practise-003-update-ui.md","filePath":"topics/llm-everything/articles/2023-06-04-practise-003-update-ui.md","lastUpdated":1718173059000}'),k={name:"topics/llm-everything/articles/2023-06-04-practise-003-update-ui.md"};function r(d,s,o,g,F,y){return t(),a("div",null,s[0]||(s[0]=[n('<blockquote><p>前两期用的 UI库，刚开始挺开心，想要扩展的时候发现真的啥也不是，为了以后能够更好发挥， 周末重新撸了套皮肤。</p></blockquote><p><img src="'+l+'" alt=""></p><h2 id="吐槽时间" tabindex="-1">吐槽时间 <a class="header-anchor" href="#吐槽时间" aria-label="Permalink to &quot;吐槽时间&quot;">​</a></h2><p>大家都知道，这个系列前两期的客户端用了阿里 ChatUI 组件库，当我想定制功能的时候， 发现这个组件库真的太难用了。</p><p>组件库怎么说呢，好用的地方都在 REDAME 里面了，除了按照他的格式做个 Demo， 后续随变你想做点啥事儿都难得很。</p><p>组件开源，UI界面不开源，也没个文档，调试了半天实在糟心，想添加个组件解析下返回的 Markdown， 也不知道从哪儿做起，折腾来折腾去越来越火大。</p><h2 id="新界面" tabindex="-1">新界面 <a class="header-anchor" href="#新界面" aria-label="Permalink to &quot;新界面&quot;">​</a></h2><p>新的 UI 用 Vue3 写，定制型好了很多，想怎么写就怎么写。</p><p>界面分三部分，左边是工具栏，中间是聊天列表，右边是聊天框。</p><p>聊天框下面加了不同 LLM 切换的按钮，高亮显示。</p><p><img src="'+h+'" alt=""></p><p>聊天内容消息也适配了代码高亮：</p><p><img src="'+e+`" alt=""></p><h2 id="langchain-tools" tabindex="-1">LangChain Tools <a class="header-anchor" href="#langchain-tools" aria-label="Permalink to &quot;LangChain Tools&quot;">​</a></h2><p>LangChain 基于大语言模型，其能力在如何也不可能超出大语言模型的范围，还是很狭隘的。</p><p>但是 LangChain 并没有放弃现实世界的各项能力，而 Tool 就是 LangChain 和现实世界交互的接口。</p><h3 id="官方工具" tabindex="-1">官方工具 <a class="header-anchor" href="#官方工具" aria-label="Permalink to &quot;官方工具&quot;">​</a></h3><p>先介绍几个官方工具。</p><h4 id="shell-tool" tabindex="-1">Shell Tool <a class="header-anchor" href="#shell-tool" aria-label="Permalink to &quot;Shell Tool&quot;">​</a></h4><p>用来执行任何 Shell 命令，(注意有风险哦)：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(shell_tool.run({</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;commands&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;echo &#39;Hello World!&#39;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;time&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]}))</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Hello</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> World!</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">real</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    0m0.000s</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">user</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    0m0.000s</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">sys</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 0m0.000s</span></span></code></pre></div><h4 id="bing-search" tabindex="-1">Bing Search <a class="header-anchor" href="#bing-search" aria-label="Permalink to &quot;Bing Search&quot;">​</a></h4><p>该工具可通过 API 调用 Bing 搜索。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> os</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">os.environ[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">&quot;BING_SUBSCRIPTION_KEY&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">]</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;&lt;key&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">os.environ[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">&quot;BING_SEARCH_URL&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">]</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;https://api.bing.microsoft.com/v7.0/search&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> langchain.utilities</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> import</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> BingSearchAPIWrapper</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">search</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> BingSearchAPIWrapper</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">search.run(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">&quot;python&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    &#39;Thanks to the flexibility of &lt;b&gt;Python&lt;/b&gt; and the powerful ecosystem of packages, the Azure CLI supports features such as autocompletion (in shells that support it), persistent credentials, JMESPath result parsing, lazy initialization, network-less unit tests, and more. Building an open-source and cross-platform Azure CLI with &lt;b&gt;Python&lt;/b&gt; by Dan Taylor. &lt;b&gt;Python&lt;/b&gt; releases by version number: Release version Release date Click for more. &lt;b&gt;Python&lt;/b&gt; 3.11.1 Dec. 6, 2022 Download Release Notes. &lt;b&gt;Python&lt;/b&gt; 3.10.9 Dec. 6, 2022 Download Release Notes. &lt;b&gt;Python&lt;/b&gt; 3.9.16 Dec. 6, 2022 Download Release Notes. &lt;b&gt;Python&lt;/b&gt; 3.8.16 Dec. 6, 2022 Download Release Notes. &lt;b&gt;Python&lt;/b&gt; 3.7.16 Dec. 6, 2022 Download Release Notes. In this lesson, we will look at the += operator in &lt;b&gt;Python&lt;/b&gt; and see how it works with several simple examples.. The operator ‘+=’ is a shorthand for the addition assignment operator.It adds two values and assigns the sum to a variable (left operand). W3Schools offers free online tutorials, references and exercises in all the major languages of the web. Covering popular subjects like HTML, CSS, JavaScript, &lt;b&gt;Python&lt;/b&gt;, SQL, Java, and many, many more. This tutorial introduces the reader informally to the basic concepts and features of the &lt;b&gt;Python&lt;/b&gt; language and system. It helps to have a &lt;b&gt;Python&lt;/b&gt; interpreter handy for hands-on experience, but all examples are self-contained, so the tutorial can be read off-line as well. For a description of standard objects and modules, see The &lt;b&gt;Python&lt;/b&gt; Standard ... &lt;b&gt;Python&lt;/b&gt; is a general-purpose, versatile, and powerful programming language. It&amp;#39;s a great first language because &lt;b&gt;Python&lt;/b&gt; code is concise and easy to read. Whatever you want to do, &lt;b&gt;python&lt;/b&gt; can do it. From web development to machine learning to data science, &lt;b&gt;Python&lt;/b&gt; is the language for you. To install &lt;b&gt;Python&lt;/b&gt; using the Microsoft Store: Go to your Start menu (lower left Windows icon), type &amp;quot;Microsoft Store&amp;quot;, select the link to open the store. Once the store is open, select Search from the upper-right menu and enter &amp;quot;&lt;b&gt;Python&lt;/b&gt;&amp;quot;. Select which version of &lt;b&gt;Python&lt;/b&gt; you would like to use from the results under Apps. Under the “&lt;b&gt;Python&lt;/b&gt; Releases for Mac OS X” heading, click the link for the Latest &lt;b&gt;Python&lt;/b&gt; 3 Release - &lt;b&gt;Python&lt;/b&gt; 3.x.x. As of this writing, the latest version was &lt;b&gt;Python&lt;/b&gt; 3.8.4. Scroll to the bottom and click macOS 64-bit installer to start the download. When the installer is finished downloading, move on to the next step. Step 2: Run the Installer&#39;</span></span></code></pre></div><h4 id="sql-database" tabindex="-1">Sql DataBase <a class="header-anchor" href="#sql-database" aria-label="Permalink to &quot;Sql DataBase&quot;">​</a></h4><p>这个工具能回答 SQL 数据库相关的问题。</p><p>在底层，LangChain 使用 SQLAlchemy 连接到 SQL 数据库。因此， 可以<code>SQLDatabaseChain</code>与 <code>SQLAlchemy</code> 支持的任何 SQL 方言一起使用，例如 MS SQL、MySQL、MariaDB、PostgreSQL、Oracle SQL、Databricks和 SQLite。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> langchain.llms </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> OpenAI</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> langchain.utilities </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> SQLDatabase</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> langchain_experimental.sql </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> SQLDatabaseChain</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">db </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> SQLDatabase.from_uri(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;sqlite:///../../../../notebooks/Chinook.db&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">llm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> OpenAI(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">temperature</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">verbose</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">db_chain </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> SQLDatabaseChain.from_llm(llm, db, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">verbose</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">db_chain.run(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;How many employees are there?&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Entering new SQLDatabaseChain chain...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">How</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> many</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> employees</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> are</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> there?</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">SQLQuery:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">/workspace/langchain/langchain/sql_database.py:191:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> SAWarning:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> Dialect</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> sqlite+pysqlite</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> does</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">not</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> support</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> Decimal</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> objects</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> natively,</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> SQLAlchemy</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> must</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> convert</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> floating</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> point</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> rounding</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> errors</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> other</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> issues</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> may</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> occur.</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> Please</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> consider</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> storing</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> Decimal</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> numbers</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> as</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> strings</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> or</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> integers</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> on</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> this</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> platform</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> lossless</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> storage.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">  sample_rows</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> connection.execute</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">command</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">SELECT</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> COUNT</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">FROM</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;Employee&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">SQLResult:</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [(8,)]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Answer:There</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> are</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 8</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> employees.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Finished chain.</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">&#39;There are 8 employees.&#39;</span></span></code></pre></div><p>完整插件列表可以在下面网址查看：</p><ul><li><a href="https://python.langchain.com/docs/integrations/tools/%E5%85%B6%E4%BB%96%E6%8F%92%E4%BB%B6" target="_blank" rel="noreferrer">https://python.langchain.com/docs/integrations/tools/其他插件</a></li></ul><p><img src="`+p+`" alt=""></p><h2 id="自定义工具" tabindex="-1">自定义工具 <a class="header-anchor" href="#自定义工具" aria-label="Permalink to &quot;自定义工具&quot;">​</a></h2><p>自定义工具也是我解决日常工作的主要方式。</p><p>今天先给大家写个最简单的 Demo 看看工具的玩儿法。</p><h3 id="废话工具" tabindex="-1">废话工具 <a class="header-anchor" href="#废话工具" aria-label="Permalink to &quot;废话工具&quot;">​</a></h3><p>定义一个说废话的工具：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> Balabala</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">BaseTool</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;balabala&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    description </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;balabala 时请使用它&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    return_direct </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> True</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> _run</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(self, prmopt: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, run_manager: Optional[CallbackManagerForToolRun] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> None</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        return</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;balabala balala...&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> _arun</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(self, url: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, run_manager: Optional[AsyncCallbackManagerForToolRun] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> None</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, ) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        raise</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> NotImplementedError</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;暂不支持异步&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div><p>测试：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">tools </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [Balabala()]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">agent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> initialize_agent(tools, openai, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">agent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">AgentType.</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">ZERO_SHOT_REACT_DESCRIPTION</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">verbose</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">answer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> agent.run(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;balabala&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(answer)</span></span></code></pre></div><p>查看输出：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Entering new  chain...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">I</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> should</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> use</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;balabala&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> tool</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> answer</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> question.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Action:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> balabala</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Action</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> Input:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> balabala</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Observation:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> balabala</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> balala...</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Finished chain.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">balabala</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> balala...</span></span></code></pre></div><p>可以看到最后一行按照我们工具的逻辑返回了。</p><h3 id="随机颜色工具" tabindex="-1">随机颜色工具 <a class="header-anchor" href="#随机颜色工具" aria-label="Permalink to &quot;随机颜色工具&quot;">​</a></h3><p>我们再写一个工具用来生成随机颜色：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> RandomColorTool</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">BaseTool</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;random-color&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    description </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;如果要随机颜色请使用它&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    return_direct </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> True</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> _run</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(self, prmopt: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, run_manager: Optional[CallbackManagerForToolRun] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> None</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;#&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.join([random.choice(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;0123456789ABCDEF&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> color</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> _arun</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(self, url: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, run_manager: Optional[AsyncCallbackManagerForToolRun] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> None</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, ) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        raise</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> NotImplementedError</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;暂不支持异步&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div><p>查看输出：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Entering new  chain...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">I</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> should</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> use</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> random-color</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> tool</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> generate</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> random</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> color.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Action:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> random-color</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Action</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> Input:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> None</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Observation:</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> #DC0EC8</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Finished chain.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#DC0EC8</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>今天介绍了工具的使用，明天我们用工具来解决一下工作中的实际问题。</p><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>`,54)]))}const C=i(k,[["render",r]]);export{D as __pageData,C as default};
