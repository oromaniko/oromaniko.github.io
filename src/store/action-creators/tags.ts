import { ActionCreator } from 'redux'
import { AppDispatch } from '../index'
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import { BASE_URL } from '../../constants'
import {
    SetTagsAction,
    SetIsLoadingAction,
    SetErrorAction,
    TagsAction,
    TagsActionTypes,
    TagsState,
} from '../types/tags'
import { Tag, Tags } from '../../models/tags'

const fetchTags: ActionCreator<
    ThunkAction<Promise<void>, TagsState, null, TagsAction>
> = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(TagsActionCreators.setIsLoading(true))
        const response = await axios.get<Tags>(BASE_URL + 'tags')
        dispatch(TagsActionCreators.setTags(response.data.tags))
        dispatch(TagsActionCreators.setIsLoading(false))
    } catch (e) {
        if (e instanceof Error) {
            dispatch(TagsActionCreators.setError(e.message))
        }
    }
}

export const TagsActionCreators = {
    setTags: (data: Tag[]): SetTagsAction => ({
        type: TagsActionTypes.SET_TAGS,
        payload: data,
    }),
    setError: (err: string): SetErrorAction => ({
        type: TagsActionTypes.SET_ERROR,
        payload: err,
    }),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
        type: TagsActionTypes.SET_IS_LOADING,
        payload: isLoading,
    }),
    fetchTags,
}
