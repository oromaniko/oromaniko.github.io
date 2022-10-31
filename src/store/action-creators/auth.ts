import {
    AuthAction,
    AuthActionTypes,
    AuthState,
    SetErrorAction,
    SetIsAuthAction,
    SetIsLoadingAction,
    SetUserAction,
} from '../types/auth'
import { User } from '../../models/user'
import { AppDispatch } from '../index'
import axios from 'axios'
import { ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { BASE_URL } from '../../constants'

const login: ActionCreator<
    ThunkAction<Promise<void>, AuthState, null, AuthAction>
> = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(AuthActionCreators.setIsLoading(true))
        dispatch(AuthActionCreators.setErrors(''))
        const response = await axios.post<{ user: User }>(
            BASE_URL + 'users/login',
            { user: { email, password } }
        )
        dispatch(AuthActionCreators.setUser(response.data.user))
        dispatch(AuthActionCreators.setIsAuth(true))
        dispatch(AuthActionCreators.setIsLoading(false))
    } catch (e: any) {
        console.log(e)
        dispatch(
            AuthActionCreators.setErrors(
                e.response.data.errors['email or password'][0]
            )
        )
    }
}

const logout: ActionCreator<
    ThunkAction<Promise<void>, AuthState, null, AuthAction>
> = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(AuthActionCreators.setIsAuth(false))
        dispatch(AuthActionCreators.setUser({} as User))
    } catch (e: any) {
        console.error(e)
    }
}

export const AuthActionCreators = {
    setUser: (user: User): SetUserAction => ({
        type: AuthActionTypes.SET_USER,
        payload: user,
    }),
    setIsAuth: (auth: boolean): SetIsAuthAction => ({
        type: AuthActionTypes.SET_AUTH,
        payload: auth,
    }),
    setErrors: (error: string): SetErrorAction => ({
        type: AuthActionTypes.SET_ERROR,
        payload: error,
    }),
    setIsLoading: (loading: boolean): SetIsLoadingAction => ({
        type: AuthActionTypes.SET_IS_LOADING,
        payload: loading,
    }),
    login: login,
    logout: logout,
}
