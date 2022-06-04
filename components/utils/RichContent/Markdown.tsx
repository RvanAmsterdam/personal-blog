import React from "react";
import MarkdownToJsx from "markdown-to-jsx";
import { RichArticleCodeBlock } from "./components/RichArticleCodeBlock";

type MarkdownProps = {
    value: string;
    wrapper?: typeof React.Fragment;
    className?: string;
};

export const Markdown = (props: MarkdownProps) => {
    const markDownToJsxOptions = {
        forceBlock: true,
        wrapper: props.wrapper,
        // overrides: {
        //    code: RichArticleCodeBlock
        // }
    };

    return (
        <div className="markdown">
            <MarkdownToJsx className="rich-article" options={markDownToJsxOptions}>
                {props.value}
            </MarkdownToJsx>
        </div>
    );
};
