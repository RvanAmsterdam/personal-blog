import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Markdown from 'markdown-to-jsx';

const Post = ({ data, content }: any) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
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
  const markdownWithMetadata = fs.readFileSync(path.join("posts", postSlug + ".md")).toString();
  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      content: parsedMarkdown.content,
      data: parsedMarkdown.data
    },
  };
};

export default Post;
