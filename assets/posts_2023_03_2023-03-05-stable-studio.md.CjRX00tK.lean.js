import{_ as s,a as i,af as e,o as l}from"./chunks/framework.C87LdZyP.js";const a="/assets/265743803164250.Bpnd1L8E.png",o="/assets/265806114427083.CC5Miox5.png",p="/assets/266449950718958.DgaLoTZa.png",n="/assets/265061726346000.BptF0efx.png",r="/assets/266929635090583.Dz-1WxJP.png",d="/assets/269072465929458.AEJWIbNI.png",u="/assets/267264008916125.bzdUzDUU.png",f=JSON.parse('{"title":"StableStudio: Stability AI 开源的 Dream Studio 前台","description":"","frontmatter":{"title":"StableStudio: Stability AI 开源的 Dream Studio 前台","date":"2023-03-05T00:00:00.000Z","tags":["ai","ml"],"category":["AI"]},"headers":[],"relativePath":"posts/2023/03/2023-03-05-stable-studio.md","filePath":"posts/2023/03/2023-03-05-stable-studio.md","lastUpdated":1718173059000}'),h={name:"posts/2023/03/2023-03-05-stable-studio.md"};function c(b,t,g,S,m,k){return l(),i("div",null,t[0]||(t[0]=[e('<blockquote><p>StableStudio 是 Stability AI（Stable Diffusion 的作者） 的 DreamStudio 开源版本，让任何人都可以在本地搭建一个 DreamStudio 一样的文本到图像 AI 应用。</p></blockquote><h2 id="界面" tabindex="-1">界面 <a class="header-anchor" href="#界面" aria-label="Permalink to &quot;界面&quot;">​</a></h2><p>通过下面图对比，我们能看到 StableStudio 和 DreamStudio 的主界面几乎一样。</p><p><img src="'+a+'" alt="StableStudio 主界面"></p><p><img src="'+o+'" alt="DreamStudio 主界面"></p><h2 id="项目信息" tabindex="-1">项目信息 <a class="header-anchor" href="#项目信息" aria-label="Permalink to &quot;项目信息&quot;">​</a></h2><p>该项目只是 DreamStudio 的开源前台，还是要**使用 DreamStudio 的 API（收费）**来生成图像。当然也提供了插件系统，去调用诸如 Stable Diffusion 这样的文本到图片的 AI 应用。</p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><p>项目的 Github 地址如下：</p><ul><li><a href="https://github.com/Stability-AI/StableStudio" target="_blank" rel="noreferrer"><strong>https://github.com/Stability-AI/StableStudio</strong></a></li></ul><p><img src="'+p+`" alt="StableStudio"></p><p>本地安装需要 Clone 项目然后运行：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://github.com/Stability-AI/StableStudio.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> StableStudio</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">yarn</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> dev</span></span></code></pre></div><p>浏览器就会打开 StableStudio 的界面 ( localhost:3000 )：</p><p><img src="`+n+'" alt="StableStudio 初次打开跳转设置界面"></p><p>初次打开需要设置 DreamStudio 的 API KEY 才能生成图像，</p><p><img src="'+r+'" alt="设置 API KEY"></p><p><strong>注意：</strong>：你在这里设置好 API KEY，本地生成图片<strong>不是免费的</strong>，费用就是调用 API 的费用，和在 DreamStudio 使用的价格是一样。</p><p><img src="'+a+'" alt="使用随机提示语生成的图像"></p><p>登录 DreamStudio 可以看到你还剩下多少余额：</p><p><img src="'+d+'" alt="DreamStudio余额"></p><h3 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件&quot;">​</a></h3><p>StableStudio 虽说是前端，但是他强大的地方在于实现了插件机制，让用户可以自定义和扩展应用的功能。</p><p><img src="'+u+'" alt="插件机制"></p><p>例如，用户可以使用 Photoshop 插件在 Photoshop 中直接使用 Stable Diffusion 生成和编辑图像，或者使用 Blender 插件在 Blender 中生成纹理、生成 AI 视频等。</p><p>当然上面的插件还没有实现。</p><p>不过官方已经给出了三个插件：</p><ul><li><strong>stablestudio-plugin-stability</strong>: 默认的插件，用来调用 Stability 的 API</li><li><strong>stablestudio-plugin-webui</strong>: 这个插件可以来使用 stable-diffusion-webui，下次我会讲怎么使用</li><li><strong>stablestudio-plugin-webgpu</strong>: 这个插件官方提供了，但是我看代码还并未实现</li></ul><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>',30)]))}const _=s(h,[["render",c]]);export{f as __pageData,_ as default};
