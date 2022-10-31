import React from 'react'
import styled from 'styled-components'
import { centered } from '../mixins'

const Banner = () => {
    return (
        <BannerContainer>
            <h1>conduit</h1>
            <p>A place to share your knowledge.</p>
        </BannerContainer>
    )
}

export default Banner

const BannerContainer = styled.div`
    background: #5cb85c;
    box-shadow: inset 0 8px 8px -8px rgb(0 0 0 / 30%),
        inset 0 -8px 8px -8px rgb(0 0 0 / 30%);
    color: #fff;
    padding: 2rem;
    margin-bottom: 2rem;
    ${centered};
    flex-direction: column;

    h1 {
        font-family: 'Titillium Web', sans-serif;
        text-shadow: 0 1px 3px rgb(0 0 0 / 30%);
        font-weight: 700;
        font-size: 3.5rem;
        padding-bottom: 0.5rem;
    }

    p {
        color: #fff;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 300;
        margin: 0;
    }
`
