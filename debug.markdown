---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: index
permalink: /debug
header:
  image: /assets/images/header_show.jpg
classes: wide
header-font-family: "Open Sans,sans-serif"
---
<h1 class="custom_title"> Who We Are </h1>

<p style="text-align:justify; text-justify:inter-ideograph;">
The Nanoscale Integrated Circuits and System Lab, Energy Efficient Computing Group (<a href="http://nicsefc.ee.tsinghua.edu.cn/" target="_blank" style="color: #0c53a5;">NICS-EFC</a>) in the Department of Electronic Engineering at Tsinghua University is led by Professor Yu Wang. The Efficient Algorithm Team (EffAlg) in the NICS-EFC group is led by Research Assistant Professor Xuefei Ning. 

Our research primarily focuses on efficient deep learning, including model compression, architecture design, system co-optimization, and other techniques. Our work focuses on several application domains, including language generative models (i.e., LLMs), vision generative models, vision understanding models and so on.
Our team has an in-depth collaboration with <a href="https://cloud.infini-ai.com/" target="_blank" style="color: #0c53a5;">Infinigence-AI</a>.

Our group welcomes all kinds of collaborations, and is continuously recruiting visiting students and engineers who are interested in efficient deep learning. If you're interested in collaborations or visiting student opportunities, email Xuefei (foxdoraame@gmail.com) and Prof. Yu Wang (yu-wang@tsinghua.edu.cn).
</p>

<h1 class="custom_title"> News </h1>
<!-- Accelerating LLM and Generative AI: -->
<ul>
{% for new in site.data.news %}
  <li>
    {{ new.time }} |
    {{ new.text }} 
    {% if new.link %}
    <a href="{{ new.link }}" class="custom_a">
      Link
    </a>
    {% endif %}
    
  </li>
{% endfor %}
</ul>


<!-- <div class="custom_project_back_card"> -->

<h1 class="custom_title"> Projects </h1>
<div id="option-container">
{% for category in site.data.projects_class %}
  {% for item in category %}
    <h4>{{ item[0] }}</h4>
    <div id="{{ item[0] }}">
    {% for subitem in item[1] %}
        <label class="option_checkbox">
        <input type="checkbox" name="option" id="{{ subitem }}" class="project_class_checkbox"> 
        <span class="project_class_checkbox"> &nbsp; {{ subitem }} </span>
        </label>
    {% endfor %}
    </div>
  {% endfor %}
{% endfor %}
</div>

<div id="project-container">
    <ul>
    {% for pub in site.data.projects %}
        <li data-technique="{{ pub.technique }}" data-target="{{ pub.target }}" data-domain="{{ pub.domain }}">
            <div style="display:flex; font-size:18px">
            <div style="display:block; width: 15%; margin-right: 5px; margin-left: 5px; min-width:100px">{{ pub.conference }}</div> 
            <div style="display:block; width: 85%;">
                <span style="color: #0c53a5">{{ pub.title }} </span> <br/> 
                {{ pub.technique }} | {{ pub.target }} | {{ pub.domain }}

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
</div>


<!-- <div id="option-container"> 
{% for class in site.data.projects_class %}
<div>
    <h4> {{ class.class_name }} </h4> 
    {% for item in class.items %}
    <label class="option_checkbox">
    <input type="checkbox" name="option" id="{{ item.id }}" class="project_class_checkbox"> 
    <span class="project_class_checkbox"> &nbsp; {{ item.show_name }} </span>
    </label>
    {% endfor %}
</div>
{% endfor %}
</div>

<div id="content-container">
{% for project in site.data.projects %}
<div class="project_card" id="{{ project.topic }},{{ project.technique }}" style="display: none">
    <img src="{{ project.image }}" alt="Project Image" class="project-image">
    <span class="project-content">
    <h3 class="project-title">{{ project.title }}</h3>
    <p class="project-text">{{ project.text }}</p>
    <a href="{{ project.link }}" class="project-link">Learn More</a>
    </span>
</div>
{% endfor %}
</div> -->

<!-- </div> -->
