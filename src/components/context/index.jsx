import React, { useState, createContext } from "react";
import Cart from "../Cart";
import { goods } from "../../data/goods";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [items, setItems] = useState([]);
  const [userId, setUserId] = useState("");

  const logIn = (name, id) => {
    setUserName(name);
    setUserId(id);
  };

  function logOut() {
    setUserName("");
    setUserId("");
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
        userId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
