---
title: Posts
layout: "base.njk"
---

{% for story in collections.stories %}

- [{{ story.data.title}}]({{ story.url }})

{% endfor %}