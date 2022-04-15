import { ArticleProps } from "../../types/ArticleProps";
import Image from "next/image";
import { Icon } from "../utils/icon/Icon";

export const CardArticle = (props: ArticleProps) => {
  return (
    <a className="card card-article link" href={"/blog/" + props.slug}>
      <div className="card__thumbnail image-container">
        <Image src={props.banner} alt="Thumbnail" layout="fill" />
      </div>
      <div>
        <h2 className="card__title">{props.title}</h2>
        <div className="card__metadata">
          <Icon name={"clock"} />
          <time>{props.date}</time>
        </div>
        <p className="card__description">{props.description}</p>
      </div>
    </a>
  );
};
