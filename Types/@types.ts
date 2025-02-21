export interface INews {
  id: string;
  title: string;
  description: string;
  image: string | null;
  source_icon: string;
  source_name: string;
}

export interface IResponse {
  status: string;
  totalResults: string;
  results: IResponseNewsItem[];
}

interface IResponseNewsItem {
  article_id: string;
  title: string;
  description: string;
  image_url: string | null;
  source_icon: string;
  source_name: string;
}
