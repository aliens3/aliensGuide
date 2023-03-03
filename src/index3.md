---
layout: layouts/base.njk
---

<div class="w-[100vw]">
<div class="w-[400px] max-w-full px-2 mx-auto my-20">
  統計
  <ul class="list-decimal list-outside ">
  {%- for post in collections.stat | sortByOrder -%}
    <li class="ml-2 py-[1px]"><a href={{ post.url }}>{{post.data.title}}</a></li>
  {%- endfor -%}
  
  </ul>
</div>


</div>

<style>
  a {
    color: #4371ba;
    padding-bottom: 1px;
    border-bottom: 1px solid;
}
</style>