import Lenis from "lenis";

export interface SmoothScrollProps {
  onLoaded: (lenis: Lenis | undefined) => void;
}
