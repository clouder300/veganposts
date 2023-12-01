export async function onRequest(context) {
    const response = await fetch(context.params.url)
    return new Response(response.text())
}