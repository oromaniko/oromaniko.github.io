import {
    ArticleAction,
    ArticleState,
    ArticleActionTypes,
} from '../types/article'
import { Article } from '../../models/article'

const initialState: ArticleState = {
    article: {} as Article,
    comments: [],
    isLoading: true,
    errors: '',
}

export default function articleReducer(
    state = initialState,
    action: ArticleAction
): ArticleState {
    switch (action.type) {
        case ArticleActionTypes.SET_ARTICLE:
            return {
                ...state,
                article: action.payload,
            }
        case ArticleActionTypes.SET_COMMENTS:
            return { ...state, comments: action.payload }
        case ArticleActionTypes.SET_ERROR:
            return { ...state, errors: action.payload }
        case ArticleActionTypes.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        default:
            return state
    }
}
