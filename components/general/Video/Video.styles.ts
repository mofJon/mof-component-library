import classNames from "classnames";

export const videoWrapper = (isPlaying: boolean) => ({
  className: classNames("video-wrapper", { playing: isPlaying }),
  style: {
    width: "100%",
    height: "100%",
  },
});

export const videoControls = {
  className: "video-controls",
};
