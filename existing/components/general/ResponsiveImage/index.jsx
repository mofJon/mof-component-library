import { useEffect, useRef } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import tailwindConfig from "../../../tailwind.config.js";
import { isValidHttpUrl, loadLazyImage } from "utils";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectIsRobot } from "../../../store/index";

function screenArray() {
  const screenArray = [{ key: "xs", value: tailwindConfig.theme.screens.sm }];
  screenArray.push(
    ...Object.entries(tailwindConfig.theme.screens).map(([key, value]) => ({
      key,
      value,
    })),
  );
  return screenArray;
}

function imageSize(sizeObject, breakpoint) {
  if (sizeObject) {
    if (sizeObject[breakpoint]) {
      return sizeObject[breakpoint] > 0 ? sizeObject[breakpoint] : null;
    }
    const sList = screenArray().map((item) => item.key);

    let startIndex = sList.indexOf(breakpoint);
    while (startIndex > -1) {
      startIndex--;
      if (sizeObject[sList[startIndex]]) {
        return sizeObject[sList[startIndex]];
      }
    }
  }
  return null;
}
/*
const defaultSizes = {
  xs: 375,
  sm: 767,
  md: 1000,
  lg: 1400,
  xl: 1900,
  xxl: 2500,
};
*/
const pixelDensities = [1, 2, 3];

const ResponsiveImage = ({
  image,
  widths,
  heights,
  preload,
  cdnProps,
  dataNotLazy,
  imgProps,
  className,
  ...props
}) => {
  const pictureRef = useRef();
  const isRobot = useSelector(selectIsRobot);

  useEffect(() => {
    let observerRefValue = pictureRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        loadLazyImage(entry.target);
        observer.unobserve(observerRefValue);
      }
    });
    if (!isRobot) {
      observerRefValue && observer.observe(observerRefValue);
    }
    return () => {
      observerRefValue && observer.unobserve(observerRefValue);
    };
  }, [isRobot]);

  if (!image) return;

  const screens = screenArray();

  const buildSrcSet = (breakpoint, format) => {
    const srcSet = pixelDensities.map((pd) =>
      buildImageUrl(breakpoint, format, pd),
    );
    return srcSet;
  };

  const buildImageUrl = (breakpoint, format, pixelDensity) => {
    const validHttpUrl = isValidHttpUrl(image.imageUrl);

    const imageUrl = new URL(
      image.imageUrl,
      !validHttpUrl ? "http://fake-base.com" : undefined,
    );

    const width = imageSize(widths, breakpoint);
    const height = imageSize(heights, breakpoint);

    if (width) {
      imageUrl.searchParams.set("width", width * (pixelDensity - 1 || 1));
    }
    if (height) {
      imageUrl.searchParams.set("height", height * (pixelDensity - 1 || 1));
    }

    if (format) {
      imageUrl.searchParams.set("format", format);
    }

    if (cdnProps) {
      Object.entries(cdnProps).forEach(([key, value]) => {
        imageUrl.searchParams.set(key, value);
      });
    }
    if (validHttpUrl) {
      return imageUrl.href;
    }
    return (
      imageUrl.pathname +
      imageUrl.search +
      (pixelDensity ? ` ${pixelDensity}x` : "")
    );
  };

  const sourceArray = [];
  const preloadLinks = [];

  screens.forEach((screen, i) => {
    let media;
    if (i === 0) {
      media = `(max-width: ${parseInt(screen.value, 10) - 1}px)`;
    } else if (i === screens.length - 1) {
      media = `(min-width: ${screen.value})`;
    } else {
      media = `(min-width: ${screen.value}) and (max-width: ${
        parseInt(screens[i + 1].value, 10) - 1
      }px)`;
    }

    // const sizes = widths && widths[screen.key] ? widths[screen.key] : defaultSizes[screen.key];

    const sizes = pixelDensities.map((pd) => `${pd}x`).join(", ");

    const srcSetWebp = buildSrcSet(screen.key, "webp");
    const srcSet = buildSrcSet(screen.key);

    if (!image.isSvg) {
      sourceArray.push(
        <source
          key={i}
          sizes={sizes}
          {...(preload || dataNotLazy
            ? { srcSet: srcSetWebp.join(", ") }
            : { "data-srcset": srcSetWebp.join(", ") })}
          media={media}
          type="image/webp"
        />,
      );
    }
    sourceArray.push(
      <source
        key={i + 10}
        sizes={sizes}
        {...(preload || dataNotLazy
          ? { srcSet: srcSet.join(", ") }
          : { "data-srcset": srcSet.join(", ") })}
        media={media}
      />,
    );

    if (preload) {
      preloadLinks.push(
        <link
          key={i}
          rel="preload"
          as="image"
          fetchpriority="high"
          href={buildImageUrl("xs", "webp")}
          imageSrcSet={image.isSvg ? srcSet.join(", ") : srcSetWebp.join(", ")}
          media={media}
        />,
      );
    }
  });

  return (
    <>
      <Head>{preloadLinks}</Head>

      <picture
        className={classNames(
          "w-full h-full",
          className,
          !preload && !dataNotLazy && "lazy-image",
        )}
        data-not-lazy={dataNotLazy}
        ref={pictureRef}
        {...props}
      >
        {sourceArray}
        <img
          {...(preload || dataNotLazy
            ? { src: buildImageUrl("lg") }
            : { "data-src": buildImageUrl("lg") })}
          alt={image.imageAlt || image.caption || null}
          className="w-full h-full block object-cover"
          {...imgProps}
        />
      </picture>
    </>
  );
};

ResponsiveImage.propTypes = {
  image: PropTypes.object,
  widths: PropTypes.object,
  heights: PropTypes.object,
  preload: PropTypes.bool,
  cdnProps: PropTypes.object,
  dataNotLazy: PropTypes.bool,
  imgProps: PropTypes.object,
};

export default ResponsiveImage;
