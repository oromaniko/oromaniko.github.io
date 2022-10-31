import React from 'react'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Article from '../pages/Article'
import Logout from '../pages/Logout'

export interface IRoute {
    path: RouteNames
    element: React.ElementType
}

export enum RouteNames {
    LOGIN = '/login',
    LOGOUT = '/logout',
    REGISTER = '/register',
    HOME = '/',
    ARTICLE_SLUG = '/art/:slug',
}

export const publicRoutes: IRoute[] = [
    { path: RouteNames.HOME, element: Home },
    { path: RouteNames.LOGIN, element: Login },
    { path: RouteNames.REGISTER, element: Register },
    { path: RouteNames.ARTICLE_SLUG, element: Article },
]

export const privateRoutes: IRoute[] = [
    { path: RouteNames.HOME, element: Home },
    { path: RouteNames.ARTICLE_SLUG, element: Article },
    { path: RouteNames.LOGOUT, element: Logout },
]
