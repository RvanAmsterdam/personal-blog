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
    <div>
      <Image src={props.image} alt="Profile picture" layout="fill" />
      <h2>{props.name}</h2>

      {props.tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}

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
