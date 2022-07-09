import Image, { ImageProps } from "next/image";

type ImageComponentProps = {
    src: string;
    alt?: string;
    title?: string;
    className?: string;
    objectFit?: ImageProps["objectFit"];
    layout?: ImageProps["layout"];
    width?: ImageProps["width"];
    height?: ImageProps["height"];
};

export const ImageComponent = (props: ImageComponentProps) => {
    return (
        <div className={`image-container ${props.className ? props.className : ""}`} >
            <Image
                src={props.src}
                alt={props.alt}
                title={props.title}
                layout={props.layout || "fill"}
                objectFit={props.objectFit}
                width={props.width}
                height={props.height}
            />
        </div>
    );
};
