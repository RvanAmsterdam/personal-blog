import { Icon } from "../../../utils/icon/Icon";

type RichArticleBlockquoteProps = {
    children?: React.ReactNode;
};

export const RichArticleBlockquote = (props: RichArticleBlockquoteProps) => {
    return (
        <blockquote>
            <Icon name={"bell"} />
            <p>{props.children}</p>
        </blockquote>
    );
};
