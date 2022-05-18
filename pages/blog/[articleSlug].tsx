import React from "react";
import fs from "fs";
import Head from "next/head";
import Markdown from "markdown-to-jsx";
import { parseMarkdown } from "../../components/parseMarkdown";
import Image from "next/image";
import { ArticleMeta } from "../../components/ArticleMeta";

const Post = ({ metadata, content }: any) => {
  return (
    <div className="article">
      <Head>
        <title>{metadata.title}</title>
      </Head>

      <main>
        <section className="article__banner">
          <Image src={metadata.banner} alt="Thumbnail" layout="fill" />
        </section>

        <section className="article__content container container--700">
          <h1 className="metadata__title">{metadata.title}</h1>
          <ArticleMeta metadata={metadata} content={content} />
          <Markdown className="markdown-article" options={{ wrapper: 'article' }}>{content}</Markdown>
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

export default Post;
