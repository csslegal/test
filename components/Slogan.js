import Link from "next/link";

export default function Slogan({ title,description }) {
  return (
    <>
      <div className="pb-4 mb-4 bg-light rounded-3">
        <div className="container-fluid pt-5">
          <h1 className="display-5 fw-bold">{title}</h1>
          <p className="col-md-10 fs-4">{description}</p>
          <Link
            href="/iletisim"
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
