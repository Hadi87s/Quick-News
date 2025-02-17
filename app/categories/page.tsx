"use client";
import NewsCard from "@/components/news-card/NewsCard";
import { INews } from "@/Types/@types";
import React, { useEffect, useState } from "react";

const page = () => {
  const [latestNews, setLatestNews] = useState<INews[]>([]);

  const getNews = async () => {
    fetch(
      "https://newsdata.io/api/1/latest?apikey=pub_70107903bea26225fec8abe2b5901c782cd5a&category=politics&country=us",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) =>
        setLatestNews(
          data.results.map((item: any) => ({
            id: item.article_id,
            title: item.title,
            description: item.description,
            image: item.image_url,
          }))
        )
      );
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <div>
      {
        latestNews.map((item)=>(

          <NewsCard news={item} />
        ))
      }
    </div>
  );
};

export default page;
