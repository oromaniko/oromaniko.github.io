import {
    ArticlesAction,
    ArticlesActionTypes,
    ArticlesState,
} from '../types/articles'

const initialState: ArticlesState = {
    articles: [],
    articlesCount: 0,
    offset: 0,
    isLoading: false,
    errors: '',
}

export default function articlesReducer(
    state = initialState,
    action: ArticlesAction
): ArticlesState {
    switch (action.type) {
        case ArticlesActionTypes.SET_ARTICLES:
            return {
                ...state,
                articles: action.payload.articles,
                articlesCount: action.payload.articlesCount,
            }
        case ArticlesActionTypes.SET_OFFSET:
            return { ...state, offset: action.payload }
        case ArticlesActionTypes.SET_ERROR:
            return { ...state, errors: action.payload }
        case ArticlesActionTypes.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        default:
            return state
    }
}
