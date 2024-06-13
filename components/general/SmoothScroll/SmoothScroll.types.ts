import Lenis, { LenisOptions } from "lenis";

export interface SmoothScrollProps extends LenisOptions {
  onLoaded: (lenis: Lenis | undefined) => void;
}
