import Link from "next/link";

export default function Footer() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <footer className="border-top mt-4">
        <ul className="nav float-end">
          <li className="nav-item">
            <Link 
              title="Anasayfa" 
              href={`${siteUrl}/`} 
              className="nav-link text-muted"
            >
              Anasayfa
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              title="Sıkça Sorulan Sorular" 
              href={`${siteUrl}/vize/sss`} 
              className="nav-link text-muted"
            >
              S.S.S
            </Link>
          </li>
          <li className="nav-item">
            <Link
              title="Diğer Vize Türleri"
              href={`${siteUrl}/vize/diger`}
              className="nav-link text-muted"
            >
              Diğer Türleri
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              title="İletişim"
              href={`${siteUrl}/iletisim`} 
              className="nav-link text-muted"
            >
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
