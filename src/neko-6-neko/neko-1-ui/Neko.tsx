import React from 'react';
import s from './Neko.module.css'
import {NEKO_PATH, SIGN_IN_PATH} from "../../neko-1-main/main-1-ui/Routes";
import {Redirect} from "react-router-dom";

interface NekoProps {
    login: string
}

const Neko: React.FC<NekoProps> = ({login}) => {
    let onLogOut = () => {
        localStorage.removeItem('tokenData');
    };
    return (
        <div className = {s.neko}>
            <span>neko</span>
            {login}
            <button onClick={onLogOut}>LogOut</button>
        </div>
    );
};

export default Neko;
