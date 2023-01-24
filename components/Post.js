import Image from "next/image";
import { hasCookie, setCookie } from "cookies-next";
import Breadcrumb from "./Breadcrumb";
import Date from "./Date";

const siteWebApiUrl = process.env.NEXT_PUBLIC_WEB_API_URL;

export default function Post({ data, table }) {
  if (!hasCookie("read_" + table + "_" + data.id)) {
    setCookie("read_" + table + "_" + data.id, true, { maxAge: 60 * 15 * 1 });
    const res = fetch(`${siteWebApiUrl}/api/v1/count/${table}/${data.id}`);
  }
  return (
    <div className="row justify-content-center">
      <div className=" mt-2 col-sm-12 col-md-12 col-lg-10 col-xl-9 col-xxl-8">
        <Breadcrumb title={data.title} />
        <h1>{data.title}</h1>
        <div>
          <span className="fw-bold"> Güncellenme Tarihi: </span>
          <Date dateString={data.updated_at} />
        </div>

        {data.image ? (
          <Image
            className="py-2"
            src={`/uploads/${data.image}`}
            alt={data.title}
            width={960}
            height={500}
            priority={true}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
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
