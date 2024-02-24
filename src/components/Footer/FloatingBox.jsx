import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./footer.css";
const FloatingBox = () => {
  return (
    <div className="floating-box">
      <p className="msg">
        you can leave your e-mail address and I'll message you later
      </p>
      <div className="input-box">
        <form noValidate autoComplete="off">
          <input type="text" placeholder="Enter your email" />
          <Button
            sx={{ borderRadius: "15px" }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};
export default FloatingBox;
