import{_ as t,a as e,af as l,o as r}from"./chunks/framework.C87LdZyP.js";const s="/assets/architecture.G-yO4ZBC.png",u=JSON.parse('{"title":"Apache Atlas 架构介绍","description":"","frontmatter":{"title":"Apache Atlas 架构介绍","date":"2022-04-07T00:00:00.000Z","tags":["apache-atlas"],"category":["BigData"]},"headers":[],"relativePath":"posts/2022/04/2022-04-07-apache-atlas-intro.md","filePath":"posts/2022/04/2022-04-07-apache-atlas-intro.md","lastUpdated":1718173059000}'),i={name:"posts/2022/04/2022-04-07-apache-atlas-intro.md"};function o(n,a,p,c,h,g){return r(),e("div",null,a[0]||(a[0]=[l('<h2 id="high-level-architecture" tabindex="-1">High Level Architecture <a class="header-anchor" href="#high-level-architecture" aria-label="Permalink to &quot;High Level Architecture&quot;">​</a></h2><p><img src="'+s+'" alt=""></p><h3 id="存储" tabindex="-1">存储 <a class="header-anchor" href="#存储" aria-label="Permalink to &quot;存储&quot;">​</a></h3><p>存储分两部分， 默认使用 Hbase 存储元数据，Solr 进行搜索。</p><h3 id="core-核心" tabindex="-1">Core 核心 <a class="header-anchor" href="#core-核心" aria-label="Permalink to &quot;Core 核心&quot;">​</a></h3><p>Atlas 核心包含如下组件：</p><ul><li><strong>Type System / 类型系统</strong>：Atlas 允许用户定义元数据对象的模型。模型由「types」的定义组成。「types」的实例 称之为「entities」，来代表他们实际管理的元数据对象。类型系统就是允许用户定义和管理「types」以及「entities」的 组件。Atlas 管理的所有外部元数据（比如 Hive 表）都是通过「types」来建模，通过「entities」来展现。要在 Atlas 里面存储新的元数据类型，就需要理解类型系统组件。</li><li><strong>Graph Engine / 图引擎</strong>：Atlas 在内部采用一个图模型来管理元数据对象。 这种方式提供了极大的灵活性，并可以 有效处理元数据对象之间的丰富关系。图引擎组件负责 Atlas 类型系统的types和entities 与底层图持久化模型之间的翻译。 除了管理图对象，图引擎还为元数据对象创建目录以便更有效的进行搜索。Atlas 使用JanusGraph来存储元数据对象。</li><li><strong>Ingest/Export / 提取和导出</strong>：提取组件允许元数据被添加到 Atlas。同样的，导出组件通过生成事件（Events） 来暴露 Atlas 侦测到的元数据变化。消费者可以消费这些变更事件来及时处理元数据变更。</li><li><strong>Integration / 集成</strong>：用户可以通过两种方式管理于元数据： <ul><li>API</li><li>Messaging</li></ul></li><li><strong>Metadata Sources</strong><ul><li>HBase</li><li>Hive</li><li>Sqoop</li><li>Storm</li><li>Kafka</li></ul></li><li><strong>Applications / 应用</strong>：Atlas管理的元数据被多种程序消费来满足不同的管理使用场景。 <ul><li><strong>Atlas Admin UI</strong></li><li><strong>Tag Based Policies</strong> <a href="https://ranger.apache.org/" target="_blank" rel="noreferrer">Apache Ranger</a> 是一个 Hadoop 生态 先进的安全管理方案，广泛的集成了多种 Hadoop 组件。通过集成 Atlas，Ranger 允许安全管理员来定义元数据驱动 的安全策略来进行安全治理。Ranger 消费 Atlas 的元数据变更事件。</li></ul></li></ul><hr><ul><li><a href="https://atlas.apache.org/" target="_blank" rel="noreferrer">https://atlas.apache.org/</a></li></ul>',9)]))}const A=t(i,[["render",o]]);export{u as __pageData,A as default};
