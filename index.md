---
layout: page
title: Hello World! Welcome to Peter Hudson
tagline: Personal Home Page
---
{% include JB/setup %}

# Hello 
**And thank you for taking the time to visit.**
This is the beginning of a long journey, plenty more to come. This site is also viewable on <http://peter-hudson.github.io/>


## posts list.

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

### To-Do

I really have a lot of work ahead of me with the design I had in mind.. Eek!

