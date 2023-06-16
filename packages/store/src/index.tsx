import React from "react";
import {Provider} from "react-redux";
import store from "./store";

interface AppProdiverProps{
    children:React.ReactNode|React.ReactNode[];
}

const AppProdiver:React.FC<AppProdiverProps> = ({children}) => {
    return (
        <Provider store={store}>{children}</Provider>
    )
}

export default AppProdiver;