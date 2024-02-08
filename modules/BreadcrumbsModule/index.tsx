import { FC } from "react";
import { ModuleBase, Box, Stack, Text } from "../../components";
import {
  breadcrumbs,
  breadcrumbsItem,
  activeBreadcrumbsItem,
  separator,
} from "./BreadcrumbsModule.style";

const BreadcrumbsModule: FC<any> = ({ data }) => {
  if (!data) return null;

  return (
    <ModuleBase data={data}>
      <Box variant="container">
        <Stack {...breadcrumbs}>
          {data.crumbs.map((crumb: any, index: number) =>
            crumb.href ? (
              <>
                <Text
                  key={`breadcrumb-chain-${index}`}
                  link={crumb}
                  {...breadcrumbsItem}
                />
                <Text
                  key={`breadcrumb-separator-${index}`}
                  text={"/"}
                  {...separator}
                />
              </>
            ) : (
              <Text
                key={`breadcrumb-active-${index}`}
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
