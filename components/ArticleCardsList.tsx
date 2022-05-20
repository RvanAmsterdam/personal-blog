import { ArticleProps } from "../types/ArticleProps";
import { CardArticle } from "./cards/CardArticle";

type ArticleCardsListProps = {
    articles: ArticleProps[];
};

export const ArticleCardsList = ({articles}: ArticleCardsListProps) => {

    return (
        <ol className="article-cards-list">

            {articles.map((article: ArticleProps) => {
                return (
                    <li key={article.metadata.slug}>
                        <CardArticle {...article}  />
                    </li>
                );
            })}

        </ol>
    );
};
