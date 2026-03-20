import axios from "axios";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return Response.json(response.data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}