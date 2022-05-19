import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    //   required: true
  },
  passwordHash: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

const User = mongoose.model("User", UserSchema);
export default User;
