import {INews_} from "@/Types/@types";
import sql from 'better-sqlite3'

const db = sql('news.db');

const getNewsByCategory = (category: string) => {
  const results = db.prepare('SELECT * FROM articles WHERE LOWER(category) = LOWER(?)').all(category);
  return results as INews_[];
}

const getNewsArticle = (slug: string): INews_ => {
  return db.prepare('SELECT * FROM articles WHERE slug = ?').get(slug) as INews_;
}

const insertArticle = (newArticle: INews_) => {
  db.prepare(`
    INSERT INTO articles 
    (slug, title, image, summary, content, author, author_email, date, category)
    VALUES (  
      @slug,
      @title,
      @image,
      @summary,
      @content,
      @author,
      @author_email,
      @date,
      @category
    )`)
    .run(newArticle);
}

export { 
  getNewsByCategory as getNews,
  insertArticle,
  getNewsArticle
};

