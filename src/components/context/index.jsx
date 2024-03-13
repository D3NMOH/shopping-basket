import React, { useState, createContext } from "react";
import Cart from "../Cart";
import { goods } from "../../data/goods";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [items, setItems] = useState([]);

  function logIn(userName) {
    setUserName(userName);
  }
  function logOut() {
    setUserName("");
  }

  return (
    <UserContext.Provider
      value={{
        userName,
        logIn,
        logged: userName.length > 0,
        logOut,
        items,
        setItems,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
