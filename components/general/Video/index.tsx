import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { Box, Image } from "../../";
import { videoWrapper } from "./Video.styles";
import VideoPlayer from "./VideoPlayer";

const Video: any = forwardRef(function Video(
  {
    data,
    priority = false,
    imageSizes,
    controls,
    muted,
    onPlayerReady,
    onAutoPlayStarted,
    ...props
  }: any,
  ref,
) {
  const isRobot = null;

  const vimeo = useRef();

  useImperativeHandle(
    ref,
    () => {
      const vid: any = vimeo?.current;

      return (
        data.vimeoId && {
          openFullscreen: () => vid?.openFullscreen(),
          play: () => vid?.play(),
          pause: () => vid?.pause(),
        }
      );
    },
    [data],
  );

  if (!data) {
    return null;
  }

  const cover = data?.coverImage;

  return (
    <Box {...videoWrapper} {...props}>
      {cover && (
        <Image
          {...imageSizes}
          src={cover.imageUrl}
          alt={cover.imageAlt}
          priority={priority}
          responsive
        />
      )}
      {!isRobot &&
        (data.videoFromGallery || data.vimeoId || data.youtubeId) &&
        (data.vimeoId ? (
          <VideoPlayer
            ref={vimeo}
            media={data}
            cover={cover}
            controls={controls}
            onPlayerReady={onPlayerReady}
            onAutoPlayStarted={onAutoPlayStarted}
            muted={muted}
          />
        ) : null)}
    </Box>
  );
});

export default Video;
