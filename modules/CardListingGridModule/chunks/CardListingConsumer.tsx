"use client";
import { FC } from "react";
import { ListingGrid } from "../../../components";

const CardListingConsumer: FC<any> = ({
  items,
  isGroup,
  cardType,
  moduleAnims,
}) => {
  let renderCardContent = null;

  renderCardContent = isGroup ? (
    items
  ) : (
    <ListingGrid data={items} type={cardType} {...moduleAnims?.listingGrid} />
  );

  console.log("consumer", items, isGroup, cardType, moduleAnims);

  return renderCardContent;
};

export default CardListingConsumer;
