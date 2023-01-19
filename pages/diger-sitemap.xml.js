const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const siteWebApiUrl = process.env.NEXT_PUBLIC_WEB_API_URL;
const siteWebApiId = process.env.NEXT_PUBLIC_WEB_API_ID;

export default function generateSiteMap(data) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
        <loc>${siteUrl}/vize/diger</loc>
     </url>
     ${data
       .map(({ url, created_at }) => {
         return `<url>
        <loc>${siteUrl}/vize/diger/${url}</loc>
        <lastmod>${created_at.substr(0, 10)}</lastmod>
      </url>`;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  try {
    // We make an API call to gather the URLs for our site
    const request = await fetch(
      siteWebApiUrl + "/api/v1/" + siteWebApiId + "/others"
    );
    const { data } = await request.json();
    const sitemap = generateSiteMap(data);

    res.setHeader("Content-Type", "text/xml");
    // we send the XML to the browser
    res.write(sitemap);
    res.end();
  } catch (err) {
    const sitemap = generateSiteMap([]);
    res.setHeader("Content-Type", "text/xml");
    // we send the XML to the browser
    res.write(sitemap);
    res.end();
  }

  return { props: {} };
}
