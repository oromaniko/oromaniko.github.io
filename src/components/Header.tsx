import React from 'react'
import { RouteNames, routes } from '../routes'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { container } from '../mixins'

const Header = () => {
    const names = {
        [RouteNames.HOME]: 'Home',
        [RouteNames.LOGIN]: 'Sign in',
        [RouteNames.REGISTER]: 'Sign up',
    }

    return (
        <header>
            <Navbar>
                <NavContainer>
                    <Brand to={RouteNames.HOME}>conduit</Brand>
                    <NavList>
                        {routes.map(({ path }) => (
                            <NavLink>
                                <Link to={path}>{names[path]}</Link>
                            </NavLink>
                        ))}
                    </NavList>
                </NavContainer>
            </Navbar>
        </header>
    )
}

export default Header

const Navbar = styled.nav`
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
`

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${container};
`

const Brand = styled(Link)`
    font-family: 'Titillium Web', sans-serif;
    font-size: 1.5rem !important;
    color: #5cb85c !important;
    text-decoration: none;
`

const NavList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    gap: 16px;
`

const NavLink = styled.li`
    list-style: none;
    cursor: pointer;
    a {
        color: rgba(0, 0, 0, 0.8);
    }
`
