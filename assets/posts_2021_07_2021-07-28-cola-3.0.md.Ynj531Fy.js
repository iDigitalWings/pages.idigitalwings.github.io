import{_ as t,a as e,af as l,o}from"./chunks/framework.C87LdZyP.js";const i="/assets/cola3.0.CLfqrkDK.png",h=JSON.parse('{"title":"Cola 3.0 笔记","description":"","frontmatter":{"title":"Cola 3.0 笔记","date":"2021-07-28T00:00:00.000Z","tags":["ddd","cola"],"category":["设计"]},"headers":[],"relativePath":"posts/2021/07/2021-07-28-cola-3.0.md","filePath":"posts/2021/07/2021-07-28-cola-3.0.md","lastUpdated":1718173059000}'),s={name:"posts/2021/07/2021-07-28-cola-3.0.md"};function r(n,a,p,c,d,m){return o(),e("div",null,a[0]||(a[0]=[l('<h2 id="奥卡姆剃刀原理" tabindex="-1">奥卡姆剃刀原理 <a class="header-anchor" href="#奥卡姆剃刀原理" aria-label="Permalink to &quot;奥卡姆剃刀原理&quot;">​</a></h2><p>是指如无必要，勿增实体（Entities should not be multiplied unnecessarily），即<strong>简单有效原理</strong>。</p><p>正如奥卡姆在《箴言书注》2卷15题说『切勿浪费较多东西去做，用较少的东西，同样可以做好的事情。』</p><p>具体处理事情的方式：</p><ul><li>如果一件事情有 N 种原理，最简单那个便是正确的</li><li>如果做一件事情需要 N 步，就不要做 N+1 个步骤</li></ul><p>去掉了 Cola 的：</p><ul><li>CommandBus</li><li>Interceptor</li><li>Convertor</li><li>Validator</li><li>Assembler</li><li>原本的类扫描，使用 <code>ListableBeanFactory.getBeansWithAnnotation</code></li></ul><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>一方面Cola是一种架构思想，整合了洋葱圈架构、适配器架构、DDD、整洁架构、TMF等架构思想的一种应用架构。</p><p><img src="'+i+'" alt="img.png"></p><p>另一方面也是框架组件，这次升级仅保留了扩展点组件。</p>',11)]))}const _=t(s,[["render",r]]);export{h as __pageData,_ as default};
