type RichArticleLinkProps = {
    href?: string;
    openExternalLinksInNewTab?: boolean;
    children?: React.ReactNode;
};

export const RichArticleLink = (props: RichArticleLinkProps) => {
    return (
        <a // eslint-disable-line react/jsx-no-target-blank
            href={props.href}
            target={props.openExternalLinksInNewTab ? '_blank' : undefined}
            rel={props.openExternalLinksInNewTab ? 'noopener noreferrer' : ''}
        >
            {props.children}
        </a>
    );
};