import React, { useState, useEffect, useRef } from "react";
import ArrowForward from "../../../assets/icons/chevron.svg";
import PropTypes from "prop-types";
import classNames from "classnames";

const PopoverMenu = ({
  title,
  open,
  placement,
  onOpen,
  onClose,
  children,
  className,
  ...props
}) => {
  const [_open, set_open] = useState();
  const wrapper = useRef();

  useEffect(() => {
    setOpenValue(open);
  }, [open]);

  useEffect(() => {
    if (_open) {
      setTimeout(() => {
        window.addEventListener("click", closeIfClickedOutside);
      }, 0);

      onOpen && onOpen();
    } else {
      window.removeEventListener("click", closeIfClickedOutside);
      onClose && onClose();
    }
    return () => {
      window.removeEventListener("click", closeIfClickedOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_open]);

  const closeIfClickedOutside = (e) => {
    let inside = false;
    e.composedPath().forEach((element) => {
      if (wrapper.current === element) {
        inside = true;
      }
    });

    if (!inside) {
      set_open(false);
    }
  };

  const setOpenValue = (newValue) => {
    set_open(newValue);
  };

  return (
    <div
      ref={wrapper}
      className={classNames("relative z-0", _open && "open", className)}
      {...props}
    >
      <button
        type="button"
        className={classNames(
          "main-button flex items-center w-full justify-between bg-white border border-grey5 px-4 py-3",
          _open &&
            (placement === "Top"
              ? "border-t-transparent"
              : "border-b-transparent"),
        )}
        id="menu-button"
        onClick={() => setOpenValue(!_open)}
      >
        <span className="popover-title">{title}</span>
        <span className="scale-50">
          <ArrowForward
            role="presentation"
            className={classNames(
              "stroke-black  ml-4 transition",
              _open
                ? placement === "Top"
                  ? "rotate-90"
                  : "-rotate-90"
                : placement === "Top"
                  ? "-rotate-90"
                  : "rotate-90",
            )}
          />
        </span>
      </button>

      <div
        className={classNames(
          "content absolute left-0 z-10 w-full bg-white border transform border-grey5 focus:outline-none transition",
          _open ? "block opacity-100 scale-100" : "hidden opacity-0 scale-0",
          placement === "Top"
            ? "bottom-full origin-bottom-right border-b-0"
            : "origin-top-right border-t-0",
        )}
        tabIndex="-1"
      >
        {children}
      </div>
    </div>
  );
};

PopoverMenu.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  placement: PropTypes.oneOf(["Top", "Bottom"]),
};

export default PopoverMenu;
