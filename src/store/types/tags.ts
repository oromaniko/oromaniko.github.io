import { Tag } from '../../models/tags'

export interface TagsState {
    tags: Tag[]
    isLoading: boolean
    errors: string
}

export enum TagsActionTypes {
    SET_TAGS = 'SET_TAGS',
    SET_IS_LOADING = 'SET_IS_TAGS_LOADING',
    SET_ERROR = 'SET_TAGS_ERROR',
}

export interface SetTagsAction {
    type: TagsActionTypes.SET_TAGS
    payload: Tag[]
}

export interface SetIsLoadingAction {
    type: TagsActionTypes.SET_IS_LOADING
    payload: boolean
}

export interface SetErrorAction {
    type: TagsActionTypes.SET_ERROR
    payload: string
}

export type TagsAction = SetTagsAction | SetIsLoadingAction | SetErrorAction
