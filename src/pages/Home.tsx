import React, { useEffect } from 'react'
import styled from 'styled-components'
import Banner from '../components/Banner'
import { PageContainer, Row } from '../mixins'
import { useActions } from '../hooks/useActions'
import ArticlesList from '../components/ArticlesList'
import { useTypedSelector } from '../hooks/useTypedSelector'

const Home = () => {
    const { isAuth } = useTypedSelector((state) => state.auth)
    const { articles, isLoading: isArticlesLoading } = useTypedSelector(
        (state) => state.articles
    )
    const { fetchArticles, fetchTags } = useActions()

    useEffect(() => {
        fetchArticles(10)
        fetchTags()
    }, [])

    return (
        <main>
            {!isAuth && <Banner />}
            <PageContainer>
                <Row>
                    <Content>
                        {!isArticlesLoading && (
                            <ArticlesList articles={articles} />
                        )}
                    </Content>
                    <Sider></Sider>
                </Row>
            </PageContainer>
        </main>
    )
}

export default Home

const Content = styled.div`
    @media (min-width: 768px) {
        padding-right: 15px;
        padding-left: 15px;
        flex: 0 0 75%;
        max-width: 75%;
    }
`

const Sider = styled.aside`
    @media (min-width: 768px) {
        padding-right: 15px;
        padding-left: 15px;
        flex: 0 0 25%;
        max-width: 25%;
    }
`
