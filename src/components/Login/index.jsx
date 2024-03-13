import styles from "./Login.module.css";
import { TextField, Button } from "@mui/material";
import { UserContext } from "../context";
import { useContext, useState } from "react";
import avatar from "../../assets/avatar.jpeg";

export default function Login() {
  const { userName, logIn, logged, logOut } = useContext(UserContext);
  const [name, setName] = useState("");
  const handleLogin = () => {
    console.log(`Username: ${userName}`);
    logIn(name);
  };

  const handleLogout = () => {
    console.log(`Logged out`);
    logOut();
  };
  return (
    <div className={styles.userBlock}>
      {logged === true ? (
        <>
          <h1>Welcome, {userName}</h1>
          <div action="submit" method="post" className={styles.loginForm}>
            <img
              src={avatar}
              style={{ height: "200px", width: "200px", borderRadius: "60px" }}
              alt="Dima"
            />
            <Button
              variant="contained"
              style={{ backgroundColor: "#000", fontSize: "20px" }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </>
      ) : (
        <>
          <h1>Login to your customer area!</h1>
          <div action="submit" method="post" className={styles.loginForm}>
            <TextField
              id="filled-basic"
              label="Name"
              variant="filled"
              color="error"
              style={{
                color: "#000",
                backgroundColor: "#fff",
                borderRadius: "7px 7px 0 0",
                overflow: "hidden",
              }}
              onChange={(text) => setName(text.target.value)}
            />

            <Button
              variant="contained"
              style={{ backgroundColor: "#000", fontSize: "20px" }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
