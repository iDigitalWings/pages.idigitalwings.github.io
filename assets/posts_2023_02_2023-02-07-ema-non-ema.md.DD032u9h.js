import{_ as a,a as t,af as n,o}from"./chunks/framework.C87LdZyP.js";const d=JSON.parse('{"title":"EMA","description":"","frontmatter":{"title":"EMA","date":"2023-02-07T00:00:00.000Z","tags":["stable-diffusion","ai"],"category":["其它"]},"headers":[],"relativePath":"posts/2023/02/2023-02-07-ema-non-ema.md","filePath":"posts/2023/02/2023-02-07-ema-non-ema.md","lastUpdated":1718173059000}'),s={name:"posts/2023/02/2023-02-07-ema-non-ema.md"};function i(r,e,l,m,f,p){return o(),t("div",null,e[0]||(e[0]=[n('<blockquote><p>EMA (exponential moving average) is meant as a checkpoint for resuming training while the normal, smaller one is for inference.</p></blockquote><p>有 1 个模型用于训练，1 个用于推理。</p><p>在实践中，使用较小的模型。</p><h2 id="full-ema" tabindex="-1">full-ema <a class="header-anchor" href="#full-ema" aria-label="Permalink to &quot;full-ema&quot;">​</a></h2><p>EMA 应该创造更多有创意的图像” “ema 版本适用于希望进一步训练模型的用户。</p><h2 id="non-ema" tabindex="-1">non-ema <a class="header-anchor" href="#non-ema" aria-label="Permalink to &quot;non-ema&quot;">​</a></h2><p>但是对于有兴趣真正了解正在发生的事情的人，请耐心等待：您应该使用 EMA 模型进行推理！</p><p>但混淆的根源是小模型实际上有EMA 权重。大的是同时具有 EMA 和标准权重的“完整版”。因此，如果您想训练模型，您应该使用 use_ema=False 加载完整模型。</p><p>什么是 EMA 权重，为什么它们应该更好？就像你作为学生接受培训时一样，也许你会在最后一次考试中失败，或者决定作弊并记住答案。所以一般来说，你可以通过使用考试成绩的平均值来更好地估计学生的表现，并且由于你不关心幼儿园，如果你只考虑去年，你会得到 MA（移动平均值），如果你保持整个历史，但更重视最近的分数。</p><p>这对于训练动态不稳定的 GAN 来说曾经是一个非常重要的技巧，但对于扩散模型来说并不是那么重要。</p><hr><ul><li><a href="https://www.reddit.com/r/StableDiffusion/comments/x5am4v/ema_model_vs_non_ema_differences/" target="_blank" rel="noreferrer">https://www.reddit.com/r/StableDiffusion/comments/x5am4v/ema_model_vs_non_ema_differences/</a></li><li><a href="https://huggingface.co/stabilityai/stable-diffusion-2-1/discussions/22" target="_blank" rel="noreferrer">https://huggingface.co/stabilityai/stable-diffusion-2-1/discussions/22</a></li></ul>',12)]))}const u=a(s,[["render",i]]);export{d as __pageData,u as default};
