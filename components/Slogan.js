import Link from "next/link";

export default function Slogan({ title, description }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  return (
    <>
      <div className="pb-4 mb-2 bg-light rounded-3">
        <div className="container-fluid pt-4">
          <h1 className="display-5 fw-bold">{title}</h1>
          <p className="col-md-10 fs-4">{description}</p>
          <Link
            href={`${siteUrl}/iletisim`}
            className="btn btn-primary btn-lg float-start"
            type="button"
          >
            İletişim için tıklayın!
          </Link>
        </div>
      </div>
    </>
  );
}
