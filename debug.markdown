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
