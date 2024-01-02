import React from "react";

const Contact = () => {
  return (
    <div className="container mt-3">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <p>
          Thank you for visiting my portfolio! If you'd like to get in touch or
          have any questions, feel free to reach out to me via email or social
          media.
        </p>
        <p>Email: john@example.com</p>
        {/* You can add more contact details here */}
        <div className="social-links">
          <a
            href="https://linkedin.com/johndoe"
            className="btn btn-primary me-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/johndoe"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {/* Add more social media links */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
