import "./headerText.css";
import { ReactTyped } from "react-typed";
import ContactBtn from "./ContactBtn";
const HeaderText = () => {
  return (
    <div className="htext">
      {/* <p className="welcome">Welcome to my portfolio</p> */}
      <h1>
        Hi! I'm Hossam Badawy, <br />
        <ReactTyped
          strings={[
            "Microsoft Certified Power BI Data Analyst",
            "Business Excellence Analyst",
            "SFE Specialist",
            "Business Analyst",
            "Inventory Analyst",
            "Category Management Analyst ",
          ]}
          typeSpeed={100}
          backSpeed={30}
          loop
          cursorChar="|"
          showCursor={true}
        />{" "}
      </h1>
      {/* <p className="exp">I've 2 years experience in web development</p> */}
      <ContactBtn />
    </div>
  );
};

export default HeaderText;
