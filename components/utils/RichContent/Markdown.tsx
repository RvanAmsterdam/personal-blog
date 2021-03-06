import React, { ElementType, Fragment, ReactElement } from "react";
import MarkdownToJsx from "markdown-to-jsx";
import { RichArticlePreBlock } from "./components/RichArticlePreBlock";
import { RichArticleLink } from "./components/RichArticleLink";
import { RichArticleBlockquote } from "./components/RichArticleBlockquote";

type MarkdownProps = {
    value: string;
    openExternalLinksInNewTab?: boolean;
    wrapper?: ElementType;
    className?: string;
};

export const Markdown = (props: MarkdownProps) => {
    const markDownToJsxOptions = {
        forceBlock: true,
        wrapper: props.wrapper,
        forceWrapper: true,
        overrides: {
            pre: RichArticlePreBlock,
            blockquote: RichArticleBlockquote,
            a: {
                component: RichArticleLink,
                props: { openExternalLinksInNewTab: props.openExternalLinksInNewTab }
            },
        }
    };

    return (
            <MarkdownToJsx className="rich-article" options={markDownToJsxOptions}>
                {props.value}
            </MarkdownToJsx>
    );
};
