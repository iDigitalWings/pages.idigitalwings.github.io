import{_ as a,a as i,af as n,o as l}from"./chunks/framework.C87LdZyP.js";const o=JSON.parse('{"title":"Spark DataFrame and DataSet API","description":"","frontmatter":{"title":"Spark DataFrame and DataSet API","date":"2017-08-05T00:00:00.000Z","tags":["spark"],"category":["Java"]},"headers":[],"relativePath":"posts/2017/08/2017-08-05-dataframe-dataset-api.md","filePath":"posts/2017/08/2017-08-05-dataframe-dataset-api.md","lastUpdated":1718193786000}'),p={name:"posts/2017/08/2017-08-05-dataframe-dataset-api.md"};function t(e,s,h,k,r,d){return l(),i("div",null,s[0]||(s[0]=[n(`<h2 id="sparksession" tabindex="-1">SparkSession <a class="header-anchor" href="#sparksession" aria-label="Permalink to &quot;SparkSession&quot;">​</a></h2><div class="language-scala vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scala</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> org</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">apache</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">spark</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">sql</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">SparkSession</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">val</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;"> spark</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> SparkSession</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  .builder()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  .appName(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Spark SQL basic example&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  .config(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;spark.some.config.option&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;some-value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  .getOrCreate()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// For implicit conversions like converting RDDs to DataFrames</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> spark</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">implicits</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">_</span></span></code></pre></div><h2 id="creating-dataframes" tabindex="-1">Creating DataFrames <a class="header-anchor" href="#creating-dataframes" aria-label="Permalink to &quot;Creating DataFrames&quot;">​</a></h2><div class="language-scala vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scala</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">val</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;"> df</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> spark.read.json(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;examples/src/main/resources/people.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// Displays the content of the DataFrame to stdout</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">df.show()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// +----+-------+</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// | age|   name|</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// +----+-------+</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// |null|Michael|</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// |  30|   Andy|</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// |  19| Justin|</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// +----+-------+</span></span></code></pre></div><h2 id="untyped-dataset-operations-aka-dataframe-operations" tabindex="-1">Untyped Dataset Operations (aka DataFrame Operations) <a class="header-anchor" href="#untyped-dataset-operations-aka-dataframe-operations" aria-label="Permalink to &quot;Untyped Dataset Operations (aka DataFrame Operations)&quot;">​</a></h2><div class="language-scala vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scala</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// This import is needed to use the $-notation</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> spark</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">implicits</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">_</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// Print the schema in a tree format</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">df.printSchema()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// root</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// |-- age: long (nullable = true)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// |-- name: string (nullable = true)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// Select only the &quot;name&quot; column</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">df.select(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">).show()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// +-------+</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// |   name|</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// +-------+</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// |Michael|</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// |   Andy|</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// | Justin|</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// +-------+</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// Select everybody, but increment the age by 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">df.select($</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, $</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;age&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">).show()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// +-------+---------+</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// |   name|(age + 1)|</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// +-------+---------+</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// |Michael|     null|</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// |   Andy|       31|</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// | Justin|       20|</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// +-------+---------+</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// Select people older than 21</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">df.filter($</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;age&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> &gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 21</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">).show()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// +---+----+</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// |age|name|</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// +---+----+</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// | 30|Andy|</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// +---+----+</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// Count people by age</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">df.groupBy(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;age&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">).count().show()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// +----+-----+</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// | age|count|</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// +----+-----+</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// |  19|    1|</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// |null|    1|</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// |  30|    1|</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// +----+-----+</span></span></code></pre></div><hr><p>Links:</p><ol><li><a href="http://spark.apache.org/docs/latest/sql-programming-guide.html" target="_blank" rel="noreferrer">Spark SQL, DataFrames and Datasets Guide</a></li><li><a href="http://spark.apache.org/docs/latest/api/scala/index.html#org.apache.spark.sql.Dataset" target="_blank" rel="noreferrer">DataSet Api</a></li><li><a href="http://spark.apache.org/docs/latest/api/scala/index.html#org.apache.spark.sql.functions$" target="_blank" rel="noreferrer">DataFrame Functions</a></li></ol><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>`,11)]))}const c=a(p,[["render",t]]);export{o as __pageData,c as default};
