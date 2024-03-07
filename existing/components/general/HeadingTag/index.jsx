import React from "react";
import PropTypes from "prop-types";

const HeadingTag = ({ data, children, ...props }) => {
  const { htag, heading } = data || {};
  const polishedHeading = heading?.replace(/<p>/g, "").replace(/<\/p>/g, "");
  const content = heading
    ? { dangerouslySetInnerHTML: { __html: polishedHeading } }
    : children;
  const role =
    !htag?.toLowerCase() || htag?.toLowerCase() === "p" ? "heading" : null;
  return React.createElement(htag?.toLowerCase() || "div", {
    role,
    ...props,
    ...content,
  });
};

HeadingTag.propTypes = {
  data: PropTypes.exact({
    htag: PropTypes.string,
    heading: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
};

export default HeadingTag;
