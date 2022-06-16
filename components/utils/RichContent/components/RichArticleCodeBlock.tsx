import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import { ReactNode } from "react";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);

type RichArticleCodeBlockProps = {
    children: ReactNode;
    className: string;
};

export const RichArticleCodeBlock = ({ children, className }: RichArticleCodeBlockProps) => {
    const language = className?.replace("lang-", "");

    return (
        <SyntaxHighlighter language={language} style={oneDark} wrapLines customStyle={{ fontSize: "14px", borderRadius: "5px" }}>
            {children as keyof typeof children}
        </SyntaxHighlighter>
    );
};
