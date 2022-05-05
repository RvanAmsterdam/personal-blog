import Image from "next/image";

type ArticleMetadataProps = {
    author: string;
    pfp: string;
    date: Date;
};

export const ArticleMetadata = ({ author, pfp, date }: ArticleMetadataProps) => {
    const formattedDate = new Date(date).toDateString();

    return (
        <section className="post-meta">
            <div className="post-meta__author-picture image-container">
                <Image src={pfp} alt="Thumbnail" layout="fill" />
            </div>

            <div className="post-meta__info">
                <address className="post-meta__author">{author}</address>
                <time>{formattedDate}</time>
            </div>
        </section>
    );
};
