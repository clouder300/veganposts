// Cloudflare Pages Function
// Wenn man wegen CORS nicht direkt per JS Daten von einer Seite holen darf, muss das Backend das für uns machen
export async function onRequest(context) {
    const { searchParams } = new URL(context.request.url)
    const url = searchParams.get('url')

    if (url.startsWith("https://vegpool.de") || url.startsWith("https://www.vegan.at")){
        return await fetch(url, { signal: AbortSignal.timeout(5000) })
    } else {
        return new Response("Fehler", {status: 400})
    }
}

// https://developers.cloudflare.com/pages/platform/functions/get-started/
// https://developers.cloudflare.com/workers/platform/pricing/
// https://developers.cloudflare.com/pages/platform/functions/local-development/
// https://community.cloudflare.com/t/parse-url-query-strings-with-cloudflare-workers/90286/2
// https://developers.cloudflare.com/workers/examples/fetch-html/