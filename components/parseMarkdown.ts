import fs from "fs";
import matter from "gray-matter";


export const parseMarkdown = (article: any) => {
    const content = fs.readFileSync("posts/" + article).toString();
    const parsedMarkdown = matter(content);

    return {
      metadata: parsedMarkdown.data,
      content: parsedMarkdown.content
    }
}