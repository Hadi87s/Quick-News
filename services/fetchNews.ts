import { INews, IResponse } from "@/Types/@types";

const api_key = "pub_701076cdd4cdeaa56df41b17fae04f1ce8350";

const fetchNews = async (category: string, country: string) : Promise<INews[]> => {
    const response = await fetch(
        `https://newsdata.io/api/1/latest?apikey=${api_key}&category=${category}&country=${country}`,
        { method: "GET", cache: "no-cache" } // this will prevent caching the response (SSR)
      );
    
      const result = (await response.json()) as IResponse;
    
      const latestNews: INews[] = result.results.map((item) => ({
        id: item.article_id,
        title: item.title,
        image: item.image_url,
        description: item.description,
      }));

    return latestNews;

}

export {
    fetchNews
}