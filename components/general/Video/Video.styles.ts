import classnames from "classnames";

export const videoRoot = (width: string, height: string) => ({
  className: "video-root",
  style: {
    width,
    height,
  },
});

export const videoContainer = (props: any) => ({
  className: classnames(["video-container"], props.className),
});
