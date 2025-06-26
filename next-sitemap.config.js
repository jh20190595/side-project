export async function GET() {
  const urls = [
    'https://howmuch-test.vercel.app/',
    'https://howmuch-test.vercel.app/notice',
    'https://howmuch-test.vercel.app/game/cloth',
    'https://howmuch-test.vercel.app/game/snack',
    'https://howmuch-test.vercel.app/game/food',
    'https://howmuch-test.vercel.app/play/top',
    'https://howmuch-test.vercel.app/play/bottom',
    'https://howmuch-test.vercel.app/play/cloth',
    'https://howmuch-test.vercel.app/play/snack',
    'https://howmuch-test.vercel.app/play/guess/snack'
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
