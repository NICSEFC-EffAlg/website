---
layout: single
title: Publications
permalink: /publications/
header:
  image: /assets/images/header_show.jpg
---


<ul>
{% for pub in site.data.pubs %}
  <li>
    <span>{{ pub.conference }}</span> |
      {{ pub.title }} <br/> 
      Authors: {{ pub.author }}

    {% if pub.paper_link != "" %} <a class="custom_a" href="{{ pub.paper_link }}">
      Paper
    </a> {% endif %}

    {% if pub.code_link != "" %} <a class="custom_a" href="{{ pub.code_link }}">
      Code
    </a> {% endif %}
    
    
  </li>
{% endfor %}
</ul>