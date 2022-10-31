import {
    ArticlesAction,
    ArticlesActionTypes,
    ArticlesData,
    ArticlesState,
    Params,
    SetArticlesAction,
    SetErrorAction,
    SetIsLoadingAction,
    SetOffsetAction,
} from '../types/articles'
import { ActionCreator } from 'redux'
import { AppDispatch } from '../index'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import { BASE_URL } from '../../constants'
import { Tag } from '../../models/tags'

const fetchArticles: ActionCreator<
    ThunkAction<Promise<void>, ArticlesState, null, ArticlesAction>
> = (offset: number, tag: Tag) => async (dispatch: AppDispatch) => {
    const params: Params = {
        limit: 10,
        offset,
    }
    if (tag) {
        params.tag = tag
    }
    try {
        dispatch(ArticlesActionCreators.setIsLoading(true))
        const response = await axios.get<ArticlesData>(BASE_URL + 'articles', {
            params,
        })
        dispatch(ArticlesActionCreators.setArticles(response.data))
        dispatch(ArticlesActionCreators.setIsLoading(false))
    } catch (e) {
        if (e instanceof Error) {
            dispatch(ArticlesActionCreators.setError(e.message))
        }
    }
}

export const ArticlesActionCreators = {
    setArticles: (data: ArticlesData): SetArticlesAction => ({
        type: ArticlesActionTypes.SET_ARTICLES,
        payload: data,
    }),
    setOffset: (offset: number): SetOffsetAction => ({
        type: ArticlesActionTypes.SET_OFFSET,
        payload: offset,
    }),
    setError: (err: string): SetErrorAction => ({
        type: ArticlesActionTypes.SET_ERROR,
        payload: err,
    }),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
        type: ArticlesActionTypes.SET_IS_LOADING,
        payload: isLoading,
    }),
    fetchArticles,
}
