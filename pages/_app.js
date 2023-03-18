import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tharavugal.org</title>
        <meta
          name="description"
          content="Real-time events are structured and can be used for analysis and research purposes."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
