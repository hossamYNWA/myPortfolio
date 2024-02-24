import "./navitems.css";
const NavItem = ({ title, destination, classname }) => {
  const navItemStyle = classname ? `navItem ${classname}` : `navItem`;
  return (
    <li className={navItemStyle}>
      <a href={destination}>{title}</a>
    </li>
  );
};

export default NavItem;
