import{_ as e,a,af as o,o as s}from"./chunks/framework.C87LdZyP.js";const t="/assets/history.Z7e5S2Ri.png",n="/assets/model_parameters.DZWNVFfd.png",l="/assets/carbon_footprint.Bc-gTqRI.svg",i="/assets/transformers.DaC1-ffI.svg",u=JSON.parse('{"title":"Transformer 机器学习简介","description":"","frontmatter":{"title":"Transformer 机器学习简介","date":"2023-02-24T00:00:00.000Z","tags":["ai","ml"],"category":["AI"]},"headers":[],"relativePath":"posts/2023/02/2023-02-24-transformer-intro.md","filePath":"posts/2023/02/2023-02-24-transformer-intro.md","lastUpdated":1718173059000}'),p={name:"posts/2023/02/2023-02-24-transformer-intro.md"};function f(m,r,T,c,h,d){return s(),a("div",null,r[0]||(r[0]=[o('<p>Transformers 是一种最先进的机器（深度）学习技术，适用于PyTorch，TensorFlow和JAX。</p><blockquote><p>GPT(Generative Pre-trained Transformer)是基于Transformer架构的一种自然语言处理模型，它使用Transformer架构来实现文本生成。</p></blockquote><p>🤗 Transformers 提供 API 和工具，可轻松下载和训练最先进的预训练模型。使用预训练模型可以降低计算成本、碳足迹，并节省从头开始训练模型所需的时间和资源。这些模型支持不同形式的常见任务，例如：</p><ul><li>📝 自然语言处理：文本分类、命名实体识别、问答、语言建模、摘要、翻译、多项选择和文本生成。</li><li>🖼️ 计算机视觉：图像分类、对象检测和分割。</li><li>🗣️ 音频：自动语音识别和音频分类。</li><li>🐙 多模式：表格问答、光学字符识别、扫描文档信息提取、视频分类、视觉问答。</li></ul><p>🤗 Transformers 支持PyTorch，TensorFlow和JAX之间的框架互操作性。 这提供了在模型生命周期的每个阶段使用不同框架的灵活性;在一个框架中用三行代码训练模型， 并在另一个框架中加载它以进行推理。模型还可以导出为ONNX和TorchScript等格式，以便在生产环境中部署。</p><h2 id="历史" tabindex="-1">历史 <a class="header-anchor" href="#历史" aria-label="Permalink to &quot;历史&quot;">​</a></h2><p><img src="'+t+'" alt="history.png"></p><p>Transformer 架构在 2017 年 6 月推出。最初研究的重点是翻译任务。随后引入了几个有影响力的模型，包括：</p><ul><li>2018 年 6 月：GPT，第一个预训练的Transformer模型，用于对各种 NLP 任务进行微调并获得最先进的结果</li><li>2018 年 6 月：BERT，另一个大型预训练模型，该模型旨在生成更好的句子摘要（下一章将对此进行更多介绍！</li><li>2019 年 2 月：GPT-&lt;&gt;，GPT 的改进（和更大）版本，由于道德问题而未立即公开发布</li><li>2019 年 6 月：DistilBERT，BERT 的升级版本，速度提高了 60%，内存重量减轻了 40%，并且仍然保留了 97% 的 BERT 性能</li><li>2019 年 5 月：BART 和 T5，两个大型预训练模型，使用与原始 Transformer 模型相同的架构（第一个这样做）</li><li>2020 年 3 月：GPT-3 ，比 GPT-2 更大的版本，能够在各种任务上表现出色，而无需微调（称为零镜头学习 zero-shot learning ）)</li></ul><p>上面只是重点介绍了不同类型的模型，实际 Transformer的模型远非如此。广义上讲，它们可以分为三类：</p><ul><li>类 GPT（也称为自回归Transformer模型）</li><li>类 BERT（也称为自动编码Transformer模型）</li><li>类 BART/T5（也称为序列到序列Transformer模型）</li></ul><h2 id="transformer-是语言模型" tabindex="-1">Transformer 是语言模型 <a class="header-anchor" href="#transformer-是语言模型" aria-label="Permalink to &quot;Transformer 是语言模型&quot;">​</a></h2><p>上面提到的所有Transformer模型（GPT，BERT，BART，T5等）都被训练为语言模型。 这意味着他们已经以自我监督的方式接受了大量原始文本的训练。自监督学习是一种训练类型， 其中目标从模型的输入自动计算。这意味着不需要人类来标记数据！</p><p>这种类型的模型可以发展对它所训练的语言的统计理解， 但它对于特定的实际任务不是很有用。因此，一般的预训练模型随后会经历一个称为迁移学习的过程。 在此过程中，模型以监督方式（即使用人工注释的标签）对给定任务进行微调。</p><h2 id="transformer-是大模型" tabindex="-1">Transformer 是大模型 <a class="header-anchor" href="#transformer-是大模型" aria-label="Permalink to &quot;Transformer 是大模型&quot;">​</a></h2><p>除了一些异常值（如DistilBERT）之外，实现更好性能的一般策略是增加模型的大小以及它们预先训练的数据量。</p><p><img src="'+n+'" alt="model_parameters.png"></p><p>不幸的是，训练模型，尤其是大型模型，需要大量数据。这在时间和计算资源方面变得非常昂贵。它甚至转化为环境影响，如下图所示。</p><p><img src="'+l+'" alt="carbon_footprint.svg"></p><h2 id="原始架构" tabindex="-1">原始架构 <a class="header-anchor" href="#原始架构" aria-label="Permalink to &quot;原始架构&quot;">​</a></h2><p>Transformer体系结构最初是为翻译而设计的。在训练期间，编码器接收特定语言的输入（句子），而解码器接收所需目标语言的相同句子。在编码器中，注意力层可以使用句子中的所有单词（因为，正如我们刚刚看到的，给定单词的翻译可能取决于句子中它之后和之前的内容）。但是，解码器按顺序工作，并且只能注意它已经翻译的句子中的单词（因此，只能注意当前正在生成的单词之前的单词）。例如，当我们预测翻译目标的前三个单词时，我们会将它们交给解码器，然后解码器使用编码器的所有输入来尝试预测第四个单词。</p><p>为了在训练期间加快速度（当模型可以访问目标句子时），解码器被馈送整个目标，但不允许使用未来的单词（如果它在尝试预测位置 2 的单词时可以访问位置 2 的单词，问题就不会很困难！例如，当尝试预测第四个单词时，注意力层将只能访问位置 1 到 3 的单词。</p><p>最初的 Transformer 架构看起来像这样，编码器在左边，解码器在右边：</p><p><img src="'+i+'" alt="transformers.svg"></p><p>请注意，解码器块中的第一个注意层关注解码器的所有（过去的）输入，但第二个注意层使用编码器的输出。因此，它可以访问整个输入句子以最好地预测当前单词。这非常有用，因为不同的语言可以有语法规则，将单词按不同的顺序排列，或者句子后面提供的一些上下文可能有助于确定给定单词的最佳翻译。</p><p>注意力掩码还可以在编码器/解码器中使用，以防止模型注意某些特殊单词 - 例如，在批处理句子时，用于使所有输入具有相同长度的特殊填充词。</p><h2 id="架构和检查点" tabindex="-1">架构和检查点 <a class="header-anchor" href="#架构和检查点" aria-label="Permalink to &quot;架构和检查点&quot;">​</a></h2><p>当我们在本课程中深入研究Transformer模型时，您将看到体系结构和检查点以及模型的提及。这些术语的含义都略有不同：</p><ul><li>架构：这是模型的骨架 — 模型内发生的每一层和每个操作的定义。</li><li>检查点：这些是将在给定体系结构中加载的权重。</li><li>模型：这是一个总括性术语，不如“架构”或“检查点”精确：它可以同时表示两者。本课程将在重要时指定架构或检查点，以减少歧义。</li></ul><p>例如，BERT是一个架构，而谷歌团队为BERT的第一个版本训练的一组权重是一个检查点。但是，可以说“BERT模型”和“模型”。</p><hr><ul><li><a href="https://huggingface.co/docs/transformers/index" target="_blank" rel="noreferrer">Transformer介绍</a></li><li><a href="https://huggingface.co/course/chapter1/4" target="_blank" rel="noreferrer">Transformer的历史</a></li><li><a href="https://huggingface.co/docs/transformers/index#supported-models" target="_blank" rel="noreferrer">Transformer 支持的190个模型</a></li><li><a href="https://huggingface.co/docs/transformers/index#supported-frameworks" target="_blank" rel="noreferrer">Transformer支持的框架</a></li></ul>',32)]))}const _=e(p,[["render",f]]);export{u as __pageData,_ as default};
