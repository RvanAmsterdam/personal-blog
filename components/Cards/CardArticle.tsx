import { ArticleProps } from "../../types/ArticleProps";
import Image from "next/image";

export const CardArticle = (props: ArticleProps) => {
  return (
    <a className="card-article" href={"/blog/" + props.slug}>
      <div className="card-article__thumbnail">
        <Image src={props.banner} alt="Thumbnail" layout="fill" />
      </div>
      <div>
        <h2>{props.slug}</h2>
        <time>{props.date}</time>
        <p>{props.description}</p>
      </div>
    </a>
  );
};
