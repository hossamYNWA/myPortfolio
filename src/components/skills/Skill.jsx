import { Heat } from "@alptugidin/react-circular-progress-bar";
import "./skills.css";
const Skill = ({ skillName, skillProgress }) => {
  return (
    <div className="skill-circle">
      {
        <Heat
          progress={skillProgress}
          sx={{
            bgColor: "#ffffff",
            valueWeight: "bold",
            valueAnimation:false,
            strokeColor:
              "linear-gradient(285deg, rgba(74, 123, 186, 0.75) 0%, rgba(238,245,255,0.9275911048012955) 100%)",
            barWidth: 9,
            valueColor: "var(--primary-color)",
          }}
        />
      }
      <h3>{skillName}</h3>
    </div>
  );
};

export default Skill;

// to play with more shapes in future projects visit this url https://alptugidin.github.io/react-circular-progress-bar/ [this is a note for me]
