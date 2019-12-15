export interface ISignInState {
    login: string
    password: string
    rememberMe: boolean
    isAuth: boolean
    someStatus: string
}

export const signInInitialState: ISignInState = {
    login: '',
    password: '',
    rememberMe: false,
    isAuth: false,
    someStatus: ''
};
