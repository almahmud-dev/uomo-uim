import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return Response.json(response.data.products);
  } catch (error) {
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
