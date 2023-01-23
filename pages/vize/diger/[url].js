import Breadcrumb from "../../../components/Breadcrumb";
import Layout from "../../../components/Sablon";
import Post from "../../../components/Post";
import SEO from "../../../components/SEO";

const siteWebApiUrl = process.env.NEXT_PUBLIC_WEB_API_URL;
const siteWebApiId = process.env.NEXT_PUBLIC_WEB_API_ID;

const dbTable = "other";

export default function Url({ data }) {
  return (
    <>
      <Layout>
        <SEO meta={data} />
        <Breadcrumb title={data.title} />
        <Post data={data} table={dbTable} />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    `${siteWebApiUrl}/api/v1/${siteWebApiId}/${dbTable}s`
  );
  const { data } = await res.json();

  const paths = data.map((post) => ({
    params: { url: post.url },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `${siteWebApiUrl}/api/v1/${dbTable}/${context.params.url}`
  );
  const { data } = await res.json();
  return { props: { data } };
}
