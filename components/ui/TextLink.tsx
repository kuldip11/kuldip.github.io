import { ActionLink } from './ActionLink';

import type { ComponentProps } from 'react';

export const TextLink = (props: Omit<ComponentProps<typeof ActionLink>, 'variant'>) => (
  <ActionLink {...props} variant="text" />
);
