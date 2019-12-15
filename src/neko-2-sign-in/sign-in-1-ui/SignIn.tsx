import React from 'react';
import s from './SignIn.module.css'
import {FORGOT_PATH, NEKO_PATH, REGISTER_PATH} from "../../neko-1-main/main-1-ui/Routes";
import {NavLink} from "react-router-dom";
import {Redirect} from "react-router-dom";

interface SignInProps {
    login: string
    password: string
    rememberMe: boolean
    isAuth: boolean
    someStatus: string
    setLoginSuccess: (login: string) => void
    setPasswordSuccess: (password: string) => void
    auth: (login: string, password: string, rememberMe: boolean) => void
    setRememberMeSuccess: (rememberMe: boolean) => void
}

const SignIn: React.FC<SignInProps> = ({
                                           login, password, rememberMe,
                                           setLoginSuccess, setPasswordSuccess, auth,
                                           isAuth, setRememberMeSuccess, someStatus
                                       }) => {
    let onLogin = () => {
        auth(login, password, rememberMe)
    };
    let onChangeStatus = (e: React.FormEvent<HTMLInputElement>) => {
        setRememberMeSuccess(e.currentTarget.checked)
    };
    if (isAuth) {
        return <Redirect to={NEKO_PATH}/>
    }
    // @ts-ignore
    return (
        <div className={s.content}>
            <h3>Sign-in</h3>
            <span>{someStatus}</span>
            <input placeholder='login' value={login} onChange={e => setLoginSuccess(e.currentTarget.value)}/>
            <input placeholder='password' type={'password'} value={password} onChange={e => setPasswordSuccess(e.currentTarget.value)}/>
            <NavLink to={FORGOT_PATH}>Forgot password?</NavLink>
            <button onClick={() => {
                onLogin()
            }}>Sign in
            </button>
            <div>
                <input type='checkbox' checked={rememberMe} onChange={onChangeStatus}/>
                <span>Remember me</span>
            </div>
            <NavLink to={REGISTER_PATH}>Registration</NavLink>
        </div>
    );
};

export default SignIn;
