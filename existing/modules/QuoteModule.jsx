import React from "react";
import { ModuleBase } from "components";
import QuoteSectionContent from "../../../components/cards/QuoteSectionContent";

const QuoteModule = ({ data }) => {
  return (
    <ModuleBase data={data} className="relative">
      <div className="max-w-[1304px] m-auto px-6 md:px-10">
        <QuoteSectionContent data={{ ...data }} className="select-none" />
      </div>
    </ModuleBase>
  );
};
export default QuoteModule;
