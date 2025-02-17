"use client";
import NewsCard from "@/components/news-card/NewsCard";
import { INews } from "@/Types/@types";
import React, { useEffect, useState } from "react";
import "./loader.css";
const api_key = "pub_70107903bea26225fec8abe2b5901c782cd5a";
const category = "crime";
const country = "us";

const Page = () => {
  const [latestNews, setLatestNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState(true);
  const getNews = async () => {
    setLoading(true);
    fetch(
      `https://newsdata.io/api/1/latest?apikey=${api_key}&category=${category}&country=${country}`,
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
      )
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <div>
      {loading && (
        <div className="loader absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
      )}
      <h1>News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {latestNews.map((item, index) => (
          <NewsCard key={index} news={item} />
        ))}
      </div>
    </div>
  );
};

export default Page;
