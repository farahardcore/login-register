import React from 'react';
import s from './SignIn.module.css'
import {FORGOT_PATH, REGISTER_PATH} from "../../neko-1-main/main-1-ui/Routes";
import {NavLink} from "react-router-dom";

interface SignInProps {

}

const SignIn: React.FC<SignInProps> = ({}) => {

    return (
        <div className={s.content}>
            <input placeholder='login'/>
            <input placeholder='password'/>
            <NavLink to={FORGOT_PATH}>Forgot password?</NavLink>
            <button>Sign in</button>
            <input type='checkbox'/> Remember me
            <NavLink to={REGISTER_PATH}>Registartion</NavLink>
        </div>
    );
};

export default SignIn;
