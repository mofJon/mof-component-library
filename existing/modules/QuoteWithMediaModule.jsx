import React from 'react';
import { ModuleBase, ResponsiveImage } from 'components';
import QuoteSectionContent from '@/components/cards/QuoteSectionContent';

const QuoteWithMediaModule = ({ data }) => {
  const textIsLeft = data.desktopLayoutAlignment === 'Left';
  const orderLast = data.mobileLayoutAlignment === 'Bottom' ? 'order-last' : '';
  const classNamesByPosition = textIsLeft ? `lg:order-last` : 'justify-end ';

  return (
    <ModuleBase data={data} className="relative">
      <div className="container md:px-10 xl:px-0 max-w-[1272px] grid grid-cols-1 lg:grid-cols-2 content-center">
        <div className={`flex w-full h-full lg:justify-center items-center  ${classNamesByPosition} ${orderLast}`}>
          <div
            className={`w-[327px] h-[434px] md:w-[332px] md:h-[441px] lg:w-[400px] lg:h-[533px] xl:w-[496px] xl:h-[659px] my-10 md:my-16`}
          >
            <ResponsiveImage
              image={data.media}
              widths={{ xs: 327, sm: 327, md: 332, lg: 400, xl: 496, xxl: 496 }}
              heights={{ xs: 434, sm: 434, md: 441, lg: 533, xl: 659, xxl: 659 }}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <QuoteSectionContent
          data={{ ...data }}
          className="select-none flex flex-col justify-center"
          quoteWrapperClassName=""
          authorSourceWrapperClassName="grow self-end text-right mt-6 lg:mt-10"
          buttonWrapperClassName="text-right mt-8"
        />
      </div>
    </ModuleBase>
  );
};
export default QuoteWithMediaModule;
