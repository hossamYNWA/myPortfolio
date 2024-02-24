import "./navbar.css";
import NavBody from "./NavBody";
import NavItem from "./NavItem";
import NavIcons from "./NavIcon";
import logo from "../images/logo.png";
import { IoClose, IoMenu } from "react-icons/io5";
import {useState} from 'react'
const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    const closeHandler = () => {
        setShowMenu(false);
    }
    const linksStyle = showMenu?"links showMenu":"links";
  return (
    <NavBody>
      <div className="logo"><img src={logo} alt="hossam"/></div>
      <ul className={linksStyle}>
        <NavItem title="Home" destination="#header" />
        <NavItem title="Skills" destination="#skills" />
        <NavItem title="Projects" destination="#projects" />
        <NavIcons />
        <NavItem classname="contact-box" title="Let's Connect" destination="#contact" />
        <li className="close-icon" onClick={closeHandler}><IoClose /></li>
      </ul>
      <div className="nav-toggle" id="nav_toggle" onClick={toggleMenu} >
        <IoMenu />
      </div>
    </NavBody>
  );
};
export default NavBar;
