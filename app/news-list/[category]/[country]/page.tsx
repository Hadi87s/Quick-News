import React, { Suspense } from "react";
import "./loader.css";
import NewsCard from "@/components/news-card/NewsCard";
import { getNews } from "@/services/fetchNews";
import Loading from "./loading";

interface IParams {
  category: string;
  country: string;
}

interface IProps {
  params: Promise<IParams>;
}

const News = async ({ category }: IParams) => {
  // const latestNews = await fetchNews(category, country);
  const latestNews = getNews(category);
  return (
    <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-2  grid gap-4">
      {latestNews.map((item, index) => (
        <NewsCard key={index} news={item} />
      ))}
    </div>
  );
};

const NewsList = async (props: IProps) => {
  const { category, country } = await props.params;

  return (
    <div className="mb-5">
      <h1 className="bg-zinc-800 p-4 mt-0 mb-4 rounded-2xl text-center ">
        {country.toUpperCase()}{" "}
        {category.charAt(0).toUpperCase() + category.slice(1)} News
      </h1>
      <Suspense fallback={<Loading />}>
        <News category={category} country={country} />
      </Suspense>
    </div>
  );
};
export default NewsList;
