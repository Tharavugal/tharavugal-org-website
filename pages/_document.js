import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="தரவுகள் | Tharavugal" />
        <meta
          name="description"
          content="Tharavugal.org is a non-profit social platform, with the members of the organization primarily providing real-time events based on a timeline. The web app also provides tools for data visualization, research, etc."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tharavugal.org/" />
        <meta property="og:title" content="தரவுகள் | Tharavugal" />
        <meta
          property="og:description"
          content="Tharavugal.org is a non-profit social platform, with the members of the organization primarily providing real-time events based on a timeline. The web app also provides tools for data visualization, research, etc."
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
