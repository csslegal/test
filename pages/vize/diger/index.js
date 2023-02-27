import Layout from "../../../components/Sablon";
import SEO from "../../../components/SEO";
import Breadcrumb from "../../../components/Breadcrumb";
import Slogan from "../../../components/Slogan";
import PostList from "../../../components/PostList";

const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE;

const siteWebApiUrl = process.env.NEXT_PUBLIC_WEB_API_URL;
const token = process.env.NEXT_PUBLIC_WEB_API_TOKEN;
const siteWebApiId = process.env.NEXT_PUBLIC_WEB_API_ID;

const pageTitle = "Diğer Türler";
const description = "İngiltere'de yaşamak, İngiltere'de çalışmak veya İngiltere'yi ziyaret etmek isteyen kişilerin farklı vize türleri mevcuttur.Bu vize türlerinin her biri farklı başvuru süreçlerine ve şartlara tabidir. Vize başvurusunda bulunmadan önce, başvuru yapmak istediğiniz vize türü hakkında ayrıntılı bilgi edinmek için iletişim kısmından bizlere ulaşabilirsiniz.";

const dbTable = "others";
const pathUrl = "diger";

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
export async function getStaticProps() {
  try {
    const res = await fetch(
      `${siteWebApiUrl}/api/v1/${siteWebApiId}/${dbTable}?token=${token}`
    );
    const { data } = await res.json();

    return { props: { data }, revalidate: 900 };
  } catch (err) {
    return { props: {}, revalidate: 900 };
  }
}
