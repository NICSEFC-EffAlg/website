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
The Nanoscale Integrated Circuits and System Lab, Energy Efficient Computing Group (<a href="http://nicsefc.ee.tsinghua.edu.cn/" target="_blank" style="color: #0c53a5;">NICS-EFC</a>) in the Department of Electronic Engineering at Tsinghua University is led by <strong><i>Professor Yu Wang</i></strong>. The <strong>Efficient Algorithm Team (EffAlg)</strong> in the NICS-EFC group is led by <strong><i>Research Assistant Professor Xuefei Ning</i></strong>. Our team has an in-depth academic collaboration with <a href="https://cloud.infini-ai.com/" target="_blank" style="color: #0c53a5;">Infinigence-AI</a>, and fellows from many institutions including SJTU, MSR, HKU, and so on. </p>

<p style="text-align:justify; text-justify:inter-ideograph;">Our current research primarily focuses on efficient deep learning, including algorithm-level acceleration, model-level compression, model architecture design, system co-optimization, and other techniques. Our work targets several application domains, including language generative models (i.e., LLMs), vision generative models, vision understanding models and so on. Most of our projects are open sourced at <a href="https://github.com/thu-nics/" target="_blank" style="color: #0c53a5;">the thu-nics GitHub organization</a> (most efficient DL projects) or <a href="https://github.com/imagination-research/" target="_blank" style="color: #0c53a5;">the imagination-research GitHub organization</a> (some efficient DL projects and projects for broader topics; These projects are co-lead researches with <a href="https://zinanlin.me/" target="_blank" style="color: #0c53a5;">Dr. Zinan Lin from MSR</a>).</p>


<p style="text-align:justify; text-justify:inter-ideograph;">Our group welcomes all kinds of collaborations, and is continuously recruiting visiting students and engineers who are interested in efficient deep learning. If you're interested in collaborations or visiting student opportunities, email <a href="mailto:foxdoraame@gmail.com" style="color: #0c53a5;">Xuefei</a> or <a href="mailto:yu-wang@tsinghua.edu.cn" style="color: #0c53a5;">Prof. Yu Wang</a>.
</p>

<h1 class="custom_title"> News </h1>
<!-- Accelerating LLM and Generative AI: -->


<ul id="news-list">
{% for new in site.data.news limit:6 %}
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

<button id="load-more" style="display:block; margin: 20px auto; padding: 10px 20px; background-color: #0c53a5; color: white; border: none; cursor: pointer;">Load More</button>

<script>
  let currentIndex = 6;
  const totalNews = {{ site.data.news | size }};
  const loadMoreButton = document.getElementById('load-more');
  loadMoreButton.addEventListener('click', function() {
    const newsList = document.getElementById('news-list');
    {% for new in site.data.news offset:6 %}
      if (currentIndex < totalNews) {
        const li = document.createElement('li');
        li.innerHTML = `
          <div style="display:flex;">
            <div style="display:block; width: 15%; margin-right: 5px; margin-left: 5px; min-width:100px; font-family: 'Consolas', monospace;">{{ new.time }}</div> 
            <div style="display:block; width: 85%;">
              {{ new.text }}
            </div>
          </div>
        `;
        newsList.appendChild(li);
        currentIndex++;
        if (currentIndex >= totalNews) {
          loadMoreButton.style.display = 'none';
        }
      }
    {% endfor %}
  });
</script>


<h1 class="custom_title"> Competition Awards </h1>
<li>2024 NeurIPS Edge-Device Large Language Model Competition, Model Compression Track <strong>2nd</strong> </li>
<li>2024 NeurIPS Edge-Device Large Language Model Competition, Training From Scratch Track <strong>2nd</strong> </li>
<li>2020 CVPR Low-Power CV Challenges <strong>3rd</strong></li>
<li>2018 NeurIPS Adversarial Robustness Competition, Model Track <strong>2nd</strong></li>


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

          {% if pub.slide_link %} <a class="project-buttom" target="_blank" href="{{ pub.slide_link }}">
              Slide
          </a> {% endif %}

          {% if pub.website_link %} <a class="project-buttom" target="_blank" href="{{ pub.website_link }}">
              Website
          </a> {% endif %}

          {% if pub.video_link %} <a class="project-buttom" target="_blank" href="{{ pub.video_link }}">
              Video
          </a> {% endif %}

          {% if pub.descrip %}
              <button class="show-more-btn" onclick="toggleDescription(this)">Show More</button>
              <div class="pub-description" style="display: none;">
                  {{ pub.descrip }}
              </div>
          {% endif %}
          
          </div>
        </div>
        
    </li>
{% endfor %}
</div>


<script>
function toggleDescription(button) {
    const description = button.nextElementSibling;
    if (description.style.display === "none") {
        description.style.display = "block";
        button.textContent = "Show Less";
    } else {
        description.style.display = "none";
        button.textContent = "Show More";
    }
}
</script>



<h1 class="custom_title"> Sponsors </h1>
<div class="sponsors-wrapper">
  <div class="sponsors-container">
    <img src="/assets/sponsers/infini.png" alt="Sponsor 1" class="sponsor-logo">
    <img src="/assets/sponsers/baidu.png" alt="Sponsor 1" class="sponsor-logo">
    <img src="/assets/sponsers/benz.png" alt="Sponsor 2" class="sponsor-logo">
    <img src="/assets/sponsers/huawei.png" alt="Sponsor 3" class="sponsor-logo">
    <img src="/assets/sponsers/meituan.png" alt="Sponsor 4" class="sponsor-logo">
    <img src="/assets/sponsers/oppo.png" alt="Sponsor 5" class="sponsor-logo">
    <img src="/assets/sponsers/tower.png" alt="Sponsor 6" class="sponsor-logo">
    <img src="/assets/sponsers/toyota.png" alt="Sponsor 7" class="sponsor-logo">
    <img src="/assets/sponsers/zongmu.png" alt="Sponsor 8" class="sponsor-logo">
  </div>
</div>

<style>
.sponsors-wrapper {
    overflow: hidden; /* 隐藏溢出内容 */
    width: 100%; /* 确保容器宽度 */
}

.sponsors-container {
    display: flex;
    justify-content: center; /* 水平居中 */
    flex-wrap: nowrap; /* 不换行 */
    gap: 20px; /* logo 之间的间距 */
    animation: scroll 20s linear infinite; /* 滚动动画 */
}

.sponsor-logo {
    height: 65px; /* 统一高度 */
    width: auto; /* 自动调整宽度以保持比例 */
    object-fit: contain; /* 保持图像比例 */
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".sponsors-container");
    const logos = container.innerHTML;
    container.innerHTML += logos; // 复制一份 logo 列表
});
</script>
