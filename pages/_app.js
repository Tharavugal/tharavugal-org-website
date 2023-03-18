import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Head>
        <title>Tharavugal.org</title>
        <meta
          name="description"
          content="Real-time events are structured and can be used for analysis and research purposes."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
