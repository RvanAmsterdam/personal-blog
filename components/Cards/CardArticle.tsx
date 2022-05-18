import { ArticleProps } from "../../types/ArticleProps";
import { ImageComponent } from "../ImageComponent";

export const CardArticle = (props: ArticleProps) => {
  return (
    <a className="card card-article link" href={"/blog/" + props.slug}>

      <ImageComponent src={props.banner} className="card__thumbnail " alt="Article thumbnail" />

      <section className="card__content">
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </section>
    </a>
  );
};
