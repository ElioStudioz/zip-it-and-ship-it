export default async () => new Response("<h1>Hello world</h1>", {
  headers: {
    "content-type": "text/html"
  }
})
