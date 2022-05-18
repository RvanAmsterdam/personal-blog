import Image from "next/image";
import { estimateReadingTime } from "./estimateReadingTime";
import { formatDate } from "./formatDate";

type MetadataProps = {
    author: string;
    pfp: string;
    date: Date;
}
type ArticleMetaProps = {
    metadata: MetadataProps; 
    content: string;
};

export const ArticleMeta = (props: ArticleMetaProps) => {
    const formattedDate = formatDate(props.metadata.date);
    const estimatedReadingTime = estimateReadingTime(props.content);

    return (
        <section className="post-meta">
            <div className="post-meta__author-picture image-container">
                <Image src={props.metadata.pfp} alt="Thumbnail" layout="fill" />
            </div>

            <div className="post-meta__info">
                <address className="post-meta__author">{props.metadata.author}</address>
                <time>{formattedDate} • {estimatedReadingTime} min read</time>
            </div>
        </section>
    );
};
