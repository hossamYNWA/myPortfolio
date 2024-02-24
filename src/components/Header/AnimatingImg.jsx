import "./animatingImg.css";
import astro from "../images/astr.png";

const AnimatingImg = () => {
  return (
    <div className="animatingImg">
      <img src={astro} alt="animating astronaut" />
    </div>
  );
};

export default AnimatingImg;
