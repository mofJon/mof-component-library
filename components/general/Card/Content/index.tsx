import { capitalise } from "@utils/formatting";
import { FC } from "react";

const Content: FC<any> = ({ data, ...props }) => {
  if (!data || !data.variant) return null;
  const CardContent = require(`./${capitalise(data.variant)}`).default;

  return <CardContent data={data} {...props} />;
};

export default Content;
