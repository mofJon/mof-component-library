import SectionContent from '@/components/cards/SectionContent';
import React, { useRef, useEffect } from 'react';
import { ModuleBase, ResponsiveImage } from 'components';
import Flicking, { FlickingError, ViewportSlot } from '@egjs/react-flicking';
import { Pagination, AutoPlay } from '@egjs/flicking-plugins';
import '@egjs/flicking-plugins/dist/pagination.css';
import '@egjs/react-flicking/dist/flicking.css';
import ArrowForward from 'assets/arrowForward.svg';

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
    <ModuleBase data={data} className="relative h-[640px] md:h-[363px]  lg:h-[668px]">
      <Flicking ref={carousel} align="center" useResizeObserver={true} horizontal={true} circular={true}>
        {data.mediaSlides.map((slide, index) => (
          <div key={index} className="h-[640px] md:h-[363px] lg:h-[668px] w-full">
            <div className="absolute w-full h-full flex justify-center items-end">
              <div className="w-full px-10 xl:px-[212px] pb-[96px] md:pb-[47px] lg:pb-[64px]">
                <div className="absolute top-0 left-0 right-0 h-full w-full z-10 gradient-bottom" />
                <SectionContent
                  data={{
                    headingTitle: {
                      heading: slide.headingTitle,
                      htag: '',
                    },
                    description: slide.description,
                    primaryCTA: slide.primaryCTA,
                    secondaryCTA: slide.secondaryCTA,
                  }}
                  className="select-none relative z-20"
                  //headingClassName="font-primary font-[600] text-[1rem] lg:text-[1.125rem] leading-6"
                  //descriptionClassName="font-primary text-[0.875rem] leading-5 lg:text-[1rem] lg:leading-6"
                  //descriptionWrapperclassName="md:flex items-start mt-2 md:gap-10"
                />
              </div>
            </div>

            <ResponsiveImage
              image={slide.image}
              widths={{ xs: 375, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536 }}
            />
          </div>
        ))}
        <ViewportSlot>
          <div className="flicking-pagination relative pb-[14px] md:pb-[9px] lg:pb-[30px] [&_.flicking-pagination-bullet]:bg-grey4 [&_.flicking-pagination-bullet.flicking-pagination-bullet-active]:bg-grey1"></div>
        </ViewportSlot>
      </Flicking>

      <div className="w-[calc(100%-80px)] md:w-full md:px-10 lg:px-0 lg:w-[calc(100%-88px)] absolute flex justify-between items-end pb-[30px] md:pb-0 md:items-center h-full top-0 left-0 right-0 m-auto ">
        <button
          className="btn text border circle p-0 w-9 h-9 lg:w-12 lg:h-12 z-20"
          onClick={move}
          aria-label="Previous"
        >
          <ArrowForward role="presentation" className="rotate-180 scale-75" />
        </button>

        <button
          className="btn text border circle p-0 w-9 h-9 lg:w-12 lg:h-12 z-20"
          onClick={() => move(1)}
          aria-label="Next"
        >
          <ArrowForward role="presentation" className="scale-75" />
        </button>
      </div>
    </ModuleBase>
  );
};
export default HeroCarouselCentreAlignedModule;
