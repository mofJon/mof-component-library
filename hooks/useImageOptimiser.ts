import { useDimensions } from "./";
import { stripQueryString } from "@/utils";
import { useDevicePixelRatio } from "use-device-pixel-ratio";

const dprQuality = [70, 30, 20];

export default function useImageOptimiser(
  url: string,
  propWidth: number,
  propHeight: number,
  responsive: boolean,
  sizes: string,
  ref?: any,
) {
  const { width: parentWidth = 0, height: parentHeight = 0 } =
    useDimensions(ref);
  const dpr = useDevicePixelRatio();
  const quality = dprQuality[dpr - 1];
  const fallbackWidth = 1080;

  let width: number = propWidth || Math.round(parentWidth);
  let height = propHeight || Math.round(parentHeight);

  const responsiveProps = {
    fill: true,
    fit: "cover",
    sizes: sizes || "100vw",
    style: {
      objectFit: "cover",
    },
  };
  const staticProps = {
    width,
    height,
    sizes: sizes || `${width || fallbackWidth}px`, // px value locks it from responding
  };

  // generates our responsive, width based srcset from the CND
  const imageLoader = ({ width }: any) => {
    return `${stripQueryString(
      url,
    )}?width=${width}&quality=${quality}&format=webp`;
  };

  // jpg fallback for older browsers
  const fallbackURL = `${stripQueryString(url)}?width=${
    fallbackWidth * dpr
  }&quality=${quality}&format=auto`;

  const isAbsolute = url.includes("http");
  const hasLoader = isAbsolute ? { loader: imageLoader } : {};

  return {
    src: isAbsolute ? fallbackURL : stripQueryString(url),
    ...(responsive ? responsiveProps : staticProps),
    // placeholder: "blur",
    quality,
    ...hasLoader,
  };
}
