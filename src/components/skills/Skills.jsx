import React from "react";
import Skill from "./Skill";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Skills = () => {
  const skillset = [
    {
      skillName: "MS Excel",
      skillProgress: "85",
    },
    {
      skillName: "Power BI (PL-300)",
      skillProgress: "80",
    },
    {
      skillName: "SQL",
      skillProgress: "75",
    },
    {
      skillName: "Python",
      skillProgress: "80",
    },
    {
      skillName: "Data Cleaning",
      skillProgress: "80",
    },
    {
      skillName: "CRM",
      skillProgress: "75",
    },
    {
      skillName: "Category Management",
      skillProgress: "80",
    },
    {
      skillName: "EDA",
      skillProgress: "70",
    },
    {
      skillName: "Statistics  ",
      skillProgress: "65",
    },
    {
      skillName: "Git & Github",
      skillProgress: "65",
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
