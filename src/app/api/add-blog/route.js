import uploadOnCloud from "@/lib/cloudinary";
import connectDb from "@/lib/connectDb";
import Post from "@/models/addPostModel";

export async function POST(request) {
  try {
    // 1️⃣ DB connect
    await connectDb();

    // 2️⃣ FormData get
    const formData = await request.formData();

    const title = formData.get("title");
    const content = formData.get("content");
    const shortDesc = formData.get("shortDesc");
    const file = formData.get("file"); // <input name="file" />

    // 3️⃣ Image upload
    let imageUrl = "";

    if (file && file.size > 0) {
      imageUrl = await uploadOnCloud(file);
    }

    // 4️⃣ Save to DB
    const post = await Post.create({
      title,
      content,
      shortDesc,
      image: imageUrl,
    });

    // 5️⃣ Response
    return Response.json(
      {
        message: "Blog added successfully",
        post,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST ERROR:", error);

    return Response.json(
      {
        message: "Something went wrong",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
