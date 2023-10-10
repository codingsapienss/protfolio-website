// import { useState } from "react";
// import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";
// import { reactProjects } from "../../data.js";
// import { javascriptProject } from "../../data.js";
// import { featuredProjects } from "../../data.js";
import { projects } from "../../data.js";


const Portfolio = () => {
  // const [selected, setSelected] = useState("featuredProject");

  // const list = [
  //   { id: "featuredProject", title: "Featured" },
  //   { id: "react", title: "React" },
  //   { id: "javascript", title: "Javascript " },
  // ];



  return (
    <>

      <div id="portfolio" className="portfolio">

        <h1>Projects</h1>
        {/* <ul>
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
        </ul> */}

        <div className="container">
          {/* {selected === "react" &&
            reactProjects.map((project, i) => {
              return (

                <div key={project.id} className="itemContainer">

                  <div className="item">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <img src={project.img} alt="project-thumbnail" />
                    </a>
                    <h3>  {project.title} </h3>
                  </div>

                  <div className="disc">
                    <h2>{i + 1}.  {project.title}</h2>
                    {project.desc?.map((d, i) => {
                      return <ul key={i}>
                        <li> {i + 1}. {d}</li>
                      </ul>
                    })}
                    <div className="btn">
                      <a href={project.link} target="_blank" rel="noreferrer"><button >Live Demo</button></a>

                      <a href={project.github} target="_blank" rel="noreferrer" >
                        <button >Github Link</button></a>
                    </div>
                  </div>
                </div >
              );
            })} */}

          {/* {
            selected === "javascript" &&
            javascriptProject.map((project, i) => {
              return (

                <div key={project.id} className="itemContainer">

                  <div className="item">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <img src={project.img} alt="project-thumbnail" />
                    </a>
                    <h3> {project.title} </h3>
                  </div>

                  <div className="disc">
                    <h2>{i + 1}.  {project.title}</h2>
                    {project.desc?.map((d, i) => {
                      return <ul key={i}>
                        <li> {i + 1}. {d}</li>
                      </ul>
                    })}
                    <div className="btn">
                      <a href={project.link} target="_blank" rel="noreferrer"><button >Live Demo</button></a>

                      <a href={project.github} target="_blank" rel="noreferrer" >
                        <button >Github Link</button></a>
                    </div>
                  </div>
                </div>
              );
            })
          } */}

          {/* {
            selected === "featuredProject" &&
            featuredProjects.map((project, i) => {
              return (

                <div key={project.id} className="itemContainer">

                  <div className="item">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <img src={project.img} alt="project-thumbnail" />
                    </a>
                    <h3> {project.title} </h3>
                  </div>

                  <div className="disc">
                    <h2>{i + 1}.  {project.title}</h2>
                    {project.desc?.map((d, i) => {
                      return <ul key={i}>
                        <li> {i + 1}. {d}</li>
                      </ul>
                    })}
                    <div className="btn">
                      <a href={project.link} target="_blank" rel="noreferrer"><button >Live Demo</button></a>

                      <a href={project.github} target="_blank" rel="noreferrer"  >
                        <button >Github Link</button></a>
                    </div>
                  </div>
                </div>

              );
            })
          } */}

          {

            projects.map((project, i) => {
              return (

                <div key={project.id} className="itemContainer">

                  <div className="item">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <img src={project.img} alt="project-thumbnail" />
                    </a>
                    <h3> {project.title} </h3>
                  </div>

                  <div className="disc">
                    <h2>{i + 1}.  {project.title}</h2>
                    {project.desc?.map((d, i) => {
                      return <ul key={i}>
                        <li> {i + 1}. {d}</li>
                      </ul>
                    })}
                    <div className="btn">
                      <a href={project.link} target="_blank" rel="noreferrer"><button >Live Demo</button></a>

                      <a href={project.github} target="_blank" rel="noreferrer"  >
                        <button >Github Link</button></a>
                    </div>
                  </div>
                </div>

              );
            })
          }

        </div >
      </div >

    </>
  );
};

export default Portfolio;
