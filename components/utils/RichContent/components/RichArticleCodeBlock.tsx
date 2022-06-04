import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dark  from 'react-syntax-highlighter/dist/cjs/styles/prism/dark';

type RichArticleCodeBlockProps = {
    language: string;
    children: string;
};

export const RichArticleCodeBlock: React.FC<RichArticleCodeBlockProps> = ({ language, children }) => {

    return (
        <SyntaxHighlighter language={language} style={dark} wrapLines={true} showLineNumbers>
            {children}
        </SyntaxHighlighter>
    );
};
