export const SET_LOGIN='SET_LOGIN';
export const SET_PASSWORD='SET_PASSWORD';
export const SET_AUTH='SET_AUTH';
export const SET_REMEMBER_ME='SET_REMEMBER_ME';
export const SET_SOME_STATUS='SET_SOME_STATUS';


interface IChangeLogin {
    type: typeof SET_LOGIN
    login: string
}
interface IChangePassword {
    type: typeof SET_PASSWORD
    password: string
}
interface IChangeAuth {
    type: typeof SET_AUTH
    isAuth: boolean
}
interface IChangeRememberMe {
    type: typeof SET_REMEMBER_ME
    rememberMe: boolean

}interface IChangeSomeStatus {
    type: typeof SET_SOME_STATUS
    someStatus: string
}

export const setLoginSuccess = (login: string): IChangeLogin => ({type: SET_LOGIN, login});
export const setPasswordSuccess = (password: string): IChangePassword => ({type: SET_PASSWORD, password});
export const setAuthSuccess = (isAuth: boolean): IChangeAuth => ({type: SET_AUTH, isAuth});
export const setRememberMeSuccess = (rememberMe: boolean): IChangeRememberMe => ({type: SET_REMEMBER_ME, rememberMe});
export const setSomeStatusSuccess = (someStatus: string): IChangeSomeStatus => ({type: SET_SOME_STATUS, someStatus});

export type ISignInActions = IChangeLogin | IChangePassword | IChangeAuth | IChangeRememberMe | IChangeSomeStatus;


