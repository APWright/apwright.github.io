import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

import courses from "./data/courses.json" with { type: "json" };
import education from "./data/education.json" with { type: "json" };
import scholar from "./data/scholar.json" with { type: "json" };

// Append the SVG element.
// const education_list = d3
//   .select("#education-list")
//   .selectAll("div")
//   .append(svg.node());

const education_list = d3
  .select("#education-list")
  .selectAll("div")
  .data(education)
  .enter()
  .append("div")
  .attr("class", "cv-entry")
  .html((d) => {
    if (d.thesis) {
      return `<div class="cv-degree"> ${d.year}, ${d.degree} ${d.subject}, ${d.institution} </div> <div class="cv-advisor"> Advisor: ${d.advisor} </div> <div class="cv-thesis"> Thesis: <a href="${d.thesis_link}"> ${d.thesis} </a> </div>`;
    } else {
      return ` <div class="cv-degree"> ${d.year}, ${d.degree} ${d.subject}, ${d.institution} </div>`;
    }
  });

const teaching_list = d3
  .select("#teaching-list")
  .selectAll("div")
  .data(courses)
  .enter()
  .append("div")
  .attr("class", "cv-entry")
  .html((d) => {
    return `<div class="cv-course"> <a href="${d.link}"> ${d.course}, ${d.term} ${d.year} </a> </div>`;
  });

const publication_list = d3
  .select("#publication-list")
  .selectAll("div")
  .data(scholar.sort((a, b) => d3.descending(a.pub_year, b.pub_year)))
  .enter()
  .append("div")
  .attr("class", "cv-entry")
  .html((d) => {
    return `<a class="cv-paper-title" href="${d.url}"> ${d.title}</a> <div class="cv-paper-citation">${d.author}, ${d.citation}</div>`;
  });
