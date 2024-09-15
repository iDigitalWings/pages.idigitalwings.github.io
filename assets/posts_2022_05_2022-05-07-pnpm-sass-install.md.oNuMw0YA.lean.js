import{_ as a,a as t,af as i,o as n}from"./chunks/framework.C87LdZyP.js";const F=JSON.parse('{"title":"Pnpm 安装 node-sass 问题","description":"","frontmatter":{"title":"Pnpm 安装 node-sass 问题","date":"2022-05-07T00:00:00.000Z","tags":["npm"],"category":["其它"]},"headers":[],"relativePath":"posts/2022/05/2022-05-07-pnpm-sass-install.md","filePath":"posts/2022/05/2022-05-07-pnpm-sass-install.md","lastUpdated":1718173059000}'),d={name:"posts/2022/05/2022-05-07-pnpm-sass-install.md"};function e(l,s,p,h,r,k){return n(),t("div",null,s[0]||(s[0]=[i(`<p><a href="https://www.npmjs.com/package/node-sass" target="_blank" rel="noreferrer">node-sass</a> 是常用的 CSS 预编译语言， 缺点是安装比较耗时，并对 node 版本有要求。</p><h2 id="下载速度" tabindex="-1">下载速度 <a class="header-anchor" href="#下载速度" aria-label="Permalink to &quot;下载速度&quot;">​</a></h2><p>如果下载 node-sass 速度慢，可使用：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> registry</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://registry.npmmirror.com</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> sass_binary_site</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://npmmirror.com/mirrors/node-sass</span></span></code></pre></div><h2 id="node-版本" tabindex="-1">Node 版本 <a class="header-anchor" href="#node-版本" aria-label="Permalink to &quot;Node 版本&quot;">​</a></h2><p>如果使用 <code>pnpm</code> 安装 <code>node-sass</code> 编译错误，可能原因是 node 版本问题， 可以使用 <code>nvm</code> 等工具切换 node 版本，或者更改 node-sass 版本。</p><p>Node 和 node-sass 的对应关系如下：</p><table tabindex="0"><thead><tr><th>NodeJS</th><th>Supported node-sass version</th><th>Node Module</th></tr></thead><tbody><tr><td>Node 17</td><td>7.0+</td><td>102</td></tr><tr><td>Node 16</td><td>6.0+</td><td>93</td></tr><tr><td>Node 15</td><td>5.0+, &lt;7.0</td><td>88</td></tr><tr><td>Node 14</td><td>4.14+</td><td>83</td></tr><tr><td>Node 13</td><td>4.13+, &lt;5.0</td><td>79</td></tr><tr><td>Node 12</td><td>4.12+</td><td>72</td></tr><tr><td>Node 11</td><td>4.10+, &lt;5.0</td><td>67</td></tr><tr><td>Node 10</td><td>4.9+, &lt;6.0</td><td>64</td></tr><tr><td>Node 8</td><td>4.5.3+, &lt;5.0</td><td>57</td></tr><tr><td>Node &lt;8</td><td>&lt;5.0</td><td>&lt;57</td></tr></tbody></table><h2 id="备选-使用-dart-sass" tabindex="-1">备选：使用 dart-sass <a class="header-anchor" href="#备选-使用-dart-sass" aria-label="Permalink to &quot;备选：使用 dart-sass&quot;">​</a></h2><p>可使用 <code>dart-sass</code> 替换掉 <code>node-sass</code>：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> dart-sass</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> node-sass@yarn:dart-sass</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> or</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> node-sass@npm:dart-sass</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> sass-loader</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> sass</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> sass-loader</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> or</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> sass</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> sass-loader</span></span></code></pre></div><hr><ul><li><a href="https://www.npmjs.com/package/node-sass" target="_blank" rel="noreferrer">https://www.npmjs.com/package/node-sass</a></li></ul>`,13)]))}const c=a(d,[["render",e]]);export{F as __pageData,c as default};
