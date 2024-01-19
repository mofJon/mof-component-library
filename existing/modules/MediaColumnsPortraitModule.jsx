import React, { useEffect, useState } from 'react';
import { ModuleBase, HeadingTag, PreHeading, ResponsiveImage, Link } from 'components';
import Arrow from 'assets/arrow.svg';
import { MediaLightboxCarousel } from '@/components';

const MediaColumnsPortraitModule = ({ data }) => {
  const { headingTitle, preHeading, description, cta, mediaItems, numberOfItems } = data || {};
  const [isOpen, setIsOpen] = useState(null);
  const [colNum, setColNum] = useState(2);
  const [widthClasses, setWidthClasses] = useState(`w-[327px] md:w-[332px] lg:w-[392px] xl:w-[392px]`);
  const [mediaSize, setMediaSize] = useState({
    widths: { xs: 327, sm: 327, md: 332, lg: 392, xl: 392, xxl: 392 },
    heights: { xs: 439, sm: 439, md: 443, lg: 524, xl: 524, xxl: 524 },
  });

  useEffect(() => {
    if (numberOfItems === 'One' || numberOfItems === 'Three' || numberOfItems === 'Four') {
      let widths = {};
      let heights = {};
      if (numberOfItems === 'One') {
        setColNum(1);
        widths = { xs: 327, sm: 327, md: 332, lg: 392, xl: 392, xxl: 392 };
        heights = { xs: 439, sm: 439, md: 443, lg: 524, xl: 524, xxl: 524 };
        setWidthClasses(`w-[327px] md:w-[332px] lg:w-[392px] xl:w-[392px]`);
      } else if (numberOfItems === 'Three') {
        setColNum(3);
        widths = { xs: 327, sm: 327, md: 220, lg: 310, xl: 392, xxl: 392 };
        heights = { xs: 439, sm: 439, md: 293, lg: 413, xl: 524, xxl: 524 };
        setWidthClasses(`w-[327px] md:w-[220px] lg:w-[310px] xl:w-[392px]`);
      } else if (numberOfItems === 'Four') {
        setColNum(4);
        widths = { xs: 327, sm: 327, md: 172, lg: 236, xl: 300, xxl: 364 };
        heights = { xs: 439, sm: 439, md: 229, lg: 315, xl: 400, xxl: 485 };
        setWidthClasses(`w-[327px] md:w-[172px] lg:w-[236px] xl:w-[300px]`);
      }
      setMediaSize({
        widths,
        heights,
      });
    }
  }, [numberOfItems]);

  return (
    <>
      <MediaLightboxCarousel
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        slides={mediaItems}
        imageWidths={{ xs: 327, sm: 327, md: 332, lg: 392, xl: 525, xxl: 525 }}
        imageHeights={{ xs: 439, sm: 439, md: 443, lg: 524, xl: 700, xxl: 700 }}
        imageContainerWidthClassName="w-[327px] md:w-[332px] lg:w-[392px] xl:w-[525px]"
        imageContainerHeightClassName="h-[439px] md:h-[443px] lg:h-[524px] xl:h-[700px]"
      />

      <ModuleBase data={data} className="max-w-[1304px] m-auto px-6 md:px-10">
        <div className={`md:flex gap-2 ${description ? 'min-h-[180px]' : ''}`}>
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
              <Link className="font-primary self-end flex gap-1 items-center border-b border-solid " link={cta}>
                {cta.text} <Arrow role="presentation" className="stroke-black scale-75" />
              </Link>
            )}
          </div>
        </div>
        <div
          className={`grid grid-cols-1 ${
            colNum === 1
              ? 'md:grid-cols-1'
              : colNum === 2
                ? 'md:grid-cols-2'
                : colNum === 3
                  ? 'md:grid-cols-3'
                  : 'md:grid-cols-4'
          } gap-6 m-auto mt-10 w-fit justify-items-center`}
        >
          {mediaItems.map((slide, index) => (
            <div key={index} className={`m-auto mb-10 md:m-0 ${widthClasses}`}>
              <div className="mb-6 lg:mb-10 cursor-pointer" onClick={() => setIsOpen(String(index))}>
                <ResponsiveImage image={slide} widths={mediaSize.widths} heights={mediaSize.heights} />
              </div>
              {slide.title && <div className="text-subheading mb-2">{slide.title}</div>}
              {slide.description && (
                <div
                  dangerouslySetInnerHTML={{ __html: slide.description }}
                  className="font-primary text-sm lg:text-base"
                ></div>
              )}
            </div>
          ))}
        </div>
      </ModuleBase>
    </>
  );
};
export default MediaColumnsPortraitModule;
