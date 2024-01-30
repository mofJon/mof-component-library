import { ModuleBase } from "../../../components";
import SectionContent from "../../../components/cards/SectionContent";

const HeadingSideModule = ({ data }) => {
  return (
    <ModuleBase data={data}>
      <div className="container">
        <SectionContent
          data={data}
          //preHeadingClassName="text-grey3 text-paragraph"
          //headingClassName="font-primary mb-2 text-h2 font-[300] md:mb-4"
          //descriptionClassName="font-[300] font-primary text-h6 mb-2 md:mb-6 lg:mb-10"
          className="items-start [&_.button-wrapper]:justify-end [&_.primary]:mr-4  [&_.subHeading]:font-[600] [&_.subHeading]:mb-4 [&_.subHeading]:inline-block lg:flex lg:flex-row [&_.title-wrapper]:lg:w-1/2 [&_.description-wrapper]:lg:w-1/2"
        />
      </div>
    </ModuleBase>
  );
};

export default HeadingSideModule;
