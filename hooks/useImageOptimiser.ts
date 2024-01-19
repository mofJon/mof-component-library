import { useDimensions } from "./";
import { getQueryByName, stripQueryString } from "@/utils";

export default function useImageOptimiser(
  url: string,
  propWidth: number,
  propHeight: number,
  ref?: any,
): any {
  const { width: parentWidth, height: parentHeight } = useDimensions(ref);

  let width = parentWidth;
  let height = parentHeight;
  let src = url;

  const cdnWidth = getQueryByName(url, "width");
  const cdnHeight = getQueryByName(url, "height");

  if (cdnWidth && cdnHeight) {
    width = cdnWidth;
    height = cdnHeight;
  }

  if (propWidth || propHeight) {
    width = propWidth || "auto";
    height = propHeight || "auto";
  }

  src = `${stripQueryString(url)}?width=${width}&height=${height}&format=webp`;

  return { width, height, src };
}
