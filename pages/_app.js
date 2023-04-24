import Head from 'next/head';
import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { SnackbarProvider } from 'notistack';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import { setAppState } from '@/store';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      setAppState((s) => ({ ...s, user }));
    }

    function authCheck(url) {
      // redirect to login page if accessing a private page and not logged in
      const publicPaths = ['/', '/signin'];
      const path = url.split('?')[0];
      const user = localStorage.getItem('user')
      if (!user && !publicPaths.includes(path)) {
        setAuthorized(false);
        router.push({
          pathname: '/signin',
        });
      } else {
        setAuthorized(true);
      }
    }
    // run auth check on initial load
    authCheck(router.asPath);

    // set authorized to false to hide page content while changing routes
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // run auth check on route change
    router.events.on('routeChangeComplete', authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };
  }, []);

  if (!authorized) {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <CssBaseline />
      <Head>
        <title>Tharavugal - தரவுகள்</title>
        <meta
          name="description"
          content="Real-time events are structured and can be used for analysis and research purposes."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SnackbarProvider maxSnack={3}>
          <Component {...pageProps} />
        </SnackbarProvider>
      </main>
    </>
  );
}
