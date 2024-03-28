import { useEffect, useRef, FC, useState } from "react";
import { Box, Button, Image } from "../../";
import ReactPlayer from "react-player/lazy";
import screenfull from "screenfull";
import { videoWrapper, videoControls } from "./Video.styles";
import { useDimensions } from "../../../hooks";

const Video: FC<any> = ({
  data,
  imageSizes,
  priority = "false",
  onPlayerReady = () => {},
  onAutoPlayStarted = () => {},
  imageQuality,
}: any) => {
  const player = useRef<any>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewer, setViewer] = useState<HTMLIFrameElement | HTMLVideoElement>();
  const [init, setInit] = useState(true);
  const [aspect, setAspect] = useState(1);
  const { width, height } = useDimensions(videoWrapperRef);

  const wrapper = videoWrapperRef.current;

  const resizeVideo = () => {
    if (wrapper) {
      const vidContainer: any = wrapper.children[0];

      const viewerWidth = viewer?.getBoundingClientRect()?.width;

      if (vidContainer) {
        vidContainer.style.width = "102%";
        vidContainer.style.height = `${width * 3}px`;
        if (
          height >=
          width * aspect
          // (viewerWidth || width) < width
        ) {
          vidContainer.style.height = "102%";
          vidContainer.style.width = `${height * 3}px`;
        }
      }
    }
  };

  useEffect(() => {
    resizeVideo();
  }, [width, height, player.current, viewer, init]);

  if (!data) {
    return null;
  }

  let vidSrc = data?.videoFromGallery?.videoUrl;
  if (data?.vimeoId !== "") vidSrc = `https://vimeo.com/${data?.vimeoId}`;
  if (data?.youtubeId !== "")
    vidSrc = `https://www.youtube.com/watch?v=${data?.youtubeId}`;
  const cover = data?.coverImage;

  const handleReady = () => {
    onPlayerReady();
    const wrapper = videoWrapperRef.current;

    if (wrapper) {
      let container: any = wrapper.getElementsByTagName("video")[0];
      let vidWidth = container?.videoWidth;
      let vidHeight = container?.videoHeight;
      if (wrapper.getElementsByTagName("iframe")[0]) {
        container = wrapper.getElementsByTagName("iframe")[0];
        vidWidth = container?.width.includes("px")
          ? parseInt(container?.width)
          : 640;
        vidHeight = container?.height.includes("px")
          ? parseInt(container?.height)
          : 390;
      }

      setAspect(vidHeight / vidWidth + 0.07);

      if (container) {
        setViewer(container);
        if (data?.autoPlay) {
          setInit(false);
          setIsPlaying(true);
        }
      }
    }
  };

  const handleFullscreen = (e?: any) => {
    if (!data?.allowFullScreen) return;

    e && e.stopPropagation();
    viewer && screenfull.request(viewer);
  };

  const togglePlay = (e: any) => {
    e.stopPropagation();
    if (init) {
      setInit(false);
      onAutoPlayStarted();
    }

    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e: any) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <Box
      ref={videoWrapperRef}
      {...videoWrapper(isPlaying, data?.autoPlay, init)}
      onClick={handleFullscreen}
    >
      <ReactPlayer
        ref={player}
        url={vidSrc}
        playing={isPlaying}
        onReady={handleReady}
        controls={data?.allowControls}
        muted={isMuted}
        autoPlay={data?.autoPlay && viewer}
        playsinline
        loop={data?.loop}
        config={{
          youtube: {
            playerVars: {
              videoControls: data?.allowControls,
            },
          },
        }}
      />
      {cover && (
        <Image
          sizes={imageSizes}
          src={cover.imageUrl}
          alt={cover.imageAlt}
          priority={priority}
          responsive
          quality={imageQuality}
        />
      )}
      {vidSrc && (
        <Box {...videoControls(isPlaying, !init)}>
          <Button onClick={toggleMute} variant="videoMute" />
          <Button onClick={togglePlay} variant="videoPlay" />
          <Button onClick={handleFullscreen} variant="videoFullscreen" />
        </Box>
      )}
    </Box>
  );
};

export default Video;
