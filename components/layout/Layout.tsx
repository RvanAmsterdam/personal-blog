import React from "react";
import { Header } from "./Header";

export const Layout: React.FC = (props) => {
    return (
        <>
            <Header />
            {props.children}
        </>
    );
};
