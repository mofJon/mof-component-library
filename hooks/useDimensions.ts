import { useState, useEffect } from "react";

declare const window: {
  innerHeight: number;
  innerWidth: number;
  addEventListener: any;
  removeEventListener: any;
} & Window;

export default function useDimensions(ref?: any): any {
  const [dimensions, setDimensions] = useState({
    screenWidth: 0,
    screenHeight: 0,
  });
  const [refDimensions, setRefDimensions] = useState({});

  if (typeof window === "undefined") return null;

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    setDimensions({ screenWidth, screenHeight });

    if (ref && ref.current) {
      const el = ref.current;
      const dims = el.getBoundingClientRect();
      setRefDimensions(domRectToObject(dims));
    }
  };

  useEffect(() => {
    if (ref.current) {
      handleResize();
    }
  }, [ref]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { ...refDimensions, ...dimensions };
}

const domRectToObject = (rect: any) => {
  return {
    x: rect.x,
    y: rect.y,
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
  };
};
