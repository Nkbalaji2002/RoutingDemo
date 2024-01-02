import React from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/Projects";

const Home = () => {
  const featuredProjects = projectsData.slice(0, 3); // Displaying only 3 featured projects

  return (
    <div className="container">
      <section className="hero text-center py-5">
        <div className="hero-content">
          <h1>Welcome to John Doe's Portfolio!</h1>
          <p>
            Hello! I'm John, a passionate software engineer with 1 year of
            experience. Welcome to my portfolio where I showcase my projects and
            skills.
          </p>
          <Link to="/portfolio" className="btn btn-primary">
            View Portfolio
          </Link>
        </div>
      </section>

      <section className="about py-5">
        <div className="about-content text-center">
          <h2>About Me</h2>
          <p>
            I specialize in front-end development using technologies like React,
            JavaScript, and CSS. I'm dedicated to crafting user-friendly and
            efficient applications.
          </p>
          <Link to="/about" className="btn btn-secondary">
            Learn More
          </Link>
        </div>
      </section>

      <section className="projects py-5">
        <h2 className="text-center mb-4">Featured Projects</h2>
        <div className="row">
          {featuredProjects.map((project) => (
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
        <div className="text-center">
          <Link to="/portfolio" className="btn btn-primary">
            See All Projects
          </Link>
        </div>
      </section>

      <section className="contact py-5">
        <div className="contact-content text-center">
          <h2>Contact Me</h2>
          <p>
            Interested in working together or have any questions? Feel free to
            reach out via email at john@example.com.
          </p>
          <Link to="/contact" className="btn btn-secondary">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
