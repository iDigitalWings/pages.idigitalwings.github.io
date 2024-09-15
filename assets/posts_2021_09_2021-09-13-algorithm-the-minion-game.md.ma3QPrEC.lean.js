import{_ as i,a,af as n,o as t}from"./chunks/framework.C87LdZyP.js";const e="/assets/banana.Cr5Jr-46.png",A=JSON.parse('{"title":"CodeChallenge: The Minion Game","description":"","frontmatter":{"title":"CodeChallenge: The Minion Game","date":"2021-09-11T00:00:00.000Z","tags":["algorithm","code-challenge"],"category":["学习"]},"headers":[],"relativePath":"posts/2021/09/2021-09-13-algorithm-the-minion-game.md","filePath":"posts/2021/09/2021-09-13-algorithm-the-minion-game.md","lastUpdated":1718173059000}'),h={name:"posts/2021/09/2021-09-13-algorithm-the-minion-game.md"};function l(p,s,r,k,o,g){return t(),a("div",null,s[0]||(s[0]=[n('<p>Kevin and Stuart want to play the <strong>The Minion Game</strong>.</p><h3 id="game-rules" tabindex="-1">Game Rules <a class="header-anchor" href="#game-rules" aria-label="Permalink to &quot;Game Rules&quot;">​</a></h3><p>Both players are given the same string <strong><strong>S</strong></strong>.</p><p>Both players have to make substrings using the letters of the string <strong><strong>S</strong></strong>.</p><p><strong>Stuart</strong> has to make words starting with consonants.</p><p><strong>Kevin</strong> has to make words starting with vowels.</p><p>The game ends when both players have made all possible substrings.</p><h3 id="scoring" tabindex="-1">Scoring <a class="header-anchor" href="#scoring" aria-label="Permalink to &quot;Scoring&quot;">​</a></h3><p>A player gets +1 point for each occurrence of the substring in the string <strong><strong>S</strong></strong>.</p><h3 id="for-example" tabindex="-1">For Example: <a class="header-anchor" href="#for-example" aria-label="Permalink to &quot;For Example:&quot;">​</a></h3><p>String <strong><strong>S</strong></strong> = BANANA</p><p>Kevin&#39;s vowel beginning word = ANA</p><p>Here, ANA occurs twice in BANANA. Hence, Kevin will get 2 Points.</p><p>For better understanding, see the image below:</p><p><img src="'+e+`" alt="img.png"></p><p>Your task is to <code>determine the winner of the game and their score</code>.</p><h3 id="input-format" tabindex="-1">Input Format <a class="header-anchor" href="#input-format" aria-label="Permalink to &quot;Input Format&quot;">​</a></h3><p>A single line of input containing the string <strong><strong>S</strong></strong>.</p><p><strong>Note</strong>: The string will contain only uppercase letters <code>A-Z</code>:</p><p>Constraints</p><h3 id="sample-input" tabindex="-1">Sample Input <a class="header-anchor" href="#sample-input" aria-label="Permalink to &quot;Sample Input&quot;">​</a></h3><p>BANANA</p><h3 id="sample-output" tabindex="-1">Sample Output <a class="header-anchor" href="#sample-output" aria-label="Permalink to &quot;Sample Output&quot;">​</a></h3><p>Stuart 12</p><h3 id="answer" tabindex="-1">Answer <a class="header-anchor" href="#answer" aria-label="Permalink to &quot;Answer&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> minion_game</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(string):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    vowels </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;AEIOU&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    Stuart_score, Kevin_score </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> len</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(string)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> start_idx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(length):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        score </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> length </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> start_idx</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> string[start_idx] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> vowels:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            Kevin_score </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> score</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        else</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            Stuart_score </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> score</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Stuart_score </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Kevin_score:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Draw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Stuart_score </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Kevin_score:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Stuart </span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">{}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.format(Stuart_score))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Stuart_score </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Kevin_score:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Kevin </span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">{}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.format(Kevin_score))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">if</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> __name__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;__main__&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span></code></pre></div>`,26)]))}const c=i(h,[["render",l]]);export{A as __pageData,c as default};
