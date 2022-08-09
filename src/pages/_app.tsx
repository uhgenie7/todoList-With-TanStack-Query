import type { AppProps } from 'next/app';
import GlobalStyle from '@src/styles/globalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
