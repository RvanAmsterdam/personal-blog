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
    {
        name: "Instagram",
        icon: "instagram",
        link: "https://instagram.com/rowinva",
    },
    {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://linkedin.com/in/rowinvanamsterdam",
    },
];

export const Socials = () => {
    return (
        <ul className="socials">
            {socialPlatforms.map((social) => (
                <li key={social.name}>
                    <a className="socials__item" href={social.link} target="_blank" rel="noreferrer">
                        <Icon name={social.icon as typeof IconNames[number]} />
                    </a>
                </li>
            ))}
        </ul>
    );
};
