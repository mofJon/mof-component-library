import classnames from "classnames";
import Arrow from "../../assets/icons/chevron.svg";
import {
  navItemAnimations,
  navPanelAnimations,
  navPanelWrapperAnimations,
  navImageAnimations,
} from "../../theme/animations";
// @ts-ignore
import twConfig from "/tailwind.config.ts";

const theme: any = twConfig?.theme?.extend;
const navProps: any = theme?.modules?.header || {
  persistOn: "hover",
  variant: "primary",
  itemIcons: {
    iconPost: <Arrow />,
    subIconPost: <Arrow />,
  },
  navItemAnimations,
  navPanelAnimations,
  navPanelWrapperAnimations,
  navImageAnimations,
};

export const headerWrapper = (props: any) => ({
  className: classnames(["", props.className]),
});

export const headerContent = {
  className: "header-content",
};

export const navSettings: any = {
  ...navProps,
};
