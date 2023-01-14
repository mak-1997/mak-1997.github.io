import React from "react";
import "./About.css";

export const About = () => {
  return (
    <section id="about">
      <h5>get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="aboutMe">
        <div className="about__content">
          Analytical and detail-oriented aspiring Full Stack Developer. Capable
          of writing production-ready code using ReactJS, Redux, JavaScript, and
          CSS on the frontend, NodeJS, and Express on the backend to build
          single-page applications.
        </div>
        </div>
        <a href="#contact"  className="btn btn-primary" > Let's Talk</a>
      </div>
    </section>
  );
};
