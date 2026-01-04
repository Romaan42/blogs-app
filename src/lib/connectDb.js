import mongoose from "mongoose";

const connectDb = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("already connected");
      return;
    }
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDb;
