import { FC, Fragment } from "react";
import { ModuleBase, Box, Stack, Text } from "../../components";
import {
  breadcrumbs,
  breadcrumbsItem,
  activeBreadcrumbsItem,
  separator,
} from "./BreadcrumbsModule.styles";

const BreadcrumbsModule: FC<any> = ({ data, textStyles, moduleAnims }) => {
  if (!data) return null;
  const textStylesItem = textStyles?.breadcrumbItem || "i-xs";

  const renderCrumbs = data.crumbs.map((crumb: any, index: number) =>
    crumb.href ? (
      <Fragment key={`breadcrumb-item-${index}`}>
        <Text
          link={crumb}
          {...breadcrumbsItem(textStylesItem)}
          {...moduleAnims?.item}
        />
        <Text
          text={"/"}
          {...separator(textStylesItem)}
          {...moduleAnims?.item}
        />
      </Fragment>
    ) : (
      <Text
        key={`breadcrumb-current-${index}`}
        text={crumb.text}
        {...activeBreadcrumbsItem(textStylesItem)}
        {...moduleAnims?.item}
      />
    ),
  );

  return (
    <ModuleBase data={data}>
      <Box variant="container" {...moduleAnims?.controller}>
        <Stack {...breadcrumbs}>{renderCrumbs}</Stack>
      </Box>
    </ModuleBase>
  );
};

export default BreadcrumbsModule;
