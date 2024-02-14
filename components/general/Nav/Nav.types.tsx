import { ReactNode } from "react";
import { type VariantProps } from "class-variance-authority";
import {
  StackProps,
  BoxProps,
  ButtonProps,
  TextProps,
} from "../../../components";
import { nav } from "./Nav.styles";

export interface NavProps extends StackProps, VariantProps<typeof nav> {
  data?: any;
  itemIcons?: {
    iconPre?: ReactNode;
    iconPost?: ReactNode;
    subIconPre?: ReactNode;
    subIconPost?: ReactNode;
  };
  direction?: "row" | "column";
  attach?: string | string[];
  isActive?: boolean;
  itemsPerColumn?: number;
  displayName?: string;
  navItemAnimations?: any;
  navPanelAnimations?: any;
  navPanelWrapperAnimations?: any;
  navImageAnimations?: any;
  textStyles?: any;
}

export type NavVars = (
  variant: NavProps["variant"],
  persistOn: NavProps["persistOn"],
  attach: NavProps["attach"],
  className: NavProps["className"],
) => Record<any, any>;

export interface NavPanelProps extends StackProps {
  data: any;
  itemIcons?: NavProps["itemIcons"];
  isActive?: boolean;
  itemIndex?: number;
  level?: number;
  attach?: string;
  image?: any;
}

type NavItem = BoxProps & ButtonProps;

export interface NavItemProps extends NavItem {
  data: any;
  itemIcons?: NavProps["itemIcons"];
  collapseSiblings?: () => void;
  isActive?: boolean;
  itemIndex?: number;
  level?: number;
}

export type NavInteractionType = "click" | "hover" | "hoverOut";
