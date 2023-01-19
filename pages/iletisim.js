import Layout from "../components/Sablon";
import SEO from "../components/SEO";
import Slogan from "../components/Slogan";
import Breadcrumb from "../components/Breadcrumb";
import Contact from "../components/Contact";

const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE;

export default function Iletisim() {
  const pageTitle = "İletişim";

  const meta = {
    title: pageTitle + " - " + siteTitle,
    description:
      "Bizimle iletişime geçmek için formunu doldurunuz.",
  };

  return (
    <>
      <Layout>
        <SEO meta={meta} />
        <Breadcrumb title={pageTitle} />
        <Contact title={pageTitle} description={meta.description} />
      </Layout>
    </>
  );
}
