import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function DisplayResults({ searchKeyword }) {
  const [news, setNews] = useState([]);

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
    query: searchKeyword,
    pageSize: 20,
    page: 1,
  };

  const retrieveNews = async () => {
    const { API_KEY, country, category, query, pageSize, page } = newsParameter;
    let urlRequest;

    if (!searchKeyword) {
      urlRequest = `https://newsapi.org/v2/top-headlines?country=${country.Malaysia}&apiKey=${API_KEY}`;
    } else {
      urlRequest = `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${API_KEY}`;
    }

    try {
      const response = await axios.get(urlRequest);
      const newsArray = response.data.articles;
      setNews(newsArray);
    } catch (error) {
      console.log(error);
    }
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
