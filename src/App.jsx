import ProductList from "./components/ProductList";
import TopBar from "./components/TopBar";
import HomePage from "./components/HomePage";
import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";
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

function App() {
  const [openCart, setOpenCart] = React.useState(false);
  const handleOpenCart = () => setOpenCart(true);
  const handleCloseCart = () => setOpenCart(false);
  return (
    <>
      <TopBar handleOpenCart={handleOpenCart} />
      <HomePage />
      {/* <ProductList /> */}
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
    </>
  );
}

export default App;
