import{_ as i,a,af as n,o as t}from"./chunks/framework.C87LdZyP.js";const h="/assets/2627055602732833.C1EUp4zh.png",l="/assets/2627107121052041.DLWkgUt_.png",p="/assets/2632795076854583.Ov_olIVu.png",k="/assets/2625279593373875.ftab_xfL.png",e="/assets/2623516513153416.DlHpAdV5.png",r="/assets/2625640872491291.Byl6nokb.png",d="/assets/2623707373365125.CZYBLHRv.png",g="/assets/2625900375912791.t2w0rHQU.png",o="/assets/2626733109732750.BKjEMq_J.png",F="/assets/2626807345169583.fsgDLZPk.png",y="/assets/2628166904103083.CNHalf2H.png",c="/assets/2628475197755250.BMXohaux.png",A="/assets/2628522563175708.Cl0wXH61.png",D="/assets/2628585696817916.BKzp-5A_.png",C="/assets/2628689131283125.DrT0icvH.png",u="/assets/2628969218913041.CCU33Wnl.png",m="/assets/2629064518358041.DGCKmIj3.png",E="/assets/2629543328750000.BXgHl9VF.png",B="/assets/2629956256739250.PL2ajnH5.png",b="/assets/2629665368194250.kf_HvGDQ.png",_="/assets/2631921049732083.ySeaMnsY.png",L=JSON.parse('{"title":"Streamlit+分类器分析『国外网友怎么看待苹果15发布会』","description":"","frontmatter":{"title":"Streamlit+分类器分析『国外网友怎么看待苹果15发布会』","date":"2023-07-07T00:00:00.000Z","tags":["ai","ml"],"category":["AI"]},"headers":[],"relativePath":"posts/2023/07/2023-07-07-streamlit-classfication.md","filePath":"posts/2023/07/2023-07-07-streamlit-classfication.md","lastUpdated":1718173059000}'),q={name:"posts/2023/07/2023-07-07-streamlit-classfication.md"};function f(v,s,x,P,I,w){return t(),a("div",null,s[0]||(s[0]=[n('<blockquote><p>本文使用 Streamlit 和分类器实现了一个应用程序完成无样本分类，看看 Twitter 网友的评论怎么看待苹果你品发布。</p></blockquote><p>苹果 15 发布会前段时间刚开完，国外的网友如何看呢，我们今天写一个程序看看国外的网友是个什么态度。</p><p>先看结果：</p><p><img src="'+h+'" alt="苹果15发布会  Twitter 评论分析"></p><p><img src="'+l+'" alt="苹果15发布会  Twitter 评论分析"></p><p><img src="'+p+'" alt=""></p><p>这个分类器App 之前写好的，根据官方一个教程来的，源码文末分享给大家。</p><h2 id="分类器" tabindex="-1">分类器 <a class="header-anchor" href="#分类器" aria-label="Permalink to &quot;分类器&quot;">​</a></h2><blockquote><p>分类器是一种常见的机器学习算法，用于将输入数据分为两个或多个类别。常见的分类器有逻辑回归、支持向量机、决策树、随机森林等。</p></blockquote><p><img src="'+k+'" alt="分类器示例"></p><p>今天我们这个程序来对语义进行分类，也就是把我们给出的一句话，分类给指定的关键词。</p><p>比如：<code>你真是个小可爱</code>，我们来判断他是积极的、消极的、还是开心还是愤怒。</p><h2 id="分类数据" tabindex="-1">分类数据 <a class="header-anchor" href="#分类数据" aria-label="Permalink to &quot;分类数据&quot;">​</a></h2><p>我们抓去一些国外苹果微博的网友评论来作为分类数据。</p><p>在苹果的置顶帖子（由于没看发布会，这个动画我还是第一次看，是一个📱撞地球的视频）</p><p><img src="'+e+'" alt="苹果手机撞地球的官方置顶帖子"></p><p>下面找一些网友们的评论，</p><p><img src="'+r+'" alt="国外网友评论"></p><p>抓去前面几十条数据：</p><p><img src="'+d+'" alt="获取的评论数据"></p><p>好了，数据集有了，接下来实现我们的分类器。</p><h2 id="分类器-1" tabindex="-1">分类器 <a class="header-anchor" href="#分类器-1" aria-label="Permalink to &quot;分类器&quot;">​</a></h2><p>分类器我们直接使用 HuggingFace 的 API， 使用 <a href="https://huggingface.co/valhalla/distilbart-mnli-12-9" target="_blank" rel="noreferrer">valhalla/distilbart-mnli-12-9</a> 这个模型。</p><p><img src="'+g+'" alt="HuggingFace valhalla/distilbart-mnli-12-9"></p><p>这是在 Meta 的 <a href="https://huggingface.co/facebook/bart-large-mnli" target="_blank" rel="noreferrer">facebook/bart-large-mnli</a> 之上微调实现的，主要进行零样本文本分类。</p><h4 id="基于-nli-的零样本文本分类" tabindex="-1">基于 NLI 的零样本文本分类 <a class="header-anchor" href="#基于-nli-的零样本文本分类" aria-label="Permalink to &quot;基于 NLI 的零样本文本分类&quot;">​</a></h4><blockquote><p>一种使用预训练的 NLI 模型作为现成的零样本序列分类器的方法。该方法的工作原理是将要分类的序列作为 NLI 前提，并根据每个候选标签构建假设。</p></blockquote><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><h3 id="ui-实现" tabindex="-1">UI 实现 <a class="header-anchor" href="#ui-实现" aria-label="Permalink to &quot;UI 实现&quot;">​</a></h3><p>界面很简单，我们就不画原型了，直接看效果来讲：</p><p><img src="'+o+'" alt="少量数据分析深色"></p><p><img src="'+F+'" alt="少量数据分析浅色"></p><p>整个界面左右两份：</p><p><img src="'+y+`" alt="得了，还是画个原型图吧"></p><h3 id="标题" tabindex="-1">标题 <a class="header-anchor" href="#标题" aria-label="Permalink to &quot;标题&quot;">​</a></h3><p>这里我们放了图片和标题文本：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">c1, c2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> st.columns([</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0.4</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">with</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> c1:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    st.image(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;assets/logo.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, )</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">with</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> c2:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    st.caption(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div><h3 id="定义样例数据" tabindex="-1">定义样例数据 <a class="header-anchor" href="#定义样例数据" aria-label="Permalink to &quot;定义样例数据&quot;">​</a></h3><p>我们使用数组定义样例数据，这样方便后面测试（当然可以直接在 UI 上输入）：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">chatlist:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> list[list[str]]</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  [</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,]</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  [</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,]</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  [</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,]</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span></code></pre></div><p>比如这样：</p><p><img src="`+c+'" alt="样例数据集"></p><p>当然少不了我们的主角，网友们的评论：</p><p><img src="'+A+`" alt="网友评论样例数据集"></p><h3 id="选择框" tabindex="-1">选择框 <a class="header-anchor" href="#选择框" aria-label="Permalink to &quot;选择框&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">option</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> st.selectbox</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">&#39;选择样例数据&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [x[0] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">in</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> chatlist</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">], key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;option2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">selected</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> list</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">filter(lambda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> x:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> x[0]</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> option,</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> chatlist</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">))</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">selected</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> selected[0]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">template</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;\\n&#39;.join</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">selected</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div><p><img src="`+D+'" alt="选择样例数据集"></p><h3 id="huggingface-api-key" tabindex="-1">HuggingFace API Key <a class="header-anchor" href="#huggingface-api-key" aria-label="Permalink to &quot;HuggingFace API Key&quot;">​</a></h3><p>前面提到使用 HuggingFace 的 API，我们建一个输入框：</p><p><img src="'+C+`" alt="使用密码输入框输入 API KEY"></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">API_KEY2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> st.text_input(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    &quot;输入你的 🤗 HuggingFace API 令牌&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    help</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;创建 HuggiginFace 帐户后，您可以在设置页面中获取免费的 API 令牌：: https://huggingface.co/settings/tokens&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;password&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">os.getenv(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;HF_API_KEY&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">API_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;https://api-inference.huggingface.co/models/valhalla/distilbart-mnli-12-9&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div><h3 id="本地运行模型" tabindex="-1">本地运行模型 <a class="header-anchor" href="#本地运行模型" aria-label="Permalink to &quot;本地运行模型&quot;">​</a></h3><p>如果大家不想用 API，也可以本地运行模型：(使用 API 则不需要这步)</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> transformers </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> pipeline</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">classifier </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> pipeline(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  &quot;zero-shot-classification&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">  model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;facebook/bart-large-mnli&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">sequence_to_classify </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;one day I will see the world&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">candidate_labels </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;travel&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;cooking&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;dancing&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">classifier(sequence_to_classify, candidate_labels)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#{&#39;labels&#39;: [&#39;travel&#39;, &#39;dancing&#39;, &#39;cooking&#39;],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># &#39;scores&#39;: [0.9938651323318481, 0.0032737774308770895, 0.002861034357920289],</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># &#39;sequence&#39;: &#39;one day I will see the world&#39;}</span></span></code></pre></div><p>更多用法可参考<a href="https://huggingface.co/facebook/bart-large-mnli" target="_blank" rel="noreferrer">模型主页</a>。</p><h3 id="分类词输入选择" tabindex="-1">分类词输入选择 <a class="header-anchor" href="#分类词输入选择" aria-label="Permalink to &quot;分类词输入选择&quot;">​</a></h3><p><code>st_tags</code> 来实现一个多选提示输入框。</p><p><img src="`+u+`" alt=""></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">multiselectComponent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> st_tags(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;输入分类词：&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Add labels - 6 max&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Positive&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Negative&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Neutral&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, ],</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    suggestions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Positive&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Negative&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Neutral&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,],</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    maxtags</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div><h3 id="输入框和提交" tabindex="-1">输入框和提交 <a class="header-anchor" href="#输入框和提交" aria-label="Permalink to &quot;输入框和提交&quot;">​</a></h3><p><img src="`+m+`" alt=""></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> st.text_area(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    height</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">submit_button </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> st.form_submit_button(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;提交&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;primary&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div><h3 id="分类判断" tabindex="-1">分类判断 <a class="header-anchor" href="#分类判断" aria-label="Permalink to &quot;分类判断&quot;">​</a></h3><p>接下来是重点，先实现一个调用 API 方法：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> query</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(payload):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    response </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> requests.post(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">API_URL</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">headers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">headers, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">json</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">payload)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> response.json()</span></span></code></pre></div><p>逐行调用接口，进行分类：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">listToAppend</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> []</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">in</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> linesList:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    output2</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> query</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">({</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">        &quot;inputs&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> row,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">        &quot;parameters&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> {&quot;candidate_labels&quot;:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> multiselectComponent},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">        &quot;options&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> {&quot;wait_for_model&quot;:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> True},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    })</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    import</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> copy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    jsonresoult</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> copy.deepcopy</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">output2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    jsonresoult</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> {&#39;sequence&#39;:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> output2[&#39;sequence&#39;]}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">i,</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> label</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) in enumerate(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">output2[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">&#39;labels&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">]</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">):</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">        jsonresoult[label]</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> output2[&#39;scores&#39;][i]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    listToAppend.append(jsonresoult</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    df</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> pd.DataFrame.from_dict</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">output2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">st.success(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">&quot;✅ Done!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div><blockquote><p>免费账户接口使用调用限制的，可以参考<a href="https://huggingface.co/docs/api-inference/faq#rate-limits" target="_blank" rel="noreferrer">HF FAQ 速率限制</a>，具体多少也没说，不过测试够用了。</p></blockquote><p><img src="`+E+'" alt=""></p><h3 id="输出结果" tabindex="-1">输出结果 <a class="header-anchor" href="#输出结果" aria-label="Permalink to &quot;输出结果&quot;">​</a></h3><p>首先打印下结果，当然别忘了<strong>用 mean 函数求平均数</strong>，一并打印出来。</p><p><img src="'+B+`" alt=""></p><p>整体看起来，网友消极情绪稍微多一点。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">st.write(df)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">st.write(df.mean(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">numeric_only</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">))</span></span></code></pre></div><p>接下来就是画图了，比如 LineArea 和 Bar：</p><p><img src="`+b+`" alt="消极是红色，积极是黄色"></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">col1, col2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> st.columns(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">with</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> col1:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    st.area_chart(df, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;句子&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">multiselectComponent, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">color</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">colors[:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">len</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(multiselectComponent)])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">with</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> col2:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    st.bar_chart(df, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;句子&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">multiselectComponent, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">color</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">colors[:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">len</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(multiselectComponent)])</span></span></code></pre></div><p>我比较喜欢气泡图，但是气泡图需要处理下数据：</p><ul><li>X 轴表示语句坐标</li><li>Y 轴表示得分</li><li>气泡大小也用得分表示</li></ul><p><img src="`+_+`" alt="消极的黄色居多"></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> plotly.express </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> px</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">fig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> px.scatter(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    df_bubble,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;index&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;score&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;score&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    color</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    log_x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    size_max</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">60</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    color_discrete_sequence</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">colors,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">st.plotly_chart(fig, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">theme</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;streamlit&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">use_container_width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div><h3 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h3><blockquote><p><a href="https://github.com/iDigitalWings/streamlit-classifier.git" target="_blank" rel="noreferrer">https://github.com/iDigitalWings/streamlit-classifier.git</a></p></blockquote>`,83)]))}const N=i(q,[["render",f]]);export{L as __pageData,N as default};
