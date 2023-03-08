import React from "react";
import { useState } from "react";
import { Modal, Box,Button } from "@mui/material";
import { styled } from "@mui/system";
import { useRef } from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const ModalBox = styled(Box)({
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
    padding: '1rem',
    '@media (max-width: 600px)': {
      width: '95vw',
      height: '80vh',
    }
  });
  const CloseButton = styled(IconButton)({
    position: "absolute",
    top: 0,
    right: 0,
    margin: "1rem",
    color: "#fff",
  });
export default function GifModal({ videoUrl, open, handleClose }) {
    const videoRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        closeAfterTransition
        BackdropProps={{
          sx: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        }}
      >
        <ModalBox>
          <video ref={videoRef} controls style={{maxWidth:"85%", "maxHeight":"85%"}}>
            <source src={videoUrl} type="video/mp4" />
          </video>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
        </ModalBox>
      </Modal>
    </div>
  );
}
