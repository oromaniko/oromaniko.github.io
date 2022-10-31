import { Article } from '../../models/article'

export interface ArticlesData {
    articles: Article[]
    articlesCount: number
}

export interface ArticlesState {
    articles: Article[]
    articlesCount: number
    offset: number
    isLoading: boolean
    errors: string
}

export enum ArticlesActionTypes {
    SET_ARTICLES = 'SET_ARTICLES',
    SET_OFFSET = 'SET_OFFSET',
    SET_IS_LOADING = 'SET_IS_ARTICLES_LOADING',
    SET_ERROR = 'SET_ARTICLES_ERROR',
}

export interface SetArticlesAction {
    type: ArticlesActionTypes.SET_ARTICLES
    payload: ArticlesData
}

export interface SetIsLoadingAction {
    type: ArticlesActionTypes.SET_IS_LOADING
    payload: boolean
}

export interface SetOffsetAction {
    type: ArticlesActionTypes.SET_OFFSET
    payload: number
}

export interface SetErrorAction {
    type: ArticlesActionTypes.SET_ERROR
    payload: string
}

export type ArticlesAction =
    | SetArticlesAction
    | SetIsLoadingAction
    | SetOffsetAction
    | SetErrorAction

export type Params = { limit: number; offset: number; tag?: string }
