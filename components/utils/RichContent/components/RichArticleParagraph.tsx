// Temporary solution to make sure that children are wrapped in a div tag when it's not a paragraph
// See issue: https://github.com/probablyup/markdown-to-jsx/issues/209

import React, { Children, ReactNode } from "react";

type RichArticleParagraphProps = {
    children: ReactNode;
};

export const RichArticleParagraph = (props: RichArticleParagraphProps) => {
    return Children.toArray(props.children).some((child: ReactNode) => typeof child === "string") 
    ? ( <p {...props} /> ) 
    : ( <div {...props} /> );
};
