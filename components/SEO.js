import Head from "next/head";
import { useRouter } from "next/router";

export default function SEO({ meta }) {
  
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
            href={`/uploads/${meta.image}`}
          />
        ) : null}
        <link rel="canonical" href={`${router.asPath}`} />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href={`/images/apple-icon-72x72.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href={`/images/apple-icon-114x114.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={`/images/apple-icon-152x152.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={`/images/favicon-96x96.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/images/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/images/favicon-16x16.png`}
        />

        <link rel="manifest" href={`/manifest.json`} />
        <meta name="theme-color" content="#fda90d" />
      </Head>
    </>
  );
}
