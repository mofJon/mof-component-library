import { HeadingTag, Link, ModuleBase, PreHeading } from '@/components';

const RichTextColumnsModule = ({ data }) => {
  const colomnWidth = data.columns.length === 2 ? 'md:w-1/2 lg:w-1/2' : 'md:w-full lg:w-1/3';

  return (
    <ModuleBase data={data}>
      <div
        className={`main-wrapper flex flex-col py-10 md:px-10 lg:py-20 lg:px-[108px] ${
          data.columns.length === 2 ? 'md:flex-row' : 'md:flex-col'
        } lg:flex-row lg:w-full gap-6 md:gap-20 lg:gap-6 container`}
      >
        {data.columns.map((col, index) => (
          <div className={`column-wrapper font-primary text-black flex flex-col ${colomnWidth} h-full`} key={index}>
            <div className="heading flex flex-col gap-4">
              {col.preHeading && <PreHeading className="text-grey3 font-semibold">{col.preHeading}</PreHeading>}
              {col.headingTitle && (
                <HeadingTag
                  data={col.headingTitle}
                  className={col.headingTitle.htag !== '' ? `text-${col.headingTitle.htag}` : 'text-h2'}
                />
              )}
            </div>
            <div className="content my-10 md:mt-10 md:mb-[60px]">
              {col.content && (
                <div
                  dangerouslySetInnerHTML={{ __html: col.content }}
                  className={`copy flex flex-col gap-4 richtext-content text-small-paragraph md:text-paragraph [&_table]:mb-0 [&_table]:mt-6 md:[&_table]:mt-11 [&_table]:inline-table first:[&_tr]:font-semibold [&_ol]:pl-6 [&_ol]:m-0 [&_ul]:pl-6 [&_ul]:m-0 [&_p]:m-0`}
                ></div>
              )}
            </div>
            {(col.primaryCta || col.secondaryCta) && (
              <div className="cta-wrapper flex flex-col w-fit gap-4">
                <Link className="btn primary" link={col.primaryCta} />
                <Link className="btn secondary" link={col.secondaryCta} />
              </div>
            )}
          </div>
        ))}
      </div>
    </ModuleBase>
  );
};

export default RichTextColumnsModule;
