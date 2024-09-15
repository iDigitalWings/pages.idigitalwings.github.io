import{_ as a,a as o,af as s,o as r}from"./chunks/framework.C87LdZyP.js";const c=JSON.parse('{"title":"todo 仓库可视化和人工智能：（1）背景","description":"","frontmatter":{"title":"todo 仓库可视化和人工智能：（1）背景","date":"2024-04-06T00:00:00.000Z","tags":["ai","llm"],"category":["ai"]},"headers":[],"relativePath":"posts/2024/04/2024-04-10-wms-warehouse-visualization.md","filePath":"posts/2024/04/2024-04-10-wms-warehouse-visualization.md","lastUpdated":1718173059000}'),n={name:"posts/2024/04/2024-04-10-wms-warehouse-visualization.md"};function i(e,t,l,p,g,d){return r(),o("div",null,t[0]||(t[0]=[s('<div class="admonition abstract"><p class="admonition-title">abstract</p></div><p>今天开始写几篇文章跟大家分享一下如何可视化一个仓库，以及利用人工智能让其更加聪明和智能。</p><h3 id="仓库管理" tabindex="-1">仓库管理 <a class="header-anchor" href="#仓库管理" aria-label="Permalink to &quot;仓库管理&quot;">​</a></h3><p>今天聊一聊仓库管理的可视化和人工智能。</p><p>!!! explain 仓库离我们远么 虽然我们平时大多都不会接触到仓库，但仓储是整个供应链管理中重要的一环， 和我们日常生活也息息相关。如果没有良好的仓库管理， 我们日常网购的商品可能没法按时收货， 如果管理出错，我们甚至还可能收错货，或者发不到货哦。 !!!</p><p>仓库我们可以把它想象成一个大超市，我用超市来<strong>类比</strong>简单解释几个概念。</p><h3 id="仓库" tabindex="-1">仓库 <a class="header-anchor" href="#仓库" aria-label="Permalink to &quot;仓库&quot;">​</a></h3><p>每个大超市都是一个仓库，比如市中心有两个大超市，那就是两个仓库了。</p><div class="admonition note"><p class="admonition-title">仓库</p><p>仓库的概念通常指的是一个<strong>物理位置</strong>，它用于存储、管理和分发商品或物料。</p></div><h3 id="库区" tabindex="-1">库区 <a class="header-anchor" href="#库区" aria-label="Permalink to &quot;库区&quot;">​</a></h3><p>超市里面有不同的区域，有的放日化品、有的放零食、有的区域放蔬菜水果，这样一个一个的区域就是库区啦。</p><p>一个库区一般放置相同类型的一类物品。</p><div class="admonition note"><p class="admonition-title">库区</p><p>库区的概念是指仓库内部为了管理和操作方便而<strong>划分的不同区域</strong>。 每个库区可以根据存储物品的类型、体积、重量、存储条件、操作流程等因素来设定。 库区的划分有助于提高仓库操作的效率和管理精度。</p></div><h3 id="库位" tabindex="-1">库位 <a class="header-anchor" href="#库位" aria-label="Permalink to &quot;库位&quot;">​</a></h3><p>超市中货架上的每个小区域，会放一个或者几个商品。这样一个小的区域我们称之为库位。</p><div class="admonition note"><p class="admonition-title">库位</p><p>库位是指仓库内用于<strong>存放具体商品的确切位置</strong>。 每个库位通常有一个唯一的标识符，可以是编号、条形码、RFID标签或其他形式的标记。</p></div><h4 id="排列层" tabindex="-1">排列层 <a class="header-anchor" href="#排列层" aria-label="Permalink to &quot;排列层&quot;">​</a></h4><p>我们刚刚提到库位一般都有自己的编号，而为了<strong>便于查找和管理</strong>，我们一般用<strong>库区+排列层</strong> 的方式来对库位进行编号。</p><p>比如 A 区是零食区，我要找的上好佳薯片就可能放在 <strong>A 区</strong>，<strong>第五排</strong>货架，从下往上数<strong>第三层</strong>，最右边的<strong>第一个</strong>位置上。</p><p>这样就可以用 <strong>A-05-03-01</strong> 来表示这个库位。</p><h2 id="仓库管理的内容" tabindex="-1">仓库管理的内容 <a class="header-anchor" href="#仓库管理的内容" aria-label="Permalink to &quot;仓库管理的内容&quot;">​</a></h2><p><strong>简单</strong>来说，一个仓库管理系统一般有几个功能：</p><ul><li><strong>库存管理</strong>：追踪库存水平，管理库存的流入和流出，确保库存数据的准确性。</li><li><strong>入库管理</strong>：处理货物的接收、检查、上架等流程。</li><li><strong>出库管理</strong>：处理货物的挑选、打包、发货等流程。</li><li><strong>库位管理</strong>：优化货物的存放位置，提高仓库空间利用率，减少拣货时间。</li><li><strong>订单管理</strong>：处理订单的创建、修改、追踪和完成。</li><li><strong>数据分析</strong>：提供库存状态、出入库记录、仓库利用率等数据的统计和分析。</li><li><strong>劳动力管理</strong>：分配工作任务，监控员工的工作效率。</li></ul><p>对应的，仓库也会有很多的<strong>作业动作</strong>，可能有以下几类：</p><ul><li><strong>收货作业</strong>：接收货物，检查数量和质量，录入收货数据，分配库位</li><li><strong>上架作业</strong>：将货物从收货区移动到指定库位，更新库存记录</li><li><strong>拣选作业</strong>：根据订单需求从库位上拣选商品，确认拣选准确性，更新库存记录</li><li><strong>包装作业</strong>：根据订单要求对商品进行包装，应用标签和文档</li><li><strong>发货作业</strong>：准备货物发货，更新库存记录，管理运输过程和跟踪信息</li><li><strong>库存管理</strong>：监控库存水平，实施库存盘点，确保库存准确性和流动性</li><li><strong>退货作业</strong>：处理退货商品，包括检查、修复、重新包装等，更新库存记录</li><li><strong>库位管理</strong>：优化库位分配，提高存储效率，管理库位占用和空闲状态</li></ul><h2 id="可视化" tabindex="-1">可视化 <a class="header-anchor" href="#可视化" aria-label="Permalink to &quot;可视化&quot;">​</a></h2><p>好了，大概的知识介绍了，下面我么进入今天的主题：<strong>可视化</strong>。</p><h3 id="设计" tabindex="-1">设计 <a class="header-anchor" href="#设计" aria-label="Permalink to &quot;设计&quot;">​</a></h3><p>同样的，简单设计下有啥功能。</p><h4 id="数据展示" tabindex="-1">数据展示 <a class="header-anchor" href="#数据展示" aria-label="Permalink to &quot;数据展示&quot;">​</a></h4><p>数据咋来的就不说了，随便生成点儿。</p><p>然后展示下：</p><p>》数据</p><p>先做下平面的展示</p><p>就类似 Excel 一个格子一个货位展示，用颜色区分下放东西没。</p><p>仓库管理无非就是管理好仓库内的东西，主要有</p>',36)]))}const u=a(n,[["render",i]]);export{c as __pageData,u as default};
