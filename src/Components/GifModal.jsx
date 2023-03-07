import React, { useState, useRef } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import emailjs from "@emailjs/browser";
function GifModal({ show, handleClose, submitted, setSubmitted }) {
  const form = useRef();
  const [userContact, setUserContact] = useState({
    to_name: "Dan",
    from_name: "Portfolio message",
    subject: "Portfolio Email",
  });

  const handleChange = async (e) => {
    setUserContact({ ...userContact, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e, form) => {
    e.preventDefault();
    debugger;
    console.log(userContact);
    const templateId = "template_ysb17ag";
    await emailjs
      .sendForm(
        "default_service",
        templateId,
        form.current,
        "29yvQANja38oU8Nim"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    setSubmitted(true);
    setUserContact({
      to_name: "Dan",
      from_name: "Portfolio message",
      subject: "Portfolio Email",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <Dialog open={show} onClose={handleClose}>
        {!submitted ? (
          <DialogTitle>Contact Me</DialogTitle>
        ) : (
          <DialogTitle>Sent!</DialogTitle>
        )}
        {!submitted ? (
          <DialogContent>
            <DialogContentText>
              Please enter your contact details and message below.
            </DialogContentText>
            <form ref={form} onSubmit={(e) => handleSubmit(e, form)}>
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                fullWidth
                value={userContact.email}
                name="email"
                onChange={handleChange}
              />
              <TextField
                margin="dense"
                id="message"
                label="Message"
                multiline
                rows={4}
                fullWidth
                value={userContact.message}
                name="message"
                onChange={handleChange}
              />
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Submit</Button>
              </DialogActions>
            </form>
          </DialogContent>
        ) : (
          <DialogContent>
            <DialogContentText>
              Thank you for your message! I'll be in touch shortly.
            </DialogContentText>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}

export default GifModal;
