---
title: Posts
layout: "base.njk"
---

{% for project in collections.projects %}

- [{{ project.data.title}}]({{ project.url }})

{% endfor %}