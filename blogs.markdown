---
# layout: category-archive
layout: single
title: Blog Posts
permalink: /blogs/
header:
  image: /assets/images/header_show.jpg
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>