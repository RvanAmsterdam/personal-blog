import Image from "next/image";
import { ThemeSwitch } from "../theme/ThemeSwitch";
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
      <ThemeSwitch />
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

      <p>{props.shortDescription}</p>

      <a href={props.callToAction.linkTo}>{props.callToAction.linkText}</a>

      {props.socials.map((social) => (
        <a href={social.link} target="_blank" rel="noreferrer" key={social.platform}>
          <Icon name={social.icon as typeof IconNames[number]} />
        </a>
      ))}
    </div>
  );
};
