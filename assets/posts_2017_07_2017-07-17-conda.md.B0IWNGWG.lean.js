import{_ as a,a as i,af as n,o as e}from"./chunks/framework.C87LdZyP.js";const c=JSON.parse('{"title":"Conda","description":"","frontmatter":{"title":"Conda","date":"2017-07-17T00:00:00.000Z","tags":["conda","python"]},"headers":[],"relativePath":"posts/2017/07/2017-07-17-conda.md","filePath":"posts/2017/07/2017-07-17-conda.md","lastUpdated":1718193786000}'),l={name:"posts/2017/07/2017-07-17-conda.md"};function t(h,s,p,k,r,d){return e(),i("div",null,s[0]||(s[0]=[n(`<p><strong>Package, dependency and environment management for any language: Python, R, Ruby, Lua, Scala, Java, Javascript, C/ C++, FORTRAN</strong></p><ul><li><p><a href="https://github.com/conda/conda" target="_blank" rel="noreferrer">Github</a></p></li><li><p><a href="https://conda.io/docs/" target="_blank" rel="noreferrer">Conda Docs</a></p></li><li><p><a href="https://conda.io/docs/user-guide/install/download.html#" target="_blank" rel="noreferrer">下载地址</a></p></li><li><p><a href="https://conda.io/docs/user-guide/install/download.html#anaconda-or-miniconda" target="_blank" rel="noreferrer">Anaconda or Miniconda?</a></p></li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> venv</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> python=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3.5</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> activate</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> venv</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://conda.anaconda.org/menpo</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> opencv3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> conda-forge</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> tensorflow</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> requirements.txt</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --version</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> update</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> conda</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> env</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --help</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> env</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> list</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># search python</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> search</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># create env</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> snakes</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> python=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># conda create --name snakes python=3.6</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> activate</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> snakes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># verify env</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> info</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --envs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># verify python version</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">python</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># use a different version of python</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> activate</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> snowflakes</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">python</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># create a python 3.6 eviroment</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> py36</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> python=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3.6</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> anaconda</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#  you can specify the exact package and Python versions, for example, numpy=1.7 or python=3.6.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># update python: eg: 3.4.2 -&gt; 3.4.3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> update</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> python</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># upgrade: eg: 3.4 -&gt; 3.6</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> python=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3.6</span></span></code></pre></div><h2 id="managing-packages" tabindex="-1">Managing packages <a class="header-anchor" href="#managing-packages" aria-label="Permalink to &quot;Managing packages&quot;">​</a></h2><h3 id="list-all-packages" tabindex="-1">List all packages <a class="header-anchor" href="#list-all-packages" aria-label="Permalink to &quot;List all packages&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> list</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> list</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> snowflakes</span></span></code></pre></div><h3 id="search-for-a-package" tabindex="-1">Search for a package <a class="header-anchor" href="#search-for-a-package" aria-label="Permalink to &quot;Search for a package&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> search</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> beautiful-soup</span></span></code></pre></div><h3 id="install-a-package-to-current-env" tabindex="-1">Install a package(to current env) <a class="header-anchor" href="#install-a-package-to-current-env" aria-label="Permalink to &quot;Install a package(to current env)&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> bunnies</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> beautiful-soup</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> activate</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> bunnies</span></span></code></pre></div><h3 id="install-a-package-from-anaconda-org" tabindex="-1">Install a package from Anaconda.org <a class="header-anchor" href="#install-a-package-from-anaconda-org" aria-label="Permalink to &quot;Install a package from Anaconda.org&quot;">​</a></h3><p>In a browser, go to <code>http://anaconda.org</code>. To find the package named “bottleneck” enter that search term in the top left box named “Search Packages.”</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> pandas</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> bottleneck</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> list</span></span></code></pre></div><h3 id="package-remove" tabindex="-1">Package remove <a class="header-anchor" href="#package-remove" aria-label="Permalink to &quot;Package remove&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> remove</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> bunnies</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> iopro</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> list</span></span></code></pre></div><hr><p>Links:</p><ul><li><a href="https://conda.io/miniconda.html" target="_blank" rel="noreferrer">Miniconda</a></li><li><a href="https://conda.io/docs/installation.html" target="_blank" rel="noreferrer">Install</a></li><li><a href="https://anaconda.org/" target="_blank" rel="noreferrer">anaconda</a></li><li><a href="http://ahogrammer.com/2016/11/15/deep-learning-enables-you-to-hide-screen-when-your-boss-is-approaching/" target="_blank" rel="noreferrer">http://ahogrammer.com/2016/11/15/deep-learning-enables-you-to-hide-screen-when-your-boss-is-approaching/</a></li><li><a href="https://github.com/Hironsan/BossSensor" target="_blank" rel="noreferrer">BossSensor</a></li></ul><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>`,21)]))}const F=a(l,[["render",t]]);export{c as __pageData,F as default};
