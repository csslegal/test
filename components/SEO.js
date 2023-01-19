import Head from "next/head";
import { useRouter } from "next/router";

export default function SEO({ meta }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const router = useRouter();
  return (
    <>
      <Head>
        {process.env.NEXT_PUBLIC_SITE_INDEX == 1 ? (
          <meta name="robots" content="follow, index" />
        ) : (
          <meta name="robots" content="nofollow, noindex" />
        )}
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />

        {meta.image ? (
          <link
            rel="preload"
            priority="true"
            as="image"
            href={`${siteUrl}/uploads/${meta.image}`}
          />
        ) : null}
        <link rel="canonical" href={`${router.asPath}`} />

        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href={`${siteUrl}/images/apple-icon-72x72.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={`${siteUrl}/images/apple-icon-76x76.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href={`${siteUrl}/images/apple-icon-114x114.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={`${siteUrl}/images/apple-icon-120x120.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href={`${siteUrl}/images/apple-icon-144x144.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={`${siteUrl}/images/apple-icon-152x152.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${siteUrl}/images/apple-icon-180x180.png`}
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
          sizes="96x96"
          href={`${siteUrl}/images/favicon-96x96.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${siteUrl}/images/favicon-16x16.png`}
        />

        <link rel="manifest" href={`${siteUrl}/manifest.json`} />
        <meta name="theme-color" content="#fda90d" />
      </Head>
    </>
  );
}
