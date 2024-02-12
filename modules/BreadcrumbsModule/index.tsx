import { FC, Fragment } from "react";
import { ModuleBase, Box, Stack, Text } from "../../components";
import {
  breadcrumbs,
  breadcrumbsItem,
  activeBreadcrumbsItem,
  separator,
} from "./BreadcrumbsModule.styles";

const BreadcrumbsModule: FC<any> = ({ data }) => {
  if (!data) return null;

  const renderCrumbs = data.crumbs.map((crumb: any, index: number) =>
    crumb.href ? (
      <Fragment key={`breadcrumb-item-${index}`}>
        <Text link={crumb} {...breadcrumbsItem} />
        <Text text={"/"} {...separator} />
      </Fragment>
    ) : (
      <Text
        key={`breadcrumb-current-${index}`}
        text={crumb.text}
        {...activeBreadcrumbsItem}
      />
    ),
  );

  return (
    <ModuleBase data={data}>
      <Box variant="container">
        <Stack {...breadcrumbs}>{renderCrumbs}</Stack>
      </Box>
    </ModuleBase>
  );
};

export default BreadcrumbsModule;
