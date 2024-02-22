import { FC } from "react";
import { Box, Media, Nav, Stack } from "../../components";
import { headerWrapper, headerContent, headerLogo } from "./Header.styles";
import { useRouter } from "next/navigation";

const Header: FC<any> = ({ data, textStyles, moduleAnims, ...props }) => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <Box variant="header" {...headerWrapper(props)} {...moduleAnims?.module}>
      <Stack {...headerContent} {...moduleAnims?.header}>
        {/* @ts-ignore */}
        <Media
          data={data.logo}
          onClick={handleLogoClick}
          {...headerLogo}
          {...moduleAnims?.logo}
        />
        {/* @ts-ignore */}
        <Nav data={data.mainNavItems} textStyles={textStyles} {...props} />
      </Stack>
    </Box>
  );
};

export default Header;
