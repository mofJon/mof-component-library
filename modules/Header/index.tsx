import { FC } from "react";
import { Box, Image, Nav, Stack } from "../../components";
import { headerWrapper, headerContent, headerLogo } from "./Header.styles";
import { useRouter } from "next/navigation";

const Header: FC<any> = ({ data, persistOn, itemIcons, ...props }) => {
  const { imageUrl, imageAlt, isSvg } = data.logo;
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  const Logo = isSvg ? (
    (require(imageUrl).default as any)
  ) : (
    <Image src={imageUrl} alt={imageAlt} width={200} height={20} />
  );

  return (
    <Box variant="header" {...headerWrapper(props)}>
      <Stack {...headerContent}>
        <Box {...headerLogo} onClick={handleLogoClick}>
          {isSvg ? <Logo /> : Logo}
        </Box>
        <Nav
          data={data.mainNavItems}
          persistOn={persistOn}
          itemIcons={itemIcons}
        />
      </Stack>
    </Box>
  );
};

export default Header;
