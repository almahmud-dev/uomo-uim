import { CldImage } from "next-cloudinary";

const Images = ({ imgSrc, className, imgAlt, width, height, priority, sizes }) => {
  if (!imgSrc) return null;

  if (width && height) {
    return (
      <CldImage
        src={imgSrc}
        alt={imgAlt || ""}
        width={width}
        height={height}
        className={className}
        priority={priority || false}
        quality="auto"
        format="auto"
        sizes={sizes}
      />
    );
  }

  return (
    <img
      src={imgSrc}
      alt={imgAlt || ""}
      className={className}
      loading={priority ? "eager" : "lazy"}
    />
  );
};

export default Images;