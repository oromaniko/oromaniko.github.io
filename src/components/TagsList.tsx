import React from 'react'
import styled from 'styled-components'
import { Tag } from '../models/tags'

type props = {
    tags: Tag[]
}
const TagsList = ({ tags }: props) => {
    return (
        <List>
            {tags.map((tag) => (
                <li key={tag}>{tag}</li>
            ))}
        </List>
    )
}

export default TagsList

const List = styled.ul`
    max-width: 50%;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    gap: 0.5rem;
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
`
