import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="தரவுகள் | Tharavugal" />
        <meta
          name="description"
          content="Tharavugal.org is a non-profit data platform, with the members of the
          organization providing data of any kind, which can be further
          structured and consumed by the public. It also provides tools for data exploration, visualization, research,
          etc."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tharavugal.org/" />
        <meta property="og:title" content="தரவுகள் | Tharavugal" />
        <meta
          property="og:description"
          content="Tharavugal.org is a non-profit data platform, with the members of the
          organization providing data of any kind, which can be further
          structured and consumed by the public. It also provides tools for data exploration, visualization, research,
          etc."
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
