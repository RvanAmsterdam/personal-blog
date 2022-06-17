import Image from "next/image";
import { Socials } from "../Socials";
import { Icon } from "../utils/icon/Icon";

type AboutProps = {
  image: string;
  name: string;
  shortDescription: string;
  callToAction: {
    linkText: string;
    linkTo: string;
  };
  tags: string[];
};

export const CardAbout = (props: AboutProps) => {
  return (
    <div className="card card-about">
      <div className="card__img image-container">
        <Image src={props.image} alt="Profile picture" layout="fill" />
      </div>
      <h2 className="card__name">{props.name}</h2>

      <ul className="card__tag-list">
        {props.tags.map((tag) => (
          <li className="card__tag" key={tag}>
            {tag}
          </li>
        ))}
      </ul>

      {/* <p className="card__description">{props.shortDescription}</p> */}

      <a className="card__cta btn btn-primary" href={props.callToAction.linkTo}>
        <Icon name={"mail"} />
        {props.callToAction.linkText}
      </a>

      <Socials />
    </div>
  );
};
