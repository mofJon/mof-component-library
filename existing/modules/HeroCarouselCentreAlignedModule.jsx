import SectionContent from '@/components/cards/SectionContent';
import React, { useRef, useEffect } from 'react';
import { ModuleBase, ResponsiveImage } from 'components';
import Flicking, { FlickingError, ViewportSlot } from '@egjs/react-flicking';
import { Pagination, AutoPlay } from '@egjs/flicking-plugins';
import '@egjs/flicking-plugins/dist/pagination.css';
import '@egjs/react-flicking/dist/flicking.css';
import Arrow from 'assets/arrow.svg';
import { Media } from '@/components';

const HeroCarouselCentreAlignedModule = ({ data }) => {
  const carousel = useRef();

  useEffect(() => {
    carousel.current?.on('ready', (e) => {
      e.currentTarget.addPlugins(
        new Pagination({
          type: 'bullet',
          renderBullet: (className) => `<span class="${className}" role="button"></span>`,
        }),
      );
      if (data?.autoPlay) {
        e.currentTarget.addPlugins(new AutoPlay({ duration: 2000, direction: 'NEXT', stopOnHover: false }));
      }
    });
  }, [data?.autoPlay]);

  const move = async (dir) => {
    try {
      if (dir > 0) {
        await carousel.current.next();
      } else {
        await carousel.current.prev();
      }
    } catch (err) {
      if (!(err instanceof FlickingError)) {
        throw new Error(err);
      }
    }
  };

  return (
    <ModuleBase data={data} className="relative h-screen">
      {data.video.length === 1 ? (
        <div className="absolute top-0 left-0 right-0 h-full w-full">
          <Media
            media={data.video[0]}
            widths={{ xs: 425, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 2560 }}
            className="h-full w-full object-cover"
            cover
            dataNotLazy
          />
        </div>
      ) : (
        <>
          <Flicking ref={carousel} align="center" useResizeObserver={true} horizontal={true} circular={true}>
            {data.mediaItems?.map((slide, index) => (
              <div key={index} className="h-screen w-full">
                <ResponsiveImage
                  image={slide}
                  widths={{ xs: 1024, sm: 1024, md: 1024, lg: 1024, xl: 1280, xxl: 1536 }}
                />
              </div>
            ))}
            <ViewportSlot>
              <div className="flicking-pagination relative pb-14 md:pb-9 lg:pb-12 [&_.flicking-pagination-bullet]:bg-grey4 [&_.flicking-pagination-bullet.flicking-pagination-bullet-active]:bg-grey1"></div>
            </ViewportSlot>
          </Flicking>
          <div className="absolute top-0 left-0 right-0 h-full w-full z-10 gradient-center" />
          <div className="absolute z-10 w-full h-full top-0 flex justify-center items-center pointer-events-none">
            <div className="max-w-[450px] lg:max-w-[600px] pointer-events-auto">
              <SectionContent
                data={{ ...data }}
                className="container select-none"
                //preHeadingClassName="text-black text-center text-base"
                //headingClassName="text-h1 font-primary text-center mt-4 color-from-bg"
                //descriptionWrapperclassName="mt-4 text-paragraph color-from-bg mt-6 md:mt-4"
                //descriptionClassName="text-center font-primary text-lg md:text-xl lg:text-2xl mb-10"
              />
            </div>
          </div>
          <div className="w-[85%] sm:w-[calc(70%+9rem)] lg:w-[calc(75%+9rem)] xxl:w-[calc(80%+6rem)] absolute flex justify-between items-end pb-[53px] sm:pb-0 sm:items-center h-screen top-0 left-0 right-0 m-auto ">
            <button
              className="btn text border circle p-0 w-10 h-10 sm:w-12 sm:h-12 z-10"
              onClick={move}
              aria-label="Prevues"
            >
              <Arrow className="rotate-180" />
            </button>

            <button
              className="btn text border circle p-0 w-10 h-10 sm:w-12 sm:h-12 z-10"
              onClick={() => move(1)}
              aria-label="Next"
            >
              <Arrow />
            </button>
          </div>
        </>
      )}
    </ModuleBase>
  );
};
export default HeroCarouselCentreAlignedModule;
