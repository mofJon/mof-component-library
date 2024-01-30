import React from "react";
import { HeadingTag, ModuleBase, PreHeading, Link } from "../../../components";

const CTabreakModule = ({ data }) => {
  return (
    <ModuleBase data={data} className="container text-black font-primary">
      <div className="flex flex-col lg:flex-row gap-10 lg:justify-between">
        <div className="flex flex-col gap-4 lg:w-[600px]">
          {data.preHeading && (
            <PreHeading className="uppercase text-subheading text-grey3 md:text-paragraph">
              {data.preHeading}
            </PreHeading>
          )}
          {data.headingTitle && (
            <HeadingTag
              data={data.headingTitle}
              className="text-h2"
            ></HeadingTag>
          )}
          {data.text && (
            <div dangerouslySetInnerHTML={{ __html: data.text }}></div>
          )}
        </div>
        {(data.primaryCTA || data.secondaryCTA) && (
          <div className="button-wrapper flex flex-row gap-4 justify-end lg:items-center">
            <Link className="btn primary" link={data.primaryCTA} />
            <Link className="btn secondary" link={data.secondaryCTA} />
          </div>
        )}
      </div>
    </ModuleBase>
  );
};

export default CTabreakModule;
