---
layout: page
title: Hello World!
tagline: Personal Home Page
---
{% include JB/setup %}

# Hello 
**And thank you for taking the time to visit.**
This is the beginning of a long journey, plenty more to come.

## posts list.

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

### To-Do

I really have a lot of work ahead of me with the design I had in mind.. Eek!

