import { SkeletonTheme } from 'react-loading-skeleton';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SkeletonTheme
      baseColor="hsl(218, 23%, 16%)"
      highlightColor="hsl(217, 19%, 24%)"
    >
      <Component {...pageProps} />
    </SkeletonTheme>
  );
}

export default MyApp;
