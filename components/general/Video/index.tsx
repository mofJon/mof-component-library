import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
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
  const player = useRef();

  useImperativeHandle(
    ref,
    () => {
      const vid: any = vimeo?.current;

      vid?.current.pause();

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

  const togglePlay = () => {
    const playerEl: any = player?.current;

    if (playerEl) {
      playerEl.getPaused().then((paused: boolean) => {
        paused ? playerEl.play() : playerEl.pause();
      });
    }
  };

  const handleOnPlayerReady = (playerContainer: any) => {
    if (playerContainer) {
      player.current = playerContainer;
    }
  };

  const cover = data?.coverImage;

  return (
    <Box {...videoWrapper} onClick={togglePlay}>
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
            onPlayerReady={handleOnPlayerReady}
            onAutoPlayStarted={onAutoPlayStarted}
            muted={muted}
          />
        ) : null)}
    </Box>
  );
});

export default Video;
