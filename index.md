---
layout: home
title: Home
---

<div>
<a href="https://austinpwright.com">
<img class="title-logo" src="/images/apw_logo.svg">
</a>
</div>

<h1 class="intro-title">Austin P. Wright</h1>

<!-- {% include nav.html %} -->

<div class="intro">
	
	<div class="intro-text">
		<p markdown="1">
		I’m a Ph.D. student in the [College of Computing][coc] at [Georgia Tech][gt] advised by [Polo Chau][poloclub]. 
		</p>
		<p markdown="1">
  My research in **Scientific Human-Centered Machine Learning** aims to solve problems intersecting machine learning, human-computer interaction, and scientific computing, by using a strong principled basis in both mathematical and human centered principles to actualize the potential of new technologies by deep collaboration with scientists developing tools with _usability_, _interpretability_, and _real scientific impact_.
		</p>
		<p markdown="1">
		This work has suported the missions of many world class institutions including:  
		<img class="intro-logo" style="width: 100px; padding-bottom: 10px;" src="/images/jpl.svg">
		<img class="intro-logo" style="width: 100px; padding-bottom: 10px;" src="/images/nasa.svg">
		<img class="intro-logo" style="width: 100px; padding-bottom: 10px;" src="/images/cdc.svg">
		<img class="intro-logo" style="width: 150px; padding-bottom: 10px;" src="/images/lanl.svg">
		<img class="intro-logo" style="width: 150px; padding-bottom: 30px;" src="/images/nssc.png">
		</p>
	</div>

    <div class="intro-image">
      <img src="/images/portrait.jpg" style="border-radius: 4px;">

      <div class="intro-image-links">
    	{% for link in site.data.social-links %}
    	{% if link.on-homepage == true %}
    	{% include social-link.html link=link %}
    	{% endif %}
    	{% endfor %}
    </div>

    <div class="intro-cv-wrapper">
    	<a href="/cv" style="color: #515151">
    	<span class="intro-cv">
    	Here's my CV.
    	</span></a>
    </div>

    </div>

</div>

<!-- <div style="padding-top:15px;"></div> -->

[about]: {{ site.url }}/about
[projects]: {{ site.url }}/projects
[archive]: {{ site.url }}/archive "Archive."

[gt]: http://www.gatech.edu "Georgia Tech"
[cse]: http://cse.gatech.edu "Georgia Tech Computational Science and Engineering"
[coc]: http://www.cc.gatech.edu "Georgia Tech College of Computing"

[cv]: {{ site.url }}/cv
[polo]: http://www.cc.gatech.edu/~dchau/ "Polo Chau."
[poloclub]: http://poloclub.gatech.edu "Polo Club of Data Science"
