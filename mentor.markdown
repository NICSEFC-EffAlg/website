---
layout: single
permalink: /ningxuefei/
classes: wide
header:
  image: /assets/images/header_show.jpg
---

<!-- <h1 class="custom_title"> Mentor </h1> -->

<style>
    /* Media query for small screens */
    @media (max-width: 768px) {
        div[style*="display: flex;"] {
            flex-direction: column; /* Stack elements vertically */
            align-items: center; /* Center align items */
        }
        div[style*="flex: 0 0 30%;"] {
            flex: 0 0 100%; /* Full width for small screens */
            text-align: center; /* Center text */
        }
        div[style*="flex: 0 0 70%;"] {
            flex: 0 0 100%; /* Full width for small screens */
            padding-left: 0; /* Remove left padding */
        }
    }
</style>

<!-- Start of Selection -->


<div style="display: flex; flex-wrap: wrap; margin: 20px 0;">
    <div style="flex: 0 0 30%; padding: 10px; text-align: center;">
        <img style="border-radius: 50%; width: 270px; height: 270px;" src="/assets/people_images/xuefei_2024_small.jpg" alt="Xuefei Ning">
        <h2 style="margin: 10px 0;">Xuefei Ning</h2>
        <h3 style="margin: 5px 0; font-size: 16px; color: #548dce;">Research Assistant Professor at Tsinghua University</h3>
        <!-- <h3>
            <a href="http://nicsefc.ee.tsinghua.edu.cn/" target="_blank" rel="noopener" style="text-decoration: none; color: #0c53a5;">
                NICS-EFC, EE Dept., Tsinghua University
            </a>
        </h3> -->
        <ul style="list-style: none; padding: 0; display: flex; justify-content: center;">
            <li style="margin: 0 10px;"><a style="color: black; transition: color 0.1s;" href="mailto:foxdoraame@gmail.com" aria-label="envelope" title="Email" onmouseover="this.style.color='#548dce'" onmouseout="this.style.color='black'"><i class="fas fa-envelope" style="font-size: 24px;"></i></a></li>
            <li style="margin: 0 10px;"><a style="color: black; transition: color 0.1s;" href="https://scholar.google.com/citations?user=oVslpJsAAAAJ" target="_blank" rel="noopener" aria-label="graduation-cap" title="Google Scholar" onmouseover="this.style.color='#548dce'" onmouseout="this.style.color='black'"><i class="fas fa-graduation-cap " style="font-size: 24px;"></i></a></li>
            <li style="margin: 0 10px;"><a style="color: black; transition: color 0.1s;" href="https://github.com/walkerning" target="_blank" rel="noopener" aria-label="github" title="GitHub" onmouseover="this.style.color='#548dce'" onmouseout="this.style.color='black'"><i class="fab fa-github" style="font-size: 24px;"></i></a></li>
            <li style="margin: 0 10px;"><a style="color: black; transition: color 0.1s;" href="https://nics-effalg.com/assets/cv/resume-xuefei-ning-20241017.pdf" target="_blank" rel="noopener" aria-label="cv" title="Personal CV" onmouseover="this.style.color='#548dce'" onmouseout="this.style.color='black'"><i class="fas fa-file-alt" style="font-size: 24px;"></i></a></li>
        </ul>
    </div>
    <div style="flex: 0 0 70%; padding: 10px; padding-left: 50px;  font-size: 18px;">
        <div style="margin-bottom: 30px;">
            <p>Starting from 2024, I’m a research assistant professor in the NICS-EFC group at the Department of Electronic Engineering, Tsinghua University. I obtained my B.S. and Ph.D. degrees from the Department of Electronic Engineering, Tsinghua University, in 2016 and 2021, advised by <a href="https://scholar.google.com/citations?user=3m8I0XAAAAAJ" target="_blank" rel="noopener" style="color: #0c53a5;">Prof. Huazhong Yang</a> and <a href="https://scholar.google.com.hk/citations?user=j8JGVvoAAAAJ" target="_blank" rel="noopener" style="color: #0c53a5;">Prof. Yu Wang</a>. I spent two years (from December 2021 to December 2023) as a post-doctoral researcher with <a href="https://scholar.google.com.hk/citations?user=j8JGVvoAAAAJ" target="_blank" rel="noopener" style="color: #0c53a5;">Prof. Yu Wang</a> and <a href="https://scholar.google.com/citations?user=KFQERBwAAAAJ" target="_blank" rel="noopener" style="color: #0c53a5;">Prof. Pinyan Lu</a>.</p>
            <b>Currently, I’m leading the Efficient Deep Learning Algorithm (EffAlg) Team in the NICS-EFC group. Our team is continuously looking for self-motivated master or Ph.D. students, postdoctoral scholars, research assistants, and visiting students. <p style="color: #FF3333;">Please send me and Prof. Wang an email with your CV if you’re interested!</p></b>
        </div>
    </div>
</div>
<!-- End of Selection -->

<!--
<div style="margin: 20px 0;">
    <h1 style="text-align: center; margin-bottom: 20px;">Research Directions</h1>
    <div style="display: flex; flex-direction: column; gap: 20px;">
        <div style="font-weight: bold; margin-bottom: 10px;">1. Efficient deep learning (particularly efficient AIGC)</div>
            <p> We start to work on efficient DL since 2019. Since 2023, most of our new research works are centered around efficient AIGC. I am fascinated by a future where we can be enriched with experiences beyond the constraints we face whether physical, artificial, or otherwise. I think AIGC can play a vital role in shaping this future.</p>
              
             <p>We're countinously recruiting students who are interested in efficient deep learning techniques and feel excited about AIGC in similar ways.</p>
        <div style="font-weight: bold; margin-bottom: 10px;">2. Towards better reasoning</div>
            <p> Recently, I have been thinking about the gaps between current techniques and the efficient, intelligent AI I imagine. While my thoughts on “what are the most key gaps and promising pathways to mitigate them” are evolving as our exploration carries on, I’m currently drawing insights from our own cognition and learning to help AI infer and learn in a more efficient and reliable way.</p>
    </div>
</div>
-->

<div style="margin: 20px 0;">
    <h1 style="text-align: center; margin-bottom: 20px;">Selected Talks</h1>
    <div style="display: flex; flex-direction: column; gap: 20px;">

        <ul style="list-style: none; padding: 0;">
        {% for talk in site.data.mentor_talks %}
        <li style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; background-color: #f9f9f9; margin-bottom: 10px;">
            <h2 style="margin: 0; font-size: 20px;">{{ talk.title }}
                <span style="text-align: right;;">
                    {% if talk.slide_link %}
                    <a class="project-buttom" target="_blank" href="{{ talk.slide_link }}">Slide</a>
                    {% endif %}
                    {% if talk.video_link %}
                    <a class="project-buttom" target="_blank" href="{{ talk.video_link }}">Video</a>
                    {% endif %}
                    {% if talk.website_link %}
                    <a class="project-buttom" target="_blank" href="{{ talk.website_link }}">Website</a>
                    {% endif %}
                </span>
            </h2>
            <p style="margin: 5px 0; color: #555;">{{ talk.description }}</p>
            
        </li>
        {% endfor %}
        </ul>
    </div>
</div>
