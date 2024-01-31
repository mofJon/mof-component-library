import { Card } from "../../components";

export const CardItems = (
  data: any,
  childAnims: any,
  cardAnim: any,
  contentVariant: any,
  variant = "primary",
  cardStyle: any,
  size = "full",
) => {
  return data.map((val: any, i: number) => {
    return (
      <Card
        key={`cardItem${i}`}
        data={val.props}
        variant={variant}
        size={size}
        contentVariant={contentVariant}
        childAnims={childAnims}
        priority
        {...cardAnim}
        {...cardStyle}
      />
    );
  });
};
