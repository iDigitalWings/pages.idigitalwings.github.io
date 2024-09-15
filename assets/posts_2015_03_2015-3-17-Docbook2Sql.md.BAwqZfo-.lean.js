import{_ as s,a as l,af as a,o as e}from"./chunks/framework.C87LdZyP.js";const g=JSON.parse('{"title":"设计的演变","description":"","frontmatter":{"title":"设计的演变","date":"2015-03-17T00:00:00.000Z","tags":["design"]},"headers":[],"relativePath":"posts/2015/03/2015-3-17-Docbook2Sql.md","filePath":"posts/2015/03/2015-3-17-Docbook2Sql.md","lastUpdated":1718193786000}'),t={name:"posts/2015/03/2015-3-17-Docbook2Sql.md"};function n(p,i,r,h,k,o){return e(),l("div",null,i[0]||(i[0]=[a(`<p>最近撰写数据库设计文档使用docbook来写，不在使用其他图形设计工具，此时遇到个问题，以前的数据库设计工具都有生成建表语句的功能，设置能连接数据库直接更新设计．而用docbook来做设计，文档管理方面是上去了，但是初始化数据库表这块就缺失了．于是要写个工具，根据做好的数据库设计来生成建表语句．</p><p>而这样一个工具大体应该包含这样一些功能：</p><ul><li>提供命令行接口，便于自动化</li><li>提供GUI界面，方便实施和销售等没有编程技能的人使用（当然也可以做几个脚本）</li><li>支持多个数据库系统，mysql, postgres, oracle, sqlserver</li><li>可以选择文档目录，输出文档目录</li></ul><p>由于公司有新同事来（新人），遍把任务交给他们做．</p><p>两天后，我去询问进度，部分功能实现了，看其代码，一个Main类，一个main函数，外加几个static方法，看了一眼，就实在不想看了，于是给给其讲设计．</p><p>大概的设计如下：</p><ul><li>整个数据库设计对应一个DBDesign</li><li>DBDesign下有许多个ModuleDesign</li><li>ModuleDesign下有许多张TableDesign</li><li>每个TableDesign对应设计中的一个实体数据库表</li></ul><p>如上类可以把我们编写的设计文档很清晰地对应到代码设计中，没有复杂的关系只是简单的组合．</p><p>对于解析生成sql部分，由于需要支持多种数据库，有如下类：</p><ul><li>Generator 接口</li><li>dbType: String</li><li>design: Design</li><li>subGenerators: List/Map</li><li>generate(): String</li><li>write(path): void</li><li>TableGenerator 抽象类</li><li>design: TableTesign</li><li>MysqlTableGenerator</li><li>PostgresTableGenerator</li><li>ModuleGenerator</li><li>design: ModuleDesign</li><li>subGenerators: List/Map TableGenerator的结合</li><li>DesignGenerator</li><li>design: DBDesign</li><li>subGenerators: List/Map ModuleGenerator的集合</li></ul><p>同样没有复杂的东西，就是一个组合模式．</p><p>还会有一些工具类：</p><ul><li>FileUtil</li><li>XmlUtil</li></ul><p>启动程序会有CliApp和GUIApp两个类，main的主要逻辑如下：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">sourceDir </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">sqlType </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">outputDir </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">design </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> Design</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(sourceDir) </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 递归读取module和table</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">generator </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> DesignGenerator</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(design, sqlType)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">generator.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">write</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(outputDir)</span></span></code></pre></div><p>而文章命名为<strong>设计的演变</strong>，说明事实并不是如我预期的那样．在我讲完这个设计之后的几天，我又去看他的程序，仍然是一堆<code>static</code>方法和变量，无比长的方法，大段的if else，虽然有几个类，但是大都不知所以</p><ul><li>Write</li><li>FileUtil</li><li>Table</li><li>GenerateTable（大家不要用动词词组命名）</li><li>...</li></ul><p>大多类里面的方法和类名不符，逻辑也不清晰．有一个可取的类是<code>Table</code>，里面存了一些逻辑不需要的变量和<code>title, text</code>内容，前者是表名称，后者是解析好的sql，依照其现状，对其代码进行整理．</p><p>首先是<code>Table</code>类，依然用来解析好的Sql等结果：</p><ul><li>TableResult / Table</li><li>title: String</li><li>tableName: String</li><li>cols: List 解析好的每一行的建表语句</li><li>getSql(): String 生成建表语句，包含语句前的注释</li><li>addColumn(columnSql): void cols中插入一行</li><li>write(path)</li><li>TableGenerator</li><li>TableGenerator(String filePath)</li><li>generated: boolean 加入是否解析过的标志</li><li>generate: Table</li><li>ModuleResult</li><li>tableResults</li><li>getSql()</li><li>write(path)</li><li>ModuleGenerator</li><li>generated: boolean</li><li>tableGenerators</li><li>...</li><li>FileUtil</li><li>XMLUtil</li></ul><p>解析表的逻辑：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">generator </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> TableGenerator</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(path)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">table </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> generator.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">generate</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">println table.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getSql</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">table.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">write</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span></code></pre></div><p>generate(), writer() 里面同样用简单组合模式（Module和DB）．</p><p>现在是设计演变的第一步，当然也可以理解成第一到Ｎ步，后面还有东西要做，实际功能也比上面的复杂，（现实中后来我花了大半天时间自己把这个程序写了，由于急着要用）．由于时间关系，不能在这里都写出来．</p><p>文笔和时间所限，文章也没描述太多关于演变的内容．我想表达的演变是什么意思呢，其实就是，在开发过程各种因素的影响下，无论如何都应该：</p><ul><li>保持程序各个元素的低耦合，</li><li>使其协调工作，</li><li>由点到面，由小到大，从原型到产品一步一步的扩张功能</li><li>无害地插入功能</li></ul><p>希望看到此文的人能了解一点我的意图，并以此自勉，任何时候不要因为各种因素放弃写出优秀程序的念头．</p><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>`,29)]))}const D=s(t,[["render",n]]);export{g as __pageData,D as default};
