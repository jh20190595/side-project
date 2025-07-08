export async function GET() {
  const urls = [
    'https://amatda.vercel.app/',
    'https://amatda.vercel.app/notice',
    'https://amatda.vercel.app/policy',
    'https://amatda.vercel.app/about',
    'https://amatda.vercel.app/contact',
    'https://amatda.vercel.app/blog',
    'https://amatda.vercel.app/play/guess/snack',
    'https://amatda.vercel.app/play/guess/charactor',
    'https://amatda.vercel.app/play/top',
    'https://amatda.vercel.app/play/bottom',
    'https://amatda.vercel.app/play/cloth',
    'https://amatda.vercel.app/play/food',
    'https://amatda.vercel.app/game/cloth',
    'https://amatda.vercel.app/game/food',
    'https://amatda.vercel.app/game/snack',
    'https://amatda.vercel.app/game/charactor',
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
  </url>`
    )
    .join('\n')}
</urlset>`.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
