import React from 'react'
interface IProps {
    params: Promise<{slug: string}>
}

const NewsArticle = async ({params} : IProps) => {
    const slug = (await params).slug;
    // const article = getNewsArticle(slug);
  return (
    <div>
      <h1></h1>
    </div>
  )
}

export default NewsArticle
