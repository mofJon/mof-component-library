import { ModuleBase, ResponsiveImage } from '@/components';
import SectionContent from '@/components/cards/SectionContent';

const IconListWithRichTextModule = ({ data }) => {
  const { desktopLayoutAlignment, mobileLayoutAlignment, iconListElements } = data;

  return (
    <ModuleBase data={data} className="container font-primary text-black">
      <div
        className={`flex   lg:items-center ${
          mobileLayoutAlignment === 'Top'
            ? 'flex-col gap-14 md:gap-20 lg:gap-32'
            : 'flex-col-reverse gap-1 md:gap-8 lg:gap-32'
        } lg:${desktopLayoutAlignment === 'Left' ? 'flex-row' : 'flex-row-reverse'}`}
      >
        <SectionContent
          data={data}
          //preHeadingClassName="text-grey3 text-paragraph md:mb-2"
          //headingClassName="font-primary text-h2 font-[300] mb-4"
          //descriptionClassName="font-[300] font-primary paragraph"
          className="items-start lg:w-[70%] [&_.primary]:mr-4 [&_.description-wrapper]:mb-0 [&_.subHeading]:font-[600] [&_.subHeading]:mb-4 [&_.subHeading]:inline-block lg:max-w-2xl"
        />

        <div className={`w-full lg:w-[46%] h-fit flex flex-wrap `}>
          {iconListElements.map((iconItem, iconIndex) => (
            <div key={iconIndex} className={`icon-item w-1/2 h-fit mb-6 last:mb-0 flex items-center`}>
              <div className={`icon mr-[15px] w-[18px] h-[18px] `}>
                <ResponsiveImage
                  image={iconItem.logo}
                  widths={{ xs: 18, sm: 18, md: 18, lg: 18, xl: 18, xxl: 18 }}
                  heights={{ xs: 18, sm: 18, md: 18, lg: 18, xl: 18, xxl: 18 }}
                  image-class="h-full w-full object-cover"
                  className=" h-full w-full object-cover"
                />
              </div>

              <div className="text">
                <p className="text-paragraph font-primary font-normal">{iconItem.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ModuleBase>
  );
};

export default IconListWithRichTextModule;
