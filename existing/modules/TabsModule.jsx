import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { ModuleBase, CMSModule } from 'components';
import { openLink, useLayoutEffect } from 'utils';
import classnames from 'classnames';
import { isColorDark } from 'utils';

const TabsModule = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [underlineStyle, setUnderlineStyle] = useState({});

  const tabsContainer = useRef();
  const router = useRouter();

  useEffect(() => {
    if (data?.tabs && activeIndex === null) {
      let newActiveIndex = null;
      const hash = router.asPath.split('#')[1];

      if (hash && hash.startsWith('t') && hash.length > 4) {
        const mid = hash.substring(1, 4);
        if (mid === data.moduleId.substring(0, 3)) {
          const tabIndex = hash.substring(4);
          if (!isNaN(tabIndex)) {
            newActiveIndex = Number(tabIndex);
          }
        }
      }

      if (newActiveIndex === null) {
        for (let i = 0; i < data.tabs.length; i++) {
          const tab = data.tabs[i];
          if (!tab.tabLink && tab.tabModules) {
            newActiveIndex = i;
            break;
          }
        }
      }
      setActiveIndex(newActiveIndex);
    }
  }, [data, router.asPath, activeIndex]);

  useEffect(() => {
    moveUnderline();
  }, [activeIndex]);

  useLayoutEffect(() => {
    window.addEventListener('resize', moveUnderline);
    return () => window.removeEventListener('resize', moveUnderline);
  }, []);

  const moveUnderline = () => {
    setTimeout(() => {
      if (tabsContainer?.current?.children) {
        Array.from(tabsContainer.current.children).forEach((element) => {
          if (element && element.classList && element.classList.contains('active-tab')) {
            setUnderlineStyle({ left: `${element.offsetLeft}px`, width: `${element.offsetWidth}px` });
          }
        });
      }
    }, 0);
  };

  const tabClick = (tab, index) => {
    if (tab.tabLink) {
      openLink(router, tab.tabLink);
    } else {
      router.replace({
        hash: `t${data.moduleId.substring(0, 3)}${index}`,
      });
      setActiveIndex(index);
    }
  };

  return (
    <ModuleBase data={data}>
      <div
        className={`flex flex-wrap justify-between pb-16 md:pb-[55px] overflow-x-auto overflow-y-hidden scrollbar-hide
          ${isColorDark(data.backgroundColour) ? 'text-white' : 'text-black'}`}
      >
        {data.tabs && (
          <div
            className="container w-auto"
            // @touchmove.stop
          >
            <div ref={tabsContainer} className="relative flex m-auto h-16 sm:h-20 w-max md:w-full">
              {data.tabs.map((tab, index) => (
                <div
                  key={index}
                  className={classnames(
                    'font-primary text-button-default tracking-widest cursor-pointer px-6 flex items-center transition-colors text-center whitespace-nowrap lg:whitespace-normal border-b-[3px] border-grey4',
                    activeIndex === index
                      ? 'active-tab text-stoneGrey'
                      : isColorDark(data.backgroundColour)
                        ? 'text-white/75'
                        : 'text-black/75',
                  )}
                  onClick={() => tabClick(tab, index)}
                  role="button"
                >
                  {tab.tabTitle}
                </div>
              ))}

              <div
                className={`absolute bottom-0 h-[3px] transition-all duration-500 ease-out ${
                  isColorDark(data.backgroundColour) ? 'bg-white' : 'bg-black'
                }`}
                style={underlineStyle}
              />
            </div>
          </div>
        )}
      </div>
      <div className="relative">
        {data.tabs &&
          data.tabs.map((tab, index) => (
            <div
              key={index}
              className={`pt-0 pb-0 top-0 transition-opacity duration-500 
              ${activeIndex === index ? 'relative opacity-100' : 'absolute overflow-hidden h-0 w-full opacity-0'}`}
            >
              {tab.tabModules.map((module) => (
                <CMSModule key={module.moduleId} module={module} />
              ))}
            </div>
          ))}
      </div>
    </ModuleBase>
  );
};

export default TabsModule;
