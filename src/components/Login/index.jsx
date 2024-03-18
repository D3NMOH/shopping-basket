import styles from "./Login.module.css";
import { TextField, Button } from "@mui/material";
import { UserContext } from "../context";
import { useContext, useState, useEffect } from "react";
import avatar from "../../assets/avatar.jpeg";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Login() {
  const { userName, logIn, logged, logOut, userId } = useContext(UserContext);
  const [name, setName] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const handleLogin = () => {
    if (selectedUser) {
      console.log(`Username: ${userName}`);
      logIn(name, selectedUser._id);
    } else {
      console.error("No user selected");
    }
  };

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("https://shopping-basket-backend-u4xp.onrender.com/users")
      .then((response) => response.json())
      .then((data) => setUserList(data));
  }, []);

  const handleLogout = () => {
    console.log(`Logged out`);
    logOut();
    setName("");
  };
  return (
    <div className={styles.userBlock}>
      {logged === true ? (
        <>
          <p className={styles.headText}>Welcome, {userName}</p>
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
          <p className={styles.headText}>Login to your customer area!</p>
          <div action="submit" method="post" className={styles.loginForm}>
            <Box sx={{ minWidth: 250 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select user
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={name}
                  label="Name"
                  onChange={(event) => {
                    const selectedUser = userList.find(
                      (user) => user.username === event.target.value
                    );
                    if (selectedUser) {
                      setSelectedUser(selectedUser);
                      setName(event.target.value);
                    }
                  }}
                >
                  {userList.map((user) => {
                    return (
                      <MenuItem key={user._id} value={user.username}>
                        {user.username}, {user.email}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>

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
