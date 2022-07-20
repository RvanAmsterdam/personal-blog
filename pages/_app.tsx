import "../assets/styles/personal-blog.scss";
import type { AppProps } from "next/app";
import { ThemeContextProvider } from "../context/ThemeContext";
import { Layout } from "../components/layout/Layout";
import { Analytics } from "../components/utils/Analytics";

function MyApp({ Component, pageProps }: AppProps) {
    const isProd = process.env.NODE_ENV === "production";

    return (
        <>
            {isProd && <Analytics />}
            <ThemeContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeContextProvider>
        </>
    );
}

export default MyApp;
