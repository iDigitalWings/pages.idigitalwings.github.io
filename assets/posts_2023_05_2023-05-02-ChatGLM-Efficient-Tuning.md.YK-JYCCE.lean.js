import{_ as i,a,af as t,o as n}from"./chunks/framework.C87LdZyP.js";const e="/assets/722068370867541.K-2ymvY6.png",h="/assets/722827467228541.CNvDx-fe.png",l="/assets/723028654161083.DMwipNmr.png",p="/assets/723240767651708.D427Lat5.png",k="/assets/723491864896041.C-9HosgG.png",d="/assets/724253383106708.CR7G9jFd.png",r="/assets/725440269121833.CoI-UD4j.png",o="/assets/725634728671500.D_3mYbxK.png",c="/assets/724318719430583.BGZto0ou.png",g="/assets/724629939050583.CdNGITX5.png",D=JSON.parse('{"title":"手把手带你 5 分钟微调一个自己的 ChatGLM2-6B 模型","description":"","frontmatter":{"title":"手把手带你 5 分钟微调一个自己的 ChatGLM2-6B 模型","date":"2023-05-02T00:00:00.000Z","tags":["ai","ml"],"category":["AI"]},"headers":[],"relativePath":"posts/2023/05/2023-05-02-ChatGLM-Efficient-Tuning.md","filePath":"posts/2023/05/2023-05-02-ChatGLM-Efficient-Tuning.md","lastUpdated":1718173059000}'),F={name:"posts/2023/05/2023-05-02-ChatGLM-Efficient-Tuning.md"};function C(y,s,u,m,b,_){return n(),a("div",null,s[0]||(s[0]=[t(`<blockquote><p>今天带大家微微调一下 ChatGLM2-6B，修改小部分的数据集，改变模型的自我认知， 如果大家网络和 GPU 比较富裕，几分钟就可以完成微调和输出模型过程。</p></blockquote><h2 id="chatglm2-6b-介绍" tabindex="-1">ChatGLM2 6B 介绍 <a class="header-anchor" href="#chatglm2-6b-介绍" aria-label="Permalink to &quot;ChatGLM2 6B 介绍&quot;">​</a></h2><p>ChatGLM2-6B 是开源中英双语对话模型 ChatGLM-6B 的第二代版本，在保留了初代模型对话流畅、部署门槛较低等众多优秀特性的基础之上，ChatGLM2-6B 引入了如下新特性：</p><ul><li><code>更强大的性能</code>：基于 ChatGLM 初代模型的开发经验，我们全面升级了 ChatGLM2-6B 的基座模型。ChatGLM2-6B 使用了 GLM 的混合目标函数，经过了 1.4T 中英标识符的预训练与人类偏好对齐训练，评测结果显示，相比于初代模型，ChatGLM2-6B 在 **MMLU（+23%）、CEval（+33%）、GSM8K（+571%） 、BBH（+60%）**等数据集上的性能取得了大幅度的提升，在同尺寸开源模型中具有较强的竞争力。</li><li><code>更长的上下文</code>：基于 FlashAttention 技术，我们将基座模型的上下文长度（Context Length）由 <strong>ChatGLM-6B 的 2K 扩展到了 32K</strong>，并在对话阶段使用 8K 的上下文长度训练，允许更多轮次的对话。但当前版本的 ChatGLM2-6B 对单轮超长文档的理解能力有限，我们会在后续迭代升级中着重进行优化。</li><li><code>更高效的推理</code>：基于 Multi-Query Attention 技术，ChatGLM2-6B 有更高效的推理速度和更低的显存占用：在官方的模型实现下，<strong>推理速度相比初代提升了 42%</strong>，INT4 量化下，6G 显存支持的对话长度由 1K 提升到了 8K。</li><li><code>更开放的协议</code>：ChatGLM2-6B 权重对学术研究完全开放，在填写问卷进行登记后亦允许<strong>免费商业使用</strong>。</li></ul><h2 id="硬件环境" tabindex="-1">硬件环境 <a class="header-anchor" href="#硬件环境" aria-label="Permalink to &quot;硬件环境&quot;">​</a></h2><p>我这里使用了阿里云的 GPU 服务器：</p><ul><li>12核(vCPU) 92 GiB</li><li>NVIDIA V100</li></ul><h2 id="nvidia-驱动" tabindex="-1">Nvidia 驱动 <a class="header-anchor" href="#nvidia-驱动" aria-label="Permalink to &quot;Nvidia 驱动&quot;">​</a></h2><p>阿里云服务器可能没有安装驱动（取决于你选的镜像）。</p><p>可以用<code>nvidia-smi</code>命令测试一下。</p><p>安装驱动：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> nvidia-utils-510-server</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -y</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> nvidia-driver-525</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> nvidia-dkms-525</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -y</span></span></code></pre></div><p>检查驱动：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">nvidia-smi</span></span></code></pre></div><p>看到如下输出即可：</p><p><img src="`+e+`" alt=""></p><h2 id="python-环境" tabindex="-1">Python 环境 <a class="header-anchor" href="#python-环境" aria-label="Permalink to &quot;Python 环境&quot;">​</a></h2><p>环境运行环境首选 conda，也是我最喜欢的 Python 包管理器。</p><p>创建一个 conda 环境，名称为 <code>chatglm_etuning</code>：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> chatglm_etuning</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> python=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3.10</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> activate</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> chatglm_etuning</span></span></code></pre></div><h2 id="代码下载" tabindex="-1">代码下载 <a class="header-anchor" href="#代码下载" aria-label="Permalink to &quot;代码下载&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://github.com/hiyouga/ChatGLM-Efficient-Tuning.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ChatGLM-Efficient-Tuning</span></span></code></pre></div><h2 id="依赖安装" tabindex="-1">依赖安装 <a class="header-anchor" href="#依赖安装" aria-label="Permalink to &quot;依赖安装&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> requirements.txt</span></span></code></pre></div><p>使用 Python 代码 测试 PyTorch：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> torch</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">torch.cuda.get_device_name()</span></span></code></pre></div><p><img src="`+h+'" alt=""></p><h2 id="下载模型" tabindex="-1">下载模型 <a class="header-anchor" href="#下载模型" aria-label="Permalink to &quot;下载模型&quot;">​</a></h2><p><strong>如果您的网络良好，可以跳过该步骤</strong>，直接在运行程序的时候从 HuggingFace Hub 上下载。</p><p>下载地址为：</p><ul><li><a href="https://huggingface.co/THUDM/chatglm2-6b/tree/main" target="_blank" rel="noreferrer">https://huggingface.co/THUDM/chatglm2-6b/tree/main</a></li></ul><p>ChatGLM2 6B 有大约十几个G 的模型文件：</p><p><img src="'+l+'" alt=""></p><p>下载好的模型放置到任意目录。</p><h2 id="测试原始模型" tabindex="-1">测试原始模型 <a class="header-anchor" href="#测试原始模型" aria-label="Permalink to &quot;测试原始模型&quot;">​</a></h2><p>执行如下代码测试原始模型：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> src/cli_demo.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --model_name_or_path</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> THUDM/chatglm2-6b</span></span></code></pre></div><p>如果网络不好，你也可以下载好模型然后指定模型位置，比如：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> src/cli_demo.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --model_name_or_path</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ~/.cache/huggingface/hub/models--THUDM--chatglm2-6b/snapshots/0ecfe0b857efd00836a4851b3dd2ed04bd4b197f</span></span></code></pre></div><p><img src="'+p+'" alt=""></p><h3 id="准备数据集" tabindex="-1">准备数据集 <a class="header-anchor" href="#准备数据集" aria-label="Permalink to &quot;准备数据集&quot;">​</a></h3><p>我们这次训练知识简单做一下 demo，所以不进行大量数据的训练，只使用他原有的文件调整下认知即可。</p><p>修改训练数据 <code>data/self_cognition.json</code>：</p><p><img src="'+k+`" alt=""></p><h2 id="训练" tabindex="-1">训练 <a class="header-anchor" href="#训练" aria-label="Permalink to &quot;训练&quot;">​</a></h2><h3 id="命令行" tabindex="-1">命令行 <a class="header-anchor" href="#命令行" aria-label="Permalink to &quot;命令行&quot;">​</a></h3><p>我们现在执行训练脚本来训练程序</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">CUDA_VISIBLE_DEVICES</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">0</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> python</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> src/train_bash.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --stage</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> sft</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --model_name_or_path</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> THUDM/chatglm2-6b</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --do_train</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --dataset</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> self_cognition</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --finetuning_type</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> lora</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --output_dir</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> path_to_sft_checkpoint</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --per_device_train_batch_size</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 4</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --gradient_accumulation_steps</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 4</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --lr_scheduler_type</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> cosine</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --logging_steps</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 10</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --save_steps</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1000</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --learning_rate</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 1e-3</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --num_train_epochs</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 20.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --fp16</span></span></code></pre></div><p>不到一分钟我们就能看到训练结束了：</p><p><img src="`+d+'" alt=""></p><h3 id="web-ui-训练" tabindex="-1">Web UI 训练 <a class="header-anchor" href="#web-ui-训练" aria-label="Permalink to &quot;Web UI 训练&quot;">​</a></h3><p>当然我们也可以使用 Web UI 来执行训练命令：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> src/train_web.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --listen</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --share</span></span></code></pre></div><p>看到界面：</p><p><img src="'+r+'" alt=""></p><p>设置参数，然后点击开始训练：</p><p>我们可以在 UI 上看到日志：</p><p><img src="'+o+`" alt=""></p><h3 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to &quot;测试&quot;">​</a></h3><p>训练结束，测试下我们的训练结果：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> src/cli_demo.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --model_name_or_path</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> THUDM/chatglm2-6b</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --checkpoint_dir</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> path_to_sft_checkpoint</span></span></code></pre></div><p>可以看到我们的训练数据已经对模型产生了影响：</p><p><img src="`+c+`" alt=""></p><h3 id="导出微调模型" tabindex="-1">导出微调模型 <a class="header-anchor" href="#导出微调模型" aria-label="Permalink to &quot;导出微调模型&quot;">​</a></h3><p>目前为止，我们还只是 LoRA 模型，需要和原始模型一起才能使用。</p><p>现在我们把模型合并：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> src/export_model.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --model_name_or_path</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> THUDM/chatglm2-6b</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --checkpoint_dir</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> path_to_sft_checkpoint</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --output_dir</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> path_to_export</span></span></code></pre></div><p>使用默认的配置，看到运行成功。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[INFO</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">tokenization_utils_base.py:2194]  19:18:12,144 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> tokenizer config file saved in path_to_export/tokenizer_config.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[INFO</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">tokenization_utils_base.py:2201]  19:18:12,144 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Special tokens file saved in path_to_export/special_tokens_map.json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">model</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> tokenizer</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> have</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> been</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> saved</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> at:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> path_to_export</span></span></code></pre></div><p>查看下模型文件：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">ll</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> path_to_export/</span></span></code></pre></div><p><img src="`+g+'" alt=""></p><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>',74)]))}const B=i(F,[["render",C]]);export{D as __pageData,B as default};
