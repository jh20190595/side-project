export async function GET() {
    const content = `
    User-agent : *
    Allow : /

    Sitemap : https://howmuch-test.vercel.app/sitemap.xml
    `.trim();

    return new Response( content , {
        headers : {
            'Content-Type' : 'text/palin',
        },
    });
}
