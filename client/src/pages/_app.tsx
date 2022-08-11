import { useState } from 'react';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import AppLayout from '@src/components/atoms/AppLayout';
import GlobalStyle from '@src/styles/globalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          retry: false,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyle />
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </Hydrate>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
