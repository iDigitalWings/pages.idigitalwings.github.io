import{_ as a,a as n,o as s,aj as e}from"./chunks/framework.Ba_Ek9Jm.js";const h=JSON.parse('{"title":"Java CPU","description":"","frontmatter":{"title":"Java CPU","date":"2018-04-22T00:00:00.000Z","tags":["java"]},"headers":[],"relativePath":"posts/2018/04/2018-04-23-java-cpu.md","filePath":"posts/2018/04/2018-04-23-java-cpu.md","lastUpdated":1718187682000}'),p={name:"posts/2018/04/2018-04-23-java-cpu.md"},t=e(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>ps -mp 6145 -o THREAD,tid,time | sort -rn | more</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>$ printf &quot;%x\\n&quot; 6150</span></span>
<span class="line"><span>1806</span></span>
<span class="line"><span>$ jstack 6145 |grep 1806 -A 50</span></span>
<span class="line"><span>6145: Unable to open socket file: target process not responding or HotSpot VM not loaded</span></span>
<span class="line"><span>The -F option can be used when the target process is not responding</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>$ /home/shuyi/app/java/jdk1.8.0_131/bin/jstack -J-d64 -m  6145</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Attaching to process ID 6145, please wait...</span></span>
<span class="line"><span>Debugger attached successfully.</span></span>
<span class="line"><span>Server compiler detected.</span></span>
<span class="line"><span>JVM version is 25.131-b11</span></span>
<span class="line"><span>Deadlock Detection:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>No deadlocks found.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>----------------- 6146 -----------------</span></span>
<span class="line"><span>0x00007fb2c4c99c9d	__GI___poll + 0x2d</span></span>
<span class="line"><span>0x00007fb2a6e77977	Java_java_net_PlainSocketImpl_socketAccept + 0x1e7</span></span>
<span class="line"><span>0x00007fb2ad017774	* java.net.PlainSocketImpl.socketAccept(java.net.SocketImpl) bci:0 (Interpreted frame)</span></span>
<span class="line"><span>0x00007fb2ad007ffd	* java.net.AbstractPlainSocketImpl.accept(java.net.SocketImpl) bci:7 line:409 (Interpreted frame)</span></span>
<span class="line"><span>0x00007fb2ad007ffd	* java.net.ServerSocket.implAccept(java.net.Socket) bci:60 line:545 (Interpreted frame)</span></span>
<span class="line"><span>0x00007fb2ad007ffd	* java.net.ServerSocket.accept() bci:48 line:513 (Interpreted frame)</span></span>
<span class="line"><span>0x00007fb2ad007d80	* org.apache.catalina.core.StandardServer.await() bci:180 line:446 (Interpreted frame)</span></span>
<span class="line"><span>0x00007fb2ad008042	* org.apache.catalina.startup.Catalina.await() bci:4 line:717 (Interpreted frame)</span></span>
<span class="line"><span>0x00007fb2ad007ffd	* org.apache.catalina.startup.Catalina.start() bci:209 line:663 (Interpreted frame)</span></span>
<span class="line"><span>0x00007fb2ad0004e7	&lt;StubRoutines&gt;</span></span>
<span class="line"><span>0x00007fb2c4247d16	_ZN9JavaCalls11call_helperEP9JavaValueP12methodHandleP17JavaCallArgumentsP6Thread + 0x1056</span></span>
<span class="line"><span>0x00007fb2c4553637	_ZN10Reflection6invokeE19instanceKlassHandle12methodHandle6Handleb14objArrayHandle9BasicTypeS3_bP6Thread + 0x5d7</span></span>
<span class="line"><span>0x00007fb2c4556d47	_ZN10Reflection13invoke_methodEP7oopDesc6Handle14objArrayHandleP6Thread + 0x147</span></span>
<span class="line"><span>0x00007fb2c42db3cb	JVM_InvokeMethod + 0x26b</span></span>
<span class="line"><span>0x00007fb2ad017774	* sun.reflect.NativeMethodAccessorImpl.invoke0(java.lang.reflect.Method, java.lang.Object, java.lang.Object[]) bci:0 (Interpreted frame)</span></span>
<span class="line"><span>0x00007fb2ad007d80	* sun.reflect.NativeMethodAccessorImpl.invoke(java.lang.Object, java.lang.Object[]) bci:100 line:62 (Interpreted frame)</span></span>
<span class="line"><span>0x00007fb2ad1cfc0c	* sun.reflect.DelegatingMethodAccessorImpl.invoke(java.lang.Object, java.lang.Object[]) bci:6 line:43 (Compiled frame)</span></span>
<span class="line"><span>* java.lang.reflect.Method.invoke(java.lang.Object, java.lang.Object[]) bci:56 line:498 (Compiled frame)</span></span>
<span class="line"><span>* org.apache.catalina.startup.Bootstrap.start() bci:37 line:351 (Interpreted frame)</span></span>
<span class="line"><span>0x00007fb2ad007ffd	* org.apache.catalina.startup.Bootstrap.main(java.lang.String[]) bci:150 line:485 (Interpreted frame)</span></span>
<span class="line"><span>0x00007fb2ad0004e7	&lt;StubRoutines&gt;</span></span>
<span class="line"><span>0x00007fb2c4247d16	_ZN9JavaCalls11call_helperEP9JavaValueP12methodHandleP17JavaCallArgumentsP6Thread + 0x1056</span></span>
<span class="line"><span>0x00007fb2c4289132	_ZL17jni_invoke_staticP7JNIEnv_P9JavaValueP8_jobject11JNICallTypeP10_jmethodIDP18JNI_ArgumentPusherP6Thread + 0x362</span></span>
<span class="line"><span>0x00007fb2c42a599a	jni_CallStaticVoidMethod + 0x17a</span></span>
<span class="line"><span>0x00007fb2c517dbdf	JavaMain + 0x81f</span></span>
<span class="line"><span>----------------- 6147 -----------------</span></span>
<span class="line"><span>0x00007fb2c43b40f2		????????</span></span>
<span class="line"><span>0x00007fb2c4518b72	_ZN16StealMarkingTask5do_itEP13GCTaskManagerj + 0x382</span></span>
<span class="line"><span>0x00007fb2c418ed5f	_ZN12GCTaskThread3runEv + 0x12f</span></span>
<span class="line"><span>0x00007fb2c44dd568	_ZL10java_startP6Thread + 0x108</span></span>
<span class="line"><span>----------------- 6148 -----------------</span></span>
<span class="line"><span>0x00007fb2c43b40f2		????????</span></span>
<span class="line"><span>0x00007fb2c4518b72	_ZN16StealMarkingTask5do_itEP13GCTaskManagerj + 0x382</span></span>
<span class="line"><span>0x00007fb2c418ed5f	_ZN12GCTaskThread3runEv + 0x12f</span></span>
<span class="line"><span>0x00007fb2c44dd568	_ZL10java_startP6Thread + 0x108</span></span>
<span class="line"><span>----------------- 6149 -----------------</span></span>
<span class="line"><span>0x00007fb2c43b40f9		????????</span></span>
<span class="line"><span>0x00007fb2c4518b72	_ZN16StealMarkingTask5do_itEP13GCTaskManagerj + 0x382</span></span>
<span class="line"><span>0x00007fb2c418ed5f	_ZN12GCTaskThread3runEv + 0x12f</span></span>
<span class="line"><span>0x00007fb2c44dd568	_ZL10java_startP6Thread + 0x108</span></span>
<span class="line"><span>----------------- 6150 -----------------</span></span>
<span class="line"><span>0x00007fb2c453b2c4	_ZN19ParallelCompactData7add_objEP8HeapWordm + 0x24</span></span>
<span class="line"><span>0x00007fb2c41ffedf	_ZN13InstanceKlass19oop_follow_contentsEP20ParCompactionManagerP7oopDesc + 0x33f</span></span>
<span class="line"><span>0x00007fb2c4532cb2	_ZN20ParCompactionManager21follow_marking_stacksEv + 0x232</span></span>
<span class="line"><span>0x00007fb2c4518ad5	_ZN16StealMarkingTask5do_itEP13GCTaskManagerj + 0x2e5</span></span>
<span class="line"><span>0x00007fb2c418ed5f	_ZN12GCTaskThread3runEv + 0x12f</span></span>
<span class="line"><span>0x00007fb2c44dd568	_ZL10java_startP6Thread + 0x108</span></span>
<span class="line"><span>----------------- 6151 -----------------</span></span>
<span class="line"><span>0x00007fb2c5398404	__pthread_cond_wait + 0xc4</span></span>
<span class="line"><span>0x00007fb2c4497037	_ZN7Monitor5IWaitEP6Threadl + 0xf7</span></span>
<span class="line"><span>0x00007fb2c4497956	_ZN7Monitor4waitEblb + 0x256</span></span>
<span class="line"><span>0x00007fb2c418e3c2	_ZN13GCTaskManager16execute_and_waitEP11GCTaskQueue + 0xd2</span></span>
<span class="line"><span>0x00007fb2c453d124	_ZN17PSParallelCompact13marking_phaseEP20ParCompactionManagerbP17ParallelOldTracer + 0x374</span></span>
<span class="line"><span>0x00007fb2c454242e	_ZN17PSParallelCompact16invoke_no_policyEb + 0x40e</span></span>
<span class="line"><span>0x00007fb2c454830d	_ZN10PSScavenge6invokeEv + 0x1ad</span></span>
<span class="line"><span>0x00007fb2c44fef00	_ZN20ParallelScavengeHeap19failed_mem_allocateEm + 0x70</span></span>
<span class="line"><span>0x00007fb2c467fc87	_ZN29VM_ParallelGCFailedAllocation4doitEv + 0x97</span></span>
<span class="line"><span>0x00007fb2c4687765	_ZN12VM_Operation8evaluateEv + 0x55</span></span>
<span class="line"><span>0x00007fb2c4685b3a	_ZN8VMThread18evaluate_operationEP12VM_Operation + 0xba</span></span>
<span class="line"><span>0x00007fb2c4685efd	_ZN8VMThread4loopEv + 0x20d</span></span>
<span class="line"><span>0x00007fb2c4686330	_ZN8VMThread3runEv + 0x70</span></span>
<span class="line"><span>0x00007fb2c44dd568	_ZL10java_startP6Thread + 0x108</span></span>
<span class="line"><span>----------------- 6153 -----------------</span></span>
<span class="line"><span>0x00007fb2c5398404	__pthread_cond_wait + 0xc4</span></span>
<span class="line"><span>0x00007fb2c44c8655	_ZN13ObjectMonitor4waitElbP6Thread + 0xa65</span></span>
<span class="line"><span>0x00007fb2c42dbd52	JVM_MonitorWait + 0x182</span></span>
<span class="line"><span>0x00007fb2ae5d29e8	&lt;Unknown compiled code&gt;</span></span>
<span class="line"><span>----------------- 6154 -----------------</span></span>
<span class="line"><span>0x00007fb2c5398404	__pthread_cond_wait + 0xc4</span></span>
<span class="line"><span>0x00007fb2c44c8655	_ZN13ObjectMonitor4waitElbP6Thread + 0xa65</span></span>
<span class="line"><span>0x00007fb2c42dbd52	JVM_MonitorWait + 0x182</span></span>
<span class="line"><span>0x00007fb2ae5d29e8	&lt;Unknown compiled code&gt;</span></span>
<span class="line"><span>----------------- 6165 -----------------</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>$ tail -f logs/catalina.out -n 444</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;bus-3&quot; #24 daemon prio=5 os_prio=0 tid=0x00007fb25a415000 nid=0x189a waiting on condition [0x00007fb2527f8000]</span></span>
<span class="line"><span>   java.lang.Thread.State: WAITING (parking)</span></span>
<span class="line"><span>	at sun.misc.Unsafe.park(Native Method)</span></span>
<span class="line"><span>	- parking to wait for  &lt;0x00000006c63dca08&gt; (a java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject)</span></span>
<span class="line"><span>	at java.util.concurrent.locks.LockSupport.park(LockSupport.java:175)</span></span>
<span class="line"><span>	at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.await(AbstractQueuedSynchronizer.java:2039)</span></span>
<span class="line"><span>	at reactor.core.util.WaitStrategy$LiteBlocking.waitFor(WaitStrategy.java:324)</span></span>
<span class="line"><span>	at reactor.core.queue.RingBufferReceiver.waitFor(RingBufferReceiver.java:76)</span></span>
<span class="line"><span>	at reactor.core.publisher.WorkQueueProcessor$QueueSubscriberLoop.run(WorkQueueProcessor.java:821)</span></span>
<span class="line"><span>	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)</span></span>
<span class="line"><span>	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)</span></span>
<span class="line"><span>	at java.lang.Thread.run(Thread.java:748)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;bus-2&quot; #23 daemon prio=5 os_prio=0 tid=0x00007fb258e88000 nid=0x1899 waiting on condition [0x00007fb2528f9000]</span></span>
<span class="line"><span>   java.lang.Thread.State: WAITING (parking)</span></span>
<span class="line"><span>	at sun.misc.Unsafe.park(Native Method)</span></span>
<span class="line"><span>	- parking to wait for  &lt;0x00000006c63dca08&gt; (a java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject)</span></span>
<span class="line"><span>	at java.util.concurrent.locks.LockSupport.park(LockSupport.java:175)</span></span>
<span class="line"><span>	at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.await(AbstractQueuedSynchronizer.java:2039)</span></span>
<span class="line"><span>	at reactor.core.util.WaitStrategy$LiteBlocking.waitFor(WaitStrategy.java:324)</span></span>
<span class="line"><span>	at reactor.core.queue.RingBufferReceiver.waitFor(RingBufferReceiver.java:76)</span></span>
<span class="line"><span>	at reactor.core.publisher.WorkQueueProcessor$QueueSubscriberLoop.run(WorkQueueProcessor.java:821)</span></span>
<span class="line"><span>	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)</span></span>
<span class="line"><span>	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)</span></span>
<span class="line"><span>	at java.lang.Thread.run(Thread.java:748)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;bus-1&quot; #22 daemon prio=5 os_prio=0 tid=0x00007fb262919000 nid=0x1898 waiting on condition [0x00007fb2529fa000]</span></span>
<span class="line"><span>   java.lang.Thread.State: WAITING (parking)</span></span>
<span class="line"><span>	at sun.misc.Unsafe.park(Native Method)</span></span>
<span class="line"><span>	- parking to wait for  &lt;0x00000006c63dca08&gt; (a java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject)</span></span>
<span class="line"><span>	at java.util.concurrent.locks.LockSupport.park(LockSupport.java:175)</span></span>
<span class="line"><span>	at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.await(AbstractQueuedSynchronizer.java:2039)</span></span>
<span class="line"><span>	at reactor.core.util.WaitStrategy$LiteBlocking.waitFor(WaitStrategy.java:324)</span></span>
<span class="line"><span>	at reactor.core.queue.RingBufferReceiver.waitFor(RingBufferReceiver.java:76)</span></span>
<span class="line"><span>	at reactor.core.publisher.WorkQueueProcessor$QueueSubscriberLoop.run(WorkQueueProcessor.java:821)</span></span>
<span class="line"><span>	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)</span></span>
<span class="line"><span>	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)</span></span>
<span class="line"><span>	at java.lang.Thread.run(Thread.java:748)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;pool-2-thread-1&quot; #21 daemon prio=5 os_prio=0 tid=0x00007fb259e52000 nid=0x1897 waiting for monitor entry [0x00007fb252cfb000]</span></span>
<span class="line"><span>   java.lang.Thread.State: BLOCKED (on object monitor)</span></span>
<span class="line"><span>	at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.addConditionWaiter(AbstractQueuedSynchronizer.java:1855)</span></span>
<span class="line"><span>	at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.awaitNanos(AbstractQueuedSynchronizer.java:2068)</span></span>
<span class="line"><span>	at java.util.concurrent.ScheduledThreadPoolExecutor$DelayedWorkQueue.take(ScheduledThreadPoolExecutor.java:1093)</span></span>
<span class="line"><span>	at java.util.concurrent.ScheduledThreadPoolExecutor$DelayedWorkQueue.take(ScheduledThreadPoolExecutor.java:809)</span></span>
<span class="line"><span>	at java.util.concurrent.ThreadPoolExecutor.getTask(ThreadPoolExecutor.java:1067)</span></span>
<span class="line"><span>	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1127)</span></span>
<span class="line"><span>	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)</span></span>
<span class="line"><span>	at java.lang.Thread.run(Thread.java:748)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;cluster-ClusterId{value=&#39;5ad176e7a03dfa18018917e0&#39;, description=&#39;null&#39;}-mongo:37017&quot; #20 daemon prio=5 os_prio=0 tid=0x00007fb25a143000 nid=0x1896 waiting for monitor entry [0x00007fb2530fd000]</span></span>
<span class="line"><span>   java.lang.Thread.State: BLOCKED (on object monitor)</span></span>
<span class="line"><span>	at java.util.Collections$UnmodifiableList.listIterator(Collections.java:1337)</span></span>
<span class="line"><span>	at java.util.Collections$UnmodifiableList.listIterator(Collections.java:1334)</span></span>
<span class="line"><span>	at java.util.AbstractList.equals(AbstractList.java:519)</span></span>
<span class="line"><span>	at java.util.Collections$UnmodifiableList.equals(Collections.java:1306)</span></span>
<span class="line"><span>	at com.mongodb.TagSet.equals(TagSet.java:105)</span></span>
<span class="line"><span>	at com.mongodb.connection.ServerDescription.equals(ServerDescription.java:684)</span></span>
<span class="line"><span>	at com.mongodb.connection.DefaultServerMonitor.descriptionHasChanged(DefaultServerMonitor.java:247)</span></span>
<span class="line"><span>	at com.mongodb.connection.DefaultServerMonitor$ServerMonitorRunnable.logStateChange(DefaultServerMonitor.java:206)</span></span>
<span class="line"><span>	at com.mongodb.connection.DefaultServerMonitor$ServerMonitorRunnable.run(DefaultServerMonitor.java:163)</span></span>
<span class="line"><span>	- locked &lt;0x00000006c2a84cf0&gt; (a com.mongodb.connection.DefaultServerMonitor$ServerMonitorRunnable)</span></span>
<span class="line"><span>	at java.lang.Thread.run(Thread.java:748)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;commons-pool-EvictionTimer&quot; #19 daemon prio=5 os_prio=0 tid=0x00007fb262ed5800 nid=0x188d waiting for monitor entry [0x00007fb252ffc000]</span></span>
<span class="line"><span>   java.lang.Thread.State: BLOCKED (on object monitor)</span></span>
<span class="line"><span>	at org.apache.commons.pool2.impl.DefaultEvictionPolicy.evict(DefaultEvictionPolicy.java:48)</span></span>
<span class="line"><span>	at org.apache.commons.pool2.impl.GenericObjectPool.evict(GenericObjectPool.java:781)</span></span>
<span class="line"><span>	- locked &lt;0x00000006c2a871e8&gt; (a java.lang.Object)</span></span>
<span class="line"><span>	at org.apache.commons.pool2.impl.BaseGenericObjectPool$Evictor.run(BaseGenericObjectPool.java:1036)</span></span>
<span class="line"><span>	at java.util.TimerThread.mainLoop(Timer.java:555)</span></span>
<span class="line"><span>	at java.util.TimerThread.run(Timer.java:505)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;Abandoned connection cleanup thread&quot; #17 daemon prio=5 os_prio=0 tid=0x00007fb25533a000 nid=0x1870 in Object.wait() [0x00007fb2535fe000]</span></span>
<span class="line"><span>   java.lang.Thread.State: TIMED_WAITING (on object monitor)</span></span>
<span class="line"><span>	at java.lang.Object.wait(Native Method)</span></span>
<span class="line"><span>	at java.lang.ref.ReferenceQueue.remove(ReferenceQueue.java:143)</span></span>
<span class="line"><span>	- locked &lt;0x00000006c42127e0&gt; (a java.lang.ref.ReferenceQueue$Lock)</span></span>
<span class="line"><span>	at com.mysql.jdbc.AbandonedConnectionCleanupThread.run(AbandonedConnectionCleanupThread.java:43)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;Tomcat JDBC Pool Cleaner[1126195486:1523676895428]&quot; #16 daemon prio=5 os_prio=0 tid=0x00007fb2552ec000 nid=0x186f waiting for monitor entry [0x00007fb2a4bbd000]</span></span>
<span class="line"><span>   java.lang.Thread.State: BLOCKED (on object monitor)</span></span>
<span class="line"><span>	at com.mysql.jdbc.MysqlIO.getResultSet(MysqlIO.java:412)</span></span>
<span class="line"><span>	at com.mysql.jdbc.MysqlIO.readResultsForQueryOrUpdate(MysqlIO.java:3105)</span></span>
<span class="line"><span>	at com.mysql.jdbc.MysqlIO.readAllResults(MysqlIO.java:2336)</span></span>
<span class="line"><span>	at com.mysql.jdbc.MysqlIO.sqlQueryDirect(MysqlIO.java:2729)</span></span>
<span class="line"><span>	at com.mysql.jdbc.ConnectionImpl.execSQL(ConnectionImpl.java:2545)</span></span>
<span class="line"><span>	- locked &lt;0x00000006c2dac800&gt; (a com.mysql.jdbc.JDBC4Connection)</span></span>
<span class="line"><span>	at com.mysql.jdbc.ConnectionImpl.execSQL(ConnectionImpl.java:2503)</span></span>
<span class="line"><span>	at com.mysql.jdbc.StatementImpl.executeInternal(StatementImpl.java:839)</span></span>
<span class="line"><span>	- locked &lt;0x00000006c2dac800&gt; (a com.mysql.jdbc.JDBC4Connection)</span></span>
<span class="line"><span>	at com.mysql.jdbc.StatementImpl.execute(StatementImpl.java:739)</span></span>
<span class="line"><span>	at org.apache.tomcat.jdbc.pool.PooledConnection.validate(PooledConnection.java:509)</span></span>
<span class="line"><span>	at org.apache.tomcat.jdbc.pool.PooledConnection.validate(PooledConnection.java:443)</span></span>
<span class="line"><span>	at org.apache.tomcat.jdbc.pool.ConnectionPool.testAllIdle(ConnectionPool.java:1054)</span></span>
<span class="line"><span>	at org.apache.tomcat.jdbc.pool.ConnectionPool$PoolCleaner.run(ConnectionPool.java:1374)</span></span>
<span class="line"><span>	at java.util.TimerThread.mainLoop(Timer.java:555)</span></span>
<span class="line"><span>	at java.util.TimerThread.run(Timer.java:505)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;NioBlockingSelector.BlockPoller-1&quot; #12 daemon prio=5 os_prio=0 tid=0x00007fb2bc504800 nid=0x1844 runnable [0x00007fb2a5ff9000]</span></span>
<span class="line"><span>   java.lang.Thread.State: RUNNABLE</span></span>
<span class="line"><span>	at sun.nio.ch.EPollArrayWrapper.epollWait(Native Method)</span></span>
<span class="line"><span>	at sun.nio.ch.EPollArrayWrapper.poll(EPollArrayWrapper.java:269)</span></span>
<span class="line"><span>	at sun.nio.ch.EPollSelectorImpl.doSelect(EPollSelectorImpl.java:93)</span></span>
<span class="line"><span>	at sun.nio.ch.SelectorImpl.lockAndDoSelect(SelectorImpl.java:86)</span></span>
<span class="line"><span>	- locked &lt;0x00000006c06f1898&gt; (a sun.nio.ch.Util$3)</span></span>
<span class="line"><span>	- locked &lt;0x00000006c06f1888&gt; (a java.util.Collections$UnmodifiableSet)</span></span>
<span class="line"><span>	- locked &lt;0x00000006c06f1750&gt; (a sun.nio.ch.EPollSelectorImpl)</span></span>
<span class="line"><span>	at sun.nio.ch.SelectorImpl.select(SelectorImpl.java:97)</span></span>
<span class="line"><span>	at org.apache.tomcat.util.net.NioBlockingSelector$BlockPoller.run(NioBlockingSelector.java:342)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;GC Daemon&quot; #11 daemon prio=2 os_prio=0 tid=0x00007fb2bc44f000 nid=0x181b in Object.wait() [0x00007fb2a6757000]</span></span>
<span class="line"><span>   java.lang.Thread.State: TIMED_WAITING (on object monitor)</span></span>
<span class="line"><span>	at java.lang.Object.wait(Native Method)</span></span>
<span class="line"><span>	- waiting on &lt;0x00000006c0c55bf0&gt; (a sun.misc.GC$LatencyLock)</span></span>
<span class="line"><span>	at sun.misc.GC$Daemon.run(GC.java:117)</span></span>
<span class="line"><span>	- locked &lt;0x00000006c0c55bf0&gt; (a sun.misc.GC$LatencyLock)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;Service Thread&quot; #8 daemon prio=9 os_prio=0 tid=0x00007fb2bc0c1000 nid=0x1819 runnable [0x0000000000000000]</span></span>
<span class="line"><span>   java.lang.Thread.State: RUNNABLE</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;C1 CompilerThread2&quot; #7 daemon prio=9 os_prio=0 tid=0x00007fb2bc0be000 nid=0x1818 waiting on condition [0x0000000000000000]</span></span>
<span class="line"><span>   java.lang.Thread.State: RUNNABLE</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;C2 CompilerThread1&quot; #6 daemon prio=9 os_prio=0 tid=0x00007fb2bc0bc800 nid=0x1817 waiting on condition [0x0000000000000000]</span></span>
<span class="line"><span>   java.lang.Thread.State: RUNNABLE</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;C2 CompilerThread0&quot; #5 daemon prio=9 os_prio=0 tid=0x00007fb2bc0b9800 nid=0x1816 waiting on condition [0x0000000000000000]</span></span>
<span class="line"><span>   java.lang.Thread.State: RUNNABLE</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;Signal Dispatcher&quot; #4 daemon prio=9 os_prio=0 tid=0x00007fb2bc0b8000 nid=0x1815 waiting on condition [0x0000000000000000]</span></span>
<span class="line"><span>   java.lang.Thread.State: RUNNABLE</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;Finalizer&quot; #3 daemon prio=8 os_prio=0 tid=0x00007fb2bc084000 nid=0x180a in Object.wait() [0x00007fb2a7dfc000]</span></span>
<span class="line"><span>   java.lang.Thread.State: WAITING (on object monitor)</span></span>
<span class="line"><span>	at java.lang.Object.wait(Native Method)</span></span>
<span class="line"><span>	at java.lang.ref.ReferenceQueue.remove(ReferenceQueue.java:143)</span></span>
<span class="line"><span>	- locked &lt;0x00000006c086d368&gt; (a java.lang.ref.ReferenceQueue$Lock)</span></span>
<span class="line"><span>	at java.lang.ref.ReferenceQueue.remove(ReferenceQueue.java:164)</span></span>
<span class="line"><span>	at java.lang.ref.Finalizer$FinalizerThread.run(Finalizer.java:209)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;Reference Handler&quot; #2 daemon prio=10 os_prio=0 tid=0x00007fb2bc07f800 nid=0x1809 in Object.wait() [0x00007fb2a7efd000]</span></span>
<span class="line"><span>   java.lang.Thread.State: BLOCKED (on object monitor)</span></span>
<span class="line"><span>	at java.lang.Object.wait(Native Method)</span></span>
<span class="line"><span>	at java.lang.Object.wait(Object.java:502)</span></span>
<span class="line"><span>	at java.lang.ref.Reference.tryHandlePending(Reference.java:191)</span></span>
<span class="line"><span>	- locked &lt;0x00000006c0c56480&gt; (a java.lang.ref.Reference$Lock)</span></span>
<span class="line"><span>	at java.lang.ref.Reference$ReferenceHandler.run(Reference.java:153)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;main&quot; #1 prio=5 os_prio=0 tid=0x00007fb2bc00a000 nid=0x1802 runnable [0x00007fb2c57be000]</span></span>
<span class="line"><span>   java.lang.Thread.State: RUNNABLE</span></span>
<span class="line"><span>	at java.net.PlainSocketImpl.socketAccept(Native Method)</span></span>
<span class="line"><span>	at java.net.AbstractPlainSocketImpl.accept(AbstractPlainSocketImpl.java:409)</span></span>
<span class="line"><span>	at java.net.ServerSocket.implAccept(ServerSocket.java:545)</span></span>
<span class="line"><span>	at java.net.ServerSocket.accept(ServerSocket.java:513)</span></span>
<span class="line"><span>	at org.apache.catalina.core.StandardServer.await(StandardServer.java:446)</span></span>
<span class="line"><span>	at org.apache.catalina.startup.Catalina.await(Catalina.java:717)</span></span>
<span class="line"><span>	at org.apache.catalina.startup.Catalina.start(Catalina.java:663)</span></span>
<span class="line"><span>	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)</span></span>
<span class="line"><span>	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)</span></span>
<span class="line"><span>	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)</span></span>
<span class="line"><span>	at java.lang.reflect.Method.invoke(Method.java:498)</span></span>
<span class="line"><span>	at org.apache.catalina.startup.Bootstrap.start(Bootstrap.java:351)</span></span>
<span class="line"><span>	at org.apache.catalina.startup.Bootstrap.main(Bootstrap.java:485)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;VM Thread&quot; os_prio=0 tid=0x00007fb2bc078000 nid=0x1807 runnable </span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;GC task thread#0 (ParallelGC)&quot; os_prio=0 tid=0x00007fb2bc01f000 nid=0x1803 runnable </span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;GC task thread#1 (ParallelGC)&quot; os_prio=0 tid=0x00007fb2bc021000 nid=0x1804 runnable </span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;GC task thread#2 (ParallelGC)&quot; os_prio=0 tid=0x00007fb2bc022800 nid=0x1805 runnable </span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;GC task thread#3 (ParallelGC)&quot; os_prio=0 tid=0x00007fb2bc024800 nid=0x1806 runnable </span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;VM Periodic Task Thread&quot; os_prio=0 tid=0x00007fb2bc0c6000 nid=0x181a waiting on condition </span></span>
<span class="line"><span></span></span>
<span class="line"><span>JNI global references: 3206</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Heap</span></span>
<span class="line"><span> PSYoungGen      total 200883K, used 650010K [0x000000076ab00000, 0x00000007c0000000, 0x00000007c0000000)</span></span>
<span class="line"><span>  eden space 417280K, 99% used [0x000000076ab00000,0x000000078427fff0,0x0000000784280000)</span></span>
<span class="line"><span>  from space 465920K, 49% used [0x0000000784280000,0x00000007925c6a48,0x00000007a0980000)</span></span>
<span class="line"><span>  to   space 465920K, 0% used [0x00000007a3900000,0x00000007a3900000,0x00000007c0000000)</span></span>
<span class="line"><span> ParOldGen       total 2796544K, used 2796475K [0x00000006c0000000, 0x000000076ab00000, 0x000000076ab00000)</span></span>
<span class="line"><span>  object space 2796544K, 99% used [0x00000006c0000000,0x000000076aaeeff0,0x000000076ab00000)</span></span>
<span class="line"><span> Metaspace       used 183634K, capacity 227139K, committed 242944K, reserved 1239040K</span></span>
<span class="line"><span>  class space    used 25258K, capacity 48832K, committed 53032K, reserved 1048576K</span></span></code></pre></div><h3 id="what-is-the-young-generation" tabindex="-1">What is the young generation? <a class="header-anchor" href="#what-is-the-young-generation" aria-label="Permalink to &quot;What is the young generation?&quot;">​</a></h3><p>The Young Generation is where all new objects are allocated and aged. When the young generation fills up, this causes a minor garbage collection. A young generation full of dead objects is collected very quickly. Some surviving objects are aged and eventually move to the old generation.</p><h3 id="what-is-the-old-generation" tabindex="-1">What is the old generation? <a class="header-anchor" href="#what-is-the-old-generation" aria-label="Permalink to &quot;What is the old generation?&quot;">​</a></h3><p>The Old Generation is used to store long surviving objects. Typically, a threshold is set for young generation object and when that age is met, the object gets moved to the old generation. Eventually the old generation needs to be collected. This event is called a major garbage collection</p><h3 id="what-is-the-permanent-generation" tabindex="-1">What is the permanent generation? <a class="header-anchor" href="#what-is-the-permanent-generation" aria-label="Permalink to &quot;What is the permanent generation?&quot;">​</a></h3><p>The Permanent generation contains metadata required by the JVM to describe the classes and methods used in the application. The permanent generation is populated by the JVM at runtime based on classes in use by the application.</p><p>PermGen has been replaced with Metaspace since Java 8 release.</p><p>PermSize &amp; MaxPermSize parameters will be ignored now</p><hr><ul><li><a href="https://stackoverflow.com/questions/2129044/java-heap-terminology-young-old-and-permanent-generations/36159270#36159270" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/2129044/java-heap-terminology-young-old-and-permanent-generations/36159270#36159270</a></li><li><a href="http://www.oracle.com/technetwork/articles/java/vmoptions-jsp-140102.html" target="_blank" rel="noreferrer">http://www.oracle.com/technetwork/articles/java/vmoptions-jsp-140102.html</a></li></ul>`,14),l=[t];function o(c,i,r,d,u,b){return s(),n("div",null,l)}const f=a(p,[["render",o]]);export{h as __pageData,f as default};
