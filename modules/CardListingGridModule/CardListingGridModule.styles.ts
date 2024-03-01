import classNames from "classnames";

export const moduleWrapper = (props: any) => ({
  className: classNames(["card-listing", props.className]),
});

export const cardMotion = {
  // disabled: !isAnimated,
  // ...cardHolderAnims,
};

export const cardExit = {};

export const cardHolder = {
  className: "card-holder",
};

export const cardWrapper = {
  size: null,
};
