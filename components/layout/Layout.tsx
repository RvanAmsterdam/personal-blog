import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: React.FC = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
};
