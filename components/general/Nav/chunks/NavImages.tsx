import { FC, useContext } from "react";
import { Box, Media } from "../../../../components";
import { NavContext } from "./";
import { navImageWrapper, navImage } from "../Nav.styles";

const NavImages: FC<any> = ({ images, ...props }) => {
  const { imgProps, navSettings } = useContext(NavContext);
  const { imageSizes } = navSettings[0];

  const renderImages = images.map((image: any, i: number) => {
    const isActive =
      (imgProps.image && imgProps.image.mediaId === image.mediaId) ||
      (i === 0 && !imgProps.image);

    return (
      <Box key={`navImage${i}`} {...navImage(isActive)}>
        <Media
          key={`${image.mediaId} `}
          data={image}
          imageSizes={imageSizes || "100vw"}
          priority
        />
      </Box>
    );
  });

  return (
    <Box
      {...navImageWrapper(imgProps.imageAvail || imgProps.level === 2 ? 1 : 0)}
      {...props}
    >
      {renderImages}
    </Box>
  );
};

export default NavImages;
