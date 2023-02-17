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


<details >
<summary class="text-xl">コンピュータ</summary>
<ul>

{%- for post in collections.stat | sortByOrder -%}
  <li><a href={{ post.url }} >{{post.data.title}}</a></li>
{%- endfor -%}

</ul>
</details>

<details>
<summary class="text-xl">精神</summary>
<ul>

{%- for post in collections.stat | sortByOrder -%}
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

{%- for post in collections.stat | sortByOrder -%}
  <li><a href={{ post.url }} >{{post.data.title}}</a></li>
{%- endfor -%}

</ul>
</details>


<details>
<summary class="text-xl">小論</summary>
<ul>

{%- for post in collections.stat | sortByOrder -%}
  <li><a href={{ post.url }} >{{post.data.title}}</a></li>
{%- endfor -%}

</ul>
</details>


<details>
<summary class="text-xl">その他</summary>
<ul>

{%- for post in collections.stat | sortByOrder -%}
  <li><a href={{ post.url }} >{{post.data.title}}</a></li>
{%- endfor -%}

</ul>
</details>
</details>



<details class="border-b border-grey-lighter py-4 pl-6">
<summary class="text-2xl">考えたこと</summary>
<ul>

{%- for post in collections.stat | sortByOrder -%}
  <li><a href={{ post.url }} >{{post.data.title}}</a></li>
{%- endfor -%}

</ul>
</details>
</div>
