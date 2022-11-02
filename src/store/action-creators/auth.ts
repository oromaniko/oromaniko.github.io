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
> =
    (email: string, password: string, setCookie) =>
    async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setErrors(''))
            const response = await axios.post<{ user: User }>(
                BASE_URL + 'users/login',
                { user: { email, password } }
            )
            const expires = new Date()
            expires.setTime(expires.getTime() + 604800000)
            setCookie('token', response.data.user.token, { path: '/', expires })
            dispatch(AuthActionCreators.setUser(response.data.user))
            dispatch(AuthActionCreators.setIsAuth(true))
            dispatch(AuthActionCreators.setIsLoading(false))
        } catch (e: any) {
            dispatch(
                AuthActionCreators.setErrors(
                    e.response.data.errors['email or password'][0]
                )
            )
        }
    }

const authorize: ActionCreator<
    ThunkAction<Promise<void>, AuthState, null, AuthAction>
> = (token: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(AuthActionCreators.setErrors(''))
        const response = await axios.get<{ user: User }>(BASE_URL + 'user', {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
        dispatch(AuthActionCreators.setUser(response.data.user))
        dispatch(AuthActionCreators.setIsAuth(true))
        dispatch(AuthActionCreators.setIsLoading(false))
    } catch (e: any) {
        dispatch(AuthActionCreators.setErrors(e.response.data.errors))
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
    authorize: authorize,
}
