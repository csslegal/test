import Link from "next/link";
import { useRouter } from "next/router";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE;

export default function Header() {
  const router = useRouter();
  return (
    <>
      <header className="mb-2 border-bottom fw-bold">
        <nav
          className="navbar navbar-expand-lg  rounded"
          aria-label="Eleventh navbar example"
        >
          <div className="container-fluid">
            <span className="navbar-brand">{siteTitle}</span>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample09"
              aria-controls="navbarsExample09"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="navbar-collapse collapse d-lg-flex"
              id="navbarsExample09"
            >
              <ul className="navbar-nav col-lg-12 justify-content-lg-end">
                <li className="nav-item">
                  <Link
                    title="Anasayfa"
                    href={`${siteUrl}/`}
                    className={
                      router.pathname == "/" ? "active nav-link" : "nav-link"
                    }
                  >
                    Anasayfa
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    title="Diğer Vize Türleri"
                    href={`${siteUrl}/vize/diger`}
                    className={
                      router.pathname == "/vize/diger"
                        ? "active nav-link"
                        : "nav-link"
                    }
                  >
                    Diğer Türleri
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    title="Sıkça Sorulan Sorular"
                    href={`${siteUrl}/vize/sss`}
                    className={
                      router.pathname == "/vize/sss"
                        ? "active nav-link"
                        : "nav-link"
                    }
                  >
                    S.S.S
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    title="İletişim"
                    href={`${siteUrl}/iletisim`}
                    className={
                      router.pathname == "/iletisim"
                        ? "active nav-link"
                        : "nav-link"
                    }
                  >
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
