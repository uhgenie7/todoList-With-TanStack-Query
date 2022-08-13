import { useState } from 'react';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import AppLayout from '@src/components/atoms/AppLayout';
import GlobalStyle from '@src/styles/globalStyle';
import ProtectedRoute from '@src/components/ProtectedRoute';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          suspense: true,
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          retry: 0,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyle />
          <ProtectedRoute router={router}>
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </ProtectedRoute>
        </Hydrate>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
