---
layout: layouts/home.njk
---

<div class="w-full">
<details class="border-b border-grey-lighter py-4 pl-6">
<summary class="text-2xl">ガイド</summary>
<details>
<summary class="text-xl pt-1">統計</summary>
<ul class="list-decimal">
{%- for post in collections.stat | sortByOrder -%}
  <li><a href={{ post.url }} >{{post.data.title}}</a></li>
{%- endfor -%}
</ul>

</details>

<details>
<summary class="text-xl">精神(途中)</summary>
<ul>

{%- for post in collections.psych | sortByOrder -%}
  <li><a href={{ post.url }} >{{post.data.title}}</a></li>
{%- endfor -%}

</ul>
</details>

</details>


<details class="border-b border-grey-lighter py-4 pl-6">
<summary class="text-2xl">読書リスト</summary>

<details>
<summary class="text-xl">哲学</summary>
<ul class="list-disc">

{%- for post in collections.phil | sortByOrder -%}
  <li><a href={{ post.url }} >{{post.data.title}}</a></li>
{%- endfor -%}

</ul>
</details>


<details>
<summary class="text-xl">小論</summary>
<ul class="list-disc">

{%- for post in collections.essay | sortByOrder -%}
  <li><a href={{ post.url }} >{{post.data.title}}</a></li>
{%- endfor -%}

</ul>
</details>


<details>
<summary class="text-xl">その他</summary>
<ul class="list-disc">

{%- for post in collections.other | sortByOrder -%}
  <li><a href={{ post.url }} >{{post.data.title}}</a></li>
{%- endfor -%}

</ul>
</details>
</details>



<details class="border-b border-grey-lighter py-4 pl-6">
<summary class="text-2xl">考えたこと</summary>
<ul class="list-disc">

{%- for post in collections.notes | sortByOrder -%}
  <li><a href={{ post.url }} >{{post.data.title}}</a></li>
{%- endfor -%}

</ul>
</details>
</div>
