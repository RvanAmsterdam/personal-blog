import Image from "next/image";

type ImageComponentProps = {
    src: string;
    alt?: string;
    title?: string;
    className?: string;
};

export const ImageComponent = (props: ImageComponentProps) => {
    return (
        <div className={`image-container ${props.className ? props.className : ""}`}>
            <Image src={props.src} alt={props.alt} title={props.title} layout="fill" />
        </div>
    );
};
