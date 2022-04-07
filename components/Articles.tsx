import { ArticleProps } from "../types/ArticleProps";
import { CardArticle } from "./cards/CardArticle";

type ArticlesProps = {
  articles: ArticleProps[];
}

export const Articles = ({articles}: ArticlesProps) => {

  return (
    <ol className="article-list">
      {articles.map((article: ArticleProps) => {
        return (
          <li className="article-list__item" key={article.slug}>
            <CardArticle {...article} />
          </li>
        );
      })}
    </ol>
  );
};
