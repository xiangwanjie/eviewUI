<template><div><h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h1>
<h4 id="安装件组件" tabindex="-1"><a class="header-anchor" href="#安装件组件" aria-hidden="true">#</a> 安装件组件</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i eview-ui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="使用组件库" tabindex="-1"><a class="header-anchor" href="#使用组件库" aria-hidden="true">#</a> 使用组件库</h4>
<blockquote>
<p>在 main.js 中引入组件库</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//  全局引入</span>
<span class="token keyword">import</span> <span class="token string">'eview-ui/lib/css/index.css'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token constant">EUI</span> <span class="token keyword">from</span> <span class="token string">'eview-ui'</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token constant">EUI</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 按需引入</span>
<span class="token keyword">import</span> <span class="token string">'eview-ui/lib/css/demo.css'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Demo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'eview-ui'</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Demo<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
