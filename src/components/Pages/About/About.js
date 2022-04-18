import React from "react";
import me from "../../../assest/Me/me.png";
import "./About.css";
const About = () => {
  return (
    <section>
      <div>
        <img className="about-me ms-4" src={me} alt="" />
      </div>
      <div className="aboute-info">
        <h3 className="mb-5"> About Me</h3>
        <p>
          Hello I am Shakil Khan. I began using Wordpress when it first began.
          I've spent most of my waking hours for the last ten years designing,
          programming and operating Wordpress sites. One of my specialties is
          taking an idea from scratch and creating a full-fledged platform. I go
          beyond to produce sites with a unique, outstanding, contemporary
          look-and-feel. With extensive knowledge of web mechanics, I'm able to
          optimize complex integrations to require little-to-no maintenance
          while running on their own for years. I am a PHP programmer at heart
          and create features that are best suited for the job at hand, as
          opposed to trying to fit a job into features that I can find in
          pre-existing themes and plugins. I'm also attuned to performance
          issues and do a lot of repurposing of plugins.
        </p>
      </div>
    </section>
  );
};

export default About;
