const UNSPLASH_HOST = "images.unsplash.com";

export function optimizeImageUrl(
  url,
  { width = 800, quality = 75 } = {}
) {
  if (!url || !url.includes(UNSPLASH_HOST)) return url;

  try {
    const parsed = new URL(url);
    parsed.searchParams.set("w", String(width));
    parsed.searchParams.set("q", String(quality));
    parsed.searchParams.set("auto", "format");
    parsed.searchParams.set("fit", "crop");
    return parsed.toString();
  } catch {
    return url;
  }
}

export function buildSrcSet(url, widths, quality = 75) {
  if (!url || !url.includes(UNSPLASH_HOST)) return undefined;

  return widths
    .map((width) => `${optimizeImageUrl(url, { width, quality })} ${width}w`)
    .join(", ");
}

export const IMAGE_PRESETS = {
  hero: {
    widths: [640, 1024, 1536, 1920],
    sizes: "100vw",
    quality: 78,
    defaultWidth: 1536,
  },
  gallery: {
    widths: [400, 600, 800],
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    quality: 72,
    defaultWidth: 800,
  },
  preview: {
    widths: [320, 480, 640, 800],
    sizes: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
    quality: 72,
    defaultWidth: 640,
  },
  content: {
    widths: [480, 768, 1024, 1200],
    sizes: "(max-width: 1024px) 100vw, 50vw",
    quality: 75,
    defaultWidth: 1024,
  },
  lightbox: {
    widths: [800, 1200, 1600],
    sizes: "90vw",
    quality: 80,
    defaultWidth: 1200,
  },
};

export function getOptimizedImageProps(src, preset = "gallery") {
  const config = IMAGE_PRESETS[preset] || IMAGE_PRESETS.gallery;

  if (!src?.includes(UNSPLASH_HOST)) {
    return { src, srcSet: undefined, sizes: undefined };
  }

  return {
    src: optimizeImageUrl(src, {
      width: config.defaultWidth,
      quality: config.quality,
    }),
    srcSet: buildSrcSet(src, config.widths, config.quality),
    sizes: config.sizes,
  };
}

export function preloadImage(src) {
  if (!src || typeof window === "undefined") return;

  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = src;
  document.head.appendChild(link);
}

export function preloadImages(urls) {
  urls.forEach((url) => {
    if (!url) return;
    const img = new Image();
    img.decoding = "async";
    img.src = url.includes(UNSPLASH_HOST)
      ? optimizeImageUrl(url, { width: 1536, quality: 78 })
      : url;
  });
}

export function getLocalHeroSrc(path) {
  if (path.endsWith(".png")) {
    return path.replace(/\.png$/i, ".webp");
  }
  return path;
}

export function getLocalHeroFallback(path) {
  return path;
}
