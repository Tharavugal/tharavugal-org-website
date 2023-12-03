import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { SnackbarProvider } from 'notistack';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { setAppState } from '@/store';
import { SWRConfig } from 'swr';
import APIClient from '@/utils/APIClient';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('user'));

    if (user) {
      setAppState((s) => ({ ...s, user }));
    }

    function authCheck(url) {
      // redirect to login page if accessing a private page and not logged in
      const publicPaths = [
        '/',
        '/signin',
        '/search',
        '/visualizer',
        '/work-pipeline',
        '/thamizhl-dictionary',
        '/explore',
        '/research',
        '/thirukkural',
        '/thirukkural/virtue',
        '/thirukkural/wealth',
        '/thirukkural/love',
        '/on-this-day',
        '/thamizhl-calendar',
        '/open-discussions',
        '/translations',
        '/archival-records',
        '/images',
        '/videos',
        '/documents',
        '/books',
        '/contributing-process',
        '/entities',
        '/literatures',
        '/statistics',
        '/events/[slug]',
        '/contribution-logs',
        '/knowledge-base',
        '/contact-us',
        '/about-us',
        '/faqs',
        '/terms-conditions',
        '/privacy-policy',
        '/social-issues',
        '/contribute',
        '/open-issues',
        '/food-ingredients',
        '/food-ingredients/[slug]',
      ];
      const path = url.split('?')[0];
      const user = window.localStorage.getItem('user');
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
    authCheck(router.pathname);

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
      <>
        <CssBaseline />
        <Box
          sx={{
            width: '100%',
            height: '100vh'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%'
            }}
          >
            <Box sx={{ color: '#FF851B' }}>
              <CircularProgress color="success" />
            </Box>
            <Typography variant="h5" sx={{ mt: 2 }}>
              Please wait..
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ mt: 2, color: 'text.secondary' }}
            >
              It may take upto 10 Sec to load.
            </Typography>
          </Box>
        </Box>
      </>
    );
  }

  return (
    <>
      <CssBaseline />
      <main>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <SnackbarProvider maxSnack={3}>
            <SWRConfig
              value={{
                fetcher: APIClient.get,
                onError(err, key, config) {
                  console.log(err);
                  console.log(err.status);
                  console.log(key);
                  console.log(config);
                },
              }}
            >
              <Component {...pageProps} />
            </SWRConfig>
          </SnackbarProvider>
        </LocalizationProvider>
      </main>
      <style global jsx>
        {`
          html,
          body,
          body > div:first-child,
          div#__next,
          div#__next > main {
            height: 100%;
          }
        `}
      </style>
    </>
  );
}
