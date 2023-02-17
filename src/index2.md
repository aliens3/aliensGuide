---
layout: layouts/home.njk
---

<details>
<summary class="text-2xl">統計</summary>
<ul class="list-decimal">
{%- for post in collections.stat | sortByOrder -%}
  <li><a href={{ post.url }} >{{post.data.title}}</a></li>
{%- endfor -%}

</ul>

</details>
<details>
<summary class="text-2xl">コンピュータ</summary>
<ul>

{%- for post in collections.stat | sortByOrder -%}
  <li><a href={{ post.url }} >{{post.data.title}}</a></li>
{%- endfor -%}

</ul>
</details>


<details>
<summary class="text-2xl">哲学</summary>
<ul class="list-disc">

{%- for post in collections.stat | sortByOrder -%}
  <li><a href={{ post.url }} >{{post.data.title}}</a></li>
{%- endfor -%}

</ul>
</details>

<details>
<summary class="text-2xl">精神</summary>
<ul>

{%- for post in collections.stat | sortByOrder -%}
  <li><a href={{ post.url }} >{{post.data.title}}</a></li>
{%- endfor -%}

</ul>
</details>
<details>
<summary class="text-2xl">小論</summary>
<ul>

{%- for post in collections.stat | sortByOrder -%}
  <li><a href={{ post.url }} >{{post.data.title}}</a></li>
{%- endfor -%}

</ul>
</details>
<details>
<summary class="text-2xl">その他</summary>
<ul>

{%- for post in collections.stat | sortByOrder -%}
  <li><a href={{ post.url }} >{{post.data.title}}</a></li>
{%- endfor -%}

</ul>
</details>
<details>
<summary class="text-2xl">考えたこと</summary>
<ul>

{%- for post in collections.stat | sortByOrder -%}
  <li><a href={{ post.url }} >{{post.data.title}}</a></li>
{%- endfor -%}

</ul>
</details>

