---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: index
header:
#   image: /assets/images/eyes-285825_1920.png
  image: /assets/images/eyes_small.png
#   image: /assets/images/scifi-4916165_1920.jpg
classes: wide

---

## Who We Are

Welcome to NICSEFC-EffAlg, a pioneering research group at Tsinghua University, where we explore the frontiers of artificial intelligence (AI) and computer architecture. Under the esteemed guidance of Professors Yu Wang and Xuefei Ning, our team is dedicated to the seamless integration of algorithms and hardware, pushing the boundaries of efficiency in AI systems.
Our research spans a diverse array of cutting-edge domains, including large language models (LLMs), generative AI (genAI), tiny machine learning (TinyML), and hardware design. By synergizing algorithmic innovations with hardware advancements, we strive to transcend the limits of AI efficiency, driving technological breakthroughs and enabling practical applications.

## Highlights

Accelerating LLM and Generative AI:
<ul>
{% for pub in site.data.highlights %}
  <li>
    <a href="{{ pub.link }}">
      {{ pub.title }}
    </a> |
      {{ pub.text }} 
    <!-- <a href="{{ pub.link }}">
      link
    </a> -->
    
  </li>
{% endfor %}
</ul>

## Our Full-Stack Projects

To choose projects, simply check the boxes of the categories, topics and techniques.

<div id="option-container">
  {% for pub in site.data.project_class %}
  <label>
    <input type="radio" name="option" value="{{ pub.class }}">
    {{ pub.class }}
  </label>
{% endfor %}
<!-- 
  <label>
    <input type="radio" name="option" value="option1" checked>
    Effcient LLM
  </label>
  <label>
    <input type="radio" name="option" value="option2">
    Agent
  </label>
  <label>
    <input type="radio" name="option" value="option3">
    Efficient AIGC
  </label> -->
</div>

<div id="content-container">
{% for class in site.data.project_class %}
  <div id="{{ class.class }}-content" style="display: none;">
    <h3>{{ class.class }} Projects</h3>
    {% for project in class.projects %}
      <span class="project_span">
        <img src="{{ project.image }}" alt="Project Image" class="project-image">
        <span class="project-content">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-text">{{ project.text }}</p>
          <a href="{{ project.link }}" class="project-link">Learn More</a>
        </span>
      </span>

    {% endfor %}
  </div>
{% endfor %}
</div>