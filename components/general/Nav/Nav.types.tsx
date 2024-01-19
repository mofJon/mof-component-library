import { ReactNode } from "react";
import { type VariantProps } from "class-variance-authority";
import { StackProps, BoxProps, ButtonProps } from "@/components";
import { nav } from "./Nav.styles";

export interface NavProps extends StackProps, VariantProps<typeof nav> {
  data?: any;
  itemIcons?: {
    iconPre?: ReactNode;
    iconPost?: ReactNode;
  };
  direction?: "row" | "column";
  attach?: string | string[];
  isActive?: boolean;
  itemsPerColumn?: number;
  displayName?: string;
}

export type NavVars = (
  variant: NavProps["variant"],
  persistOn: NavProps["persistOn"],
  attach: NavProps["attach"],
  className: NavProps["className"],
) => Record<any, any>;

export interface NavPanelProps extends StackProps {
  data: any;
  itemIcons?: {
    iconPre?: ReactNode;
    iconPost?: ReactNode;
  };
  isActive?: boolean;
  itemIndex?: number;
  level?: number;
}

type NavItem = BoxProps & ButtonProps;

export interface NavItemProps extends NavItem {
  data: any;
  itemIcons?: {
    iconPre?: ReactNode;
    iconPost?: ReactNode;
  };
  isActive?: boolean;
  itemIndex?: number;
  level?: number;
}
