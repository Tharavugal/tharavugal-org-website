import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { SnackbarProvider } from "notistack";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Head>
        <title>Tharavugal.org - தரவுகள்</title>
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
