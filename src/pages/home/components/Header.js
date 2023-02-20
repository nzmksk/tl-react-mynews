import {
  Avatar,
  Button,
  Chip,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function Header() {
  const [searchKeyword, setSearchKeyword] = useState("");

  const searchTermHandler = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <Grid container direction={"row"}>
      <Grid item lg={9}>
        <TextField
          id="outlined-search"
          label="Search for news"
          type="search"
          size="small"
          value={searchKeyword}
          onChange={searchTermHandler}
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
        <Button variant="contained">Logout</Button>
      </Grid>
    </Grid>
  );
}

export default Header;
