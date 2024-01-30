import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ResponsiveImage, Link, FormControl } from "../../../components";
import classNames from "classnames";
import React, { useState, useEffect } from "react";
import ThemeSelector from "../../../components/themeSelector/ThemeSelector";

const Header = ({ header, metadata }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [BGColor, setBGColor] = useState(false);
  const [openTheme, setOpenTheme] = useState(false);

  const languageChange = (event) => {
    const lang = metadata.languages.find(
      (item) => item.language === event.target.value,
    );
    router.push(lang.languageUrl, lang.languageUrl, { locale: lang.language });
  };

  useEffect(() => {
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    setBGColor(window.scrollY > window.innerHeight);
  };

  return (
    <div
      className={classNames(
        "fixed top-0 z-20 w-full transition-colors duration-1000 backdrop-blur-[21px]",
        {
          "bg-white": BGColor,
        },
      )}
    >
      <div className="container flex justify-between items-center py-6 font-medium font-primary text-lightColor px-0">
        <div className="w-2/5 flex">
          {header.mainNavItems.map((nav, index) => (
            <Link
              className={classNames(
                "hidden sm:block cursor-pointer hover:text-darkerColor inline-flex uppercase duration-200 tracking-8 leading-4 justify-center",
                "items-center bg-linen py-3 sm:py-2 px-4 rounded-full mr-14 sm:mr-0",
              )}
              key={index}
              link={nav.navItemLink}
            >
              {nav.navItemText}
            </Link>
          ))}
        </div>
        <div className="w-1/5 flex justify-center">
          <div className="w-20 h-6">
            <Link link={{ href: "/" }}>
              <ResponsiveImage
                image={header.logo}
                widths={{ xs: 80 }}
                heights={{ xs: 24 }}
                dataNotLazy
              />
            </Link>
          </div>
        </div>
        <div className="w-2/5 flex justify-end">
          <div
            className={classNames(
              "cursor-pointer inline-flex uppercase duration-200 tracking-8 leading-4",
              "bg-linen py-3 sm:py-2 px-4 rounded-full sm:mr-0",
            )}
          >
            <button
              onClick={() => setOpenTheme(true)}
              className={classNames("btn primary cursor-pointer rounded-full ")}
              aria-label="Menu"
            >
              <span>Change Theme</span>
            </button>
          </div>
          <div
            className={classNames(
              "hidden sm:block w-40 cursor-pointer inline-flex uppercase duration-200 tracking-8 leading-4 justify-right",
              "items-center bg-linen py-3 sm:py-2 px-4 rounded-full text-baseColor mr-14 sm:mr-0",
            )}
          >
            <FormControl
              type="select"
              required
              name="language"
              value={router.locale.toLowerCase()}
              options={metadata.languages.map((item) => ({
                label: t(`language.$${item.language.replace("-", "")}`),
                value: item.language,
              }))}
              onChange={languageChange}
            />
          </div>
        </div>
      </div>
      <ThemeSelector
        openTheme={openTheme}
        onThemeClose={() => setOpenTheme(false)}
      />
    </div>
  );
};

export default Header;
