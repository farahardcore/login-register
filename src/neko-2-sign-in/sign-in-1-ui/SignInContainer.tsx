import React from 'react';
import SignIn from "./SignIn";
import {connect} from 'react-redux'
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {setLoginSuccess, setPasswordSuccess, setRememberMeSuccess} from "../sign-in-2-bll/signInActions";
import {auth} from "../sign-in-2-bll/signInReducer";

interface IMapStateToProps {
    login: string
    password: string
    rememberMe: boolean
    isAuth: boolean
    someStatus: string
}

interface IFunc {
    setLoginSuccess: (login: string) => void
    setPasswordSuccess: (password: string) => void
    auth: (login: string, password: string, rememberMe: boolean) => void
    setRememberMeSuccess: (rememberMe: boolean) => void
}

const SignInContainer: React.FC<IMapStateToProps & IFunc> = (props) => {
    return (
        <SignIn {...props}/>
    );
};

let mapStateToProps = (state: IAppStore): IMapStateToProps => ({
    login: state.signIn.login,
    password: state.signIn.password,
    rememberMe: state.signIn.rememberMe,
    isAuth: state.signIn.isAuth,
    someStatus: state.signIn.someStatus
});


export default connect(mapStateToProps, {setLoginSuccess, setPasswordSuccess, auth, setRememberMeSuccess})(SignInContainer);
