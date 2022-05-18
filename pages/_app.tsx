import "../assets/styles/personal-blog.scss";
import type { AppProps } from "next/app";
import { ThemeContextProvider } from "../context/ThemeContext";
import { Layout } from "../components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeContextProvider>
    );
}

export default MyApp;
