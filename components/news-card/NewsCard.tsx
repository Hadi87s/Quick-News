import React from "react";
import { INews } from "@/Types/@types";

interface IProps {
  news: INews;
}
const NewsCard = ({ news }: IProps) => {
  return (
    <div>
      <h3>{news.title}</h3>
      <img src={news.image || ""} alt="" width={500} height={200} />
      <p>{news.description}</p>
    </div>
  );
};

export default NewsCard;
