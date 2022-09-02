import { useState } from 'react';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppLayout from '@src/components/atoms/AppLayout';
import GlobalStyle from '@src/styles/globalStyle';
import ProtectedRoute from '@src/components/ProtectedRoute';
import { useRouter } from 'next/router';
import { store } from '@src/store/configureStore';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  import('../mocks');
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const persistor = persistStore(store);
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          suspense: true,
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          retry: 0,
          useErrorBoundary: true,
        },
        mutations: {
          useErrorBoundary: true,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Hydrate state={pageProps.dehydratedState}>
            <GlobalStyle />
            <ProtectedRoute router={router}>
              <AppLayout>
                <Component {...pageProps} />
              </AppLayout>
            </ProtectedRoute>
          </Hydrate>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
