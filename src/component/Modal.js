import { Button, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export const ModalComponent = ({ isOpen = false, handleModal, children }) => {
  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => handleModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        keepMounted 
        disableEnforceFocus 
      >
       
        {children}
      </Modal>
    </>
  );
};
