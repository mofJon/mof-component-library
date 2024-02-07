import classNames from "classnames";

export const moduleWrapper = (props: any) => ({
  className: classNames(["card-listing", props.className]),
});

export const cardHolder = {
  className: "card-holder",
};
