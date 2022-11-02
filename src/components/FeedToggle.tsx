import React, { useEffect, useState } from 'react'
import { Tag } from '../models/tags'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useActions } from '../hooks/useActions'

type props = {
    tag: Tag | ''
    setTag: (tag: Tag | '') => void
}
const FeedToggle = ({ tag, setTag }: props) => {
    const { fetchArticles, setOffset } = useActions()
    const [activeItem, setActiveItem] = useState('Global')

    useEffect(() => {
        if (tag) {
            setActiveItem('tag')
        }
    }, [tag])

    const handleClickGlobalFeed = () => {
        setOffset(0)
        fetchArticles(0)
        setActiveItem('Global')
        setTag('')
    }

    return (
        <Container>
            <ul>
                <li>
                    <FeedLink
                        to={'#'}
                        isActive={activeItem === 'Global'}
                        onClick={handleClickGlobalFeed}
                    >
                        Global Feed
                    </FeedLink>
                </li>
                {tag && (
                    <li>
                        <FeedLink
                            to={'#'}
                            isActive={true}
                        >{`# ${tag}`}</FeedLink>
                    </li>
                )}
            </ul>
        </Container>
    )
}

export default FeedToggle

const Container = styled.div`
    margin-bottom: -1px;

    li {
        margin-left: 0.2rem;
        display: inline-flex;
    }
`

const FeedLink = styled(Link)<{ isActive: boolean }>`
    padding: 0.5em 1em;
    border-bottom: ${(props) =>
        props.isActive ? '2px solid #5cb85c' : 'none'};
    color: ${(props) => (props.isActive ? '#5CB85C' : '#aaa')};
`
