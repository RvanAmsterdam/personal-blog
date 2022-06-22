import React, { ElementType, ReactElement } from "react";
import MarkdownToJsx from "markdown-to-jsx";
import { RichArticlePreBlock } from "./components/RichArticlePreBlock";
import { RichArticleLink } from "./components/RichArticleLink";

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
