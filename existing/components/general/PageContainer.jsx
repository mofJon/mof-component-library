import { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { useSelector } from 'react-redux';
import { selectIsRobot } from 'store/index';
import { useRouter } from 'next/router';
import SmootherContext from './SmootherContext';
import { useLayoutEffect, loadLazyImage } from 'utils';

const PageContainer = ({ className, ...props }) => {
  const wrapper = useRef();
  const content = useRef();
  const [scrollSmoother, setScrollSmoother] = useState();
  const router = useRouter();
  const lazyTimer = useRef();
  const isRobot = useSelector(selectIsRobot);

  useEffect(() => {
    router.events.on('routeChangeComplete', (url, { shallow }) => {
      if (!shallow) {
        scrollSmoother?.scrollTop(0);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollSmoother]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
      wrapper: wrapper.current,
      content: content.current,
      smooth: 1.5,
      speed: 1,
      effects: false,
      preventDefault: true,
    });

    setScrollSmoother(smoother);
  }, []);

  const startToLoadLazyImages = () => {
    clearTimeout(lazyTimer.current);
    lazyTimer.current = setTimeout(() => {
      loadLazyImagesChunk();
    }, 2000);
  };

  // load lazy images
  const loadLazyImagesChunk = () => {
    if (!isRobot) {
      const elList = document.querySelectorAll('.lazy-image:not(.lazy-loaded)');

      if (elList && elList.length > 0) {
        let imgEl = null;
        for (let i = 0; i < 5; i++) {
          loadLazyImage(elList[i]);
          if (elList[i] && i === 4) {
            const media =
              elList[i].children && elList[i].children.length > 0 ? [...elList[i].children, elList[i]] : [elList[i]];

            imgEl = media.find((cEl) => cEl.tagName.toLowerCase() === 'img');
          }
        }
        if (imgEl) {
          if (imgEl.complete) {
            loadLazyImagesChunk();
          } else {
            imgEl.addEventListener('load', () => {
              loadLazyImagesChunk();
            });
          }
        } else {
          loadLazyImagesChunk();
        }
      } else {
        startToLoadLazyImages();
      }
    }
  };

  return (
    <SmootherContext.Provider value={scrollSmoother}>
      <div ref={wrapper}>
        <div className={classnames('page-container will-change-transform', className)} {...props} ref={content} />
      </div>
    </SmootherContext.Provider>
  );
};

export default PageContainer;
