---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
feature-image : "/assets/images/home-bg.jpg"
title: Clean Blog
subtitle: A Blog Theme by Start Bootstrap
---

<ul class="list-unstyled">
  {% for post in site.posts %}
    <div class="post-preview">
      <li>
        <a class="text-decoration-none" href="post.html">
          <h2>{{ post.title }}</h2>
          <h3>{{ post.subtitle}}</h3>
          <p>Posted by {{ post.author }} on {{ post.date | date: "%B %-d, %Y"  }}</p>
        </a>
      </li>
    </div>
    <hr>
  {% endfor %}
</ul>

<div class="container-fluid m-4">
  <a class="btn btn-info float-right m-2">
    <h5>OLDER POSTS</h5>
  </a>
</div>