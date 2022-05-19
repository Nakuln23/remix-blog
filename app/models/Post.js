import mongoose from "mongoose";
// model Post {
//     id      String   @id @default(uuid())
//     userId  String
//     user    User  @relation(fields: [userId], references: [id], onDelete: Cascade)
//     title   String
//     body    String
//     createdAt DateTime  @default(now())
//     updatedAt DateTime  @updatedAt
//   }
const PostSchema = new mongoose.Schema({
  userid: {
    type: String,
  },
  title: String,
  body: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Post = mongoose.model("Post", PostSchema);
export default Post;
