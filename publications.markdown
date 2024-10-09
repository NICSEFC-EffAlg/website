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
        Authors: {{ pub.authors }}

      {% if pub.paper_link %} <a class="custom_buttom" target="_blank" href="{{ pub.paper_link }}">
        Paper
      </a> {% endif %}

      {% if pub.code_link %} <a class="custom_buttom" target="_blank" href="{{ pub.code_link }}">
        Code
      </a> {% endif %}

      {% if pub.slide_link %} <a class="custom_buttom" target="_blank" href="{{ pub.slide_link }}">
        Slide
      </a> {% endif %}

      {% if pub.website_link %} <a class="custom_buttom" target="_blank" href="{{ pub.website_link }}">
        Website
      </a> {% endif %}

      {% if pub.video_link %} <a class="custom_buttom" target="_blank" href="{{ pub.video_link }}">
        Video
      </a> {% endif %}

      </div>
    </div>
    
  </li>
{% endfor %}
</ul>