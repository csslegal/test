import Head from "next/head";
import { useRouter } from "next/router";

export default function SEO({ meta }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const router = useRouter();
  return (
    <>
      <Head>
        {meta.botIndex == 1 ? (
          <meta name="robots" content="follow, index" />
        ) : (
          <meta name="robots" content="nofollow, noindex" />
        )}
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {meta.image ? (
          <link
            rel="preload"
            priority="true"
            as="image"
            href={`${meta.image}`}
          />
        ) : null}
        <link rel="canonical" href={`${siteUrl}${router.asPath}`} />

        <meta property="og:title" content={`${meta.title}`} />
        <meta property="og:description" content={`${meta.description}`} />
        {meta.image ? (<meta property="og:image" content={`${meta.image}`} />) : null}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${meta.title}`} />
        <meta name="twitter:description" content={`${meta.description}`} />
        {meta.image ? ( <meta name="twitter:image" content={`${meta.image}`} />) : null}

        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href={`${siteUrl}/images/apple-icon-72x72.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href={`${siteUrl}/images/apple-icon-114x114.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={`${siteUrl}/images/apple-icon-152x152.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={`${siteUrl}/images/favicon-96x96.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${siteUrl}/images/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${siteUrl}/images/favicon-16x16.png`}
        />

        <link rel="manifest" href={`${siteUrl}/manifest.json`} />
        <meta name="theme-color" content="#804D05" />
      </Head>
    </>
  );
}
