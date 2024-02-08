import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Link } from "components";
import classNames from "classnames";
import ArrowForward from "assets/arrowForward.svg";
import classnames from "classnames";
import Close from "assets/arrowForward.svg";

const ModulesNavigation = ({ data, onToggleModelNav, toggleModelNav }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndexList, setActiveIndexList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (data.navItems && activeIndex === null) {
      let newActiveIndex = null;
      const hash = router.asPath.split("#")[1];

      if (hash && hash.startsWith("t") && hash.length > 4) {
        const mid = hash.substring(1, 4);
        if (mid === data.moduleId.substring(0, 3)) {
          const tabIndex = hash.substring(4);
          if (!isNaN(tabIndex)) {
            newActiveIndex = Number(tabIndex);
          }
        }
      }

      if (newActiveIndex === null) {
        for (let i = 0; i < data.navItems.length; i++) {
          const tab = data.navItems[i];
          if (!tab.navLink && tab.tabModules) {
            newActiveIndex = i;
            break;
          }
        }
      }
      setActiveIndex(newActiveIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, router.asPath, activeIndex]);

  const close = () => {
    onToggleModelNav();
  };

  if (!data?.navItems) {
    return null;
  }

  const toggle = (index) => {
    let newArray = [...activeIndexList];
    if (newArray.includes(index)) {
      newArray = newArray.filter((i) => i !== index);
    } else {
      if (data.allowOpeningMultiple) {
        newArray = [index, ...newArray];
      } else {
        newArray = [index];
      }
    }
    setActiveIndexList(newArray);
  };

  const buildNavItems = (items) => {
    return items.map((nav, index) => (
      <div key={index}>
        <Link
          className={linkClass}
          link={{ href: nav.navLink, text: nav.navTitle }}
        />
        <div className="px-4">
          {nav.navItems && nav.navItems.length > 0
            ? buildNavItems(nav.navItems)
            : ""}
        </div>
      </div>
    ));
  };

  const linkClass = classNames(
    "py-3 md:py-2 text-lighterColor hover:color-from-bg [&_svg]:hover:stroke-linen  cursor-pointer flex items-center justify-between duration-500 [&_svg]:duration-500",
    "md:text-medium-regular md:text-lightColor/50 [&_svg]:stroke-linen [&_svg]:md:stroke-linen/50",
  );

  return (
    <div
      className={classNames(
        "bg-[url('https://picsum.photos/id/885/1700/1200')] bg-cover h-full ",
      )}
    >
      <div
        className={classNames(
          toggleModelNav
            ? "backdrop-blur-sm bg-white/20 px-6"
            : "backdrop-blur-[21px] bg-white/25",
          " w-full h-full ",
          "pt-26 pb-16 md:pt-36 pointer-events-auto",
        )}
      >
        <div
          className={classNames(
            "!bg-baseColor absolute z-20 right-0 top-20 pt-7 flex justify-between",
          )}
        >
          <button
            onClick={close}
            className="btn primary z-20 !px-4 !border-0 !bg-baseColor hover:!bg-white/20"
            aria-label="Close"
          >
            <Close className="!stroke-linen" />
          </button>
        </div>
        {toggleModelNav && (
          <div className="overflow-y-auto flex flex-col gap-2 md:gap-8 h-full">
            {data.navItems && (
              <div className="text-paragraph text-lighterColor font-medium">
                {data.navItems.map((element, index) => (
                  <div
                    key={index}
                    className="border border-grey3 border-x-0 border-t-0 border-black/50"
                  >
                    <button
                      type="button"
                      className="flex items-center justify-between w-full pt-6 pb-8 lg:py-6 text-left pr-3 
                  font-primary text-[1.125rem] leading-[1.625rem] 
                  lg:text-[1.5rem] lg:leading-[2rem] text-lighterColor"
                      onClick={() => toggle(index)}
                    >
                      <span>{element.navTitle}</span>
                      <div className="ml-6">
                        <ArrowForward
                          className={classnames(
                            "scale-50 transition-transform duration-200",
                            "stroke-white",
                            activeIndexList.includes(index)
                              ? "-rotate-90"
                              : " rotate-90",
                          )}
                        />
                      </div>
                    </button>

                    <div
                      className={classnames(
                        "transition-all  overflow-hidden",
                        activeIndexList.includes(index)
                          ? "max-h-screen duration-500"
                          : "max-h-0 duration-150",
                      )}
                    >
                      {element.navItems && (
                        <div className="[&_p]:my-0 color-from-bg font-light font-secondary text-lightColor">
                          {buildNavItems(element.navItems)}
                        </div>
                      )}
                      <div className="h-6" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModulesNavigation;
