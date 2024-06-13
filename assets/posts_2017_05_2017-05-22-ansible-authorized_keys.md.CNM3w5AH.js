import{_ as s,a,o as n,aj as p}from"./chunks/framework.Ba_Ek9Jm.js";const b=JSON.parse('{"title":"Ansible authorized_keys","description":"","frontmatter":{"title":"Ansible authorized_keys","date":"2017-05-22T00:00:00.000Z","tags":["ssh","ansible","operation"],"category":["DevOps"],"ref":["http://www.jianshu.com/p/fc88132924d5"]},"headers":[],"relativePath":"posts/2017/05/2017-05-22-ansible-authorized_keys.md","filePath":"posts/2017/05/2017-05-22-ansible-authorized_keys.md","lastUpdated":1718193786000}'),e={name:"posts/2017/05/2017-05-22-ansible-authorized_keys.md"},l=p(`<h2 id="在管理主机生成key" tabindex="-1">在管理主机生成key <a class="header-anchor" href="#在管理主机生成key" aria-label="Permalink to &quot;在管理主机生成key&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>ssh-keygen -t rsa -b 2048 -P &#39;&#39; -f ~/.ssh/id_rsa</span></span></code></pre></div><h2 id="添加主机信息-hosts-txt" tabindex="-1">添加主机信息 <code>hosts.txt</code> <a class="header-anchor" href="#添加主机信息-hosts-txt" aria-label="Permalink to &quot;添加主机信息 \`hosts.txt\`&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>[all]</span></span>
<span class="line"><span>106.14.xx.xxx   ansible_user=root   ansible_ssh_pass=your-pass</span></span></code></pre></div><h2 id="配置palybook-ssh-addkey-yml" tabindex="-1">配置palybook <code>ssh-addkey.yml</code> <a class="header-anchor" href="#配置palybook-ssh-addkey-yml" aria-label="Permalink to &quot;配置palybook \`ssh-addkey.yml\`&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>---</span></span>
<span class="line"><span>- hosts: all</span></span>
<span class="line"><span>  gather_facts: no</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  tasks:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  - name: install ssh key</span></span>
<span class="line"><span>    authorized_key: user=root</span></span>
<span class="line"><span>                    key=&quot;{{ lookup(&#39;file&#39;, &#39;~/.ssh/id_rsa.pub&#39;) }}&quot;</span></span>
<span class="line"><span>                    state=present</span></span></code></pre></div><h2 id="运行-playbook" tabindex="-1">运行 playbook <a class="header-anchor" href="#运行-playbook" aria-label="Permalink to &quot;运行 playbook&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>ansible-playbook -i hosts.txt ssh-addkey.yml</span></span></code></pre></div><p>得到如下输出：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>$ ansible-playbook -i hosts.txt ssh-addkey.yml</span></span>
<span class="line"><span> ____________</span></span>
<span class="line"><span>&lt; PLAY [all] &gt;</span></span>
<span class="line"><span> ------------</span></span>
<span class="line"><span>        \\   ^__^</span></span>
<span class="line"><span>         \\  (oo)\\_______</span></span>
<span class="line"><span>            (__)\\       )\\/\\</span></span>
<span class="line"><span>                ||----w |</span></span>
<span class="line"><span>                ||     ||</span></span>
<span class="line"><span></span></span>
<span class="line"><span> ________________________</span></span>
<span class="line"><span>&lt; TASK [install ssh key] &gt;</span></span>
<span class="line"><span> ------------------------</span></span>
<span class="line"><span>        \\   ^__^</span></span>
<span class="line"><span>         \\  (oo)\\_______</span></span>
<span class="line"><span>            (__)\\       )\\/\\</span></span>
<span class="line"><span>                ||----w |</span></span>
<span class="line"><span>                ||     ||</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ok: [106.14.xx.xxx]</span></span>
<span class="line"><span> ____________</span></span>
<span class="line"><span>&lt; PLAY RECAP &gt;</span></span>
<span class="line"><span> ------------</span></span>
<span class="line"><span>        \\   ^__^</span></span>
<span class="line"><span>         \\  (oo)\\_______</span></span>
<span class="line"><span>            (__)\\       )\\/\\</span></span>
<span class="line"><span>                ||----w |</span></span>
<span class="line"><span>                ||     ||</span></span>
<span class="line"><span></span></span>
<span class="line"><span>106.14.xx.xxx              : ok=1    changed=0    unreachable=0    failed=0</span></span></code></pre></div><p>运行成功。</p><p>此时去掉 <code>hosts.txt</code> 中的密码，执行命令就可以了。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>ansible all -i hosts.txt -m ping</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>$ ansible all -i hosts.txt -m ping</span></span>
<span class="line"><span>106.14.xx.xx | SUCCESS =&gt; {</span></span>
<span class="line"><span>    &quot;changed&quot;: false,</span></span>
<span class="line"><span>    &quot;ping&quot;: &quot;pong&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>`,16),t=[l];function i(o,c,d,_,h,r){return n(),a("div",null,t)}const k=s(e,[["render",i]]);export{b as __pageData,k as default};
