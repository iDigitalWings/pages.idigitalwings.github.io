import{_ as i,a,af as o,o as t}from"./chunks/framework.C87LdZyP.js";const l="/assets/img.IyJ_AsRp.png",n="/assets/img_1.DSQbD4wC.png",u=JSON.parse('{"title":"Java: ThreadPoolExecutor 和 ForkJoinPool","description":"","frontmatter":{"title":"Java: ThreadPoolExecutor 和 ForkJoinPool","date":"2022-04-18T00:00:00.000Z","tags":["Java","线程池"],"category":["Java"]},"headers":[],"relativePath":"posts/2022/04/2022-04-18-forkjoinpool.md","filePath":"posts/2022/04/2022-04-18-forkjoinpool.md","lastUpdated":1718173059000}'),e={name:"posts/2022/04/2022-04-18-forkjoinpool.md"};function k(h,s,p,r,d,c){return t(),a("div",null,s[0]||(s[0]=[o('<p>ForkJoinPool 和 ThreadPoolExecutor 类似，实现了 Executor 和 ExecutorService 接口。当使用这些接口的时候，ForkJoinPool 会使用 一个无界列队来存储任务。这些任务由线程池构造函数中指定的线程数执行。 如果没有指定线程数的化，则默认使用机器可用 CPU 数的线程数量。</p><p>ForkJoinPool 往往用于实现分治算法。即将一个任务分解成多个具备可加性的 子任务，然后并行执行子任务，最后将子任务的运算结果进行一次聚合云散得到 最终结果。比如快速排序算法。</p><p>分治算法往往会创建大量任务，但是你不太可能创建和任务等量的线程来执行他们。</p><p>比如对 1000万个元素的数组进行排序，大致流程是对数组折半拆分，最后在对 两个子数组进行合并。</p><p><img src="'+l+'" alt=""><img src="'+n+`" alt=""></p><p>在任意一级子任务完成前，父任务是无法执行的。如果用 ThreadPoolExecutor 来实现这样就会造成很多线程的等待。</p><p>ForkJoinPool 则不需要在子任务完成前保持等待，它可以在任务暂停的时候去 执行其它待处理的任务。</p><p>fork/join 方法具备暂停执行中任务的功能。这使得所有的任务只需要几个线程 就可以执行。 这样假设 100W 个任务，我们使用 ForkJoinPool 只需要少量甚至 一个线程就可以完成。而 ThreadPoolExecutor 则需要 100W 个线程。</p><p>ForkJoinPool 使用场景：</p><ul><li>少量线程完成大量任务</li><li>非阻塞，能快速处理的业务（或阻塞时延比较少）</li></ul><p>ThreadPoolExecutor 使用场景：</p><ul><li>常见线程并发场景</li><li>阻塞时延比较长</li></ul><p>多数情况下，我们推荐分割任务然后使用 ThreadPoolExecutor 来执行以获取更好的性能。</p><h2 id="工作窃取" tabindex="-1">工作窃取 <a class="header-anchor" href="#工作窃取" aria-label="Permalink to &quot;工作窃取&quot;">​</a></h2><p>ForkJoinPool 中的每一个线程都有自己的专属任务列队（ThreadPoolExecutor 一个池子只有一个）。</p><p>ForkJoinPool 线程会优先处理自己的任务列队，如果列队是空的就会去其它线程的 列队中寻找任务。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>把任务分割成效率平和的集合，然后分割使用 ThreadPoolExecutor 可获得良好性能。</p></div><h2 id="默认池" tabindex="-1">默认池 <a class="header-anchor" href="#默认池" aria-label="Permalink to &quot;默认池&quot;">​</a></h2><p>通过下面方法查看公共池大小</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">ForkJoinPool.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">commonPool</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getParallelism</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span></code></pre></div><p>通过属性调整公共池大小：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Djava.util.concurrent.ForkJoinPool.common.parallelism</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">N</span></span></code></pre></div><h2 id="自定义线程池" tabindex="-1">自定义线程池 <a class="header-anchor" href="#自定义线程池" aria-label="Permalink to &quot;自定义线程池&quot;">​</a></h2><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">ForkJoinPool</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> forkJoinPool1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> ForkJoinPool</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">ForkJoinTask</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">&gt; </span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">fs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> forkJoinPool.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">submit</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> list.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">parallelStream</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">((n) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        n.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">doSomething</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }));</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (InterruptedException </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    e.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">printStackTrace</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (ExecutionException </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    e.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">printStackTrace</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">forkJoinPool.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">shutdown</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span></code></pre></div><h2 id="threadpool-executor-组成" tabindex="-1">ThreadPool Executor 组成 <a class="header-anchor" href="#threadpool-executor-组成" aria-label="Permalink to &quot;ThreadPool Executor 组成&quot;">​</a></h2><p>1、线程池管理器（ThreadPool）：用于创建并管理线程池，包括 创建线程池，销毁线程池，添加新任务； 2、工作线程（PoolWorker）：线程池中线程，在没有任务时处于等待状态，可以循环的执行任务； 3、任务接口（Task）：每个任务必须实现的接口，以供工作线程调度任务的执行，它主要规定了任务的入口，任务执行完后的收尾工作，任务的执行状态等； 4、任务队列（taskQueue）：用于存放没有处理的任务。提供一种缓冲机制。</p><p>工作方式：</p><p>线程池有一个工作队列，队列中包含了要分配给各线程的工作。当线程空闲时，就会从队列中认领工作。由于线程资源的创建与销毁开销很大，所以ThreadPool允许线程的重用，减少创建与销毁的次数，提高效率。</p><h2 id="forkjoinpool-executor" tabindex="-1">ForkJoinPool Executor <a class="header-anchor" href="#forkjoinpool-executor" aria-label="Permalink to &quot;ForkJoinPool Executor&quot;">​</a></h2><p>ForkJoinPool组成类：</p><p>1，ForkJoinPool：充当fork/join框架里面的管理者，最原始的任务都要交给它才能处理。它负责控制整个fork/join有多少个workerThread，workerThread的创建，激活都是由它来掌控。它还负责workQueue队列的创建和分配，每当创建一个workerThread，它负责分配相应的workQueue。然后它把接到的活都交给workerThread去处理，它可以说是整个frok/join的容器。 2，ForkJoinWorkerThread：fork/join里面真正干活的&quot;工人&quot;，本质是一个线程。里面有一个ForkJoinPool.WorkQueue的队列存放着它要干的活，接活之前它要向ForkJoinPool注册(registerWorker)，拿到相应的workQueue。然后就从workQueue里面拿任务出来处理。它是依附于ForkJoinPool而存活，如果ForkJoinPool的销毁了,它也会跟着结束。 3，ForkJoinPool.WorkQueue: 双端队列就是它，它负责存储接收的任务。 4，ForkJoinTask：代表fork/join里面任务类型，我们一般用它的两个子类RecursiveTask、RecursiveAction。这两个区别在于RecursiveTask任务是有返回值，RecursiveAction没有返回值。任务的处理逻辑包括任务的切分都集中在compute()方法里面。</p><p>工作方式：</p><p>使用一种分治算法，递归地将任务分割成更小的子任务，其中阈值可配置，然后把子任务分配给不同的线程执行并发执行，最后再把结果组合起来。该用法常见于数组与集合的运算。</p><hr><ul><li><a href="https://article.itxueyuan.com/7eWdyG" target="_blank" rel="noreferrer">https://article.itxueyuan.com/7eWdyG</a></li></ul>`,35)]))}const A=i(e,[["render",k]]);export{u as __pageData,A as default};
