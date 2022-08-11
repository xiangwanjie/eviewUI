<template><div><h1 id="card" tabindex="-1"><a class="header-anchor" href="#card" aria-hidden="true">#</a> Card</h1>
<p>卡片组件</p>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3>
<e-card imgSrc="/1.jpeg" summary="0到1快速构建自己的后台管理系统"></e-card>
<h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>e-card</span> <span class="token attr-name">imgSrc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/1.jpeg<span class="token punctuation">"</span></span> <span class="token attr-name">summary</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0到1快速构建自己的后台管理系统<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>e-card</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>是否必要</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>width</td>
<td>卡片的宽度</td>
<td>Number</td>
<td>false</td>
<td>-</td>
</tr>
<tr>
<td>imgSrc</td>
<td>图片资源的只</td>
<td>String</td>
<td>true</td>
<td>-</td>
</tr>
<tr>
<td>imgHeight</td>
<td>图片的高度</td>
<td>Number</td>
<td>false</td>
<td>-</td>
</tr>
<tr>
<td>summary</td>
<td>卡片概要</td>
<td>String/Slot</td>
<td>false</td>
<td>-</td>
</tr>
<tr>
<td>footer</td>
<td>卡片底部</td>
<td>Slot</td>
<td>false</td>
<td>-</td>
</tr>
</tbody>
</table>
</div></template>
