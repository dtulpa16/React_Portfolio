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
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function GifModal({ show, handleClose }) {
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
    handleClose();

  };

  return (
    <div>
      <Dialog open={show} onClose={handleClose}>
        <DialogTitle>Contact Me</DialogTitle>

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
      </Dialog>
    </div>
  );
}

export default GifModal;
