import { FaExternalLinkAlt } from "react-icons/fa";
const Project = ({ name, img, url }) => {
  return (
    <article name={name}>
      <a href={url}>
        <FaExternalLinkAlt />
      </a>
      <img src={img} alt={name} />
    </article>
  );
};

export default Project;
