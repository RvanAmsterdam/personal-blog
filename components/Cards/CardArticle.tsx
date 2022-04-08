import { ArticleProps } from "../../types/ArticleProps";
import Image from "next/image";

export const CardArticle = (props: ArticleProps) => {

  return (
    <a className="card card-article link" href={"/blog/" + props.slug}>
      <div className="card__thumbnail image-container">
        <Image src={props.banner} alt="Thumbnail" layout="fill" />
      </div>
      <div>
        <h2>{props.title}</h2>
        <time>{props.date}</time>
        <p>{props.description}</p>
      </div>
    </a>
  );
};
