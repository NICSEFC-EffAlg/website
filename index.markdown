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

## Who We Are
<p style="text-align:justify; text-justify:inter-ideograph;">
Welcome to NICS-EffAlg, a pioneering research group at Tsinghua University, where we explore the frontiers of artificial intelligence (AI) and computer architecture. Under the esteemed guidance of Professors Yu Wang and Xuefei Ning, our team is dedicated to the seamless integration of algorithms and hardware, pushing the boundaries of efficiency in AI systems.
</p>

<p style="text-align:justify; text-justify:inter-ideograph;">
Our research spans a diverse array of cutting-edge domains, including large language models (LLMs), generative AI (genAI), tiny machine learning (TinyML), and hardware design. By synergizing algorithmic innovations with hardware advancements, we strive to transcend the limits of AI efficiency, driving technological breakthroughs and enabling practical applications.
</p>

<p style="text-align:justify; text-justify:inter-ideograph;">
Within this citadel of avant-garde research, we pursue excellence and scale new heights. Our team comprises a multidisciplinary ensemble of brilliant minds, fostering an open and inclusive environment that encourages exploration and innovation. Together, we are shaping the future landscape of AI technology.
</p>

## News

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

## Our Full-Stack Projects

To choose projects, simply check the boxes of the categories, topics and techniques.

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
