import p1 from "../images/projects/p1.png";
import p2 from "../images/projects/p2.png";
import Project from "./Project";
const Projects = () => {
  const projects = [
    {
      url: "https://biophilic.netlify.app/",
      name: "Biophilic Design Evaluator",
      img: "https://i.ibb.co/jy1js1g/11.png",
    },
    {
      url: "https://hossamynwa.github.io/False-9/",
      name: "False9 kits store",
      img: p2,
    },
    {
      url: "https://main--win-doors-demo.netlify.app/",
      name: "Windows configurator",
      img: "https://i.ibb.co/tQBpWyV/22.png",
    },
    {
      url: "https://hossamynwa.github.io/ByteZone/",
      name: "BytZone shop",
      img: "https://i.ibb.co/JKRDQWJ/33.png",
    },
    {
      url: "https://hossamynwa.github.io/flyDine/",
      name: "Fly Dine",
      img: "https://i.ibb.co/S3hN31W/44.png",
    },
    {
      url: "https://hossamynwa.github.io/rockers-project/#",
      name: "Rocker's store landing page",
      img: p1,
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
