import { Article } from '../../models/article'
import { Comment } from '../../models/comment'

export interface ArticleState {
    article: Article
    comments: Comment[]
    isLoading: boolean
    errors: string
}

export enum ArticleActionTypes {
    SET_ARTICLE = 'SET_ARTICLE',
    SET_COMMENTS = 'SET_COMMENTS',
    SET_IS_LOADING = 'SET_IS_ARTICLE_LOADING',
    SET_ERROR = 'SET_ARTICLE_ERROR',
}

export interface SetArticleAction {
    type: ArticleActionTypes.SET_ARTICLE
    payload: Article
}

export interface SetIsLoadingAction {
    type: ArticleActionTypes.SET_IS_LOADING
    payload: boolean
}

export interface SetCommentsAction {
    type: ArticleActionTypes.SET_COMMENTS
    payload: Comment[]
}

export interface SetErrorAction {
    type: ArticleActionTypes.SET_ERROR
    payload: string
}

export type ArticleAction =
    | SetArticleAction
    | SetIsLoadingAction
    | SetCommentsAction
    | SetErrorAction
