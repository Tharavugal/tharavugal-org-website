import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { SnackbarProvider } from "notistack";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function App({ Component, pageProps }) {
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
