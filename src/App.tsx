import './mixins'
import Header from './components/Header'
import Footer from './components/Footer'
import AppRouter from './components/AppRouter'
import { useCookies } from 'react-cookie'
import { useLayoutEffect } from 'react'
import { useActions } from './hooks/useActions'
import { useTypedSelector } from './hooks/useTypedSelector'

function App() {
    const [cookies] = useCookies(['token'])
    const { authorize } = useActions()
    const { isLoading } = useTypedSelector((state) => state.auth)

    useLayoutEffect(() => {
        if (cookies.token) {
            authorize(cookies.token)
        }
    }, [])

    if (isLoading) {
        return null
    }

    return (
        <>
            <Header />
            <AppRouter />
            <Footer />
        </>
    )
}

export default App
