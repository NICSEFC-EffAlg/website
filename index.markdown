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
The Nanoscale Integrated Circuits and System Lab, Energy Efficient Computing Group (<a href="http://nicsefc.ee.tsinghua.edu.cn/" target="_blank" style="color: #0c53a5;">NICS-EFC</a>) in the Department of Electronic Engineering at Tsinghua University is led by Professor Yu Wang. The <strong>Efficient Algorithm Team (EffAlg)</strong> in the NICS-EFC group is led by Research Assistant Professor Xuefei Ning. Our team has an in-depth collaboration with <a href="https://cloud.infini-ai.com/" target="_blank" style="color: #0c53a5;">Infinigence-AI</a>. </p>

<p style="text-align:justify; text-justify:inter-ideograph;">Our research primarily focuses on efficient deep learning, including model compression, architecture design, system co-optimization, and other techniques. Our work focuses on several application domains, including language generative models (i.e., LLMs), vision generative models, vision understanding models and so on.</p>


<p style="text-align:justify; text-justify:inter-ideograph;">Our group welcomes all kinds of collaborations, and is continuously recruiting visiting students and engineers who are interested in efficient deep learning. If you're interested in collaborations or visiting student opportunities, email <a href="mailto:foxdoraame@gmail.com" style="color: #0c53a5;">Xuefei</a> or <a href="mailto:yu-wang@tsinghua.edu.cn" style="color: #0c53a5;">Prof. Yu Wang</a>.
</p>

<h1 class="custom_title"> News </h1>
<!-- Accelerating LLM and Generative AI: -->


<ul>
{% for new in site.data.news %}
  <li>
    <div style="display:flex;">
      <div style="display:block; width: 15%; margin-right: 5px; margin-left: 5px; min-width:100px; font-family: 'Consolas', monospace;">{{ new.time }}</div> 
      <div style="display:block; width: 85%;">
        {{ new.text }}
      </div>
    </div>
    
  </li>
{% endfor %}
</ul>


<h1 class="custom_title"> Efficient DL Projects </h1>
<div id="option-container">
{% for category in site.data.projects_class %}
  {% for item in category %}
    <h4 style="margin-top: 10px;">{{ item[0] }}</h4>
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
{% for pub in site.data.pubs %}
    <li data-technique="{{ pub.technique }}" data-target="{{ pub.target }}" data-domain="{{ pub.domain }}">
        <div class="project_card">
          <div style="display:block; width: 15%; margin-right: 5px; margin-left: 5px; min-width:100px">{{ pub.conference }}</div> 
          <div style="display:block; width: 85%;">
              <span style="color: #0c53a5">{{ pub.title }} </span> 
              {% if pub.special_label %} 
                <span class="project-special-label">
                  {{ pub.special_label }}
                </span> 
              {% endif %} 
              <br/> 
              {{ pub.technique }} | {{ pub.target }} | {{ pub.domain }}

          {% if pub.paper_link %} <a class="project-buttom" target="_blank" href="{{ pub.paper_link }}">
              Paper
          </a> {% endif %}

          {% if pub.code_link %} <a class="project-buttom" target="_blank" href="{{ pub.code_link }}">
              Code
          </a> {% endif %}
          </div>
        </div>
        
    </li>
{% endfor %}
</div>
