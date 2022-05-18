import Image from "next/image";
import { Icon, IconNames } from "../utils/icon/Icon";

type SocialsProps = {
  platform: string;
  icon: typeof IconNames[number] | string;
  username: string;
  link: string;
};

type AboutProps = {
  image: string;
  name: string;
  shortDescription: string;
  callToAction: {
    linkText: string;
    linkTo: string;
  };
  tags: string[];
  socials: SocialsProps[];
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

      <p className="card__description">{props.shortDescription}</p>

      <a className="card__cta btn btn-primary" href={props.callToAction.linkTo}>
        <Icon name={"mail"} />
        {props.callToAction.linkText}
      </a>

      <ul className="card__socials">
        {props.socials.map((social) => (
          <li className="card__socials-item" key={social.platform}>
            <a href={social.link} target="_blank" rel="noreferrer">
              <Icon name={social.icon as typeof IconNames[number]} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
