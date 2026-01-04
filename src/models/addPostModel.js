import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  shortDesc: String,
  content: String,
  image: String,
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
