import classnames from 'classnames';

export const richTextWithMedia = (className?: string) => ({
  className: classnames(['rich-text-with-media', className]),
});

export const richTextContent = {
  className: 'rich-text-content',
  rich: true,
};
