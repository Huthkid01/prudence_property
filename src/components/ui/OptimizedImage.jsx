import {
  getOptimizedImageProps,
  getLocalHeroFallback,
  getLocalHeroSrc,
} from "../../utils/images";

export default function OptimizedImage({
  src,
  alt,
  className = "",
  preset = "gallery",
  priority = false,
  ...props
}) {
  const isLocal = src?.startsWith("/");
  const optimized = getOptimizedImageProps(src, preset);

  const sharedProps = {
    alt,
    className,
    decoding: "async",
    loading: priority ? "eager" : "lazy",
    fetchPriority: priority ? "high" : "auto",
    ...props,
  };

  if (isLocal && src.endsWith(".png")) {
    return (
      <picture className={`block ${className}`}>
        <source srcSet={getLocalHeroSrc(src)} type="image/webp" />
        <img
          src={getLocalHeroFallback(src)}
          alt={alt}
          className={className}
          decoding="async"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
        />
      </picture>
    );
  }

  if (isLocal) {
    return <img src={src} {...sharedProps} />;
  }

  return (
    <img
      src={optimized.src}
      srcSet={optimized.srcSet}
      sizes={optimized.sizes}
      {...sharedProps}
    />
  );
}
