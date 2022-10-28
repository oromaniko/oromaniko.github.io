import styled, { css } from 'styled-components'

export const container = css`
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;

    max-width: 567px;

    @media (min-width: 768px) {
        max-width: 720px;
    }
    @media (min-width: 992px) {
        max-width: 940px;
    }
`

export const PageContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;

    max-width: 567px;

    @media (min-width: 768px) {
        max-width: 720px;
    }
    @media (min-width: 992px) {
        max-width: 940px;
    }
`

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
`
