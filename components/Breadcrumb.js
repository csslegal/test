import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export default function Breadcrumb({ title }) {
  if (title=="") {
    return (
      <>
        <nav aria-label="breadcrumb" className="mt-2">
          <ol className="breadcrumb ">
            <li className="breadcrumb-item active" aria-current="page">
              Anasayfa
            </li>
          </ol>
        </nav>
      </>
    );
  } else {
    return (
      <>
        <nav aria-label="breadcrumb" className="mt-2">
          <ol className="breadcrumb ">
            <li className="breadcrumb-item">
              <Link title="Anasayfa" href={`${siteUrl}/`}>
                Anasayfa
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>
      </>
    );
  }
}
