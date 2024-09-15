import{_ as a,a as e,af as r,o}from"./chunks/framework.C87LdZyP.js";const d="/assets/972056857117416.BwG_UM_P.png",g=JSON.parse('{"title":"HF开源大型语言模型（LLM）排行榜 2023-06-12","description":"","frontmatter":{"title":"HF开源大型语言模型（LLM）排行榜 2023-06-12","date":"2023-03-30T00:00:00.000Z","tags":["ai","ml"],"category":["AI"]},"headers":[],"relativePath":"posts/2023/03/2023-03-30-chatbot-leaderboard-20230612.md","filePath":"posts/2023/03/2023-03-30-chatbot-leaderboard-20230612.md","lastUpdated":1718173059000}'),l={name:"posts/2023/03/2023-03-30-chatbot-leaderboard-20230612.md"};function n(h,t,s,i,p,c){return o(),e("div",null,t[0]||(t[0]=[r('<blockquote><p>HuggingFace 的开源大型语言模型（LLM）排行榜前几天更新了新内容，增加了 人工和 GPT4 的打分。</p></blockquote><h2 id="评估方法" tabindex="-1">评估方法 <a class="header-anchor" href="#评估方法" aria-label="Permalink to &quot;评估方法&quot;">​</a></h2><p>评估是通过让人类和 GPT-4 在一组秘密指令提示上比较来自一组流行的开源语言模型 (LLM) 的完成来进行的。 提示涵盖头脑风暴、创意生成、常识推理、开放式问答、总结和代码生成等任务。 比较是由人类和模型在 1-8 的李克特量表上进行的，其中标记者每次都需要选择一个偏好。 使用这些偏好，我们创建自举的 Elo 排名。</p><p>与 <strong>Scale AI</strong> 合作，按照上面的标签说明，在他们的平台上使用专业的数据标签工作人员生成补全。 为了了解流行模型的评估，我们还让 GPT-4 使用此提示标记补全。</p><h2 id="结果" tabindex="-1">结果 <a class="header-anchor" href="#结果" aria-label="Permalink to &quot;结果&quot;">​</a></h2><h3 id="排名" tabindex="-1">排名 <a class="header-anchor" href="#排名" aria-label="Permalink to &quot;排名&quot;">​</a></h3><p>不计算平局的结果:</p><table tabindex="0"><thead><tr><th><strong>Model</strong></th><th><strong>GPT-4 (all)</strong></th><th><strong>Human (all)</strong></th></tr></thead><tbody><tr><td><a href="https://huggingface.co/lmsys/vicuna-13b-delta-v1.1" target="_blank" rel="noreferrer">vicuna-13b</a></td><td>1146</td><td>1237</td></tr><tr><td><a href="https://huggingface.co/TheBloke/koala-13B-HF" target="_blank" rel="noreferrer">koala-13b</a></td><td>1013</td><td>1085</td></tr><tr><td><a href="https://huggingface.co/OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5" target="_blank" rel="noreferrer">oasst-12b</a></td><td>985</td><td>975</td></tr><tr><td><a href="https://huggingface.co/databricks/dolly-v2-12b" target="_blank" rel="noreferrer">dolly-12b</a></td><td>854</td><td>701</td></tr></tbody></table><p>不计算平局的结果:</p><table tabindex="0"><thead><tr><th><strong>Model</strong></th><th><strong>GPT-4 (all)</strong></th><th><strong>Human (all)</strong></th></tr></thead><tbody><tr><td><a href="https://huggingface.co/lmsys/vicuna-13b-delta-v1.1" target="_blank" rel="noreferrer">vicuna-13b</a></td><td>1161</td><td>1175</td></tr><tr><td><a href="https://huggingface.co/OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5" target="_blank" rel="noreferrer">oasst-12b</a></td><td>1033</td><td>1004</td></tr><tr><td><a href="https://huggingface.co/TheBloke/koala-13B-HF" target="_blank" rel="noreferrer">koala-13b</a></td><td>977</td><td>1037</td></tr><tr><td><a href="https://huggingface.co/databricks/dolly-v2-12b" target="_blank" rel="noreferrer">dolly-12b</a></td><td>827</td><td>782</td></tr></tbody></table><p><img src="'+d+'" alt="不同模型竞赛的次数"></p><h2 id="gpt-4评估示例" tabindex="-1">GPT-4评估示例 <a class="header-anchor" href="#gpt-4评估示例" aria-label="Permalink to &quot;GPT-4评估示例&quot;">​</a></h2><p>这里是几个 GPT-4 的评估示例，让你来评你会和 GPT-4 给出一样的结果么？</p><h3 id="问题-指出这本书所属的类型。-n-输入-霍乱时期的爱情。" tabindex="-1">问题： 指出这本书所属的类型。\\n 输入：霍乱时期的爱情。 <a class="header-anchor" href="#问题-指出这本书所属的类型。-n-输入-霍乱时期的爱情。" aria-label="Permalink to &quot;问题： 指出这本书所属的类型。\\n 输入：霍乱时期的爱情。&quot;">​</a></h3><h4 id="模型回答-koala" tabindex="-1">模型回答（koala）： <a class="header-anchor" href="#模型回答-koala" aria-label="Permalink to &quot;模型回答（koala）：&quot;">​</a></h4><p>《霍乱时期的爱情》类型是魔幻现实主义和历史小说元素相结合的言情小说。 讲述了费尔明纳·达萨和弗洛伦蒂诺·阿里萨两个深爱着她却因种种原因无法在一起的男人的故事。 在他们的一生中，他们遇到了阻止他们团聚的障碍，包括战争、疾病和社会压力。 然而，他们对彼此的爱从未消退，他们继续抱有希望，希望有一天他们能再次在一起。 这种浪漫元素与历史脉络的结合，使得本书属于魔幻现实主义和历史虚构元素的言情小说。</p><h4 id="人类回答" tabindex="-1">人类回答： <a class="header-anchor" href="#人类回答" aria-label="Permalink to &quot;人类回答：&quot;">​</a></h4><p>小说</p><h4 id="gpt-4-评分-1-模型更好" tabindex="-1">GPT-4 评分：1（模型更好） <a class="header-anchor" href="#gpt-4-评分-1-模型更好" aria-label="Permalink to &quot;GPT-4 评分：1（模型更好）&quot;">​</a></h4><p>助理1提供了更详细和准确的答案， 讨论了小说中出现的浪漫、魔幻现实主义和历史小说的元素。 助理 2 的回答过于简短，没有提供有关该书类型的足够信息。</p><h3 id="问题" tabindex="-1">问题： <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题：&quot;">​</a></h3><p>写一篇 LinkedIn 帖子，宣布您已接受新的工作机会。\\n 输入：</p><h4 id="模型回答-koala-1" tabindex="-1">模型回答（koala）： <a class="header-anchor" href="#模型回答-koala-1" aria-label="Permalink to &quot;模型回答（koala）：&quot;">​</a></h4><p>振奋人心的消息！我很高兴地宣布，我已经正式接受了一个激动人心的新工作机会， 作为 [公司名称] 的 [职位名称]。这个角色将使我能够利用我在 [行业/专业领域] 的技能和经验， 同时也为个人和专业发展提供机会。我想借此机会向在整个招聘过程中支持我的每个人表示感谢， 包括[前雇主姓名或提供指导/建议/参考的个人]。您的支持对我来说意味着整个世界，我对您的帮助感激不尽。</p><p>我对未来感到兴奋，迫不及待地想加入 [Company Name] 的团队。再次感谢大家的支持！</p><h4 id="人类回答-1" tabindex="-1">人类回答： <a class="header-anchor" href="#人类回答-1" aria-label="Permalink to &quot;人类回答：&quot;">​</a></h4><p>我很高兴能与您分享我接受 XYZ 公司营销总监一职的决定！</p><p>如果不是我的朋友 [姓名] 和我分享了这份工作机会，还有我的前任老板 [老板的名字] 的大力推荐和指导，我不可能有这个机会。</p><p>我很高兴地期待着开始这段新的旅程，并与我的新家人——XYZ 公司的营销摇滚明星一起在专业上成长。</p><h4 id="gpt-4-评分-6-模型更好" tabindex="-1">GPT-4 评分：6（模型更好） <a class="header-anchor" href="#gpt-4-评分-6-模型更好" aria-label="Permalink to &quot;GPT-4 评分：6（模型更好）&quot;">​</a></h4><p>两位助理都对 LinkedIn 上宣布新工作机会的帖子提供了有用且相关的回复。 但是，Assistant 2 的回答更加详细，并包含特定信息的占位符，使用户更容易自定义帖子。 助理 1 的回复也不错，但与助理 2 的回复相比，结构和详细程度稍差。</p><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>',33)]))}const f=a(l,[["render",n]]);export{g as __pageData,f as default};
