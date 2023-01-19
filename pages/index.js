import Layout from "../components/Sablon";
import SEO from "../components/SEO";
import Breadcrumb from "../components/Breadcrumb";
import Slogan from "../components/Slogan";
import PostList from "../components/PostList";

const siteWebApiUrl = process.env.NEXT_PUBLIC_WEB_API_URL;
const siteWebApiId = process.env.NEXT_PUBLIC_WEB_API_ID;
const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE;
const siteDesc = process.env.NEXT_PUBLIC_SITE_DESC;

export default function Index({ data }) {
  const meta = {
    title: siteTitle,
    description: siteDesc,
  };

  return (
    <>
      <Layout>
        <SEO meta={meta} />
        <Breadcrumb title={meta.title} />
        <Slogan title={meta.title} description={meta.description} />
        <PostList data={data} url="ingiltere-vizesi" />
      </Layout>
    </>
  );
}
export async function getServerSideProps() {
  try {
    const res = await fetch(`${siteWebApiUrl}/api/v1/${siteWebApiId}/articles`);
    const { data } = await res.json();

    return { props: { data } };
  } catch (err) {
    return { props: {} };
  }
}
