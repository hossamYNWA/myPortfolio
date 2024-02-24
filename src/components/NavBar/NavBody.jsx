import "./navbar.css";
import { useState, useCallback } from "react";
const NavBody = ({ children }) => {
  const [bg, setBg] = useState(false);
  console.log(bg);
  const changeBg = useCallback(() => {
    if (window.scrollY >= 50) {
      setBg(true);
    } else {
      setBg(false);
    }
  }, [bg]);
  window.onscroll = () => changeBg();
  return (
    <nav className={bg ? "nav-active" : ""}>
      <div className="nav-body">{children}</div>
    </nav>
  );
};
export default NavBody;
