import { Grid } from "@mui/material";
import { useState } from "react";
import DisplayResults from "./components/DisplayResults";
import Header from "./components/Header";
import MyFavoritesPanel from "./components/MyFavoritesPanel";

function Home() {
  const [searchKeyword, setSearchKeyword] = useState("");

  const searchKeywordHandler = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <Grid container className="main-container" direction={"column"}>
      <Grid
        className="header-container"
        item
        lg={1}
        style={{ maxHeight: "10vh" }}
      >
        <Header
          searchKeyword={searchKeyword}
          searchKeywordHandler={searchKeywordHandler}
        />
      </Grid>
      <Grid className="content-container" item lg={11}>
        <Grid container direction={"row"} style={{ height: "100%" }}>
          <Grid className="left-panel-container" item lg={2.5}>
            <MyFavoritesPanel />
          </Grid>
          <Grid className="result-container" item lg={9.5}>
            <DisplayResults searchKeyword={searchKeyword} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
