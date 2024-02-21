import classnames from "classnames";

export const headerWrapper = (props: any) => ({
  className: classnames(["", props.className]),
});

export const headerContent = {
  className: "header-content",
};

export const headerLogo = {
  className: "header-logo",
};
