import React from "react";
import fs from "fs";
import Head from "next/head";
import Markdown from 'markdown-to-jsx';
import { parseMarkdown } from "../../components/parseMarkdown";

const Post = ({ metadata, content }: any) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <Markdown>
        {content}
      </Markdown>
    </>
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
      content: currentArticle.content
    },
  };
};

export default Post;
