import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="தரவுகள் | Tharavugal" />
        <meta
          name="description"
          content="Tharavugal.org is a non-profit web application, with the members of the organization primarily providing real-time events based on a timeline and other information.Based on the available data, the web app provides tools for visualizations, research, and others."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tharavugal.org/" />
        <meta property="og:title" content="தரவுகள் | Tharavugal" />
        <meta
          property="og:description"
          content="Tharavugal.org is a non-profit web application, with the members of the organization primarily providing real-time events based on a timeline and other information.Based on the available data, the web app provides tools for visualizations, research, and others."
        />
        <meta property="og:image" content="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
