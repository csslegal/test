import Layout from "../../../components/Sablon";
import SEO from "../../../components/SEO";
import Breadcrumb from "../../../components/Breadcrumb";
import Slogan from "../../../components/Slogan";
import PostList from "../../../components/PostList";

const siteWebApiUrl = process.env.NEXT_PUBLIC_WEB_API_URL;
const siteWebApiId = process.env.NEXT_PUBLIC_WEB_API_ID;
const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE;

export default function index({ data }) {
  const pageTitle = "Sıkça Sorulan Sorular";
  const meta = {
    title: pageTitle + " - " + siteTitle,
    description:
      "Ne Yapmalıyım? gibi soruları ve cevaplarını bulabilirsiniz.",
  };

  return (
    <>
      <Layout>
        <SEO meta={meta} />
        <Breadcrumb title={pageTitle} />
        <Slogan title={pageTitle} description={meta.description} />
        <PostList data={data} url="sss" />
      </Layout>
    </>
  );
}
export async function getServerSideProps() {
  try {
    const res = await fetch(
      `${siteWebApiUrl}/api/v1/${siteWebApiId}/questions`
    );
    const { data } = await res.json();

    return { props: { data } };
  } catch (err) {
    return { props: {} };
  }
}
