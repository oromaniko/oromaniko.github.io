import React from 'react'
import { RouteNames } from '../routes'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PageContainer } from '../mixins'
import { useTypedSelector } from '../hooks/useTypedSelector'

const Header = () => {
    const { isAuth, user } = useTypedSelector((state) => state.auth)

    const navItems = isAuth
        ? [
              { name: 'Home', path: RouteNames.HOME },
              { name: 'Sign out', path: RouteNames.LOGOUT },
              { name: user.username, path: '/user' },
          ]
        : [
              { name: 'Home', path: RouteNames.HOME },
              { name: 'Sign in', path: RouteNames.LOGIN },
              { name: 'Sign up', path: RouteNames.REGISTER },
          ]

    return (
        <header>
            <Navbar>
                <NavContainer>
                    <Brand to={RouteNames.HOME}>conduit</Brand>
                    <NavList>
                        {navItems.map(({ path, name }) => (
                            <NavItem key={path}>
                                <Link to={path}>{name}</Link>
                            </NavItem>
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

const NavContainer = styled(PageContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Brand = styled(Link)`
    font-family: 'Titillium Web', sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    color: #5cb85c;
    text-decoration: none;
`

const NavList = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    gap: 16px;
`

const NavItem = styled.li`
    cursor: pointer;
    a {
        color: rgba(0, 0, 0, 0.8);
    }
`
