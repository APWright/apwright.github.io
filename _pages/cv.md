---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

---

# Education

> **Georiga Institute of Technology**  
> _PhD in Machine Learning_
> Advisor: Duen Horn (Polo) Chau  
> Fall 2019 to Present

> **Imperial College London**  
> _MSc in Computing with Specialism in Machine Learning_  
> Overall Result: Merit  
> Thesis: Comparison of Syntactic and Semantic Representations of Programs in Neural Embeddings  
> Advisor: Herbert Wiklicky  
> Fall 2018 to Fall 2019

> **Univeristy of California, Berkeley**  
> _BA in Computer Science and Physics_
> Overall GPA: 3.63  
> Physics GPA: 3.59  
> CS GPA: 3.87  
> Fall 2014 to Fall 2018

---

# Research Experience

> **_Centers for Disease Control and Prevention_**  
> _Oak Ridge Institute of Science Education Fellowship_
> Chamblee, Georgia, Fall 2019 to Present  
> Developed natural language processing and data visualization tools for detecting emerging trends in the opiod epidemic.

> **_Los Alamos National Laboratory_**  
> _Graduate Research Assistant_
> Los Alamos, New Mexico, Summer 2018  
> Developed machine learning data analysis models and visualization dashboards for facility characterization, and spent fuel measurement using disparate stream data fusion.

> **_Nuclear Science and Security Consortium_**  
> Undergraduate Reasearch Affiliate
> Berkeley, California, Winter 2017 to Spring 2018  
> Developed multiplex network modeling for nuclear nonproliferation and multisensor security systems, with a focus on machine learning in particular deep recurrent neural networks.

# Publications

{% for post in site.publications reversed%}
{% include archive-single.html %}
{% endfor %}

# Talks

  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed%}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams
