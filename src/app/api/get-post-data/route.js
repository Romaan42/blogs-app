import connectDb from "@/lib/connectDb";
import Post from "@/models/addPostModel";

export const GET = async () => {
  try {
    await connectDb();

    const data = await Post.find();

    return Response.json(
      {
        posts: data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return Response.json(
      { message: "something went wrong!" },
      {
        status: 400,
      }
    );
  }
};
