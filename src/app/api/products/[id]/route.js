import axios from "axios";

export async function GET(request, { params }) {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${params.id}`);
    return Response.json(response.data);
  } catch (error) {
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  }
}