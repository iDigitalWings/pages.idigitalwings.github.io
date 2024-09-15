import{_ as t,a,af as i,o as s}from"./chunks/framework.C87LdZyP.js";const n="/assets/jenkins-setting.D2BxPi4C.png",u=JSON.parse('{"title":"Trigger Jenkins build on new Gitlab tag","description":"","frontmatter":{"title":"Trigger Jenkins build on new Gitlab tag","date":"2018-11-16T00:00:00.000Z","tags":["gitlab","git"]},"headers":[],"relativePath":"posts/2018/11/2018-11-16-trigger-jenkins-on-new-gitlab-tag.md","filePath":"posts/2018/11/2018-11-16-trigger-jenkins-on-new-gitlab-tag.md","lastUpdated":1718173059000}'),r={name:"posts/2018/11/2018-11-16-trigger-jenkins-on-new-gitlab-tag.md"};function o(g,e,l,c,d,p){return s(),a("div",null,e[0]||(e[0]=[i('<h2 id="configure-bitbucket-server" tabindex="-1">Configure Bitbucket Server <a class="header-anchor" href="#configure-bitbucket-server" aria-label="Permalink to &quot;Configure Bitbucket Server&quot;">​</a></h2><p>Make sure <code>Advanced Configuration &gt; Branch Options &gt; Build All</code> is selected. This will skip the whitelist and blacklist checks so that all new commits and tags send the required Jenkins notification.</p><h2 id="set-up-a-jenkins-job-for-tags" tabindex="-1">Set up a Jenkins Job for Tags <a class="header-anchor" href="#set-up-a-jenkins-job-for-tags" aria-label="Permalink to &quot;Set up a Jenkins Job for Tags&quot;">​</a></h2><p>In the job set <code>refspec</code> to <code>+refs/tags/*:refs/remotes/origin/tags/*</code>. Set the branch specifier to <code>**/tags/**</code>. This will configure the job so it only responds to new tags.</p><h2 id="" tabindex="-1"><img src="'+n+'" alt=""> <a class="header-anchor" href="#" aria-label="Permalink to &quot;![](./resources/2018-11-16-trigger-jenkins-on-new-gitlab-tag/jenkins-setting.png)&quot;">​</a></h2><ul><li><a href="https://mohamicorp.atlassian.net/wiki/spaces/DOC/pages/136740885/Triggering+Jenkins+Based+on+New+Tags" target="_blank" rel="noreferrer">https://mohamicorp.atlassian.net/wiki/spaces/DOC/pages/136740885/Triggering+Jenkins+Based+on+New+Tags</a></li></ul>',6)]))}const k=t(r,[["render",o]]);export{u as __pageData,k as default};
