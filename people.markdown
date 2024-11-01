---
layout: single
title: 
permalink: /people/
header:
  image: /assets/images/header_show.jpg
---

<div style="display:inline-block; width: 100%">
  {% for class in site.data.people %}
  <div style="display:inline-block; padding: 10px 10%; width: 100%; text-align: center;">
    {% if class.class_name %}<h2> {{ class.class_name }} </h2> {% endif %}
    {% for item in class.people %}
    <a href="{{ item.link }}" style="color: inherit; display:inline-block; text-decoration: none; width: 250px" target="_blank">
      {% if item.image %}
      <img src="{{ item.image }}" alt="{{ item.name }}" style="width:200px;height:200px;object-fit:cover;">
      {% else %}
      <img src="/assets/people_images/default_people.jpg" alt="{{ item.name }}" style="width:200px;height:200px;object-fit:cover;">
      {% endif %}
      <h5 style="margin-top: 18px; margin-bottom: 48px;">{{ item.name }} <br/> <span style="font-size: 16px;">{{ item.title }} </span></h5>
    </a>
    {% endfor %}
  </div>
  {% endfor %}

  <!-- For collaborators -->
  <div style="display:inline-block; padding: 10px 10%; width: 100%; text-align: center;">
    <h2> Collaborators </h2>
      {% for item in site.data.people_collaborators %}
      <a href="{{ item.link }}" style="color: inherit; display:inline-block; text-decoration: none; width: 250px" target="_blank">
        <!-- {% if item.image %}
        <img src="{{ item.image }}" alt="{{ item.name }}" style="width:200px;height:200px;object-fit:cover;">
        {% else %}
        <img src="/assets/people_images/default_people.jpg" alt="{{ item.name }}" style="width:200px;height:200px;object-fit:cover;">
        {% endif %} -->
        <h5 style="margin-top: 18px; margin-bottom: 48px;">{{ item.name }} <br/> <span style="font-size: 16px;">{{ item.title }} </span></h5>
      </a>
      {% endfor %}
  </div>

  <!-- For alumni -->
  <div style="display:inline-block; padding: 10px 10%; width: 100%; text-align: center;">
    <h2> Alumni (from 2023) </h2>
      {% for item in site.data.people_alumni %}
      <a href="{{ item.link }}" style="color: inherit; display:inline-block; text-decoration: none; width: 250px" target="_blank">
        <!-- {% if item.image %}
        <img src="{{ item.image }}" alt="{{ item.name }}" style="width:200px;height:200px;object-fit:cover;">
        {% else %}
        <img src="/assets/people_images/default_people.jpg" alt="{{ item.name }}" style="width:200px;height:200px;object-fit:cover;">
        {% endif %} -->
        <h5 style="margin-top: 18px; margin-bottom: 48px;">{{ item.name }} <br/> <span style="font-size: 16px;">{{ item.title }} </span>
          {% if item.first_job %} <br/> <span style="font-size: 16px;"><i>{{ item.first_job }}</i> </span>{% endif %}
        </h5>
      </a>
      {% endfor %}
  </div>
</div>
