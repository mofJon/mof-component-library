import { ModuleBase, ResponsiveImage } from '@/components';
import SectionContent from '@/components/cards/SectionContent';

const BannerAndMediaModule = ({ data }) => {
  return (
    <ModuleBase data={data}>
      <div className={`main-data relative w-full h-[895px] md:h-[960px] lg:h-[650px] flex`}>
        <div
          className={`img-wrapper ${
            data.mobileMediaAlignment === 'Top' ? 'mt-auto' : 'mt-0'
          } w-full relative h-[627px] md:h-[580px] lg:h-[480px] lg:mt-0 aspect-3/4`}
        >
          <div className="absolute top-0 left-0 right-0 h-full w-full gradient-left-to-right" />
          <ResponsiveImage
            image={data.backgroundMedia}
            widths={{ xs: 375, md: 768, lg: 1440, xl: 1900 }}
            heights={{ xs: 627, md: 580, lg: 480, xl: 480 }}
            image-class=" h-full w-full object-cover"
            className=" h-full w-full object-cover"
          />
        </div>

        <div className="second-data-wrapper container w-full h-full absolute left-1/2 -translate-x-1/2 top-0">
          <div
            className={`secondary-img-wrapper absolute aspect-3/4 right-[24px] md:right-[159px] ${
              data.mobileMediaAlignment === 'Top' ? 'top-[48px] md:top-[109px]' : 'top-[480px] md:top-[411px]'
            } ${
              data.desktopMediaAlignment === 'Left' ? 'lg:left-[138px]' : 'lg:left-auto lg:right-[138px]'
            } h-full w-full max-w-[270px] max-h-[357px] md:max-w-[332px] md:max-h-[440px] lg:max-w-[392px] lg:max-h-[519px] lg:top-[88px]`}
          >
            <ResponsiveImage
              image={data.smallMedia}
              widths={{ xs: 270, md: 332, lg: 392 }}
              heights={{ xs: 357, md: 440, lg: 519 }}
              image-class=" h-full w-full object-cover"
              className=" h-full w-full object-cover"
            />
          </div>
          <div
            className={`text-wrapper font-primary lg:w-[45%] h-fit absolute ${
              data.mobileMediaAlignment === 'Top' ? 'bottom-[39px] md:bottom-[40px]' : 'top-[36px] md:top-[43px]'
            } ${
              data.desktopMediaAlignment === 'Left'
                ? 'lg:left-[630px] lg:right-[108px]'
                : 'lg:left-[108px] lg:right-[630px]'
            } lg:top-[10%]`}
          >
            <SectionContent
              data={data}
              //preHeadingClassName="text-paragraph"
              //headingClassName={data.headingTitle.htag !== '' ? `text-${data.headingTitle.htag}` : 'text-h2'}
              //descriptionWrapperclassName="mb-0"
              className="[&_.button-wrapper]:mt-10"
            />
          </div>
        </div>
      </div>
    </ModuleBase>
  );
};

export default BannerAndMediaModule;
