<div>
<a href="/index"><img class="logo" src="/icons/apw_logo.svg" alt="APW"><a>

<h1 class="intro-title"> Austin P. Wright </h1>

<span class="cv-subtitle">
<em><span  style="color: #073763; font-weight:500;">ML</span> + <span style="color:#bf9000;; font-weight:500;">HCI</span> researcher</em> and
head of the <a style="font-weight:500;"href="https://calpoly-data-design-lab.github.io"> <em>Cal Poly Data Design Lab</em></a>.
</span>

I’m an Assistant Professor in the Computer Science Department at Cal Poly San Luis Obispo. My research in **Scientific Human-Centered Machine Learning** aims to solve problems intersecting machine learning, human-computer interaction, and scientific computing, by using a strong basis in both mathematical and human centered principles to actualize the potential of new technologies by deep collaboration with scientists to develop tools with *usability*, *interpretability*, and *real scientific impact*.

```js
const education = FileAttachment("data/education.json").json();
const courses = FileAttachment("data/courses.json").json();
const publications = FileAttachment("data/scholar.csv").csv({typed: true});

```

<h2 class="cv-heading" >Education </h2>
<hr>
<div id="education-list"></div>

```js
const education_list = d3.select("#education-list")
    .selectAll("div")
    .data(education)
    .enter()
    .append("div")
    .attr("class","cv-entry")
    .html((d)=>{
        if (d.thesis){
            return `<div class="cv-degree"> ${d.year}, ${d.degree} ${d.subject}, ${d.institution} </div> <div class="cv-advisor"> Advisor: ${d.advisor} </div> <div class="cv-thesis"> Thesis: <a href="${d.thesis_link}"> ${d.thesis} </a> </div>`
        } else {
            return ` <div class="cv-degree"> ${d.year}, ${d.degree} ${d.subject}, ${d.institution} </div>`
        }
    })
```

<h2 class="cv-heading" >Teaching </h2>
<hr>
<div id="teaching-list"></div>

```js
const teaching_list = d3.select("#teaching-list")
    .selectAll("div")
    .data(courses)
    .enter()
    .append("div")
    .attr("class","cv-entry")
    .html((d)=>{
        return `<div class="cv-course"> <a href="${d.link}"> ${d.course}, ${d.term} ${d.year} </a> </div>`;
    })
    
```

<h2 class="cv-heading" >Publications </h2>
<hr>
<div id="publication-list"></div>

```js
const publication_list = d3.select("#publication-list")
    .selectAll("div")
    .data(publications.sort((a,b)=>d3.descending(a.pub_year,b.pub_year)))
    .enter()
    .append("div")
    .attr("class","cv-entry")
    .html((d)=>{
        return `<a class="cv-paper-title" href="${d.url}"> ${d.title}</a> <div class="cv-paper-citation">${d.author}, ${d.citation}</div>`;
    })
    
```
