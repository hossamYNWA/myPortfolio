import NavIcons from "../NavBar/NavIcon"
import logo from "../images/logo.png";
import './footer.css'
import FloatingBox from "./FloatingBox"
const Footer = () => {
    return(<footer>
        <FloatingBox />
        <div className="footer-content">
            <div className="logo">
            <img src={logo} alt="hossam logo"/>
            </div>
            <ul><NavIcons/></ul>
        </div>
        <p className="copyrts">COPYRIGHTS <sup>&copy;</sup> 2024 by Hossam Mousa</p>
    </footer>)
}

export default Footer