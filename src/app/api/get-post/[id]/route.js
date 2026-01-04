import connectDb from "@/lib/connectDb";
import Post from "@/models/addPostModel";

export async function GET(_, { params }) {
  try {
    await connectDb();
    const { id } = await params;

    const posts = await Post.findById(id);
    if (!posts) {
      return Response.json({ error: "Post not found" }, { status: 404 });
    }
    return Response.json({ posts }, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch post data" },
      { status: 500 }
    );
  }
}
