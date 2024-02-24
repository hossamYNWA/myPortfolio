import "./navitems.css";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import {Link} from "react-router-dom";
const NavIcons = () => {
  return (
    <li className="navIcons">
      <Link to="https://www.linkedin.com/in/hossamynwa" target="_blank">
        <FaLinkedinIn />
      </Link>
      <Link to="https://github.com/hossamynwa" target="_blank">
        <FaGithub />
      </Link>
      <Link to="https://www.facebook.com/HossamYNWA08" target="_blank">
        <FaFacebookF />
      </Link>
    </li>
  );
};

export default NavIcons;
