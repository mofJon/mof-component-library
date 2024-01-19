import React, { useRef, useEffect, useState } from 'react';
import { ModuleBase, ResponsiveImage, HeadingTag, PreHeading, MediaLightboxCarousel } from '@/components';
import Flicking, { FlickingError, ViewportSlot } from '@egjs/react-flicking';
import { Pagination } from '@egjs/flicking-plugins';
import '@egjs/flicking-plugins/dist/pagination.css';
import '@egjs/react-flicking/dist/flicking.css';
import Arrow from 'assets/arrow.svg';

const MediaMasonryGridModule = ({ data }) => {
  const { headingTitle, preHeading, description, cta, mediaSection } = data || {};
  const carousel = useRef();
  const [isOpen, setIsOpen] = useState(null);

  useEffect(() => {
    carousel.current?.on('ready', (e) => {
      e.currentTarget.addPlugins(
        new Pagination({
          type: 'bullet',
          renderBullet: (className) => `<span class="${className}" role="button"></span>`,
        }),
      );
    });
  }, []);

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
    <>
      <MediaLightboxCarousel
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        slides={mediaSection[0].images}
        imageWidths={{ xs: 332, sm: 332, md: 332, lg: 600, xl: 850, xxl: 850 }}
        imageHeights={{ xs: 186, sm: 186, md: 186, lg: 337, xl: 478, xxl: 478 }}
        imageContainerWidthClassName="w-[332px] md:w-[332px] lg:w-[600px] lg:w-[850px]"
        imageContainerHeightClassName="h-[186px] md:h-[186px] lg:h-[337px] lg:h-[478px]"
      />

      <ModuleBase data={data} className="relative">
        <div
          className={`max-w-[1224px] mx-10 xl:mx-auto m-auto mb-12 xl:mb-16 md:flex gap-2 ${
            description ? 'min-h-[180px]' : ''
          }`}
        >
          <div className="title-wrapper w-full">
            {preHeading && (
              <PreHeading className="pre-heading uppercase font-primary text-small md:text-base font-semibold text-subheading">
                {preHeading}
              </PreHeading>
            )}
            {headingTitle && <HeadingTag data={headingTitle} className="text-h3 font-primary mt-2 md:mt-4 mb-6" />}
          </div>
          <div className="w-full flex flex-col md:max-w-[332px] lg:max-w-[496px]">
            {description && (
              <div className="description-wrapper text-paragraph md:mt-10 grow mb-6">
                <div
                  dangerouslySetInnerHTML={{ __html: description }}
                  className="font-primary text-sm lg:text-base"
                ></div>
              </div>
            )}
            {cta && (
              <button
                className="font-primary self-end flex gap-1 items-center border-b border-solid "
                onClick={() => setIsOpen('0')}
              >
                {cta.text} <Arrow role="presentation" className="stroke-black scale-75" />
              </button>
            )}
          </div>
        </div>
        {mediaSection &&
          mediaSection.map(
            (mediaRow) =>
              mediaRow.images?.length === 5 && (
                <div key={mediaRow.mediaAlignment} className="max-w-[1304px] m-auto ">
                  <div className="hidden xl:grid grid-cols-[288px_minmax(0,_1fr)_minmax(0,_1fr)_392px] grid-rows-3 gap-6 px-6 md:px-10">
                    <div
                      className="relative col-span-3 row-span-2 w-[808px] cursor-pointer"
                      onClick={() => setIsOpen(String(0))}
                    >
                      <div className="absolute w-full h-full flex flex-col justify-end items-start pointer-events-none p-6">
                        {mediaRow.images[0].title && (
                          <div className="font-primary text-lg leading-6 font-semibold">{mediaRow.images[0].title}</div>
                        )}
                        {mediaRow.images[0].description && (
                          <div className="mt-2 font-primary text-base">{mediaRow.images[0].description}</div>
                        )}
                      </div>
                      <ResponsiveImage image={mediaRow.images[0]} widths={{ xl: 808 }} heights={{ xl: 453 }} />
                    </div>
                    <div className="relative w-[392px] cursor-pointer" onClick={() => setIsOpen(String(1))}>
                      <div className="absolute w-full h-full flex flex-col justify-end items-start pointer-events-none p-6">
                        {mediaRow.images[1].title && (
                          <div className="font-primary text-lg leading-6 font-semibold">{mediaRow.images[1].title}</div>
                        )}
                        {mediaRow.images[1].description && (
                          <div className="mt-2 font-primary text-base">{mediaRow.images[1].description}</div>
                        )}
                      </div>
                      <ResponsiveImage image={mediaRow.images[1]} widths={{ xl: 392 }} heights={{ xl: 220 }} />
                    </div>
                    <div className="relative row-span-2 w-[392px] cursor-pointer" onClick={() => setIsOpen(String(4))}>
                      <div className="absolute w-full h-full flex flex-col justify-end items-start pointer-events-none p-6">
                        {mediaRow.images[4].title && (
                          <div className="font-primary text-lg leading-6 font-semibold">{mediaRow.images[4].title}</div>
                        )}
                        {mediaRow.images[4].description && (
                          <div className="mt-2 font-primary text-base">{mediaRow.images[4].description}</div>
                        )}
                      </div>
                      <ResponsiveImage image={mediaRow.images[4]} widths={{ xl: 392 }} heights={{ xl: 523 }} />
                    </div>
                    <div className="relative w-[288px] cursor-pointer" onClick={() => setIsOpen(String(2))}>
                      <div className="absolute w-full h-full flex flex-col justify-end items-start pointer-events-none p-6">
                        {mediaRow.images[2].title && (
                          <div className="font-primary text-lg leading-6 font-semibold">{mediaRow.images[2].title}</div>
                        )}
                        {mediaRow.images[2].description && (
                          <div className="mt-2 font-primary text-base">{mediaRow.images[2].description}</div>
                        )}
                      </div>
                      <ResponsiveImage image={mediaRow.images[2]} widths={{ xl: 288 }} heights={{ xl: 286 }} />
                    </div>
                    <div className="relative col-span-2 w-[496px] cursor-pointer" onClick={() => setIsOpen(String(3))}>
                      <div className="absolute w-full h-full flex flex-col justify-end items-start pointer-events-none p-6">
                        {mediaRow.images[3].title && (
                          <div className="font-primary text-lg leading-6 font-semibold">{mediaRow.images[3].title}</div>
                        )}
                        {mediaRow.images[3].description && (
                          <div className="mt-2 font-primary text-base">{mediaRow.images[3].description}</div>
                        )}
                      </div>
                      <ResponsiveImage image={mediaRow.images[3]} widths={{ xl: 496 }} heights={{ xl: 285 }} />
                    </div>
                  </div>
                  <div className="flex xl:hidden">
                    <div className="w-full pl-6 md:pl-10 md:m-auto ">
                      <Flicking
                        ref={carousel}
                        align="prev"
                        useResizeObserver={true}
                        horizontal={true}
                        circular={true}
                        circularFallback="bound"
                        className="pb-[74px]"
                      >
                        {mediaRow.images.map((image, index) => (
                          <div key={index} className="flex flex-col w-[270px] md:w-[569px] mx-3">
                            <div
                              className="h-[151px] md:h-[320px] cursor-pointer"
                              onClick={() => setIsOpen(String(index))}
                            >
                              <div className="absolute w-full h-full flex flex-col justify-end items-start pointer-events-none p-6">
                                {image.title && (
                                  <div className="font-primary text-xs md:text-sm font-semibold">{image.title}</div>
                                )}
                                {image.description && (
                                  <div className="hidden md:block mt-2 font-primary text-xs">{image.description}</div>
                                )}
                              </div>
                              <ResponsiveImage
                                image={image}
                                widths={{ xs: 270, sm: 270, md: 569, lg: 569 }}
                                heights={{ xs: 151, sm: 151, md: 320, lg: 320 }}
                              />
                            </div>
                          </div>
                        ))}
                        <ViewportSlot>
                          <div className="flicking-pagination !w-fit [&_.flicking-pagination-bullet]:bg-grey4 [&_.flicking-pagination-bullet.flicking-pagination-bullet-active]:bg-grey1"></div>
                        </ViewportSlot>
                      </Flicking>
                      <div className="flex gap-3 justify-end mr-8 -mt-8">
                        <button
                          className="btn text border circle p-0 w-10 h-10 z-10"
                          onClick={move}
                          aria-label="Prevues"
                        >
                          <Arrow role="presentation" className="rotate-180" />
                        </button>
                        <button
                          className="btn text border circle p-0 w-10 h-10 z-10"
                          onClick={() => move(1)}
                          aria-label="Next"
                        >
                          <Arrow role="presentation" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ),
          )}
      </ModuleBase>
    </>
  );
};
export default MediaMasonryGridModule;
