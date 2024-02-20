import classnames from "classnames";

export const articleHero = (props: any) => ({
  className: classnames(["article-hero", props.className]),
});
