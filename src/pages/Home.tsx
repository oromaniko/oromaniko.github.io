import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Banner from '../components/Banner'
import { PageContainer, Row } from '../mixins'
import { useActions } from '../hooks/useActions'
import ArticlesList from '../components/ArticlesList'
import { useTypedSelector } from '../hooks/useTypedSelector'
import TagsSider from '../components/TagsSider'
import { Tag } from '../models/tags'
import FeedToggle from '../components/FeedToggle'
import ListPagination from '../components/ListPagination'
import { Outlet } from 'react-router-dom'

const Home = () => {
    const { isAuth } = useTypedSelector((state) => state.auth)
    const {
        articles,
        isLoading: isArticlesLoading,
        offset,
    } = useTypedSelector((state) => state.articles)
    const { tags, isLoading: isTagsLoading } = useTypedSelector(
        (state) => state.tags
    )
    const { fetchArticles, fetchTags } = useActions()
    const [selectedTag, setSelectedTag] = useState('' as Tag | '')

    useEffect(() => {
        fetchArticles(offset, selectedTag)
    }, [selectedTag, offset])

    useEffect(() => {
        fetchTags()
    }, [])

    return (
        <main>
            {!isAuth && <Banner />}
            <PageContainer>
                <Row>
                    <Content>
                        <FeedToggle tag={selectedTag} setTag={setSelectedTag} />
                        <ArticlesList
                            articles={articles}
                            isLoading={isArticlesLoading}
                        />
                        <ListPagination />
                    </Content>
                    <Sider>
                        <TagsSider
                            tags={tags}
                            isLoading={isTagsLoading}
                            selected={selectedTag}
                            setTag={setSelectedTag}
                        />
                    </Sider>
                </Row>
            </PageContainer>
            <Outlet />
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
