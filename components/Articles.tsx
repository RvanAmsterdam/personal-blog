import { ArticleProps } from "../types/ArticleProps";
import { CardArticle } from "./Cards/CardArticle";

type ArticlesProps = {
  articles: ArticleProps[];
}

export const Articles = ({articles}: ArticlesProps) => {

  return (
    <ol className="article-list">
      {articles.map((article: ArticleProps) => {
        return (
          <li key={article.slug}>
            <CardArticle {...article} />
          </li>
        );
      })}
    </ol>
  );
};
