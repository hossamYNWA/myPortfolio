import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import cimage from "../images/contactme.png";
import SendIcon from "@mui/icons-material/Send";
import "./tabs.css";
const ContactMe = () => {
  return (
    <div className="contact-form" id="contact">
      <div className="img-container">
        <img src={cimage} alt="contact-me" />
      </div>
      <form className="form-ctrl">
        <div className="input">
          <TextField fullWidth label="First Name" id="fullWidth" />
        </div>
        <div className="input">
          <TextField fullWidth label="Last Name" id="fullWidth" />
        </div>
        <div className="input">
          <TextField fullWidth label="Email" id="fullWidth" />
        </div>
        <div className="input">
          <TextField fullWidth label="Phone Number" id="fullWidth" />
        </div>
        <textarea placeholder="message"></textarea>
        <Button
            className="send-btn"
          sx={{
            height: "40px",
            backgroundColor: "var(--primary-color)",
            marginLeft: "auto",
            width: "150px",
          }}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default ContactMe;
