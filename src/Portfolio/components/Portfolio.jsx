import React from "react";
import projectsData from "../data/Projects";
// import projectsData from "../data/projects";

const Portfolio = () => {
  const johnDoe = {
    name: "John Doe",
    profession: "Software Engineer",
    experience: "1 year",
  };

  return (
    <div className="container ">
      <div className="card my-3">
        <div className="card-body text-center">
          <h2 className="card-title">{johnDoe.name}</h2>
          <p className="card-text">Profession: {johnDoe.profession}</p>
          <p className="card-text">Experience: {johnDoe.experience}</p>
        </div>
      </div>

      <div className="row mb-3">
        {projectsData.map((project) => (
          <div key={project.id} className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text">{project.description}</p>
                {/* Display other project details */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
