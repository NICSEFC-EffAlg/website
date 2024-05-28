---
layout: single
title: Publications
permalink: /publications/
---


<ul>
{% for pub in site.data.pubs %}
  <li>
    <span>{{ pub.time }}</span> |
      {{ pub.title }} 

    {% if pub.paper_link != "" %} | <a href="{{ pub.paper_link }}">
      Paper
    </a> {% endif %}

    {% if pub.code_link != "" %} | <a href="{{ pub.code_link }}">
      Code
    </a> {% endif %}
    
    
  </li>
{% endfor %}
</ul>