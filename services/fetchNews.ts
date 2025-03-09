import { INews_} from "@/Types/@types";
import sql from 'better-sqlite3'

const db = sql('news.db');

const getNewsByCategory = (category: string) => {
  const results = db.prepare('SELECT * FROM news WHERE LOWER(category) = LOWER(?)').all(category);
  return results as INews_[];
}

const getNewsArticle = (slug: string): INews_ => {
  return db.prepare('SELECT * FROM articles WHERE slug = ?').get(slug) as INews_;
}

const insertArticle = (data: INews_) => {
  db.prepare(
    `INSERT INTO news (title, description, imageUrl, source_icon, source_name, category, summary, content, date, author, author_email, slug)
    VALUES (@title, @description, @imageUrl, @source_icon, @source_name, @category, @summary, @content, @date, @author, @author_email, @slug)`
  ).run(
    data
  )
}

export { 
  getNewsByCategory as getNews,
  insertArticle,
  getNewsArticle
};

