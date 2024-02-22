import React, { useEffect, useRef, forwardRef, useState } from "react";
import { Box, Image } from "../../";
import {
  FullscreenButton,
  MediaPlayer,
  MediaProvider,
  MuteButton,
  PlayButton,
  type MediaPlayerInstance,
} from "@vidstack/react";
import { videoWrapper, videoControls } from "./Video.styles";
import { useDimensions } from "../../../hooks";

let iframe: HTMLIFrameElement;

const Video: any = forwardRef(function Video(
  {
    data,
    imageSizes,
    priority = "false",
    onPlayerReady,
    onAutoPlayStarted,
  }: any,
  ref,
) {
  const player = useRef<MediaPlayerInstance>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { width, height } = useDimensions(videoWrapperRef);

  let vidWidth: number | undefined = Math.round(width);
  let vidHeight: number | undefined = undefined;
  if (height > width) {
    vidWidth = undefined;
    vidHeight = Math.round(height);
  }

  const wrapper = videoWrapperRef.current!;
  if (wrapper) {
    iframe = wrapper.getElementsByTagName("iframe")[0];
  }

  useEffect(() => {
    if (iframe && !isFullscreen) {
      if (vidWidth && vidWidth > 0) {
        iframe.style.width = `${vidWidth}px`;
        iframe.style.height = `${vidWidth * 2}px`;
      }

      if (vidHeight && vidHeight > 0) {
        iframe.style.height = `${vidHeight}px`;
        iframe.style.width = `${vidHeight * 2}px`;
      }
      iframe.style.background = "transparent";
    }
  }, [vidWidth, vidHeight]);

  if (!data) {
    return null;
  }

  let vidSrc = data?.videoFromGallery?.videoUrl;
  if (data?.vimeoId !== "") vidSrc = `vimeo/${data?.vimeoId}`;
  if (data?.youtubeId !== "") vidSrc = `youtube/${data?.vimeoId}`;

  const toggleStart = () => {
    const playerEl = player.current!;

    if (playerEl) {
      if (playerEl.paused) {
        playerEl.play();
      } else {
        handleFullscreen();
      }
    }
  };

  const handleFullscreen = (e?: any) => {
    e && e.stopPropagation();
    const playerEl = player.current!;
    setIsFullscreen(true);

    if (iframe) {
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.background = "black";
    }

    if (playerEl && data?.allowFullScreen) {
      playerEl.enterFullscreen();
    }
  };

  const handleFullscreenChange = (isFullscreen: any) => {
    setIsFullscreen(isFullscreen);
  };

  const togglePlay = (e: any) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const handleIsPlaying = (e: any) => {
    setIsPlaying(e.type === "play");
  };

  const toggleMute = (e: any) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const cover = data?.coverImage;

  return (
    <Box
      ref={videoWrapperRef}
      {...videoWrapper(isPlaying)}
      onClick={toggleStart}
    >
      <MediaPlayer
        ref={player}
        src={vidSrc}
        onCanPlay={onPlayerReady}
        onAutoPlay={onAutoPlayStarted}
        autoPlay={data?.autoPlay}
        muted={isMuted}
        controls={data?.allowControls}
        playsInline
        loop={data?.loop}
        onFullscreenChange={handleFullscreenChange}
        onPlay={handleIsPlaying}
        onPause={handleIsPlaying}
      >
        <MediaProvider>
          {cover && (
            <Image
              sizes={imageSizes}
              src={cover.imageUrl}
              alt={cover.imageAlt}
              priority={priority}
              responsive
            />
          )}
        </MediaProvider>
        <Box {...videoControls}>
          <MuteButton onClick={toggleMute} />
          <PlayButton onClick={togglePlay} />
          <FullscreenButton onClick={handleFullscreen} />
        </Box>
      </MediaPlayer>
    </Box>
  );
});

export default Video;
