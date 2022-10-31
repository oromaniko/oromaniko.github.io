import React from 'react'
import { Article } from '../models/article'
import ArticlePreview from './ArticlePreview'

type props = {
    articles: Article[]
    isLoading: boolean
}

const ArticlesList = ({ articles, isLoading }: props) => {
    if (isLoading) {
        return <div>Loading articles...</div>
    }
    if (!articles.length) {
        return <div>No articles found.</div>
    }
    return (
        <div>
            {articles.map((item) => (
                <ArticlePreview key={item.slug} article={item} />
            ))}
        </div>
    )
}

export default ArticlesList
