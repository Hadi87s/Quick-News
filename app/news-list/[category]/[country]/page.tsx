"use client";
import React, { useEffect, useState } from "react";
import { INews, IResponse } from "@/Types/@types";
import "./loader.css";
import NewsCard from "@/components/news-card/NewsCard";
const api_key = "pub_701076cdd4cdeaa56df41b17fae04f1ce8350";
interface IParams {
  category: string;
  country: string;
}
interface IProps {
  params: Promise<IParams>;
}
const NewsList = (props: IProps) => {
  const [p, setP] = useState<IParams>({ category: "", country: "" });
  const [latestNews, setLatestNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState(true);

  const getNews = async () => {
    setP(await props.params);
    setLoading(true);

    fetch(
      `https://newsdata.io/api/1/latest?apikey=${api_key}&category=${
        (await props.params).category
      }&country=${(await props.params).country}`,
      { method: "GET" }
    )
      // as tells the editor that the response you are getting from json() is a News.IResponse
      .then((res) => res.json() as Promise<IResponse>)
      .then((res) => {
        const newsList: INews[] = res.results.map((item) => ({
          id: item.article_id,
          title: item.title,
          image: item.image_url,
          description: item.description,
        }));
        setLatestNews(newsList);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <div>
      <h1>
        {p.country} {p.category} News
      </h1>
      {loading ? (
        <div className="loader" />
      ) : (
        <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid gap-4">
          {latestNews.map((item, index) => (
            <NewsCard key={index} news={item} />
          ))}
        </div>
      )}
    </div>
  );
};
export default NewsList;
