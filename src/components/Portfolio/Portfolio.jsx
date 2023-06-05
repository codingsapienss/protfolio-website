import { useState } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";
import { reactProjects } from "../../data.js";
import { javascriptProject } from "../../data.js";
import { featuredProjects } from "../../data.js";

const Portfolio = () => {
  const [selected, setSelected] = useState("featuredProject");

  const list = [
    { id: "featuredProject", title: "Featured" },
    { id: "react", title: "React" },
    { id: "javascript", title: "Javascript " },
  ];

  return (<>
    <div id="portfolio" className="portfolio">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => {
          return (
            <PortfolioList
              active={selected === item.id}
              setSelected={setSelected}
              key={item.id}
              title={item.title}
              id={item.id}
            />
          );
        })}
      </ul>

      <div className="container">
        {selected === "react" &&
          reactProjects.map((project) => {
            return (
              <>
                <div key={project.id} className="item">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img src={project.img} alt="project-thumbnail" />
                  </a>
                  <h3> {project.title} </h3>
                </div>
              </>
            );
          })}

        {selected === "javascript" &&
          javascriptProject.map((project) => {
            return (
              <>
                <div key={project.id} className="item">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img src={project.img} alt="project-thumbnail" />
                  </a>
                  <h3> {project.title} </h3>
                </div>
              </>
            );
          })}

        {selected === "featuredProject" &&
          featuredProjects.map((project) => {
            return (
              <>
                <div key={project.id} className="item">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img src={project.img} alt="project-thumbnail" />
                  </a>
                  <h3> {project.title} </h3>
                </div>
              </>
            );
          })}
      </div>
    </div>

  </>
  );
};

export default Portfolio;
