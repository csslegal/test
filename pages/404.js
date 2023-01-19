import Link from "next/link";

import Layout from "../components/Sablon";
import SEO from "../components/SEO";

const NotFoundPage = () => {
  const meta = {
    title: "404 - Page Not Found",
    description: "Sorry, there is nothing to see here",
  };

  return (
    <>
      <Layout>
        <SEO meta={meta} />
        <div className="text-center py-2 mb-4">
          <h1>404 - Page Not Found</h1>
          <p>Sorry, there is nothing to see here</p>
          <br />
          <p>Use the links below to explore our amazing application</p>
          <Link target={"_blank"} className="display-6" href="/sitemap.xml">
            Sitemap.xml
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default NotFoundPage;
