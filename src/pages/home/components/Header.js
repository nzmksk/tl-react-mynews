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
  const navigate = useNavigate();
  const [username, setUsername] = useState("John");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem(username) ?? false
  );

  const logoutButtonHandler = () => {
    setIsLoggedIn(!isLoggedIn);
    localStorage.setItem(username, !isLoggedIn);
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
            onChange={props.searchKeywordHandler}
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
          <Chip label="Profile" avatar={<Avatar>J</Avatar>} color="primary" />
          <Button variant="contained" onClick={logoutButtonHandler}>
            Logout
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default Header;
