import React from 'react'
import { useActions } from '../hooks/useActions'
import { PageContainer, Row, FormButton } from '../mixins'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../routes'

const Logout = () => {
    const { logout } = useActions()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate(RouteNames.HOME)
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
