import axios from "axios";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit") || 20;
    const skip = searchParams.get("skip") || 0;
    const search = searchParams.get("q");
    const category = searchParams.get("category");

    let url;
    if (search) {
      url = `https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${skip}`;
    } else if (category) {
      url = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
    } else {
      url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    }

    const response = await axios.get(url);
    return Response.json(response.data); // ← .products না, পুরো data
  } catch (error) {
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  }
}