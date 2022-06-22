import React, { useEffect } from "react";
import fs from "fs";
import Head from "next/head";
import { parseMarkdown } from "../../components/parseMarkdown";
import Image from "next/image";
import { ArticleMeta } from "../../components/ArticleMeta";
import { Markdown } from "../../components/utils/RichContent/Markdown";

const ArticlePage = ({ metadata, content }: any) => {
    return (
        <div className="article-page">
            <Head>
                <title>{metadata.title}</title>
            </Head>

            <main>
                <section className="article-page__banner">
                    <Image src={metadata.banner} alt={metadata.banner_alt ? metadata.banner_alt : "Article banner"} layout="fill" />

                    {metadata.banner_caption && (
                        <figcaption className="article-page__banner-caption">
                            {metadata.banner_caption_link ? (
                                <a href={metadata.banner_caption_link} target="_blank" rel="noreferrer">
                                    {metadata.banner_caption}
                                </a>
                            ) : (
                                metadata.banner_caption
                            )}
                        </figcaption>
                    )}
                </section>

                <section className="container container--700">
                    <h1 className="article-page__title">{metadata.title}</h1>
                    <ArticleMeta metadata={metadata} content={content} />
                    <Markdown className="rich-article" wrapper="article" openExternalLinksInNewTab value={content} />
                </section>
            </main>
        </div>
    );
};

export const getStaticPaths = async () => {
    const files = fs.readdirSync("posts");
    const filesWithoutExtension = files.map((file) => file.replace(".md", ""));

    return {
        paths: filesWithoutExtension.map((filename) => ({
            params: {
                articleSlug: filename,
            },
        })),
        fallback: false,
    };
};

export const getStaticProps = async ({ params: { articleSlug } }: any) => {
    const currentArticle = parseMarkdown(articleSlug + ".md");

    return {
        props: {
            metadata: currentArticle.metadata,
            content: currentArticle.content,
        },
    };
};

export default ArticlePage;
