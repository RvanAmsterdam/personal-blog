import React from "react";
import MarkdownToJsx from "markdown-to-jsx";
import { PreBlock } from "./components/RichArticlePreBlock";

type MarkdownProps = {
    value: string;
    wrapper?: typeof React.Fragment;
    className?: string;
};

export const Markdown = (props: MarkdownProps) => {
    const markDownToJsxOptions = {
        forceBlock: true,
        wrapper: props.wrapper,
        forceWrapper: true,
        overrides: {
            pre: PreBlock
        }
    };

    return (
        <div className="markdown">
            <MarkdownToJsx className="rich-article" options={markDownToJsxOptions}>
                {props.value}
            </MarkdownToJsx>
        </div>
    );
};
