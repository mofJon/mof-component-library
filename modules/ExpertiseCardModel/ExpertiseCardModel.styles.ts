import classNames from "classnames";
import "./ExpertiseCardModel.css";

export const expertiseWrapper = (props: any, motion: any) => ({
  className: classNames("card-expertise-wrapper", [props?.className]),
  ...motion?.module,
});
