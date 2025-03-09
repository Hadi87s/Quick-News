"use server";

import { insertArticle } from "@/services/fetchNews";
import { INews_ } from "@/Types/@types";
import slugify from "slugify";
import xss from "xss";

const addArticle = async (formData: FormData) => {
    const title = xss(formData.get("title")?.toString() || "");
    const newArticle: INews_ = {
        title: title,
        imageUrl: formData.get("image")?.toString() || "",
        summary: xss(formData.get("summary")?.toString() || ""),
        description: xss(formData.get("content")?.toString() || ""),
        date: new Date(formData.get("date")?.toString() || "").getTime() / 1000,
        author: formData.get("author")?.toString() || "",
        author_email: formData.get("author_email")?.toString() || "",
        slug: slugify(title, {lower: true, trim: true}),
    };
    insertArticle(newArticle);
    //This will insert the new article to the specified category.
    console.log(newArticle);
};

export {addArticle}
