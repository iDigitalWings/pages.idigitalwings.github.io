import{_ as e,a as d,af as r,o as a}from"./chunks/framework.C87LdZyP.js";const c=JSON.parse('{"title":"Spring Data JPA 查询方法支持的关键字","description":"","frontmatter":{"title":"Spring Data JPA 查询方法支持的关键字","date":"2018-04-17T00:00:00.000Z","tags":["spring","jpa","spring-data"]},"headers":[],"relativePath":"posts/2018/04/2018-04-17-spring-jpa-search-keyword.md","filePath":"posts/2018/04/2018-04-17-spring-jpa-search-keyword.md","lastUpdated":1718173059000}'),n={name:"posts/2018/04/2018-04-17-spring-jpa-search-keyword.md"};function i(s,t,o,l,h,f){return a(),d("div",null,t[0]||(t[0]=[r('<h2 id="jpa-关键字" tabindex="-1">JPA 关键字 <a class="header-anchor" href="#jpa-关键字" aria-label="Permalink to &quot;JPA 关键字&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Keyword</th><th>Sample</th><th>JPQL snippet</th></tr></thead><tbody><tr><td>And</td><td>findByLastnameAndFirstname</td><td>… where x.lastname = ?1 and x.firstname = ?2</td></tr><tr><td>Or</td><td>findByLastnameOrFirstname</td><td>… where x.lastname = ?1 or x.firstname = ?2</td></tr><tr><td>Is,Equals</td><td>findByFirstname,findByFirstnameIs,findByFirstnameEquals</td><td>… where x.firstname = 1?</td></tr><tr><td>Between</td><td>findByStartDateBetween</td><td>… where x.startDate between 1? and ?2</td></tr><tr><td>LessThan</td><td>findByAgeLessThan</td><td><code>… where x.age &lt; ?1 </code></td></tr><tr><td>LessThanEqual</td><td>findByAgeLessThanEqual</td><td><code>… where x.age &lt;= ?1</code></td></tr><tr><td>GreaterThan</td><td>findByAgeGreaterThan</td><td><code>… where x.age &gt; ?1</code></td></tr><tr><td>GreaterThanEqual</td><td>findByAgeGreaterThanEqual</td><td><code>… where x.age &gt;= ?1</code></td></tr><tr><td>After</td><td>findByStartDateAfter</td><td><code>… where x.startDate &gt; ?1</code></td></tr><tr><td>Before</td><td>findByStartDateBefore</td><td><code>… where x.startDate &lt; ?1</code></td></tr><tr><td>IsNull</td><td>findByAgeIsNull</td><td>… where x.age is null</td></tr><tr><td>IsNotNull,NotNull</td><td>findByAge(Is)NotNull</td><td>… where x.age not null</td></tr><tr><td>Like</td><td>findByFirstnameLike</td><td>… where x.firstname like ?1</td></tr><tr><td>NotLike</td><td>findByFirstnameNotLike</td><td>… where x.firstname not like ?1</td></tr><tr><td>StartingWith</td><td>findByFirstnameStartingWith</td><td>… where x.firstname like ?1 (parameter bound with appended %)</td></tr><tr><td>EndingWith</td><td>findByFirstnameEndingWith</td><td>… where x.firstname like ?1 (parameter bound with prepended %)</td></tr><tr><td>Containing</td><td>findByFirstnameContaining</td><td>… where x.firstname like ?1 (parameter bound wrapped in %)</td></tr><tr><td>OrderBy</td><td>findByAgeOrderByLastnameDesc</td><td>… where x.age = ?1 order by x.lastname desc</td></tr><tr><td>Not</td><td>findByLastnameNot</td><td><code>… where x.lastname &lt;&gt; ?1</code></td></tr><tr><td>In</td><td><code>findByAgeIn(Collection&lt;Age&gt; ages)</code></td><td>… where x.age in ?1</td></tr><tr><td>NotIn</td><td><code>findByAgeNotIn(Collection&lt;Age&gt; age)</code></td><td>… where x.age not in ?1</td></tr><tr><td>True</td><td>findByActiveTrue()</td><td>… where x.active = true</td></tr><tr><td>False</td><td>findByActiveFalse()</td><td>… where x.active = false</td></tr><tr><td>IgnoreCase</td><td>findByFirstnameIgnoreCase</td><td>… where UPPER(x.firstame) = UPPER(?1)</td></tr></tbody></table>',2)]))}const m=e(n,[["render",i]]);export{c as __pageData,m as default};
