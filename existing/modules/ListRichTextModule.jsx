import { ModuleBase } from '@/components';
import { SectionContent } from '@/components';
import classNames from 'classnames';

const ListRichTextModule = ({ data }) => {
  return (
    <ModuleBase data={data}>
      <div
        className={`main-wrapper container text-black font-primary flex ${
          data.statsAlignment === 'Left' ? 'flex-col-reverse gap-10 lg:flex-row-reverse' : 'flex-col gap-14 lg:flex-row'
        } md:flex-col md:gap-10 lg:gap-32 lg:justify-between lg:items-center`}
      >
        <div
          className={`text-wrapper flex flex-col w-full ${
            data.statsAlignment === 'Left' ? 'md:items-end' : 'md:items-start'
          } lg:w-1/2 lg:items-start`}
        >
          <SectionContent
            data={data}
            // headingClassName="text-h2 font-[300]"
            //descriptionWrapperclassName="mt-4 text-small-paragraph md:text-paragraph color-from-bg"
            className={classNames(
              data.statsAlignment === 'Left'
                ? '[&_.button-wrapper]:md:justify-end'
                : '[&_.button-wrapper]:md:justify-start',
              '[&_.button-wrapper]:lg:justify-start [&_.pre-heading]:text-small-paragraph [&_.pre-heading]:lg:text-paragraph md:max-w-[451px] [&_.pre-heading]:my-0 [&_.pre-heading]:mb-4',
            )}
          />
        </div>
        <div
          className={`stats-wrapper flex flex-col gap-10 ${
            data.statsAlignment === 'Left' ? 'md:pl-[119px] lg:pl-20' : 'md:pl-[237px] lg:pl-0'
          } lg:w-1/2`}
        >
          {data.statElements.map((el, index) => (
            <div className={`stat-elemet flex flex-col gap-2`} key={index}>
              <div className="font-[400] lg:text-small-paragraph">{el.statisticsLabel}</div>
              <div className="text-h4">{el.statistics}</div>
            </div>
          ))}
        </div>
      </div>
    </ModuleBase>
  );
};

export default ListRichTextModule;
