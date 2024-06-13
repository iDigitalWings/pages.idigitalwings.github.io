import{_ as s,a,o as i,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const g=JSON.parse('{"title":"Devon4j: 项目结构","description":"","frontmatter":{"title":"Devon4j: 项目结构","date":"2022-06-11T00:00:00.000Z","tags":["devon4j"],"category":["架构"]},"headers":[],"relativePath":"posts/2022/06/2022-06-11-devon4j-project-structure.md","filePath":"posts/2022/06/2022-06-11-devon4j-project-structure.md","lastUpdated":1718173059000}'),e={name:"posts/2022/06/2022-06-11-devon4j-project-structure.md"},t=n(`<p>清晰的结构有助于开发人员从一个项目转到下一个项目以快速理解代码库。 如果每个开发人员都知道在哪里可以找到什么，那么项目开发就会变得更有效率。</p><h2 id="经典项目结构" tabindex="-1">经典项目结构 <a class="header-anchor" href="#经典项目结构" aria-label="Permalink to &quot;经典项目结构&quot;">​</a></h2><p>在本节中，我们将描述最初在 devonfw 中为 Java 提出的经典项目结构。 它仍然有效且完全受支持。但是，如果您想开始一个新项目， 请考虑使用[现代结构]。</p><h3 id="模块" tabindex="-1">模块 <a class="header-anchor" href="#模块" aria-label="Permalink to &quot;模块&quot;">​</a></h3><p>应用程序的结构<code>devon4j</code>分为以下模块：</p><ul><li><code>api</code>: 包含应用程序 API 的模块。API 包含通过远程服务与您的应用程序交互所需的工件。这可以是[REST 服务接口]、带有接口和数据类型的[传输对象]，也可以是OpenAPI或gRPC合约。</li><li><code>core</code>: maven 模块，包含应用程序的核心和服务实现，以及整个[逻辑层]和[数据访问层]。</li><li><code>batch</code>：[批处理层的可选模块]</li><li><code>server</code>: 捆绑整个应用程序（<code>core</code>可选<code>batch</code>）的模块，通常作为启动的 WAR 文件。</li></ul><h3 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h3><blockquote><p>Make jar not war. — Josh Long</p></blockquote><p>首先，重要的是要了解上述定义的模块旨在制作<code>api</code>、、<code>core</code>和<code>batch</code>可重用的工件，这些工件可以用作常规的 maven 依赖项。另一方面，要构建和部署您的应用程序，您需要一个包含所有必需的第 3 方库的最终工件。此工件不可作为 maven 依赖项重用。这正是<code>server</code>构建和打包这个最终部署工件的模块的目的。</p><p>默认情况下，</p><ul><li>我们先在<code>server/target</code>目录中使用 maven 构建一个常规的<code>WAR</code>文件（<code>*-server-&lt;version&gt;.war</code>）。</li><li>然后在第二步中创建一个引导文件(<code>*-server-botified.war</code>)。这个引导文件可以独立启(<code>java -jar &lt;filename&gt;.war</code>)。</li><li>同时，也可以将<code>WAR</code>文件部署到如<code>tomcat</code>or<code>jetty</code>的 servlet 容器。 <ul><li>由于各种原因不再推荐应用服务器和外部提供的 servlet 容器（请参阅<a href="https://devonfw-com.translate.goog/website/pages/docs/devonfw-guide_devon4j.wiki_guide-jee.asciidoc.html?_x_tr_sl=auto&amp;_x_tr_tl=zh-CN&amp;_x_tr_hl=en" target="_blank" rel="noreferrer">JEE</a>）。</li></ul></li><li>如果您希望创建一个引导<code>JAR</code>文件，只需要做的就是将<code>server/pom.xml</code>中的<code>packaging</code>从<code>war</code>更改为<code>jar</code>。</li></ul><h3 id="包结构-package-structure" tabindex="-1">包结构 / Package Structure <a class="header-anchor" href="#包结构-package-structure" aria-label="Permalink to &quot;包结构 / Package Structure&quot;">​</a></h3><p><code>src/main/java</code>和<code>src/test/java</code>内的代码包结构在「编码约定」package 一节已经进行了描述。下一节描述了架构和Package中不同代码元素的完整映射。</p><h3 id="层-layer" tabindex="-1">层 / Layer <a class="header-anchor" href="#层-layer" aria-label="Permalink to &quot;层 / Layer&quot;">​</a></h3><p>下表描述了我们用于包划分和分层的经典方法：</p><p>表 41. 传统的通用 devon4j 层</p><table tabindex="0"><thead><tr><th><strong>Layer</strong></th><th><strong>«layer»</strong></th></tr></thead><tbody><tr><td>service</td><td><code>service</code></td></tr><tr><td>logic</td><td><code>logic</code></td></tr><tr><td>data-access</td><td><code>dataaccess</code></td></tr><tr><td>batch（可选）</td><td><code>batch</code></td></tr><tr><td>client（可选）</td><td><code>client</code></td></tr><tr><td>common</td><td><code>common</code></td></tr></tbody></table><h3 id="架构映射" tabindex="-1">架构映射 <a class="header-anchor" href="#架构映射" aria-label="Permalink to &quot;架构映射&quot;">​</a></h3><p>为了帮助您将架构、包、分层等映射到代码中，并查看不同的代码元素应该放在哪里，我们提供了这个架构映射：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">«root»</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">├──.«component»</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  ├──.common</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  ├──.api[.«detail»]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  ├──.datatype</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  |  └──.«Datatype» (api)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  └──.«BusinessObject» (api)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  └──.impl[.«detail»]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |     ├──.«Aspect»ConfigProperties (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |     ├──.«Datatype»JsonSerializer (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |     └──.«Datatype»JsonDeserializer (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  ├──.dataaccess</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  ├──.api[.«detail»]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  ├──.repo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  |  └──.«BusinessObject»Repository (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  ├──.dao (core) [alternative to repo]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  |  └──.«BusinessObject»Dao (core) [alternative to Repository]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  └──.«BusinessObject»Entity (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  └──.impl[.«detail»]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |     ├──.dao (core) [alternative to repo]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |     |  └──.«BusinessObject»DaoImpl (core) [alternative to Repository]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |     └──.«Datatype»AttributeConverter (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  ├──.logic</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  ├──.api</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  ├──.[«detail».]to</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  |   ├──.«MyCustom»«To (api)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  |   ├──.«DataStructure»Embeddable (api)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  |   ├──.«BusinessObject»Eto (api)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  |   └──.«BusinessObject»«Subset»Cto (api)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  ├──.[«detail».]usecase</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  |   ├──.UcFind«BusinessObject» (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  |   ├──.UcManage«BusinessObject» (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  |   └──.Uc«Operation»«BusinessObject» (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  └──.«Component» (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  ├──.base</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  └──.[«detail».]usecase</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |     └──.Abstract«BusinessObject»Uc (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  └──.impl</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |     ├──.[«detail».]usecase</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |     |   ├──.UcFind«BusinessObject»Impl (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |     |   ├──.UcManage«BusinessObject»Impl (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |     |   └──.Uc«Operation»«BusinessObject»Impl (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |     └──.«Component»Impl (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  └──.service</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|     ├──.api[.«detail»]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|     |  ├──.rest</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|     |  |  └──.«Component»RestService (api)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|     |  └──.ws</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|     |     └──.«Component»WebService (api)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|     └──.impl[.«detail»]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|        ├──.jms</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|        |  └──.«BusinessObject»JmsListener (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|        ├──.rest</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|        |  └──.«Component»RestServiceImpl (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|        └──.ws</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|           └──.«Component»WebServiceImpl (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">├──.general</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">│  ├──.common</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">│  |  ├──.api</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  ├──.to</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  |  ├──.AbstractSearchCriteriaTo (api)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  └──.ApplicationEntity</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">│  |  ├──.base</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  └──.AbstractBeanMapperSupport (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">│  |  └──.impl</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">│  |     ├──.config</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">│  |     |  └──.ApplicationObjectMapperFactory (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">│  |     └──.security</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">│  |        └──.ApplicationWebSecurityConfig (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">│  ├──.dataaccess</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">│  |  └──.api</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |     └──.ApplicationPersistenceEntity (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">│  ├──.logic</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">│  |  └──.base</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |     ├──.AbstractComponentFacade (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |     ├──.AbstractLogic (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |     └──.AbstractUc (core)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  └──.service</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|     └──...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">└──.SpringBootApp (core)</span></span></code></pre></div><h2 id="现代项目结构" tabindex="-1">现代项目结构 <a class="header-anchor" href="#现代项目结构" aria-label="Permalink to &quot;现代项目结构&quot;">​</a></h2><p>随着云、微服务、精益和敏捷等趋势，我们决定采用更现代的项目结构，以更好地适应最近的市场趋势。在使用 devonfw 开始新项目时，尤其是在云原生开发的背景下，我们强烈推荐这种现代方法而不是[经典结构]。</p><h3 id="模块-1" tabindex="-1">模块 <a class="header-anchor" href="#模块-1" aria-label="Permalink to &quot;模块&quot;">​</a></h3><p>由于微服务等趋势，与模块相比，我们正在构建更小的应用程序。为简单起见，我们因此不会将我们的应用程序拆分为不同的模块，并保持一切顶级和简单。</p><p>除了<code>java</code>and之外<code>resources</code>，我们还<code>helm</code>为 helm 模板和<code>docker</code>docker 脚本（例如<code>Dockerfile</code>）添加了<code>src/main</code>：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">├──/src</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  ├──/main</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  ├──/docker</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  ├──/helm</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  ├──/java</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  └──/resources</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  └──/test</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|     ├──/java</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|     └──/resources</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">└──/pom.xml</span></span></code></pre></div><h3 id="部署-1" tabindex="-1">部署 <a class="header-anchor" href="#部署-1" aria-label="Permalink to &quot;部署&quot;">​</a></h3><p>对于现代项目，我们强烈建议您的构建过程将最终交付物生成为符合 OCI 的容器。此外，要完全实现云原生，您应该通过[GraalVM] AOT 编译器将您的应用程序构建为原生镜像。因此，我们建议使用[quarkus]作为您的主要框架。如果您想使用 spring，您可以考虑使用[spring-native]。</p><h3 id="层-layer-1" tabindex="-1">层 / Layer <a class="header-anchor" href="#层-layer-1" aria-label="Permalink to &quot;层 / Layer&quot;">​</a></h3><p>对于现代项目结构，层由下表定义：</p><table tabindex="0"><thead><tr><th><strong>Layer</strong></th><th><strong>«layer»</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td>service</td><td><code>service</code></td><td>服务层通过其远程 API 公开功能。典型的协议是[REST]。也可能是您正在使用的任何其他协议，例如[gRPC]。</td></tr><tr><td>domain</td><td><code>domain</code></td><td>具有数据模型和数据库访问权限的域。对存储库和DAO使用子包 (in<code>«detail»</code>)。我们还建议将实体放在子包中。<code>repository</code>、<code>dao</code>、<code>model</code></td></tr><tr><td>logic</td><td><code>logic</code></td><td>具有提供业务价值的功能的逻辑层。</td></tr><tr><td>common</td><td><code>common</code></td><td>未分配给技术层的横切代码。</td></tr></tbody></table><h3 id="架构映射-1" tabindex="-1">架构映射 <a class="header-anchor" href="#架构映射-1" aria-label="Permalink to &quot;架构映射&quot;">​</a></h3><p>为了帮助您将架构、打包、分层等映射到代码中，并查看不同的代码元素应该放在哪里，我们提供了这个架构映射：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">«root»</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">├──.«component»</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  ├──.domain</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  ├──.repo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  ├──.«BusinessObject»Repository</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  ├──.«BusinessObject»Fragment</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  └──.«BusinessObject»FragmentImpl</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  ├──.dao [alternative to repo]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  ├──.«BusinessObject»Dao</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  |  └──.«BusinessObject»DaoImpl</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  └──.model</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |     └──.«BusinessObject»Entity</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  ├──.logic</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  ├──«BusinessObject»Validator</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  |  └──«BusinessObject»EventsEmitter</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|   |  └──.Uc«Operation»«BusinessObject»[Impl]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|  └──.rest</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|     └──.v1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|        ├──.«Component»RestService</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|        ├──.mapper</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|        |     └──.«BusinessObject»Mapper</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|        └──.model</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">|           └──.«BusinessObject»Dto</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">└──.general</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">   └──.domain</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      └──.model</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">         └──.ApplicationPersistenceEntity</span></span></code></pre></div>`,34),l=[t];function p(h,c,r,d,k,o){return i(),a("div",null,l)}const y=s(e,[["render",p]]);export{g as __pageData,y as default};
