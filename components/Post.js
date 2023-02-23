import Image from "next/image";
import { hasCookie, setCookie } from "cookies-next";
import Breadcrumb from "./Breadcrumb";
import Date from "./Date";

export default function Post({ data, table }) {
  const siteWebApiUrl = process.env.NEXT_PUBLIC_WEB_API_URL;
  const token = process.env.NEXT_PUBLIC_WEB_API_TOKEN;

  if (!hasCookie("read_" + table + "_" + data.id)) {
    setCookie("read_" + table + "_" + data.id, true, { maxAge: 60 * 15 * 1 });
    const res = fetch(
      `${siteWebApiUrl}/api/v1/count/${table}/${data.id}?token=${token}`
    );
  }
  return (
    <div className="justify-content-center">
      <div className="mt-2 col-sm-12 col-md-12 col-lg-10 col-xl-9 col-xxl-8">
        <Breadcrumb title={data.title} />

        <h1>{data.title}</h1>
        <div>
          <span className="fw-bold"> Güncellenme Tarihi: </span>
          <Date dateString={data.updated_at} />
        </div>

        {data.image ? (
          <div className="card">
          <Image
            className="py-2"
            src={`${data.image}`}
            alt={data.title}
            width={960}
            height={500}
            priority={true}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
          </div>
        ) : null}

        <div dangerouslySetInnerHTML={{ __html: data.content }}></div>

        <div className="row justify-content-between">
          <div className="col-5 text-start">
            <span className="fw-bold">Okunma sayısı: </span>
            {data.hit}
          </div>
          <div className="col-7 text-end">
            <span className="fw-bold"> Eklenme Tarihi: </span>
            <Date dateString={data.created_at} />
          </div>
        </div>
      </div>
    </div>
  );
}
