import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RouteNames, routes } from '../routes'

const AppRouter = () => {
    return (
        <Routes>
            <>
                {routes.map(({ path, element: Element }) => {
                    return (
                        <Route path={path} element={<Element />} key={path} />
                    )
                })}
                <Route
                    path='*'
                    element={<Navigate replace to={RouteNames.HOME} />}
                />
            </>
        </Routes>
    )
}

export default AppRouter
