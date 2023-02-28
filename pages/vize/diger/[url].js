import Layout from "../../../components/Sablon";
import Post from "../../../components/Post";
import SEO from "../../../components/SEO";
import Breadcrumb from "../../../components/Breadcrumb";

const siteWebApiUrl = process.env.NEXT_PUBLIC_WEB_API_URL;
const token = process.env.NEXT_PUBLIC_WEB_API_TOKEN;
const siteWebApiId = process.env.NEXT_PUBLIC_WEB_API_ID;

const dbTable = "other";

const subPage = {
  active: true,
  url: "vize/diger",
  title: "Diğer Test Türleri",
};

export default function Url({ data }) {
  return (
    <>
      <Layout>
        <SEO meta={data} />
        <Breadcrumb title={data.title} subPage={subPage} />
        <Post data={data} table={dbTable} />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    `${siteWebApiUrl}/api/v1/${siteWebApiId}/${dbTable}s?token=${token}`
  );
  const { data } = await res.json();
  const paths = data.map((post) => ({ params: { url: post.url } }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `${siteWebApiUrl}/api/v1/${dbTable}/${context.params.url}?token=${token}`
  );
  const { data } = await res.json();

  if (data == "") return { notFound: true };

  return { props: { data }, revalidate: 900 };
}
