import Layout from "../components/Sablon";
import SEO from "../components/SEO";
import Breadcrumb from "../components/Breadcrumb";
import Slogan from "../components/Slogan";
import PostList from "../components/PostList";

const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE;

const siteWebApiUrl = process.env.NEXT_PUBLIC_WEB_API_URL;
const token = process.env.NEXT_PUBLIC_WEB_API_TOKEN;
const siteWebApiId = process.env.NEXT_PUBLIC_WEB_API_ID;

const description =
  "İngiltere öğrenci vizesi, İngiltere'de eğitim almak isteyen uluslararası öğrencilerin başvurabileceği bir vize türüdür. İngiltere'de bir eğitim kurumuna kaydolmak için öğrenci vizesi almak gerekmektedir. İngiltere öğrenci vizesi başvurusu yapmadan önce, başvuru yapmak istediğiniz eğitim kurumuna kayıt olmanız ve kabul edilmeniz gerekmektedir. Ayrıca, vize başvurusunda göstermeniz gereken belli bir miktarda finansal kaynağınız olmalıdır. Öğrenci vizesi başvurusu genellikle İngiltere'nin resmi vize başvuru merkezleri veya online olarak yapılmaktadır. Başvurunun incelenmesi ve sonucun açıklanması süreci genellikle birkaç hafta sürmektedir.";

const dbTable = "articles";
const pathUrl = "ingiltere-vizesi";

export default function Index({ data }) {
  const meta = {
    title: siteTitle,
    description: description,
    botIndex: process.env.NEXT_PUBLIC_SITE_INDEX,
  };

  return (
    <>
      <Layout>
        <SEO meta={meta} />
        <Breadcrumb title={meta.title} />
        <Slogan title={meta.title} description={description} />
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
