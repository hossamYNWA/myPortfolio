const Project = ({ name, img }) => {
  return (
    <article name={name}>
      <img src={img} alt={name} />
    </article>
  );
};

export default Project;
