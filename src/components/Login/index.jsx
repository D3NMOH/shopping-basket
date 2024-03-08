import styles from "./Login.module.css";
import Button from "@mui/material/Button";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "var(--background-color)",
  border: "1px solid var(--secondary-color)",
  boxShadow: "0 15px 30px #000",
  borderRadius: "10px",
  p: 4,
};

const [openLogin, setOpenLogin] = React.useState(false);
const handleCloseLogin = () => setOpen(false);

export default function Login({ handleOpenLogin, handleCloseLogin }) {
  return (
    <div>
      This is the shopping cart!
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleCloseLogin}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style} className="cart">
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Cart
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Goods that you wanna buy
              </Typography>
              <div className="cartButton">
                <i className="fa-solid fa-wallet"></i> Checkout
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}
