export async function onRequest(context) {
    const { searchParams } = new URL(context.url)
    const url = decodeURI(searchParams.get('url'))

    const response = await fetch(url)
    return new Response(response.text())
}