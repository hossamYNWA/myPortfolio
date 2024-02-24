import p1 from "../images/projects/p1.png";
import p2 from "../images/projects/p2.png";
import p3 from "../images/projects/p3.png";
import p4 from "../images/projects/p4.png";
import p5 from "../images/projects/p5.png";
import p6 from "../images/projects/p6.png";
import Project from "./Project";
const Projects = () => {
  const projects = [
    { name: "Rocker's store", img: p1 },
    { name: "False9 kits store", img: p2 },
    { name: "Journey to Westros", img: p3 },
    { name: "We Care", img: p4 },
    { name: "Demo Films Project", img: p5 },
    { name: "Meals App", img: p6 },
  ];
  const content = projects.map((project, i) => (
    <Project key={i} name={project.name} img={project.img} />
  ));
  return <div className="projects-cont" id="projects">{content}</div>;
};

export default Projects;
