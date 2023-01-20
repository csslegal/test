import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <>
      <header className="  py-2 mb-4 border-bottom fw-bold">
        <nav
          className="navbar navbar-expand-lg  rounded"
          aria-label="Eleventh navbar example"
        >
          <div className="container-fluid">
            <span className="navbar-brand">
              Test Slogan
            </span>
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
                    href="/"
                    className={
                      router.pathname == "/" ? "active nav-link" : "nav-link"
                    }
                  >
                    Anasayfa
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/vize/diger"
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
                    href="/vize/sss"
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
                    href="/iletisim"
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
