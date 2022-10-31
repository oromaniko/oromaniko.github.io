import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import styled from 'styled-components'
import { PageContainer, Row } from '../mixins'
import TagsList from '../components/TagsList'
import Comments from '../components/Comments'

const Article = () => {
    const { article, isLoading } = useTypedSelector((state) => state.article)
    const { fetchArticle } = useActions()
    const { slug } = useParams()

    useEffect(() => {
        fetchArticle(slug)
    }, [])

    const { title, body, tagList } = article

    if (isLoading) {
        return <div>Is Loading...</div>
    }
    return (
        <div>
            <Banner>
                <PageContainer>
                    <h1>{title}</h1>
                </PageContainer>
            </Banner>

            <PageContainer>
                <Row>
                    <Content>
                        <p>{body}</p>
                        <TagsList tags={tagList} />
                    </Content>
                </Row>
                <Hr />
                <Comments />
            </PageContainer>
        </div>
    )
}

export default Article

const Banner = styled.div`
    padding: 2rem 0 2rem 0;
    color: #fff;
    background: #333;
    margin-bottom: 2rem;

    h1 {
        font-size: 2.8rem;
        font-weight: 600;
    }
`

const Content = styled.div`
    padding-right: 15px;
    padding-left: 15px;

    p {
        font-family: 'Source Serif Pro', serif;
        font-size: 1.2rem;
        line-height: 1.8rem;
        margin-bottom: 2rem;
    }
`

const Hr = styled.hr`
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
`
