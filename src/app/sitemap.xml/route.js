// app/sitemap.xml/route.js

export async function GET() {
  const urls = [
    'https://howmuchh.vercel.app/',
    'https://howmuchh.vercel.app/notice',
    'https://howmuchh.vercel.app/policy',
    'https://howmuchh.vercel.app/about',
    'https://howmuchh.vercel.app/contact',
    'https://howmuchh.vercel.app/blog',
    'https://howmuchh.vercel.app/play/guess/snack',
    'https://howmuchh.vercel.app/play/guess/charactor',
    'https://howmuchh.vercel.app/play/top',
    'https://howmuchh.vercel.app/play/bottom',
    'https://howmuchh.vercel.app/play/cloth',
    'https://howmuchh.vercel.app/play/food',
    'https://howmuchh.vercel.app/game/cloth',
    'https://howmuchh.vercel.app/game/food',
    'https://howmuchh.vercel.app/game/snack',
    'https://howmuchh.vercel.app/game/charactor'
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
      .map(
        (url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  `
      )
      .join('\n')}
</urlset>`.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
