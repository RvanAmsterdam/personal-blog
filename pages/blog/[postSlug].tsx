import React from "react";
import fs from "fs";
import Head from "next/head";
import Markdown from "markdown-to-jsx";
import { parseMarkdown } from "../../components/parseMarkdown";
import Image from "next/image";
import { Icon } from "../../components/utils/icon/Icon";

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

        <section className="content container container--700">
          <div className="content__metadata">
            <Icon name={"clock"} />
            <time>{metadata.date}</time>
          </div>

          <h1 className="content__title">{metadata.title}</h1>

          <div className="author"></div>
          <Markdown>{content}</Markdown>
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
        postSlug: filename,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { postSlug } }: any) => {
  const currentArticle = parseMarkdown(postSlug + ".md");

  return {
    props: {
      metadata: currentArticle.metadata,
      content: currentArticle.content,
    },
  };
};

export default Post;
