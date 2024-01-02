import React from "react";

const Project = ({ project }) => {
  const { title, description /* Add other project properties */ } = project;

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{description}</p>
        {/* Add Bootstrap card components for other project details */}
      </div>
    </div>
  );
};

export default Project;
