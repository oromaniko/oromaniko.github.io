import React from 'react'
import { useActions } from '../hooks/useActions'
import { PageContainer, Row, FormButton } from '../mixins'
import styled from 'styled-components'
import { useCookies } from 'react-cookie'

const Logout = () => {
    const { logout } = useActions()
    const [, , removeCookie] = useCookies()

    const handleLogout = () => {
        removeCookie('token')
        logout()
    }

    return (
        <PageContainer>
            <ButtonRow>
                <FormButton onClick={handleLogout}>Sign out</FormButton>
            </ButtonRow>
        </PageContainer>
    )
}

export default Logout

const ButtonRow = styled(Row)`
    justify-content: center;
    align-items: center;
    height: 20vh;
`
