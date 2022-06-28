import { ImageComponent } from "../../../ImageComponent";

type RichArticleImageProps = {
    src: string;
    alt?: string;
    title?: string;
    children?: React.ReactNode;
};

export const RichArticleImage = (props: RichArticleImageProps) => {
    console.log(props);

    return (
        <figure>
            <ImageComponent src={props.src} alt={props.alt} title={props.title} />
            {props.title && <figcaption>{props.title}</figcaption>}
        </figure>
    );
};
