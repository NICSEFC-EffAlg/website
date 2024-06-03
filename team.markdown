---
layout: single
title: Team
permalink: /team/
header:
  image: /assets/images/header_show.jpg
---

<div style="display:inline-block; width: 100%">
  {% for class in site.data.team %}
  <div style="display:inline-block; padding: 10px 10%; width: 100%; text-align: center;">
    <h2> {{ class.class_name }} </h2> 
    {% for item in class.people %}
    <a href="{{ item.link }}" style="color: inherit; display:inline-block; text-decoration: none; width: 250px" target="_blank">
      <img src="{{ item.image }}" alt="{{ item.name }}" style="width:200px;height:200px;object-fit:cover;">
      <h5>{{ item.name }} <br/> <span style="font-size: 16px;">{{ item.title }} </span></h5>
    </a>
    {% endfor %}
  </div>
  {% endfor %}
</div>

<!-- ## Investigator

### Yu Wang

![](https://nicsefc.ee.tsinghua.edu.cn/nics_file/people/people/82350f7a-3849-4672-b9af-03bdd5f10c8e.jpg)

Yu Wang is an Associate Prof. in EE Dept, Tsinghua University. He received his B.S. degree in Tsinghua University, China in 2002, and then Ph.D. degree with honor in NICS Group, Electronics Engineering Department, Tsinghua University in 2007, supervised by Prof. Huazhong Yang (Tsinghua University) and Prof. Yuan Xie (Penn. State University). He is now a faculty member in E.E. Dept., Tsinghua University. Dr. Wang's research mainly focuses on parallel circuit analysis, low power system design methodology, reliability-aware system design methodology, application specific hardware computing, and on-chip communication/control strategies for MPSOC.

### Xuefei Ning

Started from 2024, I’m a research assistant professor in the NICS-EFC group at the Department of Electronic Engineering, Tsinghua University. I got my B.S. and Ph.D. degrees from the department of Electronic Engineering, Tsinghua University, in 2016 and 2021, advised by Prof. Huazhong Yang and Prof. Yu Wang. I spent two years (from 2021.12 to 2023.12) as a post-doctoral researcher with and Prof. Yu Wang and Prof. Pinyan Lu.

### Zhihang Yuan



## Students

### Tianchen Zhao -->