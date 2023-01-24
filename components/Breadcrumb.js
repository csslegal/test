import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export default function Breadcrumb({ title }) {
  return (
    <>
      <nav aria-label="breadcrumb" className="mt-4">
        <ol className="breadcrumb ">
          <li className="breadcrumb-item">
            <Link href={`${siteUrl}/`}>Anasayfa</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {title}
          </li>
        </ol>
      </nav>
    </>
  );
}
