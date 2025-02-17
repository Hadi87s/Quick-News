import React from "react";
import { INews } from "@/Types/@types";
import Image from "next/image";
interface IProps {
  news: INews;
}
const NewsCard = ({ news }: IProps) => {
  return (
    <div className="p-4">
      <img src={news.image || "none"} alt="" width={500} height={200} />
      <h1>{news.title}</h1>
      <p>{news.description}</p>
    </div>
  );
};

export default NewsCard;
