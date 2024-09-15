import{_ as i,a as e,af as l,o as a}from"./chunks/framework.C87LdZyP.js";const m=JSON.parse('{"title":"Linux Time Sync","description":"","frontmatter":{"title":"Linux Time Sync","date":"2017-12-05T00:00:00.000Z","tags":["linux"]},"headers":[],"relativePath":"posts/2017/12/2017-12-05-4-linux-time.md","filePath":"posts/2017/12/2017-12-05-4-linux-time.md","lastUpdated":1718173059000}'),n={name:"posts/2017/12/2017-12-05-4-linux-time.md"};function o(p,t,s,d,c,r){return a(),e("div",null,t[0]||(t[0]=[l("<ul><li><p><code>date</code> 查看当前时间</p></li><li><p><code>date -s 09:38:40</code> 查看当前时间</p></li><li><p><code>ntpdate -u 210.72.145.44</code> 同步网络时间</p><ul><li>中国国家授时中心：210.72.145.44</li><li>NTP服务器(上海) ：ntp.api.bz</li><li>美国：time.nist.gov</li><li>复旦：ntp.fudan.edu.cn</li><li>微软公司授时主机(美国) ：time.windows.com</li><li>台警大授时中心(台湾)：asia.pool.ntp.org</li></ul></li></ul><p>问题原因：EDI和应用服务之间大量的服务调用，部分请求时间较长超时或者网络问题导致服务端链接处于等待连接关闭确认状态，最终造成服务器连接池链接数耗尽，从而不能处理新的请求。</p><p>解决：优化了链接池链接清空策略</p>",3)]))}const f=i(n,[["render",o]]);export{m as __pageData,f as default};
