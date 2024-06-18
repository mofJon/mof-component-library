import { FC, useState } from "react";
import { Box, Text } from "../../../components";
import { tooltipBubble, tooltipWrapper } from "./Tooltip.styles";
import "./Tooltip.css";

const Tooltip: FC<any> = ({
  anchor = "top",
  children,
  content,
  className,
  motion,
}) => {
  const [show, setShow] = useState(false);

  const renderContent = () => {
    if (typeof content === "string") {
      return <Text text={content} {...tooltipBubble(anchor, motion)} />;
    }
    return <Box {...tooltipBubble(anchor, motion)}>{content}</Box>;
  };

  return (
    <Box
      {...tooltipWrapper(show, className, motion)}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {renderContent()}
      {children}
    </Box>
  );
};

export default Tooltip;
