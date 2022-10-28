import { TagsAction, TagsActionTypes, TagsState } from '../types/tags'

const initialState: TagsState = {
    tags: [],
    isLoading: false,
    errors: '',
}

export default function tagsReducer(
    state = initialState,
    action: TagsAction
): TagsState {
    switch (action.type) {
        case TagsActionTypes.SET_TAGS:
            return {
                ...state,
                tags: action.payload,
            }
        case TagsActionTypes.SET_ERROR:
            return { ...state, errors: action.payload }
        case TagsActionTypes.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        default:
            return state
    }
}
