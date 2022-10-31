import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, RouteNames, publicRoutes } from '../routes'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Article from '../pages/Article'

const AppRouter = () => {
    const { isAuth } = useTypedSelector((state) => state.auth)

    return (
        <Routes>
            {isAuth ? (
                <>
                    {privateRoutes.map(({ path, element: Element }) => {
                        return (
                            <Route
                                path={path}
                                element={<Element />}
                                key={path}
                            />
                        )
                    })}
                    <Route
                        path='*'
                        element={<Navigate replace to={RouteNames.HOME} />}
                    />
                </>
            ) : (
                <>
                    {publicRoutes.map(({ path, element: Element }) => {
                        return (
                            <Route
                                path={path}
                                element={<Element />}
                                key={path}
                            />
                        )
                    })}
                    <Route
                        path='*'
                        element={<Navigate replace to={RouteNames.HOME} />}
                    />
                    <Route path='/:slag' element={<Article />} />
                </>
            )}
        </Routes>
    )
}

export default AppRouter
