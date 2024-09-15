import{_ as i,a,af as t,o as l}from"./chunks/framework.C87LdZyP.js";const n="/assets/example-plot.DubwWPdv.svg",c=JSON.parse('{"title":"Octave Install","description":"","frontmatter":{"title":"Octave Install","date":"2017-08-02T00:00:00.000Z","tags":["linux","octave"],"category":["算法"]},"headers":[],"relativePath":"posts/2017/08/2017-08-02-octave-install.md","filePath":"posts/2017/08/2017-08-02-octave-install.md","lastUpdated":1718193786000}'),e={name:"posts/2017/08/2017-08-02-octave-install.md"};function h(p,s,k,r,o,d){return l(),a("div",null,s[0]||(s[0]=[t(`<div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> programs/octave</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> programs/octave</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ftp://ftp.gnu.org/gnu/octave/octave-4.2.1.tar.xz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> build-dep</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> octave</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">xz</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> octave-4.2.1.tar.xz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">tar</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> xvf</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> octave-4.2.1.tar</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> octave-4.2.1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">./configure</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --prefix=/home/alan/programs/octave/octave</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">make</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> make</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span></span></code></pre></div><p>运行代码:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># Create an evenly-spaced vector from -10..10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> sin (x);    </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># y is also a vector</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">plot (x, y)</span><span style="--shiki-light:#B31D28;--shiki-dark:#FF938A;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">title (</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Simple 2-D Plot&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span><span style="--shiki-light:#B31D28;--shiki-dark:#FF938A;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">xlabel (</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;x&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span><span style="--shiki-light:#B31D28;--shiki-dark:#FF938A;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">ylabel (</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;sin (x)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span><span style="--shiki-light:#B31D28;--shiki-dark:#FF938A;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">;</span></span></code></pre></div><p><img src="`+n+'" alt=""></p><hr><p>Links:</p><ul><li><a href="https://www.gnu.org/software/octave/download.html" target="_blank" rel="noreferrer">https://www.gnu.org/software/octave/download.html</a></li><li><a href="https://www.gnu.org/software/octave/doc/interpreter/" target="_blank" rel="noreferrer">https://www.gnu.org/software/octave/doc/interpreter/</a></li><li><a href="https://octave.sourceforge.io/" target="_blank" rel="noreferrer">https://octave.sourceforge.io/</a></li><li><a href="https://octave.sourceforge.io/packages.php" target="_blank" rel="noreferrer">https://octave.sourceforge.io/packages.php</a></li></ul><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>',9)]))}const F=i(e,[["render",h]]);export{c as __pageData,F as default};
