import { getStorybookUI } from '@storybook/react-native';

import './storybook.requires';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

const StorybookUIRoot = getStorybookUI({});

export default () => (
  <QueryClientProvider client={queryClient}>
    <StorybookUIRoot />
  </QueryClientProvider>
);
