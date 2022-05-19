import { Link, useLoaderData } from "remix";
import Post from "../../models/Post";
import { getUser } from "~/utils/session.server";

export const loader = async ({ request }) => {
  const user = await getUser(request);
  const data = {
    posts: await Post.find({
      userId: user.id,
    }),
  };
  return data;
};

function PostItems() {
  const { posts } = useLoaderData();
  return (
    <>
      <div className="page-header">
        <h1>Posts</h1>
        <Link to="/posts/new" className="btn">
          New Post
        </Link>
      </div>
      <ul className="posts-list">
        {posts?.map((post) => (
          <li key={post._id}>
            <Link to={post._id}>
              <h3>{post.title}</h3>
              {new Date(post.createdAt).toLocaleString()}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostItems;
