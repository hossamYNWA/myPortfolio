import mgstore from "../images/projects/data_megastore.png";
import bikes from "../images/projects/data_bikes.jpeg";
import chinok from "../images/projects/data_chinook.png";
import excel1 from "../images/projects/data_exel1.png";
import excel2 from "../images/projects/data_exel2.png";
import red from "../images/projects/data_red.png";

import Project from "./Project";
const Projects = () => {
  const projects = [
    {
      url: "https://github.com/hossamYNWA/data_megastore_dashboard",
      name: "Megastore Data Analysis",
      img: mgstore,
    },
    {
      url: "https://github.com/hossamYNWA/data_bikes_dashboard",
      name: "Bikes Store Dashboard",
      img: bikes,
    },
    {
      url: "https://github.com/hossamYNWA/data_chinook_dashboard",
      name: "Chinook Music Store Dashboard",
      img: chinok,
    },
    {
      url: "#projects",
      name: "Sales Analysis Dashboard",
      img: red,
    },
    {
      url: "#projects",
      name: "Customers Analysis Dashboard (Excel)",
      img: excel1,
    },
    {
      url: "#projects",
      name: "Sales Dashboard (Excel)",
      img: excel2,
    },
  ];
  const content = projects.map((project, i) => (
    <Project key={i} name={project.name} img={project.img} url={project.url} />
  ));
  return (
    <div className="projects-cont" id="projects">
      {content}
    </div>
  );
};

export default Projects;
