import React from 'react'
import { Tag } from '../models/tags'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { centered } from '../mixins'

type props = {
    tags: Tag[]
    selected: Tag | ''
    isLoading: boolean
    setTag: (tag: Tag) => void
}

const TagsSider = ({ tags, isLoading, setTag, selected }: props) => {
    return (
        <Sidebar>
            <p>Popular Tags</p>
            {isLoading ? (
                'Loading tags...'
            ) : (
                <TagList>
                    {tags.map((tag) => (
                        <TagItem
                            isSelected={tag === selected}
                            key={tag}
                            to={'#'}
                            onClick={() => setTag(tag)}
                        >
                            {tag}
                        </TagItem>
                    ))}
                </TagList>
            )}
        </Sidebar>
    )
}

export default TagsSider

const Sidebar = styled.div`
    padding: 5px 10px 10px 10px;
    background: #f3f3f3;
    border-radius: 4px;

    p {
        margin-bottom: 0.2rem;
    }
`

const TagList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.2rem;
`

const TagItem = styled(Link)<{ isSelected: boolean }>`
    ${centered};
    color: #fff;
    font-size: 0.8rem;
    padding: 0.1rem 0.6em;
    background-color: ${(props) => (props.isSelected ? '#687077' : '#818a91')};
    text-decoration: ${(props) => (props.isSelected ? 'underline' : 'none')};
    border-radius: 10rem;

    :hover {
        background-color: #687077;
    }
`
