import {signInInitialState} from "./signInInitialState";
import {
    ISignInActions,
    SET_AUTH,
    SET_LOGIN,
    SET_PASSWORD,
    SET_REMEMBER_ME,
    SET_SOME_STATUS,
    setAuthSuccess,
    setLoginSuccess,
    setSomeStatusSuccess
} from "./signInActions";
import {SignInAPI} from "../sign-in-3-dal/SignInAPI";

export const signInReducer = (state = signInInitialState, action: ISignInActions) => {
    switch (action.type) {
        case SET_LOGIN: {
            return {
                ...state,
                login: action.login
            }
        }
        case SET_PASSWORD: {
            return {
                ...state,
                password: action.password
            }
        }
        case SET_AUTH: {
            return {
                ...state,
                isAuth: action.isAuth
            }
        }
        case SET_REMEMBER_ME: {
            return {
                ...state,
                rememberMe: action.rememberMe
            }
        }
        case SET_SOME_STATUS: {
            return {
                ...state,
                someStatus: action.someStatus
            }
        }
        default: {
            return state;
        }
    }
};

export const auth = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    dispatch(setSomeStatusSuccess('...Loading'));
    let response = await SignInAPI.signIn(email, password, rememberMe);
    if(response.data.token){
            dispatch(setLoginSuccess(email));
            dispatch(setAuthSuccess(true))
        }else {
            dispatch(setSomeStatusSuccess(response.data.error))
        }
};


