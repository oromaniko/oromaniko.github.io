import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <footer>
            <Link href='https://github.com/gothinkster/angularjs-realworld-example-app'>
                Fork on GitHub
            </Link>
        </footer>
    )
}

export default Footer

const Link = styled.a`
    position: fixed;
    bottom: 0;
    width: 100%;
    background: linear-gradient(#485563, #29323c);
    text-align: center;
    padding: 15px;
    box-shadow: 0 5px 5px 5px rgb(0 0 0 / 40%);
    z-index: 999;
    color: #fff;
    font-size: 1.5rem;
    display: block;

    :hover {
        text-decoration: underline;
    }
`
