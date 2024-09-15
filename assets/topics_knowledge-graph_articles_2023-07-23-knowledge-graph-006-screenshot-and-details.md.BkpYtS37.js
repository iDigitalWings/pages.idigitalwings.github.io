import{_ as i,a,af as t,o as n}from"./chunks/framework.C87LdZyP.js";const p="/assets/3509594733542541.BLoqjTvQ.png",e="/assets/3546793799274208.Kp5c1zAt.png",l="/assets/3547948998779041.DtWG17VW.png",h="/assets/3549351114160833.9-F5Cfuh.png",k="/assets/3549605496324500.DS6T863Y.png",r="/assets/3550834988089458.BPyAxcAE.png",o="/assets/3551453548017833.CgT6oz5b.png",d="/assets/3551507092982000.sGnT5WdQ.png",c="/assets/3551545767707958.Bek995Iq.png",g="/assets/3509669232948083.DoQtY_2x.png",A="/assets/3509795195640333.T5yVL8Ar.png",m="/assets/3551792157340000.B5NEbdR5.png",y="/assets/3509701097520333.BraMXNEY.png",D="/assets/3510063862252208.C-t02Jiq.png",u="/assets/3510097610094416.BF4qlRO3.png",C="/assets/3552705700664041.CmDiMbrb.png",_="/assets/3510130625999916.DsgFjSxK.png",B="/assets/3510169939464833.BSnL3Bmt.png",S=JSON.parse('{"title":"《构建个人知识图谱》006：知识节点详情和网站预览","description":"","frontmatter":{"title":"《构建个人知识图谱》006：知识节点详情和网站预览","date":"2023-07-23T00:00:00.000Z","tags":["ai","ml"],"category":["AI"]},"headers":[],"relativePath":"topics/knowledge-graph/articles/2023-07-23-knowledge-graph-006-screenshot-and-details.md","filePath":"topics/knowledge-graph/articles/2023-07-23-knowledge-graph-006-screenshot-and-details.md","lastUpdated":1718173059000}'),q={name:"topics/knowledge-graph/articles/2023-07-23-knowledge-graph-006-screenshot-and-details.md"};function E(F,s,b,v,f,w){return n(),a("div",null,s[0]||(s[0]=[t('<div class="admonition abstract"><p class="admonition-title">abstract</p><p>今天为知识图谱添加详情和图片预览。这样在查看知识图谱的时候可以查看和编辑相关知识的详情。</p></div><p>首先看下最后的界面预览：</p><p><img src="'+p+'" alt=""></p><p><img src="'+e+'" alt=""></p><h2 id="节点详情" tabindex="-1">节点详情 <a class="header-anchor" href="#节点详情" aria-label="Permalink to &quot;节点详情&quot;">​</a></h2><p>之前一直忘了一件事情，就是知识节点上定义了很多东西但是在图谱上看不到。 加一个点击节点显示详情的功能。</p><p>想详情显示一下主要的东西就行，大致如下：</p><p><img src="'+l+'" alt="详情设计"></p><p>实现一下 UI，调整下样式： <img src="'+h+'" alt="显示节点内容"></p><p>顺便实现下按着 Shift 多选的功能，：</p><p><img src="'+k+'" alt="Shift 多选节点显示内容"></p><h2 id="网页快照" tabindex="-1">网页快照 <a class="header-anchor" href="#网页快照" aria-label="Permalink to &quot;网页快照&quot;">​</a></h2><p>相比于看摘要，有时候我更喜欢欣赏哪些设计精美的主页。 当不想打开主页的时候如果能直接看到网页快照截图就好了。</p><p>我们使用 <strong>Selenium</strong> 这个自动化测试工具来进行页面截图，然后把图片存储在分布式存储服务 <strong>Minio</strong> 上， 程序访问的时候从 Minio 上获取图片内容展示。</p><p><img src="'+r+`" alt="图片保存和预览流程"></p><p>使用 Selenium 截图很简单，如果要固定的大小可以使用 <code>set_window_size</code> 函数。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">driver </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> webdriver.Chrome()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">driver.get(url)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">driver.set_window_size(width, height)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">driver.save_screenshot(filepath)</span></span></code></pre></div><p>然后把图片上传到 Minio 服务器：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">client </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Minio(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    endpoint,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    access_key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;MyPlAfOBM&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    secret_key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;4RLA4T1jz7cO1i&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    secure</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">False</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">client.fput_object(bucket, object_name, file_path, )</span></span></code></pre></div><p>我直接用知识节点的名字做 Minio 的文件夹名字，为了避免根目录文件夹太多，我用首字母先分了一层文件夹：</p><p><img src="`+o+'" alt="一级目录"></p><p>第二级目录放了知识节点文件夹：</p><p><img src="'+d+'" alt="二级目录"></p><p>最后放了两个分辨率的截图文件：</p><p><img src="'+c+`" alt="不同分辨率的文件"></p><div class="admonition note"><p class="admonition-title">Minio 权限设置</p><p>最后不要忘记给 Minio 设置权限哦，因为是本地用所以我把桶设置成个公共读。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">    &quot;Version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;2012-10-17&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">    &quot;Statement&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;Action&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">        &quot;s3:GetObject&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;Effect&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Allow&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;Principal&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">        &quot;AWS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;Resource&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">        &quot;arn:aws:s3:::knowledge-graph/*&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;Sid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div></div><p>如果知识节点维护了主页，那么把主页的截图保存然后显示在详情里面：</p><p><img src="`+g+'" alt="单个详情预览"></p><p>多个知识节点带着图片的预览： <img src="'+A+'" alt="多个知识节点详情预览"></p><h2 id="编辑" tabindex="-1">编辑 <a class="header-anchor" href="#编辑" aria-label="Permalink to &quot;编辑&quot;">​</a></h2><p>同时还在详情标题的右边加了个编辑按钮，方便快速编辑：</p><p>点击弹窗可以进行快速的修改：</p><p><img src="'+m+'" alt="修改按钮"></p><p>修改的弹窗和新增的表单一样： <img src="'+y+'" alt="点击节点快速编辑"></p><h2 id="更多布局" tabindex="-1">更多布局 <a class="header-anchor" href="#更多布局" aria-label="Permalink to &quot;更多布局&quot;">​</a></h2><p>最后看到框架作者的 Example 里面有一个 tree 布局的，我们也跟着实现一下。</p><p>不过由于数据问题，显示出来比较杂乱。</p><p><img src="'+D+'" alt="树视图"></p><p><img src="'+u+'" alt="树视图"></p><p>换另外一组数据效果明显一些： <img src="'+C+'" alt="LLM Tree布局"></p><p>在仅查看文本和仅查看节点的时候，有不同的视觉效果哦。</p><p>仅查看文本，：</p><p><img src="'+_+'" alt="仅查看节点"></p><p>查看节点：</p><p><img src="'+B+'" alt="查看节点"></p><p>最后看个布局切换的视频。</p>',46)]))}const M=i(q,[["render",E]]);export{S as __pageData,M as default};
