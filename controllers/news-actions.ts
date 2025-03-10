"use server";

import { insertArticle } from "@/services/fetchNews";
import { INews_ } from "@/Types/@types";
import slugify from "slugify";
import xss from "xss";

const addArticle = async (_ : unknown,formData: FormData) => {
    const errors : string[] = [];
    const title = xss(formData.get("title")?.toString() || "");
    const newArticle: INews_ = {
        title: title,
        image: formData.get("image")?.toString() || "",
        summary: xss(formData.get("summary")?.toString() || ""),
        content: xss(formData.get("content")?.toString() || ""),
        date: new Date(formData.get("date")?.toString() || "").getTime() / 1000,
        category: formData.get("category")?.toString() || "",
        author: formData.get("author")?.toString() || "",
        author_email: formData.get("author_email")?.toString() || "",
        slug: slugify(title, {lower: true, trim: true}),
    };
    console.log(newArticle.image);
    
    if(newArticle.date > Date.now()){
        errors.push("The date cannot be in the future!");
    }

    if(errors.length){
        return {
            errors: errors,
        }
    }
    insertArticle(newArticle);
    //This will insert the new article to the specified category.
    console.log(newArticle);
};

export {addArticle}
