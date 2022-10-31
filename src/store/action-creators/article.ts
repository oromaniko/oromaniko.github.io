import {
    ArticleAction,
    ArticleActionTypes,
    ArticleState,
    SetArticleAction,
    SetCommentsAction,
    SetErrorAction,
    SetIsLoadingAction,
} from '../types/article'
import { Article } from '../../models/article'
import { Comment } from '../../models/comment'
import { ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AppDispatch } from '../index'
import axios from 'axios'
import { BASE_URL } from '../../constants'

const fetchArticle: ActionCreator<
    ThunkAction<Promise<void>, ArticleState, null, ArticleAction>
> = (slug: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(ArticleActionCreators.setIsLoading(true))
        const article = await axios.get<{ article: Article }>(
            BASE_URL + 'articles/' + slug
        )
        const comments = await axios.get<{ comments: Comment[] }>(
            BASE_URL + 'articles/' + slug + '/comments'
        )
        dispatch(ArticleActionCreators.setArticle(article.data.article))
        dispatch(ArticleActionCreators.setComments(comments.data.comments))
        dispatch(ArticleActionCreators.setIsLoading(false))
    } catch (e) {
        if (e instanceof Error) {
            dispatch(ArticleActionCreators.setError(e.message))
        }
    }
}

export const ArticleActionCreators = {
    setArticle: (data: Article): SetArticleAction => ({
        type: ArticleActionTypes.SET_ARTICLE,
        payload: data,
    }),
    setComments: (comments: Comment[]): SetCommentsAction => ({
        type: ArticleActionTypes.SET_COMMENTS,
        payload: comments,
    }),
    setError: (err: string): SetErrorAction => ({
        type: ArticleActionTypes.SET_ERROR,
        payload: err,
    }),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
        type: ArticleActionTypes.SET_IS_LOADING,
        payload: isLoading,
    }),
    fetchArticle,
}
