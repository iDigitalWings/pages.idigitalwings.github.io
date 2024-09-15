import{_ as i,a,af as n,o as p}from"./chunks/framework.C87LdZyP.js";const F=JSON.parse('{"title":"Spark Start","description":"","frontmatter":{"title":"Spark Start","date":"2017-06-11T00:00:00.000Z","tags":["bigdata","spark"]},"headers":[],"relativePath":"posts/2017/06/2017-06-11-spark-start.md","filePath":"posts/2017/06/2017-06-11-spark-start.md","lastUpdated":1718193786000}'),l={name:"posts/2017/06/2017-06-11-spark-start.md"};function h(k,s,t,e,r,d){return p(),a("div",null,s[0]||(s[0]=[n(`<p>去<a href="http://spark.apache.org/downloads.html" target="_blank" rel="noreferrer">官网</a>下载Spark，比如<code>2.1.0,hadoop 2.7</code>， 现在我用本机运行测试程序，直接使用java依赖。</p><p>我计较熟悉gradle，使用gradle来构建项目。</p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">apply </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;java&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">apply </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;scala&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">apply </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;idea&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">bootRepackage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">enabled </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">repositories {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    maven { url </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">\${</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">nexusUrl</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/content/groups/public/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">configurations</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">all {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    resolutionStrategy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">cacheChangingModulesFor </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;seconds&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">dependencies {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    compile fileTree(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">dir</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;libs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    compile </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;org.scala-lang:scala-library:</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">\${</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">SCALA_FULL_VERSION</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> // 2.11.8 / 2.10.6</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    compile </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;org.scala-lang:scala-compiler:</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">\${</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">SCALA_FULL_VERSION</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    compile </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;org.apache.spark:spark-core_</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">\${</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">SCALA_VERSION</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">\${</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">SPARK_VERSION</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    compile </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;org.apache.spark:spark-sql_</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">\${</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">SCALA_VERSION</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">\${</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">SPARK_VERSION</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">            &quot;org.codehaus.janino:commons-compiler:2.7.8&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    compile </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;org.apache.spark:spark-streaming_</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">\${</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">SCALA_VERSION</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">\${</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">SPARK_VERSION</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    compile </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;org.apache.spark:spark-mllib_</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">\${</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">SCALA_VERSION</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">\${</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">SPARK_VERSION</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[compileJava, compileTestJava]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">*.</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">*.</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">encoding </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;UTF-8&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">idea {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    module {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        downloadSources </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>运行测试程序：</p><div class="language-scala vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scala</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> org</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">apache</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">spark</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">sql</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">SparkSession</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">object</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> StartingSparkSession</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> App</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  // spark session</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  val</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;"> spark</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> SparkSession</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    .builder()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    .master(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;local[*]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    .appName(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Spark Sql basic example&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    .config(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;spark.some.config.option&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;some-value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    .getOrCreate()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  val</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;"> path</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;labs-spark/src/main/resources/people.json&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  // For implicit conversions like converting RDDs to DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  import</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> spark</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">implicits</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">_</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  // creating data frames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  val</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;"> df</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> spark.read.json(path)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  df.show()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  df.printSchema()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  df.select(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">).show()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  // Select everybody, but increment the age by 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  df.select($</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, $</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;age&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">).show()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  // Select people older than 21</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  df.filter($</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;age&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> &gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 21</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">).show()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  // Count people by age</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  df.groupBy(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;age&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">).count().show()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    * Running SQL Queries Programmatically</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  // Register the DataFrame as a SQL temporary view</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  df.createOrReplaceTempView(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;people&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  val</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;"> sqlDf</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> spark.sql(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;select * from people&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  sqlDf.show()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    * Global Temporary View</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  // Register the DataFrame as a global temporary view</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  df.createGlobalTempView(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;people&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  // Global temporary view is tied to a system preserved database \`global_temp\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  spark.sql(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;select * from global_temp.people&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">).show()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  // Global temporary view is cross-session</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  spark.newSession().sql(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;select * from global_temp.people&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">).show()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>`,7)]))}const y=i(l,[["render",h]]);export{F as __pageData,y as default};
