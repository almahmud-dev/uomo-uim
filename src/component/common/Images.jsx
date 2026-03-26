import Image from "next/image";

const Images = ({ imgSrc, className, imgAlt, width, height, priority }) => {
  if (!imgSrc) return null;

  if (width && height) {
    return (
      <Image
        src={imgSrc}
        alt={imgAlt || ""}
        width={width}
        height={height}
        className={className}
        priority={priority || false}
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
