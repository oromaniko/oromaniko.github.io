import { AuthAction, AuthActionTypes, AuthState } from '../types/auth'

const initialState: AuthState = {
    isAuth: false,
    user: '',
    errors: '',
    isLoading: false,
}

export default function authReducer(
    state = initialState,
    action: AuthAction
): AuthState {
    switch (action.type) {
        case AuthActionTypes.SET_AUTH:
            return { ...state, isAuth: action.payload }
        case AuthActionTypes.SET_ERROR:
            return { ...state, errors: action.payload }
        case AuthActionTypes.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        case AuthActionTypes.SET_USER:
            return { ...state, user: action.payload }
        default:
            return state
    }
}
