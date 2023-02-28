import Layout from "../components/Sablon";
import SEO from "../components/SEO";
import Breadcrumb from "../components/Breadcrumb";
import Contact from "../components/Contact";

const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE;

export default function Iletisim() {
  const pageTitle = "İletişim";

  const meta = {
    title: pageTitle + " - " + siteTitle,
    description:
      "İngiltere test vizesi başvurusu veya vize işlemleriyle ilgili herhangi bir sorunuz varsa, aşağıdaki iletişim formu ile bizlere ulaşabilirsiniz.",
    botIndex: process.env.NEXT_PUBLIC_SITE_INDEX,
    subPage: { active: false, url: "", title: "" },
  };

  return (
    <>
      <Layout>
        <SEO meta={meta} />
        <Breadcrumb title={pageTitle} subPage={meta.subPage} />
        <Contact title={pageTitle} description={meta.description} />
      </Layout>
    </>
  );
}
