import React from 'react';
import Neko from "./Neko";
import {connect} from "react-redux";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";

interface IMapStateToProps {
    login: string
}

const NekoContainer: React.FC<IMapStateToProps> = (props) => {

    return (
        <Neko {...props}/>
    );
};

let mapStateToProps = (state: IAppStore): IMapStateToProps  => ({
    login: state.signIn.login
});

export default connect(mapStateToProps)(NekoContainer);
