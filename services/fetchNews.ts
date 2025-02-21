import { INews, IResponse } from "@/Types/@types";
import { notFound } from "next/navigation";

const api_key = "pub_701076cdd4cdeaa56df41b17fae04f1ce8350";

const fetchNews = async (
  category: string,
  country: string
): Promise<INews[]> => {
  const response = await fetch(
    `https://newsdata.io/api/1/latest?apikey=${api_key}&category=${category}&country=${country}`,
    { method: "GET", cache: "no-cache" } // this will prevent caching the response (SSR)
  );

  const result = (await response.json()) as IResponse;
  console.log(result);
  let latestNews: INews[] = [];
  if (result.status == "success") {
    latestNews = result.results.map((item) => ({
      id: item.article_id,
      title: item.title,
      image: item.image_url,
      description: item.description,
      source_icon: item.source_icon,
      source_name: item.source_name,
    }));
  } else {
    notFound(); // This will redirect to the 404 page, and it is a prebuilt function from the Next it self (Manual notfound trigger)
  }

  return latestNews;
};

export { fetchNews };
