import React, { useEffect, useState } from "react";
import {
  ModuleBase,
  HeadingTag,
  PreHeading,
  ResponsiveImage,
  Link,
} from "components";
import Arrow from "assets/arrow.svg";
import { MediaLightboxCarousel } from "../../../components";

const MediaColumnsLandscapeModule = ({ data }) => {
  const {
    headingTitle,
    preHeading,
    description,
    cta,
    mediaItems,
    numberOfItems,
  } = data || {};
  const [isOpen, setIsOpen] = useState(null);
  const [colNum, setColNum] = useState(2);
  const [widthClasses, setWidthClasses] = useState(
    `max-w-full w-[332px] md:w-[332px] lg:w-[472px] xl:w-[600px]`,
  );
  const [mediaSize, setMediaSize] = useState({
    widths: { xs: 332, sm: 332, md: 332, lg: 472, xl: 600, xxl: 600 },
    heights: { xs: 186, sm: 186, md: 186, lg: 265, xl: 337, xxl: 337 },
  });

  useEffect(() => {
    if (
      numberOfItems === "One" ||
      numberOfItems === "Three" ||
      numberOfItems === "Four"
    ) {
      let widths = {};
      let heights = {};
      if (numberOfItems === "One") {
        setColNum(1);
        widths = { xs: 332, sm: 332, md: 688, lg: 688, xl: 808, xxl: 808 };
        heights = { xs: 186, sm: 186, md: 387, lg: 387, xl: 454, xxl: 454 };
        setWidthClasses(
          `max-w-full w-[332px] md:w-[688px] lg:w-[808px] xl:w-[808px]`,
        );
      } else if (numberOfItems === "Three") {
        setColNum(3);
        widths = { xs: 332, sm: 332, md: 213, lg: 306, xl: 392, xxl: 392 };
        heights = { xs: 186, sm: 186, md: 120, lg: 172, xl: 220, xxl: 220 };
        setWidthClasses(
          `max-w-full w-[332px] md:w-[213px] lg:w-[306px] xl:w-[392px]`,
        );
      } else if (numberOfItems === "Four") {
        setColNum(4);
        widths = { xs: 332, sm: 332, md: 154, lg: 224, xl: 288, xxl: 288 };
        heights = { xs: 186, sm: 186, md: 86, lg: 126, xl: 162, xxl: 162 };
        setWidthClasses(
          `max-w-full w-[332px] md:w-[154px] lg:w-[224px] xl:w-[288px]`,
        );
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
        imageWidths={{ xs: 332, sm: 332, md: 332, lg: 600, xl: 850, xxl: 850 }}
        imageHeights={{ xs: 186, sm: 186, md: 186, lg: 337, xl: 478, xxl: 478 }}
        imageContainerWidthClassName="w-[332px] md:w-[332px] lg:w-[600px] lg:w-[850px]"
        imageContainerHeightClassName="h-[186px] md:h-[186px] lg:h-[337px] lg:h-[478px]"
      />

      <ModuleBase data={data} className="max-w-[1304px] m-auto px-6 md:px-10">
        <div className={`md:flex gap-2 ${description ? "min-h-[180px]" : ""}`}>
          <div className="title-wrapper w-full">
            {preHeading && (
              <PreHeading className="pre-heading uppercase font-primary text-small md:text-base font-semibold text-subheading">
                {preHeading}
              </PreHeading>
            )}
            {headingTitle && (
              <HeadingTag
                data={headingTitle}
                className="text-h3 font-primary mt-2 md:mt-4 mb-6"
              />
            )}
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
              <Link
                className="font-primary self-end flex gap-1 items-center border-b border-solid "
                link={cta}
              >
                {cta.text}{" "}
                <Arrow role="presentation" className="stroke-black scale-75" />
              </Link>
            )}
          </div>
        </div>
        <div
          className={`grid grid-cols-1 ${
            colNum === 1
              ? "md:grid-cols-1"
              : colNum === 2
                ? "md:grid-cols-2"
                : colNum === 3
                  ? "md:grid-cols-3"
                  : "md:grid-cols-4"
          } md:gap-6 m-auto mt-10 w-fit justify-items-center`}
        >
          {mediaItems.map((slide, index) => (
            <div key={index} className={`m-auto mb-10 md:m-0 ${widthClasses}`}>
              <div
                className="mb-6 lg:mb-10 cursor-pointer"
                onClick={() => setIsOpen(String(index))}
              >
                <ResponsiveImage
                  image={slide}
                  widths={mediaSize.widths}
                  heights={mediaSize.heights}
                />
              </div>
              {slide.title && (
                <div className="text-subheading mb-2">{slide.title}</div>
              )}
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
export default MediaColumnsLandscapeModule;
