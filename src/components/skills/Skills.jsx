import React from "react";
import Skill from "./Skill";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Skills = () => {
  const skillset = [
    {
      skillName: "HTML",
      skillProgress: "80",
    },
    {
      skillName: "CSS",
      skillProgress: "80",
    },
    {
      skillName: "JavaScript",
      skillProgress: "85",
    },
    {
      skillName: "React",
      skillProgress: "80",
    },
    {
      skillName: "TypeScipt",
      skillProgress: "70",
    },
    {
      skillName: "C++",
      skillProgress: "50",
    },
    {
      skillName: "Node.js",
      skillProgress: "45",
    },
    {
      skillName: "Express.js",
      skillProgress: "40",
    },
    {
      skillName: "MongoDB",
      skillProgress: "35",
    },
    {
      skillName: "MySQL",
      skillProgress: "35",
    },
    {
      skillName: "Git & Github",
      skillProgress: "65",
    },
    {
      skillName: "Netlify",
      skillProgress: "50",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="skills-cont" id="skills">
      <h2>My Skills</h2>
      <Slider {...settings}>
        {skillset.map((skill, index) => {
          return (
            <Skill
              key={index}
              skillName={skill.skillName}
              skillProgress={parseInt(skill.skillProgress)}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Skills;
