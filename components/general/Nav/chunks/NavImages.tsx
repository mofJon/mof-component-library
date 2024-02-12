import { FC, useContext, useState } from "react";
import { Box, Media } from "../../../../components";
import { NavContext } from "./";
import { navImageWrapper, navImage } from "../Nav.styles";

const NavImages: FC<any> = ({ images, ...props }) => {
  const { imgProps } = useContext(NavContext);

  const renderImages = images.map((image: any, i: number) => {
    const isActive =
      (imgProps.image && imgProps.image.mediaId === image.mediaId) ||
      (i === 0 && !imgProps.image);

    return (
      <Box {...navImage(isActive)}>
        <Media key={`${image.mediaId} `} data={image} />
      </Box>
    );
  });

  return (
    <Box
      {...navImageWrapper(imgProps.imageAvail || imgProps.level === 2 ? 1 : 0)}
    >
      {renderImages}
    </Box>
  );
};

export default NavImages;
