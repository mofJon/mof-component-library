import classNames from "classnames";
// @ts-ignore - grabs variables from the root project's tailwind config
import twConfig from "/tailwind.config.ts";
const { CardListingGrid } = twConfig?.theme?.extend?.modules;
let isAnimated = false;
let cardAnimations = {};
let cardHolderAnims = {};

if (CardListingGrid) {
  isAnimated = CardListingGrid.animated || false;
  cardAnimations = CardListingGrid?.cardAnims || {};
  cardHolderAnims = CardListingGrid?.cardHolderAnims || {};
}

export const moduleWrapper = (props: any) => ({
  className: classNames(["card-listing", props.className]),
});

export const cardMotion = {
  disabled: !isAnimated,
  ...cardHolderAnims,
};

export const cardExit = {
  ...cardAnimations,
};

export const cardHolder = {
  className: "card-holder",
};

export const cardWrapper = {
  size: null,
};
