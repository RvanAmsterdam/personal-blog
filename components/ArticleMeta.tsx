import { ArticleProps } from "../types/ArticleProps";
import { estimateReadingTime } from "./estimateReadingTime";
import { formatDate } from "./formatDate";
import { ImageComponent } from "./ImageComponent";

export const ArticleMeta = (props: ArticleProps) => {
    const formattedDate = formatDate(props.metadata.date);
    const estimatedReadingTime = estimateReadingTime(props.content);

    return (
        <section className="article-meta">

            <ImageComponent className="article-meta__author-picture" src={props.metadata.pfp} alt="Profile picture" />

            <div className="article-meta__info">
                <address className="article-meta__author-name">{props.metadata.author}</address>
                <time>{formattedDate} • {estimatedReadingTime} min read</time>
            </div>
        </section>
    );
};
