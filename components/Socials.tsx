import { Icon, IconNames } from "./utils/icon/Icon";

const socialPlatforms = [
    {
        name: "Twitter",
        icon: "twitter",
        link: "https://twitter.com/rowinva",
    },
    {
        name: "GitHub",
        icon: "github",
        link: "https://github.com/rowinva",
    },
];

export const Socials = () => {
    return (
        <ul className="socials">
            {socialPlatforms.map((social) => (
                <li key={social.name}>
                    <a href={social.link} target="_blank" rel="noreferrer">
                        <Icon name={social.icon as typeof IconNames[number]} />
                    </a>
                </li>
            ))}
        </ul>
    );
};
