import { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import ReactGA from 'react-ga';
import TopBarProgress from 'react-topbar-progress-indicator';
import { SWRConfig } from 'swr';
import {ClerkProvider, RedirectToSignIn, SignedIn, SignedOut,} from "@clerk/nextjs";

import progressBarConfig from '@/config/progress-bar/index';
import swrConfig from '@/config/swr/index';
import WorkspaceProvider from '@/providers/workspace';
import "styles/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import * as FullStory from '@fullstory/browser'

import '@/styles/globals.css';


 
const App = ({ Component, pageProps }) => {
  const [progress, setProgress] = useState(false);
  const router = useRouter();
  const swrOptions = swrConfig();
  const publicPages = ["/]"];

  Router.events.on('routeChangeStart', () => setProgress(true));
  Router.events.on('routeChangeComplete', () => setProgress(false));
  TopBarProgress.config(progressBarConfig());

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID);
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      ReactGA.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  const { pathname } = useRouter();

  
    useEffect(() => {
    FullStory.init({ orgId: 'o-1EJHB1-na1'});
  }, []);


  return ( <ClerkProvider {...pageProps}> <SignedIn>
      <SWRConfig value={swrOptions}>
        <ThemeProvider attribute="class">
          <WorkspaceProvider>
            {progress && <TopBarProgress />}
            <Component {...pageProps} />
          </WorkspaceProvider>
        </ThemeProvider>
      </SWRConfig>
    </SignedIn>
        <SignedOut>
          {publicPages.includes(pathname) ? (
            <Component {...pageProps} />
          ) : (
            <RedirectToSignIn />
          )}
        </SignedOut></ClerkProvider>
  );
};

export default App;
