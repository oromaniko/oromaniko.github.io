import React from 'react'
import { Article } from '../models/article'
import ArticlePreview from './ArticlePreview'

type props = {
    articles: Article[]
}

const ArticlesList = ({ articles }: props) => {
    return (
        <div>
            {articles.map((item) => (
                <ArticlePreview key={item.slug} article={item} />
            ))}
        </div>
    )
}

export default ArticlesList
