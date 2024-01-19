import SectionContent from '@/components/cards/SectionContent';
import React, { useRef, useEffect } from 'react';
import { ModuleBase, ResponsiveImage } from 'components';
import Flicking, { FlickingError, ViewportSlot } from '@egjs/react-flicking';
import { Pagination, AutoPlay } from '@egjs/flicking-plugins';
import '@egjs/flicking-plugins/dist/pagination.css';
import '@egjs/react-flicking/dist/flicking.css';
import Arrow from 'assets/arrow.svg';

const HeroCarouselCentreAlignedModule = ({ data }) => {
  const carousel = useRef();

  useEffect(() => {
    carousel.current.on('ready', (e) => {
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
      <Flicking ref={carousel} align="center" useResizeObserver={true} horizontal={true} circular={true}>
        {data.mediaItems?.map((slide, index) => (
          <div key={index} className="h-screen w-full">
            <ResponsiveImage
              image={slide}
              widths={{ xs: 1024, sm: 1024, md: 1024, lg: 1024, xl: 1280, xxl: 1536 }}
              dataNotLazy
            />
          </div>
        ))}
        <ViewportSlot>
          <div className="flicking-pagination !w-auto relative pb-[56px] pl-[24px] md:pl-[40px] lg:pl-[108px] [&_.flicking-pagination-bullet]:bg-grey4 [&_.flicking-pagination-bullet.flicking-pagination-bullet-active]:bg-grey1"></div>
        </ViewportSlot>
      </Flicking>
      <div className="absolute top-0 left-0 right-0 h-full w-full z-10 gradient-light" />
      <div className="absolute z-10 w-full h-full top-0 flex justify-start items-end px-6 pb-[104px] md:pl-[40px] md:pb-[118px] lg:pl-[108px] lg:pb-[120px] pointer-events-none">
        <div className="max-w-[600px] pointer-events-auto">
          <SectionContent
            data={{ ...data }}
            className="select-non"
            //preHeadingClassName="text-black"
            //headingClassName="text-h1 font-primary mt-4 color-from-bg"
            //descriptionWrapperclassName="mt-4 text-paragraph color-from-bg mt-6 md:mt-4"
            //descriptionClassName="font-primary text-lg md:text-xl lg:text-[22px] mb-10"
          />
        </div>
      </div>
      <div className="w-[100px] sm:w-[115px] absolute flex justify-between bottom-[50px] right-[24px] md:right-[40px] lg:bottom-[56px] lg:right-[108px]">
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
    </ModuleBase>
  );
};
export default HeroCarouselCentreAlignedModule;
