---
layout: single
# title: Publications
permalink: /publications/
header:
  image: /assets/images/header_show.jpg
---

<h1 class="custom_title"> Publications </h1>

<ul>
{% for pub in site.data.pubs %}
  <li>
    <div style="display:flex; font-size:18px">
      <div style="display:block; width: 15%; margin-right: 5px; margin-left: 5px; min-width:100px">{{ pub.conference }}</div> 
      <div style="display:block; width: 85%;">
        <span style="color: #0c53a5">{{ pub.title }} </span> <br/> 
        Authors: {{ pub.author }}

      {% if pub.paper_link != "" %} <a class="custom_buttom" target="_blank" href="{{ pub.paper_link }}">
        Paper
      </a> {% endif %}

      {% if pub.code_link != "" %} <a class="custom_buttom" target="_blank" href="{{ pub.code_link }}">
        Code
      </a> {% endif %}

      </div>
    </div>
    
  </li>
{% endfor %}
</ul>