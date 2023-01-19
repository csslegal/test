import Link from "next/link";

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <>
      <footer className=" border-top mt-2 py-1 my-2">
        <ul className="nav float-end">
          <li className="nav-item">
            <Link href="/" className="nav-link text-muted">
              Anasayfa
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/vize/sss" className="nav-link text-muted">
              S.S.S
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/vize/diger" className="nav-link text-muted">
              Diğer İngiltere Vize Türleri
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/iletisim" className="nav-link text-muted">
              İletişim
            </Link>
          </li>
        </ul>
        <p className="float-start text-muted  pt-2">
          {year} © {process.env.NEXT_PUBLIC_SITE_URL}
        </p>
      </footer>
    </>
  );
}
