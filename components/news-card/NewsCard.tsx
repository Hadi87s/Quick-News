import React from "react";
import { INews } from "@/Types/@types";

interface IProps {
  news: INews;
}
const NewsCard = ({ news }: IProps) => {
  return (
    <div className="p-4 bg-zinc-800 rounded-3xl">
      <img
        className=" object-cover rounded-2xl m-w-[100%] h-auto aspect-square"
        src={news.image || "none"}
        alt=""
        width={500}
        height={200}
      />
      <h2 className="">{news.title}</h2>
      <p>{news.description}</p>
    </div>
  );
};

export default NewsCard;
