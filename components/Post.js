import Date from "./Date";
import { hasCookie, setCookie } from "cookies-next";

export default function Post({ data, table }) {
  const siteWebApiUrl = process.env.NEXT_PUBLIC_WEB_API_URL;

  if (!hasCookie("read_" + table + "_" + data.id)) {
    setCookie("read_" + table + "_" + data.id, true, { maxAge: 60 * 15 * 1 });
    const res = fetch(`${siteWebApiUrl}/api/v1/count/${table}/${data.id}`);
  }

  return (
    <div className="row justify-content-center">
      <div className="col-xl-9">
        <Breadcrumb title={data.title} />

        <div className="card border-0">
          <div className="card-body p-2">
            <h1>{data.title}</h1>
            <div>
              <span className="fw-bold"> Güncellenme Tarihi: </span>
              <Date dateString={data.updated_at} />
            </div>

            <div dangerouslySetInnerHTML={{ __html: data.content }}></div>

            <div className="float-start">
              <span className="fw-bold">Okunma sayısı: </span>
              {data.hit}
            </div>
            <div className="float-end">
              <span className="fw-bold"> Eklenme Tarihi: </span>
              <Date dateString={data.created_at} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
