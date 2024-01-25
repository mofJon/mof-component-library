const PreHeading = ({ ...props }) => {
  console.log("xxx", props);
  return <p {...props} />;
};

export default PreHeading;
