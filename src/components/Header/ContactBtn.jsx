import "./contactBtn.css";
import { FaArrowCircleRight } from "react-icons/fa";
const ContactBtn = () => {
  return (
    <div className="contactBtn">
      <a href="#tabs">
        Contact Me <FaArrowCircleRight />
      </a>
    </div>
  );
};

export default ContactBtn;
