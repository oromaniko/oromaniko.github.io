import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import styled from 'styled-components'
import { getDate } from '../helpers'
import { Link } from 'react-router-dom'

const Comments = () => {
    const { comments } = useTypedSelector((state) => state.article)

    return (
        <Container>
            {comments.map(({ author, body, createdAt, id }) => (
                <Card key={id}>
                    <div>
                        <p>{body}</p>
                    </div>
                    <div>
                        <Link to={'#'}>{author.username}</Link>
                        <span>{getDate(createdAt)}</span>
                    </div>
                </Card>
            ))}
        </Container>
    )
}

export default Comments

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`

const Card = styled.div`
    background-color: #fff;
    border-radius: 0.25rem;
    border: 1px solid #e5e5e5;
    max-width: 66%;

    div:first-child {
        padding: 1.25rem;
    }

    div:last-child {
        border-top: 1px solid #e5e5e5;
        font-size: 0.8rem;
        font-weight: 300;
        border-radius: 0 0 0.25rem 0.25rem;
        padding: 0.75rem 1.25rem;
        background-color: #f5f5f5;

        span {
            color: #bbb;
            margin-left: 5px;
        }
    }
`
