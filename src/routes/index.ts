import React from 'react'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'

export interface IRoute {
    path: string
    element: React.ElementType
}

export enum RouteNames {
    LOGIN = '/login',
    REGISTER = '/register',
    HOME = '/',
}

export const routes: IRoute[] = [
    { path: RouteNames.LOGIN, element: Login },
    { path: RouteNames.REGISTER, element: Register },
    { path: RouteNames.HOME, element: Home },
]
