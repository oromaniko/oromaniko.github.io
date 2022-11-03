import './mixins'
import Header from './components/Header'
import Footer from './components/Footer'
import AppRouter from './components/AppRouter'
import { useCookies } from 'react-cookie'
import { useEffect } from 'react'
import { useActions } from './hooks/useActions'
import { useTypedSelector } from './hooks/useTypedSelector'

function App() {
    const [cookies] = useCookies(['token'])
    const { authorize, setIsLoading } = useActions()
    const { isLoading } = useTypedSelector((state) => state.auth)

    useEffect(() => {
        if (cookies.token) {
            authorize(cookies.token)
        } else {
            setIsLoading(false)
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
