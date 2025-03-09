import {INews_} from "@/Types/@types";
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
  //TODO: ADD THE REQUIRED FIELDS WHEN YOU TUNE THE DATABASE FOR IT!
  db.prepare(
    `INSERT INTO news (title, imageUrl, category, description)
    VALUES (@title, @imageUrl, @category, @description)`
  ).run(
    data
  )
}

export { 
  getNewsByCategory as getNews,
  insertArticle,
  getNewsArticle
};

