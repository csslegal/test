import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav({ categories }) {
  const router = useRouter();

  return (
    <>
      <div className="col-md-4 pt-4">

        <ul className="list-group list-group-flush">

          {categories?.map((category) => (

            <li key={category.id} className={router.asPath == category.slug ? "active list-group-item list-group-item-action" : "list-group-item list-group-item-action"}>
              <Link href={`${category.slug}`} className={router.asPath == category.slug ? "active nav-link" : "nav-link"}>{category.title}</Link>
            </li>

          ))}

        </ul>
        
      </div>
    </>
  );
}
