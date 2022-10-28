import React from 'react'
import { Article } from '../models/article'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

type props = {
    article: Article
}
const ArticlePreview = ({ article }: props) => {
    const {
        author,
        body,
        description,
        favoritesCount,
        favorited,
        slug,
        tagList,
        title,
        updatedAt,
        createdAt,
    } = article

    const date = new Date(createdAt)
    return (
        <Container>
            <Meta>
                <Link to='/'>
                    <img src={author.image} alt='avatar' />
                </Link>
                <Info>
                    <Link to='/'>{author.username}</Link>
                    <span>
                        {date.toLocaleDateString('en-US', {
                            month: 'long',
                            year: 'numeric',
                            day: 'numeric',
                        })}
                    </span>
                </Info>
                <FavoritesButton>
                    <button>
                        <span>{favoritesCount}</span>
                    </button>
                </FavoritesButton>
            </Meta>
            <PreviewLink to='/'>
                <h1>{title}</h1>
                <p>{description}</p>
                <span>Read more...</span>
                <ul>
                    {tagList.map((tag) => (
                        <li>{tag}</li>
                    ))}
                </ul>
            </PreviewLink>
        </Container>
    )
}

export default ArticlePreview

const Container = styled.article`
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1.5rem 0;
`

const Meta = styled.div`
    margin-bottom: 1rem;
    font-weight: 300;
    position: relative;

    img {
        display: inline-block;
        vertical-align: middle;
        height: 32px;
        width: 32px;
        border-radius: 30px;
    }
`
const Info = styled.div`
    margin: 0 1.5rem 0 0.3rem;
    display: inline-block;
    vertical-align: middle;
    line-height: 1rem;

    a {
        display: block;
        font-weight: 500;
    }

    span {
        color: #bbb;
        font-size: 0.8rem;
        display: block;
    }
`

const FavoritesButton = styled.div`
    float: right;
    button {
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        border-radius: 0.2rem;
        color: #5cb85c;
        background-image: none;
        background-color: transparent;
        border-color: #5cb85c;
    }
`

const PreviewLink = styled(Link)`
    color: inherit;
    h1 {
        font-weight: 600 !important;
        font-size: 1.5rem !important;
        margin-bottom: 3px;
    }

    p {
        font-weight: 300;
        color: #999;
        margin-bottom: 15px;
        font-size: 1rem;
        line-height: 1.3rem;
    }

    span {
        max-width: 30%;
        font-size: 0.8rem;
        font-weight: 300;
        color: #bbb;
        vertical-align: middle;
    }

    ul {
        float: right;
        max-width: 50%;
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        gap: 0.5rem;
        list-style: none;
        padding: 0;
        li {
            border: 1px solid #ddd;
            border-radius: 10rem;
            color: #aaa;
            background: none;
            font-weight: 300;
            font-size: 0.8rem;
            padding: 0 0.6rem;
        }
    }
`
