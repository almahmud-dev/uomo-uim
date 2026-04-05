import Image from "next/image";

const Images = ({ imgSrc, className, imgAlt, width, height, priority, sizes }) => {
  if (!imgSrc) return null;

  const isCloudinary = imgSrc.includes("cloudinary") || (!imgSrc.startsWith("http") && !imgSrc.startsWith("/"));

  if (isCloudinary) {
    const { CldImage } = require("next-cloudinary");
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
  }

  if (width && height) {
    return (
      <Image
        src={imgSrc}
        alt={imgAlt || ""}
        width={width}
        height={height}
        className={className}
        priority={priority || false}
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