import { FC } from 'react'
import { default as NextLink } from 'next/link';
import { convertAbsoluteLinkToRelative } from '@/utils';

const Link: FC<any> = ({ link, children, ariaLabel, ...props }) => {
  const fixedLink = convertAbsoluteLinkToRelative(link);

  // add framer motion

  return link ? (
    <NextLink
      href={fixedLink?.href || ''}
      target={fixedLink?.target}
      aria-label={fixedLink?.target === '_blank' ? ariaLabel || link?.text : null}
      {...props}
    >
      {children || link?.text}
    </NextLink> as any
  ) : null;
};

export default Link;
