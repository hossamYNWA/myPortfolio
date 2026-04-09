import NavIcons from "../NavBar/NavIcon";
import logo from "../images/logo.png";
import "./footer.css";
import FloatingBox from "./FloatingBox";
const Footer = () => {
  return (
    <footer>
      {/* <FloatingBox /> */}
      <div className="footer-content">
        <p className="copyrts">
          COPYRIGHTS <sup>&copy;</sup> 2025 by Hossam Badawy
        </p>
        <div className="logo">
          <img src={"https://i.ibb.co/fH0zKKT/logo2-1.png"} alt="hossam logo" />
        </div>
        <ul className="footer-icons">
          <NavIcons />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
