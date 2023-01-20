import Link from "next/link";

import Layout from "../components/Sablon";
import SEO from "../components/SEO";

const NotFoundPage = () => {
  const meta = {
    title: "404 - Page Not Found",
    description: "Sorry, there is nothing to see here",
    botIndex: 0,
  };

  return (
    <>
      <Layout>
        <SEO meta={meta} />
        <div className="text-center py-2">
          <h1>404 - Page Not Found</h1>
          <p>Sorry, there is nothing to see here</p>
          <br />
          <p>Use the links below to explore our amazing application</p>

          <ul className="list-unstyled">
            <li>
              <Link target={"_blank"} href="/sitemap.xml">
                sitemap.xml
              </Link>
            </li>
            <li>
              <Link target={"_blank"} href="/sss-sitemap.xml">
                diger-sitemap.xml
              </Link>
            </li>
            <li>
              <Link target={"_blank"} href="/diger-sitemap.xml">
                sss-sitemap.xml
              </Link>
            </li>
          </ul>
        </div>
      </Layout>
    </>
  );
};

export default NotFoundPage;
