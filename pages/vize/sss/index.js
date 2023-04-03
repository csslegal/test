import { useState } from "react";
import Layout from "../../../components/Sablon";
import SEO from "../../../components/SEO";
import Breadcrumb from "../../../components/Breadcrumb";
import Slogan from "../../../components/Slogan";
import PostList from "../../../components/PostList";

const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE;

const siteWebApiUrl = process.env.NEXT_PUBLIC_WEB_API_URL;
const token = process.env.NEXT_PUBLIC_WEB_API_TOKEN;
const siteWebApiId = process.env.NEXT_PUBLIC_WEB_API_ID;

const pageTitle = "Sıkça Sorulan Sorular";
const description =
  "İngiltere öğrenci vizesi hakkında sıkça sorulan sorular ve yanıtlarını bulabilirsiniz. Daha fazla bilgi için iletişim kısmından bizlere ulaşabilirsiniz.";

const dbTable = "questions";
const pathUrl = "sss";

export default function Index({ data }) {
  const meta = {
    title: pageTitle + " - " + siteTitle,
    description: description,
    botIndex: process.env.NEXT_PUBLIC_SITE_INDEX,
    subPage: { active: false, url: "", title: "" },
  };

  const [page, setPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(data.length / postsPerPage);

  const nextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <>
      <Layout>
        <SEO meta={meta} />
        <Breadcrumb title={pageTitle} subPage={meta.subPage} />
        <Slogan title={pageTitle} description={description} />
        <PostList data={currentPosts} url={pathUrl} />

        <div className=" mt-4 btn-group" role="group" aria-label="">
          <button
            type="button"
            className="btn btn-lg btn-outline-primary"
            onClick={prevPage}
          >
            Önceki Sayfa
          </button>
          <button
            type="button"
            className="btn btn-lg btn-outline-primary"
            onClick={nextPage}
          >
            Sonraki Sayfa
          </button>
        </div>
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
