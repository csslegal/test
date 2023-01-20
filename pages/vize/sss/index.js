import Layout from "../../../components/Sablon";
import SEO from "../../../components/SEO";
import Breadcrumb from "../../../components/Breadcrumb";
import Slogan from "../../../components/Slogan";
import PostList from "../../../components/PostList";

const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE;

const siteWebApiUrl = process.env.NEXT_PUBLIC_WEB_API_URL;
const siteWebApiId = process.env.NEXT_PUBLIC_WEB_API_ID;

const pageTitle = "Sıkça Sorulan Sorular";
const description = "Ne Yapmalıyım? gibi soruları ve cevaplarını bulabilirsiniz.";

const dbTable = "questions";
const pathUrl = "sss";

export default function index({ data }) {
  const meta = {
    title: pageTitle + " - " + siteTitle,
    description: description,
    botIndex: process.env.NEXT_PUBLIC_SITE_INDEX,
  };

  return (
    <>
      <Layout>
        <SEO meta={meta} />
        <Breadcrumb title={pageTitle} />
        <Slogan title={pageTitle} description={description} />
        <PostList data={data} url={pathUrl} />
      </Layout>
    </>
  );
}
export async function getServerSideProps() {
  try {
    const res = await fetch(
      `${siteWebApiUrl}/api/v1/${siteWebApiId}/${dbTable}`
    );
    const { data } = await res.json();

    return { props: { data } };
  } catch (err) {
    return { props: {} };
  }
}
