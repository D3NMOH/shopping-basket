import "./RootLayout.module.css";
import TopBar from "../TopBar";
import { NavLink, Outlet } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { UserProvider } from "../context";
import { useContext, useState } from "react";
import Cart from "../Cart";
import { CartProvider } from "../context/context";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  bgcolor: "var(--background-color)",
  border: "1px solid var(--secondary-color)",
  boxShadow: "0 15px 30px #000",
  borderRadius: "10px",
  p: 4,
};

function RootLayout() {
  const [openCart, setOpenCart] = useState(false);
  const handleOpenCart = () => setOpenCart(true);
  const handleCloseCart = () => setOpenCart(false);

  return (
    <UserProvider>
      <CartProvider>
        <TopBar handleOpenCart={handleOpenCart} />
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openCart}
            onClose={handleCloseCart}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={openCart}>
              <Box sx={style} className="cart">
                <div
                  className="cartButton"
                  onClick={handleCloseCart}
                  style={{
                    display: "flex",
                    marginTop: "20px",
                    width: "20px",
                    height: "20px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i className="fa-solid fa-close"></i>
                </div>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Shopping Cart
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  <Cart />
                </Typography>
                <div className="cartButton">
                  <i className="fa-solid fa-wallet"></i> Checkout
                </div>
              </Box>
            </Fade>
          </Modal>
        </div>
        <CSSTransition
          in={true}
          timeout={500}
          classNames="my-node"
          unmountOnExit
        >
          <Outlet />
        </CSSTransition>
      </CartProvider>
    </UserProvider>
  );
}

export default RootLayout;
