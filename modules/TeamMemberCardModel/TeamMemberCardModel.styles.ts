import classNames from "classnames";
import "./TeamMemberCardModel.css";

export const teamMemberWrapper = (props: any, motion: any) => ({
  className: classNames("card-team-member-wrapper", [props?.className]),
  ...motion?.module,
});
