import "./navitems.css";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import {Link} from "react-router-dom";
const NavIcons = () => {
  return (
    <li className="navIcons">
      <Link to="https://github.com/">
        <FaLinkedinIn />
      </Link>
      <Link to="https://github.com/">
        <FaGithub />
      </Link>
      <Link to="https://github.com/">
        <FaFacebookF />
      </Link>
    </li>
  );
};

export default NavIcons;
