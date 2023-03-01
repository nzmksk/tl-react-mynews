import {
  Avatar,
  Button,
  Chip,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Header(props) {
  const LOCAL_STORAGE_KEY = {
    username: "username",
    loginStatus: "isLoggedIn",
  };
  const navigate = useNavigate();
  const [username] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.username)) ?? "Guest"
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.loginStatus)) ?? false
  );

  const searchBarHandler = (event) => {
    props.searchKeywordHandler(event.target.value);
  };

  const logoutButtonHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem(LOCAL_STORAGE_KEY.username);
    localStorage.setItem(LOCAL_STORAGE_KEY.loginStatus, JSON.stringify(false));
    navigate("/");
  };

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  } else {
    return (
      <Grid container direction={"row"}>
        <Grid item lg={9}>
          <TextField
            id="outlined-search"
            label="Search for news"
            type="search"
            size="small"
            value={props.searchKeyword}
            onChange={searchBarHandler}
          />
          <IconButton
            aria-label="Search news"
            onClick={() => {
              alert("clicked");
            }}
          >
            <SearchIcon />
          </IconButton>
        </Grid>
        <Grid item lg={3}>
          <Chip
            label={username}
            avatar={<Avatar>{username[0]}</Avatar>}
            color="primary"
          />
          <Button variant="contained" onClick={logoutButtonHandler}>
            Logout
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default Header;
