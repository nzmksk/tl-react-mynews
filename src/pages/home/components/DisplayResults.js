import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function DisplayResults() {
  const [news, setNews] = useState([]);

  const retrieveNews = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        const newsArray = response.data.articles;
        setNews(newsArray);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    retrieveNews();
  }, []);

  const renderNewsItem = news.map((article) => {
    return (
      <Grid item>
        <NewsItem news={article} key={article.url} />
      </Grid>
    );
  });

  return <Grid container>{renderNewsItem}</Grid>;
}

export default DisplayResults;
