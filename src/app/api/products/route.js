import axios from "axios";

const BASE_URL = "https://dummyjson.com/products";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit") || 20;
    const skip = searchParams.get("skip") || 0;
    const search = searchParams.get("q");
    const category = searchParams.get("category");

    let url;
    if (search) {
      url = `${BASE_URL}/search?q=${search}&limit=${limit}&skip=${skip}`;
    } else if (category) {
      url = `${BASE_URL}/category/${category}?limit=${limit}&skip=${skip}`;
    } else {
      url = `${BASE_URL}?limit=${limit}&skip=${skip}`;
    }

    const response = await axios.get(url);
    // Returns full product data including pagination info
    return Response.json(response.data);
  } catch (error) {
    console.error("[API] Failed to fetch products:", error?.message);
    return Response.json(
      { error: "Failed to fetch products. Please try again." },
      { status: 500 }
    );
  }
}
