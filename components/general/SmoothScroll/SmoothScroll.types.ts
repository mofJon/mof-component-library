import Lenis, { LenisOptions } from "lenis";

declare global {
  interface Window {
    mainScroll: any;
  }
}

export interface SmoothScrollProps extends LenisOptions {
  onLoaded?: (lenis: Lenis | undefined) => void;
  main?: boolean;
}
