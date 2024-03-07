import { HeadingTag, Link, ModuleBase, PreHeading } from "../../../components";
import { useEffect } from "react";
const ContactsModule = ({ data }) => {
  const externalLinkClassName =
    "[&_.externalLink]:font-semibold [&_.externalLink]:mt-2 [&_.externalLink]:inline-flex [&_.externalLink]:w-[181px] [&_.externalLink]:items-center [&_.externalLink]:gap-2 [&_.externalLink]:after:content-externalLink [&_.externalLink]:after:h-6 [&_.externalLink]:text-[14px] [&_.externalLink]:leading-4 [&_.externalLink]:tracking-[0.015em]";
  const phoneClassName =
    "[&_.phone]:text-small-paragraph [&_.phone]:mt-2 lg:[&_.phone]:mt-0 [&_.phone>a]:border-b [&_.phone>a]:border-black [&_.phone]:before:content-phone [&_.phone]:before:h-6 [&_.phone]:inline-flex [&_.phone]:items-center [&_.phone]:gap-3";
  const emailClassName =
    "[&_.email]:text-small-paragraph [&_.email]:mt-2 lg:[&_.email]:mt-0 [&_.email>a]:border-b [&_.email>a]:border-black [&_.email]:before:content-mail [&_.email]:before:h-6 [&_.email]:inline-flex [&_.email]:items-center [&_.email]:gap-3";

  const setTargetForExternal = () => {
    const externals = document.querySelectorAll(".externalLink>a");

    externals.forEach((ext) => {
      ext.setAttribute("target", "_blank");
    });
  };

  useEffect(() => {
    setTargetForExternal();
  }, []);

  return (
    <ModuleBase data={data}>
      <div className="main-wrapper container font-primary">
        <div className="text-wrapper md:max-w-[600px]">
          {data.preHeading && (
            <PreHeading className="uppercase text-grey3 text-sunheading font-semibold">
              {data.preHeading}
            </PreHeading>
          )}
          {data.headingTitle && (
            <HeadingTag data={data.headingTitle} className="text-h2 my-4" />
          )}
          {data.description && (
            <div className="description">{data.description}</div>
          )}
        </div>
        <div className="contacts-wrapper mt-10 flex flex-col gap-12 lg:mt-20">
          <div className="primary-contacts-row flex flex-col gap-10 md:max-w-[400px] lg:flex-row lg:max-w-full">
            {data.primaryContactsRow.map((contact, index) => (
              <div
                className={`contact lg:w-96 ${externalLinkClassName} ${phoneClassName} ${emailClassName}`}
                key={index}
              >
                <div className="contact-text-wrapper">
                  {contact.headingTitle && (
                    <HeadingTag
                      data={contact.headingTitle}
                      className="text-h6 mb-2"
                    />
                  )}
                  {contact.description && (
                    <div
                      className="contact-description"
                      dangerouslySetInnerHTML={{ __html: contact.description }}
                    ></div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="secondary-contacts-row flex flex-col gap-10 md:max-w-[332px] lg:flex-row lg:gap-6 lg:max-w-full">
            {data.secondaryContactsRow.map((contact, index) => (
              <div
                className={`contact lg:w-96 ${externalLinkClassName} ${phoneClassName} ${emailClassName}`}
                key={index}
              >
                <div className="contact-text-wrapper">
                  {contact.headingTitle && (
                    <HeadingTag
                      data={contact.headingTitle}
                      className="text-h6 mb-2"
                    />
                  )}
                  {contact.description && (
                    <div
                      className="contact-description lg:[&_p]:flex lg:[&_p]:flex-wrap"
                      dangerouslySetInnerHTML={{ __html: contact.description }}
                    ></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {(data.primaryCTA || data.secondaryCTA) && (
          <div className="CTA-wrapper flex flex-row justify-end gap-4 mt-20">
            <Link className="btn primary" link={data.primaryCTA} />
            <Link className="btn secondary" link={data.secondaryCTA} />
          </div>
        )}
      </div>
    </ModuleBase>
  );
};

export default ContactsModule;
