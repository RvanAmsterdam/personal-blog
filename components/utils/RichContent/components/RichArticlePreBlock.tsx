import { RichArticleCodeBlock } from "./RichArticleCodeBlock";

type PreBlockProps = {
    children: JSX.Element | JSX.Element[];
};

export const PreBlock = ({ children, ...rest }: PreBlockProps) => {
    if ("type" in children && children["type"] === "code") {
        return RichArticleCodeBlock(children["props"]);
    }
    return <pre {...rest}>{children}</pre>;
};
