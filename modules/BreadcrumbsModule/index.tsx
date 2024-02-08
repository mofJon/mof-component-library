import { FC } from "react";
import { ModuleBase, Box, Stack, Text } from "../../components";
import {
  breadcrumbs,
  breadcrumbsItem,
  breadcrumbsItemWrapper,
  activeBreadcrumbsItem,
  separator,
} from "./BreadcrumbsModule.style";

const BreadcrumbsModule: FC<any> = ({ data }) => {
  return (
    <ModuleBase data={data}>
      <Box variant="container">
        <Stack {...breadcrumbs}>
          {data.props.crumbs.map((crumb: any, index: number) =>
            crumb.href ? (
              <Stack key={`breadcrumb-${index}`} {...breadcrumbsItemWrapper}>
                <Text link={crumb} {...breadcrumbsItem} />
                <Text text={"/"} {...separator} />
              </Stack>
            ) : (
              <Text
                key={`breadcrumb-${index}`}
                text={crumb.text}
                {...activeBreadcrumbsItem}
              />
            ),
          )}
        </Stack>
      </Box>
    </ModuleBase>
  );
};

export default BreadcrumbsModule;
