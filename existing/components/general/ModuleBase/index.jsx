import PropTypes from "prop-types";
import classnames from "classnames";
import { isColorDark, fixColor } from "utils";

const ModuleBase = ({ data, className, ...props }) => {
  let classes = ["module", className];

  const backgroundColor = fixColor(data?.backgroundColour);

  if (data?.paddingTop) {
    if (data.paddingTop.toLowerCase() === "medium") {
      classes.push("pt-10 lg:pt-16");
    } else if (data.paddingTop.toLowerCase() === "large") {
      classes.push("pt-16 lg:pt-26");
    } else if (data.paddingTop.toLowerCase() !== "none") {
      classes.push("pt-6 lg:pt-10");
    }
  }

  if (data?.paddingBottom) {
    if (data.paddingBottom.toLowerCase() === "medium") {
      classes.push("pb-10 lg:pb-16");
    } else if (data.paddingBottom.toLowerCase() === "large") {
      classes.push("pb-16 lg:pb-26");
    } else if (data.paddingBottom.toLowerCase() !== "none") {
      classes.push("pb-6 lg:pb-10");
    }
  }

  if (isColorDark(backgroundColor)) {
    classes.push("[&_.color-from-bg]:text-white");
  } else {
    classes.push("[&_.color-from-bg]:text-black");
  }

  classes.push(data?.moduleName || null);

  console.log("ModuleBase classes", classes);

  return (
    <section
      id={data?.anchor || null}
      style={{
        backgroundColor,
      }}
      className={classnames(classes)}
      {...props}
    />
  );
};

ModuleBase.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ModuleBase;
