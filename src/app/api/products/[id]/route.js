import axios from "axios";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    if (!id || isNaN(Number(id))) {
      return Response.json({ error: "Invalid product ID" }, { status: 400 });
    }

    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return Response.json(response.data);
  } catch (error) {
    console.error(`[API] Failed to fetch product ${error?.message}`);
    return Response.json(
      { error: "Product not found or unavailable." },
      { status: 500 }
    );
  }
}
