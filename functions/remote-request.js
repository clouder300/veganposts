// Cloudflare Pages Function
export async function onRequest(context) {
    const { searchParams } = new URL(context.request.url)
    const url = searchParams.get('url')

    if (url.startsWith("https://vegpool.de") || url.startsWith("https://www.vegan.at")){
        const response = await fetch(url)
        const text = await response.text()
        return new Response(text)
    } else {
        return new Response("Fehler")
    }
    
}