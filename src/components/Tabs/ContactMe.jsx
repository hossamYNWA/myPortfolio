import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import cimage from "../images/contactme.png";
import SendIcon from "@mui/icons-material/Send";
import { init, send } from "emailjs-com";
import "./tabs.css";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackType, setFeedbackType] = useState("");
  const [errors, setErrors] = useState({});

  init("N0gQC_ywT_nKab74B");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.message) newErrors.lastName = "you didn't leave a message!";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.message) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop submission if validation fails

    send("service_g9dreeg", "template_ljz5aye", formData)
      .then((response) => {
        console.log("Email successfully sent!", response.status, response.text);
        setFeedbackMessage("Message sent successfully!");
        setFeedbackType("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setErrors({}); // Clear errors on successful send
      })
      .catch((err) => {
        console.error("Failed to send email. Error: ", err);
        setFeedbackMessage("Failed to send message. Please try again.");
        setFeedbackType("error");
      });
  };

  return (
    <div className="contact-form" id="contact">
      <div className="img-container">
        <img src={cimage} alt="contact-me" />
      </div>
      <form className="form-ctrl" onSubmit={handleSubmit}>
        <div className="input">
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
        </div>
        <div className="input">
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
        </div>
        <div className="input">
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
        </div>
        <div className="input">
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && (
          <div className="error-message">{errors.message}</div>
        )}
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
          type="submit"
        >
          Send
        </Button>
      </form>

      {feedbackMessage && (
        <div className={`feedback-message ${feedbackType}`}>
          {feedbackMessage}
        </div>
      )}
    </div>
  );
};

export default ContactMe;
