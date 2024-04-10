import { useDimensions } from "./";
import { stripQueryString } from "../utils";
import { useDevicePixelRatio } from "use-device-pixel-ratio";
import { getBase64 } from "../components/base/Image/Image.actions";

const dprQuality = [70, 30, 20];

export default function useImageOptimiser(
  url: string,
  propWidth: number,
  propHeight: number,
  responsive: boolean,
  sizes?: string,
  ref?: any,
  propsQuality?: any,
): any {
  const dimensions = useDimensions(ref);
  const dpr = useDevicePixelRatio();
  const quality =
    propsQuality?.[dimensions.breakpoint] ||
    propsQuality ||
    dprQuality[dpr - 1];
  const fallbackWidth = 1080;

  let width: number = propWidth || Math.round(dimensions?.width || 0);
  let height = propHeight || Math.round(dimensions?.height || 0);

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

  // generates our responsive, width based srcset from the CDN
  const imageLoader = ({ width }: any) => {
    return `${stripQueryString(
      url,
    )}?width=${width}&quality=${quality}&format=webp`;
  };

  // jpg fallback for older browsers
  const fallbackURL = `${stripQueryString(url)}?width=${
    fallbackWidth * dpr
  }&quality=${quality}&format=auto`;

  // blurURL
  const blurURL = `${stripQueryString(url)}?width=10&quality=10&format=auto`;

  const isAbsolute = url && url.includes("http");
  const hasLoader = isAbsolute ? { loader: imageLoader } : {};
  // const blurDataURL = blurURL ? getBase64(blurURL) : "";

  return {
    src: isAbsolute ? fallbackURL : stripQueryString(url),
    ...(responsive ? responsiveProps : staticProps),
    // placeholder: blurDataURL ? "blur" : null,
    // blurDataURL,
    quality,
    ...hasLoader,
  };
}
