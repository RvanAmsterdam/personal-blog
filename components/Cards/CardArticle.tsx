import { ArticleProps } from "../../types/ArticleProps";
import { ArticleMeta } from "../ArticleMeta";
import { ImageComponent } from "../ImageComponent";

export const CardArticle = ({ content, metadata }: ArticleProps) => {
    return (
        <a className="card-article link" href={"/blog/" + metadata.slug}>
            <ImageComponent src={metadata.banner} className="card__thumbnail " alt="Article thumbnail" />

            <section className="card__content">
                <h2 className="card__title">{metadata.title}</h2>
                <p className="card__description">{metadata.description}</p>

                <ArticleMeta metadata={metadata} content={content} />
            </section>
        </a>
    );
};
