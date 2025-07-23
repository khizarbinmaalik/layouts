export default async function GET() {
  return new Response(
    JSON.stringify({
      message: "Hello from the server!",
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}