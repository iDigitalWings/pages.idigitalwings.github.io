import{_ as t,a,af as r,o as l}from"./chunks/framework.C87LdZyP.js";const i="/assets/insert.Dki69dTR.png",s="/assets/insert-anmi.C1N3hHDA.gif",n="/assets/delete1.DfLyPs64.png",o="/assets/delete2.I2PqU1eM.png",c="/assets/delete3.Be2E-mpz.png",p="/assets/delete4.DHRfNkOf.png",h="/assets/summary.03NDbYyt.png",y=JSON.parse('{"title":"Binary search tree(BST/B Tree)","description":"","frontmatter":{"title":"Binary search tree(BST/B Tree)","date":"2017-07-27T00:00:00.000Z","tags":["tree","algorithm"],"category":["算法"]},"headers":[],"relativePath":"posts/2017/07/2017-07-27-binary-search-tree.md","filePath":"posts/2017/07/2017-07-27-binary-search-tree.md","lastUpdated":1718193786000}'),d={name:"posts/2017/07/2017-07-27-binary-search-tree.md"};function m(u,e,b,g,_,f){return l(),a("div",null,e[0]||(e[0]=[r('<h3 id="定义-bst" tabindex="-1">定义 [BST] <a class="header-anchor" href="#定义-bst" aria-label="Permalink to &quot;定义 [BST]&quot;">​</a></h3><p>二叉排序树或者是一棵空树，或者是具有下列性质的二叉树：</p><ul><li>若左子树不空，则左子树上所有结点的值均小于或等于它的根结点的值；</li><li>若右子树不空，则右子树上所有结点的值均大于或等于它的根结点的值；</li><li>左、右子树也分别为二叉排序树；</li></ul><h3 id="查找" tabindex="-1">查找 <a class="header-anchor" href="#查找" aria-label="Permalink to &quot;查找&quot;">​</a></h3><ul><li>若根结点的关键字值等于查找的关键字，成功。</li><li>否则，若小于根结点的关键字值，递归查左子树。</li><li>若大于根结点的关键字值，递归查右子树。</li><li>若子树为空，查找不成功。</li></ul><p>复杂度: O(logn)</p><h3 id="插入" tabindex="-1">插入 <a class="header-anchor" href="#插入" aria-label="Permalink to &quot;插入&quot;">​</a></h3><p><img src="'+i+'" alt=""><img src="'+s+'" alt=""></p><h3 id="删除" tabindex="-1">删除 <a class="header-anchor" href="#删除" aria-label="Permalink to &quot;删除&quot;">​</a></h3><ul><li>标记删除</li></ul><p><img src="'+n+'" alt=""></p><ul><li>无子节点</li></ul><p><img src="'+o+'" alt=""></p><ul><li>单个子节点 直接返回自己的另一个孩子，让自己的父亲节点指向自己的另一个孩子</li></ul><p><img src="'+c+'" alt=""></p><ul><li>两个子节点 找自己右孩子里面的最小值（最左）然后替换自己和它，然后删除自己</li></ul><p><img src="'+p+'" alt=""></p><h3 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h3><p><img src="'+h+'" alt=""></p><hr><p>Links:</p><ul><li><a href="http://blog.csdn.net/hk2291976/article/details/51407287" target="_blank" rel="noreferrer">http://blog.csdn.net/hk2291976/article/details/51407287</a></li><li><a href="http://blog.csdn.net/hk2291976/article/details/51407569" target="_blank" rel="noreferrer">http://blog.csdn.net/hk2291976/article/details/51407569</a></li><li><a href="https://baike.baidu.com/item/%E4%BA%8C%E5%8F%89%E6%8E%92%E5%BA%8F%E6%A0%91" target="_blank" rel="noreferrer">https://baike.baidu.com/item/二叉排序树</a></li></ul><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>',24)]))}const B=t(d,[["render",m]]);export{y as __pageData,B as default};
