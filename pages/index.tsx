import type { NextPage } from "next";
import Head from "next/head";
import fs from "fs";
import { parseMarkdown } from "../components/parseMarkdown";
import { ArticleCardsList } from "../components/ArticleCardsList";
import { CardAbout } from "../components/cards/CardAbout";
import AboutInfo from "../assets/data/about.json";
import { useContext } from "react";
import { ThemeContext, ThemeContextProps } from "../context/ThemeContext";
import { Hero } from "../components/layout/Hero";

const Home: NextPage = ({ blogaArticlesSortedByDate }: any) => {
    const { theme } = useContext<ThemeContextProps>(ThemeContext);

    return (
        <div className={`home ${theme}`}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Hero />

                <div className="home__content container container--1600">
                    <CardAbout {...AboutInfo} />
                    <ArticleCardsList articles={blogaArticlesSortedByDate} />
                </div>
            </main>
        </div>
    );
};

export const getStaticProps = async () => {
    const files = fs.readdirSync("posts");
    const blogArticles = files.map((file) => parseMarkdown(file));
    const blogaArticlesSortedByDate = blogArticles.sort((a, b) => new Date(b.metadata.date).valueOf() - new Date(a.metadata.date).valueOf());

    return {
        props: { blogaArticlesSortedByDate },
    };
};

export default Home;
