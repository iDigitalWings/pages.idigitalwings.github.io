import{_ as i,a,af as t,o as n}from"./chunks/framework.C87LdZyP.js";const l="/assets/1309191467767791.ks7XxG9q.png",e="/assets/1309274008586666.DfGVgjrv.png",h="/assets/1306334226573666.BuKN-w-7.png",p="/assets/1307887032072375.snzhgxpG.png",k="/assets/1308234012180041.R2f91V06.png",d="/assets/1282621756112958.ExTIpSVV.png",D=JSON.parse('{"title":"教你使用开源 Hugging Chat 部署『生产级』私有 AI 聊天应用","description":"","frontmatter":{"title":"教你使用开源 Hugging Chat 部署『生产级』私有 AI 聊天应用","date":"2023-05-23T00:00:00.000Z","tags":["ai，ml"],"category":["AI"]},"headers":[],"relativePath":"posts/2023/05/2023-05-23-huggingface-chatui.md","filePath":"posts/2023/05/2023-05-23-huggingface-chatui.md","lastUpdated":1718175555000}'),r={name:"posts/2023/05/2023-05-23-huggingface-chatui.md"};function g(o,s,c,F,y,u){return n(),a("div",null,s[0]||(s[0]=[t('<blockquote><p>本文介绍了使用 HuggingFace 的一系列工具来搭建本地大语言模型的 AI 聊天应用。</p></blockquote><p>该方案就专注聊天，也是最常用的场景，比起其他开源项目的娱乐和玩具的成分来说，HuggingFace 的 Chat 质量可以说相当高了。</p><p>先看一下 UI：</p><p><img src="'+l+'" alt=""></p><p>当然还有黑色主题：</p><p><img src="'+e+'" alt=""></p><p>前后端分别有如下特点：</p><ul><li>聊天应用的前端 UI 使用 HuggingFace ChatUI， <ul><li>可开启授权</li><li>可存储对话记录（使用 Mongo）</li><li>可定制 UI</li></ul></li><li>后端使用 text-generation-inference <ul><li>可对接多种开源模型，Llama 2、Falcon 等</li><li>可容器运行</li><li>可定制</li></ul></li></ul><blockquote><p>下面主要讲的是本地运行方案，如果你觉得麻烦可以直接在 HuggingFace 上运行，一键搞定，文章最后一章我也会附上说明。</p></blockquote><h2 id="后端模型接口" tabindex="-1">后端模型接口 <a class="header-anchor" href="#后端模型接口" aria-label="Permalink to &quot;后端模型接口&quot;">​</a></h2><blockquote><p>同样的，你也可以用 HuggingFace Space 运行。</p></blockquote><p>我们使用 text-generation-inference 这个项目，自带 API、架构简单稳定，可用于生产。</p><p>项目地址：</p><p><a href="https://github.com/huggingface/text-generation-inference" target="_blank" rel="noreferrer">https://github.com/huggingface/text-generation-inference</a></p><p>项目架构：</p><p><img src="'+h+`" alt=""></p><h3 id="项目特点" tabindex="-1">项目特点 <a class="header-anchor" href="#项目特点" aria-label="Permalink to &quot;项目特点&quot;">​</a></h3><ul><li>通过简单的启动器提供最流行的大型语言模型</li><li>张量并行可在多个 GPU 上实现更快的推理</li><li>使用服务器发送事件 (SSE) 的令牌流</li><li>连续批处理传入请求以提高总吞吐量</li><li>在最流行的架构上使用flash-attention和Paged Attention进行推理的优化转换器代码</li><li>使用bitsandbytes和GPT-Q进行量化</li><li>Safetensors重量加载</li><li>使用大型语言模型的水印进行水印</li><li>Logits 扭曲器（温度缩放、top-p、top-k、重复惩罚，更多详细信息请参见Transformers.LogitsProcessor）</li><li>停止序列（生成过程中停止）</li><li>对数概率</li><li>生产就绪（使用开放遥测、Prometheus 指标进行分布式跟踪）</li></ul><h3 id="模型" tabindex="-1">模型 <a class="header-anchor" href="#模型" aria-label="Permalink to &quot;模型&quot;">​</a></h3><p>这是经过优化的架构，当然包含我们最爱的 Llama 2：</p><ul><li>BLOOM</li><li>FLAN-T5</li><li>Galactica</li><li>GPT-Neox</li><li>Llama</li><li>OPT</li><li>SantaCoder</li><li>Starcoder</li><li>Falcon 7B</li><li>Falcon 40B</li><li>MPT</li><li>Llama V2</li></ul><p>其他的模型你也可以试试：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">AutoModelForCausalLM.from_pretrained(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">device_map</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;auto&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 或者</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">AutoModelForSeq2SeqLM.from_pretrained(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">device_map</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;auto&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div><h3 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-label="Permalink to &quot;运行&quot;">​</a></h3><p>最简单当然是使用容器：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">tiiuae/falcon-7b-instruct</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">volume</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$PWD</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/data</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> # share a volume with the Docker container to avoid downloading weights every run</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --gpus</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> all</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --shm-size</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 1g</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 8080:80</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -v</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> $volume</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">:/data</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ghcr.io/huggingface/text-generation-inference:1.0.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --model-id</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> $model</span></span></code></pre></div><p>如果需要使用认证的模型（比如 Llama 2），需要配置 HF 的令牌：</p><ul><li>前往<a href="https://huggingface.co/settings/tokens" target="_blank" rel="noreferrer">https://huggingface.co/settings/tokens</a></li><li>复制您的 cli READ 令牌</li><li>配置变量 <code>HUGGING_FACE_HUB_TOKEN=&lt;your cli READ token&gt;</code></li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">meta-llama/Llama-2-7b-chat-hf</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">volume</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$PWD</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/data</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> # share a volume with the Docker container to avoid downloading weights every run</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">token</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">your</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> cli</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> READ</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> toke</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --gpus</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> all</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --shm-size</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 1g</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> HUGGING_FACE_HUB_TOKEN=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$token </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">-p</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 8080:80</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -v</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> $volume</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">:/data</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ghcr.io/huggingface/text-generation-inference:1.0.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --model-id</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> $model</span></span></code></pre></div><p>然后查看服务的参数：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">text-generation-launcher</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --help</span></span></code></pre></div><p>或者直接使用 <code>/generate</code> 或 <code>/generate_stream</code> 来查询：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">curl</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 127.0.0.1:8080/generate</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    -X</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> POST</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    -d</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;{&quot;inputs&quot;:&quot;What is Deep Learning?&quot;,&quot;parameters&quot;:{&quot;max_new_tokens&quot;:20}}&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    -H</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;Content-Type: application/json&#39;</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">curl</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 127.0.0.1:8080/generate_stream</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    -X</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> POST</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    -d</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;{&quot;inputs&quot;:&quot;What is Deep Learning?&quot;,&quot;parameters&quot;:{&quot;max_new_tokens&quot;:20}}&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    -H</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;Content-Type: application/json&#39;</span></span></code></pre></div><p>也可以在 Python 中调用接口：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> text-generation</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> text_generation </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Client</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">client </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Client(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;http://127.0.0.1:8080&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(client.generate(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;What is Deep Learning?&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">max_new_tokens</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">).generated_text)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> response </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> client.generate_stream(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;What is Deep Learning?&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">max_new_tokens</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> not</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> response.token.special:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> response.token.text</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(text)</span></span></code></pre></div><p>至此我们的后端就好了。</p><h2 id="chatui" tabindex="-1">ChatUI <a class="header-anchor" href="#chatui" aria-label="Permalink to &quot;ChatUI&quot;">​</a></h2><p>ChatUI 是一个 SvelteKit 应用程序，专门为 HuggingChat 应用程序提供支持。 我们刚刚运行的 text-generation-inference 就可以 很好地和 ChatUI 配合。</p><p>项目地址是：</p><ul><li><a href="https://github.com/huggingface/chat-ui" target="_blank" rel="noreferrer">https://github.com/huggingface/chat-ui</a></li></ul><p>首先克隆项目：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://github.com/huggingface/chat-ui.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> chat-ui</span></span></code></pre></div><p>ChatUI 需要一个 MongoDB 数据库来存储<strong>聊天历史记录</strong>.</p><p>我们先本地部署一个 MongoDB 实例。当然还是用 docker 启动它：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 27017:27017</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> mongo-chatui</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> mongo:latest</span></span></code></pre></div><p>本地运行的话，数据库 URL 如下，把它配置到 <code>.env</code> 文件里：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">MONGODB_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">mongodb://localhost:27017</span></span></code></pre></div><p>然后安装依赖，运行：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> dev</span></span></code></pre></div><p><img src="`+p+`" alt=""></p><p>如果要部署的话，把打包好的文件不是到 web 服务器上即可：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> build</span></span></code></pre></div><h3 id="openid" tabindex="-1">OpenID <a class="header-anchor" href="#openid" aria-label="Permalink to &quot;OpenID&quot;">​</a></h3><p>ChatUI 的能力不止如此，你还可以配置 OpenID 来实现单点登录，从而进行用户管理，比如集成你自己公司的 OA。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">OPENID_PROVIDER_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">your</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> OIDC</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> issue</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">r</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">OPENID_CLIENT_ID</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">your</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> OIDC</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> client</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> I</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">D</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">OPENID_CLIENT_SECRET</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">your</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> OIDC</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> client</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> secre</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span></span></code></pre></div><h3 id="外观" tabindex="-1">外观 <a class="header-anchor" href="#外观" aria-label="Permalink to &quot;外观&quot;">​</a></h3><p>你还可以定义应用名称和外观：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">PUBLIC_APP_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">ChatUI</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">PUBLIC_APP_ASSETS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">chatui</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">PUBLIC_APP_COLOR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">blue</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">PUBLIC_APP_DATA_SHARING</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">PUBLIC_APP_DISCLAIMER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span></span></code></pre></div><h3 id="网络搜索" tabindex="-1">网络搜索 <a class="header-anchor" href="#网络搜索" aria-label="Permalink to &quot;网络搜索&quot;">​</a></h3><p>当然最牛的还是这个，他集成了搜索，当然这个网络搜搜是要对应的服务 Key（虽然不便宜但是有一定免费限额）。</p><p>支持 <code>serper.dev</code> 和 <code>serpapi.com</code>：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># serper.dev</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">SERPER_API_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># serpapi.com</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">SERPAPI_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span></span></code></pre></div><p>这样你就可以在聊天的时候开启网络自定义搜索：</p><p><img src="`+k+'" alt=""></p><h2 id="在线部署" tabindex="-1">在线部署 <a class="header-anchor" href="#在线部署" aria-label="Permalink to &quot;在线部署&quot;">​</a></h2><p>Hugging Chat是一个开源接口，使每个人都可以尝试 Falcon、StarCoder 和 BLOOM 等开源大型语言模型。</p><p>当然您也可以借助 ChatUI 的官方 Docker 模板， 使用 Hugging Face 的基础设施，选择模型快速部署部署自己的 Hugging Chat。</p><p>在下面网址快速创建。</p><p><a href="https://huggingface.co/new-space?template=huggingchat/chat-ui-template" target="_blank" rel="noreferrer">https://huggingface.co/new-space?template=huggingchat/chat-ui-template</a></p><p><img src="'+d+'" alt=""></p><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>',74)]))}const A=i(r,[["render",g]]);export{D as __pageData,A as default};
