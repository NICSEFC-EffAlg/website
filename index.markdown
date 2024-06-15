---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: index
header:
  image: /assets/images/header_show.jpg
#   image: /assets/images/eyes-285825_1920.png
#   image: /assets/images/scifi-4916165_1920.jpg
classes: wide
header-font-family: "Open Sans,sans-serif"
---
<h1 class="custom_title"> Who We Are </h1>

<p style="text-align:justify; text-justify:inter-ideograph;">
The Nanoscale Integrated Circuits and System Lab, Energy Efficient Computing Group (<a href="http://nicsefc.ee.tsinghua.edu.cn/" target="_blank" style="color: #0c53a5;">NICS-EFC</a>) in the Department of Electronic Engineering at Tsinghua University is led by Professor Yu Wang. The Efficient Algorithm Team (EffAlg) in the NICS-EFC group is led by Research Assistant Professor Xuefei Ning. 
Our research primarily focuses on efficient deep learning, including model compression, architecture design, system co-optimization, and other techniques. Our work focuses on several application domains, including language generative models (i.e., LLMs), vision generative models, vision understanding models and so on.
Our team has an in-depth collaboration with <a href="https://cloud.infini-ai.com/" target="_blank" style="color: #0c53a5;">Infinigence-AI in Beijing, China</a>.
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
  </div>

<!-- </div> -->