import { useTypedSelector } from '../hooks/useTypedSelector'
import { makeArray } from '../helpers'
import { useActions } from '../hooks/useActions'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ListPagination = () => {
    const { articlesCount, offset, isLoading } = useTypedSelector(
        (state) => state.articles
    )
    const { setOffset } = useActions()

    if (isLoading) {
        return null
    }

    if (articlesCount <= 10) {
        return null
    }

    const handleClick = (pageNumber: number) => {
        setOffset(pageNumber * 10)
    }

    const arr = makeArray(articlesCount, 10)

    return (
        <nav>
            <PageList>
                {arr.map((item, index) => (
                    <li key={item}>
                        <PageLink
                            to={'#'}
                            isActive={offset / 10 === index}
                            onClick={() => handleClick(index)}
                        >
                            {item}
                        </PageLink>
                    </li>
                ))}
            </PageList>
        </nav>
    )
}

export default ListPagination

const PageList = styled.ul`
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
    display: flex;
    flex-wrap: wrap;

    li {
        display: inline-flex;

        :first-child a {
            border-bottom-left-radius: 0.25rem;
            border-top-left-radius: 0.25rem;
        }

        :last-child a {
            border-bottom-right-radius: 0.25rem;
            border-top-right-radius: 0.25rem;
        }
    }
`

const PageLink = styled(Link)<{ isActive: boolean }>`
    padding: 0.5rem 0.75rem;
    color: ${(props) => (props.isActive ? '#fff' : '#5cb85c')};
    background-color: ${(props) => (props.isActive ? '#5cb85c' : '#fff')};
    border: 1px solid ${(props) => (props.isActive ? '#5cb85c' : '#ddd')};
    margin-right: -1px;
    margin-top: -1px;
    z-index: ${(props) => (props.isActive ? '2' : '1')};

    :hover {
        color: ${(props) => (props.isActive ? '#fff' : '#3d8b3d')};
        background-color: ${(props) =>
            props.isActive ? '#5cb85c' : '#eceeef'};
        text-decoration: underline;
    }
`
