import { FC, useState } from "react";
import { Box, Media, Nav, Stack } from "../../components";
import {
  headerWrapper,
  headerContent,
  headerLogo,
  navClose,
  navOpen,
  navToggleButtons,
} from "./Header.styles";
import { useRouter } from "next/navigation";

const Header: FC<any> = ({
  data,
  navProps,
  moduleAnims,
  variant,
  icons,
  ...props
}) => {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currBreakpoint, setCurrBreakpoint] = useState("base");

  const handleLogoClick = () => {
    router.push("/");
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleBreakpointChange = (breakpoint: string) => {
    setCurrBreakpoint(breakpoint);
  };

  const showHideMotion =
    currBreakpoint === "sm" || currBreakpoint === "md"
      ? moduleAnims?.wrapper(isNavOpen)
      : {};

  const LogoComponent = () => {
    let loadedLogo = (
      <Media
        data={data.logo}
        onClick={handleLogoClick}
        {...headerLogo}
        {...moduleAnims?.logo}
      />
    );
    if (icons?.logo) {
      loadedLogo = (
        <Box onClick={handleLogoClick} {...headerLogo} {...moduleAnims?.logo}>
          {icons?.logo}
        </Box>
      );
    }
    return loadedLogo;
  };

  return (
    <Box
      variant="header"
      {...headerWrapper(props, isNavOpen)}
      {...moduleAnims?.module}
    >
      <Stack {...headerContent} {...moduleAnims?.header}>
        <LogoComponent />
        {/* @ts-ignore */}
        <Nav
          data={data.mainNavItems}
          variant={variant}
          navProps={navProps}
          onBreakpointChange={handleBreakpointChange}
          isOpen={isNavOpen}
          {...showHideMotion}
        />
        <Box {...navToggleButtons(isNavOpen, moduleAnims?.toggleWrapper)}>
          <Box {...navOpen(moduleAnims?.toggleOpen)} onClick={toggleNav}>
            {icons?.navOpen}
          </Box>
          <Box {...navClose(moduleAnims?.toggleClose)} onClick={toggleNav}>
            {icons?.navClose}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;
