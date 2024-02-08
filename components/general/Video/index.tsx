// ts-nocheck
import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import { Box } from "../../";
import Player from "@vimeo/player";
import { useLayoutEffect } from "../../../utils";
import { videoContainer, videoRoot } from "./Video.styles";

declare const document: {
  fullScreen: any;
  mozFullScreen: any;
  exitFullscreen: any;
  webkitExitFullscreen: any;
  mozCancelFullScreen: any;
  msExitFullscreen: any;
  webkitIsFullScreen: any;
};

const Video: any = forwardRef(function Video(
  { media, cover, controls, onPayerReady, onAutoPlayStarted, ...props },
  ref,
) {
  const root = useRef();
  const container = useRef();

  let player: Player = useRef(null);
  let fullscreen: any = useRef(null);
  const [vimeoReady, setVimeoReady] = useState(false);

  const [videobgWidth, setVideobgWidth] = useState("100%");
  const [videobgHeight, setVideobgHeight] = useState("100%");

  useEffect(() => {
    if (!isNaN(media.vimeoId)) {
      player.current = new Player(container.current, {
        id: media.vimeoId,
        autoplay: media.autoPlay,
        background: media.autoPlay,
        loop: media.loop,
        controls: controls,
        dnt: true,
      });

      if (player.current) {
        if (media.autoPlay && onAutoPlayStarted) {
          player.current.play().then(() => {
            onAutoPlayStarted();
          });
        }

        player.current.ready().then(() => {
          setVimeoReady(true);
          if (onPayerReady) {
            onPayerReady();
          }
        });
      }
    } else {
      console.error(`'${media.vimeoId}' is not a valid vimeo ID`);
    }
  }, [onPayerReady, onAutoPlayStarted, media, controls]);

  useImperativeHandle(
    ref,
    () => {
      const monitorFullScreen = () => {
        if (
          document.fullScreen ||
          document.mozFullScreen ||
          document.webkitIsFullScreen
        ) {
          setTimeout(() => {
            monitorFullScreen();
          }, 100);
        } else {
          if (fullscreen.current) {
            fullscreen.current = false;
          }
        }
      };

      return {
        openFullscreen() {
          if (
            (media.allowFullScreen === undefined ||
              media.allowFullScreen === true) &&
            !fullscreen.current &&
            player.current
          ) {
            fullscreen.current = true;
            player.current.requestFullscreen();
            player.current.play();
            setTimeout(() => {
              monitorFullScreen();
            }, 1000);
          }
        },
      };
    },
    [media],
  );

  useLayoutEffect(() => {
    if (vimeoReady && cover) {
      videobgEnlarge();
      window.addEventListener("resize", videobgEnlarge);
      return () => window.removeEventListener("resize", videobgEnlarge);
    }
  }, [vimeoReady, cover]);

  const videobgEnlarge = () => {
    const vRoot: any = root.current;

    if (vRoot && vRoot.getElementsByTagName("iframe")[0]) {
      const iframe = vRoot.getElementsByTagName("iframe")[0];
      const videoAspect = iframe.height / iframe.width;
      const parentAspect =
        vRoot.parentElement.offsetHeight / vRoot.parentElement.offsetWidth;

      if (parentAspect > videoAspect) {
        setVideobgWidth((parentAspect / videoAspect) * 100 + "%");
        setVideobgHeight("100%");
      } else {
        setVideobgWidth("100%");
        setVideobgHeight((videoAspect / parentAspect) * 100 + "%");
      }
    }
  };

  if (!media) {
    return null;
  }

  return (
    <Box ref={root} {...videoRoot(videobgWidth, videobgHeight)}>
      <Box ref={container} {...props} {...videoContainer(props)} />
    </Box>
  );
});

export default Video;
