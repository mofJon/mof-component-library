import React, { useRef, useEffect } from "react";
import { ModuleBase, Link } from "components";
import Flicking, { FlickingError, ViewportSlot } from "@egjs/react-flicking";
import { Pagination, AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";
import "@egjs/react-flicking/dist/flicking.css";
import Arrow from "assets/arrow.svg";
import QuoteSectionContent from "../../../components/cards/QuoteSectionContent";

const QuoteCarouselModule = ({ data }) => {
  const carousel = useRef();

  useEffect(() => {
    carousel.current.on("ready", (e) => {
      e.currentTarget.addPlugins(
        new Pagination({
          type: "bullet",
          renderBullet: (className) =>
            `<span class="${className}" role="button"></span>`,
        }),
      );
      if (data?.autoPlay) {
        e.currentTarget.addPlugins(
          new AutoPlay({
            duration: 2000,
            direction: "NEXT",
            stopOnHover: false,
          }),
        );
      }
    });
  }, [data?.autoPlay]);

  const move = async (dir) => {
    try {
      if (dir > 0) {
        await carousel.current.next();
      } else {
        await carousel.current.prev();
      }
    } catch (err) {
      if (!(err instanceof FlickingError)) {
        throw new Error(err);
      }
    }
  };

  return (
    <ModuleBase data={data} className="relative">
      <div className="max-w-[1304px] m-auto px-6 md:px-10">
        <Flicking
          ref={carousel}
          align="center"
          useResizeObserver={true}
          horizontal={true}
          circular={true}
        >
          {data.quotes.map((slide, index) => (
            <div key={index} className="w-full mx-10">
              <QuoteSectionContent
                data={{ ...slide }}
                className="select-none"
                showBottomSpacing
              />
            </div>
          ))}
          <ViewportSlot>
            <div className="flicking-pagination relative !w-fit [&_.flicking-pagination-bullet]:bg-grey4 [&_.flicking-pagination-bullet.flicking-pagination-bullet-active]:bg-grey1 pb-[5px] md:pb-0"></div>
          </ViewportSlot>
        </Flicking>
        <div className="flex gap-3 justify-end -mt-10">
          <button
            className="btn text border circle p-0 w-10 h-10 sm:w-12 sm:h-12 z-10"
            onClick={move}
            aria-label="Prevues"
          >
            <Arrow className="rotate-180" />
          </button>

          <button
            className="btn text border circle p-0 w-10 h-10 sm:w-12 sm:h-12 z-10"
            onClick={() => move(1)}
            aria-label="Next"
          >
            <Arrow />
          </button>
        </div>
        <div className="button-wrapper text-right mt-10">
          {data.primaryCTA && (
            <Link
              className="btn primary self-end first:mr-4 text-sm h-10 px-2 md:text-base md:h-12 md:px-2.5"
              link={data.primaryCTA}
            />
          )}

          {data.secondaryCTA && (
            <Link
              className="btn secondary self-end text-sm h-10 px-2 md:text-base md:h-12 md:px-2.5"
              link={data.secondaryCTA}
            />
          )}
        </div>
      </div>
    </ModuleBase>
  );
};
export default QuoteCarouselModule;
