import { Button, Grid, LinearProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function DisplayResults({ loadMoreButtonHandler, pageNumber, searchKeyword }) {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const newsParameter = {
    API_KEY: process.env.REACT_APP_API_KEY,
    country: {
      Malaysia: "my",
      Australia: "au",
      China: "cn",
      Egypt: "eg",
      France: "fr",
      Germany: "de",
      HongKong: "hk",
      India: "in",
      Indonesia: "id",
      Japan: "jp",
      Korea: "kr",
      NewZealand: "nz",
      Phillippines: "ph",
      Russia: "ru",
      SaudiArabia: "sa",
      Singapore: "sg",
      Taiwan: "tw",
      Thailand: "th",
      Turkiye: "tr",
      UAE: "ae",
      UK: "gb",
      US: "us",
    },
    category: [
      "business",
      "entertainment",
      "general",
      "health",
      "science",
      "sports",
      "technology",
    ],
  };

  const { API_KEY, country } = newsParameter;

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      const retrieveNews = async () => {
        const url =
          searchKeyword === ""
            ? `https://newsapi.org/v2/top-headlines?country=${country.Malaysia}&pageSize=8&page=${pageNumber}&apiKey=${API_KEY}`
            : `https://newsapi.org/v2/top-headlines?language=en&q=${searchKeyword}&pageSize=8&page=${pageNumber}&apiKey=${API_KEY}`;

        await axios
          .get(url)
          .then((response) => {
            const data = response.data.articles;
            setNews([...news, ...data]);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.error(error);
          });
      };
      retrieveNews();
    }, 1000);
  }, [pageNumber, searchKeyword]);

  const filterNews = news.filter((article) => {
    return article.title.toLowerCase().includes(searchKeyword.toLowerCase());
  });

  const renderNewsItem = filterNews.map((article, index) => {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
        <NewsItem news={article} />
      </Grid>
    );
  });

  return (
    <>
      {isLoading && <LinearProgress />}
      <Grid container>{renderNewsItem}</Grid>
      <Grid item lg={12}>
        <Button
          variant="contained"
          size="medium"
          onClick={(event) => {
            loadMoreButtonHandler(event);
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          Load More
        </Button>
      </Grid>
    </>
  );
}

export default DisplayResults;
