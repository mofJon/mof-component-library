import { FC } from "react";
import { ModuleBase, Media, Carousel } from "../../components";
import { mediaCarousel } from "./MediaCarouselModule.styles";
// import { MediaCarouselModuleProps } from "./MediaCarouselModule.types";
import { useDimensions } from "../../hooks";

const MediaCarouselModule: FC<any> = ({
  animationStyle = "default",
  data,
  directionComponent,
  showPagination = true,
  paginationType = "dots",
  gap = 0,
  slideWidth,
  slideHeight,
  imageSizes,
  priority = false,
  variant = "primary",
  jaggedPercent = 1,
  ...props
}) => {
  const { screenWidth, screenHeight } = useDimensions();

  if (!data) return null;
  const slides = data?.mediaSlides || [];

  const mediaSlides = slides.map((val: any, i: number) => {
    return (
      <Media
        key={`media-carousel-${i}`}
        data={val}
        imageSizes={imageSizes}
        priority={priority}
      />
    );
  });

  return (
    <ModuleBase data={data}>
      <Carousel
        {...props}
        items={mediaSlides}
        animationStyle={animationStyle}
        variant={variant}
        controls={{
          show: directionComponent ? true : false,
          directionComponent: directionComponent ? directionComponent : null,
        }}
        crop={false}
        showPagination={showPagination}
        paginationType={paginationType}
        gap={gap}
        width={slideWidth || screenWidth * 0.8}
        height={slideHeight || screenHeight}
        jaggedPercent={jaggedPercent}
        {...mediaCarousel}
      />
    </ModuleBase>
  );
};

export default MediaCarouselModule;
