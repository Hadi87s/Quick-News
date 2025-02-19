import React, { Suspense } from "react";
import "./loader.css";
import NewsCard from "@/components/news-card/NewsCard";
import { fetchNews } from "@/services/fetchNews";
import Loading from "./loading";

interface IParams {
  category: string;
  country: string;
}

interface IProps {
  params: Promise<IParams>;
}

const News = async ({ category, country }: IParams) => {
  const latestNews = await fetchNews(category, country);
  return (
    <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid gap-4">
      {latestNews.map((item, index) => (
        <NewsCard key={index} news={item} />
      ))}
    </div>
  );
};

const NewsList = async (props: IProps) => {
  const { category, country } = await props.params;

  return (
    <div>
      <h1>
        {(await props.params).country} {(await props.params).category} News
      </h1>
      <Suspense fallback={<Loading />}>
        <News category={category} country={country} />
      </Suspense>
    </div>
  );
};
export default NewsList;
