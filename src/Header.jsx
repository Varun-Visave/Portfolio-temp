import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>My Projects</h1>
      <p>Explore all the projects and their descriptions below.</p>
      <div className="profile">
        <h2>Mitesh Dipak Bari </h2>
        <p>Full-Stack Developer,Passionate about building web applications and eager to work on real world projects,to improve my skills and get to know more about the industry</p>
        <div className="links">
          <a href="https://github.com/MiteshBari23" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="tel:8830840075" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-phone"></i> Phone
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
