import Image from "next/image";
import Link from "next/link";
import Date from "./Date";

export default function PostList({ data, url }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  return (
    <>
      {data?.map((post, index) => (
        <div className="mt-2 col-sm-6 col-md-6 col-lg-4 col-xl-4" key={index}>
          <div className="card">
            {post.image ? (
              <Image
                src={`${post.image}`}
                alt={post.title}
                width={540}
                height={300}
                priority={true}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            ) : (
              <Image
                src={`${siteUrl}/uploads/test.webp`}
                alt={post.title}
                width={540}
                height={300}
                priority={true}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            )}

            <div className="card-body">
              <Link
                title={`${post.title}`} 
                href={`${siteUrl}/vize/${url}/${post.url}`}
              >
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
