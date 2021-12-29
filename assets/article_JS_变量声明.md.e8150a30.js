import{_ as n,c as s,o as a,a as p}from"./app.3ab88ceb.js";const h='{"title":"\u53D8\u91CF\u58F0\u660E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u547D\u540D\u89C4\u5219","slug":"\u547D\u540D\u89C4\u5219"},{"level":2,"title":"\u58F0\u660E\u65B9\u5F0F","slug":"\u58F0\u660E\u65B9\u5F0F"},{"level":2,"title":"\u53D8\u91CF\u63D0\u5347&\u6682\u65F6\u6027\u6B7B\u533A","slug":"\u53D8\u91CF\u63D0\u5347-\u6682\u65F6\u6027\u6B7B\u533A"},{"level":2,"title":"\u5E38\u91CF\u58F0\u660E","slug":"\u5E38\u91CF\u58F0\u660E"},{"level":2,"title":"\u5F31\u7C7B\u578B","slug":"\u5F31\u7C7B\u578B"},{"level":2,"title":"\u5757\u4F5C\u7528\u57DF","slug":"\u5757\u4F5C\u7528\u57DF"}],"relativePath":"article/JS/\u53D8\u91CF\u58F0\u660E.md","lastUpdated":1636945164536}',t={},o=p(`<h1 id="\u53D8\u91CF\u58F0\u660E" tabindex="-1">\u53D8\u91CF\u58F0\u660E <a class="header-anchor" href="#\u53D8\u91CF\u58F0\u660E" aria-hidden="true">#</a></h1><h2 id="\u547D\u540D\u89C4\u5219" tabindex="-1">\u547D\u540D\u89C4\u5219 <a class="header-anchor" href="#\u547D\u540D\u89C4\u5219" aria-hidden="true">#</a></h2><p>\u53D8\u91CF\u540D\u4EE5<code>\u5B57\u6BCD</code>\u3001<code>$</code>\u3001<code>_</code> \u5F00\u59CB\uFF0C\u540E\u8DDF<code>\u5B57\u6BCD</code>\u3001<code>\u6570\u5B57</code>\u3001<code>_</code>\u3002</p><h2 id="\u58F0\u660E\u65B9\u5F0F" tabindex="-1">\u58F0\u660E\u65B9\u5F0F <a class="header-anchor" href="#\u58F0\u660E\u65B9\u5F0F" aria-hidden="true">#</a></h2><p>\u53D8\u91CF\u4F7F\u7528 <code>var/let/const</code> \u548C <code>\u4E0D\u4F7F\u7528\u4EFB\u4F55\u5173\u952E\u5B57\u9ED8\u8BA4\u5168\u5C40</code>\u7B49\u591A\u79CD\u65B9\u5F0F\u5B9A\u4E49.</p><div class="language-js"><pre><code><span class="token comment">// \u4E0D\u4F7F\u7528\u4EFB\u4F55\u5173\u952E\u5B57\u9ED8\u8BA4\u5168\u5C40</span>
some <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// \u53D8\u91CF\u58F0\u660E</span>
<span class="token keyword">var</span> a<span class="token punctuation">;</span>
<span class="token keyword">let</span> b<span class="token punctuation">;</span>
<span class="token comment">// \u6279\u91CF\u53D8\u91CF\u58F0\u660E</span>
<span class="token keyword">var</span> c<span class="token punctuation">,</span> d<span class="token punctuation">;</span>
<span class="token keyword">let</span> e<span class="token punctuation">,</span> f<span class="token punctuation">;</span>
<span class="token comment">// \u53D8\u91CF\u58F0\u660E\u5E76\u521D\u59CB\u5316</span>
<span class="token keyword">var</span> g <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
    h <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
    g <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> k <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
    l <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u53D8\u91CF\u63D0\u5347-\u6682\u65F6\u6027\u6B7B\u533A" tabindex="-1">\u53D8\u91CF\u63D0\u5347&amp;\u6682\u65F6\u6027\u6B7B\u533A <a class="header-anchor" href="#\u53D8\u91CF\u63D0\u5347-\u6682\u65F6\u6027\u6B7B\u533A" aria-hidden="true">#</a></h2><p><code>var</code> \u58F0\u660E\u7684\u53D8\u91CF\u5B58\u5728\u53D8\u91CF\u58F0\u660E\u63D0\u5347\u6548\u679C\uFF0C\u53EF\u4EE5\u5148\u4F7F\u7528\u540E\u58F0\u660E. <code>let/const</code> \u4E0D\u9002\u7528,\u4E0D\u4EC5\u4E0D\u53EF\u4EE5\u63D0\u524D\u4F7F\u7528\uFF0C\u4E5F\u4E0D\u53EF\u4EE5\u91CD\u590D\u58F0\u660E\uFF0C\u5B58\u5728 <code>\u6682\u65F6\u6027\u6B7B\u533A (TDZ)</code>\u3002</p><div class="language-js"><pre><code>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</code></pre></div><h2 id="\u5E38\u91CF\u58F0\u660E" tabindex="-1">\u5E38\u91CF\u58F0\u660E <a class="header-anchor" href="#\u5E38\u91CF\u58F0\u660E" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \u5FC5\u987B\u521D\u59CB\u5316\u5207\uFF0C\u4E0D\u53EF\u66F4\u6539\uFF0C\u4E0D\u53EF\u91CD\u590D\u58F0\u660E\uFF0C\u4E0D\u53EF\u63D0\u524D\u4F7F\u7528\u3002</span>
a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught TypeError: Assignment to constant variable.</span>

<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token punctuation">{</span> c<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
b<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// \u4E0D\u53D7\u9650\u5236</span>

<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token punctuation">{</span> d<span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u51BB\u7ED3\u53D8\u91CF</span>
c<span class="token punctuation">.</span>d <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// \u66F4\u6539\u5931\u8D25\uFF0C\u4F46\u4E0D\u4F1A\u62A5\u9519, \u4E25\u683C\u6A21\u5F0F\u62A5\u9519\u3002</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</code></pre></div><h2 id="\u5F31\u7C7B\u578B" tabindex="-1">\u5F31\u7C7B\u578B <a class="header-anchor" href="#\u5F31\u7C7B\u578B" aria-hidden="true">#</a></h2><p>JS \u4E2D\u7684\u53D8\u91CF\u662F\u5F31\u7C7B\u578B\u53EF\u4EE5\u4FDD\u5B58\u6240\u6709\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u5373\u53D8\u91CF\u6CA1\u6709\u7C7B\u578B\u800C\u503C\u6709\u7C7B\u578B\u3002</p><div class="language-js"><pre><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function-variable function">a</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5757\u4F5C\u7528\u57DF" tabindex="-1">\u5757\u4F5C\u7528\u57DF <a class="header-anchor" href="#\u5757\u4F5C\u7528\u57DF" aria-hidden="true">#</a></h2><p>\u4F7F\u7528 <code>let/const</code> \u58F0\u660E\u7684\u53D8\u91CF\u4F1A\u5B58\u5728\u4E8E\u5757\u4F5C\u7528\u57DF</p><div class="language-js"><pre><code><span class="token punctuation">{</span> <span class="token comment">/*\u5757\u4F5C\u7528\u57DF*/</span> <span class="token punctuation">}</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/*\u5757\u4F5C\u7528\u57DF*/</span> <span class="token punctuation">}</span>

<span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/*\u5757\u4F5C\u7528\u57DF*/</span> <span class="token punctuation">}</span>

<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> ii <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span>  <span class="token comment">/*\u5757\u4F5C\u7528\u57DF*/</span> <span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/*\u5757\u4F5C\u7528\u57DF*/</span> <span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528 var \u6C61\u67D3\u4F5C\u7528\u57DF</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/*\u5757\u4F5C\u7528\u57DF*/</span> <span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>

<span class="token comment">// \u4F7F\u7528 var \u65F6\u6A21\u62DF\u5757\u4F5C\u7528\u57DF</span>
<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> $ <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$ <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  $<span class="token punctuation">.</span>web <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>$<span class="token punctuation">.</span>web<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,17),e=[o];function c(l,u,k,r,i,d){return a(),s("div",null,e)}var b=n(t,[["render",c]]);export{h as __pageData,b as default};
