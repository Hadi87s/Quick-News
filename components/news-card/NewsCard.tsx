import React from "react";
import { INews } from "@/Types/@types";

interface IProps {
  news: INews;
}
const NewsCard = ({ news }: IProps) => {
  return (
    <div className="p-4 bg-zinc-800 rounded-3xl relative">
      <img
        className=" object-cover rounded-2xl m-w-[100%] h-auto aspect-square"
        src={news.image || "none"}
        alt=""
        width={500}
        height={200}
      />
      <h2 className="">{news.title}</h2>
      <p>{news.description}</p>
      <div className="absolute top-4 right-4 flex justify-center gap-x-2 flex-wrap font-bold text-[12px] bg-zinc-600/75 rounded-2xl p-[8px]">
        <span>By {news.source_name}</span>
        <img
          className="rounded-lg"
          src={news.source_icon}
          alt="source"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default NewsCard;
