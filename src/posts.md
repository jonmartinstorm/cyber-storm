---
title: Posts
layout: "base.njk"
---

{% for post in collections.posts %}

- {{post.date | postDate}} [{{ post.data.title}}]({{ post.url }})

{% endfor %}