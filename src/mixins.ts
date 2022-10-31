import styled, { css } from 'styled-components'

export const centered = css`
    display: flex;
    align-items: center;
    justify-content: center;
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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    gap: 1rem;
`

export const FormInput = styled.input<{ isValid: boolean }>`
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
    line-height: 1.25;
    width: 100%;
    border-radius: 0.3rem;
    margin: 0;
    border: ${(props) =>
        props.isValid ? '1px solid rgba(0, 0, 0, 0.15)' : '2px solid brown'};
`

export const FormButton = styled.button`
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
    color: #fff;
    background-color: #5cb85c;
    border-color: #5cb85c;
    align-self: flex-end;
`
