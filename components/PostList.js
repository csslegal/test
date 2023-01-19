import Image from "next/image";
import Link from "next/link";

import Date from "./Date";

export default function PostList({ data, url }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <>
      {data?.map((post) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={post.id}>
          <div className="card mb-4">
            {post.image?(
              <Image
              src={`${siteUrl}/uploads/${post.image}`}
              alt={post.title}
              width={520}
              height={200}
              priority={true}
              className="img-fluid"
            />
            ):(
              <Image
              src={`${siteUrl}/uploads/test.webp`}
              alt={post.title}
              width={450}
              height={200}
              className="img-fluid"
            />
            )}
            
            <div className="card-body">
              <Link href={`${siteUrl}/vize/${url}/${post.url}`}>
                <h2>{post.title}</h2>
              </Link>
              <p className="card-text">
                <small className="text-muted">
                  Son güncelleme: <Date dateString={post.created_at} />
                </small>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
