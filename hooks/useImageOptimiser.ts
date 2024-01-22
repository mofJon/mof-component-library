import { useDimensions } from "./";
import { getQueryByName, stripQueryString, toDataURL } from "@/utils";
import { useDevicePixelRatio } from "use-device-pixel-ratio";

const dprQuality = [70, 30, 20];

export default function useImageOptimiser(
  url: string,
  propWidth: number,
  propHeight: number,
  responsive: boolean,
  sizes: string,
  ref?: any,
): Promise<any> {
  const { width: parentWidth = 0, height: parentHeight = 0 } =
    useDimensions(ref);
  const dpr = useDevicePixelRatio();
  const quality = dprQuality[dpr - 1];

  let width: number = Math.round(parentWidth);
  let height: number = Math.round(parentHeight);

  const cdnWidth = getQueryByName(url, "width");
  const cdnHeight = getQueryByName(url, "height");

  if (cdnWidth && cdnHeight) {
    width = parseInt(cdnWidth);
    height = parseInt(cdnHeight);
  }

  if (propWidth || propHeight) {
    width = propWidth;
    height = propHeight;
  }

  const responsiveProps = {
    fill: true,
    objectFit: "cover",
  };
  const staticProps = {
    width,
    height,
  };
  const isResponsive = responsive || (width === 0 && height === 0);

  const fallbackURL = `${stripQueryString(url)}?width=${width * dpr}&height=${
    height * dpr
  }&quality=${quality}`;

  const optimiserProps = {
    src: `${fallbackURL}&format=webp`,
    ...(isResponsive ? responsiveProps : staticProps),
    blurDataURL: `${stripQueryString(url)}?width=${width * 0.1}&height=${
      height * 0.1
    }&blur=20`,
    placeholder: "blur",
    quality,
    sizes: sizes || "(max-width: 300px) 100vw, (max-width: 1200px) 50vw, 33vw",
  };

  console.log(optimiserProps, width, height, parentWidth, fallbackURL);

  return {
    width,
    height,
    src: optimiserProps.src,
    dpr,
    quality,
    optimiserProps,
    fallbackURL,
  };
}
