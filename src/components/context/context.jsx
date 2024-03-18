import { useState, createContext, useContext } from "react";
import { UserContext } from "../context/index";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { userId } = useContext(UserContext);

  const addToCart = async (product) => {
    if (!userId) {
      console.error("userId is undefined");
      return;
    }

    const response = await fetch(
      `https://shopping-basket-backend-u4xp.onrender.com/users/${userId}/product/${product._id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItem: product }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to add product to cart");
    }

    const updatedCart = await response.json();
    setCart(updatedCart);
  };

  const increaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = async (product) => {
    if (!userId) {
      console.error("userId is undefined");
      return;
    }

    const response = await fetch(
      `https://shopping-basket-backend-u4xp.onrender.com/user/${userId}/product/${product._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItem: product }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to add product to cart");
    }

    const updatedCart = await response.json();
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
