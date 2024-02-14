import { FC } from "react";
import { Box, Media, Nav, Stack } from "../../components";
import { headerWrapper, headerContent, navSettings } from "./Header.styles";
import { useRouter } from "next/navigation";

const Header: FC<any> = ({ data, textStyles, ...props }) => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <Box variant="header" {...headerWrapper(props)}>
      <Stack {...headerContent}>
        {/* @ts-ignore */}
        <Media data={data.logo} onClick={handleLogoClick} />
        {/* @ts-ignore */}
        <Nav data={data.mainNavItems} textStyles={textStyles} {...props} />
      </Stack>
    </Box>
  );
};

export default Header;
