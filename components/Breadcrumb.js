import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export default function Breadcrumb({ title, subPage }) {
  return (
    <>
      <nav aria-label="breadcrumb" className="mt-2">
        <ol className="breadcrumb ">
          {title == "" ? (
            <li className="breadcrumb-item active" aria-current="page">
              Anasayfa
            </li>
          ) : (
            <li className="breadcrumb-item">
              <Link title="Anasayfa" href={`${siteUrl}/`}>
                Anasayfa
              </Link>
            </li>
          )}
          {subPage.active ? (
            <li className="breadcrumb-item">
              <Link
                title={`${subPage.title}/`}
                href={`${siteUrl}/${subPage.url}`}
              >
                {subPage.title}
              </Link>
            </li>
          ) : null}

          {title == "" ? null : (
            <li className="breadcrumb-item active" aria-current="page">
              {title}
            </li>
          )}
        </ol>
      </nav>
    </>
  );
}
